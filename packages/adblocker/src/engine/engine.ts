/*!
 * Copyright (c) 2017-present Cliqz GmbH. All rights reserved.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import Config from '../config';
import StaticDataView from '../data-view';
import { EventEmitter } from '../events';
import {
  adsAndTrackingLists,
  adsLists,
  Fetch,
  fetchLists,
  fetchPrebuilt,
  fetchResources,
  fullLists,
} from '../fetch';
import CosmeticFilter from '../filters/cosmetic';
import { HTMLSelector } from '../html-filtering';
import NetworkFilter from '../filters/network';
import { IListDiff, IRawDiff, parseFilters } from '../lists';
import Request from '../request';
import Resources from '../resources';
import CosmeticFilterBucket from './bucket/cosmetic';
import NetworkFilterBucket from './bucket/network';

export const ENGINE_VERSION = 44;

// Polyfill for `btoa`
function btoaPolyfill(buffer: string): string {
  if (typeof btoa !== 'undefined') {
    return btoa(buffer);
  } else if (typeof Buffer !== 'undefined') {
    return Buffer.from(buffer).toString('base64');
  }
  return buffer;
}

export interface BlockingResponse {
  match: boolean;
  redirect:
    | undefined
    | {
        body: string;
        contentType: string;
        dataUrl: string;
      };
  exception: NetworkFilter | undefined;
  filter: NetworkFilter | undefined;
}

export default class FilterEngine extends EventEmitter<
  | 'csp-injected'
  | 'html-filtered'
  | 'request-blocked'
  | 'request-redirected'
  | 'request-whitelisted'
  | 'script-injected'
  | 'style-injected'
> {
  /**
   * Create an instance of `FiltersEngine` (or subclass like `ElectronBlocker`,
   * etc.), from the list of subscriptions provided as argument (e.g.:
   * EasyList).
   *
   * Lists are fetched using the instance of `fetch` provided as a first
   * argument. Optionally resources.txt and config can be provided.
   */
  public static fromLists<T extends typeof FilterEngine>(
    this: T,
    fetch: Fetch,
    urls: string[],
    config: Partial<Config> = {},
  ): Promise<InstanceType<T>> {
    const listsPromises = fetchLists(fetch, urls);
    const resourcesPromise = fetchResources(fetch);

    return Promise.all([listsPromises, resourcesPromise]).then(([lists, resources]) => {
      const engine = this.parse(lists.join('\n'), config);
      if (resources !== undefined) {
        engine.updateResources(resources, '' + resources.length);
      }

      return engine as InstanceType<T>;
    });
  }

  /**
   * Initialize blocker of *ads only*.
   *
   * Attempt to initialize a blocking engine using a pre-built version served
   * from Cliqz's CDN. If this fails (e.g.: if no pre-built engine is available
   * for this version of the library), then falls-back to using `fromLists(...)`
   * method with the same subscriptions.
   */
  public static fromPrebuiltAdsOnly<T extends typeof FilterEngine>(
    this: T,
    fetchImpl: Fetch = fetch,
  ): Promise<InstanceType<T>> {
    return fetchPrebuilt(
      fetchImpl,
      'https://cdn.cliqz.com/adblocker/configs/desktop-ads/allowed-lists.json',
      ENGINE_VERSION,
    )
      .then((buffer) => this.deserialize(buffer) as InstanceType<T>)
      .catch(() => {
        console.log('failed downloading pre-built, fallback to fetching lists');
        return this.fromLists(fetchImpl, adsLists) as Promise<InstanceType<T>>;
      });
  }

  /**
   * Same as `fromPrebuiltAdsOnly(...)` but also contains rules to block
   * tracking (i.e.: using extra lists such as EasyPrivacy and more).
   */
  public static fromPrebuiltAdsAndTracking<T extends typeof FilterEngine>(
    this: T,
    fetchImpl: Fetch = fetch,
  ): Promise<InstanceType<T>> {
    return fetchPrebuilt(
      fetchImpl,
      'https://cdn.cliqz.com/adblocker/configs/desktop-ads-trackers/allowed-lists.json',
      ENGINE_VERSION,
    )
      .then((buffer) => this.deserialize(buffer) as InstanceType<T>)
      .catch(() => {
        console.log('failed downloading pre-built, fallback to fetching lists');
        return this.fromLists(fetchImpl, adsAndTrackingLists) as Promise<InstanceType<T>>;
      });
  }

  /**
   * Same as `fromPrebuiltAdsAndTracking(...)` but also contains annoyances
   * rules to block things like cookie notices.
   */
  public static fromPrebuiltFull<T extends typeof FilterEngine>(
    this: T,
    fetchImpl: Fetch = fetch,
  ): Promise<InstanceType<T>> {
    return fetchPrebuilt(
      fetchImpl,
      'https://cdn.cliqz.com/adblocker/configs/desktop-full/allowed-lists.json',
      ENGINE_VERSION,
    )
      .then((buffer) => this.deserialize(buffer) as InstanceType<T>)
      .catch(() => {
        console.log('failed downloading pre-built, fallback to fetching lists');
        return this.fromLists(fetchImpl, fullLists) as Promise<InstanceType<T>>;
      });
  }

  public static parse<T extends FilterEngine>(
    this: new (...args: any[]) => T,
    filters: string,
    options: Partial<Config> = {},
  ): T {
    const config = new Config(options);
    return new this(Object.assign({}, parseFilters(filters, config), { config }));
  }

  public static deserialize<T extends FilterEngine>(
    this: new (...args: any[]) => T,
    serialized: Uint8Array,
  ): T {
    const buffer = StaticDataView.fromUint8Array(serialized, {
      enableCompression: false,
    });

    // Before starting deserialization, we make sure that the version of the
    // serialized engine is the same as the current source code. If not, we
    // start fresh and create a new engine from the lists.
    const serializedEngineVersion = buffer.getUint8();
    if (ENGINE_VERSION !== serializedEngineVersion) {
      throw new Error(
        `serialized engine version mismatch, expected ${ENGINE_VERSION} but got ${serializedEngineVersion}`,
      );
    }

    // Create a new engine with same options
    const config = Config.deserialize(buffer);

    // Optionally turn compression ON
    if (config.enableCompression) {
      buffer.enableCompression();
    }

    // Also make sure that the built-in checksum is correct. This allows to
    // detect data corruption and start fresh if the serialized version was
    // altered.
    if (config.integrityCheck) {
      const currentPos = buffer.pos;
      buffer.pos = serialized.length - 4;
      const checksum = buffer.checksum();
      const expected = buffer.getUint32();
      if (checksum !== expected) {
        throw new Error(
          `serialized engine checksum mismatch, expected ${expected} but got ${checksum}`,
        );
      }
      buffer.pos = currentPos;
    }

    const engine = new this({ config });

    // Deserialize resources
    engine.resources = Resources.deserialize(buffer);

    // Deserialize lists
    const lists = new Map();
    const numberOfLists = buffer.getUint16();
    for (let i = 0; i < numberOfLists; i += 1) {
      lists.set(buffer.getASCII(), buffer.getASCII());
    }
    engine.lists = lists;

    // Deserialize buckets
    engine.importants = NetworkFilterBucket.deserialize(buffer, config);
    engine.redirects = NetworkFilterBucket.deserialize(buffer, config);
    engine.filters = NetworkFilterBucket.deserialize(buffer, config);
    engine.exceptions = NetworkFilterBucket.deserialize(buffer, config);

    engine.csp = NetworkFilterBucket.deserialize(buffer, config);
    engine.genericHides = NetworkFilterBucket.deserialize(buffer, config);
    engine.cosmetics = CosmeticFilterBucket.deserialize(buffer, config);

    return engine;
  }

  public lists: Map<string, string>;

  public csp: NetworkFilterBucket;
  public genericHides: NetworkFilterBucket;
  public exceptions: NetworkFilterBucket;
  public importants: NetworkFilterBucket;
  public redirects: NetworkFilterBucket;
  public filters: NetworkFilterBucket;
  public cosmetics: CosmeticFilterBucket;

  public resources: Resources;
  public readonly config: Config;

  constructor({
    // Optionally initialize the engine with filters
    cosmeticFilters = [],
    networkFilters = [],

    config = new Config(),
    lists = new Map(),
  }: {
    cosmeticFilters?: CosmeticFilter[];
    networkFilters?: NetworkFilter[];
    lists?: Map<string, string>;
    config?: Partial<Config>;
  } = {}) {
    super(); // init super-class EventEmitter

    this.config = new Config(config);

    // Subscription management: disabled by default
    this.lists = lists;

    // $csp=
    this.csp = new NetworkFilterBucket({ config: this.config });
    // $generichide
    this.genericHides = new NetworkFilterBucket({ config: this.config });
    // @@filter
    this.exceptions = new NetworkFilterBucket({ config: this.config });
    // $important
    this.importants = new NetworkFilterBucket({ config: this.config });
    // $redirect
    this.redirects = new NetworkFilterBucket({ config: this.config });
    // All other filters
    this.filters = new NetworkFilterBucket({ config: this.config });
    // Cosmetic filters
    this.cosmetics = new CosmeticFilterBucket({ config: this.config });

    // Injections
    this.resources = new Resources();

    if (networkFilters.length !== 0 || cosmeticFilters.length !== 0) {
      this.update({
        newCosmeticFilters: cosmeticFilters,
        newNetworkFilters: networkFilters,
      });
    }
  }

  /**
   * Estimate the number of bytes needed to serialize this instance of
   * `FiltersEngine` using the `serialize(...)` method. It is used internally
   * by `serialize(...)` to allocate a buffer of the right size and you should
   * not have to call it yourself most of the time.
   *
   * There are cases where we cannot estimate statically the exact size of the
   * resulting buffer (due to alignement which need to be performed); this
   * method will return a safe estimate which will always be at least equal to
   * the real number of bytes needed, or bigger (usually of a few bytes only:
   * ~20 bytes is to be expected).
   */
  public getSerializedSize(): number {
    let estimatedSize: number =
      StaticDataView.sizeOfByte() + // engine version
      this.config.getSerializedSize() +
      this.resources.getSerializedSize() +
      this.filters.getSerializedSize() +
      this.exceptions.getSerializedSize() +
      this.importants.getSerializedSize() +
      this.redirects.getSerializedSize() +
      this.csp.getSerializedSize() +
      this.genericHides.getSerializedSize() +
      this.cosmetics.getSerializedSize() +
      4; // checksum

    // Estimate size of `this.lists` which stores information of checksum for each list.
    for (const [name, checksum] of this.lists) {
      estimatedSize += StaticDataView.sizeOfASCII(name) + StaticDataView.sizeOfASCII(checksum);
    }

    return estimatedSize;
  }

  /**
   * Creates a binary representation of the full engine. It can be stored
   * on-disk for faster loading of the adblocker. The `deserialize` static
   * method of Engine can be used to restore the engine.
   */
  public serialize(array?: Uint8Array): Uint8Array {
    const buffer = StaticDataView.fromUint8Array(
      array || new Uint8Array(this.getSerializedSize()),
      this.config,
    );

    buffer.pushUint8(ENGINE_VERSION);

    // Config
    this.config.serialize(buffer);

    // Resources (js, resources)
    this.resources.serialize(buffer);

    // Serialize the state of lists (names and checksums)
    buffer.pushUint16(this.lists.size);
    const entries = Array.from(this.lists.entries()).sort();
    for (let i = 0; i < entries.length; i += 1) {
      buffer.pushASCII(entries[i][0]);
      buffer.pushASCII(entries[i][1]);
    }

    // Filters buckets
    this.importants.serialize(buffer);
    this.redirects.serialize(buffer);
    this.filters.serialize(buffer);
    this.exceptions.serialize(buffer);

    this.csp.serialize(buffer);
    this.genericHides.serialize(buffer);
    this.cosmetics.serialize(buffer);

    // Optionally append a checksum at the end
    if (this.config.integrityCheck) {
      buffer.pushUint32(buffer.checksum());
    }

    return buffer.subarray();
  }

  /**
   * Update engine with new filters or resources.
   */
  public loadedLists(): string[] {
    return Array.from(this.lists.keys());
  }

  public hasList(name: string, checksum: string): boolean {
    return this.lists.has(name) && this.lists.get(name) === checksum;
  }

  /**
   * Update engine with `resources.txt` content.
   */
  public updateResources(data: string, checksum: string): boolean {
    if (this.resources.checksum === checksum) {
      return false;
    }

    this.resources = Resources.parse(data, { checksum });
    return true;
  }

  public getFilters(): { networkFilters: NetworkFilter[]; cosmeticFilters: CosmeticFilter[] } {
    const cosmeticFilters: CosmeticFilter[] = [];
    const networkFilters: NetworkFilter[] = [];

    return {
      cosmeticFilters: cosmeticFilters.concat(this.cosmetics.getFilters()),
      networkFilters: networkFilters.concat(
        this.filters.getFilters(),
        this.exceptions.getFilters(),
        this.importants.getFilters(),
        this.redirects.getFilters(),
        this.csp.getFilters(),
        this.genericHides.getFilters(),
      ),
    };
  }

  /**
   * Update engine with new filters as well as optionally removed filters.
   */
  public update({
    newNetworkFilters = [],
    newCosmeticFilters = [],
    removedCosmeticFilters = [],
    removedNetworkFilters = [],
  }: Partial<IListDiff>): boolean {
    let updated: boolean = false;

    // Update cosmetic filters
    if (
      this.config.loadCosmeticFilters &&
      (newCosmeticFilters.length !== 0 || removedCosmeticFilters.length !== 0)
    ) {
      updated = true;
      this.cosmetics.update(
        newCosmeticFilters,
        removedCosmeticFilters.length === 0 ? undefined : new Set(removedCosmeticFilters),
      );
    }

    // Update network filters
    if (
      this.config.loadNetworkFilters &&
      (newNetworkFilters.length !== 0 || removedNetworkFilters.length !== 0)
    ) {
      updated = true;
      const filters: NetworkFilter[] = [];
      const csp: NetworkFilter[] = [];
      const exceptions: NetworkFilter[] = [];
      const importants: NetworkFilter[] = [];
      const redirects: NetworkFilter[] = [];
      const genericHides: NetworkFilter[] = [];

      for (let i = 0; i < newNetworkFilters.length; i += 1) {
        const filter = newNetworkFilters[i];
        // NOTE: it's important to check for $generichide and $csp before
        // exceptions and important as we store all of them in the same filter
        // bucket. The check for exceptions is done at match-time directly.
        if (filter.isCSP()) {
          csp.push(filter);
        } else if (filter.isGenericHide()) {
          genericHides.push(filter);
        } else if (filter.isException()) {
          exceptions.push(filter);
        } else if (filter.isImportant()) {
          importants.push(filter);
        } else if (filter.isRedirect()) {
          redirects.push(filter);
        } else {
          filters.push(filter);
        }
      }

      const removedNetworkFiltersSet: Set<number> | undefined =
        removedNetworkFilters.length === 0 ? undefined : new Set(removedNetworkFilters);

      // Update buckets in-place
      this.importants.update(importants, removedNetworkFiltersSet);
      this.redirects.update(redirects, removedNetworkFiltersSet);
      this.filters.update(filters, removedNetworkFiltersSet);
      this.exceptions.update(exceptions, removedNetworkFiltersSet);
      this.csp.update(csp, removedNetworkFiltersSet);
      this.genericHides.update(genericHides, removedNetworkFiltersSet);
    }

    return updated;
  }

  public updateFromDiff({ added, removed }: Partial<IRawDiff>): boolean {
    const newCosmeticFilters: CosmeticFilter[] = [];
    const newNetworkFilters: NetworkFilter[] = [];
    const removedCosmeticFilters: CosmeticFilter[] = [];
    const removedNetworkFilters: NetworkFilter[] = [];

    if (removed !== undefined && removed.length !== 0) {
      const { networkFilters, cosmeticFilters } = parseFilters(removed.join('\n'), this.config);
      Array.prototype.push.apply(removedCosmeticFilters, cosmeticFilters);
      Array.prototype.push.apply(removedNetworkFilters, networkFilters);
    }

    if (added !== undefined && added.length !== 0) {
      const { networkFilters, cosmeticFilters } = parseFilters(added.join('\n'), this.config);
      Array.prototype.push.apply(newCosmeticFilters, cosmeticFilters);
      Array.prototype.push.apply(newNetworkFilters, networkFilters);
    }

    return this.update({
      newCosmeticFilters,
      newNetworkFilters,
      removedCosmeticFilters: removedCosmeticFilters.map((f) => f.getId()),
      removedNetworkFilters: removedNetworkFilters.map((f) => f.getId()),
    });
  }

  /**
   * Return a list of HTML filtering rules.
   */
  public getHtmlFilters({
    // Page information
    url,
    hostname,
    domain,
  }: {
    url: string;
    hostname: string;
    domain: string | null | undefined;
  }): HTMLSelector[] {
    const htmlSelectors: HTMLSelector[] = [];

    if (this.config.enableHtmlFiltering === false || this.config.loadCosmeticFilters === false) {
      return htmlSelectors;
    }

    const rules = this.cosmetics.getHtmlRules({
      domain: domain || '',
      hostname,
    });

    for (let i = 0; i < rules.length; i += 1) {
      const rule = rules[i];
      const extended = rule.getHtmlSelector();
      if (extended !== undefined) {
        htmlSelectors.push(extended);
      }
    }

    if (htmlSelectors.length !== 0) {
      this.emit('html-filtered', htmlSelectors, url);
    }

    return htmlSelectors;
  }

  /**
   * Given `hostname` and `domain` of a page (or frame), return the list of
   * styles and scripts to inject in the page.
   */
  public getCosmeticsFilters({
    // Page information
    url,
    hostname,
    domain,

    // DOM information
    classes,
    hrefs,
    ids,

    // Allows to specify which rules to return
    getBaseRules = true,
    getInjectionRules = true,
    getRulesFromDOM = true,
    getRulesFromHostname = true,
  }: {
    url: string;
    hostname: string;
    domain: string | null | undefined;

    classes?: string[];
    hrefs?: string[];
    ids?: string[];

    getBaseRules?: boolean;
    getInjectionRules?: boolean;
    getRulesFromDOM?: boolean;
    getRulesFromHostname?: boolean;
  }): {
    active: boolean;
    scripts: string[];
    styles: string;
    extended: string[];
  } {
    if (this.config.loadCosmeticFilters === false) {
      return {
        active: false,
        extended: [],
        scripts: [],
        styles: '',
      };
    }

    // Check if there is some generichide
    const genericHides = this.genericHides.matchAll(
      Request.fromRawDetails({
        domain: domain || '',
        hostname,
        url,

        sourceDomain: '',
        sourceHostname: '',
        sourceUrl: '',
      }),
    );

    // Get $generichide filter with highest priority:
    // $generichide,important > $generichide > @@$generichide
    let genericHideFilter: null | NetworkFilter = null;
    let currentScore = 0;
    for (let i = 0; i < genericHides.length; i += 1) {
      const filter = genericHides[i];
      // To encode priority between filters, we create a bitmask with the following:
      // $important,generichide = 100 (takes precedence)
      // $generichide           = 010 (exception to @@$generichide)
      // @@$generichide         = 001 (forbids generic hide filters)
      const score: number = (filter.isImportant() ? 4 : 0) | (filter.isException() ? 1 : 2);

      // Highest `score` has precedence
      if (score > currentScore) {
        currentScore = score;
        genericHideFilter = filter;
      }
    }

    // Check that there is at least one $generichide match and no exception
    const allowGenericHides =
      genericHideFilter === null || genericHideFilter.isException() === false;

    // Lookup injections as well as stylesheets
    const { injections, stylesheet } = this.cosmetics.getCosmeticsFilters({
      domain: domain || '',
      hostname,

      classes,
      hrefs,
      ids,

      allowGenericHides,

      getBaseRules,
      getInjectionRules,
      getRulesFromDOM,
      getRulesFromHostname,
    });

    // Perform interpolation for injected scripts
    const scripts: string[] = [];
    for (let i = 0; i < injections.length; i += 1) {
      const script = injections[i].getScript(this.resources.js);
      if (script !== undefined) {
        this.emit('script-injected', script, url);
        scripts.push(script);
      }
    }

    // Emit events
    if (stylesheet.length !== 0) {
      this.emit('style-injected', stylesheet, url);
    }

    return {
      active: true,
      extended: [],
      scripts,
      styles: stylesheet,
    };
  }

  /**
   * Given a `request`, return all matching network filters found in the engine.
   */
  public matchAll(request: Request): Set<NetworkFilter> {
    const filters: NetworkFilter[] = [];
    if (request.isSupported) {
      Array.prototype.push.apply(filters, this.importants.matchAll(request));
      Array.prototype.push.apply(filters, this.filters.matchAll(request));
      Array.prototype.push.apply(filters, this.exceptions.matchAll(request));
      Array.prototype.push.apply(filters, this.csp.matchAll(request));
      Array.prototype.push.apply(filters, this.genericHides.matchAll(request));
      Array.prototype.push.apply(filters, this.redirects.matchAll(request));
    }

    return new Set(filters);
  }

  /**
   * Given a "main_frame" request, check if some content security policies
   * should be injected in the page.
   */
  public getCSPDirectives(request: Request): string | undefined {
    if (!this.config.loadNetworkFilters) {
      return undefined;
    }

    if (request.isSupported !== true || request.isMainFrame() === false) {
      return undefined;
    }

    const matches = this.csp.matchAll(request);

    // No $csp filter found
    if (matches.length === 0) {
      return undefined;
    }

    // Collect all CSP directives and keep track of exceptions
    const disabledCsp = new Set();
    const enabledCsp = new Set();
    for (let i = 0; i < matches.length; i += 1) {
      const filter = matches[i];
      if (filter.isException()) {
        if (filter.csp === undefined) {
          // All CSP directives are disabled for this site
          return undefined;
        }
        disabledCsp.add(filter.csp);
      } else {
        enabledCsp.add(filter.csp);
      }
    }

    // Combine all CSPs (except the black-listed ones)
    const csps: string | undefined =
      Array.from(enabledCsp)
        .filter((csp) => !disabledCsp.has(csp))
        .join('; ') || undefined;

    // Emit event
    if (csps !== undefined) {
      this.emit('csp-injected', csps, request);
    }

    return csps;
  }

  /**
   * Decide if a network request (usually from WebRequest API) should be
   * blocked, redirected or allowed.
   */
  public match(request: Request): BlockingResponse {
    const result: BlockingResponse = {
      exception: undefined,
      filter: undefined,
      match: false,
      redirect: undefined,
    };

    if (!this.config.loadNetworkFilters) {
      return result;
    }

    if (request.isSupported) {
      // Check the filters in the following order:
      // 1. $important (not subject to exceptions)
      // 2. redirection ($redirect=resource)
      // 3. normal filters
      // 4. exceptions
      result.filter = this.importants.match(request);

      if (result.filter === undefined) {
        // Check if there is a redirect or a normal match
        result.filter = this.redirects.match(request);
        if (result.filter === undefined) {
          result.filter = this.filters.match(request);
        }

        // If we found something, check for exceptions
        if (result.filter !== undefined) {
          result.exception = this.exceptions.match(request);
        }
      }

      // If there is a match
      if (result.filter !== undefined) {
        if (result.filter.isRedirect()) {
          const redirectResource = this.resources.getResource(result.filter.getRedirect());
          if (redirectResource !== undefined) {
            const { data, contentType } = redirectResource;
            let dataUrl;
            if (contentType.indexOf(';') !== -1) {
              dataUrl = `data:${contentType},${data}`;
            } else {
              dataUrl = `data:${contentType};base64,${btoaPolyfill(data)}`;
            }

            result.redirect = {
              body: data,
              contentType,
              dataUrl: dataUrl.trim(),
            };
          } // TODO - else, throw an exception
        }
      }
    }

    result.match = result.exception === undefined && result.filter !== undefined;

    // Emit events if we found a match
    if (result.exception !== undefined) {
      this.emit('request-whitelisted', request, result);
    } else if (result.redirect !== undefined) {
      this.emit('request-redirected', request, result);
    } else if (result.filter !== undefined) {
      this.emit('request-blocked', request, result);
    }

    return result;
  }
}
