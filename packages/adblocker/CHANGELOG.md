# v1.8.0 (Wed Feb 12 2020)

#### :rocket: New Feature

- Implement redirect-rule filters handling [#478](https://github.com/cliqz-oss/adblocker/pull/478) ([@remusao](https://github.com/remusao))
- Add helper to cache adblocker engine [#477](https://github.com/cliqz-oss/adblocker/pull/477) ([@remusao](https://github.com/remusao))
- Handle disabling scriptlets [#471](https://github.com/cliqz-oss/adblocker/pull/471) ([@remusao](https://github.com/remusao))
- Implement redirect=none semantics [#469](https://github.com/cliqz-oss/adblocker/pull/469) ([@remusao](https://github.com/remusao))
- Implement specifichide, elemhide and aliases [#468](https://github.com/cliqz-oss/adblocker/pull/468) ([@remusao](https://github.com/remusao))
- Add support for compound HTML filtering rules [#453](https://github.com/cliqz-oss/adblocker/pull/453) ([@remusao](https://github.com/remusao))
- feat: support subset of HTML filtering rules (^script:has-text(...)) [#339](https://github.com/cliqz-oss/adblocker/pull/339) ([@remusao](https://github.com/remusao))
- feat: add support for 'all' option [#338](https://github.com/cliqz-oss/adblocker/pull/338) ([@remusao](https://github.com/remusao))
- feat: add support for redirect-rule option [#337](https://github.com/cliqz-oss/adblocker/pull/337) ([@remusao](https://github.com/remusao))
- feature: support inline-script and inline-font options [#327](https://github.com/cliqz-oss/adblocker/pull/327) ([@remusao](https://github.com/remusao))
- provide helpers to download and build engines from lists [#280](https://github.com/cliqz-oss/adblocker/pull/280) ([@remusao](https://github.com/remusao))
- implement simple event emitter for FiltersEngine and sub-classes [#251](https://github.com/cliqz-oss/adblocker/pull/251) ([@remusao](https://github.com/remusao))

#### :running_woman: Performance

- Optimize cosmetics injection [#287](https://github.com/cliqz-oss/adblocker/pull/287) ([@remusao](https://github.com/remusao))
- allow correct size allocation for data views [#257](https://github.com/cliqz-oss/adblocker/pull/257) ([@remusao](https://github.com/remusao))

#### :bug: Bug Fix

- chore: update local assets [#485](https://github.com/cliqz-oss/adblocker/pull/485) ([@adblocker-bot](https://github.com/adblocker-bot))
- chore(release): publish v1.7.3  ([@remusao](https://github.com/remusao))
- chore(release): publish v1.7.2  ([@remusao](https://github.com/remusao))
- chore(release): publish v1.7.1  ([@remusao](https://github.com/remusao))
- Bump internal engine version  ([@remusao](https://github.com/remusao))
- chore: update local assets [#479](https://github.com/cliqz-oss/adblocker/pull/479) ([@adblocker-bot](https://github.com/adblocker-bot))
- chore(release): publish v1.7.0  ([@remusao](https://github.com/remusao))
- Put types for chrome and firefox as direct dependencies instead of dev [#476](https://github.com/cliqz-oss/adblocker/pull/476) ([@remusao](https://github.com/remusao))
- chore(release): publish v1.6.3  ([@remusao](https://github.com/remusao))
- chore(release): publish v1.6.2  ([@remusao](https://github.com/remusao))
- chore(release): publish v1.6.1  ([@remusao](https://github.com/remusao))
- chore(release): publish v1.6.0  ([@remusao](https://github.com/remusao))
- chore: update local assets [#474](https://github.com/cliqz-oss/adblocker/pull/474) ([@adblocker-bot](https://github.com/adblocker-bot))
- Update local assets [#472](https://github.com/cliqz-oss/adblocker/pull/472) ([@adblocker-bot](https://github.com/adblocker-bot) [@remusao](https://github.com/remusao))
- fix: HTML filtering and scriptlets injection [#464](https://github.com/cliqz-oss/adblocker/pull/464) ([@remusao](https://github.com/remusao))
- chore: update local assets [#466](https://github.com/cliqz-oss/adblocker/pull/466) ([@adblocker-bot](https://github.com/adblocker-bot))
- chore: update local assets [#463](https://github.com/cliqz-oss/adblocker/pull/463) ([@adblocker-bot](https://github.com/adblocker-bot))
- chore: update local assets [#454](https://github.com/cliqz-oss/adblocker/pull/454) ([@adblocker-bot](https://github.com/adblocker-bot))
- chore: update Electron to v8.0.0 [#452](https://github.com/cliqz-oss/adblocker/pull/452) ([@remusao](https://github.com/remusao))
- ci: update assets  ([@remusao](https://github.com/remusao))
- ci: do not take annoyance lists into account for codebooks  ([@remusao](https://github.com/remusao))
- ci: use easylist cookie instead of cookiemonster  ([@remusao](https://github.com/remusao))
- ci: update to latest tsmaz for codebook generation  ([@remusao](https://github.com/remusao))
- ci: parallelize codebooks building  ([@remusao](https://github.com/remusao))
- ci: generate codebooks every day with CRON  ([@remusao](https://github.com/remusao))
- ci: disable automatic cosmetics codebook generation  ([@remusao](https://github.com/remusao))
- Add repository directory metadata + update dependabot config  ([@remusao](https://github.com/remusao))
- chore(release): publish v1.5.0  ([@remusao](https://github.com/remusao))
- Bump engine internal version  ([@remusao](https://github.com/remusao))
- chore(release): publish v1.4.24  ([@remusao](https://github.com/remusao))
- chore(release): publish v1.4.23  ([@remusao](https://github.com/remusao))
- chore(release): publish v1.4.22  ([@remusao](https://github.com/remusao))
- chore(release): publish v1.4.21  ([@remusao](https://github.com/remusao))
- chore(release): publish v1.4.20  ([@remusao](https://github.com/remusao))
- chore(release): publish v1.4.19  ([@remusao](https://github.com/remusao))
- chore(release): publish v1.4.18  ([@remusao](https://github.com/remusao))
- chore(release): publish v1.4.17  ([@remusao](https://github.com/remusao))
- chore(release): publish v1.4.16  ([@remusao](https://github.com/remusao))
- chore(release): publish v1.4.15  ([@remusao](https://github.com/remusao))
- chore(release): publish v1.4.14  ([@remusao](https://github.com/remusao))
- chore(release): publish v1.4.13  ([@remusao](https://github.com/remusao))
- chore(release): publish v1.4.12  ([@remusao](https://github.com/remusao))
- chore(release): publish v1.4.11  ([@remusao](https://github.com/remusao))
- chore(release): publish v1.4.10  ([@remusao](https://github.com/remusao))
- chore(release): publish v1.4.9  ([@remusao](https://github.com/remusao))
- chore(release): publish v1.4.8  ([@remusao](https://github.com/remusao))
- chore(release): publish v1.4.7  ([@remusao](https://github.com/remusao))
- chore(release): publish v1.4.6  ([@remusao](https://github.com/remusao))
- chore(release): publish v1.4.5  ([@remusao](https://github.com/remusao))
- chore(release): publish v1.4.4  ([@remusao](https://github.com/remusao))
- chore(release): publish v1.4.3  ([@remusao](https://github.com/remusao))
- Release v1.4.1 [#402](https://github.com/cliqz-oss/adblocker/pull/402) ([@remusao](https://github.com/remusao))
- Fix cosmetics readme [#400](https://github.com/cliqz-oss/adblocker/pull/400) ([@fcjr](https://github.com/fcjr))
- Release 1.4.0 [#391](https://github.com/cliqz-oss/adblocker/pull/391) ([@remusao](https://github.com/remusao))
- Fix websocket filters handling [#388](https://github.com/cliqz-oss/adblocker/pull/388) ([@remusao](https://github.com/remusao))
- chore: update deps [#384](https://github.com/cliqz-oss/adblocker/pull/384) ([@remusao](https://github.com/remusao))
- fix: fetching resources.txt from CDN [#373](https://github.com/cliqz-oss/adblocker/pull/373) ([@remusao](https://github.com/remusao))
- Release 1.2.0 [#361](https://github.com/cliqz-oss/adblocker/pull/361) ([@remusao](https://github.com/remusao))
- Release v1.1.0 [#332](https://github.com/cliqz-oss/adblocker/pull/332) ([@remusao](https://github.com/remusao))
- Fix block main document [#312](https://github.com/cliqz-oss/adblocker/pull/312) ([@remusao](https://github.com/remusao))
- Release 1.0.1 [#304](https://github.com/cliqz-oss/adblocker/pull/304) ([@remusao](https://github.com/remusao))
- Release 1.0.0 [#301](https://github.com/cliqz-oss/adblocker/pull/301) ([@remusao](https://github.com/remusao))
- handle case where diff is empty in stress-test  ([@remusao](https://github.com/remusao))
- fix: restore yoyo server list to unbreak adblocker v0.13.x  ([@remusao](https://github.com/remusao))
- Release v0.14.0 [#291](https://github.com/cliqz-oss/adblocker/pull/291) ([@remusao](https://github.com/remusao))
- Release v0.13.2  ([@remusao](https://github.com/remusao))
- serve Peter Lower list from local asset to avoid certificate issue  ([@remusao](https://github.com/remusao))
- Release v0.13.1  ([@remusao](https://github.com/remusao))
- Release v0.13.0 [#282](https://github.com/cliqz-oss/adblocker/pull/282) ([@remusao](https://github.com/remusao))
- Release v0.12.1 [#261](https://github.com/cliqz-oss/adblocker/pull/261) ([@remusao](https://github.com/remusao))
- build(deps): bump @types/chrome from 0.0.94 to 0.0.95

Bumps [@types/chrome](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/HEAD/types/chrome) from 0.0.94 to 0.0.95.
- [Release notes](https://github.com/DefinitelyTyped/DefinitelyTyped/releases)
- [Commits](https://github.com/DefinitelyTyped/DefinitelyTyped/commits/HEAD/types/chrome)

Signed-off-by: dependabot-preview[bot] <support@dependabot.com>  ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/chrome from 0.0.93 to 0.0.94

Bumps [@types/chrome](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/HEAD/types/chrome) from 0.0.93 to 0.0.94.
- [Release notes](https://github.com/DefinitelyTyped/DefinitelyTyped/releases)
- [Commits](https://github.com/DefinitelyTyped/DefinitelyTyped/commits/HEAD/types/chrome)

Signed-off-by: dependabot-preview[bot] <support@dependabot.com>  ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump @ampproject/rollup-plugin-closure-compiler

Bumps [@ampproject/rollup-plugin-closure-compiler](https://github.com/ampproject/rollup-plugin-closure-compiler) from 0.20.0 to 0.21.0.
- [Release notes](https://github.com/ampproject/rollup-plugin-closure-compiler/releases)
- [Commits](https://github.com/ampproject/rollup-plugin-closure-compiler/compare/v0.20.0...v0.21.0)

Signed-off-by: dependabot-preview[bot] <support@dependabot.com>  ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump @types/jest from 24.9.1 to 25.1.1

Bumps [@types/jest](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/HEAD/types/jest) from 24.9.1 to 25.1.1.
- [Release notes](https://github.com/DefinitelyTyped/DefinitelyTyped/releases)
- [Commits](https://github.com/DefinitelyTyped/DefinitelyTyped/commits/HEAD/types/jest)

Signed-off-by: dependabot-preview[bot] <support@dependabot.com>  ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump @types/chrome from 0.0.92 to 0.0.93

Bumps [@types/chrome](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/HEAD/types/chrome) from 0.0.92 to 0.0.93.
- [Release notes](https://github.com/DefinitelyTyped/DefinitelyTyped/releases)
- [Commits](https://github.com/DefinitelyTyped/DefinitelyTyped/commits/HEAD/types/chrome)

Signed-off-by: dependabot-preview[bot] <support@dependabot.com>  ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### :nail_care: Polish

- Fix chrome and browser types [#481](https://github.com/cliqz-oss/adblocker/pull/481) ([@remusao](https://github.com/remusao))
- Generic scriptlets are now correctly rejected [#470](https://github.com/cliqz-oss/adblocker/pull/470) ([@remusao](https://github.com/remusao))
- feature: make initializing adblocker idempotent [#416](https://github.com/cliqz-oss/adblocker/pull/416) ([@remusao](https://github.com/remusao))
- Implement retry mechanism while fetching resources [#414](https://github.com/cliqz-oss/adblocker/pull/414) ([@remusao](https://github.com/remusao))
- make it easier to use HTML filtering outside of `WebExtensionBlocker` [#368](https://github.com/cliqz-oss/adblocker/pull/368) ([@remusao](https://github.com/remusao))
- chore: clean-ups and small optimizations [#334](https://github.com/cliqz-oss/adblocker/pull/334) ([@remusao](https://github.com/remusao))
- simplify reverse index by removing special tokens handling [#333](https://github.com/cliqz-oss/adblocker/pull/333) ([@remusao](https://github.com/remusao))
- small improvements [#300](https://github.com/cliqz-oss/adblocker/pull/300) ([@remusao](https://github.com/remusao))
- electron: fix bundles [#249](https://github.com/cliqz-oss/adblocker/pull/249) ([@remusao](https://github.com/remusao))
- electron: promote mutationObserver option to main config + fix constructor and parse methods [#248](https://github.com/cliqz-oss/adblocker/pull/248) ([@remusao](https://github.com/remusao))

#### :house: Internal

- chore: update local assets [#449](https://github.com/cliqz-oss/adblocker/pull/449) ([@remusao](https://github.com/remusao))
- Update assets + smaz [#447](https://github.com/cliqz-oss/adblocker/pull/447) ([@remusao](https://github.com/remusao))
- chore: update local assets [#446](https://github.com/cliqz-oss/adblocker/pull/446) ([@remusao](https://github.com/remusao))
- chore: update local assets [#444](https://github.com/cliqz-oss/adblocker/pull/444) ([@remusao](https://github.com/remusao))
- Update assets [#439](https://github.com/cliqz-oss/adblocker/pull/439) ([@remusao](https://github.com/remusao))
- chore: update dependencies [#423](https://github.com/cliqz-oss/adblocker/pull/423) ([@remusao](https://github.com/remusao))
- Clean-up tooling [#415](https://github.com/cliqz-oss/adblocker/pull/415) ([@remusao](https://github.com/remusao))
- chore: update local assets + generate compression codebooks [#335](https://github.com/cliqz-oss/adblocker/pull/335) ([@remusao](https://github.com/remusao))
- add test case to make sure +js() can be whitelisted [#329](https://github.com/cliqz-oss/adblocker/pull/329) ([@remusao](https://github.com/remusao))
- chore: clean-ups [#294](https://github.com/cliqz-oss/adblocker/pull/294) [#294](https://github.com/cliqz-oss/adblocker/pull/294) ([@remusao](https://github.com/remusao))
- switch to using @cliqz/metalint for project linting [#255](https://github.com/cliqz-oss/adblocker/pull/255) ([@remusao](https://github.com/remusao))
- clean-up and update local assets + regenerate codebooks [#290](https://github.com/cliqz-oss/adblocker/pull/290) ([@remusao](https://github.com/remusao))
- create new @cliqz/adblocker-content package with common utils [#264](https://github.com/cliqz-oss/adblocker/pull/264) ([@remusao](https://github.com/remusao))
- Update assets + re-generate compression codebooks [#256](https://github.com/cliqz-oss/adblocker/pull/256) ([@remusao](https://github.com/remusao))
- electron: update to 6.0.1 [#250](https://github.com/cliqz-oss/adblocker/pull/250) ([@remusao](https://github.com/remusao))
- fix source maps in all packages [#219](https://github.com/cliqz-oss/adblocker/pull/219) ([@remusao](https://github.com/remusao))

#### :memo: Documentation

- Update readmes [#281](https://github.com/cliqz-oss/adblocker/pull/281) ([@remusao](https://github.com/remusao))

#### :nut_and_bolt: Dependencies

- build(deps-dev): bump @types/chrome from 0.0.88 to 0.0.89 [#349](https://github.com/cliqz-oss/adblocker/pull/349) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Update rimraf requirement from ^2.6.3 to ^3.0.0 in /packages/adblocker [#277](https://github.com/cliqz-oss/adblocker/pull/277) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump @types/chrome from 0.0.86 to 0.0.88 [#239](https://github.com/cliqz-oss/adblocker/pull/239) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 4

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])
- Adblocker Bot ([@adblocker-bot](https://github.com/adblocker-bot))
- Frank Chiarulli Jr. ([@fcjr](https://github.com/fcjr))
- Rémi ([@remusao](https://github.com/remusao))