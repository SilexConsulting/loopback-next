# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 4.0.0 (2020-04-17)


### Bug Fixes

* **build:** fix tslint config and slipped violations ([22f8e05](https://github.com/strongloop/loopback-next/commit/22f8e056dfd7834da4073b2af8d3ebe7cd9f7e3d))
* **context:** address review comments ([3925296](https://github.com/strongloop/loopback-next/commit/3925296d8c5a5e59da4e3fe910334f90e3a3de3c))
* **context:** allow `inject` to be explicitly invoked for class ctor args ([6a0d4f2](https://github.com/strongloop/loopback-next/commit/6a0d4f2ca86ddf3c5acd59ebdc89a9cefb2645f2))
* **context:** allow injection when a class decorator returns a mixin ([28cc0a0](https://github.com/strongloop/loopback-next/commit/28cc0a03e1b76721fc653db36b75220e910eb4b0))
* **context:** allow optional for a binding without value getter ([e211a71](https://github.com/strongloop/loopback-next/commit/e211a71a2fcd2a976db0822aa53af3702a358d15))
* **context:** calculate # of method params with default ([f5f5bde](https://github.com/strongloop/loopback-next/commit/f5f5bde0faba8f5d26d4f43c759269ef03a7f673))
* **context:** check constructor/method override for [@inject](https://github.com/inject) ([8c0bdb6](https://github.com/strongloop/loopback-next/commit/8c0bdb6b5385fe683e8c6599336c4772cb76a592))
* **context:** clear binding cache upon scope or value getter changes ([122fe7b](https://github.com/strongloop/loopback-next/commit/122fe7b21e818b5f64ee0a67d6f278ad5e902a8f))
* **context:** close invocation context only after async is done ([e71e990](https://github.com/strongloop/loopback-next/commit/e71e990a205a9e1461f1e33dd41eada58bd88b00))
* **context:** disable deep clone of injection metadata ([7d8a84c](https://github.com/strongloop/loopback-next/commit/7d8a84c889b81c5a838c09b2e4642b260aead7c9))
* **context:** fix context observer to catch errors by waitUntilPendingNotificationsDone ([3dad6c0](https://github.com/strongloop/loopback-next/commit/3dad6c0c22ef23506daf6f7d7ad28c247e6080c5))
* **context:** instantiate class with non-injected arguments ([6699825](https://github.com/strongloop/loopback-next/commit/66998255429fbe328a3556bef88ceae001883d77))
* **context:** relax checking on instances of BindingKey class ([8668eb6](https://github.com/strongloop/loopback-next/commit/8668eb64b267e2644be87db92aeb86188d7e86f7))
* address review comments ([76d3ec3](https://github.com/strongloop/loopback-next/commit/76d3ec3b443a973dfdeb8185bb58cbe2dff229f8))
* address violations of "no-floating-promises" rule ([0947531](https://github.com/strongloop/loopback-next/commit/0947531d69d07839a21ea7575cfc08580086841f))
* apply source-maps to test errors ([76a7f56](https://github.com/strongloop/loopback-next/commit/76a7f56cd1166d4407f2a50b188db91a74f7deae)), closes [#602](https://github.com/strongloop/loopback-next/issues/602)
* change file names to fit advocated naming convention ([0331df8](https://github.com/strongloop/loopback-next/commit/0331df8e188f2ba857d04d6a6aff579c7b7726c1))
* change index.d.ts files to point to dist8 ([42ca42d](https://github.com/strongloop/loopback-next/commit/42ca42d5d984df9efe52b219f2be531392256bdd))
* fix typo of `additional` ([2fd7610](https://github.com/strongloop/loopback-next/commit/2fd76106ecebd4d5257262f4cda8af1e5ec409a3))
* make mocha self-contained with the source map support ([7c6d869](https://github.com/strongloop/loopback-next/commit/7c6d86975a379388f433110df91b1bf0e2e4b94d))
* make the code compatible with TypeScript 2.9.x ([37aba50](https://github.com/strongloop/loopback-next/commit/37aba50dc5f47b5ff0c77624d4d02d9cfd4415b5))
* rework tslint comments disabling "no-unused-variable" rule ([a18a3d7](https://github.com/strongloop/loopback-next/commit/a18a3d74c5a76ba90c1fb0ea32ae83335820163f))
* **context:** allow session to be passed into [@inject](https://github.com/inject).getter ([0517ea1](https://github.com/strongloop/loopback-next/commit/0517ea1b294b7cb170cca2cc42a025a0efef2fe7))
* **context:** clean up the circular dependency tests ([5c35ccd](https://github.com/strongloop/loopback-next/commit/5c35ccdadc7a5e10957affb30b1f992ab40e455e))
* **context:** fix optional param injection for methods ([801a82d](https://github.com/strongloop/loopback-next/commit/801a82d47ef9a26d829aec816d7cb4730bcdb6f0))
* **context:** pass metadata to `[@inject](https://github.com/inject).tag` ([27e26e9](https://github.com/strongloop/loopback-next/commit/27e26e99aa8f59bca0ad1f090e17f3cb38e93c72))
* Fix node module names in source code headers ([0316f28](https://github.com/strongloop/loopback-next/commit/0316f28a22a1b85dce72f67b1dab66599c6b9403))
* Improve test coverage for metadata inspector ([3b4b552](https://github.com/strongloop/loopback-next/commit/3b4b552e992c6ab1b7bd87ec7c8780dad4b9d435))
* make sure TS compiler infer undefined ([4c48ece](https://github.com/strongloop/loopback-next/commit/4c48ece13c064c0f98150556173f44ec4934e0d4))
* propagate errors via promises ([204c1b7](https://github.com/strongloop/loopback-next/commit/204c1b781e29b493254c2e4ae04de8b855423777))
* remove console output from tests ([ff4a320](https://github.com/strongloop/loopback-next/commit/ff4a320825720270346013ce81174100bef28f37))
* use version range for @types/debug ([3adbc0b](https://github.com/strongloop/loopback-next/commit/3adbc0be57d8177dfbc46ee5e1b92665e5706ce5))
* **context:** add resolution-session.ts for api docs ([25a9e91](https://github.com/strongloop/loopback-next/commit/25a9e914da2920bea61f53c134b4120e27636e5a))
* **context:** fix the test to avoid UnhandledPromiseRejectionWarning ([6a82c4d](https://github.com/strongloop/loopback-next/commit/6a82c4de94988ccc9c48ad09c2a26cf516e30a79))
* resolve injected arguments ([#821](https://github.com/strongloop/loopback-next/issues/821)) ([ca9e4dd](https://github.com/strongloop/loopback-next/commit/ca9e4dd3d89f023cdbab72f46126f3f41b6d4808))
* **context:** inject nested properties ([#587](https://github.com/strongloop/loopback-next/issues/587)) ([d53fc57](https://github.com/strongloop/loopback-next/commit/d53fc57cf66cce178e6dfc459abfc484f54c7992))


### Build System

* drop dist6 related targets ([#945](https://github.com/strongloop/loopback-next/issues/945)) ([a2368ce](https://github.com/strongloop/loopback-next/commit/a2368cee598c131a826ee42e347266c6e25ae582))


### chore

* remove support for Node.js v8.x ([4281d9d](https://github.com/strongloop/loopback-next/commit/4281d9df50f0715d32879e1442a90b643ec8f542))


### Features

* **context:** expose debug method to subclasses ([f651e5b](https://github.com/strongloop/loopback-next/commit/f651e5be28efe624e83a7139152ed00554580dca))
* remove Node.js 8.x polyfill for Symbol.asyncIterator ([eeb8772](https://github.com/strongloop/loopback-next/commit/eeb877276cf62d32856eb7227d78618ab4c93c2e))
* **build:** add more TypeScript "strict" checks ([866aa2f](https://github.com/strongloop/loopback-next/commit/866aa2fa76cb2a545c1d421afbb0e97cef4c1042))
* **context:** add `[@global](https://github.com/global)Interceptor` decorator ([1010a37](https://github.com/strongloop/loopback-next/commit/1010a377fe9e10701371ab92dec2bae15d89d220))
* **context:** add `[@inject](https://github.com/inject).binding` and improve `[@inject](https://github.com/inject).setter` ([a396274](https://github.com/strongloop/loopback-next/commit/a396274db3ecd0486b686f4e7f0703636e57e97b))
* **context:** add a helper function to create a getter from binding filter ([41248f3](https://github.com/strongloop/loopback-next/commit/41248f3a512e262379c2165795670dbfb1192965))
* **context:** add binding comparator to sort bindings ([ae3d61f](https://github.com/strongloop/loopback-next/commit/ae3d61f9ad37845ef6faf74265240b987f827f67))
* **context:** add binding.toAlias() to resolve values from another binding ([15dcd16](https://github.com/strongloop/loopback-next/commit/15dcd16beb48ea7c7e42279a56b660e438f7b4b3))
* **context:** add ContextEventListener and tidy up parent event handling ([beb41a7](https://github.com/strongloop/loopback-next/commit/beb41a7b105cf1aea64982e3f43f4d5a8128581f))
* **context:** add decorator name for [@inject](https://github.com/inject).*, [@config](https://github.com/config).*, [@intercept](https://github.com/intercept) errors ([48e3231](https://github.com/strongloop/loopback-next/commit/48e3231b4577671c5954b379265d19cb6f183fbd))
* **context:** add more getters for InvocationContext ([12a3ecb](https://github.com/strongloop/loopback-next/commit/12a3ecb3f1b5578e6d305a9fecc264cc2319c4e2))
* **context:** add more logs to simplify troubleshooting ([7752b08](https://github.com/strongloop/loopback-next/commit/7752b08664cd077272cada93266cd31a4c7fe199))
* **context:** add singleValue to ContextView ([22bd57f](https://github.com/strongloop/loopback-next/commit/22bd57f4003f1adc4e545a04336125e540f4dba8))
* **context:** add support for method interceptors ([293188d](https://github.com/strongloop/loopback-next/commit/293188d3861355ae14df5f3945db1074185c4e93))
* **context:** allow [@bind](https://github.com/bind) to be applied on the same class multiple times ([ad4d22c](https://github.com/strongloop/loopback-next/commit/ad4d22c684aca20df9b3e1282e831f6d9eefb1af))
* **context:** allow [@config](https://github.com/config).* to specify the target binding key ([42b7b98](https://github.com/strongloop/loopback-next/commit/42b7b98ccac916cda904ed8ba5cf292d2e01436e))
* **context:** allow current binding to be injected with `[@inject](https://github.com/inject).binding` ([c01b4c6](https://github.com/strongloop/loopback-next/commit/c01b4c6b4dcc5c7ac79832bda144b1ec0da191b1))
* **context:** allow global interceptors to be applied based on source types ([77cbd01](https://github.com/strongloop/loopback-next/commit/77cbd019027e1441339735326bcfb86a23df8b66))
* **context:** allow more options to inspect context/binding objects ([3be32a3](https://github.com/strongloop/loopback-next/commit/3be32a34a0109e4f4f2eb0fcfa60171bd66743a6))
* **context:** allow tags to be matched by a given name with any value ([7cf053e](https://github.com/strongloop/loopback-next/commit/7cf053e49f46b93033c6b7c5e80daffe8406b2af))
* **context:** always pass the session to ResolverFunction ([bf36532](https://github.com/strongloop/loopback-next/commit/bf36532b34cb9f23a42c98aadf2cc20da30b0bc9))
* **context:** emit bind/unbind events on ContextView ([65e3d38](https://github.com/strongloop/loopback-next/commit/65e3d38a34b351929ba422de667bc236e9619ebe))
* **context:** fix generic typing for BindingFilter ([372b406](https://github.com/strongloop/loopback-next/commit/372b406c042443ab50ce2160776e5faa4ae020b0))
* **context:** generalize interceptors and chain for invocations ([34d31d8](https://github.com/strongloop/loopback-next/commit/34d31d878b72443c21e8611627da20d3256e5850))
* **context:** improve context name with the subclass name as prefix ([42d2e1b](https://github.com/strongloop/loopback-next/commit/42d2e1b302e4c9f58df864c0ca01cb2ca181060a))
* **context:** improve context view for bind/unbind events ([6a5f90a](https://github.com/strongloop/loopback-next/commit/6a5f90aadb5f5ba213f2da7ea7843f488a09f95d))
* **context:** improve context/binding with inspect/toJSON for metadata dumping ([ac399f7](https://github.com/strongloop/loopback-next/commit/ac399f7f105eea402ef1932bd96093baad0a009f))
* **context:** improve ctx.inspect() to allow classes with colliding names ([e7380fc](https://github.com/strongloop/loopback-next/commit/e7380fc467fe43fd801d8eca05e37745fc922aed))
* **context:** index bindings by tag to speed up matching by tag ([566b9d9](https://github.com/strongloop/loopback-next/commit/566b9d9a35ce52d9aeefe17e36f91c9714616b21))
* **context:** introduce TagValueMatcher for more flexible tag matching ([deaf2ed](https://github.com/strongloop/loopback-next/commit/deaf2eda29421e73244d3d27006b502c7dcc25e2))
* **context:** keep binding tag pattern for BindingTagFilter ([856b62d](https://github.com/strongloop/loopback-next/commit/856b62d7053c22ebe0f6acf6a1904e524175429c))
* **context:** leave local bindings and parent unchanged during close ([198af88](https://github.com/strongloop/loopback-next/commit/198af881c91f3d6427e66d3ffe56b83e51caeef9))
* **context:** refactor context observer subscription into a new class ([31ad9a5](https://github.com/strongloop/loopback-next/commit/31ad9a55bbd068cd8e41347fca5caaf0ae5eb6e7))
* **context:** remove generic parameters from `BindingFilter` type ([1ce33af](https://github.com/strongloop/loopback-next/commit/1ce33afeefc1c928085ed505adaa32cc06574a0c))
* add `tslib` as dependency ([a6e0b4c](https://github.com/strongloop/loopback-next/commit/a6e0b4ce7b862764167cefedee14c1115b25e0a4)), closes [#4676](https://github.com/strongloop/loopback-next/issues/4676)
* **context:** add [@inject](https://github.com/inject).context for context injection ([6e0deaf](https://github.com/strongloop/loopback-next/commit/6e0deafc3dfff97a7ea442bfbd7737afe4bbae0b))
* **context:** add [@inject](https://github.com/inject).tag to allow injection by a tag ([fc8f260](https://github.com/strongloop/loopback-next/commit/fc8f260f63289773c7712e5fd1df643352a96839))
* **context:** add [@inject](https://github.com/inject).view and extend [@inject](https://github.com/inject) for multiple bindings ([d64268b](https://github.com/strongloop/loopback-next/commit/d64268b2a3e97829ec24f563e433a143bc18fc55))
* **context:** add `[@bind](https://github.com/bind)` to decorate classes with more information ([b8f9792](https://github.com/strongloop/loopback-next/commit/b8f97928505fad645c134943e9ead4e40de73ffd))
* **context:** add a helper `Getter.fromValue()` ([4764166](https://github.com/strongloop/loopback-next/commit/4764166d8ac8e3f88a581f95bba0d91b141e7008))
* **context:** add binding.apply(templateFn) ([f046b30](https://github.com/strongloop/loopback-next/commit/f046b30612f7f8a82fd6ad0012a07122fb239681))
* **context:** add decorator & optional attrs to injection metadata ([3a1c7de](https://github.com/strongloop/loopback-next/commit/3a1c7dec3f8a96fe5861fcb72a5ff5f54956ca85))
* **context:** Add decorator factories ([f517570](https://github.com/strongloop/loopback-next/commit/f517570084206232c74389dbcf0592e250cb3657))
* **context:** add default template argument for BindingAddress ([7113105](https://github.com/strongloop/loopback-next/commit/71131055c04238b70ad7d2c6d9b3b70df218fc10))
* **context:** add events to ContextView ([fb10efc](https://github.com/strongloop/loopback-next/commit/fb10efcc10a724a3f8412e0560f75f1358bfacb7))
* **context:** Add isBound() and more apidocs to Context ([39932be](https://github.com/strongloop/loopback-next/commit/39932be95205f97fc8c85853c8d723c6b28186a8))
* **context:** add more debug statements ([38eab3e](https://github.com/strongloop/loopback-next/commit/38eab3ea07f412d2d28be81ab0b566d74afcb719))
* **context:** add more utils to resolve valueOrPromises ([cc55ef5](https://github.com/strongloop/loopback-next/commit/cc55ef5b88cf9217d3af16f11c96914b590a3e30))
* **context:** add name to context ([21e1daf](https://github.com/strongloop/loopback-next/commit/21e1daf4d1726e5a0d92106020e2524301f378d1))
* **context:** add optional typing for Binding ([3c494fa](https://github.com/strongloop/loopback-next/commit/3c494fa15b3f60ddafae174fa31c879ca1d46856))
* **context:** add support for context.add(binding) ([8f77cef](https://github.com/strongloop/loopback-next/commit/8f77cefd0ddc65188598959d293aa598778680c3))
* **context:** Add support for method dependency injection ([df1c879](https://github.com/strongloop/loopback-next/commit/df1c8799f681af30680a390f5d8081290c9047e7))
* **context:** Add toJSON() for Context & Binding ([b6ce426](https://github.com/strongloop/loopback-next/commit/b6ce4266e5462a8b8c556da29a37255b25114228))
* **context:** add type as a generic parameter to `ctx.get()` and friends ([24b217d](https://github.com/strongloop/loopback-next/commit/24b217df94a8a21f037a85ff4d6f748741c2f599))
* **context:** add unbind() to allow remove bindings by key ([b9c3893](https://github.com/strongloop/loopback-next/commit/b9c38939dc32be12efdc466455756441f5850269))
* **context:** allow context.find by a filter function ([9b1e26c](https://github.com/strongloop/loopback-next/commit/9b1e26c0470202082164482b67f58826c4759d43))
* **context:** allow namespace tag for createBindingFromClass ([f6fe55e](https://github.com/strongloop/loopback-next/commit/f6fe55ed23dc198a9aaa3a2ce29fb1eb521869ad))
* **context:** Allow patterns to be RegExp ([991cf38](https://github.com/strongloop/loopback-next/commit/991cf381511d8787a0eb179a920336ab5e908c54))
* **context:** allow tags to have an optional value ([95acd11](https://github.com/strongloop/loopback-next/commit/95acd11aab1fed9911d4f40312f85b34faeab94f))
* **context:** binding filters ([ff85e74](https://github.com/strongloop/loopback-next/commit/ff85e748e9d848fb2ae4a4c65820492033a5d363))
* **context:** enable detection of circular dependencies ([72b4190](https://github.com/strongloop/loopback-next/commit/72b4190276280e5000e30b45628df9209f27480d))
* **context:** enhance binding caching to be context aware ([7b7eb30](https://github.com/strongloop/loopback-next/commit/7b7eb30b74c4331a65478b78642f5ae655d3ca61))
* **context:** export function to build binding key with path ([fd804a5](https://github.com/strongloop/loopback-next/commit/fd804a5257da3a323095256f12949eb9883390f3))
* **context:** forbid bind().to() a Promise instance ([#854](https://github.com/strongloop/loopback-next/issues/854)) ([85ffa8b](https://github.com/strongloop/loopback-next/commit/85ffa8b33d9062fb9c48fd7e25b2ccb48b8958ec))
* **context:** formalize injection metadata as an interface ([7ffc1e5](https://github.com/strongloop/loopback-next/commit/7ffc1e5b1602fc59cd4daef988eb0047918588cb))
* **context:** honor binding scope from [@bind](https://github.com/bind) ([3b30f01](https://github.com/strongloop/loopback-next/commit/3b30f01bcbad551f9b74662c8537c06d6a9f7b3d))
* **context:** improve typing for binding related methods ([f6cf0c6](https://github.com/strongloop/loopback-next/commit/f6cf0c6e5ea3594417fd303c64d04a923c03a627))
* **context:** introduce async context observers for bind/unbind events ([e5e5fc4](https://github.com/strongloop/loopback-next/commit/e5e5fc4c89b0e9d2a9e3e4d9604ad438ff54566d))
* **context:** introduce context view to watch bindings by filter ([04209f7](https://github.com/strongloop/loopback-next/commit/04209f72b5df79467212f5737fb3337776f06ce1))
* **context:** make bindings as event emitters to report changes ([dddddb9](https://github.com/strongloop/loopback-next/commit/dddddb96fd6908a8d4caad8868e43d3d0bb742f6))
* **context:** make Injection.metadata a required property ([dcc9cac](https://github.com/strongloop/loopback-next/commit/dcc9cac76b53a5f2ea4f0c358f034838e71f6e67))
* **context:** make it possible to set source information for interceptions ([2a1ccb4](https://github.com/strongloop/loopback-next/commit/2a1ccb409a889d8b30b03ddf3284c9e9d5554e27))
* **context:** make parent public for invocation context ([19856c6](https://github.com/strongloop/loopback-next/commit/19856c6bc72bca703895b909a15f909546d1d1d1))
* **context:** pass resolution options into binding.getValue() ([705dcd5](https://github.com/strongloop/loopback-next/commit/705dcd5fd00e064c75e3f4149ce1a7cabb0af222))
* **context:** reports the resolution path for circular deps ([bc4ce20](https://github.com/strongloop/loopback-next/commit/bc4ce2045f161869fb262d09248b804737145584))
* **context:** set max listeners to Infinity by default ([0741e3b](https://github.com/strongloop/loopback-next/commit/0741e3b1293065a04f1ecd9dbda09df074a5dd34))
* **context:** support binding config and [@inject](https://github.com/inject).config ([a392852](https://github.com/strongloop/loopback-next/commit/a392852562090f6012bd4d17105db1a7b17285b2))
* **context:** tidy up binding information for inspection ([15d698b](https://github.com/strongloop/loopback-next/commit/15d698b46841efc0c6bc12bdc89538db77371254))
* **context:** tidy up context for resolving injections of a singleton binding ([f5bf43c](https://github.com/strongloop/loopback-next/commit/f5bf43c40c8e02d606c14a4c1b1912e3925c79ec))
* **context:** track injections with ResolutionSession ([cd4848e](https://github.com/strongloop/loopback-next/commit/cd4848eb08ac26a9f15846fdd7f7c0661d425ba0))
* **context:** typed binding keys ([685195c](https://github.com/strongloop/loopback-next/commit/685195c27825844f2bba9fc177767cccb68a6ebf))
* **context:** use BindingEvent for binding event listeners ([ae5febc](https://github.com/strongloop/loopback-next/commit/ae5febc35679f4d77b9970ecc26a71938a1c972e))
* **context:** use invocation context for method dependency injection ([a8f326c](https://github.com/strongloop/loopback-next/commit/a8f326c865e5ec317187986542b7c0c80b0cf4a4))
* **context:** use one stack to track bindings and injections ([b2f7eda](https://github.com/strongloop/loopback-next/commit/b2f7eda963e8ef2f73117343a8c1aad5a767bf74))
* **context:** use Readonly to guard immutable values ([871ddef](https://github.com/strongloop/loopback-next/commit/871ddef7644e7df2ca5302fa42dc5bf8dc14571c))
* **core:** add [@service](https://github.com/service) decorator to inject a service by class/interface ([1d80904](https://github.com/strongloop/loopback-next/commit/1d80904b670724b00cb6a2965b8472f44d23eed0))
* **core:** allow components to expose an array of bindings ([eae0da3](https://github.com/strongloop/loopback-next/commit/eae0da3e1edf9118438dd00b67d656c1444695a5))
* **metadata:** add strongly-typed metadata accessors ([45f9f80](https://github.com/strongloop/loopback-next/commit/45f9f80c9944ab02c923ce4911ca23e6401e07c7))
* **rest:** allow body parsers to be extended ([86bfcbc](https://github.com/strongloop/loopback-next/commit/86bfcbc2f8437a3ec0ea8ffe081cb1e91a856f41))
* add helper package "dist-util" ([532f153](https://github.com/strongloop/loopback-next/commit/532f15324f0378a951dbb7f101ce9df3bb3711ef))
* Add metadata inspector ([c683019](https://github.com/strongloop/loopback-next/commit/c6830192253e532e4529c18ba680df96db47e8cd))
* replace tslint with eslint ([44185a7](https://github.com/strongloop/loopback-next/commit/44185a744f772566f2cb186ba8cd288fed65d04c))
* Use decorator factories ([88ebd21](https://github.com/strongloop/loopback-next/commit/88ebd217897c7be0a19299b453404f77e4d41b90))


### Performance Improvements

* **context:** cache description of method parameter injections ([127f7c2](https://github.com/strongloop/loopback-next/commit/127f7c24826f5283234506d78c6fb7f9449d8f9e))


### Reverts

* revert error message ([#823](https://github.com/strongloop/loopback-next/issues/823)) ([f83c502](https://github.com/strongloop/loopback-next/commit/f83c502d78f844fae962f49a57a60d6a4ec0b966))


### BREAKING CHANGES

* **context:** The type `BindingFilter` is no longer generic. Please
update your code and remove any generic arguments provided for the type.

```diff
- BindingFilter<SomeType>
+ BindingFilter
```

Signed-off-by: Miroslav Bajtoš <mbajtoss@gmail.com>
* Node.js v8.x is now end of life. Please upgrade to version
10 and above. See https://nodejs.org/en/about/releases.
* **context:** Context events are now emitted as `ContextEvent` objects
instead of positional arguments. Context listener functions must switch from
the old style to new style as follows:

1. Old style

```ts
ctx.on('bind', (binding, context) => {
// ...
});
```

2. New style

```ts
ctx.on('bind', (event: ContextEvent) => {
// ...
});
```

Or:

```ts
ctx.on('bind', ({binding, context, type}) => {
// ...
});
```
* **context:** the `metadata` parameter of `@inject` is no longer
cloned deeply. It's still cloned shallowly.
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
* **context:** It is no longer possible to pass a promise instance
to `.to()` method of a Binding. Use `.toDynamicValue()` instead.
Consider deferring the async computation (that produced the promise
instance you are binding) into the dynamic value getter function,
i.e. start the async computation only from the getter function.

An example diff showing how to upgrade your existing code:

-    ctx.bind('bar').to(Promise.resolve('BAR'));
+    ctx.bind('bar').toDynamicValue(() => Promise.resolve('BAR'));





# [3.4.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@3.3.0...@loopback/context@3.4.0) (2020-04-11)


### Features

* **context:** expose debug method to subclasses ([f651e5b](https://github.com/strongloop/loopback-next/commit/f651e5be28efe624e83a7139152ed00554580dca))





# [3.3.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@3.2.0...@loopback/context@3.3.0) (2020-04-08)


### Bug Fixes

* **context:** fix context observer to catch errors by waitUntilPendingNotificationsDone ([3dad6c0](https://github.com/strongloop/loopback-next/commit/3dad6c0c22ef23506daf6f7d7ad28c247e6080c5))


### Features

* remove Node.js 8.x polyfill for Symbol.asyncIterator ([eeb8772](https://github.com/strongloop/loopback-next/commit/eeb877276cf62d32856eb7227d78618ab4c93c2e))





# [3.2.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@3.1.0...@loopback/context@3.2.0) (2020-03-24)


### Features

* **context:** emit bind/unbind events on ContextView ([65e3d38](https://github.com/strongloop/loopback-next/commit/65e3d38a34b351929ba422de667bc236e9619ebe))
* **context:** improve context view for bind/unbind events ([6a5f90a](https://github.com/strongloop/loopback-next/commit/6a5f90aadb5f5ba213f2da7ea7843f488a09f95d))





# [3.1.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@3.0.0...@loopback/context@3.1.0) (2020-03-17)


### Features

* **context:** introduce TagValueMatcher for more flexible tag matching ([deaf2ed](https://github.com/strongloop/loopback-next/commit/deaf2eda29421e73244d3d27006b502c7dcc25e2))





# [3.0.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@2.1.1...@loopback/context@3.0.0) (2020-03-05)


### chore

* remove support for Node.js v8.x ([4281d9d](https://github.com/strongloop/loopback-next/commit/4281d9df50f0715d32879e1442a90b643ec8f542))


### Features

* **context:** allow tags to be matched by a given name with any value ([7cf053e](https://github.com/strongloop/loopback-next/commit/7cf053e49f46b93033c6b7c5e80daffe8406b2af))
* **context:** remove generic parameters from `BindingFilter` type ([1ce33af](https://github.com/strongloop/loopback-next/commit/1ce33afeefc1c928085ed505adaa32cc06574a0c))
* add `tslib` as dependency ([a6e0b4c](https://github.com/strongloop/loopback-next/commit/a6e0b4ce7b862764167cefedee14c1115b25e0a4)), closes [#4676](https://github.com/strongloop/loopback-next/issues/4676)
* **context:** improve ctx.inspect() to allow classes with colliding names ([e7380fc](https://github.com/strongloop/loopback-next/commit/e7380fc467fe43fd801d8eca05e37745fc922aed))


### BREAKING CHANGES

* **context:** The type `BindingFilter` is no longer generic. Please
update your code and remove any generic arguments provided for the type.

```diff
- BindingFilter<SomeType>
+ BindingFilter
```

Signed-off-by: Miroslav Bajtoš <mbajtoss@gmail.com>
* Node.js v8.x is now end of life. Please upgrade to version
10 and above. See https://nodejs.org/en/about/releases.





## [2.1.1](https://github.com/strongloop/loopback-next/compare/@loopback/context@2.1.0...@loopback/context@2.1.1) (2020-02-06)


### Bug Fixes

* **context:** relax checking on instances of BindingKey class ([8668eb6](https://github.com/strongloop/loopback-next/commit/8668eb64b267e2644be87db92aeb86188d7e86f7))





# [2.1.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@2.0.0...@loopback/context@2.1.0) (2020-02-05)


### Features

* **context:** allow more options to inspect context/binding objects ([3be32a3](https://github.com/strongloop/loopback-next/commit/3be32a34a0109e4f4f2eb0fcfa60171bd66743a6))
* **context:** improve context name with the subclass name as prefix ([42d2e1b](https://github.com/strongloop/loopback-next/commit/42d2e1b302e4c9f58df864c0ca01cb2ca181060a))
* **context:** tidy up binding information for inspection ([15d698b](https://github.com/strongloop/loopback-next/commit/15d698b46841efc0c6bc12bdc89538db77371254))





# [2.0.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@1.25.1...@loopback/context@2.0.0) (2020-01-27)


### Features

* **context:** add ContextEventListener and tidy up parent event handling ([beb41a7](https://github.com/strongloop/loopback-next/commit/beb41a7b105cf1aea64982e3f43f4d5a8128581f))
* **context:** index bindings by tag to speed up matching by tag ([566b9d9](https://github.com/strongloop/loopback-next/commit/566b9d9a35ce52d9aeefe17e36f91c9714616b21))
* **context:** keep binding tag pattern for BindingTagFilter ([856b62d](https://github.com/strongloop/loopback-next/commit/856b62d7053c22ebe0f6acf6a1904e524175429c))
* **context:** make bindings as event emitters to report changes ([dddddb9](https://github.com/strongloop/loopback-next/commit/dddddb96fd6908a8d4caad8868e43d3d0bb742f6))
* **context:** refactor context observer subscription into a new class ([31ad9a5](https://github.com/strongloop/loopback-next/commit/31ad9a55bbd068cd8e41347fca5caaf0ae5eb6e7))
* **context:** set max listeners to Infinity by default ([0741e3b](https://github.com/strongloop/loopback-next/commit/0741e3b1293065a04f1ecd9dbda09df074a5dd34))
* **context:** use BindingEvent for binding event listeners ([ae5febc](https://github.com/strongloop/loopback-next/commit/ae5febc35679f4d77b9970ecc26a71938a1c972e))


### BREAKING CHANGES

* **context:** Context events are now emitted as `ContextEvent` objects
instead of positional arguments. Context listener functions must switch from
the old style to new style as follows:

1. Old style

```ts
ctx.on('bind', (binding, context) => {
// ...
});
```

2. New style

```ts
ctx.on('bind', (event: ContextEvent) => {
// ...
});
```

Or:

```ts
ctx.on('bind', ({binding, context, type}) => {
// ...
});
```





## [1.25.1](https://github.com/strongloop/loopback-next/compare/@loopback/context@1.25.0...@loopback/context@1.25.1) (2020-01-07)

**Note:** Version bump only for package @loopback/context





# [1.25.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@1.24.0...@loopback/context@1.25.0) (2019-12-09)


### Features

* **context:** allow global interceptors to be applied based on source types ([77cbd01](https://github.com/strongloop/loopback-next/commit/77cbd019027e1441339735326bcfb86a23df8b66))
* **context:** make it possible to set source information for interceptions ([2a1ccb4](https://github.com/strongloop/loopback-next/commit/2a1ccb409a889d8b30b03ddf3284c9e9d5554e27))





# [1.24.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@1.23.5...@loopback/context@1.24.0) (2019-11-25)


### Features

* **context:** allow current binding to be injected with `[@inject](https://github.com/inject).binding` ([c01b4c6](https://github.com/strongloop/loopback-next/commit/c01b4c6b4dcc5c7ac79832bda144b1ec0da191b1))
* **context:** improve context/binding with inspect/toJSON for metadata dumping ([ac399f7](https://github.com/strongloop/loopback-next/commit/ac399f7f105eea402ef1932bd96093baad0a009f))
* **core:** add [@service](https://github.com/service) decorator to inject a service by class/interface ([1d80904](https://github.com/strongloop/loopback-next/commit/1d80904b670724b00cb6a2965b8472f44d23eed0))





## [1.23.5](https://github.com/strongloop/loopback-next/compare/@loopback/context@1.23.4...@loopback/context@1.23.5) (2019-11-12)

**Note:** Version bump only for package @loopback/context





## [1.23.4](https://github.com/strongloop/loopback-next/compare/@loopback/context@1.23.3...@loopback/context@1.23.4) (2019-10-24)

**Note:** Version bump only for package @loopback/context





## [1.23.3](https://github.com/strongloop/loopback-next/compare/@loopback/context@1.23.2...@loopback/context@1.23.3) (2019-10-07)

**Note:** Version bump only for package @loopback/context





## [1.23.2](https://github.com/strongloop/loopback-next/compare/@loopback/context@1.23.1...@loopback/context@1.23.2) (2019-09-28)

**Note:** Version bump only for package @loopback/context





## [1.23.1](https://github.com/strongloop/loopback-next/compare/@loopback/context@1.23.0...@loopback/context@1.23.1) (2019-09-27)

**Note:** Version bump only for package @loopback/context





# [1.23.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@1.22.1...@loopback/context@1.23.0) (2019-09-17)


### Features

* **context:** add more logs to simplify troubleshooting ([7752b08](https://github.com/strongloop/loopback-next/commit/7752b08))





## [1.22.1](https://github.com/strongloop/loopback-next/compare/@loopback/context@1.22.0...@loopback/context@1.22.1) (2019-09-06)


### Bug Fixes

* **context:** allow `inject` to be explicitly invoked for class ctor args ([6a0d4f2](https://github.com/strongloop/loopback-next/commit/6a0d4f2))





# [1.22.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@1.21.4...@loopback/context@1.22.0) (2019-09-03)


### Features

* **context:** add decorator name for [@inject](https://github.com/inject).*, [@config](https://github.com/config).*, [@intercept](https://github.com/intercept) errors ([48e3231](https://github.com/strongloop/loopback-next/commit/48e3231))
* **context:** allow [@bind](https://github.com/bind) to be applied on the same class multiple times ([ad4d22c](https://github.com/strongloop/loopback-next/commit/ad4d22c))





## [1.21.4](https://github.com/strongloop/loopback-next/compare/@loopback/context@1.21.3...@loopback/context@1.21.4) (2019-08-19)

**Note:** Version bump only for package @loopback/context





## [1.21.3](https://github.com/strongloop/loopback-next/compare/@loopback/context@1.21.2...@loopback/context@1.21.3) (2019-08-15)

**Note:** Version bump only for package @loopback/context





## [1.21.2](https://github.com/strongloop/loopback-next/compare/@loopback/context@1.21.1...@loopback/context@1.21.2) (2019-08-15)

**Note:** Version bump only for package @loopback/context





## [1.21.1](https://github.com/strongloop/loopback-next/compare/@loopback/context@1.21.0...@loopback/context@1.21.1) (2019-07-31)

**Note:** Version bump only for package @loopback/context





# [1.21.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@1.20.3...@loopback/context@1.21.0) (2019-07-26)


### Features

* **context:** allow [@config](https://github.com/config).* to specify the target binding key ([42b7b98](https://github.com/strongloop/loopback-next/commit/42b7b98))
* **context:** use invocation context for method dependency injection ([a8f326c](https://github.com/strongloop/loopback-next/commit/a8f326c))





## [1.20.3](https://github.com/strongloop/loopback-next/compare/@loopback/context@1.20.2...@loopback/context@1.20.3) (2019-07-17)

**Note:** Version bump only for package @loopback/context





## [1.20.2](https://github.com/strongloop/loopback-next/compare/@loopback/context@1.20.1...@loopback/context@1.20.2) (2019-06-28)


### Bug Fixes

* address violations of "no-floating-promises" rule ([0947531](https://github.com/strongloop/loopback-next/commit/0947531))





## [1.20.1](https://github.com/strongloop/loopback-next/compare/@loopback/context@1.20.0...@loopback/context@1.20.1) (2019-06-21)

**Note:** Version bump only for package @loopback/context





# [1.20.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@1.19.1...@loopback/context@1.20.0) (2019-06-20)


### Features

* **context:** generalize interceptors and chain for invocations ([34d31d8](https://github.com/strongloop/loopback-next/commit/34d31d8))





## [1.19.1](https://github.com/strongloop/loopback-next/compare/@loopback/context@1.19.0...@loopback/context@1.19.1) (2019-06-17)

**Note:** Version bump only for package @loopback/context





# [1.19.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@1.18.0...@loopback/context@1.19.0) (2019-06-06)


### Features

* **context:** add `[@global](https://github.com/global)Interceptor` decorator ([1010a37](https://github.com/strongloop/loopback-next/commit/1010a37))





# [1.18.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@1.17.1...@loopback/context@1.18.0) (2019-06-03)


### Features

* replace tslint with eslint ([44185a7](https://github.com/strongloop/loopback-next/commit/44185a7))





## [1.17.1](https://github.com/strongloop/loopback-next/compare/@loopback/context@1.17.0...@loopback/context@1.17.1) (2019-05-31)

**Note:** Version bump only for package @loopback/context





# [1.17.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@1.16.0...@loopback/context@1.17.0) (2019-05-30)


### Bug Fixes

* **context:** allow injection when a class decorator returns a mixin ([28cc0a0](https://github.com/strongloop/loopback-next/commit/28cc0a0))
* **context:** allow optional for a binding without value getter ([e211a71](https://github.com/strongloop/loopback-next/commit/e211a71))


### Features

* **context:** make parent public for invocation context ([19856c6](https://github.com/strongloop/loopback-next/commit/19856c6))


### Performance Improvements

* **context:** cache description of method parameter injections ([127f7c2](https://github.com/strongloop/loopback-next/commit/127f7c2))





# [1.16.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@1.15.0...@loopback/context@1.16.0) (2019-05-23)


### Features

* **context:** add singleValue to ContextView ([22bd57f](https://github.com/strongloop/loopback-next/commit/22bd57f))
* **context:** leave local bindings and parent unchanged during close ([198af88](https://github.com/strongloop/loopback-next/commit/198af88))
* **context:** support binding config and [@inject](https://github.com/inject).config ([a392852](https://github.com/strongloop/loopback-next/commit/a392852))





# [1.15.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@1.14.0...@loopback/context@1.15.0) (2019-05-14)


### Features

* **context:** add binding comparator to sort bindings ([ae3d61f](https://github.com/strongloop/loopback-next/commit/ae3d61f))





# [1.14.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@1.13.0...@loopback/context@1.14.0) (2019-05-10)


### Bug Fixes

* **context:** close invocation context only after async is done ([e71e990](https://github.com/strongloop/loopback-next/commit/e71e990))


### Features

* **context:** add more getters for InvocationContext ([12a3ecb](https://github.com/strongloop/loopback-next/commit/12a3ecb))





# [1.13.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@1.12.1...@loopback/context@1.13.0) (2019-05-09)


### Features

* **context:** add support for method interceptors ([293188d](https://github.com/strongloop/loopback-next/commit/293188d))





## [1.12.1](https://github.com/strongloop/loopback-next/compare/@loopback/context@1.12.0...@loopback/context@1.12.1) (2019-05-06)

**Note:** Version bump only for package @loopback/context





# [1.12.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@1.11.0...@loopback/context@1.12.0) (2019-04-20)


### Features

* **build:** add more TypeScript "strict" checks ([866aa2f](https://github.com/strongloop/loopback-next/commit/866aa2f))
* **context:** add `[@inject](https://github.com/inject).binding` and improve `[@inject](https://github.com/inject).setter` ([a396274](https://github.com/strongloop/loopback-next/commit/a396274))
* **context:** fix generic typing for BindingFilter ([372b406](https://github.com/strongloop/loopback-next/commit/372b406))





# [1.11.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@1.10.0...@loopback/context@1.11.0) (2019-04-11)


### Bug Fixes

* **context:** instantiate class with non-injected arguments ([6699825](https://github.com/strongloop/loopback-next/commit/6699825))


### Features

* **context:** make Injection.metadata a required property ([dcc9cac](https://github.com/strongloop/loopback-next/commit/dcc9cac))





# [1.10.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@1.9.0...@loopback/context@1.10.0) (2019-04-09)


### Features

* **context:** always pass the session to ResolverFunction ([bf36532](https://github.com/strongloop/loopback-next/commit/bf36532))





# [1.9.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@1.8.1...@loopback/context@1.9.0) (2019-04-05)


### Bug Fixes

* **context:** clear binding cache upon scope or value getter changes ([122fe7b](https://github.com/strongloop/loopback-next/commit/122fe7b))


### Features

* **context:** add a helper function to create a getter from binding filter ([41248f3](https://github.com/strongloop/loopback-next/commit/41248f3))
* **context:** add binding.toAlias() to resolve values from another binding ([15dcd16](https://github.com/strongloop/loopback-next/commit/15dcd16))
* **context:** pass resolution options into binding.getValue() ([705dcd5](https://github.com/strongloop/loopback-next/commit/705dcd5))





## [1.8.1](https://github.com/strongloop/loopback-next/compare/@loopback/context@1.8.0...@loopback/context@1.8.1) (2019-03-22)

**Note:** Version bump only for package @loopback/context





# [1.8.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@1.7.0...@loopback/context@1.8.0) (2019-03-22)


### Features

* **context:** allow namespace tag for createBindingFromClass ([f6fe55e](https://github.com/strongloop/loopback-next/commit/f6fe55e))
* **context:** honor binding scope from [@bind](https://github.com/bind) ([3b30f01](https://github.com/strongloop/loopback-next/commit/3b30f01))
* **context:** improve typing for binding related methods ([f6cf0c6](https://github.com/strongloop/loopback-next/commit/f6cf0c6))
* **context:** tidy up context for resolving injections of a singleton binding ([f5bf43c](https://github.com/strongloop/loopback-next/commit/f5bf43c))





# [1.7.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@1.6.0...@loopback/context@1.7.0) (2019-03-12)


### Features

* **context:** add [@inject](https://github.com/inject).view and extend [@inject](https://github.com/inject) for multiple bindings ([d64268b](https://github.com/strongloop/loopback-next/commit/d64268b))
* **context:** add events to ContextView ([fb10efc](https://github.com/strongloop/loopback-next/commit/fb10efc))
* **context:** introduce context view to watch bindings by filter ([04209f7](https://github.com/strongloop/loopback-next/commit/04209f7))





# [1.6.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@1.5.1...@loopback/context@1.6.0) (2019-02-25)


### Features

* **context:** introduce async context observers for bind/unbind events ([e5e5fc4](https://github.com/strongloop/loopback-next/commit/e5e5fc4))





## [1.5.1](https://github.com/strongloop/loopback-next/compare/@loopback/context@1.5.0...@loopback/context@1.5.1) (2019-02-08)

**Note:** Version bump only for package @loopback/context





# [1.5.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@1.4.1...@loopback/context@1.5.0) (2019-01-28)


### Features

* **context:** add default template argument for BindingAddress ([7113105](https://github.com/strongloop/loopback-next/commit/7113105))
* **context:** binding filters ([ff85e74](https://github.com/strongloop/loopback-next/commit/ff85e74))





## [1.4.1](https://github.com/strongloop/loopback-next/compare/@loopback/context@1.4.0...@loopback/context@1.4.1) (2019-01-14)


### Bug Fixes

* rework tslint comments disabling "no-unused-variable" rule ([a18a3d7](https://github.com/strongloop/loopback-next/commit/a18a3d7))





# [1.4.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@1.3.0...@loopback/context@1.4.0) (2018-12-20)


### Features

* **context:** add `[@bind](https://github.com/bind)` to decorate classes with more information ([b8f9792](https://github.com/strongloop/loopback-next/commit/b8f9792))





# [1.3.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@1.2.0...@loopback/context@1.3.0) (2018-12-13)


### Features

* **context:** add binding.apply(templateFn) ([f046b30](https://github.com/strongloop/loopback-next/commit/f046b30))





# [1.2.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@1.1.0...@loopback/context@1.2.0) (2018-11-26)


### Features

* **rest:** allow body parsers to be extended ([86bfcbc](https://github.com/strongloop/loopback-next/commit/86bfcbc))





# [1.1.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@1.0.1...@loopback/context@1.1.0) (2018-11-14)


### Features

* **context:** add support for context.add(binding) ([8f77cef](https://github.com/strongloop/loopback-next/commit/8f77cef))
* **core:** allow components to expose an array of bindings ([eae0da3](https://github.com/strongloop/loopback-next/commit/eae0da3))





<a name="1.0.1"></a>
## [1.0.1](https://github.com/strongloop/loopback-next/compare/@loopback/context@1.0.0...@loopback/context@1.0.1) (2018-11-08)

**Note:** Version bump only for package @loopback/context





<a name="0.13.2"></a>
## [0.13.2](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.13.1...@loopback/context@0.13.2) (2018-10-08)

**Note:** Version bump only for package @loopback/context





<a name="0.13.1"></a>
## [0.13.1](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.13.0...@loopback/context@0.13.1) (2018-10-05)

**Note:** Version bump only for package @loopback/context





<a name="0.13.0"></a>
# [0.13.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.12.13...@loopback/context@0.13.0) (2018-10-03)


### Features

* **context:** add a helper `Getter.fromValue()` ([4764166](https://github.com/strongloop/loopback-next/commit/4764166))





<a name="0.12.13"></a>
## [0.12.13](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.12.12...@loopback/context@0.12.13) (2018-09-28)

**Note:** Version bump only for package @loopback/context





<a name="0.12.12"></a>
## [0.12.12](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.12.11...@loopback/context@0.12.12) (2018-09-27)

**Note:** Version bump only for package @loopback/context





<a name="0.12.11"></a>
## [0.12.11](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.12.10...@loopback/context@0.12.11) (2018-09-25)

**Note:** Version bump only for package @loopback/context





<a name="0.12.10"></a>
## [0.12.10](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.12.9...@loopback/context@0.12.10) (2018-09-21)

**Note:** Version bump only for package @loopback/context





<a name="0.12.9"></a>
## [0.12.9](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.12.8...@loopback/context@0.12.9) (2018-09-19)

**Note:** Version bump only for package @loopback/context





<a name="0.12.8"></a>
## [0.12.8](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.12.7...@loopback/context@0.12.8) (2018-09-12)

**Note:** Version bump only for package @loopback/context





<a name="0.12.7"></a>
## [0.12.7](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.12.6...@loopback/context@0.12.7) (2018-09-10)

**Note:** Version bump only for package @loopback/context





<a name="0.12.6"></a>
## [0.12.6](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.12.5...@loopback/context@0.12.6) (2018-09-08)

**Note:** Version bump only for package @loopback/context





<a name="0.12.5"></a>
## [0.12.5](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.12.4...@loopback/context@0.12.5) (2018-08-24)

**Note:** Version bump only for package @loopback/context





<a name="0.12.4"></a>
## [0.12.4](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.12.3...@loopback/context@0.12.4) (2018-08-15)


### Bug Fixes

* **context:** check constructor/method override for [@inject](https://github.com/inject) ([8c0bdb6](https://github.com/strongloop/loopback-next/commit/8c0bdb6))




<a name="0.12.3"></a>
## [0.12.3](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.12.2...@loopback/context@0.12.3) (2018-08-08)




**Note:** Version bump only for package @loopback/context

<a name="0.12.2"></a>
## [0.12.2](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.12.1...@loopback/context@0.12.2) (2018-07-21)




**Note:** Version bump only for package @loopback/context

<a name="0.12.1"></a>
## [0.12.1](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.12.0...@loopback/context@0.12.1) (2018-07-20)




**Note:** Version bump only for package @loopback/context

<a name="0.12.0"></a>
# [0.12.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.11.11...@loopback/context@0.12.0) (2018-07-20)




**Note:** Version bump only for package @loopback/context

<a name="0.11.11"></a>
## [0.11.11](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.11.10...@loopback/context@0.11.11) (2018-07-11)




**Note:** Version bump only for package @loopback/context

<a name="0.11.10"></a>
## [0.11.10](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.11.9...@loopback/context@0.11.10) (2018-07-10)




**Note:** Version bump only for package @loopback/context

<a name="0.11.9"></a>
## [0.11.9](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.11.8...@loopback/context@0.11.9) (2018-06-28)




**Note:** Version bump only for package @loopback/context

<a name="0.11.8"></a>
## [0.11.8](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.11.7...@loopback/context@0.11.8) (2018-06-27)




**Note:** Version bump only for package @loopback/context

<a name="0.11.7"></a>
## [0.11.7](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.11.6...@loopback/context@0.11.7) (2018-06-20)




**Note:** Version bump only for package @loopback/context

<a name="0.11.6"></a>
## [0.11.6](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.11.5...@loopback/context@0.11.6) (2018-06-11)


### Bug Fixes

* **context:** calculate # of method params with default ([f5f5bde](https://github.com/strongloop/loopback-next/commit/f5f5bde))




<a name="0.11.5"></a>
## [0.11.5](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.11.3...@loopback/context@0.11.5) (2018-06-09)




**Note:** Version bump only for package @loopback/context

<a name="0.11.4"></a>
## [0.11.4](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.11.3...@loopback/context@0.11.4) (2018-06-09)




**Note:** Version bump only for package @loopback/context

<a name="0.11.3"></a>
## [0.11.3](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.11.2...@loopback/context@0.11.3) (2018-06-08)


### Bug Fixes

* make the code compatible with TypeScript 2.9.x ([37aba50](https://github.com/strongloop/loopback-next/commit/37aba50))




<a name="0.11.2"></a>
## [0.11.2](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.11.1...@loopback/context@0.11.2) (2018-05-20)




**Note:** Version bump only for package @loopback/context

<a name="0.11.1"></a>
## [0.11.1](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.11.0...@loopback/context@0.11.1) (2018-05-14)


### Bug Fixes

* change index.d.ts files to point to dist8 ([42ca42d](https://github.com/strongloop/loopback-next/commit/42ca42d))




<a name="0.11.0"></a>
# [0.11.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.10.1...@loopback/context@0.11.0) (2018-05-14)


### Features

* **context:** add more utils to resolve valueOrPromises ([cc55ef5](https://github.com/strongloop/loopback-next/commit/cc55ef5))




<a name="0.10.1"></a>
## [0.10.1](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.10.0...@loopback/context@0.10.1) (2018-05-08)




**Note:** Version bump only for package @loopback/context

<a name="0.10.0"></a>
# [0.10.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.8.1...@loopback/context@0.10.0) (2018-05-03)


### Features

* **context:** allow tags to have an optional value ([95acd11](https://github.com/strongloop/loopback-next/commit/95acd11))
* add helper package "dist-util" ([532f153](https://github.com/strongloop/loopback-next/commit/532f153))




<a name="0.9.0"></a>
# [0.9.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.8.1...@loopback/context@0.9.0) (2018-05-03)


### Features

* **context:** allow tags to have an optional value ([95acd11](https://github.com/strongloop/loopback-next/commit/95acd11))
* add helper package "dist-util" ([532f153](https://github.com/strongloop/loopback-next/commit/532f153))




<a name="0.8.1"></a>
## [0.8.1](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.8.0...@loopback/context@0.8.1) (2018-04-25)




**Note:** Version bump only for package @loopback/context

<a name="0.8.0"></a>
# [0.8.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.7.0...@loopback/context@0.8.0) (2018-04-16)




**Note:** Version bump only for package @loopback/context

<a name="0.7.0"></a>
# [0.7.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.6.1...@loopback/context@0.7.0) (2018-04-12)


### Features

* **metadata:** add strongly-typed metadata accessors ([45f9f80](https://github.com/strongloop/loopback-next/commit/45f9f80))




<a name="0.6.1"></a>
## [0.6.1](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.6.0...@loopback/context@0.6.1) (2018-04-11)




**Note:** Version bump only for package @loopback/context

<a name="0.6.0"></a>
# [0.6.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.5.2...@loopback/context@0.6.0) (2018-04-11)


### Bug Fixes

* change file names to fit advocated naming convention ([0331df8](https://github.com/strongloop/loopback-next/commit/0331df8))


### Features

* **context:** typed binding keys ([685195c](https://github.com/strongloop/loopback-next/commit/685195c))




<a name="0.5.3"></a>
## [0.5.3](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.5.2...@loopback/context@0.5.3) (2018-04-06)




**Note:** Version bump only for package @loopback/context

<a name="0.5.2"></a>
## [0.5.2](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.5.1...@loopback/context@0.5.2) (2018-04-04)




**Note:** Version bump only for package @loopback/context

<a name="0.5.1"></a>
## [0.5.1](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.5.0...@loopback/context@0.5.1) (2018-04-02)




**Note:** Version bump only for package @loopback/context

<a name="0.5.0"></a>
# [0.5.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.4.0...@loopback/context@0.5.0) (2018-03-29)


### Bug Fixes

* **context:** disable deep clone of injection metadata ([7d8a84c](https://github.com/strongloop/loopback-next/commit/7d8a84c))


### BREAKING CHANGES

* **context:** the `metadata` parameter of `@inject` is no longer
cloned deeply. It's still cloned shallowly.




<a name="0.4.0"></a>
# [0.4.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.3.0...@loopback/context@0.4.0) (2018-03-23)


### Features

* **context:** add optional typing for Binding ([3c494fa](https://github.com/strongloop/loopback-next/commit/3c494fa))




<a name="0.3.0"></a>
# [0.3.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.2.4...@loopback/context@0.3.0) (2018-03-21)




**Note:** Version bump only for package @loopback/context

<a name="0.2.4"></a>
## [0.2.4](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.2.3...@loopback/context@0.2.4) (2018-03-14)




**Note:** Version bump only for package @loopback/context

<a name="0.2.3"></a>
## [0.2.3](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.2.2...@loopback/context@0.2.3) (2018-03-13)




**Note:** Version bump only for package @loopback/context

<a name="0.2.2"></a>
## [0.2.2](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.2.1...@loopback/context@0.2.2) (2018-03-08)




**Note:** Version bump only for package @loopback/context

<a name="0.2.1"></a>
## [0.2.1](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.2.0...@loopback/context@0.2.1) (2018-03-06)


### Bug Fixes

* fix typo of `additional` ([2fd7610](https://github.com/strongloop/loopback-next/commit/2fd7610))




<a name="0.2.0"></a>
# [0.2.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.1.2...@loopback/context@0.2.0) (2018-03-01)




**Note:** Version bump only for package @loopback/context

<a name="0.1.2"></a>
## [0.1.2](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.1.1...@loopback/context@0.1.2) (2018-03-01)


### Features

* **context:** add type as a generic parameter to `ctx.get()` and friends ([24b217d](https://github.com/strongloop/loopback-next/commit/24b217d))
* **context:** allow context.find by a filter function ([9b1e26c](https://github.com/strongloop/loopback-next/commit/9b1e26c))
* **context:** use Readonly to guard immutable values ([871ddef](https://github.com/strongloop/loopback-next/commit/871ddef))


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
## [0.1.1](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.1.0...@loopback/context@0.1.1) (2018-02-23)


### Bug Fixes

* **context:** fix optional param injection for methods ([801a82d](https://github.com/strongloop/loopback-next/commit/801a82d))




<a name="0.1.0"></a>
# [0.1.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@4.0.0-alpha.32...@loopback/context@0.1.0) (2018-02-21)




**Note:** Version bump only for package @loopback/context

<a name="4.0.0-alpha.32"></a>
# [4.0.0-alpha.32](https://github.com/strongloop/loopback-next/compare/@loopback/context@4.0.0-alpha.31...@loopback/context@4.0.0-alpha.32) (2018-02-15)


### Features

* **context:** formalize injection metadata as an interface ([7ffc1e5](https://github.com/strongloop/loopback-next/commit/7ffc1e5))




<a name="4.0.0-alpha.31"></a>
# [4.0.0-alpha.31](https://github.com/strongloop/loopback-next/compare/@loopback/context@4.0.0-alpha.30...@loopback/context@4.0.0-alpha.31) (2018-02-07)


### Bug Fixes

* **build:** fix tslint config and slipped violations ([22f8e05](https://github.com/strongloop/loopback-next/commit/22f8e05))
* **context:** address review comments ([3925296](https://github.com/strongloop/loopback-next/commit/3925296))
* **context:** pass metadata to `[@inject](https://github.com/inject).tag` ([27e26e9](https://github.com/strongloop/loopback-next/commit/27e26e9))


### build

* drop dist6 related targets ([#945](https://github.com/strongloop/loopback-next/issues/945)) ([a2368ce](https://github.com/strongloop/loopback-next/commit/a2368ce))


### Features

* **context:** add [@inject](https://github.com/inject).context for context injection ([6e0deaf](https://github.com/strongloop/loopback-next/commit/6e0deaf))
* **context:** add decorator & optional attrs to injection metadata ([3a1c7de](https://github.com/strongloop/loopback-next/commit/3a1c7de))
* **context:** add name to context ([21e1daf](https://github.com/strongloop/loopback-next/commit/21e1daf))
* **context:** add unbind() to allow remove bindings by key ([b9c3893](https://github.com/strongloop/loopback-next/commit/b9c3893))
* **context:** enhance binding caching to be context aware ([7b7eb30](https://github.com/strongloop/loopback-next/commit/7b7eb30))
* **context:** reports the resolution path for circular deps ([bc4ce20](https://github.com/strongloop/loopback-next/commit/bc4ce20))


### BREAKING CHANGES

* Support for Node.js version lower than 8.0 has been dropped.
Please upgrade to the latest Node.js 8.x LTS version.

Co-Authored-by: Taranveer Virk <taranveer@virk.cc>




<a name="4.0.0-alpha.30"></a>
# [4.0.0-alpha.30](https://github.com/strongloop/loopback-next/compare/@loopback/context@4.0.0-alpha.29...@loopback/context@4.0.0-alpha.30) (2018-02-04)


### Bug Fixes

* remove console output from tests ([ff4a320](https://github.com/strongloop/loopback-next/commit/ff4a320))




<a name="4.0.0-alpha.29"></a>
# [4.0.0-alpha.29](https://github.com/strongloop/loopback-next/compare/@loopback/context@4.0.0-alpha.28...@loopback/context@4.0.0-alpha.29) (2018-01-30)




**Note:** Version bump only for package @loopback/context

<a name="4.0.0-alpha.28"></a>
# [4.0.0-alpha.28](https://github.com/strongloop/loopback-next/compare/@loopback/context@4.0.0-alpha.27...@loopback/context@4.0.0-alpha.28) (2018-01-29)




**Note:** Version bump only for package @loopback/context

<a name="4.0.0-alpha.27"></a>
# [4.0.0-alpha.27](https://github.com/strongloop/loopback-next/compare/@loopback/context@4.0.0-alpha.26...@loopback/context@4.0.0-alpha.27) (2018-01-26)


### Bug Fixes

* apply source-maps to test errors ([76a7f56](https://github.com/strongloop/loopback-next/commit/76a7f56)), closes [#602](https://github.com/strongloop/loopback-next/issues/602)
* make mocha self-contained with the source map support ([7c6d869](https://github.com/strongloop/loopback-next/commit/7c6d869))




<a name="4.0.0-alpha.26"></a>
# [4.0.0-alpha.26](https://github.com/strongloop/loopback-next/compare/@loopback/context@4.0.0-alpha.25...@loopback/context@4.0.0-alpha.26) (2018-01-19)


### Bug Fixes

* address review comments ([76d3ec3](https://github.com/strongloop/loopback-next/commit/76d3ec3))
* **context:** add resolution-session.ts for api docs ([25a9e91](https://github.com/strongloop/loopback-next/commit/25a9e91))
* **context:** allow session to be passed into [@inject](https://github.com/inject).getter ([0517ea1](https://github.com/strongloop/loopback-next/commit/0517ea1))
* **context:** clean up the circular dependency tests ([5c35ccd](https://github.com/strongloop/loopback-next/commit/5c35ccd))
* **context:** fix the test to avoid UnhandledPromiseRejectionWarning ([6a82c4d](https://github.com/strongloop/loopback-next/commit/6a82c4d))
* make sure TS compiler infer undefined ([4c48ece](https://github.com/strongloop/loopback-next/commit/4c48ece))
* propagate errors via promises ([204c1b7](https://github.com/strongloop/loopback-next/commit/204c1b7))
* use version range for [@types](https://github.com/types)/debug ([3adbc0b](https://github.com/strongloop/loopback-next/commit/3adbc0b))


### Features

* **context:** add [@inject](https://github.com/inject).tag to allow injection by a tag ([fc8f260](https://github.com/strongloop/loopback-next/commit/fc8f260))
* **context:** add more debug statements ([38eab3e](https://github.com/strongloop/loopback-next/commit/38eab3e))
* **context:** enable detection of circular dependencies ([72b4190](https://github.com/strongloop/loopback-next/commit/72b4190))
* **context:** forbid bind().to() a Promise instance ([#854](https://github.com/strongloop/loopback-next/issues/854)) ([85ffa8b](https://github.com/strongloop/loopback-next/commit/85ffa8b))
* **context:** track injections with ResolutionSession ([cd4848e](https://github.com/strongloop/loopback-next/commit/cd4848e))
* **context:** use one stack to track bindings and injections ([b2f7eda](https://github.com/strongloop/loopback-next/commit/b2f7eda))


### BREAKING CHANGES

* **context:** It is no longer possible to pass a promise instance
to `.to()` method of a Binding. Use `.toDynamicValue()` instead.
Consider deferring the async computation (that produced the promise
instance you are binding) into the dynamic value getter function,
i.e. start the async computation only from the getter function.

An example diff showing how to upgrade your existing code:

-    ctx.bind('bar').to(Promise.resolve('BAR'));
+    ctx.bind('bar').toDynamicValue(() => Promise.resolve('BAR'));




<a name="4.0.0-alpha.25"></a>
# [4.0.0-alpha.25](https://github.com/strongloop/loopback-next/compare/@loopback/context@4.0.0-alpha.24...@loopback/context@4.0.0-alpha.25) (2018-01-11)


### Bug Fixes

* resolve injected arguments ([#821](https://github.com/strongloop/loopback-next/issues/821)) ([ca9e4dd](https://github.com/strongloop/loopback-next/commit/ca9e4dd))


### Features

* **context:** export function to build binding key with path ([fd804a5](https://github.com/strongloop/loopback-next/commit/fd804a5))


### Reverts

* revert error message ([#823](https://github.com/strongloop/loopback-next/issues/823)) ([f83c502](https://github.com/strongloop/loopback-next/commit/f83c502))




<a name="4.0.0-alpha.24"></a>
# [4.0.0-alpha.24](https://github.com/strongloop/loopback-next/compare/@loopback/context@4.0.0-alpha.23...@loopback/context@4.0.0-alpha.24) (2017-12-21)




**Note:** Version bump only for package @loopback/context

<a name="4.0.0-alpha.23"></a>
# [4.0.0-alpha.23](https://github.com/strongloop/loopback-next/compare/@loopback/context@4.0.0-alpha.22...@loopback/context@4.0.0-alpha.23) (2017-12-15)


### Bug Fixes

* Improve test coverage for metadata inspector ([3b4b552](https://github.com/strongloop/loopback-next/commit/3b4b552))


### Features

* **context:** Add decorator factories ([f517570](https://github.com/strongloop/loopback-next/commit/f517570))
* Add metadata inspector ([c683019](https://github.com/strongloop/loopback-next/commit/c683019))
* Use decorator factories ([88ebd21](https://github.com/strongloop/loopback-next/commit/88ebd21))




<a name="4.0.0-alpha.22"></a>
# [4.0.0-alpha.22](https://github.com/strongloop/loopback-next/compare/@loopback/context@4.0.0-alpha.21...@loopback/context@4.0.0-alpha.22) (2017-12-11)


### Bug Fixes

* Fix node module names in source code headers ([0316f28](https://github.com/strongloop/loopback-next/commit/0316f28))




<a name="4.0.0-alpha.21"></a>
# [4.0.0-alpha.21](https://github.com/strongloop/loopback-next/compare/@loopback/context@4.0.0-alpha.20...@loopback/context@4.0.0-alpha.21) (2017-11-29)


### Features

* **context:** Allow patterns to be RegExp ([991cf38](https://github.com/strongloop/loopback-next/commit/991cf38))




<a name="4.0.0-alpha.20"></a>
# [4.0.0-alpha.20](https://github.com/strongloop/loopback-next/compare/@loopback/context@4.0.0-alpha.19...@loopback/context@4.0.0-alpha.20) (2017-11-14)


### Features

* **context:** Add support for method dependency injection ([df1c879](https://github.com/strongloop/loopback-next/commit/df1c879))




<a name="4.0.0-alpha.19"></a>
# [4.0.0-alpha.19](https://github.com/strongloop/loopback-next/compare/@loopback/context@4.0.0-alpha.18...@loopback/context@4.0.0-alpha.19) (2017-11-09)




**Note:** Version bump only for package @loopback/context

<a name="4.0.0-alpha.18"></a>
# [4.0.0-alpha.18](https://github.com/strongloop/loopback-next/compare/@loopback/context@4.0.0-alpha.17...@loopback/context@4.0.0-alpha.18) (2017-11-06)




**Note:** Version bump only for package @loopback/context

<a name="4.0.0-alpha.17"></a>
# [4.0.0-alpha.17](https://github.com/strongloop/loopback-next/compare/@loopback/context@4.0.0-alpha.16...@loopback/context@4.0.0-alpha.17) (2017-10-31)




**Note:** Version bump only for package @loopback/context

<a name="4.0.0-alpha.16"></a>
# [4.0.0-alpha.16](https://github.com/strongloop/loopback-next/compare/@loopback/context@4.0.0-alpha.15...@loopback/context@4.0.0-alpha.16) (2017-10-31)




**Note:** Version bump only for package @loopback/context

<a name="4.0.0-alpha.15"></a>
# [4.0.0-alpha.15](https://github.com/strongloop/loopback-next/compare/@loopback/context@4.0.0-alpha.12...@loopback/context@4.0.0-alpha.15) (2017-10-25)


### Bug Fixes

* **context:** inject nested properties ([#587](https://github.com/strongloop/loopback-next/issues/587)) ([d53fc57](https://github.com/strongloop/loopback-next/commit/d53fc57))


### Features

* **context:** Add isBound() and more apidocs to Context ([39932be](https://github.com/strongloop/loopback-next/commit/39932be))
* **context:** Add toJSON() for Context & Binding ([b6ce426](https://github.com/strongloop/loopback-next/commit/b6ce426))
