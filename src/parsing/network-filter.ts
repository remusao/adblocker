import * as punycode from 'punycode';
import { RequestType } from '../request';
import {
  clearBit,
  createFuzzySignature,
  fastHash,
  fastStartsWith,
  fastStartsWithFrom,
  getBit,
  hasUnicode,
  setBit,
  tokenize,
  tokenizeFilter,
} from '../utils';
import IFilter from './interface';

const TOKENS_BUFFER = new Uint32Array(200);

/**
 * Masks used to store options of network filters in a bitmask.
 */
export const enum NETWORK_FILTER_MASK {
  // Content Policy Type
  fromImage = 1 << 0,
  fromMedia = 1 << 1,
  fromObject = 1 << 2,
  fromOther = 1 << 3,
  fromPing = 1 << 4,
  fromScript = 1 << 5,
  fromStylesheet = 1 << 6,
  fromSubdocument = 1 << 7,
  fromWebsocket = 1 << 8, // e.g.: ws, wss
  fromXmlHttpRequest = 1 << 9,
  fromFont = 1 << 10,
  fromHttp = 1 << 11,
  fromHttps = 1 << 12,
  isImportant = 1 << 13,
  matchCase = 1 << 14,
  fuzzyMatch = 1 << 15,

  // Kind of patterns
  thirdParty = 1 << 16,
  firstParty = 1 << 17,
  isRegex = 1 << 18,
  isLeftAnchor = 1 << 19,
  isRightAnchor = 1 << 20,
  isHostnameAnchor = 1 << 21,
  isException = 1 << 22,
  isCSP = 1 << 23,
}

/**
 * Mask used when a network filter can be applied on any content type.
 */
const FROM_ANY: number =
  NETWORK_FILTER_MASK.fromFont |
  NETWORK_FILTER_MASK.fromImage |
  NETWORK_FILTER_MASK.fromMedia |
  NETWORK_FILTER_MASK.fromObject |
  NETWORK_FILTER_MASK.fromOther |
  NETWORK_FILTER_MASK.fromPing |
  NETWORK_FILTER_MASK.fromScript |
  NETWORK_FILTER_MASK.fromStylesheet |
  NETWORK_FILTER_MASK.fromSubdocument |
  NETWORK_FILTER_MASK.fromWebsocket |
  NETWORK_FILTER_MASK.fromXmlHttpRequest;

/**
 * Map content type value to mask the corresponding mask.
 * ref: https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIContentPolicy
 */
const CPT_TO_MASK: {
  [s: number]: number;
} = {
  [RequestType.other]: NETWORK_FILTER_MASK.fromOther,
  [RequestType.script]: NETWORK_FILTER_MASK.fromScript,
  [RequestType.image]: NETWORK_FILTER_MASK.fromImage,
  [RequestType.stylesheet]: NETWORK_FILTER_MASK.fromStylesheet,
  [RequestType.object]: NETWORK_FILTER_MASK.fromObject,
  [RequestType.subdocument]: NETWORK_FILTER_MASK.fromSubdocument,
  [RequestType.ping]: NETWORK_FILTER_MASK.fromPing,
  [RequestType.beacon]: NETWORK_FILTER_MASK.fromPing,
  [RequestType.xmlhttprequest]: NETWORK_FILTER_MASK.fromXmlHttpRequest,
  [RequestType.font]: NETWORK_FILTER_MASK.fromFont,
  [RequestType.media]: NETWORK_FILTER_MASK.fromMedia,
  [RequestType.websocket]: NETWORK_FILTER_MASK.fromWebsocket,
  [RequestType.dtd]: NETWORK_FILTER_MASK.fromOther,
  [RequestType.fetch]: NETWORK_FILTER_MASK.fromOther,
  [RequestType.xlst]: NETWORK_FILTER_MASK.fromOther,
};

function computeFilterId(
  csp: string | undefined,
  mask: number,
  filter: string | undefined,
  hostname: string | undefined,
  optDomains: Uint32Array | undefined,
  optNotDomains: Uint32Array | undefined,
): number {
  let hash = (5408 * 33) ^ mask;

  if (csp !== undefined) {
    for (let i = 0; i < csp.length; i += 1) {
      hash = (hash * 33) ^ csp.charCodeAt(i);
    }
  }

  if (optDomains !== undefined) {
    for (let i = 0; i < optDomains.length; i += 1) {
      hash = (hash * 33) ^ optDomains[i];
    }
  }

  if (optNotDomains !== undefined) {
    for (let i = 0; i < optNotDomains.length; i += 1) {
      hash = (hash * 33) ^ optNotDomains[i];
    }
  }

  if (filter !== undefined) {
    for (let i = 0; i < filter.length; i += 1) {
      hash = (hash * 33) ^ filter.charCodeAt(i);
    }
  }

  if (hostname !== undefined) {
    for (let i = 0; i < hostname.length; i += 1) {
      hash = (hash * 33) ^ hostname.charCodeAt(i);
    }
  }

  return hash >>> 0;
}

const SEPARATOR = /[/^*]/;

/**
 * Compiles a filter pattern to a regex. This is only performed *lazily* for
 * filters containing at least a * or ^ symbol. Because Regexes are expansive,
 * we try to convert some patterns to plain filters.
 */
function compileRegex(filterStr: string, isRightAnchor: boolean, isLeftAnchor: boolean): RegExp {
  let filter = filterStr;

  // Escape special regex characters: |.$+?{}()[]\
  filter = filter.replace(/([|.$+?{}()[\]\\])/g, '\\$1');

  // * can match anything
  filter = filter.replace(/\*/g, '.*');
  // ^ can match any separator or the end of the pattern
  filter = filter.replace(/\^/g, '(?:[^\\w\\d_.%-]|$)');

  // Should match end of url
  if (isRightAnchor) {
    filter = `${filter}$`;
  }

  if (isLeftAnchor) {
    filter = `^${filter}`;
  }

  return new RegExp(filter);
}

const EMPTY_ARRAY = new Uint32Array([]);
const MATCH_ALL = new RegExp('');

// TODO:
// 1. Options not supported yet:
//  - badfilter
//  - inline-script
//  - popup
//  - popunder
//  - generichide
//  - genericblock
// 2. Replace `split` with `substr`
export class NetworkFilter implements IFilter {
  public readonly mask: number;
  public readonly filter?: string;
  public readonly optDomains?: Uint32Array;
  public readonly optNotDomains?: Uint32Array;
  public readonly redirect?: string;
  public readonly hostname?: string;
  public readonly csp?: string;

  // Set only in debug mode
  public rawLine?: string;

  public id?: number;
  private fuzzySignature?: Uint32Array;
  private regex?: RegExp;
  private optimized: boolean = false;

  constructor({
    csp,
    filter,
    hostname,
    id,
    mask,
    optDomains,
    optNotDomains,
    rawLine,
    redirect,
    regex,
  }: { mask: number; regex?: RegExp } & Partial<NetworkFilter>) {
    this.csp = csp;
    this.filter = filter;
    this.hostname = hostname;
    this.id = id;
    this.mask = mask;
    this.optDomains = optDomains;
    this.optNotDomains = optNotDomains;
    this.rawLine = rawLine;
    this.redirect = redirect;
    this.regex = regex;
  }

  public isCosmeticFilter() {
    return false;
  }
  public isNetworkFilter() {
    return true;
  }

  /**
   * Tries to recreate the original representation of the filter (adblock
   * syntax) from the internal representation.
   */
  public toString() {
    if (this.rawLine !== undefined) {
      return this.rawLine;
    }

    let filter = '';

    if (this.isException()) {
      filter += '@@';
    }
    if (this.isHostnameAnchor()) {
      filter += '||';
    }
    if (this.isLeftAnchor()) {
      filter += '|';
    }

    if (this.hasHostname()) {
      filter += this.getHostname();
      filter += '^';
    }

    if (!this.isRegex()) {
      filter += this.getFilter();
    } else {
      // Visualize the compiled regex
      filter += this.getRegex().source;
    }

    // Options
    const options: string[] = [];

    if (!this.fromAny()) {
      if (this.isFuzzy()) {
        options.push('fuzzy');
      }
      if (this.fromImage()) {
        options.push('image');
      }
      if (this.fromMedia()) {
        options.push('media');
      }
      if (this.fromObject()) {
        options.push('object');
      }
      if (this.fromOther()) {
        options.push('other');
      }
      if (this.fromPing()) {
        options.push('ping');
      }
      if (this.fromScript()) {
        options.push('script');
      }
      if (this.fromStylesheet()) {
        options.push('stylesheet');
      }
      if (this.fromSubdocument()) {
        options.push('subdocument');
      }
      if (this.fromWebsocket()) {
        options.push('websocket');
      }
      if (this.fromXmlHttpRequest()) {
        options.push('xmlhttprequest');
      }
      if (this.fromFont()) {
        options.push('font');
      }
    }

    if (this.isImportant()) {
      options.push('important');
    }
    if (this.isRedirect()) {
      options.push(`redirect=${this.getRedirect()}`);
    }
    if (this.firstParty() !== this.thirdParty()) {
      if (this.firstParty()) {
        options.push('first-party');
      }
      if (this.thirdParty()) {
        options.push('third-party');
      }
    }

    // if (this.hasOptDomains() || this.hasOptNotDomains()) {
    //   const domains = [...this.getOptDomains()];
    //   this.getOptNotDomains().forEach((nd) => domains.push(`~${nd}`));
    //   options.push(`domain=${domains.join('|')}`);
    // }

    if (options.length > 0) {
      filter += `$${options.join(',')}`;
    }

    if (this.isRightAnchor()) {
      filter += '|';
    }

    return filter;
  }

  // Public API (Read-Only)
  public getId(): number {
    if (this.id === undefined) {
      this.id = computeFilterId(
        this.csp,
        this.mask,
        this.filter,
        this.hostname,
        this.optDomains,
        this.optNotDomains,
      );
    }
    return this.id;
  }

  public hasFilter(): boolean {
    return this.filter !== undefined;
  }

  public hasOptNotDomains(): boolean {
    return this.optNotDomains !== undefined;
  }

  public getNumberOfOptNotDomains(): number {
    if (this.optNotDomains !== undefined) {
      return this.optNotDomains.length;
    }
    return 0;
  }

  public getOptNotDomains(): Uint32Array {
    this.optimize();
    return this.optNotDomains || EMPTY_ARRAY;
  }

  public getNumberOfOptDomains(): number {
    if (this.optDomains !== undefined) {
      return this.optDomains.length;
    }
    return 0;
  }

  public hasOptDomains(): boolean {
    return this.optDomains !== undefined;
  }

  public getOptDomains(): Uint32Array {
    this.optimize();
    return this.optDomains || EMPTY_ARRAY;
  }

  public getMask(): number {
    return this.mask;
  }

  public getCptMask(): number {
    return this.getMask() & FROM_ANY;
  }

  public isRedirect(): boolean {
    return this.redirect !== undefined;
  }

  public getRedirect(): string {
    return this.redirect || '';
  }

  public hasHostname(): boolean {
    return this.hostname !== undefined;
  }

  public getHostname(): string {
    return this.hostname || '';
  }

  public getFilter(): string {
    return this.filter || '';
  }

  public getRegex(): RegExp {
    this.optimize();
    return this.regex || MATCH_ALL;
  }

  public getFuzzySignature(): Uint32Array {
    this.optimize();
    return this.fuzzySignature || EMPTY_ARRAY;
  }

  public getTokens(): Uint32Array[] {
    let tokensBufferIndex = 0;

    // If there is only one domain and no domain negation, we also use this
    // domain as a token.
    if (
      this.optDomains !== undefined &&
      this.optNotDomains === undefined &&
      this.optDomains.length === 1
    ) {
      TOKENS_BUFFER[tokensBufferIndex] = this.optDomains[0];
      tokensBufferIndex += 1;
    }

    // Get tokens from filter
    if (this.filter !== undefined) {
      const skipLastToken = this.isPlain() && !this.isRightAnchor() && !this.isFuzzy();
      const skipFirstToken = this.isRightAnchor();
      const filterTokens = tokenizeFilter(this.filter, skipFirstToken, skipLastToken);
      TOKENS_BUFFER.set(filterTokens, tokensBufferIndex);
      tokensBufferIndex += filterTokens.length;
    }

    // Append tokens from hostname, if any
    if (this.hostname !== undefined) {
      const hostnameTokens = tokenize(this.hostname);
      TOKENS_BUFFER.set(hostnameTokens, tokensBufferIndex);
      tokensBufferIndex += hostnameTokens.length;
    }

    // If we got no tokens for the filter/hostname part, then we will dispatch
    // this filter in multiple buckets based on the domains option.
    if (
      tokensBufferIndex === 0 &&
      this.optDomains !== undefined &&
      this.optNotDomains === undefined
    ) {
      return [...this.optDomains].map((d) => new Uint32Array([d]));
    }

    // Add optional token for protocol
    if (this.fromHttp() && !this.fromHttps()) {
      TOKENS_BUFFER[tokensBufferIndex] = fastHash('http');
      tokensBufferIndex += 1;
    } else if (this.fromHttps() && !this.fromHttp()) {
      TOKENS_BUFFER[tokensBufferIndex] = fastHash('https');
      tokensBufferIndex += 1;
    }

    return [TOKENS_BUFFER.slice(0, tokensBufferIndex)];
  }

  /**
   * Check if this filter should apply to a request with this content type.
   */
  public isCptAllowed(cpt: RequestType): boolean {
    const mask = CPT_TO_MASK[cpt];
    if (mask !== undefined) {
      return getBit(this.mask, mask);
    }

    // If content type is not supported (or not specified), we return `true`
    // only if the filter does not specify any resource type.
    return this.fromAny();
  }

  public isFuzzy() {
    return getBit(this.mask, NETWORK_FILTER_MASK.fuzzyMatch);
  }

  public isException() {
    return getBit(this.mask, NETWORK_FILTER_MASK.isException);
  }

  public isHostnameAnchor() {
    return getBit(this.mask, NETWORK_FILTER_MASK.isHostnameAnchor);
  }

  public isRightAnchor() {
    return getBit(this.mask, NETWORK_FILTER_MASK.isRightAnchor);
  }

  public isLeftAnchor() {
    return getBit(this.mask, NETWORK_FILTER_MASK.isLeftAnchor);
  }

  public matchCase() {
    return getBit(this.mask, NETWORK_FILTER_MASK.matchCase);
  }

  public isImportant() {
    return getBit(this.mask, NETWORK_FILTER_MASK.isImportant);
  }

  public isRegex() {
    return getBit(this.mask, NETWORK_FILTER_MASK.isRegex);
  }

  public isPlain() {
    return !getBit(this.mask, NETWORK_FILTER_MASK.isRegex);
  }

  public isCSP() {
    return getBit(this.mask, NETWORK_FILTER_MASK.isCSP);
  }

  public fromAny() {
    return this.getCptMask() === FROM_ANY;
  }

  public thirdParty() {
    return getBit(this.mask, NETWORK_FILTER_MASK.thirdParty);
  }

  public firstParty() {
    return getBit(this.mask, NETWORK_FILTER_MASK.firstParty);
  }

  public fromImage() {
    return getBit(this.mask, NETWORK_FILTER_MASK.fromImage);
  }

  public fromMedia() {
    return getBit(this.mask, NETWORK_FILTER_MASK.fromMedia);
  }

  public fromObject() {
    return getBit(this.mask, NETWORK_FILTER_MASK.fromObject);
  }

  public fromOther() {
    return getBit(this.mask, NETWORK_FILTER_MASK.fromOther);
  }

  public fromPing() {
    return getBit(this.mask, NETWORK_FILTER_MASK.fromPing);
  }

  public fromScript() {
    return getBit(this.mask, NETWORK_FILTER_MASK.fromScript);
  }

  public fromStylesheet() {
    return getBit(this.mask, NETWORK_FILTER_MASK.fromStylesheet);
  }

  public fromSubdocument() {
    return getBit(this.mask, NETWORK_FILTER_MASK.fromSubdocument);
  }

  public fromWebsocket() {
    return getBit(this.mask, NETWORK_FILTER_MASK.fromWebsocket);
  }

  public fromHttp() {
    return getBit(this.mask, NETWORK_FILTER_MASK.fromHttp);
  }

  public fromHttps() {
    return getBit(this.mask, NETWORK_FILTER_MASK.fromHttps);
  }

  public fromXmlHttpRequest() {
    return getBit(this.mask, NETWORK_FILTER_MASK.fromXmlHttpRequest);
  }

  public fromFont() {
    return getBit(this.mask, NETWORK_FILTER_MASK.fromFont);
  }

  private optimize() {
    if (this.optimized === false) {
      this.optimized = true;
      if (this.optNotDomains !== undefined) {
        this.optNotDomains.sort();
      }
      if (this.optDomains !== undefined) {
        this.optDomains.sort();
      }
      if (this.filter !== undefined && this.regex === undefined && this.isRegex()) {
        this.regex = compileRegex(this.filter, this.isRightAnchor(), this.isLeftAnchor());
      }
      if (this.filter !== undefined && this.isFuzzy()) {
        this.fuzzySignature = createFuzzySignature(this.filter);
      }
    }
  }
}

// ---------------------------------------------------------------------------
// Filter parsing
// ---------------------------------------------------------------------------

function setNetworkMask(mask: number, m: number, value: boolean): number {
  if (value === true) {
    return setBit(mask, m);
  }

  return clearBit(mask, m);
}

/**
 * Check if the sub-string contained between the indices start and end is a
 * regex filter (it contains a '*' or '^' char). Here we are limited by the
 * capability of javascript to check the presence of a pattern between two
 * indices (same for Regex...).
 * // TODO - we could use sticky regex here
 */
function checkIsRegex(filter: string, start: number, end: number): boolean {
  const starIndex = filter.indexOf('*', start);
  const separatorIndex = filter.indexOf('^', start);
  return (starIndex !== -1 && starIndex < end) || (separatorIndex !== -1 && separatorIndex < end);
}

/**
 * Parse a line containing a network filter into a NetworkFilter object.
 * This must be *very* efficient.
 */
export function parseNetworkFilter(rawLine: string): NetworkFilter | null {
  const line: string = rawLine;

  // Represent options as a bitmask
  let mask: number =
    NETWORK_FILTER_MASK.thirdParty |
    NETWORK_FILTER_MASK.firstParty |
    NETWORK_FILTER_MASK.fromHttps |
    NETWORK_FILTER_MASK.fromHttp;

  // Temporary masks for positive (e.g.: $script) and negative (e.g.: $~script)
  // content type options.
  let cptMaskPositive: number = 0;
  let cptMaskNegative: number = FROM_ANY;

  let hostname: string | undefined;

  let optDomains: Uint32Array | undefined;
  let optNotDomains: Uint32Array | undefined;
  let redirect: string | undefined;
  let csp: string | undefined;

  // Start parsing
  let filterIndexStart: number = 0;
  let filterIndexEnd: number = line.length;

  // @@filter == Exception
  if (fastStartsWith(line, '@@')) {
    filterIndexStart += 2;
    mask = setBit(mask, NETWORK_FILTER_MASK.isException);
  }

  // filter$options == Options
  // ^     ^
  // |     |
  // |     optionsIndex
  // filterIndexStart
  const optionsIndex: number = line.lastIndexOf('$');
  if (optionsIndex !== -1) {
    // Parse options and set flags
    filterIndexEnd = optionsIndex;

    // --------------------------------------------------------------------- //
    // parseOptions
    // TODO: This could be implemented without string copy,
    // using indices, like in main parsing functions.
    const rawOptions = line.slice(optionsIndex + 1);
    const options = rawOptions.split(',');
    for (let i = 0; i < options.length; i += 1) {
      const rawOption = options[i];
      let negation = false;
      let option = rawOption;

      // Check for negation: ~option
      if (fastStartsWith(option, '~')) {
        negation = true;
        option = option.slice(1);
      } else {
        negation = false;
      }

      // Check for options: option=value1|value2
      let optionValue: string = '';
      if (option.indexOf('=') !== -1) {
        const optionAndValues = option.split('=', 2);
        option = optionAndValues[0];
        optionValue = optionAndValues[1];
      }

      switch (option) {
        case 'domain': {
          const optionValues: string[] = optionValue.split('|');
          const optDomainsArray: number[] = [];
          const optNotDomainsArray: number[] = [];

          for (let j = 0; j < optionValues.length; j += 1) {
            const value: string = optionValues[j];
            if (value) {
              if (fastStartsWith(value, '~')) {
                optNotDomainsArray.push(fastHash(value.slice(1)));
              } else {
                optDomainsArray.push(fastHash(value));
              }
            }
          }

          if (optDomainsArray.length > 0) {
            optDomains = new Uint32Array(optDomainsArray);
          }

          if (optNotDomainsArray.length > 0) {
            optNotDomains = new Uint32Array(optNotDomainsArray);
          }

          break;
        }
        case 'badfilter':
          // TODO - how to handle those, if we start in mask, then the id will
          // differ from the other filter. We could keep original line. How do
          // to eliminate thos efficiently? They will probably endup in the same
          // bucket, so maybe we could do that on a per-bucket basis?
          return null;
        case 'important':
          // Note: `negation` should always be `false` here.
          if (negation) {
            return null;
          }

          mask = setBit(mask, NETWORK_FILTER_MASK.isImportant);
          break;
        case 'match-case':
          // Note: `negation` should always be `false` here.
          if (negation) {
            return null;
          }

          mask = setBit(mask, NETWORK_FILTER_MASK.matchCase);
          break;
        case 'third-party':
          if (negation) {
            // ~third-party means we should clear the flag
            mask = clearBit(mask, NETWORK_FILTER_MASK.thirdParty);
          } else {
            // third-party means ~first-party
            mask = clearBit(mask, NETWORK_FILTER_MASK.firstParty);
          }
          break;
        case 'first-party':
          if (negation) {
            // ~first-party means we should clear the flag
            mask = clearBit(mask, NETWORK_FILTER_MASK.firstParty);
          } else {
            // first-party means ~third-party
            mask = clearBit(mask, NETWORK_FILTER_MASK.thirdParty);
          }
          break;
        case 'fuzzy':
          mask = setBit(mask, NETWORK_FILTER_MASK.fuzzyMatch);
          break;
        case 'collapse':
          break;
        case 'redirect':
          // Negation of redirection doesn't make sense
          if (negation) {
            return null;
          }

          // Ignore this filter if no redirection resource is specified
          if (optionValue.length === 0) {
            return null;
          }

          redirect = optionValue;
          break;
        case 'csp':
          mask = setBit(mask, NETWORK_FILTER_MASK.isCSP);
          if (optionValue.length > 0) {
            csp = optionValue;
          }
          break;
        default: {
          // Handle content type options separatly
          let optionMask: number = 0;
          switch (option) {
            case 'image':
              optionMask = NETWORK_FILTER_MASK.fromImage;
              break;
            case 'media':
              optionMask = NETWORK_FILTER_MASK.fromMedia;
              break;
            case 'object':
              optionMask = NETWORK_FILTER_MASK.fromObject;
              break;
            case 'object-subrequest':
              optionMask = NETWORK_FILTER_MASK.fromObject;
              break;
            case 'other':
              optionMask = NETWORK_FILTER_MASK.fromOther;
              break;
            case 'ping':
            case 'beacon':
              optionMask = NETWORK_FILTER_MASK.fromPing;
              break;
            case 'script':
              optionMask = NETWORK_FILTER_MASK.fromScript;
              break;
            case 'stylesheet':
              optionMask = NETWORK_FILTER_MASK.fromStylesheet;
              break;
            case 'subdocument':
              optionMask = NETWORK_FILTER_MASK.fromSubdocument;
              break;
            case 'xmlhttprequest':
            case 'xhr':
              optionMask = NETWORK_FILTER_MASK.fromXmlHttpRequest;
              break;
            case 'websocket':
              optionMask = NETWORK_FILTER_MASK.fromWebsocket;
              break;
            case 'font':
              optionMask = NETWORK_FILTER_MASK.fromFont;
              break;
            default:
              return null;
          }

          // Disable this filter if we don't support all the options
          if (optionMask === 0) {
            return null;
          }

          // We got a valid cpt option, update mask
          if (negation) {
            cptMaskNegative = clearBit(cptMaskNegative, optionMask);
          } else {
            cptMaskPositive = setBit(cptMaskPositive, optionMask);
          }
          break;
        }
      }
    }
    // End of option parsing
    // --------------------------------------------------------------------- //
  }

  if (cptMaskPositive === 0) {
    mask |= cptMaskNegative;
  } else if (cptMaskNegative === FROM_ANY) {
    mask |= cptMaskPositive;
  } else {
    mask |= cptMaskPositive & cptMaskNegative;
  }

  // Identify kind of pattern

  // Deal with hostname pattern
  if (line[filterIndexEnd - 1] === '|') {
    mask = setBit(mask, NETWORK_FILTER_MASK.isRightAnchor);
    filterIndexEnd -= 1;
  }

  if (fastStartsWithFrom(line, '||', filterIndexStart)) {
    mask = setBit(mask, NETWORK_FILTER_MASK.isHostnameAnchor);
    filterIndexStart += 2;
  } else if (line[filterIndexStart] === '|') {
    mask = setBit(mask, NETWORK_FILTER_MASK.isLeftAnchor);
    filterIndexStart += 1;
  }

  const isRegex = checkIsRegex(line, filterIndexStart, filterIndexEnd);
  mask = setNetworkMask(mask, NETWORK_FILTER_MASK.isRegex, isRegex);

  if (getBit(mask, NETWORK_FILTER_MASK.isHostnameAnchor)) {
    if (isRegex) {
      // Split at the first '/', '*' or '^' character to get the hostname
      // and then the pattern.
      // TODO - this could be made more efficient if we could match between two
      // indices. Once again, we have to do more work than is really needed.
      const firstSeparator = line.search(SEPARATOR);

      if (firstSeparator !== -1) {
        hostname = line.slice(filterIndexStart, firstSeparator);
        filterIndexStart = firstSeparator;

        // If the only symbol remaining for the selector is '^' then ignore it
        if (filterIndexEnd - filterIndexStart === 1 && line[filterIndexStart] === '^') {
          mask = clearBit(mask, NETWORK_FILTER_MASK.isRegex);
          filterIndexStart = filterIndexEnd;
        } else {
          mask = setNetworkMask(mask, NETWORK_FILTER_MASK.isLeftAnchor, true);
          mask = setNetworkMask(
            mask,
            NETWORK_FILTER_MASK.isRegex,
            checkIsRegex(line, filterIndexStart, filterIndexEnd),
          );
        }
      }
    } else {
      // Look for next /
      const slashIndex = line.indexOf('/', filterIndexStart);
      if (slashIndex !== -1) {
        hostname = line.slice(filterIndexStart, slashIndex);
        filterIndexStart = slashIndex;
        mask = setBit(mask, NETWORK_FILTER_MASK.isLeftAnchor);
      } else {
        hostname = line.slice(filterIndexStart, filterIndexEnd);
        filterIndexStart = filterIndexEnd;
      }
    }
  }

  // Remove trailing '*'
  if (filterIndexEnd - filterIndexStart > 0 && line[filterIndexEnd - 1] === '*') {
    filterIndexEnd -= 1;
  }

  // Remove leading '*' if the filter is not hostname anchored.
  if (filterIndexEnd - filterIndexStart > 0 && line[filterIndexStart] === '*') {
    mask = clearBit(mask, NETWORK_FILTER_MASK.isLeftAnchor);
    filterIndexStart += 1;
  }

  // Transform filters on protocol (http, https, ws)
  if (getBit(mask, NETWORK_FILTER_MASK.isLeftAnchor)) {
    if (
      filterIndexEnd - filterIndexStart === 5 &&
      fastStartsWithFrom(line, 'ws://', filterIndexStart)
    ) {
      mask = setBit(mask, NETWORK_FILTER_MASK.fromWebsocket);
      mask = clearBit(mask, NETWORK_FILTER_MASK.isLeftAnchor);
      filterIndexStart = filterIndexEnd;
    } else if (
      filterIndexEnd - filterIndexStart === 7 &&
      fastStartsWithFrom(line, 'http://', filterIndexStart)
    ) {
      mask = setBit(mask, NETWORK_FILTER_MASK.fromHttp);
      mask = clearBit(mask, NETWORK_FILTER_MASK.fromHttps);
      mask = clearBit(mask, NETWORK_FILTER_MASK.isLeftAnchor);
      filterIndexStart = filterIndexEnd;
    } else if (
      filterIndexEnd - filterIndexStart === 8 &&
      fastStartsWithFrom(line, 'https://', filterIndexStart)
    ) {
      mask = setBit(mask, NETWORK_FILTER_MASK.fromHttps);
      mask = clearBit(mask, NETWORK_FILTER_MASK.fromHttp);
      mask = clearBit(mask, NETWORK_FILTER_MASK.isLeftAnchor);
      filterIndexStart = filterIndexEnd;
    } else if (
      filterIndexEnd - filterIndexStart === 8 &&
      fastStartsWithFrom(line, 'http*://', filterIndexStart)
    ) {
      mask = setBit(mask, NETWORK_FILTER_MASK.fromHttps);
      mask = setBit(mask, NETWORK_FILTER_MASK.fromHttp);
      mask = clearBit(mask, NETWORK_FILTER_MASK.isLeftAnchor);
      filterIndexStart = filterIndexEnd;
    }
  }

  let filter: string | undefined;
  if (filterIndexEnd - filterIndexStart > 0) {
    filter = line.slice(filterIndexStart, filterIndexEnd).toLowerCase();
    mask = setNetworkMask(
      mask,
      NETWORK_FILTER_MASK.isRegex,
      checkIsRegex(filter, 0, filter.length),
    );
  }

  // TODO
  // - ignore hostname anchor is not hostname provided

  if (hostname !== undefined) {
    if (getBit(mask, NETWORK_FILTER_MASK.isHostnameAnchor) && fastStartsWith(hostname, 'www.')) {
      hostname = hostname.slice(4);
    }
    hostname = hostname.toLowerCase();
    if (hasUnicode(hostname)) {
      hostname = punycode.toASCII(hostname);
    }
  }

  return new NetworkFilter({
    csp,
    filter,
    hostname,
    mask,
    optDomains,
    optNotDomains,
    redirect,
  });
}
