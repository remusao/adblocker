import { parse } from 'css-what';
import { promises as fs } from 'fs';
import { join } from 'path';

import { CosmeticFilter, detectFilterType, FilterType } from '../adblocker';

async function loadAllLists() {
  const assets = await Promise.all(
    [
      '../assets/easylist/easylist.txt',
      '../assets/easylist/easylistgermany.txt',
      '../assets/easylist/easyprivacy.txt',
      // '../assets/fanboy/annoyance.txt',
      // '../assets/fanboy/cookiemonster.txt',
      '../assets/peter-lowe/serverlist.txt',
      '../assets/ublock-origin/annoyances.txt',
      '../assets/ublock-origin/badware.txt',
      '../assets/ublock-origin/filters.txt',
      '../assets/ublock-origin/privacy.txt',
      '../assets/ublock-origin/resource-abuse.txt',
      '../assets/ublock-origin/unbreak.txt',
    ].map((p) => fs.readFile(join(__dirname, p), 'utf-8')),
  );

  return assets.join('\n');
}



// Efficient manuel lexer
function isDigit(ch: number): boolean {
  // 48 == '0'
  // 57 == '9'
  return ch >= 48 && ch <= 57;
}

function isAlpha(ch: number): boolean {
  // Force to lower-case
  ch |= 32;
  // 65 == 'A'
  // 90 == 'Z'
  return ch >= 97 && ch <= 122;
}

function isAllowed(ch: number): boolean {
  return isDigit(ch) || isAlpha(ch) || ch === 45 /* '-' */ || ch === 95 /* '_' */;
}

function lex(pattern: string, skipFirstToken: boolean, skipLastToken: boolean): string[] {
  let inside: boolean = false;
  let start: number = 0;
  const tokens: string[] = [];

  for (let i: number = 0; i < pattern.length; i += 1) {
    const ch = pattern.charCodeAt(i);
    if (isAllowed(ch)) {
      if (inside === false) {
        inside = true;
        start = i;
      }
    } else if (inside === true) {
      inside = false;
      if ((skipFirstToken === false || start !== 0) && i - start > 1) {
        tokens.push(pattern.slice(start, i));
      }
    }
  }

  if (inside === true && skipLastToken === false && pattern.length - start > 1) {
    tokens.push(pattern.slice(start, pattern.length));
  }

  return tokens;
}

const TAGS_BLACKLIST = new Set([
  'a',
  'article',
  'aside',
  'b',
  'blockquote',
  'body',
  'br',
  'button',
  'center',
  'div',
  'embed',
  // 'figure',
  'font',
  'footer',
  'form',
  'h1',
  'h2',
  'h3',
  'h5',
  'h6',
  'header',
  'html',
  // 'iframe',
  // 'img',
  // 'input',
  'li',
  'ol',
  'p',
  'script',
  'section',
  'small',
  'span',
  'style',
  // 'table',
  'td',
  'thead',
  'tr',
  'ul',
  // 'video',
]);

function tokenize(selector: string) {
  // const start = process.hrtime();
  const ast = parse(selector);
  // const diff = process.hrtime(start);
  // const totalHighResolution = (diff[0] * 1000000000 + diff[1]) / 1000000;

  if (ast.length !== 1) {
    // TODO - this means we can select multiple elements, maybe filter should
    // be indexed once for each!
    return [];
  }

  const [nodes] = ast;

  // TODO - maybe we want to restrict tokens to things like [id], [class] and [href]?
  // Anything else that we could extract very quickly from DOM in content-script?

  const tokens = new Set();
  for (const node of nodes) {
    const { type } = node;

    // Ignore traversal types
    if (
      type === 'adjacent' ||
      type === 'child' ||
      type === 'descendant' ||
      type === 'parent' ||
      type === 'sibling'
    ) {
      continue;
    }

    // Each tag is a token
    if (type === 'tag') {
      // @ts-ignore
      const { name } = node;
      if (TAGS_BLACKLIST.has(name) === false) {
        tokens.add(name);
      }
      continue;
    }

    // Tokenize attributes
    if (type === 'attribute') {
      // @ts-ignore
      const { name, action, value, ignoreCase } = node;
      // if (
      //   name !== 'id' &&
      //   name !== 'class' &&
      //   name !== 'width' &&
      //   name !== 'height' &&
      //   name !== 'src' &&
      //   name !== 'style' &&
      //   name !== 'title' &&
      //   name !== 'alt' &&
      //   name !== 'href'
      // ) {
      //   continue;
      // }

      // We do not handle tokenization for case-insensitive for now!
      if (ignoreCase === true) {
        return [];
      }

      if (action === 'exists') {
        tokens.add(name);
      } else if (value) {
        switch (action) {
          case 'any':
            for (const tok of lex(value, true, true)) {
              tokens.add(tok);
            }
            break;
          case 'element':
            for (const tok of lex(value, false, false)) {
              tokens.add(tok);
            }
            break;
          case 'end':
            for (const tok of lex(value, true, false)) {
              tokens.add(tok);
            }
            break;
          case 'equals':
            for (const tok of lex(value, false, false)) {
              tokens.add(tok);
            }
            break;
          case 'hyphen':
            return []; // not supported
          case 'not':
            return []; // not supported
          case 'start':
            for (const tok of lex(value, false, true)) {
              tokens.add(tok);
            }
            break;
        }
      }

      continue;
    }

    if (type === 'pseudo' || type === 'pseudo-element') {
      // console.log('???', selector);
      continue;
    }

    // console.log('!!!!', selector, node);
    // return tokens;
  }

  // console.log(JSON.stringify([selector, [null]]));
  return Array.from(tokens);
}

(async () => {
  const raw = await loadAllLists();
  for (const line of raw.split(/\s*[\r\n]+\s*/g)) {
    const type = detectFilterType(line);
    if (type === FilterType.COSMETIC) {
      const parsed = CosmeticFilter.parse(line);
      if (
        parsed !== null &&
        parsed.isHtmlFiltering() === false &&
        parsed.isScriptInject() === false
      ) {
        const selector = parsed.selector;
        const start = process.hrtime();
        const tokens = tokenize(selector);
        const diff = process.hrtime(start);
        const totalHighResolution = (diff[0] * 1000000000 + diff[1]) / 1000000;

        if (parsed.hasHostnameConstraint() === false && tokens.length === 0) {
          console.log(line, selector, tokens, totalHighResolution);
        }
      }
    }
  }
})();
