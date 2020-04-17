# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 4.0.0 (2020-04-17)


### Bug Fixes

* passport strategy adapter must support oauth2 flows ([67c2f02](https://github.com/strongloop/loopback-next/commit/67c2f02f74c08ee037827c0045e1f225d6ca8ede))
* **rest:** allow async custom keyword by setting {$async: true} to referenced schemas ([ede4bbd](https://github.com/strongloop/loopback-next/commit/ede4bbdba4d0bca3a558309118bc97924f48fd6e))
* make givenHttpServerConfig typing compatible with TypeScript 3.6 ([1edbc0b](https://github.com/strongloop/loopback-next/commit/1edbc0bfbb07be3fca899286488c2c5196da2d47))
* update package locks ([cd2f6fa](https://github.com/strongloop/loopback-next/commit/cd2f6fa7a732afe4a16f4ccf8316ff3142959fe8))
* **cli:** extract messages for generators ([2f572bd](https://github.com/strongloop/loopback-next/commit/2f572bd75883420e38bfaa780bc38445aec92e65))
* **rest:** a small typo fix in code comments ([81d19bb](https://github.com/strongloop/loopback-next/commit/81d19bb76552ddac84b8f1bef012c44a5877ac93))
* **rest:** aggressive redirection to Swagger UI ([9f0d8ca](https://github.com/strongloop/loopback-next/commit/9f0d8ca77eb33e308555ff10fa2424a6c803a173))
* **rest:** assign all component properties to target spec ([af06b69](https://github.com/strongloop/loopback-next/commit/af06b6952bb17bea3535b1bfd49f4ec0f24ec1be))
* **rest:** correctly handle basePath set via basePath() API ([2118d80](https://github.com/strongloop/loopback-next/commit/2118d806f22aa66825b9b25348ae41de5f30952f))
* **rest:** fix a variable in sample code for README.md ([2bad701](https://github.com/strongloop/loopback-next/commit/2bad7011e540e927598dc5a24c1d6ccf41bc0e93))
* **rest:** honor options for AJV validator caching ([1fd52a3](https://github.com/strongloop/loopback-next/commit/1fd52a3187e5c26cb9166cffb6cd86840e2bd844))
* **rest:** improves error handling for express middleware ([02d0c91](https://github.com/strongloop/loopback-next/commit/02d0c91abb97830fd8652dde69ac4153720f3e75))
* suport complex objects for query params in api explorer ([a4ef640](https://github.com/strongloop/loopback-next/commit/a4ef64037a80d1ff7df37ba7912909a1bfcdbf51))
* **openapi-v3:** preserve `additionalProperties: false` ([bc7691b](https://github.com/strongloop/loopback-next/commit/bc7691b0963ee297922bd4d9652a0eccf763f085))
* **rest:** improve null check to avoid compilation errors with TypeScript 3.7 ([ab47ef6](https://github.com/strongloop/loopback-next/commit/ab47ef63adc01b170ddc537ca973da631c5a8d8f))
* add test to ensure it rejects null values for required complex types ([b44cac5](https://github.com/strongloop/loopback-next/commit/b44cac5042cd014dd7f95b1c5c4290cd0ca27eb7))
* address violations of "no-floating-promises" rule ([0947531](https://github.com/strongloop/loopback-next/commit/0947531d69d07839a21ea7575cfc08580086841f))
* emit "type: 'object'," for schema definitions ([f328199](https://github.com/strongloop/loopback-next/commit/f328199be724c9edae8d3690d0a8ea220d06a8dc))
* specify the type for handler ([9e0119d](https://github.com/strongloop/loopback-next/commit/9e0119d996bace91d4caa26961e9abc9330c1106))
* **rest:** add tests for request validation per media type ([7be76a4](https://github.com/strongloop/loopback-next/commit/7be76a4c891d00875d4774d5ca2e3783f9ece53d))
* **rest:** allow `.` to be used in openapi path template ([47c24cb](https://github.com/strongloop/loopback-next/commit/47c24cb3cc89aa80826ad295932bd40ad548025e))
* **rest:** allow users to disable Explorer redirects after RestServer was created ([34af6a0](https://github.com/strongloop/loopback-next/commit/34af6a01a12fa55c818f134d752997c797c4204d))
* **rest:** handle overlapping paths with different vars ([17adc7a](https://github.com/strongloop/loopback-next/commit/17adc7a69848389b5836d898f9e48427e1304271))
* **rest:** improve route sorting to group by path and verb ([ce31bf7](https://github.com/strongloop/loopback-next/commit/ce31bf75a15957f63c15fb5b9ce05f9ea598c751))
* **rest:** make sure basePath is included in RestServer.url ([705bce4](https://github.com/strongloop/loopback-next/commit/705bce42ead2c4c38ff8894fcaa41a0d50f37638))
* **rest:** only return matched trie nodes with values ([669ede1](https://github.com/strongloop/loopback-next/commit/669ede1843ba10e05b8dcd06424b33a33851e313))
* move serve-static [@types](https://github.com/types) to normal dependencies ([216bf85](https://github.com/strongloop/loopback-next/commit/216bf85ef119d742984189cff5362ee58ea034fb)), closes [#1917](https://github.com/strongloop/loopback-next/issues/1917)
* optimize serving static files ([57a94a5](https://github.com/strongloop/loopback-next/commit/57a94a5cc732d60bed1d92e6f6ad479c31535932))
* remove unnecessary dependency from [#1918](https://github.com/strongloop/loopback-next/issues/1918) ([63d367b](https://github.com/strongloop/loopback-next/commit/63d367be95cd6b7255a375a80deea7475d29935d))
* update to the most recent lodash version ([65ee865](https://github.com/strongloop/loopback-next/commit/65ee8656763b3b41a0acb86d7a6c4482472abc02))
* **rest:** coerce string parameters (reject object values) ([1f49844](https://github.com/strongloop/loopback-next/commit/1f498446b1f203ace7e2db611519fba217393c6a))
* **rest:** make sure validation system error is reported ([fe4fe16](https://github.com/strongloop/loopback-next/commit/fe4fe162aa5d12dcc788369095a97054094fb5f6))
* **rest:** sanitize json for JSON.parse() ([5042698](https://github.com/strongloop/loopback-next/commit/504269829939a93797024e70a1f29e9943c460c7))
* rework tslint comments disabling "no-unused-variable" rule ([a18a3d7](https://github.com/strongloop/loopback-next/commit/a18a3d74c5a76ba90c1fb0ea32ae83335820163f))
* **rest:** parse query string even when there is no rest query param ([ad905a5](https://github.com/strongloop/loopback-next/commit/ad905a5fa4251884fb164995c8f1c517eabfd9ad))
* fix static assets router blocking controller registration ([0e1b06f](https://github.com/strongloop/loopback-next/commit/0e1b06f546aea97855556f985b39e50cd3e7956e))
* **rest:** don't rely on transitive dependencies from express ([a3d5d0c](https://github.com/strongloop/loopback-next/commit/a3d5d0c9b08b432a8a37e650545cf512b108659f))
* **rest:** make sure the sorting test pass for node 11 ([614450b](https://github.com/strongloop/loopback-next/commit/614450b2cd6077586a22546f3b431426026e0bca))
* **rest:** tidy up host/port parsing and client url building ([b692f45](https://github.com/strongloop/loopback-next/commit/b692f45bd532c7e4ff53a34f590f630ec3a21af3))
* **rest:** use direct import to work around a TS bug ([2cf3b2c](https://github.com/strongloop/loopback-next/commit/2cf3b2c7e5a8256ffc7ef174ee0cc47ccb82153f))
* **rest:** use strong-error-handler for writing errors to the response body ([ac011f8](https://github.com/strongloop/loopback-next/commit/ac011f80b229b5dd5c69851ab14b39705b852629))
* change file names to fit advocated naming convention ([0331df8](https://github.com/strongloop/loopback-next/commit/0331df8e188f2ba857d04d6a6aff579c7b7726c1))
* change index.d.ts files to point to dist8 ([42ca42d](https://github.com/strongloop/loopback-next/commit/42ca42d5d984df9efe52b219f2be531392256bdd))
* fix typo of `additional` ([2fd7610](https://github.com/strongloop/loopback-next/commit/2fd76106ecebd4d5257262f4cda8af1e5ec409a3))
* remove extra imports for mixin dependencies ([35b916b](https://github.com/strongloop/loopback-next/commit/35b916b2d4aac457edf62956e35b2057a3794b00))
* **context:** fix optional param injection for methods ([801a82d](https://github.com/strongloop/loopback-next/commit/801a82d47ef9a26d829aec816d7cb4730bcdb6f0))
* **openapi-v3:** set required to true for path parameters ([2b13247](https://github.com/strongloop/loopback-next/commit/2b1324753185e8ddb9b8a496b3b1f706565d37bb))
* **rest:** Add index boilerplate ([02a025e](https://github.com/strongloop/loopback-next/commit/02a025e3ece0ae27a6fb5f383b5f7dfb8d01e8bb))
* **rest:** convert primitives to strings ([2e1ca13](https://github.com/strongloop/loopback-next/commit/2e1ca133022c117ed735581f1cf97097d82f2dcd))
* **rest:** correctly re-export decorators at runtime ([c81c0ac](https://github.com/strongloop/loopback-next/commit/c81c0ace2e26868f47b3e5ec97db884ba918e71c))
* **rest:** enable cors preflight ([d05bdae](https://github.com/strongloop/loopback-next/commit/d05bdae9aba2c2ba9484d2b5df9fada6ff0558ae))
* **rest:** export decorators for backward compatibility ([#850](https://github.com/strongloop/loopback-next/issues/850)) ([5166388](https://github.com/strongloop/loopback-next/commit/51663888a961dab1d80d1d8dec25b0ef282bb97a))
* **rest:** fix assertion broken by new deps versions ([05a8e0c](https://github.com/strongloop/loopback-next/commit/05a8e0cc8a4f7e2dfc926e430ff77b0534c4b986))
* **rest:** Fix parameter description ([c3e6afc](https://github.com/strongloop/loopback-next/commit/c3e6afc454485ff24291b74f113b97e5c063e2b9))
* **rest:** fix yaml comparison to tolerate textual diffs ([615882c](https://github.com/strongloop/loopback-next/commit/615882c7c65930f94f72c3bc9639c3e746b9aa0c))
* **rest:** log unexpected errors to console ([#1058](https://github.com/strongloop/loopback-next/issues/1058)) ([b7b0fd8](https://github.com/strongloop/loopback-next/commit/b7b0fd890ed620dbac1dd056a5a8b56a54d4f7f0))
* **rest:** make the route binding key friendly for find ([e3577ab](https://github.com/strongloop/loopback-next/commit/e3577abf0f49eddc7c096e1d195c1c3f790a81f3))
* **rest:** move @types/cors to dependency ([fee3520](https://github.com/strongloop/loopback-next/commit/fee35202e551f2d4b606ded09a5532086de13d59))
* **rest:** set openapi url based on x-forwarded-* headers ([8706038](https://github.com/strongloop/loopback-next/commit/87060389839cde216c0335bc9ff8506cf8dccbee))
* **rest:** stop an app that has not been started ([1841ebb](https://github.com/strongloop/loopback-next/commit/1841ebb50d7d65c59faf5e975fb614ed7f48dabc)), closes [#822](https://github.com/strongloop/loopback-next/issues/822)
* apply source-maps to test errors ([76a7f56](https://github.com/strongloop/loopback-next/commit/76a7f56cd1166d4407f2a50b188db91a74f7deae)), closes [#602](https://github.com/strongloop/loopback-next/issues/602)
* fix imports to use files owning the definitions ([a50405a](https://github.com/strongloop/loopback-next/commit/a50405a5a56b5f1e509a2c30d984fd262a342cba))
* Fix node module names in source code headers ([0316f28](https://github.com/strongloop/loopback-next/commit/0316f28a22a1b85dce72f67b1dab66599c6b9403))
* fix version for @loopback/openapi-v2 ([d032129](https://github.com/strongloop/loopback-next/commit/d032129710cecc715be4aa0e458a43402525c5a6))
* make mocha self-contained with the source map support ([7c6d869](https://github.com/strongloop/loopback-next/commit/7c6d86975a379388f433110df91b1bf0e2e4b94d))
* make the code compatible with TypeScript 2.9.x ([37aba50](https://github.com/strongloop/loopback-next/commit/37aba50dc5f47b5ff0c77624d4d02d9cfd4415b5))
* remove console output from tests ([ff4a320](https://github.com/strongloop/loopback-next/commit/ff4a320825720270346013ce81174100bef28f37))
* **rest:** Fix compilation error caused by @types/node ([89f1401](https://github.com/strongloop/loopback-next/commit/89f14018e1d7186c2548962923220aa3855f1ce1))
* **rest:** Improve rest metadata inheritance ([3f124f3](https://github.com/strongloop/loopback-next/commit/3f124f3db0b9b9923a560e86242b299353e76055))
* **rest:** Listen on all interfaces if host is not configured ([99daf63](https://github.com/strongloop/loopback-next/commit/99daf6353c63b4ecb2dfc1442d9c3de3267b917c))
* **rest:** move @types/http-errors from dev-dep ([11350bd](https://github.com/strongloop/loopback-next/commit/11350bd405c28d730c36d89dad76e6e233bbc7dd))
* **rest:** Move server instantiation to class definition ([051b8e0](https://github.com/strongloop/loopback-next/commit/051b8e0e86045b20afa991bb120f01380b62c01b))
* **rest:** Remove unused imports ([76a08ee](https://github.com/strongloop/loopback-next/commit/76a08ee515eba5228a0093c14097e02746040bb4))
* **rest:** return 404 when a model was not found ([7a56bad](https://github.com/strongloop/loopback-next/commit/7a56bad1430e7258bba137ce24d4fdaecdb394fd))
* **rest:** Tidy up rest decorator metadata ([7d15bfe](https://github.com/strongloop/loopback-next/commit/7d15bfeaa25dfac9de727b6ebda1bfdace56a6b3))
* **testlab:** Remove sinon-should integration ([8841fce](https://github.com/strongloop/loopback-next/commit/8841fce90e7fb07b8cc27c701463906081afd4f5))


### Build System

* drop dist6 related targets ([#945](https://github.com/strongloop/loopback-next/issues/945)) ([a2368ce](https://github.com/strongloop/loopback-next/commit/a2368cee598c131a826ee42e347266c6e25ae582))


### chore

* remove support for Node.js v8.x ([4281d9d](https://github.com/strongloop/loopback-next/commit/4281d9df50f0715d32879e1442a90b643ec8f542))


### Code Refactoring

* **core:** Component servers are now key-value pairs ([866953a](https://github.com/strongloop/loopback-next/commit/866953a9da0e4577943b82d78e4e50e3bd7797ad))
* **rest:** make getApiSpec() async ([fe3df1b](https://github.com/strongloop/loopback-next/commit/fe3df1b85904ee8b8a005fa6eddf150d28ad2a08))


### Features

* **context:** add support for method interceptors ([293188d](https://github.com/strongloop/loopback-next/commit/293188d3861355ae14df5f3945db1074185c4e93))
* **context:** honor binding scope from [@bind](https://github.com/bind) ([3b30f01](https://github.com/strongloop/loopback-next/commit/3b30f01bcbad551f9b74662c8537c06d6a9f7b3d))
* **context:** index bindings by tag to speed up matching by tag ([566b9d9](https://github.com/strongloop/loopback-next/commit/566b9d9a35ce52d9aeefe17e36f91c9714616b21))
* **context:** introduce async context observers for bind/unbind events ([e5e5fc4](https://github.com/strongloop/loopback-next/commit/e5e5fc4c89b0e9d2a9e3e4d9604ad438ff54566d))
* **context:** leave local bindings and parent unchanged during close ([198af88](https://github.com/strongloop/loopback-next/commit/198af881c91f3d6427e66d3ffe56b83e51caeef9))
* **context:** make it possible to set source information for interceptions ([2a1ccb4](https://github.com/strongloop/loopback-next/commit/2a1ccb409a889d8b30b03ddf3284c9e9d5554e27))
* **context:** pass resolution options into binding.getValue() ([705dcd5](https://github.com/strongloop/loopback-next/commit/705dcd5fd00e064c75e3f4149ce1a7cabb0af222))
* **context:** tidy up context for resolving injections of a singleton binding ([f5bf43c](https://github.com/strongloop/loopback-next/commit/f5bf43c40c8e02d606c14a4c1b1912e3925c79ec))
* **core:** allow application to accept a parent context ([ee50007](https://github.com/strongloop/loopback-next/commit/ee5000750aa1bab4e2b0d0bb5d32f1637fd341ea))
* **eslint-config:** enable "no-misused-promises" rule ([88d5494](https://github.com/strongloop/loopback-next/commit/88d5494a29fd6a642c4ef25f0e427f529c9b9456))
* **openapi-v3:** add operationId based on controller/method names ([89f905b](https://github.com/strongloop/loopback-next/commit/89f905b91dae74387ff153ee1c9561eb47cda5c7))
* **rest:** add `disabled` option for OpenAPI spec endpoints ([af5b16a](https://github.com/strongloop/loopback-next/commit/af5b16a78200cb7c1d577cb5a5378123f8a3edba))
* **rest:** add `requestedBaseUrl` API to RequestContext ([912bece](https://github.com/strongloop/loopback-next/commit/912becee827714ff9eb1ac650b09e2d1e5af8c6f))
* **rest:** add async validation support ([5b9a1ef](https://github.com/strongloop/loopback-next/commit/5b9a1efe03a9728dc707eb050c24b0ac7e23a1ec))
* **rest:** add info spec enhancer to build `info` for OpenAPI spec from application metadata ([a440ae2](https://github.com/strongloop/loopback-next/commit/a440ae248f8a51abb573ee3f1246be82e1d38817))
* **rest:** add listenOnStart flag to control http listening for a rest server ([2c5a131](https://github.com/strongloop/loopback-next/commit/2c5a131e6cca4fe231b4da60d006539e74d10b24))
* **rest:** add mountExpressRouter ([be21cde](https://github.com/strongloop/loopback-next/commit/be21cdead68027ffa219465e2671171d100dece2))
* **rest:** add openapi enhancer service ([62d55eb](https://github.com/strongloop/loopback-next/commit/62d55ebd956910cbb487611673f21ec7088f3dcc)), closes [#4380](https://github.com/strongloop/loopback-next/issues/4380)
* **rest:** add strict option for routers ([c3c5dab](https://github.com/strongloop/loopback-next/commit/c3c5daba108117bc1feb8b798e72988063d4c2d6))
* **rest:** add support for ajv-errors ([d151475](https://github.com/strongloop/loopback-next/commit/d151475d8fc91b4b02e0067c1db7069620143dd2))
* **rest:** add support for ajv-keywords ([f7bb80d](https://github.com/strongloop/loopback-next/commit/f7bb80dee363074ca8499da67e6b71ce78dc8b72))
* **rest:** add support for redirect routes ([53bce7f](https://github.com/strongloop/loopback-next/commit/53bce7f9faf50ccc154348600bc219688f55e93e))
* **rest:** added support for sockets and pipes to RestServer ([e48ebb8](https://github.com/strongloop/loopback-next/commit/e48ebb814ab6e8441e6536a59b3bd929a94aa680))
* **rest:** allow basePath for rest servers ([1016a09](https://github.com/strongloop/loopback-next/commit/1016a09f707ad54eb08de0d33d8a1ce7ecca1f59))
* **rest:** allow body parsers to be extended ([86bfcbc](https://github.com/strongloop/loopback-next/commit/86bfcbc2f8437a3ec0ea8ffe081cb1e91a856f41))
* **rest:** allow controllers/routes to be added/removed after server is started ([b604563](https://github.com/strongloop/loopback-next/commit/b6045636885268d9ea5d31287351ddbf0da53a7c))
* **rest:** allow developers to transform AJV error objects ([8c05b57](https://github.com/strongloop/loopback-next/commit/8c05b57d6d7eb03530f7be8b4e392e73694c7013))
* **rest:** allow express settings to be customized ([962f1cb](https://github.com/strongloop/loopback-next/commit/962f1cb699cd50be3f39cfe755ef65a36d5fd50a))
* **rest:** allow rest-server to be mounted on a path to express ([de8f626](https://github.com/strongloop/loopback-next/commit/de8f626480e98854e831a11a0ef9d2f4d0492328))
* **rest:** bind controller routes to the context ([a645b17](https://github.com/strongloop/loopback-next/commit/a645b17d0338e56f8182437d6ade20f27577203d))
* **rest:** bind operation spec to the request context ([55311df](https://github.com/strongloop/loopback-next/commit/55311df23e8b4a22968b5c0edd826323538ba163))
* **rest:** expose request body validation options to be configurable ([00ec6df](https://github.com/strongloop/loopback-next/commit/00ec6df56b777edd1bee1a2bb4c769d7039f33d4))
* **rest:** fixed AjvErrorOptions type & added test for ajvErrors: Object ([aa711d0](https://github.com/strongloop/loopback-next/commit/aa711d068b476292cdf27f673228746d21999c52))
* **rest:** improve Ajv validation to allow extensions of keywords and formats ([afdee34](https://github.com/strongloop/loopback-next/commit/afdee346f5b56932d59ff600478116b75eac797d))
* **rest:** introduce requestBodyParser options in RestServerOptions ([c7f59ba](https://github.com/strongloop/loopback-next/commit/c7f59bac4ed0b25d80b6d4fec9ec5988665bd314))
* **rest:** set nullable to true by default for AJV validations ([73ad6ad](https://github.com/strongloop/loopback-next/commit/73ad6adb8580ae7d903f218f328b94a5bd74d6a9))
* **rest:** upgrade to path-to-regexp 6.x and improve error messages ([ad44209](https://github.com/strongloop/loopback-next/commit/ad4420954e3d3c18d4a52ca7511985d026efcdc6))
* **rest:** use the description field in Openapi ([4ca321c](https://github.com/strongloop/loopback-next/commit/4ca321c01a128b14dcbc5336901899ee61ff1460))
* add `tslib` as dependency ([a6e0b4c](https://github.com/strongloop/loopback-next/commit/a6e0b4ce7b862764167cefedee14c1115b25e0a4)), closes [#4676](https://github.com/strongloop/loopback-next/issues/4676)
* **cli:** add responses for PingController.ping() ([ec52b89](https://github.com/strongloop/loopback-next/commit/ec52b89a8b103d4f99530ab10e3f908c24746698))
* **context:** add type as a generic parameter to `ctx.get()` and friends ([24b217d](https://github.com/strongloop/loopback-next/commit/24b217df94a8a21f037a85ff4d6f748741c2f599))
* **context:** allow tags to have an optional value ([95acd11](https://github.com/strongloop/loopback-next/commit/95acd11aab1fed9911d4f40312f85b34faeab94f))
* **openapi-v3:** add support for openapi responses ([0ecaecd](https://github.com/strongloop/loopback-next/commit/0ecaecd8cfdbfd10b9d581bbf9edcabb0297e0d3))
* **repository-json-schema:** add in top-level metadata for json schema ([#907](https://github.com/strongloop/loopback-next/issues/907)) ([fe59e6b](https://github.com/strongloop/loopback-next/commit/fe59e6be0f4e67c2b259ee655c1706cf176dc918))
* **rest:** add config option to disable API Explorer redirects ([b4d9bc5](https://github.com/strongloop/loopback-next/commit/b4d9bc519535f2bbac6bff96cc911bbc69c77a76))
* **rest:** add error codes for REST validation errors ([1762765](https://github.com/strongloop/loopback-next/commit/176276564b31a89d8d30b5ec069124d5d4d24fa2))
* **rest:** add support for form request body ([2d9e0a8](https://github.com/strongloop/loopback-next/commit/2d9e0a886686e2e8e585f13956b64bd66b96f860))
* **rest:** add typing for controller instance/class/factory ([a1cbab3](https://github.com/strongloop/loopback-next/commit/a1cbab338d61207ef5d20120a6dd3e425873ad97))
* **rest:** add url property ([18b3408](https://github.com/strongloop/loopback-next/commit/18b340840deeccb44d5e960aaf8cb9284d1436aa))
* **rest:** allow controller methods to handle response writing ([2bfd50e](https://github.com/strongloop/loopback-next/commit/2bfd50e19a677a19799a8f1d4fcef062c7205341))
* **rest:** allow factory for controller routes ([184371b](https://github.com/strongloop/loopback-next/commit/184371bccb5966814412f2c2b542a3644bc7c870))
* **rest:** allow static assets to be served by a rest server ([a1cefcc](https://github.com/strongloop/loopback-next/commit/a1cefccea1583aa1889d60b15088b85cb5e5d190))
* **rest:** expose app.requestHandler function ([20a41ac](https://github.com/strongloop/loopback-next/commit/20a41ac7081a8cead0011447b5a8e5794a320ded))
* **rest:** Improve decorators to infer param types ([37d881f](https://github.com/strongloop/loopback-next/commit/37d881f666e6b7b1cd4d378221bffe8ab6015289))
* **rest:** make servers configurable for openapi specs ([99b80a9](https://github.com/strongloop/loopback-next/commit/99b80a9fd8ad27dd2019e1198f6a0413fa7e3a51))
* **rest:** push route(verb, path, spec, fn) down to RestServer ([c49b65a](https://github.com/strongloop/loopback-next/commit/c49b65a5d55a46b087552bd3cdde372925ac5170))
* **rest:** set controller name as the default tag ([b008e07](https://github.com/strongloop/loopback-next/commit/b008e07f70e7115221734f739a2237b465c9b621))
* **rest:** set status code to 204 when body is undefined ([047efcb](https://github.com/strongloop/loopback-next/commit/047efcba79f05c0f90fa27c24bb8073daa2f5b46))
* **rest:** switch to express body-parser ([084837f](https://github.com/strongloop/loopback-next/commit/084837fa41389f855ed99e774ccbee4afb6ff4a0))
* add 'x-visibility' extension property to OpenAPI spec ([5634e18](https://github.com/strongloop/loopback-next/commit/5634e187355b6afe611749852530d21422a18bc8))
* **rest:** switch to trie based routing ([a682ce2](https://github.com/strongloop/loopback-next/commit/a682ce2f93f4dd58f60a48b9356dd406f6b27120))
* add `listening` property in the server interface ([ff0eab7](https://github.com/strongloop/loopback-next/commit/ff0eab7ae47a7a4219afaf1c662897445989bd0d)), closes [#1368](https://github.com/strongloop/loopback-next/issues/1368)
* add helper package "dist-util" ([532f153](https://github.com/strongloop/loopback-next/commit/532f15324f0378a951dbb7f101ce9df3bb3711ef))
* add http-server package ([bac8d8c](https://github.com/strongloop/loopback-next/commit/bac8d8cb1f3070e7b46ecff4125d10687fe5d981))
* add HTTPs protocol support ([6941a5d](https://github.com/strongloop/loopback-next/commit/6941a5d5590ac1cae725760e667d05adf5b8a5f2))
* add tests for array and object ([57b968a](https://github.com/strongloop/loopback-next/commit/57b968a88b15de92f663464834361d14abe8dab5))
* add type coercion ([2b8d816](https://github.com/strongloop/loopback-next/commit/2b8d816d167d915f7805a773484a0cdbe6a38d28))
* body validation ([d284ad8](https://github.com/strongloop/loopback-next/commit/d284ad8ce70744c811c2ed5a101f6f2fab6cc816))
* builders for Filter and Where schemas ([ca8d96e](https://github.com/strongloop/loopback-next/commit/ca8d96e0cb1768c60448082e249b46dc1282aed1))
* **rest:** enable dependency injection for controller methods ([72afddd](https://github.com/strongloop/loopback-next/commit/72afddd5d5e6122f273f595293a6592d14550a47))
* **rest:** Improve http error handling ([15d04fa](https://github.com/strongloop/loopback-next/commit/15d04fae8f6457116e85c56f07f6a458ede06594))
* **rest:** Improve result serialization for http ([d5bc53e](https://github.com/strongloop/loopback-next/commit/d5bc53ef4776b7e14306e735c10cb4e4731758dd))
* **rest:** Make rest host and explorer configurable ([caa2598](https://github.com/strongloop/loopback-next/commit/caa2598e5be4e9eb9f0271b20a737072f46a5d70))
* **rest:** Single-server RestApplication ([80638b4](https://github.com/strongloop/loopback-next/commit/80638b4a3aef6634b1dc08db1511f73aa497c54d))
* **testlab:** add createRestAppClient(), simplify usage in tests ([d75be77](https://github.com/strongloop/loopback-next/commit/d75be770dac236705e287bb86fc7b48246ff4653))
* **testlab:** set port to 0 in givenHttpServerConfig ([90a0bfb](https://github.com/strongloop/loopback-next/commit/90a0bfbec3b5d78d3fd2e270cc1d063ca3f7d690))
* coerce object arguments from query strings ([d095693](https://github.com/strongloop/loopback-next/commit/d0956931eceee89ec669e8665ecc91ea1897cec1))
* coercion for more types ([2b4b269](https://github.com/strongloop/loopback-next/commit/2b4b2691d48b05f03faa968b471c2b58f18d58cb))
* Create @loopback/openapi-v2 ([#804](https://github.com/strongloop/loopback-next/issues/804)) ([4ddd4bc](https://github.com/strongloop/loopback-next/commit/4ddd4bc95e69b2653ba3156a50cbb44cbcccaa38))
* Expose reflectors via MetadataInspector ([5e6829f](https://github.com/strongloop/loopback-next/commit/5e6829f8687a039b418bb45ee391fb74e62405f8))
* helpers for building JSON/OpenAPI schema referencing shared definitions ([bf07ff9](https://github.com/strongloop/loopback-next/commit/bf07ff959a1f90577849b61221b292d3127696d6))
* improve debug logs for schema generators ([da88cdf](https://github.com/strongloop/loopback-next/commit/da88cdf9c75b0ca498b86f7cd5729f78a4b160f7))
* localize error in details ([3c9f6b4](https://github.com/strongloop/loopback-next/commit/3c9f6b4119bfce90dca56c5e94e170ace307410f))
* replace tslint with eslint ([44185a7](https://github.com/strongloop/loopback-next/commit/44185a744f772566f2cb186ba8cd288fed65d04c))
* self host oas spec by default on relative path in explorer ([887556e](https://github.com/strongloop/loopback-next/commit/887556e821f08d3eb7388f24cf0ac4d416eaf7d4))
* simplify model schema with excluded properties ([b554ac8](https://github.com/strongloop/loopback-next/commit/b554ac8a08a518f112d111ebabcac48279ada7f8))
* support any type ([03ce221](https://github.com/strongloop/loopback-next/commit/03ce221bb41a2ecd296ba235fe342d488fa2d639))
* upgrade from swagger 2 to openapi 3 ([71e5af1](https://github.com/strongloop/loopback-next/commit/71e5af10365b7fa6277cad8f6a216439610f19df))
* upgrade to openapi3-ts@0.11.0 ([1ed79c9](https://github.com/strongloop/loopback-next/commit/1ed79c9e5ab2f258f95cc4e539df87b58b790884))
* **context:** typed binding keys ([685195c](https://github.com/strongloop/loopback-next/commit/685195c27825844f2bba9fc177767cccb68a6ebf))
* **rest:** app.route() and app.api() ([5c3fd62](https://github.com/strongloop/loopback-next/commit/5c3fd622985b3393206f1218d86e1b8bc7405966))
* **testlab:** add dummy HTTPS config ([a32c885](https://github.com/strongloop/loopback-next/commit/a32c88505a5474b1de50feea2b28d4dcb6561f0e))
* **testlab:** add generic helper `skipOnTravis` ([3221d9f](https://github.com/strongloop/loopback-next/commit/3221d9faed0c5dbc5da8bfc65cad7992f1b91f41))
* Refactor REST decorators to use factories ([d03adf7](https://github.com/strongloop/loopback-next/commit/d03adf7a2ffba92db4fe3be04eda5b93ae4a4966))


### Performance Improvements

* further optimize AJV validation cache ([6526aef](https://github.com/strongloop/loopback-next/commit/6526aef0c0fb82be29a8cdfbe7a7aa0e0856cc50))
* improve schema validation peformance ([353b202](https://github.com/strongloop/loopback-next/commit/353b202d1546e0a808047ec2c188de02a3e4d4cc))


### BREAKING CHANGES

* **rest:** Api specifications are now emitted as a Promise instead
of a value object.  Calls to getApiSpec function must switch from
the old style to new style as follows:

1. Old style

```ts
function() {
  // ...
  const spec = restApp.restServer.getApiSpec();
  // ...
}
```

2. New style

```ts
async function() {
  // ...
  const spec = await restApp.restServer.getApiSpec();
  // ...
}
```
* **rest:** `validateRequestBody` is now an async function to allow asynchronous validations by custom Ajv keywords and formats. See https://ajv.js.org/#asynchronous-validation
for more details.
* Node.js v8.x is now end of life. Please upgrade to version
10 and above. See https://nodejs.org/en/about/releases.
* This fix has modified the api definitions described by the decorator
'param.query.object', to support Open-API's `url-encoded` definition for json query
parameters.

Previously, such parameters were described with `exploded: true` and
`style: deepObject`, i.e exploded encoding, which turned out to be problematic as explained and discussed in,
https://github.com/swagger-api/swagger-js/issues/1385 and
https://github.com/OAI/OpenAPI-Specification/issues/1706

```json
  {
    "in": "query",
    "style": "deepObject"
    "explode": "true",
    "schema": {}
  }
```

Exploded encoding worked for simple json objects as below but not for complex objects.

```
   http://localhost:3000/todos?filter[limit]=2
```

To address these issues with exploded queries, this fix switches definition of json
query params from the `exploded`, `deep-object` style to the `url-encoded` style
definition in Open-API spec.

LoopBack already supports receiving url-encoded payload for json query parameters.

For instance, to filter api results from the GET '/todo-list' endpoint in the
todo-list example with a specific relation, { "include": [ { "relation": "todo" } ] },
the following url-encoded query parameter can be used,

```
   http://localhost:3000/todos?filter=%7B%22include%22%3A%5B%7B%22relation%22%3A%22todoList%22%7D%5D%7D
```

The above was possible because the coercion behavior in LoopBack performed json
parsing for `deep object` style json query params before this fix. This fix has
modified that behavior by removing json parsing. Since the `exploded` `deep-object`
definition has been removed from the `param.query.object` decorator, this new
behaviour remains just an internal source code aspect as of now.

In effect, this fix only modifies the open api definitions generated from LoopBack
APIs. The 'style' and 'explode' fields are removed and the 'schema' field is moved
under 'content[application/json]'. This is the definition that supports url-encoding
as per Open-API spec.

```json
  {
    "in": "query"
    "content": {
      "application/json": {
        "schema": {}
      }
    }
  }
```

Certain client libraries (like swagger-ui or LoopBack's api explorer) necessiate
using Open-API's `url-encoded` style definition for json query params to support
"sending" url-encoded payload.

All consumers of LoopBack APIs may need to regenerate api definitions, if their
client libraries require them to do so for url-encoding.

Otherwise there wouldn't be any significant impact on API consumers.

To preserve compatibility with existing REST API clients, this change is backward
compatible. All exploded queries like `?filter[limit]=1` will continue to work for
json query params, despite the fact that they are described differently in the
OpenAPI spec.

Existing api clients will continue to work after an upgrade.

The signature of the 'param.query.object' decorator has not changed.

There is no code changes required in the LoopBack APIs after upgrading to this
fix. No method signatures or data structures are impacted.
* **rest:** `RestServer#handleHttp` was renamed to
`RestServer#requestHandler`.
* **context:** `ctx.get()` and `ctx.getSync()` require a type now.
See the example below for upgrade instructions:

```diff
- const c: MyController = await ctx.get('MyController');
+ const c = await ctx.get<MyController>('MyController');
```

`isPromise` was renamed to `isPromiseLike` and acts as a type guard
for `PromiseLike`, not `Promise`.  When upgrading affected code, you
need to determine whether the code was accepting any Promise
implementation (i.e. `PromiseLike`) or only native Promises. In the
former case, you should use `isPromiseLike` and potentially convert the
userland Promise instance to a native Promise via
`Promise.resolve(promiseLike)`. In the latter case, you can replace
`isPromise(p)` with `p instanceof Promise`.
* Support for Node.js version lower than 8.0 has been dropped.
Please upgrade to the latest Node.js 8.x LTS version.

Co-Authored-by: Taranveer Virk <taranveer@virk.cc>
* **core:** Components must now provide key-value pairs in an
object called "servers".





## [3.2.1](https://github.com/strongloop/loopback-next/compare/@loopback/rest@3.2.0...@loopback/rest@3.2.1) (2020-04-11)

**Note:** Version bump only for package @loopback/rest





# [3.2.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@3.1.0...@loopback/rest@3.2.0) (2020-04-08)


### Bug Fixes

* passport strategy adapter must support oauth2 flows ([67c2f02](https://github.com/strongloop/loopback-next/commit/67c2f02f74c08ee037827c0045e1f225d6ca8ede))


### Features

* **rest:** improve Ajv validation to allow extensions of keywords and formats ([afdee34](https://github.com/strongloop/loopback-next/commit/afdee346f5b56932d59ff600478116b75eac797d))
* **rest:** use the description field in Openapi ([4ca321c](https://github.com/strongloop/loopback-next/commit/4ca321c01a128b14dcbc5336901899ee61ff1460))
* support any type ([03ce221](https://github.com/strongloop/loopback-next/commit/03ce221bb41a2ecd296ba235fe342d488fa2d639))





# [3.1.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@3.0.1...@loopback/rest@3.1.0) (2020-03-24)


### Bug Fixes

* **rest:** allow async custom keyword by setting {$async: true} to referenced schemas ([ede4bbd](https://github.com/strongloop/loopback-next/commit/ede4bbdba4d0bca3a558309118bc97924f48fd6e))
* update package locks ([cd2f6fa](https://github.com/strongloop/loopback-next/commit/cd2f6fa7a732afe4a16f4ccf8316ff3142959fe8))


### Features

* **rest:** add info spec enhancer to build `info` for OpenAPI spec from application metadata ([a440ae2](https://github.com/strongloop/loopback-next/commit/a440ae248f8a51abb573ee3f1246be82e1d38817))





## [3.0.1](https://github.com/strongloop/loopback-next/compare/@loopback/rest@3.0.0...@loopback/rest@3.0.1) (2020-03-17)

**Note:** Version bump only for package @loopback/rest





# [3.0.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@2.0.0...@loopback/rest@3.0.0) (2020-03-05)


### Bug Fixes

* **cli:** extract messages for generators ([2f572bd](https://github.com/strongloop/loopback-next/commit/2f572bd75883420e38bfaa780bc38445aec92e65))
* **rest:** improves error handling for express middleware ([02d0c91](https://github.com/strongloop/loopback-next/commit/02d0c91abb97830fd8652dde69ac4153720f3e75))


### chore

* remove support for Node.js v8.x ([4281d9d](https://github.com/strongloop/loopback-next/commit/4281d9df50f0715d32879e1442a90b643ec8f542))


### Code Refactoring

* **rest:** make getApiSpec() async ([fe3df1b](https://github.com/strongloop/loopback-next/commit/fe3df1b85904ee8b8a005fa6eddf150d28ad2a08))


### Features

* **rest:** add async validation support ([5b9a1ef](https://github.com/strongloop/loopback-next/commit/5b9a1efe03a9728dc707eb050c24b0ac7e23a1ec))
* **rest:** add openapi enhancer service ([62d55eb](https://github.com/strongloop/loopback-next/commit/62d55ebd956910cbb487611673f21ec7088f3dcc)), closes [#4380](https://github.com/strongloop/loopback-next/issues/4380)
* **rest:** add support for ajv-errors ([d151475](https://github.com/strongloop/loopback-next/commit/d151475d8fc91b4b02e0067c1db7069620143dd2))
* **rest:** allow controllers/routes to be added/removed after server is started ([b604563](https://github.com/strongloop/loopback-next/commit/b6045636885268d9ea5d31287351ddbf0da53a7c))
* add `tslib` as dependency ([a6e0b4c](https://github.com/strongloop/loopback-next/commit/a6e0b4ce7b862764167cefedee14c1115b25e0a4)), closes [#4676](https://github.com/strongloop/loopback-next/issues/4676)
* **rest:** bind controller routes to the context ([a645b17](https://github.com/strongloop/loopback-next/commit/a645b17d0338e56f8182437d6ade20f27577203d))
* **rest:** fixed AjvErrorOptions type & added test for ajvErrors: Object ([aa711d0](https://github.com/strongloop/loopback-next/commit/aa711d068b476292cdf27f673228746d21999c52))


### BREAKING CHANGES

* **rest:** Api specifications are now emitted as a Promise instead
of a value object.  Calls to getApiSpec function must switch from
the old style to new style as follows:

1. Old style

```ts
function() {
  // ...
  const spec = restApp.restServer.getApiSpec();
  // ...
}
```

2. New style

```ts
async function() {
  // ...
  const spec = await restApp.restServer.getApiSpec();
  // ...
}
```
* **rest:** `validateRequestBody` is now an async function to allow asynchronous validations by custom Ajv keywords and formats. See https://ajv.js.org/#asynchronous-validation
for more details.
* Node.js v8.x is now end of life. Please upgrade to version
10 and above. See https://nodejs.org/en/about/releases.





# [2.0.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.26.1...@loopback/rest@2.0.0) (2020-02-06)


### Bug Fixes

* suport complex objects for query params in api explorer ([a4ef640](https://github.com/strongloop/loopback-next/commit/a4ef64037a80d1ff7df37ba7912909a1bfcdbf51))


### BREAKING CHANGES

* This fix has modified the api definitions described by the decorator
'param.query.object', to support Open-API's `url-encoded` definition for json query
parameters.

Previously, such parameters were described with `exploded: true` and
`style: deepObject`, i.e exploded encoding, which turned out to be problematic as explained and discussed in,
https://github.com/swagger-api/swagger-js/issues/1385 and
https://github.com/OAI/OpenAPI-Specification/issues/1706

```json
  {
    "in": "query",
    "style": "deepObject"
    "explode": "true",
    "schema": {}
  }
```

Exploded encoding worked for simple json objects as below but not for complex objects.

```
   http://localhost:3000/todos?filter[limit]=2
```

To address these issues with exploded queries, this fix switches definition of json
query params from the `exploded`, `deep-object` style to the `url-encoded` style
definition in Open-API spec.

LoopBack already supports receiving url-encoded payload for json query parameters.

For instance, to filter api results from the GET '/todo-list' endpoint in the
todo-list example with a specific relation, { "include": [ { "relation": "todo" } ] },
the following url-encoded query parameter can be used,

```
   http://localhost:3000/todos?filter=%7B%22include%22%3A%5B%7B%22relation%22%3A%22todoList%22%7D%5D%7D
```

The above was possible because the coercion behavior in LoopBack performed json
parsing for `deep object` style json query params before this fix. This fix has
modified that behavior by removing json parsing. Since the `exploded` `deep-object`
definition has been removed from the `param.query.object` decorator, this new
behaviour remains just an internal source code aspect as of now.

In effect, this fix only modifies the open api definitions generated from LoopBack
APIs. The 'style' and 'explode' fields are removed and the 'schema' field is moved
under 'content[application/json]'. This is the definition that supports url-encoding
as per Open-API spec.

```json
  {
    "in": "query"
    "content": {
      "application/json": {
        "schema": {}
      }
    }
  }
```

Certain client libraries (like swagger-ui or LoopBack's api explorer) necessiate
using Open-API's `url-encoded` style definition for json query params to support
"sending" url-encoded payload.

All consumers of LoopBack APIs may need to regenerate api definitions, if their
client libraries require them to do so for url-encoding.

Otherwise there wouldn't be any significant impact on API consumers.

To preserve compatibility with existing REST API clients, this change is backward
compatible. All exploded queries like `?filter[limit]=1` will continue to work for
json query params, despite the fact that they are described differently in the
OpenAPI spec.

Existing api clients will continue to work after an upgrade.

The signature of the 'param.query.object' decorator has not changed.

There is no code changes required in the LoopBack APIs after upgrading to this
fix. No method signatures or data structures are impacted.





## [1.26.1](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.26.0...@loopback/rest@1.26.1) (2020-02-05)

**Note:** Version bump only for package @loopback/rest





# [1.26.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.25.1...@loopback/rest@1.26.0) (2020-01-27)


### Features

* **context:** index bindings by tag to speed up matching by tag ([566b9d9](https://github.com/strongloop/loopback-next/commit/566b9d9a35ce52d9aeefe17e36f91c9714616b21))





## [1.25.1](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.25.0...@loopback/rest@1.25.1) (2020-01-07)

**Note:** Version bump only for package @loopback/rest





# [1.25.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.24.0...@loopback/rest@1.25.0) (2019-12-09)


### Features

* **context:** make it possible to set source information for interceptions ([2a1ccb4](https://github.com/strongloop/loopback-next/commit/2a1ccb409a889d8b30b03ddf3284c9e9d5554e27))





# [1.24.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.23.0...@loopback/rest@1.24.0) (2019-11-25)


### Features

* **rest:** upgrade to path-to-regexp 6.x and improve error messages ([ad44209](https://github.com/strongloop/loopback-next/commit/ad4420954e3d3c18d4a52ca7511985d026efcdc6))





# [1.23.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.22.0...@loopback/rest@1.23.0) (2019-11-12)


### Bug Fixes

* **rest:** improve null check to avoid compilation errors with TypeScript 3.7 ([ab47ef6](https://github.com/strongloop/loopback-next/commit/ab47ef63adc01b170ddc537ca973da631c5a8d8f))


### Features

* **rest:** bind operation spec to the request context ([55311df](https://github.com/strongloop/loopback-next/commit/55311df23e8b4a22968b5c0edd826323538ba163))





# [1.22.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.21.0...@loopback/rest@1.22.0) (2019-10-24)


### Bug Fixes

* **openapi-v3:** preserve `additionalProperties: false` ([bc7691b](https://github.com/strongloop/loopback-next/commit/bc7691b0963ee297922bd4d9652a0eccf763f085))


### Features

* improve debug logs for schema generators ([da88cdf](https://github.com/strongloop/loopback-next/commit/da88cdf9c75b0ca498b86f7cd5729f78a4b160f7))
* simplify model schema with excluded properties ([b554ac8](https://github.com/strongloop/loopback-next/commit/b554ac8a08a518f112d111ebabcac48279ada7f8))





# [1.21.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.20.1...@loopback/rest@1.21.0) (2019-10-07)


### Features

* **rest:** add listenOnStart flag to control http listening for a rest server ([2c5a131](https://github.com/strongloop/loopback-next/commit/2c5a131))





## [1.20.1](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.20.0...@loopback/rest@1.20.1) (2019-09-28)

**Note:** Version bump only for package @loopback/rest





# [1.20.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.19.0...@loopback/rest@1.20.0) (2019-09-27)


### Features

* **rest:** added support for sockets and pipes to RestServer ([e48ebb8](https://github.com/strongloop/loopback-next/commit/e48ebb8))
* **rest:** allow developers to transform AJV error objects ([8c05b57](https://github.com/strongloop/loopback-next/commit/8c05b57))
* self host oas spec by default on relative path in explorer ([887556e](https://github.com/strongloop/loopback-next/commit/887556e))





# [1.19.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.18.1...@loopback/rest@1.19.0) (2019-09-17)


### Features

* **eslint-config:** enable "no-misused-promises" rule ([88d5494](https://github.com/strongloop/loopback-next/commit/88d5494))





## [1.18.1](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.18.0...@loopback/rest@1.18.1) (2019-09-06)

**Note:** Version bump only for package @loopback/rest





# [1.18.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.17.0...@loopback/rest@1.18.0) (2019-09-03)


### Bug Fixes

* make givenHttpServerConfig typing compatible with TypeScript 3.6 ([1edbc0b](https://github.com/strongloop/loopback-next/commit/1edbc0b))


### Features

* **core:** allow application to accept a parent context ([ee50007](https://github.com/strongloop/loopback-next/commit/ee50007))





# [1.17.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.16.8...@loopback/rest@1.17.0) (2019-08-19)


### Features

* **rest:** add support for ajv-keywords ([f7bb80d](https://github.com/strongloop/loopback-next/commit/f7bb80d))





## [1.16.8](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.16.7...@loopback/rest@1.16.8) (2019-08-15)

**Note:** Version bump only for package @loopback/rest





## [1.16.7](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.16.6...@loopback/rest@1.16.7) (2019-08-15)

**Note:** Version bump only for package @loopback/rest





## [1.16.6](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.16.5...@loopback/rest@1.16.6) (2019-07-31)

**Note:** Version bump only for package @loopback/rest





## [1.16.5](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.16.4...@loopback/rest@1.16.5) (2019-07-26)

**Note:** Version bump only for package @loopback/rest





## [1.16.4](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.16.3...@loopback/rest@1.16.4) (2019-07-17)


### Bug Fixes

* **rest:** correctly handle basePath set via basePath() API ([2118d80](https://github.com/strongloop/loopback-next/commit/2118d80))





## [1.16.3](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.16.2...@loopback/rest@1.16.3) (2019-06-28)


### Bug Fixes

* **rest:** honor options for AJV validator caching ([1fd52a3](https://github.com/strongloop/loopback-next/commit/1fd52a3))
* address violations of "no-floating-promises" rule ([0947531](https://github.com/strongloop/loopback-next/commit/0947531))





## [1.16.2](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.16.1...@loopback/rest@1.16.2) (2019-06-21)

**Note:** Version bump only for package @loopback/rest





## [1.16.1](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.16.0...@loopback/rest@1.16.1) (2019-06-20)

**Note:** Version bump only for package @loopback/rest





# [1.16.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.15.0...@loopback/rest@1.16.0) (2019-06-17)


### Features

* **rest:** expose request body validation options to be configurable ([00ec6df](https://github.com/strongloop/loopback-next/commit/00ec6df))
* **rest:** set nullable to true by default for AJV validations ([73ad6ad](https://github.com/strongloop/loopback-next/commit/73ad6ad))





# [1.15.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.14.0...@loopback/rest@1.15.0) (2019-06-06)


### Features

* **testlab:** add generic helper `skipOnTravis` ([3221d9f](https://github.com/strongloop/loopback-next/commit/3221d9f))





# [1.14.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.13.1...@loopback/rest@1.14.0) (2019-06-03)


### Features

* replace tslint with eslint ([44185a7](https://github.com/strongloop/loopback-next/commit/44185a7))





## [1.13.1](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.13.0...@loopback/rest@1.13.1) (2019-05-31)

**Note:** Version bump only for package @loopback/rest





# [1.13.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.12.0...@loopback/rest@1.13.0) (2019-05-30)


### Bug Fixes

* specify the type for handler ([9e0119d](https://github.com/strongloop/loopback-next/commit/9e0119d))


### Features

* helpers for building JSON/OpenAPI schema referencing shared definitions ([bf07ff9](https://github.com/strongloop/loopback-next/commit/bf07ff9))





# [1.12.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.11.2...@loopback/rest@1.12.0) (2019-05-23)


### Features

* **context:** leave local bindings and parent unchanged during close ([198af88](https://github.com/strongloop/loopback-next/commit/198af88))





## [1.11.2](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.11.1...@loopback/rest@1.11.2) (2019-05-14)

**Note:** Version bump only for package @loopback/rest





## [1.11.1](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.11.0...@loopback/rest@1.11.1) (2019-05-10)

**Note:** Version bump only for package @loopback/rest





# [1.11.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.10.5...@loopback/rest@1.11.0) (2019-05-09)


### Bug Fixes

* **rest:** assign all component properties to target spec ([af06b69](https://github.com/strongloop/loopback-next/commit/af06b69))


### Features

* **context:** add support for method interceptors ([293188d](https://github.com/strongloop/loopback-next/commit/293188d))





## [1.10.5](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.10.4...@loopback/rest@1.10.5) (2019-05-06)


### Bug Fixes

* **rest:** aggressive redirection to Swagger UI ([9f0d8ca](https://github.com/strongloop/loopback-next/commit/9f0d8ca))





## [1.10.4](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.10.3...@loopback/rest@1.10.4) (2019-04-26)

**Note:** Version bump only for package @loopback/rest





## [1.10.3](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.10.2...@loopback/rest@1.10.3) (2019-04-20)


### Bug Fixes

* **rest:** fix a variable in sample code for README.md ([2bad701](https://github.com/strongloop/loopback-next/commit/2bad701))





## [1.10.2](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.10.1...@loopback/rest@1.10.2) (2019-04-11)

**Note:** Version bump only for package @loopback/rest





## [1.10.1](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.10.0...@loopback/rest@1.10.1) (2019-04-09)


### Bug Fixes

* **rest:** a small typo fix in code comments ([81d19bb](https://github.com/strongloop/loopback-next/commit/81d19bb))





# [1.10.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.9.1...@loopback/rest@1.10.0) (2019-04-05)


### Bug Fixes

* **rest:** make sure basePath is included in RestServer.url ([705bce4](https://github.com/strongloop/loopback-next/commit/705bce4))


### Features

* **context:** pass resolution options into binding.getValue() ([705dcd5](https://github.com/strongloop/loopback-next/commit/705dcd5))
* **rest:** add mountExpressRouter ([be21cde](https://github.com/strongloop/loopback-next/commit/be21cde))





## [1.9.1](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.9.0...@loopback/rest@1.9.1) (2019-03-22)

**Note:** Version bump only for package @loopback/rest





# [1.9.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.8.0...@loopback/rest@1.9.0) (2019-03-22)


### Features

* **context:** honor binding scope from [@bind](https://github.com/bind) ([3b30f01](https://github.com/strongloop/loopback-next/commit/3b30f01))
* **context:** tidy up context for resolving injections of a singleton binding ([f5bf43c](https://github.com/strongloop/loopback-next/commit/f5bf43c))
* **rest:** add `requestedBaseUrl` API to RequestContext ([912bece](https://github.com/strongloop/loopback-next/commit/912bece))
* **testlab:** add dummy HTTPS config ([a32c885](https://github.com/strongloop/loopback-next/commit/a32c885))





# [1.8.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.7.0...@loopback/rest@1.8.0) (2019-03-12)


### Features

* **openapi-v3:** add operationId based on controller/method names ([89f905b](https://github.com/strongloop/loopback-next/commit/89f905b))
* **rest:** add strict option for routers ([c3c5dab](https://github.com/strongloop/loopback-next/commit/c3c5dab))
* **rest:** add support for redirect routes ([53bce7f](https://github.com/strongloop/loopback-next/commit/53bce7f))





# [1.7.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.6.0...@loopback/rest@1.7.0) (2019-03-01)


### Features

* **rest:** allow express settings to be customized ([962f1cb](https://github.com/strongloop/loopback-next/commit/962f1cb))





# [1.6.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.5.5...@loopback/rest@1.6.0) (2019-02-25)


### Bug Fixes

* **rest:** only return matched trie nodes with values ([669ede1](https://github.com/strongloop/loopback-next/commit/669ede1))


### Features

* **context:** introduce async context observers for bind/unbind events ([e5e5fc4](https://github.com/strongloop/loopback-next/commit/e5e5fc4))
* **rest:** add `disabled` option for OpenAPI spec endpoints ([af5b16a](https://github.com/strongloop/loopback-next/commit/af5b16a))
* **rest:** allow rest-server to be mounted on a path to express ([de8f626](https://github.com/strongloop/loopback-next/commit/de8f626))
* **rest:** introduce requestBodyParser options in RestServerOptions ([c7f59ba](https://github.com/strongloop/loopback-next/commit/c7f59ba))





## [1.5.5](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.5.4...@loopback/rest@1.5.5) (2019-02-08)


### Bug Fixes

* **rest:** sanitize json for JSON.parse() ([5042698](https://github.com/strongloop/loopback-next/commit/5042698))
* update to the most recent lodash version ([65ee865](https://github.com/strongloop/loopback-next/commit/65ee865))





## [1.5.4](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.5.3...@loopback/rest@1.5.4) (2019-01-28)

**Note:** Version bump only for package @loopback/rest





## [1.5.3](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.5.2...@loopback/rest@1.5.3) (2019-01-15)

**Note:** Version bump only for package @loopback/rest





## [1.5.2](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.5.1...@loopback/rest@1.5.2) (2019-01-14)


### Bug Fixes

* rework tslint comments disabling "no-unused-variable" rule ([a18a3d7](https://github.com/strongloop/loopback-next/commit/a18a3d7))





## [1.5.1](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.5.0...@loopback/rest@1.5.1) (2018-12-20)

**Note:** Version bump only for package @loopback/rest





# [1.5.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.4.0...@loopback/rest@1.5.0) (2018-12-13)


### Bug Fixes

* **rest:** add tests for request validation per media type ([7be76a4](https://github.com/strongloop/loopback-next/commit/7be76a4))
* **rest:** parse query string even when there is no rest query param ([ad905a5](https://github.com/strongloop/loopback-next/commit/ad905a5))


### Features

* **rest:** allow basePath for rest servers ([1016a09](https://github.com/strongloop/loopback-next/commit/1016a09))





# [1.4.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.3.1...@loopback/rest@1.4.0) (2018-11-26)


### Bug Fixes

* **rest:** allow `.` to be used in openapi path template ([47c24cb](https://github.com/strongloop/loopback-next/commit/47c24cb))


### Features

* **rest:** allow body parsers to be extended ([86bfcbc](https://github.com/strongloop/loopback-next/commit/86bfcbc))
* **rest:** switch to express body-parser ([084837f](https://github.com/strongloop/loopback-next/commit/084837f))





## [1.3.1](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.3.0...@loopback/rest@1.3.1) (2018-11-17)


### Bug Fixes

* **rest:** allow users to disable Explorer redirects after RestServer was created ([34af6a0](https://github.com/strongloop/loopback-next/commit/34af6a0))





# [1.3.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.2.0...@loopback/rest@1.3.0) (2018-11-14)


### Features

* **rest:** add config option to disable API Explorer redirects ([b4d9bc5](https://github.com/strongloop/loopback-next/commit/b4d9bc5))





<a name="1.2.0"></a>
# [1.2.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.0.1...@loopback/rest@1.2.0) (2018-11-08)


### Bug Fixes

* **rest:** don't rely on transitive dependencies from express ([a3d5d0c](https://github.com/strongloop/loopback-next/commit/a3d5d0c))
* **rest:** handle overlapping paths with different vars ([17adc7a](https://github.com/strongloop/loopback-next/commit/17adc7a))
* **rest:** improve route sorting to group by path and verb ([ce31bf7](https://github.com/strongloop/loopback-next/commit/ce31bf7))
* **rest:** make sure the sorting test pass for node 11 ([614450b](https://github.com/strongloop/loopback-next/commit/614450b))
* fix static assets router blocking controller registration ([0e1b06f](https://github.com/strongloop/loopback-next/commit/0e1b06f))
* move serve-static [@types](https://github.com/types) to normal dependencies ([216bf85](https://github.com/strongloop/loopback-next/commit/216bf85)), closes [#1917](https://github.com/strongloop/loopback-next/issues/1917)
* optimize serving static files ([57a94a5](https://github.com/strongloop/loopback-next/commit/57a94a5))
* remove unnecessary dependency from [#1918](https://github.com/strongloop/loopback-next/issues/1918) ([63d367b](https://github.com/strongloop/loopback-next/commit/63d367b))


### Features

* add 'x-visibility' extension property to OpenAPI spec ([5634e18](https://github.com/strongloop/loopback-next/commit/5634e18))
* **rest:** add support for form request body ([2d9e0a8](https://github.com/strongloop/loopback-next/commit/2d9e0a8))
* **rest:** push route(verb, path, spec, fn) down to RestServer ([c49b65a](https://github.com/strongloop/loopback-next/commit/c49b65a))





<a name="1.0.1"></a>
## [1.0.1](https://github.com/strongloop/loopback-next/compare/@loopback/rest@1.0.0...@loopback/rest@1.0.1) (2018-10-17)

**Note:** Version bump only for package @loopback/rest





<a name="0.26.0"></a>
# [0.26.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.25.5...@loopback/rest@0.26.0) (2018-10-08)


### Features

* **rest:** switch to trie based routing ([a682ce2](https://github.com/strongloop/loopback-next/commit/a682ce2))





<a name="0.25.5"></a>
## [0.25.5](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.25.4...@loopback/rest@0.25.5) (2018-10-06)

**Note:** Version bump only for package @loopback/rest





<a name="0.25.4"></a>
## [0.25.4](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.25.3...@loopback/rest@0.25.4) (2018-10-05)

**Note:** Version bump only for package @loopback/rest





<a name="0.25.3"></a>
## [0.25.3](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.25.2...@loopback/rest@0.25.3) (2018-10-03)


### Performance Improvements

* improve schema validation peformance ([353b202](https://github.com/strongloop/loopback-next/commit/353b202))





<a name="0.25.2"></a>
## [0.25.2](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.25.1...@loopback/rest@0.25.2) (2018-09-28)

**Note:** Version bump only for package @loopback/rest





<a name="0.25.1"></a>
## [0.25.1](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.25.0...@loopback/rest@0.25.1) (2018-09-27)

**Note:** Version bump only for package @loopback/rest





<a name="0.25.0"></a>
# [0.25.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.24.0...@loopback/rest@0.25.0) (2018-09-25)


### Bug Fixes

* **rest:** coerce string parameters (reject object values) ([1f49844](https://github.com/strongloop/loopback-next/commit/1f49844))


### Features

* builders for Filter and Where schemas ([ca8d96e](https://github.com/strongloop/loopback-next/commit/ca8d96e))
* **cli:** add responses for PingController.ping() ([ec52b89](https://github.com/strongloop/loopback-next/commit/ec52b89))
* **rest:** allow controller methods to handle response writing ([2bfd50e](https://github.com/strongloop/loopback-next/commit/2bfd50e))





<a name="0.24.0"></a>
# [0.24.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.23.0...@loopback/rest@0.24.0) (2018-09-21)


### Features

* **testlab:** add createRestAppClient(), simplify usage in tests ([d75be77](https://github.com/strongloop/loopback-next/commit/d75be77))
* **testlab:** set port to 0 in givenHttpServerConfig ([90a0bfb](https://github.com/strongloop/loopback-next/commit/90a0bfb))





<a name="0.23.0"></a>
# [0.23.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.22.2...@loopback/rest@0.23.0) (2018-09-19)


### Bug Fixes

* **rest:** return 404 when a model was not found ([7a56bad](https://github.com/strongloop/loopback-next/commit/7a56bad))


### Features

* **rest:** add error codes for REST validation errors ([1762765](https://github.com/strongloop/loopback-next/commit/1762765))
* **rest:** set status code to 204 when body is undefined ([047efcb](https://github.com/strongloop/loopback-next/commit/047efcb))





<a name="0.22.2"></a>
## [0.22.2](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.22.1...@loopback/rest@0.22.2) (2018-09-14)

**Note:** Version bump only for package @loopback/rest





<a name="0.22.1"></a>
## [0.22.1](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.22.0...@loopback/rest@0.22.1) (2018-09-14)


### Bug Fixes

* **rest:** make sure validation system error is reported ([fe4fe16](https://github.com/strongloop/loopback-next/commit/fe4fe16))





<a name="0.22.0"></a>
# [0.22.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.21.1...@loopback/rest@0.22.0) (2018-09-14)


### Features

* **openapi-v3:** add support for openapi responses ([0ecaecd](https://github.com/strongloop/loopback-next/commit/0ecaecd))





<a name="0.21.1"></a>
## [0.21.1](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.21.0...@loopback/rest@0.21.1) (2018-09-12)


### Bug Fixes

* **rest:** tidy up host/port parsing and client url building ([b692f45](https://github.com/strongloop/loopback-next/commit/b692f45))





<a name="0.21.0"></a>
# [0.21.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.20.0...@loopback/rest@0.21.0) (2018-09-10)


### Bug Fixes

* **rest:** use direct import to work around a TS bug ([2cf3b2c](https://github.com/strongloop/loopback-next/commit/2cf3b2c))


### Features

* **rest:** make servers configurable for openapi specs ([99b80a9](https://github.com/strongloop/loopback-next/commit/99b80a9))





<a name="0.20.0"></a>
# [0.20.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.19.6...@loopback/rest@0.20.0) (2018-09-08)


### Bug Fixes

* remove extra imports for mixin dependencies ([35b916b](https://github.com/strongloop/loopback-next/commit/35b916b))
* **rest:** use strong-error-handler for writing errors to the response body ([ac011f8](https://github.com/strongloop/loopback-next/commit/ac011f8))


### Features

* **rest:** allow static assets to be served by a rest server ([a1cefcc](https://github.com/strongloop/loopback-next/commit/a1cefcc))
* coerce object arguments from query strings ([d095693](https://github.com/strongloop/loopback-next/commit/d095693))





<a name="0.19.6"></a>
## [0.19.6](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.19.5...@loopback/rest@0.19.6) (2018-08-25)

**Note:** Version bump only for package @loopback/rest





<a name="0.19.5"></a>
## [0.19.5](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.19.4...@loopback/rest@0.19.5) (2018-08-24)


### Bug Fixes

* **openapi-v3:** set required to true for path parameters ([2b13247](https://github.com/strongloop/loopback-next/commit/2b13247))





<a name="0.19.4"></a>
## [0.19.4](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.19.3...@loopback/rest@0.19.4) (2018-08-15)


### Bug Fixes

* **rest:** set openapi url based on x-forwarded-* headers ([8706038](https://github.com/strongloop/loopback-next/commit/8706038))




<a name="0.19.3"></a>
## [0.19.3](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.19.2...@loopback/rest@0.19.3) (2018-08-08)




**Note:** Version bump only for package @loopback/rest

<a name="0.19.2"></a>
## [0.19.2](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.19.1...@loopback/rest@0.19.2) (2018-07-21)




**Note:** Version bump only for package @loopback/rest

<a name="0.19.1"></a>
## [0.19.1](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.19.0...@loopback/rest@0.19.1) (2018-07-20)




**Note:** Version bump only for package @loopback/rest

<a name="0.19.0"></a>
# [0.19.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.18.0...@loopback/rest@0.19.0) (2018-07-20)


### Features

* add HTTPs protocol support ([6941a5d](https://github.com/strongloop/loopback-next/commit/6941a5d))




<a name="0.18.0"></a>
# [0.18.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.17.1...@loopback/rest@0.18.0) (2018-07-13)


### Features

* localize error in details ([3c9f6b4](https://github.com/strongloop/loopback-next/commit/3c9f6b4))




<a name="0.17.1"></a>
## [0.17.1](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.17.0...@loopback/rest@0.17.1) (2018-07-11)




**Note:** Version bump only for package @loopback/rest

<a name="0.17.0"></a>
# [0.17.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.16.0...@loopback/rest@0.17.0) (2018-07-10)


### Features

* add tests for array and object ([57b968a](https://github.com/strongloop/loopback-next/commit/57b968a))
* **rest:** add url property ([18b3408](https://github.com/strongloop/loopback-next/commit/18b3408))




<a name="0.16.0"></a>
# [0.16.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.15.1...@loopback/rest@0.16.0) (2018-07-09)


### Features

* body validation ([d284ad8](https://github.com/strongloop/loopback-next/commit/d284ad8))




<a name="0.15.1"></a>
## [0.15.1](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.15.0...@loopback/rest@0.15.1) (2018-06-28)




**Note:** Version bump only for package @loopback/rest

<a name="0.15.0"></a>
# [0.15.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.14.1...@loopback/rest@0.15.0) (2018-06-27)


### Features

* add `listening` property in the server interface ([ff0eab7](https://github.com/strongloop/loopback-next/commit/ff0eab7)), closes [#1368](https://github.com/strongloop/loopback-next/issues/1368)




<a name="0.14.1"></a>
## [0.14.1](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.14.0...@loopback/rest@0.14.1) (2018-06-26)




**Note:** Version bump only for package @loopback/rest

<a name="0.14.0"></a>
# [0.14.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.12.0...@loopback/rest@0.14.0) (2018-06-25)


### Features

* coercion for more types ([2b4b269](https://github.com/strongloop/loopback-next/commit/2b4b269))




<a name="0.13.0"></a>
# [0.13.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.12.0...@loopback/rest@0.13.0) (2018-06-25)


### Features

* coercion for more types ([2b4b269](https://github.com/strongloop/loopback-next/commit/2b4b269))




<a name="0.12.0"></a>
# [0.12.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.11.3...@loopback/rest@0.12.0) (2018-06-20)


### Bug Fixes

* **rest:** stop an app that has not been started ([1841ebb](https://github.com/strongloop/loopback-next/commit/1841ebb)), closes [#822](https://github.com/strongloop/loopback-next/issues/822)


### Features

* add type coercion ([2b8d816](https://github.com/strongloop/loopback-next/commit/2b8d816))




<a name="0.11.3"></a>
## [0.11.3](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.11.2...@loopback/rest@0.11.3) (2018-06-11)




**Note:** Version bump only for package @loopback/rest

<a name="0.11.2"></a>
## [0.11.2](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.11.0...@loopback/rest@0.11.2) (2018-06-09)




**Note:** Version bump only for package @loopback/rest

<a name="0.11.1"></a>
## [0.11.1](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.11.0...@loopback/rest@0.11.1) (2018-06-09)




**Note:** Version bump only for package @loopback/rest

<a name="0.11.0"></a>
# [0.11.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.10.5...@loopback/rest@0.11.0) (2018-06-08)


### Bug Fixes

* make the code compatible with TypeScript 2.9.x ([37aba50](https://github.com/strongloop/loopback-next/commit/37aba50))


### Features

* add http-server package ([bac8d8c](https://github.com/strongloop/loopback-next/commit/bac8d8c))




<a name="0.10.5"></a>
## [0.10.5](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.10.4...@loopback/rest@0.10.5) (2018-05-28)




**Note:** Version bump only for package @loopback/rest

<a name="0.10.4"></a>
## [0.10.4](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.10.3...@loopback/rest@0.10.4) (2018-05-20)




**Note:** Version bump only for package @loopback/rest

<a name="0.10.3"></a>
## [0.10.3](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.10.2...@loopback/rest@0.10.3) (2018-05-14)


### Bug Fixes

* change index.d.ts files to point to dist8 ([42ca42d](https://github.com/strongloop/loopback-next/commit/42ca42d))




<a name="0.10.2"></a>
## [0.10.2](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.10.1...@loopback/rest@0.10.2) (2018-05-14)




**Note:** Version bump only for package @loopback/rest

<a name="0.10.1"></a>
## [0.10.1](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.10.0...@loopback/rest@0.10.1) (2018-05-08)




**Note:** Version bump only for package @loopback/rest

<a name="0.10.0"></a>
# [0.10.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.8.1...@loopback/rest@0.10.0) (2018-05-03)


### Features

* **context:** allow tags to have an optional value ([95acd11](https://github.com/strongloop/loopback-next/commit/95acd11))
* add helper package "dist-util" ([532f153](https://github.com/strongloop/loopback-next/commit/532f153))




<a name="0.9.0"></a>
# [0.9.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.8.1...@loopback/rest@0.9.0) (2018-05-03)


### Features

* **context:** allow tags to have an optional value ([95acd11](https://github.com/strongloop/loopback-next/commit/95acd11))
* add helper package "dist-util" ([532f153](https://github.com/strongloop/loopback-next/commit/532f153))




<a name="0.8.1"></a>
## [0.8.1](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.8.0...@loopback/rest@0.8.1) (2018-04-26)




**Note:** Version bump only for package @loopback/rest

<a name="0.8.0"></a>
# [0.8.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.7.0...@loopback/rest@0.8.0) (2018-04-25)


### Features

* upgrade to openapi3-ts@0.11.0 ([1ed79c9](https://github.com/strongloop/loopback-next/commit/1ed79c9))




<a name="0.7.0"></a>
# [0.7.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.6.3...@loopback/rest@0.7.0) (2018-04-16)




**Note:** Version bump only for package @loopback/rest

<a name="0.6.3"></a>
## [0.6.3](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.6.2...@loopback/rest@0.6.3) (2018-04-16)




**Note:** Version bump only for package @loopback/rest

<a name="0.6.2"></a>
## [0.6.2](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.6.1...@loopback/rest@0.6.2) (2018-04-12)




**Note:** Version bump only for package @loopback/rest

<a name="0.6.1"></a>
## [0.6.1](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.6.0...@loopback/rest@0.6.1) (2018-04-11)




**Note:** Version bump only for package @loopback/rest

<a name="0.6.0"></a>
# [0.6.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.5.2...@loopback/rest@0.6.0) (2018-04-11)


### Bug Fixes

* change file names to fit advocated naming convention ([0331df8](https://github.com/strongloop/loopback-next/commit/0331df8))


### Features

* **context:** typed binding keys ([685195c](https://github.com/strongloop/loopback-next/commit/685195c))
* **rest:** add typing for controller instance/class/factory ([a1cbab3](https://github.com/strongloop/loopback-next/commit/a1cbab3))
* **rest:** allow factory for controller routes ([184371b](https://github.com/strongloop/loopback-next/commit/184371b))




<a name="0.5.3"></a>
## [0.5.3](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.5.2...@loopback/rest@0.5.3) (2018-04-06)




**Note:** Version bump only for package @loopback/rest

<a name="0.5.2"></a>
## [0.5.2](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.5.1...@loopback/rest@0.5.2) (2018-04-04)




**Note:** Version bump only for package @loopback/rest

<a name="0.5.1"></a>
## [0.5.1](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.5.0...@loopback/rest@0.5.1) (2018-04-02)




**Note:** Version bump only for package @loopback/rest

<a name="0.5.0"></a>
# [0.5.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.4.1...@loopback/rest@0.5.0) (2018-03-29)




**Note:** Version bump only for package @loopback/rest

<a name="0.4.1"></a>
## [0.4.1](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.4.0...@loopback/rest@0.4.1) (2018-03-23)




**Note:** Version bump only for package @loopback/rest

<a name="0.4.0"></a>
# [0.4.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.3.4...@loopback/rest@0.4.0) (2018-03-21)


### Features

* **rest:** expose app.requestHandler function ([20a41ac](https://github.com/strongloop/loopback-next/commit/20a41ac))


### BREAKING CHANGES

* **rest:** `RestServer#handleHttp` was renamed to
`RestServer#requestHandler`.




<a name="0.3.4"></a>
## [0.3.4](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.3.3...@loopback/rest@0.3.4) (2018-03-14)




**Note:** Version bump only for package @loopback/rest

<a name="0.3.3"></a>
## [0.3.3](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.3.2...@loopback/rest@0.3.3) (2018-03-13)




**Note:** Version bump only for package @loopback/rest

<a name="0.3.2"></a>
## [0.3.2](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.3.1...@loopback/rest@0.3.2) (2018-03-08)


### Bug Fixes

* **rest:** move [@types](https://github.com/types)/cors to dependency ([fee3520](https://github.com/strongloop/loopback-next/commit/fee3520))




<a name="0.3.1"></a>
## [0.3.1](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.3.0...@loopback/rest@0.3.1) (2018-03-07)


### Bug Fixes

* **rest:** enable cors preflight ([d05bdae](https://github.com/strongloop/loopback-next/commit/d05bdae))




<a name="0.3.0"></a>
# [0.3.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.2.0...@loopback/rest@0.3.0) (2018-03-06)


### Bug Fixes

* fix typo of `additional` ([2fd7610](https://github.com/strongloop/loopback-next/commit/2fd7610))


### Features

* upgrade from swagger 2 to openapi 3 ([71e5af1](https://github.com/strongloop/loopback-next/commit/71e5af1))




<a name="0.2.0"></a>
# [0.2.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.1.2...@loopback/rest@0.2.0) (2018-03-01)




**Note:** Version bump only for package @loopback/rest

<a name="0.1.2"></a>
## [0.1.2](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.1.1...@loopback/rest@0.1.2) (2018-03-01)


### Bug Fixes

* **rest:** log unexpected errors to console ([#1058](https://github.com/strongloop/loopback-next/issues/1058)) ([b7b0fd8](https://github.com/strongloop/loopback-next/commit/b7b0fd8))
* **rest:** make the route binding key friendly for find ([e3577ab](https://github.com/strongloop/loopback-next/commit/e3577ab))


### Features

* **context:** add type as a generic parameter to `ctx.get()` and friends ([24b217d](https://github.com/strongloop/loopback-next/commit/24b217d))


### BREAKING CHANGES

* **context:** `ctx.get()` and `ctx.getSync()` require a type now.
See the example below for upgrade instructions:

```diff
- const c: MyController = await ctx.get('MyController');
+ const c = await ctx.get<MyController>('MyController');
```

`isPromise` was renamed to `isPromiseLike` and acts as a type guard
for `PromiseLike`, not `Promise`.  When upgrading affected code, you
need to determine whether the code was accepting any Promise
implementation (i.e. `PromiseLike`) or only native Promises. In the
former case, you should use `isPromiseLike` and potentially convert the
userland Promise instance to a native Promise via
`Promise.resolve(promiseLike)`. In the latter case, you can replace
`isPromise(p)` with `p instanceof Promise`.




<a name="0.1.1"></a>
## [0.1.1](https://github.com/strongloop/loopback-next/compare/@loopback/rest@0.1.0...@loopback/rest@0.1.1) (2018-02-23)


### Bug Fixes

* **context:** fix optional param injection for methods ([801a82d](https://github.com/strongloop/loopback-next/commit/801a82d))




<a name="0.1.0"></a>
# [0.1.0](https://github.com/strongloop/loopback-next/compare/@loopback/rest@4.0.0-alpha.26...@loopback/rest@0.1.0) (2018-02-21)


### Features

* **rest:** app.route() and app.api() ([5c3fd62](https://github.com/strongloop/loopback-next/commit/5c3fd62))




<a name="4.0.0-alpha.26"></a>
# [4.0.0-alpha.26](https://github.com/strongloop/loopback-next/compare/@loopback/rest@4.0.0-alpha.25...@loopback/rest@4.0.0-alpha.26) (2018-02-15)




**Note:** Version bump only for package @loopback/rest

<a name="4.0.0-alpha.25"></a>
# [4.0.0-alpha.25](https://github.com/strongloop/loopback-next/compare/@loopback/rest@4.0.0-alpha.24...@loopback/rest@4.0.0-alpha.25) (2018-02-07)


### build

* drop dist6 related targets ([#945](https://github.com/strongloop/loopback-next/issues/945)) ([a2368ce](https://github.com/strongloop/loopback-next/commit/a2368ce))


### BREAKING CHANGES

* Support for Node.js version lower than 8.0 has been dropped.
Please upgrade to the latest Node.js 8.x LTS version.

Co-Authored-by: Taranveer Virk <taranveer@virk.cc>




<a name="4.0.0-alpha.24"></a>
# [4.0.0-alpha.24](https://github.com/strongloop/loopback-next/compare/@loopback/rest@4.0.0-alpha.23...@loopback/rest@4.0.0-alpha.24) (2018-02-04)


### Bug Fixes

* remove console output from tests ([ff4a320](https://github.com/strongloop/loopback-next/commit/ff4a320))




<a name="4.0.0-alpha.23"></a>
# [4.0.0-alpha.23](https://github.com/strongloop/loopback-next/compare/@loopback/rest@4.0.0-alpha.22...@loopback/rest@4.0.0-alpha.23) (2018-01-30)


### Features

* **repository-json-schema:** add in top-level metadata for json schema ([#907](https://github.com/strongloop/loopback-next/issues/907)) ([fe59e6b](https://github.com/strongloop/loopback-next/commit/fe59e6b))




<a name="4.0.0-alpha.22"></a>
# [4.0.0-alpha.22](https://github.com/strongloop/loopback-next/compare/@loopback/rest@4.0.0-alpha.21...@loopback/rest@4.0.0-alpha.22) (2018-01-29)




**Note:** Version bump only for package @loopback/rest

<a name="4.0.0-alpha.21"></a>
# [4.0.0-alpha.21](https://github.com/strongloop/loopback-next/compare/@loopback/rest@4.0.0-alpha.20...@loopback/rest@4.0.0-alpha.21) (2018-01-26)




**Note:** Version bump only for package @loopback/rest

<a name="4.0.0-alpha.20"></a>
# [4.0.0-alpha.20](https://github.com/strongloop/loopback-next/compare/@loopback/rest@4.0.0-alpha.19...@loopback/rest@4.0.0-alpha.20) (2018-01-26)


### Bug Fixes

* **rest:** correctly re-export decorators at runtime ([c81c0ac](https://github.com/strongloop/loopback-next/commit/c81c0ac))
* **rest:** fix assertion broken by new deps versions ([05a8e0c](https://github.com/strongloop/loopback-next/commit/05a8e0c))
* **rest:** fix yaml comparison to tolerate textual diffs ([615882c](https://github.com/strongloop/loopback-next/commit/615882c))
* apply source-maps to test errors ([76a7f56](https://github.com/strongloop/loopback-next/commit/76a7f56)), closes [#602](https://github.com/strongloop/loopback-next/issues/602)
* make mocha self-contained with the source map support ([7c6d869](https://github.com/strongloop/loopback-next/commit/7c6d869))


### Features

* **rest:** enable dependency injection for controller methods ([72afddd](https://github.com/strongloop/loopback-next/commit/72afddd))




<a name="4.0.0-alpha.19"></a>
# [4.0.0-alpha.19](https://github.com/strongloop/loopback-next/compare/@loopback/rest@4.0.0-alpha.18...@loopback/rest@4.0.0-alpha.19) (2018-01-19)


### Bug Fixes

* **rest:** export decorators for backward compatibility ([#850](https://github.com/strongloop/loopback-next/issues/850)) ([5166388](https://github.com/strongloop/loopback-next/commit/5166388))




<a name="4.0.0-alpha.18"></a>
# [4.0.0-alpha.18](https://github.com/strongloop/loopback-next/compare/@loopback/rest@4.0.0-alpha.17...@loopback/rest@4.0.0-alpha.18) (2018-01-11)


### Bug Fixes

* fix imports to use files owning the definitions ([a50405a](https://github.com/strongloop/loopback-next/commit/a50405a))




<a name="4.0.0-alpha.17"></a>
# [4.0.0-alpha.17](https://github.com/strongloop/loopback-next/compare/@loopback/rest@4.0.0-alpha.16...@loopback/rest@4.0.0-alpha.17) (2018-01-03)


### Bug Fixes

* fix version for [@loopback](https://github.com/loopback)/openapi-v2 ([d032129](https://github.com/strongloop/loopback-next/commit/d032129))




<a name="4.0.0-alpha.16"></a>
# [4.0.0-alpha.16](https://github.com/strongloop/loopback-next/compare/@loopback/rest@4.0.0-alpha.15...@loopback/rest@4.0.0-alpha.16) (2018-01-03)


### Features

* **rest:** set controller name as the default tag ([b008e07](https://github.com/strongloop/loopback-next/commit/b008e07))
* Create [@loopback](https://github.com/loopback)/openapi-v2 ([#804](https://github.com/strongloop/loopback-next/issues/804)) ([4ddd4bc](https://github.com/strongloop/loopback-next/commit/4ddd4bc))




<a name="4.0.0-alpha.15"></a>
# [4.0.0-alpha.15](https://github.com/strongloop/loopback-next/compare/@loopback/rest@4.0.0-alpha.14...@loopback/rest@4.0.0-alpha.15) (2017-12-21)


### Features

* **rest:** Improve decorators to infer param types ([37d881f](https://github.com/strongloop/loopback-next/commit/37d881f))
* **rest:** Single-server RestApplication ([80638b4](https://github.com/strongloop/loopback-next/commit/80638b4))




<a name="4.0.0-alpha.14"></a>
# [4.0.0-alpha.14](https://github.com/strongloop/loopback-next/compare/@loopback/rest@4.0.0-alpha.13...@loopback/rest@4.0.0-alpha.14) (2017-12-15)


### Features

* Expose reflectors via MetadataInspector ([5e6829f](https://github.com/strongloop/loopback-next/commit/5e6829f))
* Refactor REST decorators to use factories ([d03adf7](https://github.com/strongloop/loopback-next/commit/d03adf7))




<a name="4.0.0-alpha.13"></a>
# [4.0.0-alpha.13](https://github.com/strongloop/loopback-next/compare/@loopback/rest@4.0.0-alpha.12...@loopback/rest@4.0.0-alpha.13) (2017-12-11)


### Bug Fixes

* Fix node module names in source code headers ([0316f28](https://github.com/strongloop/loopback-next/commit/0316f28))
* **rest:** Fix compilation error caused by [@types](https://github.com/types)/node ([89f1401](https://github.com/strongloop/loopback-next/commit/89f1401))




<a name="4.0.0-alpha.12"></a>
# [4.0.0-alpha.12](https://github.com/strongloop/loopback-next/compare/@loopback/rest@4.0.0-alpha.11...@loopback/rest@4.0.0-alpha.12) (2017-12-01)


### Bug Fixes

* **rest:** move [@types](https://github.com/types)/http-errors from dev-dep ([11350bd](https://github.com/strongloop/loopback-next/commit/11350bd))




<a name="4.0.0-alpha.11"></a>
# [4.0.0-alpha.11](https://github.com/strongloop/loopback-next/compare/@loopback/rest@4.0.0-alpha.10...@loopback/rest@4.0.0-alpha.11) (2017-11-30)




**Note:** Version bump only for package @loopback/rest

<a name="4.0.0-alpha.10"></a>
# [4.0.0-alpha.10](https://github.com/strongloop/loopback-next/compare/@loopback/rest@4.0.0-alpha.9...@loopback/rest@4.0.0-alpha.10) (2017-11-29)


### Bug Fixes

* **rest:** Fix parameter description ([c3e6afc](https://github.com/strongloop/loopback-next/commit/c3e6afc))
* **rest:** Improve rest metadata inheritance ([3f124f3](https://github.com/strongloop/loopback-next/commit/3f124f3))
* **rest:** Listen on all interfaces if host is not configured ([99daf63](https://github.com/strongloop/loopback-next/commit/99daf63))
* **rest:** Remove unused imports ([76a08ee](https://github.com/strongloop/loopback-next/commit/76a08ee))




<a name="4.0.0-alpha.9"></a>
# [4.0.0-alpha.9](https://github.com/strongloop/loopback-next/compare/@loopback/rest@4.0.0-alpha.8...@loopback/rest@4.0.0-alpha.9) (2017-11-14)


### Features

* **rest:** Make rest host and explorer configurable ([caa2598](https://github.com/strongloop/loopback-next/commit/caa2598))




<a name="4.0.0-alpha.8"></a>
# [4.0.0-alpha.8](https://github.com/strongloop/loopback-next/compare/@loopback/rest@4.0.0-alpha.7...@loopback/rest@4.0.0-alpha.8) (2017-11-09)


### Bug Fixes

* **rest:** Tidy up rest decorator metadata ([7d15bfe](https://github.com/strongloop/loopback-next/commit/7d15bfe))


### Features

* **rest:** Improve http error handling ([15d04fa](https://github.com/strongloop/loopback-next/commit/15d04fa))
* **rest:** Improve result serialization for http ([d5bc53e](https://github.com/strongloop/loopback-next/commit/d5bc53e))




<a name="4.0.0-alpha.7"></a>
# [4.0.0-alpha.7](https://github.com/strongloop/loopback-next/compare/@loopback/rest@4.0.0-alpha.6...@loopback/rest@4.0.0-alpha.7) (2017-11-06)




**Note:** Version bump only for package @loopback/rest

<a name="4.0.0-alpha.6"></a>
# [4.0.0-alpha.6](https://github.com/strongloop/loopback-next/compare/@loopback/rest@4.0.0-alpha.5...@loopback/rest@4.0.0-alpha.6) (2017-10-31)




**Note:** Version bump only for package @loopback/rest

<a name="4.0.0-alpha.5"></a>
# [4.0.0-alpha.5](https://github.com/strongloop/loopback-next/compare/@loopback/rest@4.0.0-alpha.4...@loopback/rest@4.0.0-alpha.5) (2017-10-31)




**Note:** Version bump only for package @loopback/rest

<a name="4.0.0-alpha.4"></a>
# 4.0.0-alpha.4 (2017-10-25)


### Bug Fixes

* **rest:** Add index boilerplate ([02a025e](https://github.com/strongloop/loopback-next/commit/02a025e))
* **rest:** convert primitives to strings ([2e1ca13](https://github.com/strongloop/loopback-next/commit/2e1ca13))
* **rest:** Move server instantiation to class definition ([051b8e0](https://github.com/strongloop/loopback-next/commit/051b8e0))
* **testlab:** Remove sinon-should integration ([8841fce](https://github.com/strongloop/loopback-next/commit/8841fce))


### Code Refactoring

* **core:** Component servers are now key-value pairs ([866953a](https://github.com/strongloop/loopback-next/commit/866953a))


### BREAKING CHANGES

* **core:** Components must now provide key-value pairs in an
object called "servers".
