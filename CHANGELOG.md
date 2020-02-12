# v0.13.0 (Wed Feb 12 2020)

#### :rocket: New Feature

- `@cliqz/adblocker`
  - Implement redirect-rule filters handling [#478](https://github.com/cliqz-oss/adblocker/pull/478) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker`
  - Add helper to cache adblocker engine [#477](https://github.com/cliqz-oss/adblocker/pull/477) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension`
  - Add helper to know if blocking is enabled in context [#475](https://github.com/cliqz-oss/adblocker/pull/475) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - Handle disabling scriptlets [#471](https://github.com/cliqz-oss/adblocker/pull/471) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - Implement redirect=none semantics [#469](https://github.com/cliqz-oss/adblocker/pull/469) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - Implement specifichide, elemhide and aliases [#468](https://github.com/cliqz-oss/adblocker/pull/468) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - Add support for compound HTML filtering rules [#453](https://github.com/cliqz-oss/adblocker/pull/453) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - feat: support subset of HTML filtering rules (^script:has-text(...)) [#339](https://github.com/cliqz-oss/adblocker/pull/339) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - feat: add support for 'all' option [#338](https://github.com/cliqz-oss/adblocker/pull/338) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - feat: add support for redirect-rule option [#337](https://github.com/cliqz-oss/adblocker/pull/337) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension`
  - Allow blocker unload [#328](https://github.com/cliqz-oss/adblocker/pull/328) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - feature: support inline-script and inline-font options [#327](https://github.com/cliqz-oss/adblocker/pull/327) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - provide helpers to download and build engines from lists [#280](https://github.com/cliqz-oss/adblocker/pull/280) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - implement simple event emitter for FiltersEngine and sub-classes [#251](https://github.com/cliqz-oss/adblocker/pull/251) ([@remusao](https://github.com/remusao))

#### :running_woman: Performance

- `@cliqz/adblocker`
  - Optimize cosmetics injection [#287](https://github.com/cliqz-oss/adblocker/pull/287) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - allow correct size allocation for data views [#257](https://github.com/cliqz-oss/adblocker/pull/257) ([@remusao](https://github.com/remusao))

#### :bug: Bug Fix

- docs: add support for PR labels [#404](https://github.com/cliqz-oss/adblocker/pull/404) ([@remusao](https://github.com/remusao))
- Set up CI with Azure Pipelines [#397](https://github.com/cliqz-oss/adblocker/pull/397) ([@chrmod](https://github.com/chrmod))
- `@cliqz/adblocker`
  - chore: update local assets [#479](https://github.com/cliqz-oss/adblocker/pull/479) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Put types for chrome and firefox as direct dependencies instead of dev [#476](https://github.com/cliqz-oss/adblocker/pull/476) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - chore: update local assets [#474](https://github.com/cliqz-oss/adblocker/pull/474) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#472](https://github.com/cliqz-oss/adblocker/pull/472) ([@adblocker-bot](https://github.com/adblocker-bot) [@remusao](https://github.com/remusao))
- `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - fix: HTML filtering and scriptlets injection [#464](https://github.com/cliqz-oss/adblocker/pull/464) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - chore: update local assets [#466](https://github.com/cliqz-oss/adblocker/pull/466) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - chore: update local assets [#463](https://github.com/cliqz-oss/adblocker/pull/463) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - chore: update local assets [#454](https://github.com/cliqz-oss/adblocker/pull/454) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore: update Electron to v8.0.0 [#452](https://github.com/cliqz-oss/adblocker/pull/452) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - Release v1.4.1 [#402](https://github.com/cliqz-oss/adblocker/pull/402) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-puppeteer`
  - puppeteer: do not block main frames [#401](https://github.com/cliqz-oss/adblocker/pull/401) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - Fix cosmetics readme [#400](https://github.com/cliqz-oss/adblocker/pull/400) ([@fcjr](https://github.com/fcjr))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - Release 1.4.0 [#391](https://github.com/cliqz-oss/adblocker/pull/391) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - Fix websocket filters handling [#388](https://github.com/cliqz-oss/adblocker/pull/388) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore: update deps [#384](https://github.com/cliqz-oss/adblocker/pull/384) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - fix: fetching resources.txt from CDN [#373](https://github.com/cliqz-oss/adblocker/pull/373) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - Release 1.2.0 [#361](https://github.com/cliqz-oss/adblocker/pull/361) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-electron`
  - fix: cosmetics injection in Electron [#358](https://github.com/cliqz-oss/adblocker/pull/358) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - Release v1.1.0 [#332](https://github.com/cliqz-oss/adblocker/pull/332) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - Fix block main document [#312](https://github.com/cliqz-oss/adblocker/pull/312) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - Release 1.0.1 [#304](https://github.com/cliqz-oss/adblocker/pull/304) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-electron`
  - fix: prevent preload scripts from overwriting existing ones [#302](https://github.com/cliqz-oss/adblocker/pull/302) ([@sentialx](https://github.com/sentialx))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - Release 1.0.0 [#301](https://github.com/cliqz-oss/adblocker/pull/301) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - Release v0.14.0 [#291](https://github.com/cliqz-oss/adblocker/pull/291) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - Release v0.13.0 [#282](https://github.com/cliqz-oss/adblocker/pull/282) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - Release v0.12.1 [#261](https://github.com/cliqz-oss/adblocker/pull/261) ([@remusao](https://github.com/remusao))

#### :nail_care: Polish

- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - Fix chrome and browser types [#481](https://github.com/cliqz-oss/adblocker/pull/481) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - Generic scriptlets are now correctly rejected [#470](https://github.com/cliqz-oss/adblocker/pull/470) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - feature: make initializing adblocker idempotent [#416](https://github.com/cliqz-oss/adblocker/pull/416) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - Implement retry mechanism while fetching resources [#414](https://github.com/cliqz-oss/adblocker/pull/414) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-webextension`
  - webextension: handler for runtime messages now returns a promise [#413](https://github.com/cliqz-oss/adblocker/pull/413) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-electron`
  - Bump electron version to 7 + inject CSS with 'user' origin [#385](https://github.com/cliqz-oss/adblocker/pull/385) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - make it easier to use HTML filtering outside of `WebExtensionBlocker` [#368](https://github.com/cliqz-oss/adblocker/pull/368) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-webextension`
  - removeListener regardless of engine config [#359](https://github.com/cliqz-oss/adblocker/pull/359) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - chore: clean-ups and small optimizations [#334](https://github.com/cliqz-oss/adblocker/pull/334) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - simplify reverse index by removing special tokens handling [#333](https://github.com/cliqz-oss/adblocker/pull/333) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-content`, `@cliqz/adblocker`
  - small improvements [#300](https://github.com/cliqz-oss/adblocker/pull/300) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension`
  - enhancement: only register listeners when network/cosmetics filtering is enabled [#288](https://github.com/cliqz-oss/adblocker/pull/288) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-electron`, `@cliqz/adblocker`
  - electron: fix bundles [#249](https://github.com/cliqz-oss/adblocker/pull/249) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-electron`, `@cliqz/adblocker`
  - electron: promote mutationObserver option to main config + fix constructor and parse methods [#248](https://github.com/cliqz-oss/adblocker/pull/248) ([@remusao](https://github.com/remusao))

#### ⚠️  Pushed to master

- ci: do not set label for assets updating  ([@remusao](https://github.com/remusao))
- ci: set release commit to adblocker-bot  ([@remusao](https://github.com/remusao))
- ci: revert to checkout@v1 for release  ([@remusao](https://github.com/remusao))
- ci: change token used to generate CHANGELOG  ([@remusao](https://github.com/remusao))
- ci: use adblocker-bot token in workflows  ([@remusao](https://github.com/remusao))
- ci: codebook generation reset cron schedule  ([@remusao](https://github.com/remusao))
- ci: add LGTM config  ([@remusao](https://github.com/remusao))
- ci: assets adjust cron  ([@remusao](https://github.com/remusao))
- ci: update assets also generate codebooks  ([@remusao](https://github.com/remusao))
- ci: assets updating use custom github token  ([@remusao](https://github.com/remusao))
- ci: attempt to fix assets updating  ([@remusao](https://github.com/remusao))
- ci: add automatic generation of codebooks  ([@remusao](https://github.com/remusao))
- ci: try to trigger tests for automated PRs  ([@remusao](https://github.com/remusao))
- ci: test assets updating action by triggering on push  ([@remusao](https://github.com/remusao))
- Remove @master for local actions  ([@remusao](https://github.com/remusao))
- Attempt at fixing typescript actions  ([@remusao](https://github.com/remusao))
- Remove explit npm ci in actions and add caching for yarn  ([@remusao](https://github.com/remusao))
- Add transpiled actions to source tree  ([@remusao](https://github.com/remusao))
- Fix indentation in dependabot config  ([@remusao](https://github.com/remusao))
- Update release instructions in README  ([@remusao](https://github.com/remusao))
- Fix check about updated CHANGELOG  ([@remusao](https://github.com/remusao))
- Fix typo in package.json  ([@remusao](https://github.com/remusao))
- Fix lerna publish command  ([@remusao](https://github.com/remusao))
- Add yarn bootstrap before publishing  ([@remusao](https://github.com/remusao))
- Fix publishing pipeline  ([@remusao](https://github.com/remusao))
- Rename publish command for compabitlity  ([@remusao](https://github.com/remusao))
- Detect if CHANGELOG had no update  ([@remusao](https://github.com/remusao))
- Add .changelog to gitignore  ([@remusao](https://github.com/remusao))
- Fix GitHub release  ([@remusao](https://github.com/remusao))
- Fix github publishing action  ([@remusao](https://github.com/remusao))
- Local reference to actions  ([@remusao](https://github.com/remusao))
- Specify version for GitHub actions  ([@remusao](https://github.com/remusao))
- Lerna publish do not amend  ([@remusao](https://github.com/remusao))
- Add release command  ([@remusao](https://github.com/remusao))
- Update README.md with badges  ([@remusao](https://github.com/remusao))
- talks: add slides for hacktoberfest2019 meetup presentation  ([@remusao](https://github.com/remusao))
- Update README.md  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.7.3  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.7.2  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-webextension`
  - Export BlockingContext class  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.7.1  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - Bump internal engine version  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.7.0  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.6.3  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.6.2  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.6.1  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.6.0  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - ci: update assets  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - ci: do not take annoyance lists into account for codebooks  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - ci: use easylist cookie instead of cookiemonster  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - ci: update to latest tsmaz for codebook generation  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - ci: parallelize codebooks building  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - ci: generate codebooks every day with CRON  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - ci: disable automatic cosmetics codebook generation  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - Add repository directory metadata + update dependabot config  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.5.0  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - Bump engine internal version  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.4.24  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.4.23  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.4.22  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.4.21  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.4.20  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.4.19  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.4.18  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.4.17  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.4.16  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.4.15  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.4.14  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.4.13  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.4.12  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.4.11  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.4.10  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.4.9  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.4.8  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.4.7  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.4.6  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.4.5  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.4.4  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.4.3  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - Bump internal engine version  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - handle case where diff is empty in stress-test  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - fix: restore yoyo server list to unbreak adblocker v0.13.x  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - Release v0.13.2  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - serve Peter Lower list from local asset to avoid certificate issue  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - Release v0.13.1  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-electron`
  - set 'Request.tabId' to 'webContentsId' in Electron platform  ([@remusao](https://github.com/remusao))

#### :house: Internal

- chore: automate update of locale assets [#419](https://github.com/cliqz-oss/adblocker/pull/419) ([@remusao](https://github.com/remusao))
- testing: Only run CI on Linux [#418](https://github.com/cliqz-oss/adblocker/pull/418) ([@remusao](https://github.com/remusao))
- Migrate local GitHub actions to TypeScript [#412](https://github.com/cliqz-oss/adblocker/pull/412) ([@remusao](https://github.com/remusao))
- Add dependabot config [#410](https://github.com/cliqz-oss/adblocker/pull/410) ([@remusao](https://github.com/remusao))
- Add action to release on NPM [#409](https://github.com/cliqz-oss/adblocker/pull/409) ([@remusao](https://github.com/remusao))
- Add GitHub actions for releasing on GitHub [#407](https://github.com/cliqz-oss/adblocker/pull/407) ([@remusao](https://github.com/remusao))
- Make use of GitHub actions for CI [#405](https://github.com/cliqz-oss/adblocker/pull/405) ([@remusao](https://github.com/remusao))
- Remove travis config [#399](https://github.com/cliqz-oss/adblocker/pull/399) ([@remusao](https://github.com/remusao))
- bench: add runner for minbrowser blocker [#314](https://github.com/cliqz-oss/adblocker/pull/314) ([@remusao](https://github.com/remusao))
- ci: enable latest Node.js + LTS [#293](https://github.com/cliqz-oss/adblocker/pull/293) ([@remusao](https://github.com/remusao))
- chore: remove un-used dependencies [#289](https://github.com/cliqz-oss/adblocker/pull/289) ([@remusao](https://github.com/remusao))
- fix memory issue by pinning Node.js version [#265](https://github.com/cliqz-oss/adblocker/pull/265) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - chore: update local assets [#449](https://github.com/cliqz-oss/adblocker/pull/449) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - Update assets + smaz [#447](https://github.com/cliqz-oss/adblocker/pull/447) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - chore: update local assets [#446](https://github.com/cliqz-oss/adblocker/pull/446) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - chore: update local assets [#444](https://github.com/cliqz-oss/adblocker/pull/444) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - Update assets [#439](https://github.com/cliqz-oss/adblocker/pull/439) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore: update dependencies [#423](https://github.com/cliqz-oss/adblocker/pull/423) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - Clean-up tooling [#415](https://github.com/cliqz-oss/adblocker/pull/415) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-puppeteer`
  - Bump puppeteer to v2 [#386](https://github.com/cliqz-oss/adblocker/pull/386) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - chore: update local assets + generate compression codebooks [#335](https://github.com/cliqz-oss/adblocker/pull/335) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - add test case to make sure +js() can be whitelisted [#329](https://github.com/cliqz-oss/adblocker/pull/329) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore: clean-ups [#294](https://github.com/cliqz-oss/adblocker/pull/294) [#294](https://github.com/cliqz-oss/adblocker/pull/294) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - switch to using @cliqz/metalint for project linting [#255](https://github.com/cliqz-oss/adblocker/pull/255) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - clean-up and update local assets + regenerate codebooks [#290](https://github.com/cliqz-oss/adblocker/pull/290) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - create new @cliqz/adblocker-content package with common utils [#264](https://github.com/cliqz-oss/adblocker/pull/264) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - Update assets + re-generate compression codebooks [#256](https://github.com/cliqz-oss/adblocker/pull/256) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-electron`, `@cliqz/adblocker`
  - electron: update to 6.0.1 [#250](https://github.com/cliqz-oss/adblocker/pull/250) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - fix source maps in all packages [#219](https://github.com/cliqz-oss/adblocker/pull/219) ([@remusao](https://github.com/remusao))

#### :memo: Documentation

- Add slides of talk at adblockerdevsummit 2019 [#355](https://github.com/cliqz-oss/adblocker/pull/355) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - Update readmes [#281](https://github.com/cliqz-oss/adblocker/pull/281) ([@remusao](https://github.com/remusao))

#### :nut_and_bolt: Dependencies

-  [#473](https://github.com/cliqz-oss/adblocker/pull/473) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#465](https://github.com/cliqz-oss/adblocker/pull/465) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#460](https://github.com/cliqz-oss/adblocker/pull/460) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#450](https://github.com/cliqz-oss/adblocker/pull/450) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#448](https://github.com/cliqz-oss/adblocker/pull/448) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#445](https://github.com/cliqz-oss/adblocker/pull/445) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#442](https://github.com/cliqz-oss/adblocker/pull/442) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#426](https://github.com/cliqz-oss/adblocker/pull/426) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#429](https://github.com/cliqz-oss/adblocker/pull/429) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#428](https://github.com/cliqz-oss/adblocker/pull/428) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#425](https://github.com/cliqz-oss/adblocker/pull/425) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump tldts-experimental from 5.5.0 to 5.6.0 [#377](https://github.com/cliqz-oss/adblocker/pull/377) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/puppeteer from 1.20.1 to 1.20.2 [#376](https://github.com/cliqz-oss/adblocker/pull/376) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump lerna from 3.16.5 to 3.17.0 [#375](https://github.com/cliqz-oss/adblocker/pull/375) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump typescript from 3.6.3 to 3.6.4 [#374](https://github.com/cliqz-oss/adblocker/pull/374) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump electron from 6.0.11 to 6.0.12 [#370](https://github.com/cliqz-oss/adblocker/pull/370) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump @types/node from 12.7.11 to 12.7.12 [#371](https://github.com/cliqz-oss/adblocker/pull/371) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump lerna from 3.16.4 to 3.16.5 [#369](https://github.com/cliqz-oss/adblocker/pull/369) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 1.23.0 to 1.23.1 [#367](https://github.com/cliqz-oss/adblocker/pull/367) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 1.22.0 to 1.23.0 [#364](https://github.com/cliqz-oss/adblocker/pull/364) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/puppeteer from 1.20.0 to 1.20.1 [#365](https://github.com/cliqz-oss/adblocker/pull/365) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump @types/node from 12.7.9 to 12.7.11 [#366](https://github.com/cliqz-oss/adblocker/pull/366) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump electron from 6.0.10 to 6.0.11 [#363](https://github.com/cliqz-oss/adblocker/pull/363) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump @types/node from 12.7.8 to 12.7.9 [#362](https://github.com/cliqz-oss/adblocker/pull/362) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 1.21.4 to 1.22.0 [#356](https://github.com/cliqz-oss/adblocker/pull/356) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/puppeteer from 1.19.1 to 1.20.0 [#357](https://github.com/cliqz-oss/adblocker/pull/357) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump @types/node from 12.7.7 to 12.7.8 [#353](https://github.com/cliqz-oss/adblocker/pull/353) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump tldts-experimental from 5.4.1 to 5.5.0 [#351](https://github.com/cliqz-oss/adblocker/pull/351) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump @types/node from 12.7.5 to 12.7.7 [#352](https://github.com/cliqz-oss/adblocker/pull/352) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump @types/node-fetch from 2.5.1 to 2.5.2 [#343](https://github.com/cliqz-oss/adblocker/pull/343) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump electron from 6.0.9 to 6.0.10 [#340](https://github.com/cliqz-oss/adblocker/pull/340) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump @types/node-fetch from 2.5.0 to 2.5.1 [#336](https://github.com/cliqz-oss/adblocker/pull/336) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump tldts-experimental from 5.4.0 to 5.4.1 [#330](https://github.com/cliqz-oss/adblocker/pull/330) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump rollup from 1.21.3 to 1.21.4 [#331](https://github.com/cliqz-oss/adblocker/pull/331) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump ts-node from 8.3.0 to 8.4.1 [#324](https://github.com/cliqz-oss/adblocker/pull/324) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump rollup from 1.21.2 to 1.21.3 [#325](https://github.com/cliqz-oss/adblocker/pull/325) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump puppeteer from 1.19.0 to 1.20.0 [#326](https://github.com/cliqz-oss/adblocker/pull/326) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump ts-jest from 24.0.2 to 24.1.0 [#321](https://github.com/cliqz-oss/adblocker/pull/321) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump electron from 6.0.8 to 6.0.9 [#322](https://github.com/cliqz-oss/adblocker/pull/322) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump @types/node from 12.7.4 to 12.7.5 [#320](https://github.com/cliqz-oss/adblocker/pull/320) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump typescript from 3.6.2 to 3.6.3 [#319](https://github.com/cliqz-oss/adblocker/pull/319) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump rollup from 1.21.0 to 1.21.2 [#316](https://github.com/cliqz-oss/adblocker/pull/316) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump electron from 6.0.7 to 6.0.8 [#317](https://github.com/cliqz-oss/adblocker/pull/317) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump tslint from 5.19.0 to 5.20.0 [#318](https://github.com/cliqz-oss/adblocker/pull/318) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump rollup from 1.20.3 to 1.21.0 [#315](https://github.com/cliqz-oss/adblocker/pull/315) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump @types/node from 12.7.3 to 12.7.4 [#313](https://github.com/cliqz-oss/adblocker/pull/313) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump electron from 6.0.5 to 6.0.7 [#309](https://github.com/cliqz-oss/adblocker/pull/309) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump @types/node from 12.7.2 to 12.7.3 [#310](https://github.com/cliqz-oss/adblocker/pull/310) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump tldts-experimental from 5.3.2 to 5.4.0 [#308](https://github.com/cliqz-oss/adblocker/pull/308) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump typescript from 3.5.3 to 3.6.2 [#307](https://github.com/cliqz-oss/adblocker/pull/307) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump rollup from 1.20.2 to 1.20.3 [#306](https://github.com/cliqz-oss/adblocker/pull/306) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump electron from 6.0.4 to 6.0.5 [#303](https://github.com/cliqz-oss/adblocker/pull/303) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump rollup from 1.20.1 to 1.20.2 [#299](https://github.com/cliqz-oss/adblocker/pull/299) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump electron from 6.0.3 to 6.0.4 [#298](https://github.com/cliqz-oss/adblocker/pull/298) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump rollup from 1.20.0 to 1.20.1 [#296](https://github.com/cliqz-oss/adblocker/pull/296) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump rollup from 1.19.4 to 1.20.0 [#295](https://github.com/cliqz-oss/adblocker/pull/295) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump tslint from 5.18.0 to 5.19.0 [#292](https://github.com/cliqz-oss/adblocker/pull/292) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump @types/jest from 24.0.17 to 24.0.18 [#286](https://github.com/cliqz-oss/adblocker/pull/286) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump electron from 6.0.2 to 6.0.3 [#285](https://github.com/cliqz-oss/adblocker/pull/285) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump jest from 24.8.0 to 24.9.0 [#283](https://github.com/cliqz-oss/adblocker/pull/283) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump husky from 3.0.3 to 3.0.4 [#284](https://github.com/cliqz-oss/adblocker/pull/284) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump @types/node from 12.7.1 to 12.7.2 [#279](https://github.com/cliqz-oss/adblocker/pull/279) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Update rimraf requirement in /packages/adblocker-webextension-example [#272](https://github.com/cliqz-oss/adblocker/pull/272) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump rimraf from 2.6.3 to 2.7.0 [#263](https://github.com/cliqz-oss/adblocker/pull/263) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump @types/puppeteer from 1.19.0 to 1.19.1 [#259](https://github.com/cliqz-oss/adblocker/pull/259) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump electron from 6.0.1 to 6.0.2 [#258](https://github.com/cliqz-oss/adblocker/pull/258) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump husky from 3.0.2 to 3.0.3 [#254](https://github.com/cliqz-oss/adblocker/pull/254) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump @types/node from 12.7.0 to 12.7.1 [#252](https://github.com/cliqz-oss/adblocker/pull/252) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump rollup from 1.19.3 to 1.19.4 [#253](https://github.com/cliqz-oss/adblocker/pull/253) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump @types/node from 12.6.9 to 12.7.0 [#244](https://github.com/cliqz-oss/adblocker/pull/244) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump rollup from 1.18.0 to 1.19.3 [#241](https://github.com/cliqz-oss/adblocker/pull/241) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump @types/jest from 24.0.16 to 24.0.17 [#240](https://github.com/cliqz-oss/adblocker/pull/240) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump rollup from 1.17.0 to 1.18.0 [#226](https://github.com/cliqz-oss/adblocker/pull/226) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump @types/node from 12.6.8 to 12.6.9 [#227](https://github.com/cliqz-oss/adblocker/pull/227) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump @types/jest from 24.0.15 to 24.0.16 [#225](https://github.com/cliqz-oss/adblocker/pull/225) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump husky from 3.0.1 to 3.0.2 [#223](https://github.com/cliqz-oss/adblocker/pull/223) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump tldts-experimental from 5.3.1 to 5.3.2 [#222](https://github.com/cliqz-oss/adblocker/pull/222) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump @types/puppeteer from 1.12.4 to 1.19.0 [#221](https://github.com/cliqz-oss/adblocker/pull/221) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  -  [#480](https://github.com/cliqz-oss/adblocker/pull/480) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  -  [#451](https://github.com/cliqz-oss/adblocker/pull/451) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  -  [#433](https://github.com/cliqz-oss/adblocker/pull/433) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  -  [#431](https://github.com/cliqz-oss/adblocker/pull/431) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - build(deps-dev): bump @types/chrome from 0.0.88 to 0.0.89 [#349](https://github.com/cliqz-oss/adblocker/pull/349) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-content`
  - Bump rimraf from 2.7.0 to 3.0.0 [#278](https://github.com/cliqz-oss/adblocker/pull/278) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker`
  - Update rimraf requirement from ^2.6.3 to ^3.0.0 in /packages/adblocker [#277](https://github.com/cliqz-oss/adblocker/pull/277) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-puppeteer`
  - Update rimraf requirement in /packages/adblocker-puppeteer [#276](https://github.com/cliqz-oss/adblocker/pull/276) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-webextension`
  - Update rimraf requirement in /packages/adblocker-webextension [#275](https://github.com/cliqz-oss/adblocker/pull/275) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-webextension-cosmetics`
  - Update rimraf requirement in /packages/adblocker-webextension-cosmetics [#274](https://github.com/cliqz-oss/adblocker/pull/274) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-electron`
  - Update rimraf requirement in /packages/adblocker-electron [#273](https://github.com/cliqz-oss/adblocker/pull/273) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-circumvention`
  - Update rimraf requirement in /packages/adblocker-circumvention [#269](https://github.com/cliqz-oss/adblocker/pull/269) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - Bump @types/chrome from 0.0.86 to 0.0.88 [#239](https://github.com/cliqz-oss/adblocker/pull/239) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 6

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])
- Adblocker Bot ([@adblocker-bot](https://github.com/adblocker-bot))
- Eryk Rakowski ([@sentialx](https://github.com/sentialx))
- Frank Chiarulli Jr. ([@fcjr](https://github.com/fcjr))
- Krzysztof Jan Modras ([@chrmod](https://github.com/chrmod))
- Rémi ([@remusao](https://github.com/remusao))

---

# v0.13.0 (Wed Feb 12 2020)

#### :rocket: New Feature

- `@cliqz/adblocker`
  - Implement redirect-rule filters handling [#478](https://github.com/cliqz-oss/adblocker/pull/478) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker`
  - Add helper to cache adblocker engine [#477](https://github.com/cliqz-oss/adblocker/pull/477) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension`
  - Add helper to know if blocking is enabled in context [#475](https://github.com/cliqz-oss/adblocker/pull/475) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - Handle disabling scriptlets [#471](https://github.com/cliqz-oss/adblocker/pull/471) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - Implement redirect=none semantics [#469](https://github.com/cliqz-oss/adblocker/pull/469) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - Implement specifichide, elemhide and aliases [#468](https://github.com/cliqz-oss/adblocker/pull/468) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - Add support for compound HTML filtering rules [#453](https://github.com/cliqz-oss/adblocker/pull/453) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - feat: support subset of HTML filtering rules (^script:has-text(...)) [#339](https://github.com/cliqz-oss/adblocker/pull/339) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - feat: add support for 'all' option [#338](https://github.com/cliqz-oss/adblocker/pull/338) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - feat: add support for redirect-rule option [#337](https://github.com/cliqz-oss/adblocker/pull/337) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension`
  - Allow blocker unload [#328](https://github.com/cliqz-oss/adblocker/pull/328) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - feature: support inline-script and inline-font options [#327](https://github.com/cliqz-oss/adblocker/pull/327) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - provide helpers to download and build engines from lists [#280](https://github.com/cliqz-oss/adblocker/pull/280) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - implement simple event emitter for FiltersEngine and sub-classes [#251](https://github.com/cliqz-oss/adblocker/pull/251) ([@remusao](https://github.com/remusao))

#### :running_woman: Performance

- `@cliqz/adblocker`
  - Optimize cosmetics injection [#287](https://github.com/cliqz-oss/adblocker/pull/287) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - allow correct size allocation for data views [#257](https://github.com/cliqz-oss/adblocker/pull/257) ([@remusao](https://github.com/remusao))

#### :bug: Bug Fix

- docs: add support for PR labels [#404](https://github.com/cliqz-oss/adblocker/pull/404) ([@remusao](https://github.com/remusao))
- Set up CI with Azure Pipelines [#397](https://github.com/cliqz-oss/adblocker/pull/397) ([@chrmod](https://github.com/chrmod))
- `@cliqz/adblocker`
  - chore: update local assets [#485](https://github.com/cliqz-oss/adblocker/pull/485) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - chore: update local assets [#479](https://github.com/cliqz-oss/adblocker/pull/479) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Put types for chrome and firefox as direct dependencies instead of dev [#476](https://github.com/cliqz-oss/adblocker/pull/476) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - chore: update local assets [#474](https://github.com/cliqz-oss/adblocker/pull/474) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#472](https://github.com/cliqz-oss/adblocker/pull/472) ([@adblocker-bot](https://github.com/adblocker-bot) [@remusao](https://github.com/remusao))
- `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - fix: HTML filtering and scriptlets injection [#464](https://github.com/cliqz-oss/adblocker/pull/464) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - chore: update local assets [#466](https://github.com/cliqz-oss/adblocker/pull/466) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - chore: update local assets [#463](https://github.com/cliqz-oss/adblocker/pull/463) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - chore: update local assets [#454](https://github.com/cliqz-oss/adblocker/pull/454) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore: update Electron to v8.0.0 [#452](https://github.com/cliqz-oss/adblocker/pull/452) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - Release v1.4.1 [#402](https://github.com/cliqz-oss/adblocker/pull/402) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-puppeteer`
  - puppeteer: do not block main frames [#401](https://github.com/cliqz-oss/adblocker/pull/401) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - Fix cosmetics readme [#400](https://github.com/cliqz-oss/adblocker/pull/400) ([@fcjr](https://github.com/fcjr))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - Release 1.4.0 [#391](https://github.com/cliqz-oss/adblocker/pull/391) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - Fix websocket filters handling [#388](https://github.com/cliqz-oss/adblocker/pull/388) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore: update deps [#384](https://github.com/cliqz-oss/adblocker/pull/384) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - fix: fetching resources.txt from CDN [#373](https://github.com/cliqz-oss/adblocker/pull/373) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - Release 1.2.0 [#361](https://github.com/cliqz-oss/adblocker/pull/361) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-electron`
  - fix: cosmetics injection in Electron [#358](https://github.com/cliqz-oss/adblocker/pull/358) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - Release v1.1.0 [#332](https://github.com/cliqz-oss/adblocker/pull/332) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - Fix block main document [#312](https://github.com/cliqz-oss/adblocker/pull/312) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - Release 1.0.1 [#304](https://github.com/cliqz-oss/adblocker/pull/304) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-electron`
  - fix: prevent preload scripts from overwriting existing ones [#302](https://github.com/cliqz-oss/adblocker/pull/302) ([@sentialx](https://github.com/sentialx))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - Release 1.0.0 [#301](https://github.com/cliqz-oss/adblocker/pull/301) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - Release v0.14.0 [#291](https://github.com/cliqz-oss/adblocker/pull/291) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - Release v0.13.0 [#282](https://github.com/cliqz-oss/adblocker/pull/282) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - Release v0.12.1 [#261](https://github.com/cliqz-oss/adblocker/pull/261) ([@remusao](https://github.com/remusao))

#### :nail_care: Polish

- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - Fix chrome and browser types [#481](https://github.com/cliqz-oss/adblocker/pull/481) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - Generic scriptlets are now correctly rejected [#470](https://github.com/cliqz-oss/adblocker/pull/470) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - feature: make initializing adblocker idempotent [#416](https://github.com/cliqz-oss/adblocker/pull/416) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - Implement retry mechanism while fetching resources [#414](https://github.com/cliqz-oss/adblocker/pull/414) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-webextension`
  - webextension: handler for runtime messages now returns a promise [#413](https://github.com/cliqz-oss/adblocker/pull/413) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-electron`
  - Bump electron version to 7 + inject CSS with 'user' origin [#385](https://github.com/cliqz-oss/adblocker/pull/385) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - make it easier to use HTML filtering outside of `WebExtensionBlocker` [#368](https://github.com/cliqz-oss/adblocker/pull/368) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-webextension`
  - removeListener regardless of engine config [#359](https://github.com/cliqz-oss/adblocker/pull/359) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - chore: clean-ups and small optimizations [#334](https://github.com/cliqz-oss/adblocker/pull/334) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - simplify reverse index by removing special tokens handling [#333](https://github.com/cliqz-oss/adblocker/pull/333) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-content`, `@cliqz/adblocker`
  - small improvements [#300](https://github.com/cliqz-oss/adblocker/pull/300) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension`
  - enhancement: only register listeners when network/cosmetics filtering is enabled [#288](https://github.com/cliqz-oss/adblocker/pull/288) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-electron`, `@cliqz/adblocker`
  - electron: fix bundles [#249](https://github.com/cliqz-oss/adblocker/pull/249) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-electron`, `@cliqz/adblocker`
  - electron: promote mutationObserver option to main config + fix constructor and parse methods [#248](https://github.com/cliqz-oss/adblocker/pull/248) ([@remusao](https://github.com/remusao))

#### ⚠️  Pushed to master

- ci: do not set label for assets updating  ([@remusao](https://github.com/remusao))
- ci: set release commit to adblocker-bot  ([@remusao](https://github.com/remusao))
- ci: revert to checkout@v1 for release  ([@remusao](https://github.com/remusao))
- ci: change token used to generate CHANGELOG  ([@remusao](https://github.com/remusao))
- ci: use adblocker-bot token in workflows  ([@remusao](https://github.com/remusao))
- ci: codebook generation reset cron schedule  ([@remusao](https://github.com/remusao))
- ci: add LGTM config  ([@remusao](https://github.com/remusao))
- ci: assets adjust cron  ([@remusao](https://github.com/remusao))
- ci: update assets also generate codebooks  ([@remusao](https://github.com/remusao))
- ci: assets updating use custom github token  ([@remusao](https://github.com/remusao))
- ci: attempt to fix assets updating  ([@remusao](https://github.com/remusao))
- ci: add automatic generation of codebooks  ([@remusao](https://github.com/remusao))
- ci: try to trigger tests for automated PRs  ([@remusao](https://github.com/remusao))
- ci: test assets updating action by triggering on push  ([@remusao](https://github.com/remusao))
- Remove @master for local actions  ([@remusao](https://github.com/remusao))
- Attempt at fixing typescript actions  ([@remusao](https://github.com/remusao))
- Remove explit npm ci in actions and add caching for yarn  ([@remusao](https://github.com/remusao))
- Add transpiled actions to source tree  ([@remusao](https://github.com/remusao))
- Fix indentation in dependabot config  ([@remusao](https://github.com/remusao))
- Update release instructions in README  ([@remusao](https://github.com/remusao))
- Fix check about updated CHANGELOG  ([@remusao](https://github.com/remusao))
- Fix typo in package.json  ([@remusao](https://github.com/remusao))
- Fix lerna publish command  ([@remusao](https://github.com/remusao))
- Add yarn bootstrap before publishing  ([@remusao](https://github.com/remusao))
- Fix publishing pipeline  ([@remusao](https://github.com/remusao))
- Rename publish command for compabitlity  ([@remusao](https://github.com/remusao))
- Detect if CHANGELOG had no update  ([@remusao](https://github.com/remusao))
- Add .changelog to gitignore  ([@remusao](https://github.com/remusao))
- Fix GitHub release  ([@remusao](https://github.com/remusao))
- Fix github publishing action  ([@remusao](https://github.com/remusao))
- Local reference to actions  ([@remusao](https://github.com/remusao))
- Specify version for GitHub actions  ([@remusao](https://github.com/remusao))
- Lerna publish do not amend  ([@remusao](https://github.com/remusao))
- Add release command  ([@remusao](https://github.com/remusao))
- Update README.md with badges  ([@remusao](https://github.com/remusao))
- talks: add slides for hacktoberfest2019 meetup presentation  ([@remusao](https://github.com/remusao))
- Update README.md  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.7.3  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.7.2  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-webextension`
  - Export BlockingContext class  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.7.1  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - Bump internal engine version  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.7.0  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.6.3  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.6.2  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.6.1  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.6.0  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - ci: update assets  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - ci: do not take annoyance lists into account for codebooks  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - ci: use easylist cookie instead of cookiemonster  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - ci: update to latest tsmaz for codebook generation  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - ci: parallelize codebooks building  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - ci: generate codebooks every day with CRON  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - ci: disable automatic cosmetics codebook generation  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - Add repository directory metadata + update dependabot config  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.5.0  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - Bump engine internal version  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.4.24  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.4.23  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.4.22  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.4.21  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.4.20  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.4.19  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.4.18  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.4.17  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.4.16  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.4.15  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.4.14  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.4.13  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.4.12  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.4.11  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.4.10  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.4.9  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.4.8  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.4.7  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.4.6  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.4.5  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.4.4  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore(release): publish v1.4.3  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - Bump internal engine version  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - handle case where diff is empty in stress-test  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - fix: restore yoyo server list to unbreak adblocker v0.13.x  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - Release v0.13.2  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - serve Peter Lower list from local asset to avoid certificate issue  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - Release v0.13.1  ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-electron`
  - set 'Request.tabId' to 'webContentsId' in Electron platform  ([@remusao](https://github.com/remusao))

#### :house: Internal

- chore: automate update of locale assets [#419](https://github.com/cliqz-oss/adblocker/pull/419) ([@remusao](https://github.com/remusao))
- testing: Only run CI on Linux [#418](https://github.com/cliqz-oss/adblocker/pull/418) ([@remusao](https://github.com/remusao))
- Migrate local GitHub actions to TypeScript [#412](https://github.com/cliqz-oss/adblocker/pull/412) ([@remusao](https://github.com/remusao))
- Add dependabot config [#410](https://github.com/cliqz-oss/adblocker/pull/410) ([@remusao](https://github.com/remusao))
- Add action to release on NPM [#409](https://github.com/cliqz-oss/adblocker/pull/409) ([@remusao](https://github.com/remusao))
- Add GitHub actions for releasing on GitHub [#407](https://github.com/cliqz-oss/adblocker/pull/407) ([@remusao](https://github.com/remusao))
- Make use of GitHub actions for CI [#405](https://github.com/cliqz-oss/adblocker/pull/405) ([@remusao](https://github.com/remusao))
- Remove travis config [#399](https://github.com/cliqz-oss/adblocker/pull/399) ([@remusao](https://github.com/remusao))
- bench: add runner for minbrowser blocker [#314](https://github.com/cliqz-oss/adblocker/pull/314) ([@remusao](https://github.com/remusao))
- ci: enable latest Node.js + LTS [#293](https://github.com/cliqz-oss/adblocker/pull/293) ([@remusao](https://github.com/remusao))
- chore: remove un-used dependencies [#289](https://github.com/cliqz-oss/adblocker/pull/289) ([@remusao](https://github.com/remusao))
- fix memory issue by pinning Node.js version [#265](https://github.com/cliqz-oss/adblocker/pull/265) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - chore: update local assets [#449](https://github.com/cliqz-oss/adblocker/pull/449) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - Update assets + smaz [#447](https://github.com/cliqz-oss/adblocker/pull/447) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - chore: update local assets [#446](https://github.com/cliqz-oss/adblocker/pull/446) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - chore: update local assets [#444](https://github.com/cliqz-oss/adblocker/pull/444) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - Update assets [#439](https://github.com/cliqz-oss/adblocker/pull/439) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore: update dependencies [#423](https://github.com/cliqz-oss/adblocker/pull/423) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - Clean-up tooling [#415](https://github.com/cliqz-oss/adblocker/pull/415) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-puppeteer`
  - Bump puppeteer to v2 [#386](https://github.com/cliqz-oss/adblocker/pull/386) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - chore: update local assets + generate compression codebooks [#335](https://github.com/cliqz-oss/adblocker/pull/335) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - add test case to make sure +js() can be whitelisted [#329](https://github.com/cliqz-oss/adblocker/pull/329) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - chore: clean-ups [#294](https://github.com/cliqz-oss/adblocker/pull/294) [#294](https://github.com/cliqz-oss/adblocker/pull/294) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - switch to using @cliqz/metalint for project linting [#255](https://github.com/cliqz-oss/adblocker/pull/255) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - clean-up and update local assets + regenerate codebooks [#290](https://github.com/cliqz-oss/adblocker/pull/290) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - create new @cliqz/adblocker-content package with common utils [#264](https://github.com/cliqz-oss/adblocker/pull/264) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - Update assets + re-generate compression codebooks [#256](https://github.com/cliqz-oss/adblocker/pull/256) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-electron`, `@cliqz/adblocker`
  - electron: update to 6.0.1 [#250](https://github.com/cliqz-oss/adblocker/pull/250) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - fix source maps in all packages [#219](https://github.com/cliqz-oss/adblocker/pull/219) ([@remusao](https://github.com/remusao))

#### :memo: Documentation

- Add slides of talk at adblockerdevsummit 2019 [#355](https://github.com/cliqz-oss/adblocker/pull/355) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - Update readmes [#281](https://github.com/cliqz-oss/adblocker/pull/281) ([@remusao](https://github.com/remusao))

#### :nut_and_bolt: Dependencies

-  [#473](https://github.com/cliqz-oss/adblocker/pull/473) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#465](https://github.com/cliqz-oss/adblocker/pull/465) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#460](https://github.com/cliqz-oss/adblocker/pull/460) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#450](https://github.com/cliqz-oss/adblocker/pull/450) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#448](https://github.com/cliqz-oss/adblocker/pull/448) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#445](https://github.com/cliqz-oss/adblocker/pull/445) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#442](https://github.com/cliqz-oss/adblocker/pull/442) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#426](https://github.com/cliqz-oss/adblocker/pull/426) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#429](https://github.com/cliqz-oss/adblocker/pull/429) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#428](https://github.com/cliqz-oss/adblocker/pull/428) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#425](https://github.com/cliqz-oss/adblocker/pull/425) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump tldts-experimental from 5.5.0 to 5.6.0 [#377](https://github.com/cliqz-oss/adblocker/pull/377) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/puppeteer from 1.20.1 to 1.20.2 [#376](https://github.com/cliqz-oss/adblocker/pull/376) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump lerna from 3.16.5 to 3.17.0 [#375](https://github.com/cliqz-oss/adblocker/pull/375) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump typescript from 3.6.3 to 3.6.4 [#374](https://github.com/cliqz-oss/adblocker/pull/374) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump electron from 6.0.11 to 6.0.12 [#370](https://github.com/cliqz-oss/adblocker/pull/370) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump @types/node from 12.7.11 to 12.7.12 [#371](https://github.com/cliqz-oss/adblocker/pull/371) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump lerna from 3.16.4 to 3.16.5 [#369](https://github.com/cliqz-oss/adblocker/pull/369) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 1.23.0 to 1.23.1 [#367](https://github.com/cliqz-oss/adblocker/pull/367) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 1.22.0 to 1.23.0 [#364](https://github.com/cliqz-oss/adblocker/pull/364) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/puppeteer from 1.20.0 to 1.20.1 [#365](https://github.com/cliqz-oss/adblocker/pull/365) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump @types/node from 12.7.9 to 12.7.11 [#366](https://github.com/cliqz-oss/adblocker/pull/366) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump electron from 6.0.10 to 6.0.11 [#363](https://github.com/cliqz-oss/adblocker/pull/363) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump @types/node from 12.7.8 to 12.7.9 [#362](https://github.com/cliqz-oss/adblocker/pull/362) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 1.21.4 to 1.22.0 [#356](https://github.com/cliqz-oss/adblocker/pull/356) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/puppeteer from 1.19.1 to 1.20.0 [#357](https://github.com/cliqz-oss/adblocker/pull/357) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump @types/node from 12.7.7 to 12.7.8 [#353](https://github.com/cliqz-oss/adblocker/pull/353) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump tldts-experimental from 5.4.1 to 5.5.0 [#351](https://github.com/cliqz-oss/adblocker/pull/351) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump @types/node from 12.7.5 to 12.7.7 [#352](https://github.com/cliqz-oss/adblocker/pull/352) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump @types/node-fetch from 2.5.1 to 2.5.2 [#343](https://github.com/cliqz-oss/adblocker/pull/343) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump electron from 6.0.9 to 6.0.10 [#340](https://github.com/cliqz-oss/adblocker/pull/340) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump @types/node-fetch from 2.5.0 to 2.5.1 [#336](https://github.com/cliqz-oss/adblocker/pull/336) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump tldts-experimental from 5.4.0 to 5.4.1 [#330](https://github.com/cliqz-oss/adblocker/pull/330) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump rollup from 1.21.3 to 1.21.4 [#331](https://github.com/cliqz-oss/adblocker/pull/331) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump ts-node from 8.3.0 to 8.4.1 [#324](https://github.com/cliqz-oss/adblocker/pull/324) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump rollup from 1.21.2 to 1.21.3 [#325](https://github.com/cliqz-oss/adblocker/pull/325) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump puppeteer from 1.19.0 to 1.20.0 [#326](https://github.com/cliqz-oss/adblocker/pull/326) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump ts-jest from 24.0.2 to 24.1.0 [#321](https://github.com/cliqz-oss/adblocker/pull/321) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump electron from 6.0.8 to 6.0.9 [#322](https://github.com/cliqz-oss/adblocker/pull/322) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump @types/node from 12.7.4 to 12.7.5 [#320](https://github.com/cliqz-oss/adblocker/pull/320) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump typescript from 3.6.2 to 3.6.3 [#319](https://github.com/cliqz-oss/adblocker/pull/319) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump rollup from 1.21.0 to 1.21.2 [#316](https://github.com/cliqz-oss/adblocker/pull/316) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump electron from 6.0.7 to 6.0.8 [#317](https://github.com/cliqz-oss/adblocker/pull/317) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump tslint from 5.19.0 to 5.20.0 [#318](https://github.com/cliqz-oss/adblocker/pull/318) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump rollup from 1.20.3 to 1.21.0 [#315](https://github.com/cliqz-oss/adblocker/pull/315) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump @types/node from 12.7.3 to 12.7.4 [#313](https://github.com/cliqz-oss/adblocker/pull/313) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump electron from 6.0.5 to 6.0.7 [#309](https://github.com/cliqz-oss/adblocker/pull/309) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump @types/node from 12.7.2 to 12.7.3 [#310](https://github.com/cliqz-oss/adblocker/pull/310) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump tldts-experimental from 5.3.2 to 5.4.0 [#308](https://github.com/cliqz-oss/adblocker/pull/308) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump typescript from 3.5.3 to 3.6.2 [#307](https://github.com/cliqz-oss/adblocker/pull/307) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump rollup from 1.20.2 to 1.20.3 [#306](https://github.com/cliqz-oss/adblocker/pull/306) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump electron from 6.0.4 to 6.0.5 [#303](https://github.com/cliqz-oss/adblocker/pull/303) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump rollup from 1.20.1 to 1.20.2 [#299](https://github.com/cliqz-oss/adblocker/pull/299) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump electron from 6.0.3 to 6.0.4 [#298](https://github.com/cliqz-oss/adblocker/pull/298) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump rollup from 1.20.0 to 1.20.1 [#296](https://github.com/cliqz-oss/adblocker/pull/296) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump rollup from 1.19.4 to 1.20.0 [#295](https://github.com/cliqz-oss/adblocker/pull/295) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump tslint from 5.18.0 to 5.19.0 [#292](https://github.com/cliqz-oss/adblocker/pull/292) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump @types/jest from 24.0.17 to 24.0.18 [#286](https://github.com/cliqz-oss/adblocker/pull/286) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump electron from 6.0.2 to 6.0.3 [#285](https://github.com/cliqz-oss/adblocker/pull/285) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump jest from 24.8.0 to 24.9.0 [#283](https://github.com/cliqz-oss/adblocker/pull/283) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump husky from 3.0.3 to 3.0.4 [#284](https://github.com/cliqz-oss/adblocker/pull/284) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump @types/node from 12.7.1 to 12.7.2 [#279](https://github.com/cliqz-oss/adblocker/pull/279) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Update rimraf requirement in /packages/adblocker-webextension-example [#272](https://github.com/cliqz-oss/adblocker/pull/272) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump rimraf from 2.6.3 to 2.7.0 [#263](https://github.com/cliqz-oss/adblocker/pull/263) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump @types/puppeteer from 1.19.0 to 1.19.1 [#259](https://github.com/cliqz-oss/adblocker/pull/259) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump electron from 6.0.1 to 6.0.2 [#258](https://github.com/cliqz-oss/adblocker/pull/258) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump husky from 3.0.2 to 3.0.3 [#254](https://github.com/cliqz-oss/adblocker/pull/254) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump @types/node from 12.7.0 to 12.7.1 [#252](https://github.com/cliqz-oss/adblocker/pull/252) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump rollup from 1.19.3 to 1.19.4 [#253](https://github.com/cliqz-oss/adblocker/pull/253) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump @types/node from 12.6.9 to 12.7.0 [#244](https://github.com/cliqz-oss/adblocker/pull/244) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump rollup from 1.18.0 to 1.19.3 [#241](https://github.com/cliqz-oss/adblocker/pull/241) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump @types/jest from 24.0.16 to 24.0.17 [#240](https://github.com/cliqz-oss/adblocker/pull/240) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump rollup from 1.17.0 to 1.18.0 [#226](https://github.com/cliqz-oss/adblocker/pull/226) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump @types/node from 12.6.8 to 12.6.9 [#227](https://github.com/cliqz-oss/adblocker/pull/227) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump @types/jest from 24.0.15 to 24.0.16 [#225](https://github.com/cliqz-oss/adblocker/pull/225) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump husky from 3.0.1 to 3.0.2 [#223](https://github.com/cliqz-oss/adblocker/pull/223) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump tldts-experimental from 5.3.1 to 5.3.2 [#222](https://github.com/cliqz-oss/adblocker/pull/222) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump @types/puppeteer from 1.12.4 to 1.19.0 [#221](https://github.com/cliqz-oss/adblocker/pull/221) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker`
  -  [#482](https://github.com/cliqz-oss/adblocker/pull/482) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  -  [#480](https://github.com/cliqz-oss/adblocker/pull/480) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  -  [#451](https://github.com/cliqz-oss/adblocker/pull/451) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  -  [#433](https://github.com/cliqz-oss/adblocker/pull/433) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  -  [#431](https://github.com/cliqz-oss/adblocker/pull/431) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - build(deps-dev): bump @types/chrome from 0.0.88 to 0.0.89 [#349](https://github.com/cliqz-oss/adblocker/pull/349) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-content`
  - Bump rimraf from 2.7.0 to 3.0.0 [#278](https://github.com/cliqz-oss/adblocker/pull/278) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker`
  - Update rimraf requirement from ^2.6.3 to ^3.0.0 in /packages/adblocker [#277](https://github.com/cliqz-oss/adblocker/pull/277) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-puppeteer`
  - Update rimraf requirement in /packages/adblocker-puppeteer [#276](https://github.com/cliqz-oss/adblocker/pull/276) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-webextension`
  - Update rimraf requirement in /packages/adblocker-webextension [#275](https://github.com/cliqz-oss/adblocker/pull/275) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-webextension-cosmetics`
  - Update rimraf requirement in /packages/adblocker-webextension-cosmetics [#274](https://github.com/cliqz-oss/adblocker/pull/274) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-electron`
  - Update rimraf requirement in /packages/adblocker-electron [#273](https://github.com/cliqz-oss/adblocker/pull/273) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-circumvention`
  - Update rimraf requirement in /packages/adblocker-circumvention [#269](https://github.com/cliqz-oss/adblocker/pull/269) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - Bump @types/chrome from 0.0.86 to 0.0.88 [#239](https://github.com/cliqz-oss/adblocker/pull/239) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 6

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])
- Adblocker Bot ([@adblocker-bot](https://github.com/adblocker-bot))
- Eryk Rakowski ([@sentialx](https://github.com/sentialx))
- Frank Chiarulli Jr. ([@fcjr](https://github.com/fcjr))
- Krzysztof Jan Modras ([@chrmod](https://github.com/chrmod))
- Rémi ([@remusao](https://github.com/remusao))

---

## v1.7.3 (2020-02-11)

#### :nail_care: Polish
* `adblocker-benchmarks`, `adblocker-circumvention`, `adblocker-content`, `adblocker-electron`, `adblocker-puppeteer`, `adblocker-webextension-example`, `adblocker-webextension`, `adblocker`
  * [#481](https://github.com/cliqz-oss/adblocker/pull/481) Fix chrome and browser types ([@remusao](https://github.com/remusao))

#### Committers: 1
- Rémi ([@remusao](https://github.com/remusao))


## v1.7.0 (2020-02-10)

#### :rocket: New Feature
* `adblocker`
  * [#478](https://github.com/cliqz-oss/adblocker/pull/478) Implement redirect-rule filters handling ([@remusao](https://github.com/remusao))
* `adblocker-electron-example`, `adblocker-electron`, `adblocker-puppeteer-example`, `adblocker-puppeteer`, `adblocker`
  * [#477](https://github.com/cliqz-oss/adblocker/pull/477) Add helper to cache adblocker engine ([@remusao](https://github.com/remusao))
* `adblocker-electron`, `adblocker-puppeteer`, `adblocker-webextension`
  * [#475](https://github.com/cliqz-oss/adblocker/pull/475) Add helper to know if blocking is enabled in context ([@remusao](https://github.com/remusao))

#### :bug: Bug Fix
* `adblocker`
  * [#476](https://github.com/cliqz-oss/adblocker/pull/476) Put types for chrome and firefox as direct dependencies instead of dev ([@remusao](https://github.com/remusao))

#### Committers: 1
- Rémi ([@remusao](https://github.com/remusao))


## v1.6.0 (2020-02-09)

#### :rocket: New Feature
* `adblocker`
  * [#469](https://github.com/cliqz-oss/adblocker/pull/469) Implement redirect=none semantics ([@remusao](https://github.com/remusao))
  * [#468](https://github.com/cliqz-oss/adblocker/pull/468) Implement specifichide, elemhide and aliases ([@remusao](https://github.com/remusao))
  * [#453](https://github.com/cliqz-oss/adblocker/pull/453) Add support for compound HTML filtering rules ([@remusao](https://github.com/remusao))
* `adblocker-circumvention`, `adblocker-content`, `adblocker-electron-example`, `adblocker-electron`, `adblocker-puppeteer-example`, `adblocker-puppeteer`, `adblocker-webextension-cosmetics`, `adblocker-webextension-example`, `adblocker-webextension`, `adblocker`
  * [#416](https://github.com/cliqz-oss/adblocker/pull/416) Make initializing instances of blockers idempotent ([@remusao](https://github.com/remusao))

#### :bug: Bug Fix
* `adblocker-webextension-example`, `adblocker-webextension`, `adblocker`
  * [#464](https://github.com/cliqz-oss/adblocker/pull/464) fix: HTML filtering and scriptlets injection ([@remusao](https://github.com/remusao))

#### :nail_care: Polish
* `adblocker`
  * [#471](https://github.com/cliqz-oss/adblocker/pull/471) Handle disabling scriptlets ([@remusao](https://github.com/remusao))
  * [#470](https://github.com/cliqz-oss/adblocker/pull/470) Generic scriptlets are now correctly rejected ([@remusao](https://github.com/remusao))

#### :house: Internal
* `adblocker-circumvention`, `adblocker-content`, `adblocker-electron-example`, `adblocker-electron-preload`, `adblocker-electron`, `adblocker-webextension-cosmetics`, `adblocker-webextension-example`, `adblocker-webextension`, `adblocker`
  * [#452](https://github.com/cliqz-oss/adblocker/pull/452) chore: update Electron to v8.0.0 ([@remusao](https://github.com/remusao))
* `adblocker-benchmarks`, `adblocker-circumvention`, `adblocker-content`, `adblocker-electron-example`, `adblocker-electron`, `adblocker-puppeteer-example`, `adblocker-puppeteer`, `adblocker-webextension-cosmetics`, `adblocker-webextension-example`, `adblocker-webextension`, `adblocker`
  * [#423](https://github.com/cliqz-oss/adblocker/pull/423) chore: update dependencies ([@remusao](https://github.com/remusao))
* Other
  * [#419](https://github.com/cliqz-oss/adblocker/pull/419) chore: automate update of locale assets ([@remusao](https://github.com/remusao))
  * [#418](https://github.com/cliqz-oss/adblocker/pull/418) Only run CI tests on Linux ([@remusao](https://github.com/remusao))

#### Committers: 3
- Adblocker Bot ([@adblocker-bot](https://github.com/adblocker-bot))
- Rémi ([@remusao](https://github.com/remusao))
- [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)


## v1.5.0 (2020-01-16)

#### :nail_care: Polish
* `adblocker`
  * [#414](https://github.com/cliqz-oss/adblocker/pull/414) Implement retry mechanism while fetching resources ([@remusao](https://github.com/remusao))
* `adblocker-webextension`
  * [#413](https://github.com/cliqz-oss/adblocker/pull/413) webextension: handler for runtime messages now returns a promise ([@remusao](https://github.com/remusao))

#### :house: Internal
* `adblocker-benchmarks`, `adblocker-circumvention`, `adblocker-content`, `adblocker-electron-example`, `adblocker-electron`, `adblocker-puppeteer-example`, `adblocker-puppeteer`, `adblocker-webextension-cosmetics`, `adblocker-webextension-example`, `adblocker-webextension`, `adblocker`
  * [#415](https://github.com/cliqz-oss/adblocker/pull/415) Clean-up tooling ([@remusao](https://github.com/remusao))

#### Committers: 1
- Rémi ([@remusao](https://github.com/remusao))


## v1.4.20 (2020-01-15)

#### :house: Internal
* [#412](https://github.com/cliqz-oss/adblocker/pull/412) Migrate local GitHub actions to TypeScript ([@remusao](https://github.com/remusao))

#### Committers: 1
- Rémi ([@remusao](https://github.com/remusao))


## v1.4.19 (2020-01-15)

#### :house: Internal
* [#410](https://github.com/cliqz-oss/adblocker/pull/410) Add dependabot config into repository ([@remusao](https://github.com/remusao))

#### Committers: 1
- Rémi ([@remusao](https://github.com/remusao))


## v1.4.12 (2020-01-15)

#### :house: Internal
* [#409](https://github.com/cliqz-oss/adblocker/pull/409) Add action to release on NPM ([@remusao](https://github.com/remusao))

#### Committers: 1
- Rémi ([@remusao](https://github.com/remusao))


## v1.4.2 (2020-01-15)

#### :memo: Documentation
* [#404](https://github.com/cliqz-oss/adblocker/pull/404) docs: add support for PR labels ([@remusao](https://github.com/remusao))

#### :house: Internal
* [#407](https://github.com/cliqz-oss/adblocker/pull/407) Add GitHub actions for releasing on GitHub ([@remusao](https://github.com/remusao))
* [#405](https://github.com/cliqz-oss/adblocker/pull/405) Make use of GitHub actions for CI ([@remusao](https://github.com/remusao))

#### Committers: 1
- Rémi ([@remusao](https://github.com/remusao))


## v1.4.1 (2019-12-16)

#### :bug: Bug Fix
* `adblocker-puppeteer`
  * [#401](https://github.com/cliqz-oss/adblocker/pull/401) puppeteer: do not block main frames ([@remusao](https://github.com/remusao))

#### :memo: Documentation
* `adblocker`
  * [#400](https://github.com/cliqz-oss/adblocker/pull/400) Fix cosmetics readme ([@fcjr](https://github.com/fcjr))

#### :house: Internal
* [#399](https://github.com/cliqz-oss/adblocker/pull/399) Remove travis config ([@remusao](https://github.com/remusao))
* [#397](https://github.com/cliqz-oss/adblocker/pull/397) Set up CI with Azure Pipelines ([@chrmod](https://github.com/chrmod))

#### Committers: 3
- Frank Chiarulli Jr. ([@fcjr](https://github.com/fcjr))
- Krzysztof Jan Modras ([@chrmod](https://github.com/chrmod))
- Rémi ([@remusao](https://github.com/remusao))


## v1.4.0 (2019-11-12)

#### :bug: Bug Fix
* `adblocker`
  * [#388](https://github.com/cliqz-oss/adblocker/pull/388) Fix websocket filters handling ([@remusao](https://github.com/remusao))

#### :house: Internal
* `adblocker-puppeteer-example`, `adblocker-puppeteer`
  * [#386](https://github.com/cliqz-oss/adblocker/pull/386) Bump puppeteer to v2 ([@remusao](https://github.com/remusao))
* `adblocker-electron-example`, `adblocker-electron`
  * [#385](https://github.com/cliqz-oss/adblocker/pull/385) Bump electron version to 7 + inject CSS with 'user' origin ([@remusao](https://github.com/remusao))

#### Committers: 2
- Rémi ([@remusao](https://github.com/remusao))
- [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)


## v1.3.1 (2019-10-09)

#### :bug: Bug Fix
* `adblocker-benchmarks`, `adblocker-circumvention`, `adblocker-content`, `adblocker-electron-example`, `adblocker-electron`, `adblocker-puppeteer-example`, `adblocker-puppeteer`, `adblocker-webextension-cosmetics`, `adblocker-webextension-example`, `adblocker-webextension`, `adblocker`
  * [#373](https://github.com/cliqz-oss/adblocker/pull/373) fix: fetching resources.txt from CDN ([@remusao](https://github.com/remusao))

#### Committers: 2
- Rémi ([@remusao](https://github.com/remusao))
- [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)


## v1.3.0 (2019-10-07)

#### :nail_care: Polish
* `adblocker-benchmarks`, `adblocker-circumvention`, `adblocker-content`, `adblocker-electron-example`, `adblocker-electron`, `adblocker-puppeteer-example`, `adblocker-puppeteer`, `adblocker-webextension-cosmetics`, `adblocker-webextension-example`, `adblocker-webextension`, `adblocker`
  * [#368](https://github.com/cliqz-oss/adblocker/pull/368) make it easier to use HTML filtering outside of `WebExtensionBlocker` ([@remusao](https://github.com/remusao))

#### Committers: 2
- Rémi ([@remusao](https://github.com/remusao))
- [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)


## v1.2.0 (2019-10-01)

#### :rocket: New Feature
* `adblocker-webextension-example`, `adblocker-webextension`, `adblocker`
  * [#339](https://github.com/cliqz-oss/adblocker/pull/339) Support html filtering ([@remusao](https://github.com/remusao))
* `adblocker`
  * [#338](https://github.com/cliqz-oss/adblocker/pull/338) feat: add support for 'all' option ([@remusao](https://github.com/remusao))
  * [#337](https://github.com/cliqz-oss/adblocker/pull/337) feat: add support for redirect-rule option ([@remusao](https://github.com/remusao))

#### :bug: Bug Fix
* `adblocker-electron`
  * [#358](https://github.com/cliqz-oss/adblocker/pull/358) fix: cosmetics injection in Electron ([@remusao](https://github.com/remusao))

#### :nail_care: Polish
* `adblocker-webextension`
  * [#359](https://github.com/cliqz-oss/adblocker/pull/359) removeListener regardless of engine config ([@remusao](https://github.com/remusao))
* `adblocker-benchmarks`, `adblocker`
  * [#333](https://github.com/cliqz-oss/adblocker/pull/333) simplify reverse index by removing special tokens handling ([@remusao](https://github.com/remusao))

#### :memo: Documentation
* [#355](https://github.com/cliqz-oss/adblocker/pull/355) Add slides of talk at adblockerdevsummit 2019 ([@remusao](https://github.com/remusao))

#### :house: Internal
* `adblocker`
  * [#335](https://github.com/cliqz-oss/adblocker/pull/335) chore: update local assets + generate compression codebooks ([@remusao](https://github.com/remusao))

#### :running_woman: Performance
* `adblocker-electron-example`, `adblocker-puppeteer-example`, `adblocker-webextension-example`, `adblocker`
  * [#334](https://github.com/cliqz-oss/adblocker/pull/334) chore: clean-ups and small optimizations ([@remusao](https://github.com/remusao))

#### Committers: 2
- Rémi ([@remusao](https://github.com/remusao))
- [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)


## v1.1.0 (2019-09-17)

#### :rocket: New Feature
* `adblocker-electron`, `adblocker-puppeteer`, `adblocker-webextension`
  * [#328](https://github.com/cliqz-oss/adblocker/pull/328) Allow blocker unload ([@remusao](https://github.com/remusao))
* `adblocker`
  * [#327](https://github.com/cliqz-oss/adblocker/pull/327) feature: support inline-script and inline-font options ([@remusao](https://github.com/remusao))

#### :house: Internal
* `adblocker`
  * [#329](https://github.com/cliqz-oss/adblocker/pull/329) add test case to make sure +js() can be whitelisted ([@remusao](https://github.com/remusao))
* `adblocker-benchmarks`
  * [#314](https://github.com/cliqz-oss/adblocker/pull/314) bench: add runner for minbrowser blocker ([@remusao](https://github.com/remusao))

#### Committers: 2
- Rémi ([@remusao](https://github.com/remusao))
- [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)


## v1.0.2 (2019-09-02)

#### :bug: Bug Fix
* `adblocker-benchmarks`, `adblocker-circumvention`, `adblocker-content`, `adblocker-electron-example`, `adblocker-electron`, `adblocker-puppeteer-example`, `adblocker-puppeteer`, `adblocker-webextension-cosmetics`, `adblocker-webextension-example`, `adblocker-webextension`, `adblocker`
  * [#312](https://github.com/cliqz-oss/adblocker/pull/312) Fix block main document ([@remusao](https://github.com/remusao))

#### Committers: 2
- Rémi ([@remusao](https://github.com/remusao))
- [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)


## v1.0.0 (2019-08-27)

#### :nail_care: Polish
* `adblocker-content`, `adblocker-puppeteer-example`, `adblocker`
  * [#300](https://github.com/cliqz-oss/adblocker/pull/300) small improvements ([@remusao](https://github.com/remusao))

#### :house: Internal
* `adblocker-benchmarks`, `adblocker-content`, `adblocker-electron-example`, `adblocker-electron`, `adblocker-puppeteer-example`, `adblocker-puppeteer`, `adblocker-webextension-cosmetics`, `adblocker-webextension-example`, `adblocker-webextension`, `adblocker`
  * [#294](https://github.com/cliqz-oss/adblocker/pull/294) chore: clean-ups ([@remusao](https://github.com/remusao))
* `adblocker-benchmarks`, `adblocker-circumvention`, `adblocker-content`, `adblocker-electron-example`, `adblocker-electron`, `adblocker-puppeteer-example`, `adblocker-puppeteer`, `adblocker-webextension-cosmetics`, `adblocker-webextension-example`, `adblocker-webextension`, `adblocker`
  * [#255](https://github.com/cliqz-oss/adblocker/pull/255) switch to using @cliqz/metalint for project linting ([@remusao](https://github.com/remusao))
* Other
  * [#293](https://github.com/cliqz-oss/adblocker/pull/293) ci: enable latest Node.js + LTS ([@remusao](https://github.com/remusao))

#### Committers: 2
- Rémi ([@remusao](https://github.com/remusao))
- [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)


## v0.14.0 (2019-08-20)

#### :nail_care: Polish
* `adblocker-electron`, `adblocker-puppeteer`, `adblocker-webextension`
  * [#288](https://github.com/cliqz-oss/adblocker/pull/288) only register listeners when network/cosmetics filtering is enabled ([@remusao](https://github.com/remusao))

#### :house: Internal
* `adblocker`
  * [#290](https://github.com/cliqz-oss/adblocker/pull/290) clean-up and update local assets + regenerate codebooks ([@remusao](https://github.com/remusao))
* Other
  * [#289](https://github.com/cliqz-oss/adblocker/pull/289) chore: remove un-used dependencies ([@remusao](https://github.com/remusao))

#### :running_woman: Performance
* `adblocker-webextension-example`, `adblocker`
  * [#287](https://github.com/cliqz-oss/adblocker/pull/287) Optimize cosmetics injection ([@remusao](https://github.com/remusao))

#### Committers: 2
- Rémi ([@remusao](https://github.com/remusao))
- [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)


## v0.13.0 (2019-08-16)

#### :memo: Documentation
* `adblocker-circumvention`, `adblocker-content`, `adblocker-electron-example`, `adblocker-electron`, `adblocker-puppeteer-example`, `adblocker-puppeteer`, `adblocker-webextension-example`, `adblocker-webextension`, `adblocker`
  * [#281](https://github.com/cliqz-oss/adblocker/pull/281) Update readmes ([@remusao](https://github.com/remusao))

#### :house: Internal
* Other
  * [#265](https://github.com/cliqz-oss/adblocker/pull/265) fix memory issue by pinning Node.js version ([@remusao](https://github.com/remusao))
* `adblocker-circumvention`, `adblocker-content`, `adblocker-electron-example`, `adblocker-electron`, `adblocker-puppeteer-example`, `adblocker-puppeteer`, `adblocker-webextension-cosmetics`, `adblocker-webextension-example`, `adblocker-webextension`, `adblocker`
  * [#264](https://github.com/cliqz-oss/adblocker/pull/264) create new @cliqz/adblocker-content package with common utils ([@remusao](https://github.com/remusao))

#### :running_woman: Performance
* `adblocker`
  * [#257](https://github.com/cliqz-oss/adblocker/pull/257) allow correct size allocation for data views ([@remusao](https://github.com/remusao))

#### Committers: 2
- Rémi ([@remusao](https://github.com/remusao))
- [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)


## v0.12.1 (2019-08-13)

#### :boom: Breaking Change
* `adblocker-electron`, `adblocker`
  * [#248](https://github.com/cliqz-oss/adblocker/pull/248) electron: promote mutationObserver option to main config + fix constructor and parse methods ([@remusao](https://github.com/remusao))

#### :rocket: New Feature
* `adblocker-electron-example`, `adblocker-puppeteer-example`, `adblocker-puppeteer`, `adblocker-webextension-example`, `adblocker-webextension`, `adblocker`
  * [#251](https://github.com/cliqz-oss/adblocker/pull/251) implement simple event emitter for FiltersEngine and sub-classes ([@remusao](https://github.com/remusao))

#### :bug: Bug Fix
* `adblocker-circumvention`, `adblocker-electron-example`, `adblocker-electron`, `adblocker-puppeteer-example`, `adblocker-puppeteer`, `adblocker-webextension-cosmetics`, `adblocker-webextension-example`, `adblocker-webextension`, `adblocker`
  * [#219](https://github.com/cliqz-oss/adblocker/pull/219) fix source maps in all packages ([@remusao](https://github.com/remusao))

#### :house: Internal
* `adblocker`
  * [#256](https://github.com/cliqz-oss/adblocker/pull/256) Update assets + re-generate compression codebooks ([@remusao](https://github.com/remusao))
* `adblocker-electron-example`, `adblocker-electron`, `adblocker`
  * [#250](https://github.com/cliqz-oss/adblocker/pull/250) electron: update to 6.0.1 ([@remusao](https://github.com/remusao))

#### Committers: 2
- Rémi ([@remusao](https://github.com/remusao))
- [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)