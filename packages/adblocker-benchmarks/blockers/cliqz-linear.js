/*!
 * Copyright (c) 2017-2019 Cliqz GmbH. All rights reserved.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

const { parseFilters, Request } = require('@cliqz/adblocker');

module.exports = class Cliqz {
  static parse(rawLists) {
    return new Cliqz(
      parseFilters(rawLists, {
        loadCosmeticFilters: false,
      }).networkFilters,
    );
  }

  constructor(filters) {
    this.filters = filters;
  }

  match({ url, frameUrl, type }) {
    const request = Request.fromRawDetails({
      url,
      sourceUrl: frameUrl,
      type,
    });

    let exception;
    let match;
    let important;

    for (const filter of this.filters) {
      if (filter.match(request) === true) {
        if (filter.isImportant()) {
          important = filter;
          break;
        } else if (filter.isException()) {
          exception = filter;
        } else {
          match = filter;
        }
      }
    }

    return important !== undefined || (match !== undefined && exception === undefined);
  }
};
