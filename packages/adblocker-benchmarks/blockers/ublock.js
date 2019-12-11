/*!
 * Copyright (c) 2017-2019 Cliqz GmbH. All rights reserved.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

const { URL } = require('url');
const punycode = require('punycode');
const fs = require('fs');
const path = require('path');

const SandboxedModule = require('sandboxed-module');
const { JSDOM } = require('jsdom');

const ublockPromise = (async () => {
  const DOM = new JSDOM('<!DOCTYPE html>background');

  // MOCK: assets
  const assetsStore = new Map();
  const assets = {
    getSync: (key) => ({ content: assetsStore.get(key) }),
    get: (key, cb) => {
      if (cb) {
        cb(assets.getSync(key));
      }
      return Promise.resolve(assets.getSync(key));
    },
    put: (key, value, cb) => {
      assetsStore.set(key, value);
      if (cb) {
        cb();
      }
      return Promise.resolve();
    },
  };

  // MOCK: localStorage
  const localStorageStore = new Map();
  const localStorage = {
    getItem: key => localStorageStore.get(key),
    setItem: (key, value) => { localStorageStore.set(key, value); },
  };

  // MOCK: requestIdleCallback
  DOM.window.requestIdleCallback = cb => setTimeout(cb, 1000);

  // MOCK: tabContextManager
  const tabContextManager = {
    mustLookup: () => ({
      origin: '',
      rootHostname: '',
      rootDomain: '',
      tabId: -1,
    }),
  };

  // MOCK: µBlock
  const µBlock = {
    pageStores: new Map(),
    getNetFilteringSwitch: () => true,
    hiddenSettings: {
      disableWebAssembly: false,
    },
    tabContextManager,
    assets,
    logger: {
      enabled: false,
      writeOne: () => {},
    },
    sessionSwitches: {
      evaluateZ: () => true,
    },
  };

  // MOCK: vAPI
  const vAPI = {
    canWASM: true,
    webextFlavor: {
      soup: new Set(['firefox']),
    },
    localStorage,
    setTimeout: () => {},
    tabs: {
      registerListeners: () => {},
      onPopupCreated: () => {},
    },
    i18n: () => '',
  };


  const noop = () => { };
  const globals = {
    console: new Proxy({}, {
      get() {
        return noop;
      },
    }),
    URL,
    self: {
      punycode,
    },
    punycode,
    µBlock,
    vAPI,
    self: DOM.window,
    window: DOM.window,
    document: DOM.window.document,
  };

  // NOTE: some changes were required to load `publicsuffixlist.js in this context.
  // Check `publicsuffixlist.patch` file for more information about what changed.
  globals.publicSuffixList = SandboxedModule.require('./ublock/publicsuffixlist.js', { globals });
  globals.publicSuffixList.parse(fs.readFileSync(path.resolve(__dirname, './ublock/public_suffix_list.dat'), { encoding: 'utf-8' }), punycode.toASCII);
  await globals.publicSuffixList.enableWASM();

  {
    const reCommonHostnameFromURL  = /^https?:\/\/([0-9a-z_][0-9a-z._-]*[0-9a-z])\//;
    const reAuthorityFromURI       = /^(?:[^:\/?#]+:)?(\/\/[^\/?#]+)/;
    const reHostFromNakedAuthority = /^[0-9a-z._-]+[0-9a-z]$/i;
    const reHostFromAuthority      = /^(?:[^@]*@)?([^:]+)(?::\d*)?$/;
    const reIPv6FromAuthority      = /^(?:[^@]*@)?(\[[0-9a-f:]+\])(?::\d*)?$/i;
    const reMustNormalizeHostname  = /[^0-9a-z._-]/;

    vAPI.hostnameFromURI = function(uri) {
      let matches = reCommonHostnameFromURL.exec(uri);
      if ( matches !== null ) { return matches[1]; }
      matches = reAuthorityFromURI.exec(uri);
      if ( matches === null ) { return ''; }
      const authority = matches[1].slice(2);
      if ( reHostFromNakedAuthority.test(authority) ) {
        return authority.toLowerCase();
      }
      matches = reHostFromAuthority.exec(authority);
      if ( matches === null ) {
        matches = reIPv6FromAuthority.exec(authority);
        if ( matches === null ) { return ''; }
      }
      let hostname = matches[1];
      while ( hostname.endsWith('.') ) {
        hostname = hostname.slice(0, -1);
      }
      if ( reMustNormalizeHostname.test(hostname) ) {
        hostname = punycode.toASCII(hostname.toLowerCase());
      }
      return hostname;
    };

    const reIPAddressNaive = /^\d+\.\d+\.\d+\.\d+$|^\[[\da-zA-Z:]+\]$/;
    vAPI.domainFromHostname = function(hostname) {
      return reIPAddressNaive.test(hostname)
        ? hostname
        : globals.publicSuffixList.getDomain(hostname);
    };
  }

  // NOTE: some changes were required to load `hntrie.js` in this context. The
  SandboxedModule.require('./ublock/utils.js', { globals });
  SandboxedModule.require('./ublock/uritools.js', { globals });
  SandboxedModule.require('./ublock/strie.js', { globals });
  globals.STrieContainer = µBlock.STrieContainer;

  // HNTrieContainer needs to be attached to the global µBlock object to be
  // accessible by other modules.
  SandboxedModule.require('./ublock/hntrie.js', { globals });
  globals.HNTrieContainer = µBlock.HNTrieContainer;
  const { HNTrieContainerReadyPromise, STrieContainerReadyPromise } = µBlock;
  await Promise.all([
    HNTrieContainerReadyPromise,
    STrieContainerReadyPromise,
  ]);

  SandboxedModule.require('./ublock/static-ext-filtering.js', { globals });
  SandboxedModule.require('./ublock/static-net-filtering.js', { globals });
  SandboxedModule.require('./ublock/storage.js', { globals });

  // NOTE: only `normalizePageURL` was kept in `tab.js`.
  SandboxedModule.require('./ublock/pagestore.js', { globals });
  SandboxedModule.require('./ublock/tab.js', { globals });
  SandboxedModule.require('./ublock/filtering-context.js', { globals });

  return µBlock;
})().catch(console.error);

module.exports = class UBlockOrigin {
  static async parse(rawLists) {
    const ublock = await ublockPromise;
    ublock.staticNetFilteringEngine.fromCompiledContent(
      new ublock.CompiledLineIO.Reader(ublock.compileFilters(rawLists)),
    );
    ublock.staticNetFilteringEngine.freeze();
    return new UBlockOrigin(ublock.staticNetFilteringEngine, ublock);
  }

  constructor(engine, ublock) {
    this.engine = engine;
    this.ublock = ublock;
  }

  async serialize() {
    await this.engine.toSelfie('path');

    // NOTE - to estimate the size of a selfie, we take all the sub-keys used to
    // store parts of a static net filtering engine, get their values and
    // stringify everything as a string. The size of a selfie is then the length
    // of this string.
    return JSON.stringify([
      'FilterHostnameDict.trieContainer',
      'FilterOrigin.trieContainer',
      'filterSequences',
      'bidiTrie',
      'main',
    ].map((key) => {
      const { content } = this.ublock.assets.getSync(`path/${key}`);
      if (content === undefined) {
        throw new Error('Format of selfie changed');
      }
      return content;
    }));
  }

  async deserialize() {
    await this.engine.fromSelfie('path');
  }

  match({ url, frameUrl, type }) {
    return (
      this.engine.matchString(
        this.ublock.filteringContext.fromWebrequestDetails({
          url,
          type,
          documentUrl: frameUrl,
        }),
      ) === 1
    );
  }
};
