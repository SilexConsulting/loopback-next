# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 3.0.0 (2020-04-17)


### Bug Fixes

* remove restriction to Entities from DefaultKeyValueRepository ([c30dce3](https://github.com/strongloop/loopback-next/commit/c30dce330fd6585ce8b0d33d3d6a5d2fd5fac906))
* **repository-json-schema:** fix schema generation for model inheritance ([5417ed5](https://github.com/strongloop/loopback-next/commit/5417ed5fdbf0508f1882186d9cbff64ecfb10699))
* filter null keys when including belongs-to relations in queries ([cccb37f](https://github.com/strongloop/loopback-next/commit/cccb37f43f3ccaf950c23759315b4dde41da4e8b))
* update package locks ([cd2f6fa](https://github.com/strongloop/loopback-next/commit/cd2f6fa7a732afe4a16f4ccf8316ff3142959fe8))
* **repository:** accept class and instance for app.datasource ([4b4270c](https://github.com/strongloop/loopback-next/commit/4b4270cc6c1aaac392f929bc76b7381872ad0298))
* **repository:** allow model classes with recursive type references ([0094ded](https://github.com/strongloop/loopback-next/commit/0094ded5c495dd4a619112f0ea38e37037309d8d)), closes [/github.com/strongloop/loopback-next/issues/3671#issuecomment-529376105](https://github.com//github.com/strongloop/loopback-next/issues/3671/issues/issuecomment-529376105)
* **repository:** always copy property definition during juggler model build ([#2912](https://github.com/strongloop/loopback-next/issues/2912)) ([f6cae52](https://github.com/strongloop/loopback-next/commit/f6cae52e25b016907c53b47a7d9f126900379aff))
* **repository:** belongsto accessor should return undefined if foreign key is not included ([cbdba15](https://github.com/strongloop/loopback-next/commit/cbdba1554fe103109a21e20c48cd3a0edcf8fffb))
* **repository:** build relations based on their names ([2046701](https://github.com/strongloop/loopback-next/commit/2046701798fda469c30f555eefd76e834744d609))
* **repository:** change default binding scope to TRANSIENT for repos ([55461af](https://github.com/strongloop/loopback-next/commit/55461af0eba1c8914badb0a6541a6098c8a1bbf9))
* **repository:** change the way array property definition is built for the juggler ([2471c88](https://github.com/strongloop/loopback-next/commit/2471c88094d076bf9a0658a0d8ae656118d3037f))
* **repository:** default where object to an empty object ([4b14a5c](https://github.com/strongloop/loopback-next/commit/4b14a5ca46ff542002bdbb36c8986f79cc33a5e1))
* **repository:** fix compilation errors with TypeScript 3.7.2 ([d62612d](https://github.com/strongloop/loopback-next/commit/d62612d08e34f4d32b5a3d1645aa0420fecea3b3))
* **repository:** fix DeepPartial<AnyObject> ([0f97811](https://github.com/strongloop/loopback-next/commit/0f97811256304ab048a93858f7a86229bc662e7a))
* **repository:** fix return type of DefaultCrudRepository#_createHasManyRepositoryFactoryFor ([5c11b6c](https://github.com/strongloop/loopback-next/commit/5c11b6cf4cc984a8f295f20d544f5e98ada6c821))
* **repository:** handle conversion of property values to plain json ([8fcc938](https://github.com/strongloop/loopback-next/commit/8fcc93806e19a0a362e9e850ed01d7d17b164753))
* **repository:** improve stub typing to avoid compilation errors with TypeScript 3.7 ([29cf103](https://github.com/strongloop/loopback-next/commit/29cf103c780312cf15bf8e1dd189394ae7540fe4))
* **repository:** improve typings for model inclusion ([eb1a0ae](https://github.com/strongloop/loopback-next/commit/eb1a0ae7a433e566f413a7e3c518b3aeff5374c4))
* **repository:** make the navigational property err msg more clear ([2d493bc](https://github.com/strongloop/loopback-next/commit/2d493bc0387b9f595b82ee149fb83405f4073424))
* apply source-maps to test errors ([76a7f56](https://github.com/strongloop/loopback-next/commit/76a7f56cd1166d4407f2a50b188db91a74f7deae)), closes [#602](https://github.com/strongloop/loopback-next/issues/602)
* Fix lint errors by newer version of prettier ([d6c5404](https://github.com/strongloop/loopback-next/commit/d6c5404079ce436da7fad9e81a769cf39250b7e4))
* fix typo of `additional` ([2fd7610](https://github.com/strongloop/loopback-next/commit/2fd76106ecebd4d5257262f4cda8af1e5ec409a3))
* fixup findByForeignKeys ([e26e7b7](https://github.com/strongloop/loopback-next/commit/e26e7b72184862b8de3353386563e04a3b2b0ec4))
* **repository:** make sure foreign key property in keyTo exists in target model ([ce75385](https://github.com/strongloop/loopback-next/commit/ce7538511034a3ab3f7a55d780b00c1c08557439))
* **repository:** relax constrain check to allow input containing constrained values ([c774ed1](https://github.com/strongloop/loopback-next/commit/c774ed1e7b0168029ca8ec63de5867b475b26e0f))
* **repository:** support embedded models in nested properties ([d298ec8](https://github.com/strongloop/loopback-next/commit/d298ec898f3c52224a1844c5e41f0d52cd7ff569))
* add nin operator to query typing and builder ([#2215](https://github.com/strongloop/loopback-next/issues/2215)) ([c38bd4e](https://github.com/strongloop/loopback-next/commit/c38bd4ee1ca402c6560cff2af6993e9355795d88))
* clean up dataSource usage ([69506a4](https://github.com/strongloop/loopback-next/commit/69506a44cf25d3c8d0b50d0758e8f5b808852917))
* mark HasManyRepository as a readonly property ([39227eb](https://github.com/strongloop/loopback-next/commit/39227ebdcf6850f8db9a6a0eeb0cbc42cfb85c04))
* model id type is now boolean|number instead of boolean ([71292e9](https://github.com/strongloop/loopback-next/commit/71292e9ac1b3d89ebfe284a659264cbb83dbe814))
* remove extra imports for mixin dependencies ([35b916b](https://github.com/strongloop/loopback-next/commit/35b916b2d4aac457edf62956e35b2057a3794b00))
* rework tslint comments disabling "no-unused-variable" rule ([a18a3d7](https://github.com/strongloop/loopback-next/commit/a18a3d74c5a76ba90c1fb0ea32ae83335820163f))
* update to the most recent lodash version ([65ee865](https://github.com/strongloop/loopback-next/commit/65ee8656763b3b41a0acb86d7a6c4482472abc02))
* **metadata:** refine clone of decoration spec ([544052e](https://github.com/strongloop/loopback-next/commit/544052ead29b69791f18eeb2c314603757c81e5f))
* **repository:** change parameter order in HasManyRepositoryFactory ([534895d](https://github.com/strongloop/loopback-next/commit/534895d3985157718c5818c068d34339c9f95daf))
* **repository:** change RelationType from numeric to string enums ([62090fc](https://github.com/strongloop/loopback-next/commit/62090fc07d63d46539664b5555afd9639595c3d7))
* **repository:** check null for findOne CRUD method ([19f9d61](https://github.com/strongloop/loopback-next/commit/19f9d61d3d0631b703fe3509c30a60dd094510ac))
* **repository:** convert array items to json ([33124db](https://github.com/strongloop/loopback-next/commit/33124dbd6d88f72417ce3caeb3d5c68b653f98a5))
* **repository:** correct types in juggler bridge ([#545](https://github.com/strongloop/loopback-next/issues/545)) ([661fa36](https://github.com/strongloop/loopback-next/commit/661fa363ce9d16b71f1b3bcefa861c609eba4b8f))
* **repository:** findById will reject on no result ([04077dc](https://github.com/strongloop/loopback-next/commit/04077dca5291389fba365e4bf1ab422e20e72c0a))
* **repository:** fix broken code in readme ([e3e97d9](https://github.com/strongloop/loopback-next/commit/e3e97d9da48e43338a6739f4aa8ce408e18f243e))
* **repository:** make models strict by default ([08c2d89](https://github.com/strongloop/loopback-next/commit/08c2d896367a7f8ecc5153578f2a698eefdea7a1))
* **repository:** make sure examples are compiled ([b95f1dc](https://github.com/strongloop/loopback-next/commit/b95f1dc4701a7c977c3957cda198c4f59cc79669))
* **repository:** make sure model definition is built correctly ([2effa30](https://github.com/strongloop/loopback-next/commit/2effa301b0b66aeded9ae89a820746b66b7b3408))
* **repository:** remove property.array() call from hasMany decorator ([56ab017](https://github.com/strongloop/loopback-next/commit/56ab017eba210ccd4efac66d389a1e9024144211)), closes [#1944](https://github.com/strongloop/loopback-next/issues/1944)
* **repository:** resolve types for juggler ([41e456c](https://github.com/strongloop/loopback-next/commit/41e456c1baf4818e5094fb5f81ee26351a481768))
* **repository:** revert hasOne target FK as PK implementation ([fcc76df](https://github.com/strongloop/loopback-next/commit/fcc76df71f2fe837dd62847418e9aa7e39da575a))
* **repository:** use PropertyType instead of Function ([ec9f325](https://github.com/strongloop/loopback-next/commit/ec9f325027d63314d13ea653e8d5b8f15a1785d1))
* change file names to fit advocated naming convention ([0331df8](https://github.com/strongloop/loopback-next/commit/0331df8e188f2ba857d04d6a6aff579c7b7726c1))
* change index.d.ts files to point to dist8 ([42ca42d](https://github.com/strongloop/loopback-next/commit/42ca42d5d984df9efe52b219f2be531392256bdd))
* fix imports to use files owning the definitions ([a50405a](https://github.com/strongloop/loopback-next/commit/a50405a5a56b5f1e509a2c30d984fd262a342cba))
* fix package name for `repository` ([e5f7aca](https://github.com/strongloop/loopback-next/commit/e5f7aca470957a6674219049069645bde6d5ae75))
* make mocha self-contained with the source map support ([7c6d869](https://github.com/strongloop/loopback-next/commit/7c6d86975a379388f433110df91b1bf0e2e4b94d))
* make the code compatible with TypeScript 2.9.x ([37aba50](https://github.com/strongloop/loopback-next/commit/37aba50dc5f47b5ff0c77624d4d02d9cfd4415b5))
* move apidocs outside of the function ([940674e](https://github.com/strongloop/loopback-next/commit/940674e07e8ea2f9116dec869acf030cfbca98e0))
* multiple instances of the same repository class ([c553f11](https://github.com/strongloop/loopback-next/commit/c553f1171ca86eb13ba7473d73d2e0d1b8de29de))
* remove mixin builder ([d6942d7](https://github.com/strongloop/loopback-next/commit/d6942d7d48a369ff80fac7c7b51df803882b455c))
* tidy up the build scripts ([6cc83b6](https://github.com/strongloop/loopback-next/commit/6cc83b666e4b2ce2f979eab44dec78b7c01c41be))
* update description for @loopback/repository ([6e2377a](https://github.com/strongloop/loopback-next/commit/6e2377a00e2318ed128505e8f66b2d30b9f1f517))


### Build System

* drop dist6 related targets ([#945](https://github.com/strongloop/loopback-next/issues/945)) ([a2368ce](https://github.com/strongloop/loopback-next/commit/a2368cee598c131a826ee42e347266c6e25ae582))


### chore

* remove support for Node.js v8.x ([4281d9d](https://github.com/strongloop/loopback-next/commit/4281d9df50f0715d32879e1442a90b643ec8f542))


### Features

* constrain filter to exclude where for findById ([360d563](https://github.com/strongloop/loopback-next/commit/360d563361358dead0ac18198b2878aedb5f48c7))
* remove Node.js 8.x polyfill for Symbol.asyncIterator ([eeb8772](https://github.com/strongloop/loopback-next/commit/eeb877276cf62d32856eb7227d78618ab4c93c2e))
* support operation hooks ([8701cce](https://github.com/strongloop/loopback-next/commit/8701cce8b208c952e4d41f0570124e389506d808))
* **build:** add more TypeScript "strict" checks ([866aa2f](https://github.com/strongloop/loopback-next/commit/866aa2fa76cb2a545c1d421afbb0e97cef4c1042))
* **cli:** add config and yes options ([5778a2a](https://github.com/strongloop/loopback-next/commit/5778a2a7564cc85a5c036504e82d19e9eb6170aa))
* **context:** add type as a generic parameter to `ctx.get()` and friends ([24b217d](https://github.com/strongloop/loopback-next/commit/24b217df94a8a21f037a85ff4d6f748741c2f599))
* **context:** honor binding scope from [@bind](https://github.com/bind) ([3b30f01](https://github.com/strongloop/loopback-next/commit/3b30f01bcbad551f9b74662c8537c06d6a9f7b3d))
* **metadata:** add strongly-typed metadata accessors ([45f9f80](https://github.com/strongloop/loopback-next/commit/45f9f80c9944ab02c923ce4911ca23e6401e07c7))
* **repository:** add `defineModelClass` helper ([4d844d1](https://github.com/strongloop/loopback-next/commit/4d844d1a6812ebbe18e30d646e7bc854974a1f76))
* **repository:** Add array decorator ([3e7b419](https://github.com/strongloop/loopback-next/commit/3e7b4199277e42dcc90342e1c15dfdc4bc530d24))
* **repository:** add belongsToUniquely sugar syntax method ([1b5b66a](https://github.com/strongloop/loopback-next/commit/1b5b66aa1797084120b9a7d604064af59cc20bf8))
* **repository:** Add builders and execute() ([89eaf5f](https://github.com/strongloop/loopback-next/commit/89eaf5fd84fbcc86716b9cb72918ffac87ca0f1f))
* **repository:** add datasource method in repository mixin ([85347fa](https://github.com/strongloop/loopback-next/commit/85347fa3ec68b133efe173d409d76af9bead58c1))
* **repository:** add execute implementation ([3bd6165](https://github.com/strongloop/loopback-next/commit/3bd61656aeef0a56521475874bd87d08b2039677)), closes [#2165](https://github.com/strongloop/loopback-next/issues/2165)
* **repository:** add function findByForeignKeys ([f5eaf1d](https://github.com/strongloop/loopback-next/commit/f5eaf1d8f1c0734e8f15fd799824e2ee26394a23))
* **repository:** add getRepository to mixin ([6e1be1f](https://github.com/strongloop/loopback-next/commit/6e1be1fbb34401358e3e3b36625e271ac8b6af87))
* **repository:** add hidden properties in model ([e669913](https://github.com/strongloop/loopback-next/commit/e669913e85dd235086b6b5dc8bc377da3fb630b8))
* **repository:** add InclusionResolver type and includeRelatedModels helper function ([c9c39c9](https://github.com/strongloop/loopback-next/commit/c9c39c93b5136372c67554fe21b336a2eee68378))
* **repository:** add inclusionResolvers to DefaultCrudRepository ([642c4b6](https://github.com/strongloop/loopback-next/commit/642c4b6209edb10c60be881373d7fe49840a577c))
* **repository:** add interface for hasManyThrough ([ced2643](https://github.com/strongloop/loopback-next/commit/ced26437c6fa8bd34fa897325730610ec017bc16))
* **repository:** add interface for hasManyThrough repository ([a242785](https://github.com/strongloop/loopback-next/commit/a24278522c46337887592e864031de891d08f30d)), closes [/github.com/strongloop/loopback-next/pull/2359#issuecomment-559719080](https://github.com//github.com/strongloop/loopback-next/pull/2359/issues/issuecomment-559719080)
* **repository:** add keyFrom to resolved relation metadata ([fb4c5c8](https://github.com/strongloop/loopback-next/commit/fb4c5c8ba8ffd8f6e01ad4cd9bca0a493c402dd0))
* **repository:** add KVRepository impl using legacy juggler ([97a75dc](https://github.com/strongloop/loopback-next/commit/97a75dc54476d87770c07e2c77e8a3c28657ce15))
* **repository:** add PATCH and DELETE for HasOne relation ([5936fb9](https://github.com/strongloop/loopback-next/commit/5936fb9c7224a024f7d406e8f05894cce460a4d4))
* **repository:** add static method Entity.getIdProperties() ([be4bf31](https://github.com/strongloop/loopback-next/commit/be4bf31caa308b4e80dbeab9f93fdcf30807b84f))
* **repository:** add title property to Count schema definition ([a91c989](https://github.com/strongloop/loopback-next/commit/a91c9897f48365b9c888fd08075c82de44774331))
* **repository:** add type safety for query filter/where ([bac050c](https://github.com/strongloop/loopback-next/commit/bac050cb226ea18309760fd4e82cad0b494fcdf7))
* **repository:** allow custom keyFrom for hasmany/hasone ([58efff9](https://github.com/strongloop/loopback-next/commit/58efff9e166fbe1fc820fe6168e18b5c7d9630ce))
* **repository:** Allow mixins in core. Introduce mixin to bind repos ([#541](https://github.com/strongloop/loopback-next/issues/541)) ([e0de9b8](https://github.com/strongloop/loopback-next/commit/e0de9b8229c61a7d16c68e859dfdde6792f9d7db))
* **repository:** allow optional property definition on belongsTo decorator ([11c7baa](https://github.com/strongloop/loopback-next/commit/11c7baa4f8446bf57a42c474a686697b7ffb87ba))
* **repository:** change Model.modelName to a computed property ([5a493cf](https://github.com/strongloop/loopback-next/commit/5a493cf4bdc04b28e58698dc2da28f4df0f7d911))
* **repository:** enable inclusion with custom scope ([4a0d595](https://github.com/strongloop/loopback-next/commit/4a0d595f65a2c80c89e2ca1263d235e4d23cd730))
* **repository:** hasOne relation ([7c2080a](https://github.com/strongloop/loopback-next/commit/7c2080a7c327eba48702a0f61a2adc6c234997c6))
* **repository:** have [@repository](https://github.com/repository) take in constructor as arg ([3db07eb](https://github.com/strongloop/loopback-next/commit/3db07eb556c5462b5ac169dd2eae9b5db59bfaf4))
* **repository:** helper function for getting Model metadata ([b19635d](https://github.com/strongloop/loopback-next/commit/b19635d821c6beb6dd1c9597e3153abc073da1e4))
* **repository:** implement belongsTo relation ([df8c64c](https://github.com/strongloop/loopback-next/commit/df8c64c9c6280db836e2644ff11b0b61fd91911a))
* **repository:** implement EntityNotFoundError ([d670d10](https://github.com/strongloop/loopback-next/commit/d670d10062288f368c9779fe0038b564cec6e043))
* **repository:** implement inclusion resolver for belongsTo relation ([fc3d5b6](https://github.com/strongloop/loopback-next/commit/fc3d5b62bacf33820f37dc6d5869c9154d277a3d))
* **repository:** initial hasMany relation impl ([63f20c4](https://github.com/strongloop/loopback-next/commit/63f20c477b4904fbe135bab001d034cefc26115c))
* **repository:** introduce hasmany relation decorator inference ([b267f3c](https://github.com/strongloop/loopback-next/commit/b267f3cb7eb0380b190d75612526e82774074c74))
* **repository:** make `targetsMany` property required ([cd4d43a](https://github.com/strongloop/loopback-next/commit/cd4d43abb0ebe56aa31939c14ae9d25021ad1e65))
* **repository:** migrateSchema APIs ([ad0229b](https://github.com/strongloop/loopback-next/commit/ad0229b6711184da5a00c66ddeba585afe89eb79))
* **repository:** remove generic parameters from `Inclusion` type ([ed949e4](https://github.com/strongloop/loopback-next/commit/ed949e415ff0be1467b3029fb2e49c64a22c1b2e))
* **repository:** return an object for count and updateAll ([c146366](https://github.com/strongloop/loopback-next/commit/c14636607303a9eddb5eaca2350177958d681aa6))
* **repository:** skip undefined property values for toJSON ([70fc005](https://github.com/strongloop/loopback-next/commit/70fc005823ab4e5cf4b641d2d80668911a26012a))
* add `tslib` as dependency ([a6e0b4c](https://github.com/strongloop/loopback-next/commit/a6e0b4ce7b862764167cefedee14c1115b25e0a4)), closes [#4676](https://github.com/strongloop/loopback-next/issues/4676)
* leverage isactive for transaction ([fc94437](https://github.com/strongloop/loopback-next/commit/fc9443787039d4a1db3008a0141f5693f95bfbd4))
* preserve custom type of auto-generated id property ([dc7ff7f](https://github.com/strongloop/loopback-next/commit/dc7ff7f7829434de3436e9352b1d9cc43392db0e))
* **repository:** expose beginTransaction() API ([0471315](https://github.com/strongloop/loopback-next/commit/04713158da0f1de54c6508ef453bd361ebe59b70))
* **repository:** implement inclusion resolver for hasOne relation ([8dfdf58](https://github.com/strongloop/loopback-next/commit/8dfdf586bfa82700ef185f2c5f82eb9a36bbcfd5))
* **repository:** implement inclusionResolver for hasMany ([4cf9a70](https://github.com/strongloop/loopback-next/commit/4cf9a70d9fc466e2604420debfa417f63aa262b0))
* **repository:** include navigation properties in JSON ([008c8b5](https://github.com/strongloop/loopback-next/commit/008c8b53bf00c576028b91d3a791ed2d6eafab7f))
* **repository:** rejects create/update operations for navigational properties ([01de327](https://github.com/strongloop/loopback-next/commit/01de3275be7c6dd8e9c50ffeb64c23d6d7ec9e51))
* **repository-json-schema:** enhance getJsonSchema to describe navigational properties ([7801f59](https://github.com/strongloop/loopback-next/commit/7801f591085bc114e555d0b0c24b68cec925dd51)), closes [#2630](https://github.com/strongloop/loopback-next/issues/2630)
* add navigational properties to find* methods ([1f0aa0b](https://github.com/strongloop/loopback-next/commit/1f0aa0b23c86bf0059f718410d071d2641ddeb86))
* replace tslint with eslint ([44185a7](https://github.com/strongloop/loopback-next/commit/44185a744f772566f2cb186ba8cd288fed65d04c))
* **repository-json-schema:** refactor metaToJsonProperty to accept custom jsonSchema ([d0014c6](https://github.com/strongloop/loopback-next/commit/d0014c607eb130bf0d2adaf3249e67c3755771ae))
* **testlab:** add StubbedInstanceWithSinonAccessor ([1dc2304](https://github.com/strongloop/loopback-next/commit/1dc2304b6addd44ebfcb2441d7b92b43352a8757))
* add crud relation methods ([1fdae63](https://github.com/strongloop/loopback-next/commit/1fdae63f2c61f7768e27f156fde3dd9125cda9b9))
* add findOne function into legacy juggler bridge ([ee0df08](https://github.com/strongloop/loopback-next/commit/ee0df08a7ab9f2f268f21f6b5ad4c71618802dba))
* add helper package "dist-util" ([532f153](https://github.com/strongloop/loopback-next/commit/532f15324f0378a951dbb7f101ce9df3bb3711ef))
* Add metadata inspector ([c683019](https://github.com/strongloop/loopback-next/commit/c6830192253e532e4529c18ba680df96db47e8cd))
* add repository booter ([#1030](https://github.com/strongloop/loopback-next/issues/1030)) ([43ea7a8](https://github.com/strongloop/loopback-next/commit/43ea7a8a6787022138953ca2e05a10c4a6fe2ede))
* builders for Filter and Where schemas ([ca8d96e](https://github.com/strongloop/loopback-next/commit/ca8d96e0cb1768c60448082e249b46dc1282aed1))
* default 404 for request to non-existent resource ([f68a45c](https://github.com/strongloop/loopback-next/commit/f68a45ced9a392286d484b72cc690a6599aeb0c0))
* type resolver for property decorators ([49454aa](https://github.com/strongloop/loopback-next/commit/49454aaa70f2345938778469c2b0cb3fef05f5e2))
* **repository:** Make property parameter optional ([a701ce9](https://github.com/strongloop/loopback-next/commit/a701ce98328b4387d7984cdb17963b9d10219de3))
* **repository:** rework *ById methods to throw if id not found ([264f231](https://github.com/strongloop/loopback-next/commit/264f2317c3f7ffe02de43f1fb81d95e49d7d5661))
* **repository:** simplify usage of juggler bridge ([#539](https://github.com/strongloop/loopback-next/issues/539)) ([2cf4d2b](https://github.com/strongloop/loopback-next/commit/2cf4d2b39e2a3e6d641f63a08fd7809f90b1fa1d))
* **repository-json-schema:** add in top-level metadata for json schema ([#907](https://github.com/strongloop/loopback-next/issues/907)) ([fe59e6b](https://github.com/strongloop/loopback-next/commit/fe59e6be0f4e67c2b259ee655c1706cf176dc918))
* **service-proxy:** add service mixin ([fb01931](https://github.com/strongloop/loopback-next/commit/fb01931d4e193c21560811f4d6d078c89941fcfb))
* Use decorator factories ([88ebd21](https://github.com/strongloop/loopback-next/commit/88ebd217897c7be0a19299b453404f77e4d41b90))


### Performance Improvements

* **repository:** prevent multiple array allocation ([a026d33](https://github.com/strongloop/loopback-next/commit/a026d3396911113bd2596159795f1dac5c5d0ee9))
* **repository:** prevent multiple array allocation ([691981c](https://github.com/strongloop/loopback-next/commit/691981cdfdde24fe2c1ecbf4901033b2c79dafe3))


### BREAKING CHANGES

* **repository:** If you are building a custom relation type with its
own definition interface, make sure the interface includes `targetsMany`
property. Typically, the type of this property is hard-coded as `true`
or `false`, depending on the relation type.

```ts
interface HasManyDefinition extends RelationDefinitionBase {
  type: RelationType.hasMany;
  targetsMany: true;
  // etc.
}

export interface BelongsToDefinition extends RelationDefinitionBase {
  type: RelationType.belongsTo;
  targetsMany: false;
  // etc.
}
```

When creating an instance of a relation definition, make sure to include
a value for `targetsMany` property.

```ts
new ModelDefinition('Order')
  .addRelation({
    name: 'customer',
    type: RelationType.belongsTo,
    targetsMany: false,
    source: Order,
    target: () => Customer,
    keyFrom: 'customerId',
    keyTo: 'id',
  });
```

Signed-off-by: Miroslav Bajtoš <mbajtoss@gmail.com>
* **repository:** The type `Inclusion` is no longer generic. Please
update your code and remove any generic arguments provided for the type.

```diff
- Inclusion<MyModel>
+ Inclusion
```

Signed-off-by: Miroslav Bajtoš <mbajtoss@gmail.com>
* Node.js v8.x is now end of life. Please upgrade to version
10 and above. See https://nodejs.org/en/about/releases.
* **repository:** the generic SourceID for type HasManyRepositoryFactory
has been renamed to ForeignKeyType and switched with Target generic.
Also, the function createHasManyRepositoryFactory also renames the same
generic and makes it the last declared generic. Lastly, the generic
ForeignKeyType is added to DefaultCrudRepository#_createHasManyRepository
FactoryFor function. Assuming there is an Order and Customer model defined,
see the following examples for upgrade instructions:

For `HasManyRepository` type:

```diff
- public orders: HasManyRepository<typeof Customer.prototype.id, Order>
+ public orders: HasManyRepository<Order, typeof Customer.prototype.id>
```

For `createHasManyRepositoryFactory` function:

```diff
- const orderFactoryFn = createHasManyRepositoryFactory<typeof Customer.
prototype.id, Order, typeof Order.prototype.id>(...);
+ const orderFactoryFn = createHasManyRepositoryFactory<Order, typeof Order.
prototype.id, typeof Customer.prototype.id>(...);
```
* **metadata:** instances of user-defined classes are not cloned any more.

See https://github.com/strongloop/loopback-next/issues/1182. The root
cause is that DataSource instances are cloned incorrectly.
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





## [2.1.1](https://github.com/strongloop/loopback-next/compare/@loopback/repository@2.1.0...@loopback/repository@2.1.1) (2020-04-11)

**Note:** Version bump only for package @loopback/repository





# [2.1.0](https://github.com/strongloop/loopback-next/compare/@loopback/repository@2.0.2...@loopback/repository@2.1.0) (2020-04-08)


### Bug Fixes

* remove restriction to Entities from DefaultKeyValueRepository ([c30dce3](https://github.com/strongloop/loopback-next/commit/c30dce330fd6585ce8b0d33d3d6a5d2fd5fac906))


### Features

* remove Node.js 8.x polyfill for Symbol.asyncIterator ([eeb8772](https://github.com/strongloop/loopback-next/commit/eeb877276cf62d32856eb7227d78618ab4c93c2e))





## [2.0.2](https://github.com/strongloop/loopback-next/compare/@loopback/repository@2.0.1...@loopback/repository@2.0.2) (2020-03-24)


### Bug Fixes

* **repository-json-schema:** fix schema generation for model inheritance ([5417ed5](https://github.com/strongloop/loopback-next/commit/5417ed5fdbf0508f1882186d9cbff64ecfb10699))
* update package locks ([cd2f6fa](https://github.com/strongloop/loopback-next/commit/cd2f6fa7a732afe4a16f4ccf8316ff3142959fe8))





## [2.0.1](https://github.com/strongloop/loopback-next/compare/@loopback/repository@2.0.0...@loopback/repository@2.0.1) (2020-03-17)


### Bug Fixes

* filter null keys when including belongs-to relations in queries ([cccb37f](https://github.com/strongloop/loopback-next/commit/cccb37f43f3ccaf950c23759315b4dde41da4e8b))





# [2.0.0](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.19.1...@loopback/repository@2.0.0) (2020-03-05)


### chore

* remove support for Node.js v8.x ([4281d9d](https://github.com/strongloop/loopback-next/commit/4281d9df50f0715d32879e1442a90b643ec8f542))


### Features

* constrain filter to exclude where for findById ([360d563](https://github.com/strongloop/loopback-next/commit/360d563361358dead0ac18198b2878aedb5f48c7))
* support operation hooks ([8701cce](https://github.com/strongloop/loopback-next/commit/8701cce8b208c952e4d41f0570124e389506d808))
* **repository:** make `targetsMany` property required ([cd4d43a](https://github.com/strongloop/loopback-next/commit/cd4d43abb0ebe56aa31939c14ae9d25021ad1e65))
* **repository:** remove generic parameters from `Inclusion` type ([ed949e4](https://github.com/strongloop/loopback-next/commit/ed949e415ff0be1467b3029fb2e49c64a22c1b2e))
* **repository:** skip undefined property values for toJSON ([70fc005](https://github.com/strongloop/loopback-next/commit/70fc005823ab4e5cf4b641d2d80668911a26012a))
* add `tslib` as dependency ([a6e0b4c](https://github.com/strongloop/loopback-next/commit/a6e0b4ce7b862764167cefedee14c1115b25e0a4)), closes [#4676](https://github.com/strongloop/loopback-next/issues/4676)
* preserve custom type of auto-generated id property ([dc7ff7f](https://github.com/strongloop/loopback-next/commit/dc7ff7f7829434de3436e9352b1d9cc43392db0e))


### BREAKING CHANGES

* **repository:** If you are building a custom relation type with its
own definition interface, make sure the interface includes `targetsMany`
property. Typically, the type of this property is hard-coded as `true`
or `false`, depending on the relation type.

```ts
interface HasManyDefinition extends RelationDefinitionBase {
  type: RelationType.hasMany;
  targetsMany: true;
  // etc.
}

export interface BelongsToDefinition extends RelationDefinitionBase {
  type: RelationType.belongsTo;
  targetsMany: false;
  // etc.
}
```

When creating an instance of a relation definition, make sure to include
a value for `targetsMany` property.

```ts
new ModelDefinition('Order')
  .addRelation({
    name: 'customer',
    type: RelationType.belongsTo,
    targetsMany: false,
    source: Order,
    target: () => Customer,
    keyFrom: 'customerId',
    keyTo: 'id',
  });
```

Signed-off-by: Miroslav Bajtoš <mbajtoss@gmail.com>
* **repository:** The type `Inclusion` is no longer generic. Please
update your code and remove any generic arguments provided for the type.

```diff
- Inclusion<MyModel>
+ Inclusion
```

Signed-off-by: Miroslav Bajtoš <mbajtoss@gmail.com>
* Node.js v8.x is now end of life. Please upgrade to version
10 and above. See https://nodejs.org/en/about/releases.





## [1.19.1](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.19.0...@loopback/repository@1.19.1) (2020-02-06)

**Note:** Version bump only for package @loopback/repository





# [1.19.0](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.18.0...@loopback/repository@1.19.0) (2020-02-05)


### Features

* leverage isactive for transaction ([fc94437](https://github.com/strongloop/loopback-next/commit/fc9443787039d4a1db3008a0141f5693f95bfbd4))





# [1.18.0](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.17.0...@loopback/repository@1.18.0) (2020-01-27)


### Bug Fixes

* **repository:** make the navigational property err msg more clear ([2d493bc](https://github.com/strongloop/loopback-next/commit/2d493bc0387b9f595b82ee149fb83405f4073424))


### Features

* **repository:** add interface for hasManyThrough repository ([a242785](https://github.com/strongloop/loopback-next/commit/a24278522c46337887592e864031de891d08f30d)), closes [/github.com/strongloop/loopback-next/pull/2359#issuecomment-559719080](https://github.com//github.com/strongloop/loopback-next/pull/2359/issues/issuecomment-559719080)





# [1.17.0](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.16.0...@loopback/repository@1.17.0) (2020-01-07)


### Bug Fixes

* **repository:** belongsto accessor should return undefined if foreign key is not included ([cbdba15](https://github.com/strongloop/loopback-next/commit/cbdba1554fe103109a21e20c48cd3a0edcf8fffb))


### Features

* **repository:** add interface for hasManyThrough ([ced2643](https://github.com/strongloop/loopback-next/commit/ced26437c6fa8bd34fa897325730610ec017bc16))
* **repository:** allow custom keyFrom for hasmany/hasone ([58efff9](https://github.com/strongloop/loopback-next/commit/58efff9e166fbe1fc820fe6168e18b5c7d9630ce))





# [1.16.0](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.15.5...@loopback/repository@1.16.0) (2019-12-09)


### Bug Fixes

* **repository:** fix DeepPartial<AnyObject> ([0f97811](https://github.com/strongloop/loopback-next/commit/0f97811256304ab048a93858f7a86229bc662e7a))


### Features

* **repository:** add `defineModelClass` helper ([4d844d1](https://github.com/strongloop/loopback-next/commit/4d844d1a6812ebbe18e30d646e7bc854974a1f76))
* **repository:** add title property to Count schema definition ([a91c989](https://github.com/strongloop/loopback-next/commit/a91c9897f48365b9c888fd08075c82de44774331))
* **repository:** enable inclusion with custom scope ([4a0d595](https://github.com/strongloop/loopback-next/commit/4a0d595f65a2c80c89e2ca1263d235e4d23cd730))
* **repository:** rejects create/update operations for navigational properties ([01de327](https://github.com/strongloop/loopback-next/commit/01de3275be7c6dd8e9c50ffeb64c23d6d7ec9e51))





## [1.15.5](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.15.4...@loopback/repository@1.15.5) (2019-11-25)

**Note:** Version bump only for package @loopback/repository





## [1.15.4](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.15.3...@loopback/repository@1.15.4) (2019-11-12)


### Bug Fixes

* **repository:** fix compilation errors with TypeScript 3.7.2 ([d62612d](https://github.com/strongloop/loopback-next/commit/d62612d08e34f4d32b5a3d1645aa0420fecea3b3))
* **repository:** improve stub typing to avoid compilation errors with TypeScript 3.7 ([29cf103](https://github.com/strongloop/loopback-next/commit/29cf103c780312cf15bf8e1dd189394ae7540fe4))
* **repository:** improve typings for model inclusion ([eb1a0ae](https://github.com/strongloop/loopback-next/commit/eb1a0ae7a433e566f413a7e3c518b3aeff5374c4))





## [1.15.3](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.15.2...@loopback/repository@1.15.3) (2019-10-24)

**Note:** Version bump only for package @loopback/repository





## [1.15.2](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.15.1...@loopback/repository@1.15.2) (2019-10-07)

**Note:** Version bump only for package @loopback/repository





## [1.15.1](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.15.0...@loopback/repository@1.15.1) (2019-09-28)

**Note:** Version bump only for package @loopback/repository





# [1.15.0](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.14.0...@loopback/repository@1.15.0) (2019-09-27)


### Bug Fixes

* **repository:** allow model classes with recursive type references ([0094ded](https://github.com/strongloop/loopback-next/commit/0094ded)), closes [/github.com/strongloop/loopback-next/issues/3671#issuecomment-529376105](https://github.com//github.com/strongloop/loopback-next/issues/3671/issues/issuecomment-529376105)


### Features

* **repository:** implement inclusion resolver for belongsTo relation ([fc3d5b6](https://github.com/strongloop/loopback-next/commit/fc3d5b6))
* **repository:** implement inclusion resolver for hasOne relation ([8dfdf58](https://github.com/strongloop/loopback-next/commit/8dfdf58))
* **repository:** implement inclusionResolver for hasMany ([4cf9a70](https://github.com/strongloop/loopback-next/commit/4cf9a70))





# [1.14.0](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.13.1...@loopback/repository@1.14.0) (2019-09-17)


### Features

* **repository:** add keyFrom to resolved relation metadata ([fb4c5c8](https://github.com/strongloop/loopback-next/commit/fb4c5c8))





## [1.13.1](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.13.0...@loopback/repository@1.13.1) (2019-09-06)

**Note:** Version bump only for package @loopback/repository





# [1.13.0](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.12.0...@loopback/repository@1.13.0) (2019-09-03)


### Features

* **repository:** add inclusionResolvers to DefaultCrudRepository ([642c4b6](https://github.com/strongloop/loopback-next/commit/642c4b6))





# [1.12.0](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.11.1...@loopback/repository@1.12.0) (2019-08-19)


### Features

* **repository:** add InclusionResolver type and includeRelatedModels helper function ([c9c39c9](https://github.com/strongloop/loopback-next/commit/c9c39c9))





## [1.11.1](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.11.0...@loopback/repository@1.11.1) (2019-08-15)

**Note:** Version bump only for package @loopback/repository





# [1.11.0](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.10.1...@loopback/repository@1.11.0) (2019-08-15)


### Bug Fixes

* fixup findByForeignKeys ([e26e7b7](https://github.com/strongloop/loopback-next/commit/e26e7b7))


### Features

* **repository:** add function findByForeignKeys ([f5eaf1d](https://github.com/strongloop/loopback-next/commit/f5eaf1d))
* **repository:** expose beginTransaction() API ([0471315](https://github.com/strongloop/loopback-next/commit/0471315))





## [1.10.1](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.10.0...@loopback/repository@1.10.1) (2019-07-31)

**Note:** Version bump only for package @loopback/repository





# [1.10.0](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.9.0...@loopback/repository@1.10.0) (2019-07-26)


### Features

* **repository:** add hidden properties in model ([e669913](https://github.com/strongloop/loopback-next/commit/e669913))





# [1.9.0](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.8.2...@loopback/repository@1.9.0) (2019-07-17)


### Bug Fixes

* **repository:** make sure foreign key property in keyTo exists in target model ([ce75385](https://github.com/strongloop/loopback-next/commit/ce75385))


### Features

* **repository:** add static method Entity.getIdProperties() ([be4bf31](https://github.com/strongloop/loopback-next/commit/be4bf31))





## [1.8.2](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.8.1...@loopback/repository@1.8.2) (2019-06-28)

**Note:** Version bump only for package @loopback/repository





## [1.8.1](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.8.0...@loopback/repository@1.8.1) (2019-06-21)

**Note:** Version bump only for package @loopback/repository





# [1.8.0](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.7.0...@loopback/repository@1.8.0) (2019-06-20)


### Features

* **repository:** include navigation properties in JSON ([008c8b5](https://github.com/strongloop/loopback-next/commit/008c8b5))





# [1.7.0](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.6.1...@loopback/repository@1.7.0) (2019-06-17)


### Features

* **repository-json-schema:** enhance getJsonSchema to describe navigational properties ([7801f59](https://github.com/strongloop/loopback-next/commit/7801f59)), closes [#2630](https://github.com/strongloop/loopback-next/issues/2630)





## [1.6.1](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.6.0...@loopback/repository@1.6.1) (2019-06-06)

**Note:** Version bump only for package @loopback/repository





# [1.6.0](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.5.8...@loopback/repository@1.6.0) (2019-06-03)


### Features

* add navigational properties to find* methods ([1f0aa0b](https://github.com/strongloop/loopback-next/commit/1f0aa0b))
* replace tslint with eslint ([44185a7](https://github.com/strongloop/loopback-next/commit/44185a7))





## [1.5.8](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.5.7...@loopback/repository@1.5.8) (2019-05-31)

**Note:** Version bump only for package @loopback/repository





## [1.5.7](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.5.6...@loopback/repository@1.5.7) (2019-05-30)

**Note:** Version bump only for package @loopback/repository





## [1.5.6](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.5.5...@loopback/repository@1.5.6) (2019-05-23)


### Bug Fixes

* **repository:** always copy property definition during juggler model build ([#2912](https://github.com/strongloop/loopback-next/issues/2912)) ([f6cae52](https://github.com/strongloop/loopback-next/commit/f6cae52))





## [1.5.5](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.5.4...@loopback/repository@1.5.5) (2019-05-14)

**Note:** Version bump only for package @loopback/repository





## [1.5.4](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.5.3...@loopback/repository@1.5.4) (2019-05-10)

**Note:** Version bump only for package @loopback/repository





## [1.5.3](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.5.2...@loopback/repository@1.5.3) (2019-05-09)

**Note:** Version bump only for package @loopback/repository





## [1.5.2](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.5.1...@loopback/repository@1.5.2) (2019-05-06)

**Note:** Version bump only for package @loopback/repository





## [1.5.1](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.5.0...@loopback/repository@1.5.1) (2019-04-26)

**Note:** Version bump only for package @loopback/repository





# [1.5.0](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.4.1...@loopback/repository@1.5.0) (2019-04-20)


### Bug Fixes

* **repository:** relax constrain check to allow input containing constrained values ([c774ed1](https://github.com/strongloop/loopback-next/commit/c774ed1))


### Features

* **build:** add more TypeScript "strict" checks ([866aa2f](https://github.com/strongloop/loopback-next/commit/866aa2f))





## [1.4.1](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.4.0...@loopback/repository@1.4.1) (2019-04-11)

**Note:** Version bump only for package @loopback/repository





# [1.4.0](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.3.0...@loopback/repository@1.4.0) (2019-04-09)


### Features

* **repository-json-schema:** refactor metaToJsonProperty to accept custom jsonSchema ([d0014c6](https://github.com/strongloop/loopback-next/commit/d0014c6))





# [1.3.0](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.2.1...@loopback/repository@1.3.0) (2019-04-05)


### Features

* **repository:** add execute implementation ([3bd6165](https://github.com/strongloop/loopback-next/commit/3bd6165)), closes [#2165](https://github.com/strongloop/loopback-next/issues/2165)





## [1.2.1](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.2.0...@loopback/repository@1.2.1) (2019-03-22)

**Note:** Version bump only for package @loopback/repository





# [1.2.0](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.1.8...@loopback/repository@1.2.0) (2019-03-22)


### Bug Fixes

* **repository:** support embedded models in nested properties ([d298ec8](https://github.com/strongloop/loopback-next/commit/d298ec8))


### Features

* **context:** honor binding scope from [@bind](https://github.com/bind) ([3b30f01](https://github.com/strongloop/loopback-next/commit/3b30f01))
* **repository:** add PATCH and DELETE for HasOne relation ([5936fb9](https://github.com/strongloop/loopback-next/commit/5936fb9))
* **repository:** allow optional property definition on belongsTo decorator ([11c7baa](https://github.com/strongloop/loopback-next/commit/11c7baa))





## [1.1.8](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.1.7...@loopback/repository@1.1.8) (2019-03-12)


### Bug Fixes

* model id type is now boolean|number instead of boolean ([71292e9](https://github.com/strongloop/loopback-next/commit/71292e9))





## [1.1.7](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.1.6...@loopback/repository@1.1.7) (2019-03-01)


### Bug Fixes

* **repository:** change default binding scope to TRANSIENT for repos ([55461af](https://github.com/strongloop/loopback-next/commit/55461af))





## [1.1.6](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.1.5...@loopback/repository@1.1.6) (2019-02-25)

**Note:** Version bump only for package @loopback/repository





## [1.1.5](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.1.4...@loopback/repository@1.1.5) (2019-02-08)


### Bug Fixes

* update to the most recent lodash version ([65ee865](https://github.com/strongloop/loopback-next/commit/65ee865))





## [1.1.4](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.1.3...@loopback/repository@1.1.4) (2019-01-28)

**Note:** Version bump only for package @loopback/repository





## [1.1.3](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.1.2...@loopback/repository@1.1.3) (2019-01-15)


### Bug Fixes

* **repository:** remove property.array() call from hasMany decorator ([56ab017](https://github.com/strongloop/loopback-next/commit/56ab017)), closes [#1944](https://github.com/strongloop/loopback-next/issues/1944)





## [1.1.2](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.1.1...@loopback/repository@1.1.2) (2019-01-14)


### Bug Fixes

* add nin operator to query typing and builder ([#2215](https://github.com/strongloop/loopback-next/issues/2215)) ([c38bd4e](https://github.com/strongloop/loopback-next/commit/c38bd4e))
* rework tslint comments disabling "no-unused-variable" rule ([a18a3d7](https://github.com/strongloop/loopback-next/commit/a18a3d7))





## [1.1.1](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.1.0...@loopback/repository@1.1.1) (2018-12-20)

**Note:** Version bump only for package @loopback/repository





# [1.1.0](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.0.6...@loopback/repository@1.1.0) (2018-12-13)


### Bug Fixes

* **repository:** revert hasOne target FK as PK implementation ([fcc76df](https://github.com/strongloop/loopback-next/commit/fcc76df))


### Features

* **repository:** add belongsToUniquely sugar syntax method ([1b5b66a](https://github.com/strongloop/loopback-next/commit/1b5b66a))
* **repository:** hasOne relation ([7c2080a](https://github.com/strongloop/loopback-next/commit/7c2080a))
* **repository:** migrateSchema APIs ([ad0229b](https://github.com/strongloop/loopback-next/commit/ad0229b))





## [1.0.6](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.0.5...@loopback/repository@1.0.6) (2018-11-26)

**Note:** Version bump only for package @loopback/repository





## [1.0.5](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.0.4...@loopback/repository@1.0.5) (2018-11-17)


### Bug Fixes

* **repository:** make sure model definition is built correctly ([2effa30](https://github.com/strongloop/loopback-next/commit/2effa30))





## [1.0.4](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.0.3...@loopback/repository@1.0.4) (2018-11-14)

**Note:** Version bump only for package @loopback/repository





<a name="1.0.3"></a>
## [1.0.3](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.0.1...@loopback/repository@1.0.3) (2018-11-08)


### Bug Fixes

* **repository:** build relations based on their names ([2046701](https://github.com/strongloop/loopback-next/commit/2046701))


### Performance Improvements

* **repository:** prevent multiple array allocation ([a026d33](https://github.com/strongloop/loopback-next/commit/a026d33))





<a name="1.0.1"></a>
## [1.0.1](https://github.com/strongloop/loopback-next/compare/@loopback/repository@1.0.0...@loopback/repository@1.0.1) (2018-10-17)


### Performance Improvements

* **repository:** prevent multiple array allocation ([691981c](https://github.com/strongloop/loopback-next/commit/691981c))





<a name="0.21.2"></a>
## [0.21.2](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.21.1...@loopback/repository@0.21.2) (2018-10-08)

**Note:** Version bump only for package @loopback/repository





<a name="0.21.1"></a>
## [0.21.1](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.21.0...@loopback/repository@0.21.1) (2018-10-06)


### Bug Fixes

* **repository:** resolve types for juggler ([41e456c](https://github.com/strongloop/loopback-next/commit/41e456c))





<a name="0.21.0"></a>
# [0.21.0](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.20.0...@loopback/repository@0.21.0) (2018-10-05)


### Bug Fixes

* mark HasManyRepository as a readonly property ([39227eb](https://github.com/strongloop/loopback-next/commit/39227eb))


### Features

* **repository:** implement belongsTo relation ([df8c64c](https://github.com/strongloop/loopback-next/commit/df8c64c))





<a name="0.20.0"></a>
# [0.20.0](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.19.0...@loopback/repository@0.20.0) (2018-10-03)


### Bug Fixes

* **repository:** use PropertyType instead of Function ([ec9f325](https://github.com/strongloop/loopback-next/commit/ec9f325))
* clean up dataSource usage ([69506a4](https://github.com/strongloop/loopback-next/commit/69506a4))


### Features

* **testlab:** add StubbedInstanceWithSinonAccessor ([1dc2304](https://github.com/strongloop/loopback-next/commit/1dc2304))





<a name="0.19.0"></a>
# [0.19.0](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.18.1...@loopback/repository@0.19.0) (2018-09-28)


### Features

* **repository:** return an object for count and updateAll ([c146366](https://github.com/strongloop/loopback-next/commit/c146366))





<a name="0.18.1"></a>
## [0.18.1](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.18.0...@loopback/repository@0.18.1) (2018-09-27)

**Note:** Version bump only for package @loopback/repository





<a name="0.18.0"></a>
# [0.18.0](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.17.1...@loopback/repository@0.18.0) (2018-09-25)


### Features

* builders for Filter and Where schemas ([ca8d96e](https://github.com/strongloop/loopback-next/commit/ca8d96e))
* type resolver for property decorators ([49454aa](https://github.com/strongloop/loopback-next/commit/49454aa))





<a name="0.17.1"></a>
## [0.17.1](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.17.0...@loopback/repository@0.17.1) (2018-09-21)

**Note:** Version bump only for package @loopback/repository





<a name="0.17.0"></a>
# [0.17.0](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.16.5...@loopback/repository@0.17.0) (2018-09-19)


### Features

* **repository:** change Model.modelName to a computed property ([5a493cf](https://github.com/strongloop/loopback-next/commit/5a493cf))
* **repository:** implement EntityNotFoundError ([d670d10](https://github.com/strongloop/loopback-next/commit/d670d10))
* **repository:** rework *ById methods to throw if id not found ([264f231](https://github.com/strongloop/loopback-next/commit/264f231))





<a name="0.16.5"></a>
## [0.16.5](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.16.4...@loopback/repository@0.16.5) (2018-09-14)


### Bug Fixes

* **repository:** convert array items to json ([33124db](https://github.com/strongloop/loopback-next/commit/33124db))





<a name="0.16.4"></a>
## [0.16.4](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.16.3...@loopback/repository@0.16.4) (2018-09-14)


### Bug Fixes

* **repository:** handle conversion of property values to plain json ([8fcc938](https://github.com/strongloop/loopback-next/commit/8fcc938))





<a name="0.16.3"></a>
## [0.16.3](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.16.2...@loopback/repository@0.16.3) (2018-09-14)

**Note:** Version bump only for package @loopback/repository





<a name="0.16.2"></a>
## [0.16.2](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.16.1...@loopback/repository@0.16.2) (2018-09-12)

**Note:** Version bump only for package @loopback/repository





<a name="0.16.1"></a>
## [0.16.1](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.16.0...@loopback/repository@0.16.1) (2018-09-10)

**Note:** Version bump only for package @loopback/repository





<a name="0.16.0"></a>
# [0.16.0](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.15.1...@loopback/repository@0.16.0) (2018-09-08)


### Bug Fixes

* remove extra imports for mixin dependencies ([35b916b](https://github.com/strongloop/loopback-next/commit/35b916b))


### Features

* default 404 for request to non-existent resource ([f68a45c](https://github.com/strongloop/loopback-next/commit/f68a45c))
* **service-proxy:** add service mixin ([fb01931](https://github.com/strongloop/loopback-next/commit/fb01931))





<a name="0.15.1"></a>
## [0.15.1](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.15.0...@loopback/repository@0.15.1) (2018-08-24)

**Note:** Version bump only for package @loopback/repository





<a name="0.15.0"></a>
# [0.15.0](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.14.3...@loopback/repository@0.15.0) (2018-08-15)


### Bug Fixes

* **repository:** change the way array property definition is built for the juggler ([2471c88](https://github.com/strongloop/loopback-next/commit/2471c88))


### Features

* **repository:** add KVRepository impl using legacy juggler ([97a75dc](https://github.com/strongloop/loopback-next/commit/97a75dc))




<a name="0.14.3"></a>
## [0.14.3](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.14.2...@loopback/repository@0.14.3) (2018-08-08)




**Note:** Version bump only for package @loopback/repository

<a name="0.14.2"></a>
## [0.14.2](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.14.1...@loopback/repository@0.14.2) (2018-07-21)




**Note:** Version bump only for package @loopback/repository

<a name="0.14.1"></a>
## [0.14.1](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.14.0...@loopback/repository@0.14.1) (2018-07-20)




**Note:** Version bump only for package @loopback/repository

<a name="0.14.0"></a>
# [0.14.0](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.13.3...@loopback/repository@0.14.0) (2018-07-20)


### Bug Fixes

* **repository:** change parameter order in HasManyRepositoryFactory ([534895d](https://github.com/strongloop/loopback-next/commit/534895d))
* **repository:** default where object to an empty object ([4b14a5c](https://github.com/strongloop/loopback-next/commit/4b14a5c))


### BREAKING CHANGES

* **repository:** the generic SourceID for type HasManyRepositoryFactory
has been renamed to ForeignKeyType and switched with Target generic.
Also, the function createHasManyRepositoryFactory also renames the same
generic and makes it the last declared generic. Lastly, the generic
ForeignKeyType is added to DefaultCrudRepository#_createHasManyRepository
FactoryFor function. Assuming there is an Order and Customer model defined,
see the following examples for upgrade instructions:

For `HasManyRepository` type:

```diff
- public orders: HasManyRepository<typeof Customer.prototype.id, Order>
+ public orders: HasManyRepository<Order, typeof Customer.prototype.id>
```

For `createHasManyRepositoryFactory` function:

```diff
- const orderFactoryFn = createHasManyRepositoryFactory<typeof Customer.
prototype.id, Order, typeof Order.prototype.id>(...);
+ const orderFactoryFn = createHasManyRepositoryFactory<Order, typeof Order.
prototype.id, typeof Customer.prototype.id>(...);
```




<a name="0.13.3"></a>
## [0.13.3](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.13.2...@loopback/repository@0.13.3) (2018-07-13)


### Bug Fixes

* **repository:** change RelationType from numeric to string enums ([62090fc](https://github.com/strongloop/loopback-next/commit/62090fc))




<a name="0.13.2"></a>
## [0.13.2](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.13.1...@loopback/repository@0.13.2) (2018-07-11)




**Note:** Version bump only for package @loopback/repository

<a name="0.13.1"></a>
## [0.13.1](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.13.0...@loopback/repository@0.13.1) (2018-07-10)


### Bug Fixes

* **repository:** fix return type of DefaultCrudRepository#_createHasManyRepositoryFactoryFor ([5c11b6c](https://github.com/strongloop/loopback-next/commit/5c11b6c))




<a name="0.13.0"></a>
# [0.13.0](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.12.1...@loopback/repository@0.13.0) (2018-07-09)


### Bug Fixes

* **repository:** make models strict by default ([08c2d89](https://github.com/strongloop/loopback-next/commit/08c2d89))


### Features

* **cli:** add config and yes options ([5778a2a](https://github.com/strongloop/loopback-next/commit/5778a2a))
* **repository:** introduce hasmany relation decorator inference ([b267f3c](https://github.com/strongloop/loopback-next/commit/b267f3c))




<a name="0.12.1"></a>
## [0.12.1](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.12.0...@loopback/repository@0.12.1) (2018-06-28)




**Note:** Version bump only for package @loopback/repository

<a name="0.12.0"></a>
# [0.12.0](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.11.4...@loopback/repository@0.12.0) (2018-06-27)


### Features

* add crud relation methods ([1fdae63](https://github.com/strongloop/loopback-next/commit/1fdae63))




<a name="0.11.4"></a>
## [0.11.4](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.11.3...@loopback/repository@0.11.4) (2018-06-20)


### Bug Fixes

* **repository:** accept class and instance for app.datasource ([4b4270c](https://github.com/strongloop/loopback-next/commit/4b4270c))
* **repository:** check null for findOne CRUD method ([19f9d61](https://github.com/strongloop/loopback-next/commit/19f9d61))




<a name="0.11.3"></a>
## [0.11.3](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.11.2...@loopback/repository@0.11.3) (2018-06-11)




**Note:** Version bump only for package @loopback/repository

<a name="0.11.2"></a>
## [0.11.2](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.11.0...@loopback/repository@0.11.2) (2018-06-09)




**Note:** Version bump only for package @loopback/repository

<a name="0.11.1"></a>
## [0.11.1](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.11.0...@loopback/repository@0.11.1) (2018-06-09)




**Note:** Version bump only for package @loopback/repository

<a name="0.11.0"></a>
# [0.11.0](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.10.4...@loopback/repository@0.11.0) (2018-06-08)


### Bug Fixes

* make the code compatible with TypeScript 2.9.x ([37aba50](https://github.com/strongloop/loopback-next/commit/37aba50))


### Features

* **repository:** initial hasMany relation impl ([63f20c4](https://github.com/strongloop/loopback-next/commit/63f20c4))




<a name="0.10.4"></a>
## [0.10.4](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.10.3...@loopback/repository@0.10.4) (2018-05-20)


### Bug Fixes

* move apidocs outside of the function ([940674e](https://github.com/strongloop/loopback-next/commit/940674e))
* remove mixin builder ([d6942d7](https://github.com/strongloop/loopback-next/commit/d6942d7))




<a name="0.10.3"></a>
## [0.10.3](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.10.2...@loopback/repository@0.10.3) (2018-05-14)


### Bug Fixes

* change index.d.ts files to point to dist8 ([42ca42d](https://github.com/strongloop/loopback-next/commit/42ca42d))




<a name="0.10.2"></a>
## [0.10.2](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.10.1...@loopback/repository@0.10.2) (2018-05-14)


### Bug Fixes

* multiple instances of the same repository class ([c553f11](https://github.com/strongloop/loopback-next/commit/c553f11))




<a name="0.10.1"></a>
## [0.10.1](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.10.0...@loopback/repository@0.10.1) (2018-05-08)




**Note:** Version bump only for package @loopback/repository

<a name="0.10.0"></a>
# [0.10.0](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.8.1...@loopback/repository@0.10.0) (2018-05-03)


### Features

* add helper package "dist-util" ([532f153](https://github.com/strongloop/loopback-next/commit/532f153))




<a name="0.9.0"></a>
# [0.9.0](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.8.1...@loopback/repository@0.9.0) (2018-05-03)


### Features

* add helper package "dist-util" ([532f153](https://github.com/strongloop/loopback-next/commit/532f153))




<a name="0.8.1"></a>
## [0.8.1](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.8.0...@loopback/repository@0.8.1) (2018-04-25)




**Note:** Version bump only for package @loopback/repository

<a name="0.8.0"></a>
# [0.8.0](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.7.0...@loopback/repository@0.8.0) (2018-04-16)




**Note:** Version bump only for package @loopback/repository

<a name="0.7.0"></a>
# [0.7.0](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.6.1...@loopback/repository@0.7.0) (2018-04-12)


### Features

* **metadata:** add strongly-typed metadata accessors ([45f9f80](https://github.com/strongloop/loopback-next/commit/45f9f80))




<a name="0.6.1"></a>
## [0.6.1](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.6.0...@loopback/repository@0.6.1) (2018-04-11)




**Note:** Version bump only for package @loopback/repository

<a name="0.6.0"></a>
# [0.6.0](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.4.2...@loopback/repository@0.6.0) (2018-04-11)


### Bug Fixes

* change file names to fit advocated naming convention ([0331df8](https://github.com/strongloop/loopback-next/commit/0331df8))


### Features

* **repository:** add getRepository to mixin ([6e1be1f](https://github.com/strongloop/loopback-next/commit/6e1be1f))
* **repository:** have [@repository](https://github.com/repository) take in constructor as arg ([3db07eb](https://github.com/strongloop/loopback-next/commit/3db07eb))




<a name="0.5.0"></a>
# [0.5.0](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.4.2...@loopback/repository@0.5.0) (2018-04-06)


### Features

* **repository:** add getRepository to mixin ([6e1be1f](https://github.com/strongloop/loopback-next/commit/6e1be1f))




<a name="0.4.2"></a>
## [0.4.2](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.4.1...@loopback/repository@0.4.2) (2018-04-04)




**Note:** Version bump only for package @loopback/repository

<a name="0.4.1"></a>
## [0.4.1](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.4.0...@loopback/repository@0.4.1) (2018-04-02)




**Note:** Version bump only for package @loopback/repository

<a name="0.4.0"></a>
# [0.4.0](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.3.1...@loopback/repository@0.4.0) (2018-03-29)


### Bug Fixes

* **metadata:** refine clone of decoration spec ([544052e](https://github.com/strongloop/loopback-next/commit/544052e))
* **repository:** make sure examples are compiled ([b95f1dc](https://github.com/strongloop/loopback-next/commit/b95f1dc))


### BREAKING CHANGES

* **metadata:** instances of user-defined classes are not cloned any more.

See https://github.com/strongloop/loopback-next/issues/1182. The root
cause is that DataSource instances are cloned incorrectly.




<a name="0.3.1"></a>
## [0.3.1](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.3.0...@loopback/repository@0.3.1) (2018-03-23)


### Bug Fixes

* **repository:** fix broken code in readme ([e3e97d9](https://github.com/strongloop/loopback-next/commit/e3e97d9))




<a name="0.3.0"></a>
# [0.3.0](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.2.4...@loopback/repository@0.3.0) (2018-03-21)




**Note:** Version bump only for package @loopback/repository

<a name="0.2.4"></a>
## [0.2.4](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.2.3...@loopback/repository@0.2.4) (2018-03-14)




**Note:** Version bump only for package @loopback/repository

<a name="0.2.3"></a>
## [0.2.3](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.2.2...@loopback/repository@0.2.3) (2018-03-13)




**Note:** Version bump only for package @loopback/repository

<a name="0.2.2"></a>
## [0.2.2](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.2.1...@loopback/repository@0.2.2) (2018-03-08)




**Note:** Version bump only for package @loopback/repository

<a name="0.2.1"></a>
## [0.2.1](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.2.0...@loopback/repository@0.2.1) (2018-03-06)


### Bug Fixes

* fix package name for `repository` ([e5f7aca](https://github.com/strongloop/loopback-next/commit/e5f7aca))
* fix typo of `additional` ([2fd7610](https://github.com/strongloop/loopback-next/commit/2fd7610))




<a name="0.2.0"></a>
# [0.2.0](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.1.2...@loopback/repository@0.2.0) (2018-03-01)




**Note:** Version bump only for package @loopback/repository

<a name="0.1.2"></a>
## [0.1.2](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.1.1...@loopback/repository@0.1.2) (2018-03-01)


### Features

* add repository booter ([#1030](https://github.com/strongloop/loopback-next/issues/1030)) ([43ea7a8](https://github.com/strongloop/loopback-next/commit/43ea7a8))
* **context:** add type as a generic parameter to `ctx.get()` and friends ([24b217d](https://github.com/strongloop/loopback-next/commit/24b217d))
* **repository:** add datasource method in repository mixin ([85347fa](https://github.com/strongloop/loopback-next/commit/85347fa))


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
## [0.1.1](https://github.com/strongloop/loopback-next/compare/@loopback/repository@0.1.0...@loopback/repository@0.1.1) (2018-02-23)




**Note:** Version bump only for package @loopback/repository

<a name="0.1.0"></a>
# [0.1.0](https://github.com/strongloop/loopback-next/compare/@loopback/repository@4.0.0-alpha.30...@loopback/repository@0.1.0) (2018-02-21)




**Note:** Version bump only for package @loopback/repository

<a name="4.0.0-alpha.30"></a>
# [4.0.0-alpha.30](https://github.com/strongloop/loopback-next/compare/@loopback/repository@4.0.0-alpha.29...@loopback/repository@4.0.0-alpha.30) (2018-02-15)




**Note:** Version bump only for package @loopback/repository

<a name="4.0.0-alpha.29"></a>
# [4.0.0-alpha.29](https://github.com/strongloop/loopback-next/compare/@loopback/repository@4.0.0-alpha.28...@loopback/repository@4.0.0-alpha.29) (2018-02-07)


### build

* drop dist6 related targets ([#945](https://github.com/strongloop/loopback-next/issues/945)) ([a2368ce](https://github.com/strongloop/loopback-next/commit/a2368ce))


### BREAKING CHANGES

* Support for Node.js version lower than 8.0 has been dropped.
Please upgrade to the latest Node.js 8.x LTS version.

Co-Authored-by: Taranveer Virk <taranveer@virk.cc>




<a name="4.0.0-alpha.28"></a>
# [4.0.0-alpha.28](https://github.com/strongloop/loopback-next/compare/@loopback/repository@4.0.0-alpha.27...@loopback/repository@4.0.0-alpha.28) (2018-02-04)




**Note:** Version bump only for package @loopback/repository

<a name="4.0.0-alpha.27"></a>
# [4.0.0-alpha.27](https://github.com/strongloop/loopback-next/compare/@loopback/repository@4.0.0-alpha.26...@loopback/repository@4.0.0-alpha.27) (2018-01-30)


### Features

* **repository-json-schema:** add in top-level metadata for json schema ([#907](https://github.com/strongloop/loopback-next/issues/907)) ([fe59e6b](https://github.com/strongloop/loopback-next/commit/fe59e6b))




<a name="4.0.0-alpha.26"></a>
# [4.0.0-alpha.26](https://github.com/strongloop/loopback-next/compare/@loopback/repository@4.0.0-alpha.25...@loopback/repository@4.0.0-alpha.26) (2018-01-29)




**Note:** Version bump only for package @loopback/repository

<a name="4.0.0-alpha.25"></a>
# [4.0.0-alpha.25](https://github.com/strongloop/loopback-next/compare/@loopback/repository@4.0.0-alpha.24...@loopback/repository@4.0.0-alpha.25) (2018-01-26)


### Bug Fixes

* apply source-maps to test errors ([76a7f56](https://github.com/strongloop/loopback-next/commit/76a7f56)), closes [#602](https://github.com/strongloop/loopback-next/issues/602)
* make mocha self-contained with the source map support ([7c6d869](https://github.com/strongloop/loopback-next/commit/7c6d869))




<a name="4.0.0-alpha.24"></a>
# [4.0.0-alpha.24](https://github.com/strongloop/loopback-next/compare/@loopback/repository@4.0.0-alpha.23...@loopback/repository@4.0.0-alpha.24) (2018-01-19)


### Features

* add findOne function into legacy juggler bridge ([ee0df08](https://github.com/strongloop/loopback-next/commit/ee0df08))




<a name="4.0.0-alpha.23"></a>
# [4.0.0-alpha.23](https://github.com/strongloop/loopback-next/compare/@loopback/repository@4.0.0-alpha.22...@loopback/repository@4.0.0-alpha.23) (2018-01-11)


### Bug Fixes

* fix imports to use files owning the definitions ([a50405a](https://github.com/strongloop/loopback-next/commit/a50405a))
* tidy up the build scripts ([6cc83b6](https://github.com/strongloop/loopback-next/commit/6cc83b6))




<a name="4.0.0-alpha.22"></a>
# [4.0.0-alpha.22](https://github.com/strongloop/loopback-next/compare/@loopback/repository@4.0.0-alpha.21...@loopback/repository@4.0.0-alpha.22) (2018-01-03)


### Bug Fixes

* update description for [@loopback](https://github.com/loopback)/repository ([6e2377a](https://github.com/strongloop/loopback-next/commit/6e2377a))




<a name="4.0.0-alpha.21"></a>
# [4.0.0-alpha.21](https://github.com/strongloop/loopback-next/compare/@loopback/repository@4.0.0-alpha.20...@loopback/repository@4.0.0-alpha.21) (2018-01-03)


### Features

* **repository:** helper function for getting Model metadata ([b19635d](https://github.com/strongloop/loopback-next/commit/b19635d))




<a name="4.0.0-alpha.20"></a>
# [4.0.0-alpha.20](https://github.com/strongloop/loopback-next/compare/@loopback/repository@4.0.0-alpha.19...@loopback/repository@4.0.0-alpha.20) (2017-12-21)


### Features

* **repository:** Add array decorator ([3e7b419](https://github.com/strongloop/loopback-next/commit/3e7b419))
* **repository:** Make property parameter optional ([a701ce9](https://github.com/strongloop/loopback-next/commit/a701ce9))




<a name="4.0.0-alpha.19"></a>
# [4.0.0-alpha.19](https://github.com/strongloop/loopback-next/compare/@loopback/repository@4.0.0-alpha.18...@loopback/repository@4.0.0-alpha.19) (2017-12-15)


### Features

* **repository:** Add builders and execute() ([89eaf5f](https://github.com/strongloop/loopback-next/commit/89eaf5f))
* Add metadata inspector ([c683019](https://github.com/strongloop/loopback-next/commit/c683019))
* Use decorator factories ([88ebd21](https://github.com/strongloop/loopback-next/commit/88ebd21))




<a name="4.0.0-alpha.18"></a>
# [4.0.0-alpha.18](https://github.com/strongloop/loopback-next/compare/@loopback/repository@4.0.0-alpha.17...@loopback/repository@4.0.0-alpha.18) (2017-12-11)




**Note:** Version bump only for package @loopback/repository

<a name="4.0.0-alpha.17"></a>
# [4.0.0-alpha.17](https://github.com/strongloop/loopback-next/compare/@loopback/repository@4.0.0-alpha.16...@loopback/repository@4.0.0-alpha.17) (2017-11-29)




**Note:** Version bump only for package @loopback/repository

<a name="4.0.0-alpha.16"></a>
# [4.0.0-alpha.16](https://github.com/strongloop/loopback-next/compare/@loopback/repository@4.0.0-alpha.15...@loopback/repository@4.0.0-alpha.16) (2017-11-14)




**Note:** Version bump only for package @loopback/repository

<a name="4.0.0-alpha.15"></a>
# [4.0.0-alpha.15](https://github.com/strongloop/loopback-next/compare/@loopback/repository@4.0.0-alpha.14...@loopback/repository@4.0.0-alpha.15) (2017-11-09)


### Bug Fixes

* Fix lint errors by newer version of prettier ([d6c5404](https://github.com/strongloop/loopback-next/commit/d6c5404))




<a name="4.0.0-alpha.14"></a>
# [4.0.0-alpha.14](https://github.com/strongloop/loopback-next/compare/@loopback/repository@4.0.0-alpha.13...@loopback/repository@4.0.0-alpha.14) (2017-11-06)


### Bug Fixes

* **repository:** findById will reject on no result ([04077dc](https://github.com/strongloop/loopback-next/commit/04077dc))




<a name="4.0.0-alpha.13"></a>
# [4.0.0-alpha.13](https://github.com/strongloop/loopback-next/compare/@loopback/repository@4.0.0-alpha.12...@loopback/repository@4.0.0-alpha.13) (2017-10-31)




**Note:** Version bump only for package @loopback/repository

<a name="4.0.0-alpha.12"></a>
# [4.0.0-alpha.12](https://github.com/strongloop/loopback-next/compare/@loopback/repository@4.0.0-alpha.11...@loopback/repository@4.0.0-alpha.12) (2017-10-31)




**Note:** Version bump only for package @loopback/repository

<a name="4.0.0-alpha.11"></a>
# [4.0.0-alpha.11](https://github.com/strongloop/loopback-next/compare/@loopback/repository@4.0.0-alpha.8...@loopback/repository@4.0.0-alpha.11) (2017-10-25)




**Note:** Version bump only for package @loopback/repository
