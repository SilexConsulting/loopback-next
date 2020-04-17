# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 4.0.0 (2020-04-17)


### Bug Fixes

* **cli:** add descriptions to features ([8a94f8f](https://github.com/strongloop/loopback-next/commit/8a94f8fc1c21d056b51904ee6f09a8d7899b2bcc))
* **cli:** add ibmi, relocate db2z for affinity to other db2s ([76bb470](https://github.com/strongloop/loopback-next/commit/76bb470e8feba478796741d09b35fdb7549b79ab))
* **cli:** add missing examples to CLI ([221d8d0](https://github.com/strongloop/loopback-next/commit/221d8d00973e28475aee7771c521fd06b2723ef4))
* **cli:** add validation-app to example cli ([36a70b3](https://github.com/strongloop/loopback-next/commit/36a70b39062e3e8d467a3a820a51a58ffaefb613))
* **cli:** allow `-h` for help ([f74092e](https://github.com/strongloop/loopback-next/commit/f74092eb20acd9e9ab1875c56ccbcb2e55f4c1da))
* **cli:** append "Service" in service generator ([c8fb805](https://github.com/strongloop/loopback-next/commit/c8fb8058c375fe22b0c64988c7ff91c1024084ed))
* **cli:** belongsto property generation ([82a95d4](https://github.com/strongloop/loopback-next/commit/82a95d4cba881a715dbf0cb58cad8560e8f755a4))
* **cli:** correct root directory in test ([f951052](https://github.com/strongloop/loopback-next/commit/f951052a12b82923b18f781c3b0292de0a2c8634)), closes [#4425](https://github.com/strongloop/loopback-next/issues/4425)
* **cli:** disconnect the datasource after the model was discovered ([ad30c61](https://github.com/strongloop/loopback-next/commit/ad30c61e8f35795bef6c2aef893884e520561832))
* **cli:** disgard any changes if lb4 `relation` fails ([08dc87c](https://github.com/strongloop/loopback-next/commit/08dc87ca3f654f3669c5ffb130e1e4cbf0dcebef))
* **cli:** emit correct property definitions for built-in types ([6a972db](https://github.com/strongloop/loopback-next/commit/6a972db819aab9f831a26da4f2f81abe3c26efe7))
* **cli:** emit correct property definitions for built-in types ([9d34f23](https://github.com/strongloop/loopback-next/commit/9d34f23bd8eadaed9a38ca95339384bddce041b2))
* **cli:** exclude *.tsbuildinfo from Docker image ([581a0f3](https://github.com/strongloop/loopback-next/commit/581a0f36f1fc34be2d0b3a957d66a268b4689380))
* **cli:** extract messages for generators ([2f572bd](https://github.com/strongloop/loopback-next/commit/2f572bd75883420e38bfaa780bc38445aec92e65))
* **cli:** extract messages for generators ([b264d60](https://github.com/strongloop/loopback-next/commit/b264d60752e8487c0649b1f47419dbc06a111384))
* **cli:** fix has many relation controller attribute ([5aa83df](https://github.com/strongloop/loopback-next/commit/5aa83df2fe3c38165174328d26726690f6cbafb5))
* **cli:** fix schema title for POST operation in relation controllers ([34a2077](https://github.com/strongloop/loopback-next/commit/34a2077979dd54aceaa0fa40d14b97adf4dfb881))
* **cli:** fix typo in cli relation tests ([466f79b](https://github.com/strongloop/loopback-next/commit/466f79b900fbd3b10b6eb7dafab2ebe46f7f745d))
* **cli:** handle missing target artifact dir ([ba34838](https://github.com/strongloop/loopback-next/commit/ba348384b045d6976e257f09cdc610766568abfa))
* **cli:** ignore stdin when config is provided via CLI args ([3d64cfe](https://github.com/strongloop/loopback-next/commit/3d64cfebe19ae26b66ae7639a8ddffbf3dd54061))
* **cli:** improve message for model discovery code generation ([15c11d4](https://github.com/strongloop/loopback-next/commit/15c11d4b6644182b4bd5fc6be34fe805104fc3ca))
* **cli:** include intl in package.json ([097724b](https://github.com/strongloop/loopback-next/commit/097724bc0d38ce6a499d2a26092a570451b5e026))
* **cli:** index file should be updated. Add relation interface to model template ([7fd9b88](https://github.com/strongloop/loopback-next/commit/7fd9b88626a7d1b4a227077a4334fdbd00edea0d))
* **cli:** make sure generated package.json is well formatted ([38be23f](https://github.com/strongloop/loopback-next/commit/38be23f46f02ea380f1290f12704078925d264cd))
* **cli:** make sure properties are correctly generated ([369d58b](https://github.com/strongloop/loopback-next/commit/369d58bf7f591968473ecdc7ea48939a560413d4))
* **cli:** make the StatusConflicter compatible with the base Conflicter ([b6a1af9](https://github.com/strongloop/loopback-next/commit/b6a1af98ccb0705ee3a802df68bb590ec74473f5))
* **cli:** move `loopback` to devDependencies ([7701cab](https://github.com/strongloop/loopback-next/commit/7701cab4a18f37be62269d075045a0d0b8eb7d57))
* **cli:** reject datasources with no name property for service generator ([cc871e5](https://github.com/strongloop/loopback-next/commit/cc871e509b5c3a0de2ac0dc1108332285aa808a4))
* **cli:** remove `All rights reserved.` from the header for LICENSE ([ce78b2a](https://github.com/strongloop/loopback-next/commit/ce78b2a81314aacb46b525121ecdfdbd97d0d94e))
* **cli:** remove unused imports from the crud controller template ([848272d](https://github.com/strongloop/loopback-next/commit/848272d980e94bc9f0878e678de12a336c0d8b8a))
* add class name separation to multiple class names output ([fc79bf5](https://github.com/strongloop/loopback-next/commit/fc79bf572666284842316c0a88b42bd7246ef49d)), closes [#3350](https://github.com/strongloop/loopback-next/issues/3350)
* add support for excluding custom pk from POST requests ([9694d99](https://github.com/strongloop/loopback-next/commit/9694d9942fae2a054be0243cf7217c9e0b60c5f0))
* cleanup tilde-path-app post test ([4562a50](https://github.com/strongloop/loopback-next/commit/4562a5055c40ea91d33c4e1f29c08edcefa7fdef)), closes [#4652](https://github.com/strongloop/loopback-next/issues/4652)
* model with id required ([270e13e](https://github.com/strongloop/loopback-next/commit/270e13eb283b0a90c7cbaaf2741e8c0e535b27d0))
* remove ref for v4.loopback.io ([78f20c0](https://github.com/strongloop/loopback-next/commit/78f20c0ed4db5f3ce0d7b676449ba3b22526319e))
* set foreignkey to be optional in the requestbody of hasmany relation ([d46ea18](https://github.com/strongloop/loopback-next/commit/d46ea184f34543f747023f758b87aea26ba2b496))
* update error message when failing to read datasource, to include filename ([6663733](https://github.com/strongloop/loopback-next/commit/6663733586ec3a98816f63a887c28b3debf51e4c)), closes [#3965](https://github.com/strongloop/loopback-next/issues/3965)
* update package locks ([cd2f6fa](https://github.com/strongloop/loopback-next/commit/cd2f6fa7a732afe4a16f4ccf8316ff3142959fe8))
* **build:** remove "dom" from the list of global libraries ([781cd1d](https://github.com/strongloop/loopback-next/commit/781cd1dd6d4b00b92a64741f3d0468a9b41c7e1a))
* **cli:** add eslint related dev dependencies to generated package.json ([fc18caf](https://github.com/strongloop/loopback-next/commit/fc18caf8a1966b9ab8d0afbc365afd216ebf4ede))
* **cli:** add fs-extra dependency as it's used by lb example ([3c74ffa](https://github.com/strongloop/loopback-next/commit/3c74ffa33653f0dd0a55484df3a7d4499dd674e2))
* **cli:** add missing PUT method in rest controller template ([8394c74](https://github.com/strongloop/loopback-next/commit/8394c74d5369d7dcce861c0ed30e033a3e7ce3ae))
* **cli:** add more exit checks to fail fast ([90c4406](https://github.com/strongloop/loopback-next/commit/90c4406697063261d3628b78071ca50f90139b09))
* **cli:** add type param to Filter and Where ([a9570bc](https://github.com/strongloop/loopback-next/commit/a9570bcca37cb1d5c1d6ab7dcc729822d74191fa))
* **cli:** allow `*` for version range ([0a42541](https://github.com/strongloop/loopback-next/commit/0a42541143636208832207669c0a2c36b7c9c1de))
* **cli:** allow base class exist for model config option ([9605ed1](https://github.com/strongloop/loopback-next/commit/9605ed14dc6f9e8023846d5201b7d81ee8989221))
* **cli:** allow other connectors to be used for repositories ([9a0d9a8](https://github.com/strongloop/loopback-next/commit/9a0d9a8e6c3e9e568260f3e5cf5ac538a4b21602))
* **cli:** app generator handles tildified project path. relevant test added ([7f7feaa](https://github.com/strongloop/loopback-next/commit/7f7feaa3770ef2c235f1107d133c03d32d372e47))
* **cli:** change class/file naming convention. Add prompt msg ([0b2a45b](https://github.com/strongloop/loopback-next/commit/0b2a45bb43c9f8196fdec1b3ca430b03d442bf39))
* **cli:** change enable setting check ([f4a9dc0](https://github.com/strongloop/loopback-next/commit/f4a9dc084ffa2aadf6997f0db93afef4ffac5304))
* **cli:** clean up template for life cycle observers ([6733610](https://github.com/strongloop/loopback-next/commit/67336104f44784f7c1f63d6758fc5e1319de413b))
* **cli:** datasource class being referenced in generators ([6d345f7](https://github.com/strongloop/loopback-next/commit/6d345f745068267cb447a557134bfd070ed98a57))
* **cli:** discover prompt exits after generating ([8ba0dd5](https://github.com/strongloop/loopback-next/commit/8ba0dd504960a197d87c4dacd2a6f5d058cce634))
* **cli:** do not install deps for built-in connectors ([2e035a5](https://github.com/strongloop/loopback-next/commit/2e035a539a5c0e72578bd8af5132f7f8a23379e6))
* **cli:** enable --resolveJsonModule for plain tsconfig ([26af3d9](https://github.com/strongloop/loopback-next/commit/26af3d9592a46441524afe2aae8dab71e6ed36f1))
* **cli:** enforce an empty object on connectors without settings property ([111442b](https://github.com/strongloop/loopback-next/commit/111442b313ce8d3ba3061afade800ae08e000fc0)), closes [#1697](https://github.com/strongloop/loopback-next/issues/1697)
* **cli:** escape char sequences for javascript comments ([83ff105](https://github.com/strongloop/loopback-next/commit/83ff105ef4241bc120529e79dc530dfac2e425ab))
* **cli:** fix prompt for base repository class ([b429729](https://github.com/strongloop/loopback-next/commit/b4297299d8075a5ed13c037117e9b1043da27a8d)), closes [#2429](https://github.com/strongloop/loopback-next/issues/2429)
* **cli:** fixed ds names that were hyphened ([568307c](https://github.com/strongloop/loopback-next/commit/568307c45c1d32bb6be98ebd3851bee14d82e6cc)), closes [#1791](https://github.com/strongloop/loopback-next/issues/1791)
* **cli:** fixes final datasource class name on repository and service ([d0994af](https://github.com/strongloop/loopback-next/commit/d0994af048d04e44373c35473bcad45967714e60)), closes [#1771](https://github.com/strongloop/loopback-next/issues/1771)
* **cli:** force test host to be HOST env var or ipv4 interface ([1664d4f](https://github.com/strongloop/loopback-next/commit/1664d4fa546aa7d9f4ca2e4cbedf2b168549954d))
* **cli:** generate correct index.js without loopback build ([1c8cb3e](https://github.com/strongloop/loopback-next/commit/1c8cb3e462d6129bb0cbb3fc2b15030a834b87b2))
* **cli:** generate matching arg names for repository constructors ([190fbf3](https://github.com/strongloop/loopback-next/commit/190fbf3c51ade590aba282e90bdeade6da6f1883))
* **cli:** generate operation only for the 1st tag to avoid duplicate routes ([4843a1f](https://github.com/strongloop/loopback-next/commit/4843a1f8d1b590c92ea9410d670208c3b56914ba))
* **cli:** generate property.array for array of simple types ([ec80d9a](https://github.com/strongloop/loopback-next/commit/ec80d9a8e6eff2dc8eb13f78edb0e8bcdd494af5))
* **cli:** improve openapi code generation for naming and typing ([af20548](https://github.com/strongloop/loopback-next/commit/af20548050434898752295d920ffbe716bfe007b))
* **cli:** keep or escape property names for models ([cb308ad](https://github.com/strongloop/loopback-next/commit/cb308add60bbe938c8e85812676eb817e9e0efc9))
* **cli:** make sure tsbuildinfo is removed by the clean script ([3fdc0b1](https://github.com/strongloop/loopback-next/commit/3fdc0b1483d288172e556903baa070854e225d0e))
* **cli:** rearrange interceptor cli prompts ([0b2ed34](https://github.com/strongloop/loopback-next/commit/0b2ed345d03452929689731911f3e9c6db5279be))
* **cli:** remove -p option from eslint ([d2ffd80](https://github.com/strongloop/loopback-next/commit/d2ffd80352cc72a5cf3377cc46b7b6b6464dc236))
* **cli:** remove extra SPACE at EOL in help output ([aeaf793](https://github.com/strongloop/loopback-next/commit/aeaf7938e3cfe9c49a18c6e0f94b6c14f664092c))
* **cli:** remove license header from test code template ([1fd35f4](https://github.com/strongloop/loopback-next/commit/1fd35f484093f0e996a4eab8f714620fd392ba5d))
* **cli:** set `required: true` in property decoration for openapi ([3c37286](https://github.com/strongloop/loopback-next/commit/3c372868196ee7e18d8532f00c624c3f72378bf0))
* **cli:** update tsconfig template excludes ([1fcc463](https://github.com/strongloop/loopback-next/commit/1fcc4633af333b56d0ba978e58fbc29778861215)), closes [/github.com/strongloop/loopback-next/pull/4707#issuecomment-590255940](https://github.com//github.com/strongloop/loopback-next/pull/4707/issues/issuecomment-590255940)
* **cli:** updated OAS 'Date' JS Type Mapping to 'string' ([839caa9](https://github.com/strongloop/loopback-next/commit/839caa92038d5ba8548106cd4136ee40d9abf679))
* add model/entity descriptions ([8156f9d](https://github.com/strongloop/loopback-next/commit/8156f9d32aac3a0461b617a01cde9c319a1cceca))
* address violations of "no-floating-promises" rule ([0947531](https://github.com/strongloop/loopback-next/commit/0947531d69d07839a21ea7575cfc08580086841f))
* change service generator ds to uppercase ([83840a3](https://github.com/strongloop/loopback-next/commit/83840a3b8b58c75a840d3ab0f99f72c0870c05e3))
* fix conflict ([6302101](https://github.com/strongloop/loopback-next/commit/630210117365e8d89f8dd3b797f0b0096936b79e))
* **cli:** git-ignore all "dist*" dirs in scaffolded projects ([1cab517](https://github.com/strongloop/loopback-next/commit/1cab517dc9de7023c39f56d20451144551914d33))
* **cli:** increase timeout for app generation tests ([c51383d](https://github.com/strongloop/loopback-next/commit/c51383d529ba18173d3c684e2ad659f4bb4712c7))
* **cli:** remove no-any warning from model template ([264aa28](https://github.com/strongloop/loopback-next/commit/264aa2883cfa9faaffa2ed974ca5960da810266d))
* **cli:** removed unused dependencies from project template ([3907df4](https://github.com/strongloop/loopback-next/commit/3907df404522508ffa080f66fc731c4acaf01258))
* **cli:** set glob options to support windows paths with special chars ([9a84ef0](https://github.com/strongloop/loopback-next/commit/9a84ef0598163ece84764605a29ed195c3165c93))
* change unmatched html tags, remove redundant 'px' from 0 ([46d08f6](https://github.com/strongloop/loopback-next/commit/46d08f6dfc00db31bbc3d652d2c71cd8ae367c26))
* clean up dataSource usage ([69506a4](https://github.com/strongloop/loopback-next/commit/69506a44cf25d3c8d0b50d0758e8f5b808852917))
* discover uses owner instead of schema ([ed588b6](https://github.com/strongloop/loopback-next/commit/ed588b62e0e3215399921972d2b1e65de64d73e2))
* update usage of `x-ts-type` for schemas ([57c694e](https://github.com/strongloop/loopback-next/commit/57c694e862570b53c2427f44e80012166bbde00e))
* **cli:** add esnext.asynciterable to lib for typescript ([83a8036](https://github.com/strongloop/loopback-next/commit/83a80361cb16b1a02e96b98d9f710bf71db16a40))
* **cli:** change model template to properly render array types ([2d43a61](https://github.com/strongloop/loopback-next/commit/2d43a61b5f6c50165f410ded26c0c994f6fe2ded))
* **cli:** install dependencies for clones examples ([5774f1f](https://github.com/strongloop/loopback-next/commit/5774f1f64cc5982b3be6a705e3695a48d730069c))
* **cli:** remove deleteAll endpoint from REST Controller template ([34eba34](https://github.com/strongloop/loopback-next/commit/34eba3498528fe70fa9e64e8582d30a5b255e35b))
* **cli:** remove dist-util from project templates ([f6c3048](https://github.com/strongloop/loopback-next/commit/f6c3048dac41ebe99ab772ac181df27073124427))
* **cli:** rename repository/service feature flags ([c089299](https://github.com/strongloop/loopback-next/commit/c089299f464893129e643fc0bc5d829920f9a809))
* **cli:** tweaks to templates ([6f1d7bb](https://github.com/strongloop/loopback-next/commit/6f1d7bbea0d5c78bd02d4ad52a4c8b4fa3a4e3f8))
* **cli:** update template with responses object ([a2bbbc9](https://github.com/strongloop/loopback-next/commit/a2bbbc922f4c4cb141b05de81c20e37b1646de5c))
* **cli:** use rimraf to replace rm -rf ([479f363](https://github.com/strongloop/loopback-next/commit/479f363da13af48f99c7835aa7d953ea22d1f33c))
* import package in template ([14bb6a5](https://github.com/strongloop/loopback-next/commit/14bb6a5c1fec69f93b7dd8937fbc449b5724dd6c))
* make `lb model` prompts clearer ([2ec4d2f](https://github.com/strongloop/loopback-next/commit/2ec4d2f87f0ca84af8b0707c992b4055ae734fd1))
* modelSettings is stringified properly [#2915](https://github.com/strongloop/loopback-next/issues/2915) ([84072ec](https://github.com/strongloop/loopback-next/commit/84072ece2ac9356edd8611b5ecfb195741df6ea7))
* remove extra imports for mixin dependencies ([35b916b](https://github.com/strongloop/loopback-next/commit/35b916b2d4aac457edf62956e35b2057a3794b00))
* remove forgotten references to tslint ([faa0a92](https://github.com/strongloop/loopback-next/commit/faa0a92d09156c14124665ae7a8138e03b107bb3))
* **build:** fix tslint config and slipped violations ([22f8e05](https://github.com/strongloop/loopback-next/commit/22f8e056dfd7834da4073b2af8d3ebe7cd9f7e3d))
* **cli:** add `--allow-console-logs` to app npm test script ([5823a18](https://github.com/strongloop/loopback-next/commit/5823a183ef60ddd91b2f575eedc117fde308d0cd))
* **cli:** add empty logs to better format model prompts ([60b3d57](https://github.com/strongloop/loopback-next/commit/60b3d571af043b6eaf519429e440837cc23c0e03))
* **cli:** adds the <idtype> on param.path for those methods in the rest controller template parsing ([c526b99](https://github.com/strongloop/loopback-next/commit/c526b996e77a921a971d7cd8a07909e51d45a0a9))
* **cli:** allow path level parameters for openapi ([55b041a](https://github.com/strongloop/loopback-next/commit/55b041a7cd393e720c99cd42f82e7ca45b191522))
* **cli:** escape identifiers with conflicting name as decorators ([6d71439](https://github.com/strongloop/loopback-next/commit/6d714395572e8845d712bf3c41c97077f6ea7050))
* **cli:** exit gracefully if the project name fails validation ([dfdf090](https://github.com/strongloop/loopback-next/commit/dfdf090b8da1a542cb71a0051165f677e7d4b59c))
* **cli:** fix app templates with boot and sequence ([81272e8](https://github.com/strongloop/loopback-next/commit/81272e8e03b5a47608fad9ef0f2b42a1ede555dd))
* **cli:** fix cli rest controller generator template ([cc9591d](https://github.com/strongloop/loopback-next/commit/cc9591d1b3e181f8039d9fb3b206b23fce35b468))
* **cli:** fix controller.integration.js tests and refactor ([f3edbd9](https://github.com/strongloop/loopback-next/commit/f3edbd99275cd42b4371671623e322d27c5b7e2a))
* **cli:** fix templates & move some utils to base generator ([1a5cbf8](https://github.com/strongloop/loopback-next/commit/1a5cbf80e848c39fbad66d6e7ea186da7d7235ed))
* **cli:** install deps if necessary for datasource ([4c605b0](https://github.com/strongloop/loopback-next/commit/4c605b0d239805185534ad155d0b14abc519967b))
* **cli:** make download-connector-list more robust ([a4c2ce0](https://github.com/strongloop/loopback-next/commit/a4c2ce0fd044fd5ad6e7a93c83193ba1ac0a3146))
* **cli:** make sure --applicationName is honored ([526e6ca](https://github.com/strongloop/loopback-next/commit/526e6ca0bed5058894bbfb094e09e63313a7c13b))
* **cli:** make sure the item type is imported for an array in openapi spec ([91b2381](https://github.com/strongloop/loopback-next/commit/91b2381e94e0872973077a10429eff7715063000))
* **cli:** move sequence customization to app constructor ([4ee3429](https://github.com/strongloop/loopback-next/commit/4ee34293d91b34a1773840f108d758f3312fe69b))
* **cli:** remove automatic license generation ([537ff86](https://github.com/strongloop/loopback-next/commit/537ff867c25e2ee22821c06f056c152546ecf531))
* **cli:** reorder where and body in CLI template for updateAll and make where optional ([c875707](https://github.com/strongloop/loopback-next/commit/c87570742b7993789da6ec43dfd8a9583873e223))
* **cli:** setup controller generator after adding properties ([b0ee417](https://github.com/strongloop/loopback-next/commit/b0ee4173b66606b7734ab06b3ba59bbab6dcbc04))
* **cli:** simplify HTTP server setup in acceptance tests ([aa0e2f7](https://github.com/strongloop/loopback-next/commit/aa0e2f77270183874f245bd2e97f5367db7a553c))
* **cli:** support updating multiple index.ts files ([1e92f4f](https://github.com/strongloop/loopback-next/commit/1e92f4f3196fefe0c79ac44ae1e5521b62a84989))
* **cli:** tweak getArtifactList to return pascalCased strings ([b3bb208](https://github.com/strongloop/loopback-next/commit/b3bb208cb4c8550a0c1635366180e49094888a4f))
* **cli:** update successful creation message ([d602ded](https://github.com/strongloop/loopback-next/commit/d602ded952f1c7a6f3e137349e63fbdf71a922ef)), closes [#886](https://github.com/strongloop/loopback-next/issues/886)
* **cli:** use this.exit instead of throwing an error ([8d25a79](https://github.com/strongloop/loopback-next/commit/8d25a796969385e84d0d6e8c17ab4bb6f0d40f72))
* add new openapi package ([#829](https://github.com/strongloop/loopback-next/issues/829)) ([dac9320](https://github.com/strongloop/loopback-next/commit/dac9320b625f2c747af14c266a3fd690879564ab))
* Add start script for apps ([5ba3734](https://github.com/strongloop/loopback-next/commit/5ba37347a6715abb4d4971547a7addf01bec7e6c))
* apply source-maps to test errors ([76a7f56](https://github.com/strongloop/loopback-next/commit/76a7f56cd1166d4407f2a50b188db91a74f7deae)), closes [#602](https://github.com/strongloop/loopback-next/issues/602)
* change file names to fit advocated naming convention ([0331df8](https://github.com/strongloop/loopback-next/commit/0331df8e188f2ba857d04d6a6aff579c7b7726c1))
* make mocha self-contained with the source map support ([7c6d869](https://github.com/strongloop/loopback-next/commit/7c6d86975a379388f433110df91b1bf0e2e4b94d))
* replace gulp-rename with our own implementation ([f8349d4](https://github.com/strongloop/loopback-next/commit/f8349d48c12e59acba2e144b55c640f84379db6a))
* **cli:** update tsconfig.json to include index.ts ([dc5107c](https://github.com/strongloop/loopback-next/commit/dc5107cc3d43281e2918e778142e86808571197e))
* **cli:** use pascalCase for toClassName to handle '-' ([861256c](https://github.com/strongloop/loopback-next/commit/861256c4e893f6b26e1d2b81d69e614ab5de9e9f))
* clean up the app run test ([c0d3731](https://github.com/strongloop/loopback-next/commit/c0d37316a22d7111b4df9693c69f15880b584a18))
* Fix cli templates ([2ebf69f](https://github.com/strongloop/loopback-next/commit/2ebf69f490c04d831d747a010e85717b53d260dc))
* Fix CLI to include .gitignore in the templates ([842a191](https://github.com/strongloop/loopback-next/commit/842a19135d06b9493ceb64ddee496ffe0476b0e9))
* Fix help text for cli ([8f41c2e](https://github.com/strongloop/loopback-next/commit/8f41c2e3d105215ae8c425de0f5d8cf4309e1e22))
* fix typo ([6ecc13c](https://github.com/strongloop/loopback-next/commit/6ecc13ceacb98361031839189add2a4580d0ce4f))
* remove unused juggler import ([0121c10](https://github.com/strongloop/loopback-next/commit/0121c1044efb8cbc4027cb6ec2f7b4c132f33cf4))
* template ([cf9cf04](https://github.com/strongloop/loopback-next/commit/cf9cf0460e403edd6f348483ef1573ff07439be7))
* update to the most recent lodash version ([65ee865](https://github.com/strongloop/loopback-next/commit/65ee8656763b3b41a0acb86d7a6c4482472abc02))
* update version of nyc ([f8db27c](https://github.com/strongloop/loopback-next/commit/f8db27c474430d01693538d6a6dc2200b9f4ca6d))
* use lerna to collect versions for loopback modules ([2956bf9](https://github.com/strongloop/loopback-next/commit/2956bf94fa7d4c23237abc6562f927f8cc430464))
* **cli:** remove copyright header from generated app ([#991](https://github.com/strongloop/loopback-next/issues/991)) ([c987b28](https://github.com/strongloop/loopback-next/commit/c987b28b07a210444b3c1b593bfd4c98896be300)), closes [#944](https://github.com/strongloop/loopback-next/issues/944)
* **cli:** rework template to use inline param decoration ([e3ef86b](https://github.com/strongloop/loopback-next/commit/e3ef86b8dcc19a68ffba470468db2cadc5b6c909))
* **cli:** use prerelease versioning for templates ([81aaa6f](https://github.com/strongloop/loopback-next/commit/81aaa6f9abe357c47ef225d157c3eb5e407761ee))
* **repository:** change the way array property definition is built for the juggler ([2471c88](https://github.com/strongloop/loopback-next/commit/2471c88094d076bf9a0658a0d8ae656118d3037f))


### Build System

* drop dist6 related targets ([#945](https://github.com/strongloop/loopback-next/issues/945)) ([a2368ce](https://github.com/strongloop/loopback-next/commit/a2368cee598c131a826ee42e347266c6e25ae582))


### chore

* remove support for Node.js v8.x ([4281d9d](https://github.com/strongloop/loopback-next/commit/4281d9df50f0715d32879e1442a90b643ec8f542))


### Code Refactoring

* renamed example-getting-started to example-todo ([7a09f1b](https://github.com/strongloop/loopback-next/commit/7a09f1bc869154149d34746573474bea2eedbf77))


### Features

* **build:** enable incremental compilation ([2120712](https://github.com/strongloop/loopback-next/commit/2120712e0b0bc12f0cf4a313ae3312f88d2c3bfe))
* **cli:** add `--docker` option to generate docker files ([4cd2442](https://github.com/strongloop/loopback-next/commit/4cd24424f6ec937a3308b8e3c542677e5e59618f))
* **cli:** add `connectors.json` ([802529e](https://github.com/strongloop/loopback-next/commit/802529ed0ba1e3a9f9ef417b4b8b4a7459589682))
* **cli:** add `lb4 copyright` to generate/update file headers ([abc6111](https://github.com/strongloop/loopback-next/commit/abc6111148a831f47308f4284215ac9564f3c12b))
* **cli:** add `lb4 observer` command to generate life cycle scripts ([d54651d](https://github.com/strongloop/loopback-next/commit/d54651d8309350b64c9e1f8fe6e4144da4686461))
* **cli:** add `lb4 relation` command ([75939a4](https://github.com/strongloop/loopback-next/commit/75939a4a144b3068ff2890394c178faad58d7458))
* **cli:** add `lb4 rest-crud` command to generate model endpoints from model/datasource ([38fd41e](https://github.com/strongloop/loopback-next/commit/38fd41e26cd5abf52e69d0b275a730b195be813a))
* **cli:** add `tslib` as a template dependency ([267b074](https://github.com/strongloop/loopback-next/commit/267b074a93dc7483333486e2b381b3d7168ebc79)), closes [#4676](https://github.com/strongloop/loopback-next/issues/4676)
* **cli:** add `updateLicense` to `lb4 copyright` command ([535df04](https://github.com/strongloop/loopback-next/commit/535df04df75d39f2a5e36740ae1e0de27359af78))
* **cli:** add build:globalize option ([3c42077](https://github.com/strongloop/loopback-next/commit/3c4207730cd87e9399b18969c71515d44991e547))
* **cli:** add default option for gracePeriodForClose to configure http/https close ([5a243e2](https://github.com/strongloop/loopback-next/commit/5a243e280868c4b83d7b5685f326a44baf5cbd9a))
* **cli:** add hasOne relation type to `lb4 relation` ([3046f3e](https://github.com/strongloop/loopback-next/commit/3046f3e9ca29225c2ca64567af0be337a6fa5b00))
* **cli:** add inclusion resolver to lb4 relation ([199e1bc](https://github.com/strongloop/loopback-next/commit/199e1bc84a6c57fe650db9588bdb121d27eca7a3))
* **cli:** add lb4 discover for model discovery ([35f719c](https://github.com/strongloop/loopback-next/commit/35f719ce1815a177e60aa83150e346a77c3d4ce3))
* **cli:** add lb4 interceptor command to generate interceptors ([58017b6](https://github.com/strongloop/loopback-next/commit/58017b64a6b72999a1db86d62b93eac8284a6d84))
* **cli:** add lb4 update command to check/update project dependencies ([54d1896](https://github.com/strongloop/loopback-next/commit/54d1896f63705b6938fe74ba2c21ad0b4d9bea23))
* **cli:** add lifecycle support for datasources ([8573173](https://github.com/strongloop/loopback-next/commit/8573173422092a1c69c31fd53e68f98dfa612969))
* **cli:** add new command `import-lb3-model` (EXPERIMENTAL) ([2e465e6](https://github.com/strongloop/loopback-next/commit/2e465e6be503e3145342614650c177ecca89221e))
* **cli:** add property modelSettings ([e0f75ac](https://github.com/strongloop/loopback-next/commit/e0f75ace756d8b5479ad5b66e9b2803e4b419eef))
* **cli:** add static BINDING_KEY prop to non-global interceptors ([5fbd95f](https://github.com/strongloop/loopback-next/commit/5fbd95f47f67207d7e0430d8c08e2a9738e685ae))
* **cli:** add strict prompt to model generator ([a68d78b](https://github.com/strongloop/loopback-next/commit/a68d78be01d0da2b1f73b2866167c722bcfd960d))
* **cli:** add the ability to check latest cli version ([869d1e4](https://github.com/strongloop/loopback-next/commit/869d1e4b19ba5483521a632a9c8af4b39ca7254f))
* **cli:** add translations for 14 languages ([31bc951](https://github.com/strongloop/loopback-next/commit/31bc951c405e3bf21bc10875bc1c8cc6a1bab794))
* **cli:** allow --exclude <glob-pattern> to not update headers for excluded files ([a81ce7e](https://github.com/strongloop/loopback-next/commit/a81ce7e1193f7408d30d984d0c3ddcec74f7c316))
* **cli:** allow different naming convention for discover ([298e66e](https://github.com/strongloop/loopback-next/commit/298e66e7430406d2615f7826c770ee126ae56d18))
* **cli:** automatically include base models when importing LB3 models ([9d5f8a7](https://github.com/strongloop/loopback-next/commit/9d5f8a771f475c1597bc5e1d22efc06e4940cbb7))
* **cli:** enable source map for npm start script ([1882240](https://github.com/strongloop/loopback-next/commit/1882240c623c3e68b8b90630296e622b6193a1bd))
* **cli:** generate datasource json with '.config.json` extension ([51d8f7b](https://github.com/strongloop/loopback-next/commit/51d8f7b20ec59f888fd6d0634efb47d111f00ef7))
* **cli:** implement dark mode in the app template ([6939546](https://github.com/strongloop/loopback-next/commit/6939546d2b0cba59d8a70ce500dbf1b6e42d682b))
* **cli:** import LB3 models with a custom base class ([aa3dc12](https://github.com/strongloop/loopback-next/commit/aa3dc12e32bd9c297742c9b54224644ea81f7526))
* **cli:** improve `lb4 service` to generate local service classes/providers ([f743008](https://github.com/strongloop/loopback-next/commit/f7430086e116c7bd322fccdaae10e9a41a3e8f57))
* **cli:** improve logging from processing of config & options ([41a39c1](https://github.com/strongloop/loopback-next/commit/41a39c17a595bb92ea928d93318cc353e3e19218))
* **cli:** improve scaffolding of complex model settings ([5035c63](https://github.com/strongloop/loopback-next/commit/5035c63e5abd018043d10fbce00fa96c9ec68c62))
* **cli:** modify Controller templates to allow partial updates via PATCH ([c7c6695](https://github.com/strongloop/loopback-next/commit/c7c6695759d68031907c78eee9bb4b02bb4a34b0))
* **cli:** modify controller templates to exclude id from POST requests ([4c1ce67](https://github.com/strongloop/loopback-next/commit/4c1ce67ede71238d6744a37f2ae30ef6ae8c2db8))
* **cli:** print help on updating snapshots when some snapshots were not matched ([c6959b8](https://github.com/strongloop/loopback-next/commit/c6959b87afc694269b4021a005cc2be1991d96d3))
* **cli:** print options for `lb4 copyright --help` and update docs ([f23ecb7](https://github.com/strongloop/loopback-next/commit/f23ecb741bcd589767d94acf2a394efddfe37ff6))
* **cli:** skip inherited props & settings when importing a LB3 model ([97c8b05](https://github.com/strongloop/loopback-next/commit/97c8b0535f32dc5271d84fa8b66009126ddae8e1))
* **cli:** store original cli version in .yo.rc.json ([3b7db55](https://github.com/strongloop/loopback-next/commit/3b7db55fb3572649deeb6cd3bc33f749f234e31a))
* **cli:** wrap license text with a max line length of 80 chars ([a9046ed](https://github.com/strongloop/loopback-next/commit/a9046ed639076bf8e06a0952c0ae2a298f92c330))
* **cli:** write snapshot files in parallel ([a16ae34](https://github.com/strongloop/loopback-next/commit/a16ae3437594ec2074ed62d6cea81d02cfcf1a6c))
* **eslint-config:** enable "no-misused-promises" rule ([88d5494](https://github.com/strongloop/loopback-next/commit/88d5494a29fd6a642c4ef25f0e427f529c9b9456))
* **example-file-upload-download:** add file download support ([12afd6b](https://github.com/strongloop/loopback-next/commit/12afd6b47ee1d371c68d03bd86c03d49b5f43b8d))
* **example-rest-crud:** add example showing CrudRestApiBuilder ([ea37afb](https://github.com/strongloop/loopback-next/commit/ea37afb8d9e4ca9aef032b84e349e918d945e8ee))
* .vscode add typescript lint rules ([e8eb371](https://github.com/strongloop/loopback-next/commit/e8eb371af12ced96d0c87c88eae2be40b76c7911)), closes [#4584](https://github.com/strongloop/loopback-next/issues/4584)
* add `tslib` as dependency ([a6e0b4c](https://github.com/strongloop/loopback-next/commit/a6e0b4ce7b862764167cefedee14c1115b25e0a4)), closes [#4676](https://github.com/strongloop/loopback-next/issues/4676)
* add express example ([dd2400e](https://github.com/strongloop/loopback-next/commit/dd2400ebf39e6809a68d37591fcf8230e66e5516))
* add greeter-extension example ([9b09298](https://github.com/strongloop/loopback-next/commit/9b092986e6735b1afbd819daae4a9b37cbf456e7))
* add lb3 application ([bf60011](https://github.com/strongloop/loopback-next/commit/bf60011ad2fb6e51b80c067252291ddfd26994cd))
* add navigational properties to find* methods ([1f0aa0b](https://github.com/strongloop/loopback-next/commit/1f0aa0b23c86bf0059f718410d071d2641ddeb86))
* add title property to ping response schema definition ([b8b7490](https://github.com/strongloop/loopback-next/commit/b8b7490ce29d0973208ba38c3365de9091b7a795))
* lb3 migration tests for models customized with db metadata ([c58cc11](https://github.com/strongloop/loopback-next/commit/c58cc117b6e7a75e1920ce873a9cb4b98ff1058b))
* leverage isactive for transaction ([fc94437](https://github.com/strongloop/loopback-next/commit/fc9443787039d4a1db3008a0141f5693f95bfbd4))
* remove openapi-v3-types package ([2a93395](https://github.com/strongloop/loopback-next/commit/2a93395540da45cb59ea00763177bb1116a2ae4d))
* replace tslint with eslint ([44185a7](https://github.com/strongloop/loopback-next/commit/44185a744f772566f2cb186ba8cd288fed65d04c))
* update examples and docs to use getModelSchemaRef ([99758b1](https://github.com/strongloop/loopback-next/commit/99758b1905f66e80e98ae7877a0ead5b55491a62))
* use [@param](https://github.com/param).filter and [@param](https://github.com/param).where decorators ([896ef74](https://github.com/strongloop/loopback-next/commit/896ef7485376b3aedcca01a40f828bf1ed9470ae))
* **cli:** improve UX of multi-item selection ([077f38c](https://github.com/strongloop/loopback-next/commit/077f38ceccb2e1568aed69dbe00e298b30106c30))
* **cli:** recognize PK properties defined as `{id: 1}` ([1094509](https://github.com/strongloop/loopback-next/commit/10945093e17b260686e532804f71965d7b156606))
* **cli:** update controller template to enable filter for findById endpoint ([b0ce84b](https://github.com/strongloop/loopback-next/commit/b0ce84b79158cadf2f53bbe627da4d8196f0543f))
* **cli:** update templates to enable esModuleInterop and default imports from non-ES modules ([83e628b](https://github.com/strongloop/loopback-next/commit/83e628bdf5834102aa9042e52a3d7e608d2d1754))
* use descriptive title to describe schema of POST (create) request bodies ([8f49a45](https://github.com/strongloop/loopback-next/commit/8f49a4552f8a4792b2e45b631e6c7422c718e7c3))
* **cli:** normalize variable names for OpenAPI paths ([a3d0dfc](https://github.com/strongloop/loopback-next/commit/a3d0dfc6ffe2ea10d9f0aa33dc23b5a777fb5e8c))
* **cli:** scaffold test files to `src/__tests__` ([d3a3bea](https://github.com/strongloop/loopback-next/commit/d3a3bea252bd4d1a2111e7b4d1339ba615d0d3ae))
* **cli:** update templates to make use of getModelSchemaRef ([4147619](https://github.com/strongloop/loopback-next/commit/4147619216b57466b3efdb23cdf07a39165a11ca))
* **cli:** use a custom repository base class ([edbbe88](https://github.com/strongloop/loopback-next/commit/edbbe88a634df1326d0b8c1b54114d53100f75d4))
* always include tslint and typescript in project dev-dependencies ([e0df285](https://github.com/strongloop/loopback-next/commit/e0df285ee96634d4c5bdb92f39ea7fb43dda9a2c))
* use dependency instead of keyword to check loopback projects ([bb6ee51](https://github.com/strongloop/loopback-next/commit/bb6ee51698bf25c9aeaf66e2685ae71ed491b072))
* **cli:** `lb4 model` command to scaffold model files ([3593820](https://github.com/strongloop/loopback-next/commit/359382087e3cdcd791d77558bf0ac70c59474bac))
* **cli:** add basic scaffolding for lb4 service ([bed83b3](https://github.com/strongloop/loopback-next/commit/bed83b3af7d05c054345ad820cf32bfb1f0c2049))
* **cli:** add code template for default home page controller ([f4be330](https://github.com/strongloop/loopback-next/commit/f4be33075b09bc09daf691adcdf48db6282a7686))
* **cli:** add integration tests for lb4 service ([3731f5b](https://github.com/strongloop/loopback-next/commit/3731f5b45cca4f989e5236fc46bc31ebda6efb27))
* **cli:** add lb4 repository feature ([0397c04](https://github.com/strongloop/loopback-next/commit/0397c04c76ed757cdd5b92621511239fdada2fae)), closes [#1588](https://github.com/strongloop/loopback-next/issues/1588)
* **cli:** add repositorymixin and imports by a new switch ([be81131](https://github.com/strongloop/loopback-next/commit/be811315ae86a54baacef2f8a514486d43589c1c)), closes [#1594](https://github.com/strongloop/loopback-next/issues/1594)
* **cli:** add test for multiple repositories ([6e6faad](https://github.com/strongloop/loopback-next/commit/6e6faad19cad61c16141953807bc3fe7b44245c7))
* **cli:** add update notifier to remind cli upgrade ([61255cc](https://github.com/strongloop/loopback-next/commit/61255cc351ad45c90d9123164bfa85ba0692a90b))
* **cli:** add util shared functions and constants ([26915e5](https://github.com/strongloop/loopback-next/commit/26915e5762f9bad48010ee3506b671c8ebf43ac6))
* **cli:** allow annonymous schemas in openapi to be mapped to models ([eedec1e](https://github.com/strongloop/loopback-next/commit/eedec1e713ce6d277cde20a6bfe35644118cc27b))
* **cli:** ast-helper integration ([99a0bad](https://github.com/strongloop/loopback-next/commit/99a0bade325fa2f77fbc4bd1aa1f1e1874c590a4))
* **cli:** lb4 service install service-proxy if missing ([b086d2d](https://github.com/strongloop/loopback-next/commit/b086d2dfcffae5ab0bf895fa2c627fca07d936cb))
* **cli:** new projects load tslint config from `@loopback/tslint-config` ([5b9c329](https://github.com/strongloop/loopback-next/commit/5b9c329b7fd5eeeb5d450524437dc9887e700171))
* an extension adding a self-hosted REST API Explorer ([4c165c7](https://github.com/strongloop/loopback-next/commit/4c165c7aea092e54c89b72fc35b08478bdc6fb8f))
* scaffold DB migration script for new app projects ([f783f07](https://github.com/strongloop/loopback-next/commit/f783f078fa8a70b64f9a67a4c6dcc98e2d913f82))
* **cli:** change msg when no datasource or repository exists ([739676b](https://github.com/strongloop/loopback-next/commit/739676baabe6d0e2f2d7c82968104126bdc1fa2f))
* **cli:** lb4 service/repository shared scaffold ([9bafc6d](https://github.com/strongloop/loopback-next/commit/9bafc6de8357e247343deb5d152d8ed39235fa17))
* **cli:** use app.static for default home page ([1dcf169](https://github.com/strongloop/loopback-next/commit/1dcf169f299f94555cf8944bd3c7487628680e3f))
* deprecate dist-util package ([91a343c](https://github.com/strongloop/loopback-next/commit/91a343c4ab543ee7a815cf6f42d9011609c5be97))
* use resolveJsonModule to load datasource config ([73e19ff](https://github.com/strongloop/loopback-next/commit/73e19ff6a3649abd85d96b4139d16d503ee2ed62))
* **cli:** add lb4 model option to select base model class ([4c0ce80](https://github.com/strongloop/loopback-next/commit/4c0ce80d5505d3f6bb5ed8fd59675761531cdb3e)), closes [#1698](https://github.com/strongloop/loopback-next/issues/1698)
* **cli:** add responses for PingController.ping() ([ec52b89](https://github.com/strongloop/loopback-next/commit/ec52b89a8b103d4f99530ab10e3f908c24746698))
* **cli:** change location fixtures service/repository ([d4f5b5c](https://github.com/strongloop/loopback-next/commit/d4f5b5cfe426fa4be45ed7d536fc6ef603d906cf))
* **cli:** check project deps against cli template ([8d056c4](https://github.com/strongloop/loopback-next/commit/8d056c483e0400d5be81c9179d98f968f752cc5b))
* **example-todo-list:** add TodoList package/tutorial ([306d437](https://github.com/strongloop/loopback-next/commit/306d437e081188c135d3e2b69f4d8f04c7a5ed16))
* **repository:** return an object for count and updateAll ([c146366](https://github.com/strongloop/loopback-next/commit/c14636607303a9eddb5eaca2350177958d681aa6))
* add "filter" parameter to "find" endpoints ([7e1acfc](https://github.com/strongloop/loopback-next/commit/7e1acfc1e72da89e22421c8e94aaac3ba9083e0d))
* **build:** use options to control cli/shell run ([c4e8bce](https://github.com/strongloop/loopback-next/commit/c4e8bcebeebd347d9dc892d4d627bac2ae2f4349))
* **cli:** add --format to run lint:fix for generated code ([77f15c7](https://github.com/strongloop/loopback-next/commit/77f15c7b28da99f10b69578b0674f1e26ebc018e))
* **cli:** add cli for code generation from openapi ([1a1b12c](https://github.com/strongloop/loopback-next/commit/1a1b12cee351cf41afe5279fcd4f34c63656e9c2))
* **cli:** add CLI prompt for controller's http path name ([0f9c438](https://github.com/strongloop/loopback-next/commit/0f9c438acf54a1a72191de225746bb4d9ea044ec))
* **cli:** add comments for generated methods from openapi ([daa7f78](https://github.com/strongloop/loopback-next/commit/daa7f789b459fbfc5123cf3f6b28ad10d9054993))
* **cli:** add config and yes options ([5778a2a](https://github.com/strongloop/loopback-next/commit/5778a2a7564cc85a5c036504e82d19e9eb6170aa))
* **cli:** add lb4 datasource command ([b3844eb](https://github.com/strongloop/loopback-next/commit/b3844eb40729782203fb8442bcd5b52365444c57))
* **cli:** add scoped debug function ([8535c5e](https://github.com/strongloop/loopback-next/commit/8535c5e6e23e77662c0a8aa83e35af54672078d2))
* **cli:** add vscode config files ([3738b9c](https://github.com/strongloop/loopback-next/commit/3738b9c78caa825ed1d6f2f6a854d78129c6033b))
* **cli:** auto-generate / update index.ts for exports ([2998363](https://github.com/strongloop/loopback-next/commit/2998363c6ba6f11e25e5e598015fcb80ccad5510)), closes [#1127](https://github.com/strongloop/loopback-next/issues/1127)
* **cli:** Cleanup REST application tooling ([#774](https://github.com/strongloop/loopback-next/issues/774)) ([dc50ed8](https://github.com/strongloop/loopback-next/commit/dc50ed8f8e63a6a6e94ca44d8e97737cc848f49a))
* **cli:** download examples via npm ([43383f5](https://github.com/strongloop/loopback-next/commit/43383f5ff8ab98880e5a3bdb91d91c03e10c5ba5))
* **cli:** improve openapi handling of body and impl ([640b941](https://github.com/strongloop/loopback-next/commit/640b941af2b4b0601469a869fe62d5822d690bf7))
* Add exit() to abort generation ([c95aa23](https://github.com/strongloop/loopback-next/commit/c95aa23dbec6583475d3788c4f77413da951a671))
* add helper package "dist-util" ([532f153](https://github.com/strongloop/loopback-next/commit/532f15324f0378a951dbb7f101ce9df3bb3711ef))
* **cli:** generate REST controller with CRUD methods ([57fe858](https://github.com/strongloop/loopback-next/commit/57fe8589ea895f37384461d22e3363457df0ca11))
* **cli:** improve cli help/version/commands options ([715cc91](https://github.com/strongloop/loopback-next/commit/715cc91b1787a48772717d941602cb2704a1a2fe))
* **cli:** lb4 example [<example-name>] ([4286c0d](https://github.com/strongloop/loopback-next/commit/4286c0d26b0fde3a681f741429fdcaf6be45b06a))
* **cli:** remove default option for controller ([#768](https://github.com/strongloop/loopback-next/issues/768)) ([cc41fd6](https://github.com/strongloop/loopback-next/commit/cc41fd672cd17a2922106a70a50260a3580260b3))
* **cli:** replace hard-coded loopback module version in templates ([0a742d7](https://github.com/strongloop/loopback-next/commit/0a742d706895f5187417abbb74a6cc3c874b684d))
* **cli:** switch .template to .ejs ([#996](https://github.com/strongloop/loopback-next/issues/996)) ([a27e856](https://github.com/strongloop/loopback-next/commit/a27e856fa4ce1c63a9e20ae58baf0bdab6ab3df3))
* **cli:** Tooling for empty controller ([#762](https://github.com/strongloop/loopback-next/issues/762)) ([14e7897](https://github.com/strongloop/loopback-next/commit/14e789772b978b1e3e7bc5e26aadb3c8402fa7a0))
* **cli:** use `app.restServer.url` for console logs ([f31160c](https://github.com/strongloop/loopback-next/commit/f31160c4f675e89f7535d6e289d450c03645cdee))
* **context:** typed binding keys ([685195c](https://github.com/strongloop/loopback-next/commit/685195c27825844f2bba9fc177767cccb68a6ebf))
* **example-getting-started:** migrate into monorepo ([9478d8b](https://github.com/strongloop/loopback-next/commit/9478d8b0c3fc992c11f4ff0ea8cb326cb74a5750))
* **example-soap-calculator:** add soap web services integration example ([9a8d57c](https://github.com/strongloop/loopback-next/commit/9a8d57c9f4a2e36c77cb78465623f58b1d65c397)), closes [#1550](https://github.com/strongloop/loopback-next/issues/1550)
* **repository:** have [@repository](https://github.com/repository) take in constructor as arg ([3db07eb](https://github.com/strongloop/loopback-next/commit/3db07eb556c5462b5ac169dd2eae9b5db59bfaf4))
* **repository:** rework *ById methods to throw if id not found ([264f231](https://github.com/strongloop/loopback-next/commit/264f2317c3f7ffe02de43f1fb81d95e49d7d5661))
* **rest:** expose app.requestHandler function ([20a41ac](https://github.com/strongloop/loopback-next/commit/20a41ac7081a8cead0011447b5a8e5794a320ded))
* **service-proxy:** add service mixin ([fb01931](https://github.com/strongloop/loopback-next/commit/fb01931d4e193c21560811f4d6d078c89941fcfb))
* **testlab:** add createRestAppClient(), simplify usage in tests ([d75be77](https://github.com/strongloop/loopback-next/commit/d75be770dac236705e287bb86fc7b48246ff4653))
* @loopback/boot ([#858](https://github.com/strongloop/loopback-next/issues/858)) ([c2ca8be](https://github.com/strongloop/loopback-next/commit/c2ca8be6d026f869e06b047b9adcd6305afcca67))
* Add experimental CLI for LoopBack 4 ([707f692](https://github.com/strongloop/loopback-next/commit/707f69292a652a696a5d96b02f9f282f94049c0b))
* add private option for project generartion ([5c42be4](https://github.com/strongloop/loopback-next/commit/5c42be4c7a276ac4552150f9baed5ec5e650e6fc))
* upgrade from swagger 2 to openapi 3 ([71e5af1](https://github.com/strongloop/loopback-next/commit/71e5af10365b7fa6277cad8f6a216439610f19df))
* use stringifyObject instead of JSON.stringify for connector metadata ([da60ee7](https://github.com/strongloop/loopback-next/commit/da60ee79d48a7ec11f510ccdbecc878e28651237))
* **testlab:** create a test sandbox utility ([#877](https://github.com/strongloop/loopback-next/issues/877)) ([9526ba3](https://github.com/strongloop/loopback-next/commit/9526ba31d3529b3e8c18318b60a4c77f61cfc7a2))
* **testlab:** set port to 0 in givenHttpServerConfig ([90a0bfb](https://github.com/strongloop/loopback-next/commit/90a0bfbec3b5d78d3fd2e270cc1d063ca3f7d690))


### Performance Improvements

* update dockerfile to better version ([5494243](https://github.com/strongloop/loopback-next/commit/5494243b308349d03c84328617b66df8493dd0ed))


### BREAKING CHANGES

* Node.js v8.x is now end of life. Please upgrade to version
10 and above. See https://nodejs.org/en/about/releases.
* example-getting-started is now example-todo
* **rest:** `RestServer#handleHttp` was renamed to
`RestServer#requestHandler`.
* Support for Node.js version lower than 8.0 has been dropped.
Please upgrade to the latest Node.js 8.x LTS version.

Co-Authored-by: Taranveer Virk <taranveer@virk.cc>





# 3.0.0 (2020-04-17)


### Bug Fixes

* **cli:** add descriptions to features ([8a94f8f](https://github.com/strongloop/loopback-next/commit/8a94f8fc1c21d056b51904ee6f09a8d7899b2bcc))
* **cli:** add ibmi, relocate db2z for affinity to other db2s ([76bb470](https://github.com/strongloop/loopback-next/commit/76bb470e8feba478796741d09b35fdb7549b79ab))
* **cli:** add missing examples to CLI ([221d8d0](https://github.com/strongloop/loopback-next/commit/221d8d00973e28475aee7771c521fd06b2723ef4))
* **cli:** add validation-app to example cli ([36a70b3](https://github.com/strongloop/loopback-next/commit/36a70b39062e3e8d467a3a820a51a58ffaefb613))
* **cli:** allow `-h` for help ([f74092e](https://github.com/strongloop/loopback-next/commit/f74092eb20acd9e9ab1875c56ccbcb2e55f4c1da))
* **cli:** append "Service" in service generator ([c8fb805](https://github.com/strongloop/loopback-next/commit/c8fb8058c375fe22b0c64988c7ff91c1024084ed))
* **cli:** belongsto property generation ([82a95d4](https://github.com/strongloop/loopback-next/commit/82a95d4cba881a715dbf0cb58cad8560e8f755a4))
* **cli:** correct root directory in test ([f951052](https://github.com/strongloop/loopback-next/commit/f951052a12b82923b18f781c3b0292de0a2c8634)), closes [#4425](https://github.com/strongloop/loopback-next/issues/4425)
* **cli:** disconnect the datasource after the model was discovered ([ad30c61](https://github.com/strongloop/loopback-next/commit/ad30c61e8f35795bef6c2aef893884e520561832))
* **cli:** disgard any changes if lb4 `relation` fails ([08dc87c](https://github.com/strongloop/loopback-next/commit/08dc87ca3f654f3669c5ffb130e1e4cbf0dcebef))
* **cli:** emit correct property definitions for built-in types ([6a972db](https://github.com/strongloop/loopback-next/commit/6a972db819aab9f831a26da4f2f81abe3c26efe7))
* **cli:** emit correct property definitions for built-in types ([9d34f23](https://github.com/strongloop/loopback-next/commit/9d34f23bd8eadaed9a38ca95339384bddce041b2))
* **cli:** exclude *.tsbuildinfo from Docker image ([581a0f3](https://github.com/strongloop/loopback-next/commit/581a0f36f1fc34be2d0b3a957d66a268b4689380))
* **cli:** extract messages for generators ([2f572bd](https://github.com/strongloop/loopback-next/commit/2f572bd75883420e38bfaa780bc38445aec92e65))
* **cli:** extract messages for generators ([b264d60](https://github.com/strongloop/loopback-next/commit/b264d60752e8487c0649b1f47419dbc06a111384))
* **cli:** fix has many relation controller attribute ([5aa83df](https://github.com/strongloop/loopback-next/commit/5aa83df2fe3c38165174328d26726690f6cbafb5))
* **cli:** fix schema title for POST operation in relation controllers ([34a2077](https://github.com/strongloop/loopback-next/commit/34a2077979dd54aceaa0fa40d14b97adf4dfb881))
* **cli:** fix typo in cli relation tests ([466f79b](https://github.com/strongloop/loopback-next/commit/466f79b900fbd3b10b6eb7dafab2ebe46f7f745d))
* **cli:** handle missing target artifact dir ([ba34838](https://github.com/strongloop/loopback-next/commit/ba348384b045d6976e257f09cdc610766568abfa))
* **cli:** ignore stdin when config is provided via CLI args ([3d64cfe](https://github.com/strongloop/loopback-next/commit/3d64cfebe19ae26b66ae7639a8ddffbf3dd54061))
* **cli:** improve message for model discovery code generation ([15c11d4](https://github.com/strongloop/loopback-next/commit/15c11d4b6644182b4bd5fc6be34fe805104fc3ca))
* **cli:** include intl in package.json ([097724b](https://github.com/strongloop/loopback-next/commit/097724bc0d38ce6a499d2a26092a570451b5e026))
* **cli:** index file should be updated. Add relation interface to model template ([7fd9b88](https://github.com/strongloop/loopback-next/commit/7fd9b88626a7d1b4a227077a4334fdbd00edea0d))
* **cli:** make sure generated package.json is well formatted ([38be23f](https://github.com/strongloop/loopback-next/commit/38be23f46f02ea380f1290f12704078925d264cd))
* **cli:** make sure properties are correctly generated ([369d58b](https://github.com/strongloop/loopback-next/commit/369d58bf7f591968473ecdc7ea48939a560413d4))
* **cli:** make the StatusConflicter compatible with the base Conflicter ([b6a1af9](https://github.com/strongloop/loopback-next/commit/b6a1af98ccb0705ee3a802df68bb590ec74473f5))
* **cli:** move `loopback` to devDependencies ([7701cab](https://github.com/strongloop/loopback-next/commit/7701cab4a18f37be62269d075045a0d0b8eb7d57))
* **cli:** reject datasources with no name property for service generator ([cc871e5](https://github.com/strongloop/loopback-next/commit/cc871e509b5c3a0de2ac0dc1108332285aa808a4))
* **cli:** remove `All rights reserved.` from the header for LICENSE ([ce78b2a](https://github.com/strongloop/loopback-next/commit/ce78b2a81314aacb46b525121ecdfdbd97d0d94e))
* **cli:** remove unused imports from the crud controller template ([848272d](https://github.com/strongloop/loopback-next/commit/848272d980e94bc9f0878e678de12a336c0d8b8a))
* add class name separation to multiple class names output ([fc79bf5](https://github.com/strongloop/loopback-next/commit/fc79bf572666284842316c0a88b42bd7246ef49d)), closes [#3350](https://github.com/strongloop/loopback-next/issues/3350)
* add support for excluding custom pk from POST requests ([9694d99](https://github.com/strongloop/loopback-next/commit/9694d9942fae2a054be0243cf7217c9e0b60c5f0))
* cleanup tilde-path-app post test ([4562a50](https://github.com/strongloop/loopback-next/commit/4562a5055c40ea91d33c4e1f29c08edcefa7fdef)), closes [#4652](https://github.com/strongloop/loopback-next/issues/4652)
* model with id required ([270e13e](https://github.com/strongloop/loopback-next/commit/270e13eb283b0a90c7cbaaf2741e8c0e535b27d0))
* remove ref for v4.loopback.io ([78f20c0](https://github.com/strongloop/loopback-next/commit/78f20c0ed4db5f3ce0d7b676449ba3b22526319e))
* set foreignkey to be optional in the requestbody of hasmany relation ([d46ea18](https://github.com/strongloop/loopback-next/commit/d46ea184f34543f747023f758b87aea26ba2b496))
* update error message when failing to read datasource, to include filename ([6663733](https://github.com/strongloop/loopback-next/commit/6663733586ec3a98816f63a887c28b3debf51e4c)), closes [#3965](https://github.com/strongloop/loopback-next/issues/3965)
* update package locks ([cd2f6fa](https://github.com/strongloop/loopback-next/commit/cd2f6fa7a732afe4a16f4ccf8316ff3142959fe8))
* **build:** remove "dom" from the list of global libraries ([781cd1d](https://github.com/strongloop/loopback-next/commit/781cd1dd6d4b00b92a64741f3d0468a9b41c7e1a))
* **cli:** add eslint related dev dependencies to generated package.json ([fc18caf](https://github.com/strongloop/loopback-next/commit/fc18caf8a1966b9ab8d0afbc365afd216ebf4ede))
* **cli:** add fs-extra dependency as it's used by lb example ([3c74ffa](https://github.com/strongloop/loopback-next/commit/3c74ffa33653f0dd0a55484df3a7d4499dd674e2))
* **cli:** add missing PUT method in rest controller template ([8394c74](https://github.com/strongloop/loopback-next/commit/8394c74d5369d7dcce861c0ed30e033a3e7ce3ae))
* **cli:** add more exit checks to fail fast ([90c4406](https://github.com/strongloop/loopback-next/commit/90c4406697063261d3628b78071ca50f90139b09))
* **cli:** add type param to Filter and Where ([a9570bc](https://github.com/strongloop/loopback-next/commit/a9570bcca37cb1d5c1d6ab7dcc729822d74191fa))
* **cli:** allow `*` for version range ([0a42541](https://github.com/strongloop/loopback-next/commit/0a42541143636208832207669c0a2c36b7c9c1de))
* **cli:** allow base class exist for model config option ([9605ed1](https://github.com/strongloop/loopback-next/commit/9605ed14dc6f9e8023846d5201b7d81ee8989221))
* **cli:** allow other connectors to be used for repositories ([9a0d9a8](https://github.com/strongloop/loopback-next/commit/9a0d9a8e6c3e9e568260f3e5cf5ac538a4b21602))
* **cli:** app generator handles tildified project path. relevant test added ([7f7feaa](https://github.com/strongloop/loopback-next/commit/7f7feaa3770ef2c235f1107d133c03d32d372e47))
* **cli:** change class/file naming convention. Add prompt msg ([0b2a45b](https://github.com/strongloop/loopback-next/commit/0b2a45bb43c9f8196fdec1b3ca430b03d442bf39))
* **cli:** change enable setting check ([f4a9dc0](https://github.com/strongloop/loopback-next/commit/f4a9dc084ffa2aadf6997f0db93afef4ffac5304))
* **cli:** clean up template for life cycle observers ([6733610](https://github.com/strongloop/loopback-next/commit/67336104f44784f7c1f63d6758fc5e1319de413b))
* **cli:** datasource class being referenced in generators ([6d345f7](https://github.com/strongloop/loopback-next/commit/6d345f745068267cb447a557134bfd070ed98a57))
* **cli:** discover prompt exits after generating ([8ba0dd5](https://github.com/strongloop/loopback-next/commit/8ba0dd504960a197d87c4dacd2a6f5d058cce634))
* **cli:** do not install deps for built-in connectors ([2e035a5](https://github.com/strongloop/loopback-next/commit/2e035a539a5c0e72578bd8af5132f7f8a23379e6))
* **cli:** enable --resolveJsonModule for plain tsconfig ([26af3d9](https://github.com/strongloop/loopback-next/commit/26af3d9592a46441524afe2aae8dab71e6ed36f1))
* **cli:** enforce an empty object on connectors without settings property ([111442b](https://github.com/strongloop/loopback-next/commit/111442b313ce8d3ba3061afade800ae08e000fc0)), closes [#1697](https://github.com/strongloop/loopback-next/issues/1697)
* **cli:** escape char sequences for javascript comments ([83ff105](https://github.com/strongloop/loopback-next/commit/83ff105ef4241bc120529e79dc530dfac2e425ab))
* **cli:** fix prompt for base repository class ([b429729](https://github.com/strongloop/loopback-next/commit/b4297299d8075a5ed13c037117e9b1043da27a8d)), closes [#2429](https://github.com/strongloop/loopback-next/issues/2429)
* **cli:** fixed ds names that were hyphened ([568307c](https://github.com/strongloop/loopback-next/commit/568307c45c1d32bb6be98ebd3851bee14d82e6cc)), closes [#1791](https://github.com/strongloop/loopback-next/issues/1791)
* **cli:** fixes final datasource class name on repository and service ([d0994af](https://github.com/strongloop/loopback-next/commit/d0994af048d04e44373c35473bcad45967714e60)), closes [#1771](https://github.com/strongloop/loopback-next/issues/1771)
* **cli:** force test host to be HOST env var or ipv4 interface ([1664d4f](https://github.com/strongloop/loopback-next/commit/1664d4fa546aa7d9f4ca2e4cbedf2b168549954d))
* **cli:** generate correct index.js without loopback build ([1c8cb3e](https://github.com/strongloop/loopback-next/commit/1c8cb3e462d6129bb0cbb3fc2b15030a834b87b2))
* **cli:** generate matching arg names for repository constructors ([190fbf3](https://github.com/strongloop/loopback-next/commit/190fbf3c51ade590aba282e90bdeade6da6f1883))
* **cli:** generate operation only for the 1st tag to avoid duplicate routes ([4843a1f](https://github.com/strongloop/loopback-next/commit/4843a1f8d1b590c92ea9410d670208c3b56914ba))
* **cli:** generate property.array for array of simple types ([ec80d9a](https://github.com/strongloop/loopback-next/commit/ec80d9a8e6eff2dc8eb13f78edb0e8bcdd494af5))
* **cli:** improve openapi code generation for naming and typing ([af20548](https://github.com/strongloop/loopback-next/commit/af20548050434898752295d920ffbe716bfe007b))
* **cli:** keep or escape property names for models ([cb308ad](https://github.com/strongloop/loopback-next/commit/cb308add60bbe938c8e85812676eb817e9e0efc9))
* **cli:** make sure tsbuildinfo is removed by the clean script ([3fdc0b1](https://github.com/strongloop/loopback-next/commit/3fdc0b1483d288172e556903baa070854e225d0e))
* **cli:** rearrange interceptor cli prompts ([0b2ed34](https://github.com/strongloop/loopback-next/commit/0b2ed345d03452929689731911f3e9c6db5279be))
* **cli:** remove -p option from eslint ([d2ffd80](https://github.com/strongloop/loopback-next/commit/d2ffd80352cc72a5cf3377cc46b7b6b6464dc236))
* **cli:** remove extra SPACE at EOL in help output ([aeaf793](https://github.com/strongloop/loopback-next/commit/aeaf7938e3cfe9c49a18c6e0f94b6c14f664092c))
* **cli:** remove license header from test code template ([1fd35f4](https://github.com/strongloop/loopback-next/commit/1fd35f484093f0e996a4eab8f714620fd392ba5d))
* **cli:** set `required: true` in property decoration for openapi ([3c37286](https://github.com/strongloop/loopback-next/commit/3c372868196ee7e18d8532f00c624c3f72378bf0))
* **cli:** update tsconfig template excludes ([1fcc463](https://github.com/strongloop/loopback-next/commit/1fcc4633af333b56d0ba978e58fbc29778861215)), closes [/github.com/strongloop/loopback-next/pull/4707#issuecomment-590255940](https://github.com//github.com/strongloop/loopback-next/pull/4707/issues/issuecomment-590255940)
* **cli:** updated OAS 'Date' JS Type Mapping to 'string' ([839caa9](https://github.com/strongloop/loopback-next/commit/839caa92038d5ba8548106cd4136ee40d9abf679))
* add model/entity descriptions ([8156f9d](https://github.com/strongloop/loopback-next/commit/8156f9d32aac3a0461b617a01cde9c319a1cceca))
* address violations of "no-floating-promises" rule ([0947531](https://github.com/strongloop/loopback-next/commit/0947531d69d07839a21ea7575cfc08580086841f))
* change service generator ds to uppercase ([83840a3](https://github.com/strongloop/loopback-next/commit/83840a3b8b58c75a840d3ab0f99f72c0870c05e3))
* fix conflict ([6302101](https://github.com/strongloop/loopback-next/commit/630210117365e8d89f8dd3b797f0b0096936b79e))
* **cli:** git-ignore all "dist*" dirs in scaffolded projects ([1cab517](https://github.com/strongloop/loopback-next/commit/1cab517dc9de7023c39f56d20451144551914d33))
* **cli:** increase timeout for app generation tests ([c51383d](https://github.com/strongloop/loopback-next/commit/c51383d529ba18173d3c684e2ad659f4bb4712c7))
* **cli:** remove no-any warning from model template ([264aa28](https://github.com/strongloop/loopback-next/commit/264aa2883cfa9faaffa2ed974ca5960da810266d))
* **cli:** removed unused dependencies from project template ([3907df4](https://github.com/strongloop/loopback-next/commit/3907df404522508ffa080f66fc731c4acaf01258))
* **cli:** set glob options to support windows paths with special chars ([9a84ef0](https://github.com/strongloop/loopback-next/commit/9a84ef0598163ece84764605a29ed195c3165c93))
* change unmatched html tags, remove redundant 'px' from 0 ([46d08f6](https://github.com/strongloop/loopback-next/commit/46d08f6dfc00db31bbc3d652d2c71cd8ae367c26))
* clean up dataSource usage ([69506a4](https://github.com/strongloop/loopback-next/commit/69506a44cf25d3c8d0b50d0758e8f5b808852917))
* discover uses owner instead of schema ([ed588b6](https://github.com/strongloop/loopback-next/commit/ed588b62e0e3215399921972d2b1e65de64d73e2))
* update usage of `x-ts-type` for schemas ([57c694e](https://github.com/strongloop/loopback-next/commit/57c694e862570b53c2427f44e80012166bbde00e))
* **cli:** add esnext.asynciterable to lib for typescript ([83a8036](https://github.com/strongloop/loopback-next/commit/83a80361cb16b1a02e96b98d9f710bf71db16a40))
* **cli:** change model template to properly render array types ([2d43a61](https://github.com/strongloop/loopback-next/commit/2d43a61b5f6c50165f410ded26c0c994f6fe2ded))
* **cli:** install dependencies for clones examples ([5774f1f](https://github.com/strongloop/loopback-next/commit/5774f1f64cc5982b3be6a705e3695a48d730069c))
* **cli:** remove deleteAll endpoint from REST Controller template ([34eba34](https://github.com/strongloop/loopback-next/commit/34eba3498528fe70fa9e64e8582d30a5b255e35b))
* **cli:** remove dist-util from project templates ([f6c3048](https://github.com/strongloop/loopback-next/commit/f6c3048dac41ebe99ab772ac181df27073124427))
* **cli:** rename repository/service feature flags ([c089299](https://github.com/strongloop/loopback-next/commit/c089299f464893129e643fc0bc5d829920f9a809))
* **cli:** tweaks to templates ([6f1d7bb](https://github.com/strongloop/loopback-next/commit/6f1d7bbea0d5c78bd02d4ad52a4c8b4fa3a4e3f8))
* **cli:** update template with responses object ([a2bbbc9](https://github.com/strongloop/loopback-next/commit/a2bbbc922f4c4cb141b05de81c20e37b1646de5c))
* **cli:** use rimraf to replace rm -rf ([479f363](https://github.com/strongloop/loopback-next/commit/479f363da13af48f99c7835aa7d953ea22d1f33c))
* import package in template ([14bb6a5](https://github.com/strongloop/loopback-next/commit/14bb6a5c1fec69f93b7dd8937fbc449b5724dd6c))
* make `lb model` prompts clearer ([2ec4d2f](https://github.com/strongloop/loopback-next/commit/2ec4d2f87f0ca84af8b0707c992b4055ae734fd1))
* modelSettings is stringified properly [#2915](https://github.com/strongloop/loopback-next/issues/2915) ([84072ec](https://github.com/strongloop/loopback-next/commit/84072ece2ac9356edd8611b5ecfb195741df6ea7))
* remove extra imports for mixin dependencies ([35b916b](https://github.com/strongloop/loopback-next/commit/35b916b2d4aac457edf62956e35b2057a3794b00))
* remove forgotten references to tslint ([faa0a92](https://github.com/strongloop/loopback-next/commit/faa0a92d09156c14124665ae7a8138e03b107bb3))
* **build:** fix tslint config and slipped violations ([22f8e05](https://github.com/strongloop/loopback-next/commit/22f8e056dfd7834da4073b2af8d3ebe7cd9f7e3d))
* **cli:** add `--allow-console-logs` to app npm test script ([5823a18](https://github.com/strongloop/loopback-next/commit/5823a183ef60ddd91b2f575eedc117fde308d0cd))
* **cli:** add empty logs to better format model prompts ([60b3d57](https://github.com/strongloop/loopback-next/commit/60b3d571af043b6eaf519429e440837cc23c0e03))
* **cli:** adds the <idtype> on param.path for those methods in the rest controller template parsing ([c526b99](https://github.com/strongloop/loopback-next/commit/c526b996e77a921a971d7cd8a07909e51d45a0a9))
* **cli:** allow path level parameters for openapi ([55b041a](https://github.com/strongloop/loopback-next/commit/55b041a7cd393e720c99cd42f82e7ca45b191522))
* **cli:** escape identifiers with conflicting name as decorators ([6d71439](https://github.com/strongloop/loopback-next/commit/6d714395572e8845d712bf3c41c97077f6ea7050))
* **cli:** exit gracefully if the project name fails validation ([dfdf090](https://github.com/strongloop/loopback-next/commit/dfdf090b8da1a542cb71a0051165f677e7d4b59c))
* **cli:** fix app templates with boot and sequence ([81272e8](https://github.com/strongloop/loopback-next/commit/81272e8e03b5a47608fad9ef0f2b42a1ede555dd))
* **cli:** fix cli rest controller generator template ([cc9591d](https://github.com/strongloop/loopback-next/commit/cc9591d1b3e181f8039d9fb3b206b23fce35b468))
* **cli:** fix controller.integration.js tests and refactor ([f3edbd9](https://github.com/strongloop/loopback-next/commit/f3edbd99275cd42b4371671623e322d27c5b7e2a))
* **cli:** fix templates & move some utils to base generator ([1a5cbf8](https://github.com/strongloop/loopback-next/commit/1a5cbf80e848c39fbad66d6e7ea186da7d7235ed))
* **cli:** install deps if necessary for datasource ([4c605b0](https://github.com/strongloop/loopback-next/commit/4c605b0d239805185534ad155d0b14abc519967b))
* **cli:** make download-connector-list more robust ([a4c2ce0](https://github.com/strongloop/loopback-next/commit/a4c2ce0fd044fd5ad6e7a93c83193ba1ac0a3146))
* **cli:** make sure --applicationName is honored ([526e6ca](https://github.com/strongloop/loopback-next/commit/526e6ca0bed5058894bbfb094e09e63313a7c13b))
* **cli:** make sure the item type is imported for an array in openapi spec ([91b2381](https://github.com/strongloop/loopback-next/commit/91b2381e94e0872973077a10429eff7715063000))
* **cli:** move sequence customization to app constructor ([4ee3429](https://github.com/strongloop/loopback-next/commit/4ee34293d91b34a1773840f108d758f3312fe69b))
* **cli:** remove automatic license generation ([537ff86](https://github.com/strongloop/loopback-next/commit/537ff867c25e2ee22821c06f056c152546ecf531))
* **cli:** reorder where and body in CLI template for updateAll and make where optional ([c875707](https://github.com/strongloop/loopback-next/commit/c87570742b7993789da6ec43dfd8a9583873e223))
* **cli:** setup controller generator after adding properties ([b0ee417](https://github.com/strongloop/loopback-next/commit/b0ee4173b66606b7734ab06b3ba59bbab6dcbc04))
* **cli:** simplify HTTP server setup in acceptance tests ([aa0e2f7](https://github.com/strongloop/loopback-next/commit/aa0e2f77270183874f245bd2e97f5367db7a553c))
* **cli:** support updating multiple index.ts files ([1e92f4f](https://github.com/strongloop/loopback-next/commit/1e92f4f3196fefe0c79ac44ae1e5521b62a84989))
* **cli:** tweak getArtifactList to return pascalCased strings ([b3bb208](https://github.com/strongloop/loopback-next/commit/b3bb208cb4c8550a0c1635366180e49094888a4f))
* **cli:** update successful creation message ([d602ded](https://github.com/strongloop/loopback-next/commit/d602ded952f1c7a6f3e137349e63fbdf71a922ef)), closes [#886](https://github.com/strongloop/loopback-next/issues/886)
* **cli:** use this.exit instead of throwing an error ([8d25a79](https://github.com/strongloop/loopback-next/commit/8d25a796969385e84d0d6e8c17ab4bb6f0d40f72))
* add new openapi package ([#829](https://github.com/strongloop/loopback-next/issues/829)) ([dac9320](https://github.com/strongloop/loopback-next/commit/dac9320b625f2c747af14c266a3fd690879564ab))
* Add start script for apps ([5ba3734](https://github.com/strongloop/loopback-next/commit/5ba37347a6715abb4d4971547a7addf01bec7e6c))
* apply source-maps to test errors ([76a7f56](https://github.com/strongloop/loopback-next/commit/76a7f56cd1166d4407f2a50b188db91a74f7deae)), closes [#602](https://github.com/strongloop/loopback-next/issues/602)
* change file names to fit advocated naming convention ([0331df8](https://github.com/strongloop/loopback-next/commit/0331df8e188f2ba857d04d6a6aff579c7b7726c1))
* make mocha self-contained with the source map support ([7c6d869](https://github.com/strongloop/loopback-next/commit/7c6d86975a379388f433110df91b1bf0e2e4b94d))
* replace gulp-rename with our own implementation ([f8349d4](https://github.com/strongloop/loopback-next/commit/f8349d48c12e59acba2e144b55c640f84379db6a))
* **cli:** update tsconfig.json to include index.ts ([dc5107c](https://github.com/strongloop/loopback-next/commit/dc5107cc3d43281e2918e778142e86808571197e))
* **cli:** use pascalCase for toClassName to handle '-' ([861256c](https://github.com/strongloop/loopback-next/commit/861256c4e893f6b26e1d2b81d69e614ab5de9e9f))
* clean up the app run test ([c0d3731](https://github.com/strongloop/loopback-next/commit/c0d37316a22d7111b4df9693c69f15880b584a18))
* Fix cli templates ([2ebf69f](https://github.com/strongloop/loopback-next/commit/2ebf69f490c04d831d747a010e85717b53d260dc))
* Fix CLI to include .gitignore in the templates ([842a191](https://github.com/strongloop/loopback-next/commit/842a19135d06b9493ceb64ddee496ffe0476b0e9))
* Fix help text for cli ([8f41c2e](https://github.com/strongloop/loopback-next/commit/8f41c2e3d105215ae8c425de0f5d8cf4309e1e22))
* fix typo ([6ecc13c](https://github.com/strongloop/loopback-next/commit/6ecc13ceacb98361031839189add2a4580d0ce4f))
* remove unused juggler import ([0121c10](https://github.com/strongloop/loopback-next/commit/0121c1044efb8cbc4027cb6ec2f7b4c132f33cf4))
* template ([cf9cf04](https://github.com/strongloop/loopback-next/commit/cf9cf0460e403edd6f348483ef1573ff07439be7))
* update to the most recent lodash version ([65ee865](https://github.com/strongloop/loopback-next/commit/65ee8656763b3b41a0acb86d7a6c4482472abc02))
* update version of nyc ([f8db27c](https://github.com/strongloop/loopback-next/commit/f8db27c474430d01693538d6a6dc2200b9f4ca6d))
* use lerna to collect versions for loopback modules ([2956bf9](https://github.com/strongloop/loopback-next/commit/2956bf94fa7d4c23237abc6562f927f8cc430464))
* **cli:** remove copyright header from generated app ([#991](https://github.com/strongloop/loopback-next/issues/991)) ([c987b28](https://github.com/strongloop/loopback-next/commit/c987b28b07a210444b3c1b593bfd4c98896be300)), closes [#944](https://github.com/strongloop/loopback-next/issues/944)
* **cli:** rework template to use inline param decoration ([e3ef86b](https://github.com/strongloop/loopback-next/commit/e3ef86b8dcc19a68ffba470468db2cadc5b6c909))
* **cli:** use prerelease versioning for templates ([81aaa6f](https://github.com/strongloop/loopback-next/commit/81aaa6f9abe357c47ef225d157c3eb5e407761ee))
* **repository:** change the way array property definition is built for the juggler ([2471c88](https://github.com/strongloop/loopback-next/commit/2471c88094d076bf9a0658a0d8ae656118d3037f))


### Build System

* drop dist6 related targets ([#945](https://github.com/strongloop/loopback-next/issues/945)) ([a2368ce](https://github.com/strongloop/loopback-next/commit/a2368cee598c131a826ee42e347266c6e25ae582))


### chore

* remove support for Node.js v8.x ([4281d9d](https://github.com/strongloop/loopback-next/commit/4281d9df50f0715d32879e1442a90b643ec8f542))


### Code Refactoring

* renamed example-getting-started to example-todo ([7a09f1b](https://github.com/strongloop/loopback-next/commit/7a09f1bc869154149d34746573474bea2eedbf77))


### Features

* **build:** enable incremental compilation ([2120712](https://github.com/strongloop/loopback-next/commit/2120712e0b0bc12f0cf4a313ae3312f88d2c3bfe))
* **cli:** add `--docker` option to generate docker files ([4cd2442](https://github.com/strongloop/loopback-next/commit/4cd24424f6ec937a3308b8e3c542677e5e59618f))
* **cli:** add `connectors.json` ([802529e](https://github.com/strongloop/loopback-next/commit/802529ed0ba1e3a9f9ef417b4b8b4a7459589682))
* **cli:** add `lb4 copyright` to generate/update file headers ([abc6111](https://github.com/strongloop/loopback-next/commit/abc6111148a831f47308f4284215ac9564f3c12b))
* **cli:** add `lb4 observer` command to generate life cycle scripts ([d54651d](https://github.com/strongloop/loopback-next/commit/d54651d8309350b64c9e1f8fe6e4144da4686461))
* **cli:** add `lb4 relation` command ([75939a4](https://github.com/strongloop/loopback-next/commit/75939a4a144b3068ff2890394c178faad58d7458))
* **cli:** add `lb4 rest-crud` command to generate model endpoints from model/datasource ([38fd41e](https://github.com/strongloop/loopback-next/commit/38fd41e26cd5abf52e69d0b275a730b195be813a))
* **cli:** add `tslib` as a template dependency ([267b074](https://github.com/strongloop/loopback-next/commit/267b074a93dc7483333486e2b381b3d7168ebc79)), closes [#4676](https://github.com/strongloop/loopback-next/issues/4676)
* **cli:** add `updateLicense` to `lb4 copyright` command ([535df04](https://github.com/strongloop/loopback-next/commit/535df04df75d39f2a5e36740ae1e0de27359af78))
* **cli:** add build:globalize option ([3c42077](https://github.com/strongloop/loopback-next/commit/3c4207730cd87e9399b18969c71515d44991e547))
* **cli:** add default option for gracePeriodForClose to configure http/https close ([5a243e2](https://github.com/strongloop/loopback-next/commit/5a243e280868c4b83d7b5685f326a44baf5cbd9a))
* **cli:** add hasOne relation type to `lb4 relation` ([3046f3e](https://github.com/strongloop/loopback-next/commit/3046f3e9ca29225c2ca64567af0be337a6fa5b00))
* **cli:** add inclusion resolver to lb4 relation ([199e1bc](https://github.com/strongloop/loopback-next/commit/199e1bc84a6c57fe650db9588bdb121d27eca7a3))
* **cli:** add lb4 discover for model discovery ([35f719c](https://github.com/strongloop/loopback-next/commit/35f719ce1815a177e60aa83150e346a77c3d4ce3))
* **cli:** add lb4 interceptor command to generate interceptors ([58017b6](https://github.com/strongloop/loopback-next/commit/58017b64a6b72999a1db86d62b93eac8284a6d84))
* **cli:** add lb4 update command to check/update project dependencies ([54d1896](https://github.com/strongloop/loopback-next/commit/54d1896f63705b6938fe74ba2c21ad0b4d9bea23))
* **cli:** add lifecycle support for datasources ([8573173](https://github.com/strongloop/loopback-next/commit/8573173422092a1c69c31fd53e68f98dfa612969))
* **cli:** add new command `import-lb3-model` (EXPERIMENTAL) ([2e465e6](https://github.com/strongloop/loopback-next/commit/2e465e6be503e3145342614650c177ecca89221e))
* **cli:** add property modelSettings ([e0f75ac](https://github.com/strongloop/loopback-next/commit/e0f75ace756d8b5479ad5b66e9b2803e4b419eef))
* **cli:** add static BINDING_KEY prop to non-global interceptors ([5fbd95f](https://github.com/strongloop/loopback-next/commit/5fbd95f47f67207d7e0430d8c08e2a9738e685ae))
* **cli:** add strict prompt to model generator ([a68d78b](https://github.com/strongloop/loopback-next/commit/a68d78be01d0da2b1f73b2866167c722bcfd960d))
* **cli:** add the ability to check latest cli version ([869d1e4](https://github.com/strongloop/loopback-next/commit/869d1e4b19ba5483521a632a9c8af4b39ca7254f))
* **cli:** add translations for 14 languages ([31bc951](https://github.com/strongloop/loopback-next/commit/31bc951c405e3bf21bc10875bc1c8cc6a1bab794))
* **cli:** allow --exclude <glob-pattern> to not update headers for excluded files ([a81ce7e](https://github.com/strongloop/loopback-next/commit/a81ce7e1193f7408d30d984d0c3ddcec74f7c316))
* **cli:** allow different naming convention for discover ([298e66e](https://github.com/strongloop/loopback-next/commit/298e66e7430406d2615f7826c770ee126ae56d18))
* **cli:** automatically include base models when importing LB3 models ([9d5f8a7](https://github.com/strongloop/loopback-next/commit/9d5f8a771f475c1597bc5e1d22efc06e4940cbb7))
* **cli:** enable source map for npm start script ([1882240](https://github.com/strongloop/loopback-next/commit/1882240c623c3e68b8b90630296e622b6193a1bd))
* **cli:** generate datasource json with '.config.json` extension ([51d8f7b](https://github.com/strongloop/loopback-next/commit/51d8f7b20ec59f888fd6d0634efb47d111f00ef7))
* **cli:** implement dark mode in the app template ([6939546](https://github.com/strongloop/loopback-next/commit/6939546d2b0cba59d8a70ce500dbf1b6e42d682b))
* **cli:** import LB3 models with a custom base class ([aa3dc12](https://github.com/strongloop/loopback-next/commit/aa3dc12e32bd9c297742c9b54224644ea81f7526))
* **cli:** improve `lb4 service` to generate local service classes/providers ([f743008](https://github.com/strongloop/loopback-next/commit/f7430086e116c7bd322fccdaae10e9a41a3e8f57))
* **cli:** improve logging from processing of config & options ([41a39c1](https://github.com/strongloop/loopback-next/commit/41a39c17a595bb92ea928d93318cc353e3e19218))
* **cli:** improve scaffolding of complex model settings ([5035c63](https://github.com/strongloop/loopback-next/commit/5035c63e5abd018043d10fbce00fa96c9ec68c62))
* **cli:** modify Controller templates to allow partial updates via PATCH ([c7c6695](https://github.com/strongloop/loopback-next/commit/c7c6695759d68031907c78eee9bb4b02bb4a34b0))
* **cli:** modify controller templates to exclude id from POST requests ([4c1ce67](https://github.com/strongloop/loopback-next/commit/4c1ce67ede71238d6744a37f2ae30ef6ae8c2db8))
* **cli:** print help on updating snapshots when some snapshots were not matched ([c6959b8](https://github.com/strongloop/loopback-next/commit/c6959b87afc694269b4021a005cc2be1991d96d3))
* **cli:** print options for `lb4 copyright --help` and update docs ([f23ecb7](https://github.com/strongloop/loopback-next/commit/f23ecb741bcd589767d94acf2a394efddfe37ff6))
* **cli:** skip inherited props & settings when importing a LB3 model ([97c8b05](https://github.com/strongloop/loopback-next/commit/97c8b0535f32dc5271d84fa8b66009126ddae8e1))
* **cli:** store original cli version in .yo.rc.json ([3b7db55](https://github.com/strongloop/loopback-next/commit/3b7db55fb3572649deeb6cd3bc33f749f234e31a))
* **cli:** wrap license text with a max line length of 80 chars ([a9046ed](https://github.com/strongloop/loopback-next/commit/a9046ed639076bf8e06a0952c0ae2a298f92c330))
* **cli:** write snapshot files in parallel ([a16ae34](https://github.com/strongloop/loopback-next/commit/a16ae3437594ec2074ed62d6cea81d02cfcf1a6c))
* **eslint-config:** enable "no-misused-promises" rule ([88d5494](https://github.com/strongloop/loopback-next/commit/88d5494a29fd6a642c4ef25f0e427f529c9b9456))
* **example-file-upload-download:** add file download support ([12afd6b](https://github.com/strongloop/loopback-next/commit/12afd6b47ee1d371c68d03bd86c03d49b5f43b8d))
* **example-rest-crud:** add example showing CrudRestApiBuilder ([ea37afb](https://github.com/strongloop/loopback-next/commit/ea37afb8d9e4ca9aef032b84e349e918d945e8ee))
* .vscode add typescript lint rules ([e8eb371](https://github.com/strongloop/loopback-next/commit/e8eb371af12ced96d0c87c88eae2be40b76c7911)), closes [#4584](https://github.com/strongloop/loopback-next/issues/4584)
* add `tslib` as dependency ([a6e0b4c](https://github.com/strongloop/loopback-next/commit/a6e0b4ce7b862764167cefedee14c1115b25e0a4)), closes [#4676](https://github.com/strongloop/loopback-next/issues/4676)
* add express example ([dd2400e](https://github.com/strongloop/loopback-next/commit/dd2400ebf39e6809a68d37591fcf8230e66e5516))
* add greeter-extension example ([9b09298](https://github.com/strongloop/loopback-next/commit/9b092986e6735b1afbd819daae4a9b37cbf456e7))
* add lb3 application ([bf60011](https://github.com/strongloop/loopback-next/commit/bf60011ad2fb6e51b80c067252291ddfd26994cd))
* add navigational properties to find* methods ([1f0aa0b](https://github.com/strongloop/loopback-next/commit/1f0aa0b23c86bf0059f718410d071d2641ddeb86))
* add title property to ping response schema definition ([b8b7490](https://github.com/strongloop/loopback-next/commit/b8b7490ce29d0973208ba38c3365de9091b7a795))
* lb3 migration tests for models customized with db metadata ([c58cc11](https://github.com/strongloop/loopback-next/commit/c58cc117b6e7a75e1920ce873a9cb4b98ff1058b))
* leverage isactive for transaction ([fc94437](https://github.com/strongloop/loopback-next/commit/fc9443787039d4a1db3008a0141f5693f95bfbd4))
* remove openapi-v3-types package ([2a93395](https://github.com/strongloop/loopback-next/commit/2a93395540da45cb59ea00763177bb1116a2ae4d))
* replace tslint with eslint ([44185a7](https://github.com/strongloop/loopback-next/commit/44185a744f772566f2cb186ba8cd288fed65d04c))
* update examples and docs to use getModelSchemaRef ([99758b1](https://github.com/strongloop/loopback-next/commit/99758b1905f66e80e98ae7877a0ead5b55491a62))
* use [@param](https://github.com/param).filter and [@param](https://github.com/param).where decorators ([896ef74](https://github.com/strongloop/loopback-next/commit/896ef7485376b3aedcca01a40f828bf1ed9470ae))
* **cli:** improve UX of multi-item selection ([077f38c](https://github.com/strongloop/loopback-next/commit/077f38ceccb2e1568aed69dbe00e298b30106c30))
* **cli:** recognize PK properties defined as `{id: 1}` ([1094509](https://github.com/strongloop/loopback-next/commit/10945093e17b260686e532804f71965d7b156606))
* **cli:** update controller template to enable filter for findById endpoint ([b0ce84b](https://github.com/strongloop/loopback-next/commit/b0ce84b79158cadf2f53bbe627da4d8196f0543f))
* **cli:** update templates to enable esModuleInterop and default imports from non-ES modules ([83e628b](https://github.com/strongloop/loopback-next/commit/83e628bdf5834102aa9042e52a3d7e608d2d1754))
* use descriptive title to describe schema of POST (create) request bodies ([8f49a45](https://github.com/strongloop/loopback-next/commit/8f49a4552f8a4792b2e45b631e6c7422c718e7c3))
* **cli:** normalize variable names for OpenAPI paths ([a3d0dfc](https://github.com/strongloop/loopback-next/commit/a3d0dfc6ffe2ea10d9f0aa33dc23b5a777fb5e8c))
* **cli:** scaffold test files to `src/__tests__` ([d3a3bea](https://github.com/strongloop/loopback-next/commit/d3a3bea252bd4d1a2111e7b4d1339ba615d0d3ae))
* **cli:** update templates to make use of getModelSchemaRef ([4147619](https://github.com/strongloop/loopback-next/commit/4147619216b57466b3efdb23cdf07a39165a11ca))
* **cli:** use a custom repository base class ([edbbe88](https://github.com/strongloop/loopback-next/commit/edbbe88a634df1326d0b8c1b54114d53100f75d4))
* always include tslint and typescript in project dev-dependencies ([e0df285](https://github.com/strongloop/loopback-next/commit/e0df285ee96634d4c5bdb92f39ea7fb43dda9a2c))
* use dependency instead of keyword to check loopback projects ([bb6ee51](https://github.com/strongloop/loopback-next/commit/bb6ee51698bf25c9aeaf66e2685ae71ed491b072))
* **cli:** `lb4 model` command to scaffold model files ([3593820](https://github.com/strongloop/loopback-next/commit/359382087e3cdcd791d77558bf0ac70c59474bac))
* **cli:** add basic scaffolding for lb4 service ([bed83b3](https://github.com/strongloop/loopback-next/commit/bed83b3af7d05c054345ad820cf32bfb1f0c2049))
* **cli:** add code template for default home page controller ([f4be330](https://github.com/strongloop/loopback-next/commit/f4be33075b09bc09daf691adcdf48db6282a7686))
* **cli:** add integration tests for lb4 service ([3731f5b](https://github.com/strongloop/loopback-next/commit/3731f5b45cca4f989e5236fc46bc31ebda6efb27))
* **cli:** add lb4 repository feature ([0397c04](https://github.com/strongloop/loopback-next/commit/0397c04c76ed757cdd5b92621511239fdada2fae)), closes [#1588](https://github.com/strongloop/loopback-next/issues/1588)
* **cli:** add repositorymixin and imports by a new switch ([be81131](https://github.com/strongloop/loopback-next/commit/be811315ae86a54baacef2f8a514486d43589c1c)), closes [#1594](https://github.com/strongloop/loopback-next/issues/1594)
* **cli:** add test for multiple repositories ([6e6faad](https://github.com/strongloop/loopback-next/commit/6e6faad19cad61c16141953807bc3fe7b44245c7))
* **cli:** add update notifier to remind cli upgrade ([61255cc](https://github.com/strongloop/loopback-next/commit/61255cc351ad45c90d9123164bfa85ba0692a90b))
* **cli:** add util shared functions and constants ([26915e5](https://github.com/strongloop/loopback-next/commit/26915e5762f9bad48010ee3506b671c8ebf43ac6))
* **cli:** allow annonymous schemas in openapi to be mapped to models ([eedec1e](https://github.com/strongloop/loopback-next/commit/eedec1e713ce6d277cde20a6bfe35644118cc27b))
* **cli:** ast-helper integration ([99a0bad](https://github.com/strongloop/loopback-next/commit/99a0bade325fa2f77fbc4bd1aa1f1e1874c590a4))
* **cli:** lb4 service install service-proxy if missing ([b086d2d](https://github.com/strongloop/loopback-next/commit/b086d2dfcffae5ab0bf895fa2c627fca07d936cb))
* **cli:** new projects load tslint config from `@loopback/tslint-config` ([5b9c329](https://github.com/strongloop/loopback-next/commit/5b9c329b7fd5eeeb5d450524437dc9887e700171))
* an extension adding a self-hosted REST API Explorer ([4c165c7](https://github.com/strongloop/loopback-next/commit/4c165c7aea092e54c89b72fc35b08478bdc6fb8f))
* scaffold DB migration script for new app projects ([f783f07](https://github.com/strongloop/loopback-next/commit/f783f078fa8a70b64f9a67a4c6dcc98e2d913f82))
* **cli:** change msg when no datasource or repository exists ([739676b](https://github.com/strongloop/loopback-next/commit/739676baabe6d0e2f2d7c82968104126bdc1fa2f))
* **cli:** lb4 service/repository shared scaffold ([9bafc6d](https://github.com/strongloop/loopback-next/commit/9bafc6de8357e247343deb5d152d8ed39235fa17))
* **cli:** use app.static for default home page ([1dcf169](https://github.com/strongloop/loopback-next/commit/1dcf169f299f94555cf8944bd3c7487628680e3f))
* deprecate dist-util package ([91a343c](https://github.com/strongloop/loopback-next/commit/91a343c4ab543ee7a815cf6f42d9011609c5be97))
* use resolveJsonModule to load datasource config ([73e19ff](https://github.com/strongloop/loopback-next/commit/73e19ff6a3649abd85d96b4139d16d503ee2ed62))
* **cli:** add lb4 model option to select base model class ([4c0ce80](https://github.com/strongloop/loopback-next/commit/4c0ce80d5505d3f6bb5ed8fd59675761531cdb3e)), closes [#1698](https://github.com/strongloop/loopback-next/issues/1698)
* **cli:** add responses for PingController.ping() ([ec52b89](https://github.com/strongloop/loopback-next/commit/ec52b89a8b103d4f99530ab10e3f908c24746698))
* **cli:** change location fixtures service/repository ([d4f5b5c](https://github.com/strongloop/loopback-next/commit/d4f5b5cfe426fa4be45ed7d536fc6ef603d906cf))
* **cli:** check project deps against cli template ([8d056c4](https://github.com/strongloop/loopback-next/commit/8d056c483e0400d5be81c9179d98f968f752cc5b))
* **example-todo-list:** add TodoList package/tutorial ([306d437](https://github.com/strongloop/loopback-next/commit/306d437e081188c135d3e2b69f4d8f04c7a5ed16))
* **repository:** return an object for count and updateAll ([c146366](https://github.com/strongloop/loopback-next/commit/c14636607303a9eddb5eaca2350177958d681aa6))
* add "filter" parameter to "find" endpoints ([7e1acfc](https://github.com/strongloop/loopback-next/commit/7e1acfc1e72da89e22421c8e94aaac3ba9083e0d))
* **build:** use options to control cli/shell run ([c4e8bce](https://github.com/strongloop/loopback-next/commit/c4e8bcebeebd347d9dc892d4d627bac2ae2f4349))
* **cli:** add --format to run lint:fix for generated code ([77f15c7](https://github.com/strongloop/loopback-next/commit/77f15c7b28da99f10b69578b0674f1e26ebc018e))
* **cli:** add cli for code generation from openapi ([1a1b12c](https://github.com/strongloop/loopback-next/commit/1a1b12cee351cf41afe5279fcd4f34c63656e9c2))
* **cli:** add CLI prompt for controller's http path name ([0f9c438](https://github.com/strongloop/loopback-next/commit/0f9c438acf54a1a72191de225746bb4d9ea044ec))
* **cli:** add comments for generated methods from openapi ([daa7f78](https://github.com/strongloop/loopback-next/commit/daa7f789b459fbfc5123cf3f6b28ad10d9054993))
* **cli:** add config and yes options ([5778a2a](https://github.com/strongloop/loopback-next/commit/5778a2a7564cc85a5c036504e82d19e9eb6170aa))
* **cli:** add lb4 datasource command ([b3844eb](https://github.com/strongloop/loopback-next/commit/b3844eb40729782203fb8442bcd5b52365444c57))
* **cli:** add scoped debug function ([8535c5e](https://github.com/strongloop/loopback-next/commit/8535c5e6e23e77662c0a8aa83e35af54672078d2))
* **cli:** add vscode config files ([3738b9c](https://github.com/strongloop/loopback-next/commit/3738b9c78caa825ed1d6f2f6a854d78129c6033b))
* **cli:** auto-generate / update index.ts for exports ([2998363](https://github.com/strongloop/loopback-next/commit/2998363c6ba6f11e25e5e598015fcb80ccad5510)), closes [#1127](https://github.com/strongloop/loopback-next/issues/1127)
* **cli:** Cleanup REST application tooling ([#774](https://github.com/strongloop/loopback-next/issues/774)) ([dc50ed8](https://github.com/strongloop/loopback-next/commit/dc50ed8f8e63a6a6e94ca44d8e97737cc848f49a))
* **cli:** download examples via npm ([43383f5](https://github.com/strongloop/loopback-next/commit/43383f5ff8ab98880e5a3bdb91d91c03e10c5ba5))
* **cli:** improve openapi handling of body and impl ([640b941](https://github.com/strongloop/loopback-next/commit/640b941af2b4b0601469a869fe62d5822d690bf7))
* Add exit() to abort generation ([c95aa23](https://github.com/strongloop/loopback-next/commit/c95aa23dbec6583475d3788c4f77413da951a671))
* add helper package "dist-util" ([532f153](https://github.com/strongloop/loopback-next/commit/532f15324f0378a951dbb7f101ce9df3bb3711ef))
* **cli:** generate REST controller with CRUD methods ([57fe858](https://github.com/strongloop/loopback-next/commit/57fe8589ea895f37384461d22e3363457df0ca11))
* **cli:** improve cli help/version/commands options ([715cc91](https://github.com/strongloop/loopback-next/commit/715cc91b1787a48772717d941602cb2704a1a2fe))
* **cli:** lb4 example [<example-name>] ([4286c0d](https://github.com/strongloop/loopback-next/commit/4286c0d26b0fde3a681f741429fdcaf6be45b06a))
* **cli:** remove default option for controller ([#768](https://github.com/strongloop/loopback-next/issues/768)) ([cc41fd6](https://github.com/strongloop/loopback-next/commit/cc41fd672cd17a2922106a70a50260a3580260b3))
* **cli:** replace hard-coded loopback module version in templates ([0a742d7](https://github.com/strongloop/loopback-next/commit/0a742d706895f5187417abbb74a6cc3c874b684d))
* **cli:** switch .template to .ejs ([#996](https://github.com/strongloop/loopback-next/issues/996)) ([a27e856](https://github.com/strongloop/loopback-next/commit/a27e856fa4ce1c63a9e20ae58baf0bdab6ab3df3))
* **cli:** Tooling for empty controller ([#762](https://github.com/strongloop/loopback-next/issues/762)) ([14e7897](https://github.com/strongloop/loopback-next/commit/14e789772b978b1e3e7bc5e26aadb3c8402fa7a0))
* **cli:** use `app.restServer.url` for console logs ([f31160c](https://github.com/strongloop/loopback-next/commit/f31160c4f675e89f7535d6e289d450c03645cdee))
* **context:** typed binding keys ([685195c](https://github.com/strongloop/loopback-next/commit/685195c27825844f2bba9fc177767cccb68a6ebf))
* **example-getting-started:** migrate into monorepo ([9478d8b](https://github.com/strongloop/loopback-next/commit/9478d8b0c3fc992c11f4ff0ea8cb326cb74a5750))
* **example-soap-calculator:** add soap web services integration example ([9a8d57c](https://github.com/strongloop/loopback-next/commit/9a8d57c9f4a2e36c77cb78465623f58b1d65c397)), closes [#1550](https://github.com/strongloop/loopback-next/issues/1550)
* **repository:** have [@repository](https://github.com/repository) take in constructor as arg ([3db07eb](https://github.com/strongloop/loopback-next/commit/3db07eb556c5462b5ac169dd2eae9b5db59bfaf4))
* **repository:** rework *ById methods to throw if id not found ([264f231](https://github.com/strongloop/loopback-next/commit/264f2317c3f7ffe02de43f1fb81d95e49d7d5661))
* **rest:** expose app.requestHandler function ([20a41ac](https://github.com/strongloop/loopback-next/commit/20a41ac7081a8cead0011447b5a8e5794a320ded))
* **service-proxy:** add service mixin ([fb01931](https://github.com/strongloop/loopback-next/commit/fb01931d4e193c21560811f4d6d078c89941fcfb))
* **testlab:** add createRestAppClient(), simplify usage in tests ([d75be77](https://github.com/strongloop/loopback-next/commit/d75be770dac236705e287bb86fc7b48246ff4653))
* @loopback/boot ([#858](https://github.com/strongloop/loopback-next/issues/858)) ([c2ca8be](https://github.com/strongloop/loopback-next/commit/c2ca8be6d026f869e06b047b9adcd6305afcca67))
* Add experimental CLI for LoopBack 4 ([707f692](https://github.com/strongloop/loopback-next/commit/707f69292a652a696a5d96b02f9f282f94049c0b))
* add private option for project generartion ([5c42be4](https://github.com/strongloop/loopback-next/commit/5c42be4c7a276ac4552150f9baed5ec5e650e6fc))
* upgrade from swagger 2 to openapi 3 ([71e5af1](https://github.com/strongloop/loopback-next/commit/71e5af10365b7fa6277cad8f6a216439610f19df))
* use stringifyObject instead of JSON.stringify for connector metadata ([da60ee7](https://github.com/strongloop/loopback-next/commit/da60ee79d48a7ec11f510ccdbecc878e28651237))
* **testlab:** create a test sandbox utility ([#877](https://github.com/strongloop/loopback-next/issues/877)) ([9526ba3](https://github.com/strongloop/loopback-next/commit/9526ba31d3529b3e8c18318b60a4c77f61cfc7a2))
* **testlab:** set port to 0 in givenHttpServerConfig ([90a0bfb](https://github.com/strongloop/loopback-next/commit/90a0bfbec3b5d78d3fd2e270cc1d063ca3f7d690))


### Performance Improvements

* update dockerfile to better version ([5494243](https://github.com/strongloop/loopback-next/commit/5494243b308349d03c84328617b66df8493dd0ed))


### BREAKING CHANGES

* Node.js v8.x is now end of life. Please upgrade to version
10 and above. See https://nodejs.org/en/about/releases.
* example-getting-started is now example-todo
* **rest:** `RestServer#handleHttp` was renamed to
`RestServer#requestHandler`.
* Support for Node.js version lower than 8.0 has been dropped.
Please upgrade to the latest Node.js 8.x LTS version.

Co-Authored-by: Taranveer Virk <taranveer@virk.cc>





## [2.3.1](https://github.com/strongloop/loopback-next/compare/@loopback/cli@2.3.0...@loopback/cli@2.3.1) (2020-04-11)


### Bug Fixes

* **cli:** make the StatusConflicter compatible with the base Conflicter ([b6a1af9](https://github.com/strongloop/loopback-next/commit/b6a1af98ccb0705ee3a802df68bb590ec74473f5))
* **cli:** remove unused imports from the crud controller template ([848272d](https://github.com/strongloop/loopback-next/commit/848272d980e94bc9f0878e678de12a336c0d8b8a))





# [2.3.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@2.2.1...@loopback/cli@2.3.0) (2020-04-08)


### Bug Fixes

* **cli:** allow `-h` for help ([f74092e](https://github.com/strongloop/loopback-next/commit/f74092eb20acd9e9ab1875c56ccbcb2e55f4c1da))
* **cli:** make sure generated package.json is well formatted ([38be23f](https://github.com/strongloop/loopback-next/commit/38be23f46f02ea380f1290f12704078925d264cd))
* **cli:** remove `All rights reserved.` from the header for LICENSE ([ce78b2a](https://github.com/strongloop/loopback-next/commit/ce78b2a81314aacb46b525121ecdfdbd97d0d94e))


### Features

* **cli:** add `lb4 copyright` to generate/update file headers ([abc6111](https://github.com/strongloop/loopback-next/commit/abc6111148a831f47308f4284215ac9564f3c12b))
* **cli:** add `updateLicense` to `lb4 copyright` command ([535df04](https://github.com/strongloop/loopback-next/commit/535df04df75d39f2a5e36740ae1e0de27359af78))
* **cli:** allow --exclude <glob-pattern> to not update headers for excluded files ([a81ce7e](https://github.com/strongloop/loopback-next/commit/a81ce7e1193f7408d30d984d0c3ddcec74f7c316))
* **cli:** implement dark mode in the app template ([6939546](https://github.com/strongloop/loopback-next/commit/6939546d2b0cba59d8a70ce500dbf1b6e42d682b))
* **cli:** print options for `lb4 copyright --help` and update docs ([f23ecb7](https://github.com/strongloop/loopback-next/commit/f23ecb741bcd589767d94acf2a394efddfe37ff6))
* **cli:** wrap license text with a max line length of 80 chars ([a9046ed](https://github.com/strongloop/loopback-next/commit/a9046ed639076bf8e06a0952c0ae2a298f92c330))





## [2.2.1](https://github.com/strongloop/loopback-next/compare/@loopback/cli@2.2.0...@loopback/cli@2.2.1) (2020-03-24)

**Note:** Version bump only for package @loopback/cli





# [2.2.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@2.1.1...@loopback/cli@2.2.0) (2020-03-24)


### Bug Fixes

* **cli:** add validation-app to example cli ([36a70b3](https://github.com/strongloop/loopback-next/commit/36a70b39062e3e8d467a3a820a51a58ffaefb613))
* update package locks ([cd2f6fa](https://github.com/strongloop/loopback-next/commit/cd2f6fa7a732afe4a16f4ccf8316ff3142959fe8))


### Features

* **cli:** add `lb4 rest-crud` command to generate model endpoints from model/datasource ([38fd41e](https://github.com/strongloop/loopback-next/commit/38fd41e26cd5abf52e69d0b275a730b195be813a))





## [2.1.1](https://github.com/strongloop/loopback-next/compare/@loopback/cli@2.1.0...@loopback/cli@2.1.1) (2020-03-17)

**Note:** Version bump only for package @loopback/cli





# [2.1.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@2.0.1...@loopback/cli@2.1.0) (2020-03-17)


### Bug Fixes

* **cli:** add ibmi, relocate db2z for affinity to other db2s ([76bb470](https://github.com/strongloop/loopback-next/commit/76bb470e8feba478796741d09b35fdb7549b79ab))
* **cli:** add missing examples to CLI ([221d8d0](https://github.com/strongloop/loopback-next/commit/221d8d00973e28475aee7771c521fd06b2723ef4))


### Features

* **cli:** add translations for 14 languages ([31bc951](https://github.com/strongloop/loopback-next/commit/31bc951c405e3bf21bc10875bc1c8cc6a1bab794))
* **example-file-upload-download:** add file download support ([12afd6b](https://github.com/strongloop/loopback-next/commit/12afd6b47ee1d371c68d03bd86c03d49b5f43b8d))
* **example-rest-crud:** add example showing CrudRestApiBuilder ([ea37afb](https://github.com/strongloop/loopback-next/commit/ea37afb8d9e4ca9aef032b84e349e918d945e8ee))





## [2.0.1](https://github.com/strongloop/loopback-next/compare/@loopback/cli@2.0.0...@loopback/cli@2.0.1) (2020-03-05)


### Bug Fixes

* **cli:** include intl in package.json ([097724b](https://github.com/strongloop/loopback-next/commit/097724bc0d38ce6a499d2a26092a570451b5e026))





# [2.0.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.30.1...@loopback/cli@2.0.0) (2020-03-05)


### Bug Fixes

* remove ref for v4.loopback.io ([78f20c0](https://github.com/strongloop/loopback-next/commit/78f20c0ed4db5f3ce0d7b676449ba3b22526319e))
* **cli:** correct root directory in test ([f951052](https://github.com/strongloop/loopback-next/commit/f951052a12b82923b18f781c3b0292de0a2c8634)), closes [#4425](https://github.com/strongloop/loopback-next/issues/4425)
* **cli:** extract messages for generators ([2f572bd](https://github.com/strongloop/loopback-next/commit/2f572bd75883420e38bfaa780bc38445aec92e65))
* **cli:** extract messages for generators ([b264d60](https://github.com/strongloop/loopback-next/commit/b264d60752e8487c0649b1f47419dbc06a111384))
* **cli:** ignore stdin when config is provided via CLI args ([3d64cfe](https://github.com/strongloop/loopback-next/commit/3d64cfebe19ae26b66ae7639a8ddffbf3dd54061))
* **cli:** move `loopback` to devDependencies ([7701cab](https://github.com/strongloop/loopback-next/commit/7701cab4a18f37be62269d075045a0d0b8eb7d57))
* **cli:** update tsconfig template excludes ([1fcc463](https://github.com/strongloop/loopback-next/commit/1fcc4633af333b56d0ba978e58fbc29778861215)), closes [/github.com/strongloop/loopback-next/pull/4707#issuecomment-590255940](https://github.com//github.com/strongloop/loopback-next/pull/4707/issues/issuecomment-590255940)
* cleanup tilde-path-app post test ([4562a50](https://github.com/strongloop/loopback-next/commit/4562a5055c40ea91d33c4e1f29c08edcefa7fdef)), closes [#4652](https://github.com/strongloop/loopback-next/issues/4652)


### chore

* remove support for Node.js v8.x ([4281d9d](https://github.com/strongloop/loopback-next/commit/4281d9df50f0715d32879e1442a90b643ec8f542))


### Features

* use [@param](https://github.com/param).filter and [@param](https://github.com/param).where decorators ([896ef74](https://github.com/strongloop/loopback-next/commit/896ef7485376b3aedcca01a40f828bf1ed9470ae))
* **cli:** add `tslib` as a template dependency ([267b074](https://github.com/strongloop/loopback-next/commit/267b074a93dc7483333486e2b381b3d7168ebc79)), closes [#4676](https://github.com/strongloop/loopback-next/issues/4676)
* **cli:** add build:globalize option ([3c42077](https://github.com/strongloop/loopback-next/commit/3c4207730cd87e9399b18969c71515d44991e547))
* **cli:** allow different naming convention for discover ([298e66e](https://github.com/strongloop/loopback-next/commit/298e66e7430406d2615f7826c770ee126ae56d18))
* **cli:** automatically include base models when importing LB3 models ([9d5f8a7](https://github.com/strongloop/loopback-next/commit/9d5f8a771f475c1597bc5e1d22efc06e4940cbb7))
* **cli:** import LB3 models with a custom base class ([aa3dc12](https://github.com/strongloop/loopback-next/commit/aa3dc12e32bd9c297742c9b54224644ea81f7526))
* **cli:** improve logging from processing of config & options ([41a39c1](https://github.com/strongloop/loopback-next/commit/41a39c17a595bb92ea928d93318cc353e3e19218))
* **cli:** skip inherited props & settings when importing a LB3 model ([97c8b05](https://github.com/strongloop/loopback-next/commit/97c8b0535f32dc5271d84fa8b66009126ddae8e1))
* .vscode add typescript lint rules ([e8eb371](https://github.com/strongloop/loopback-next/commit/e8eb371af12ced96d0c87c88eae2be40b76c7911)), closes [#4584](https://github.com/strongloop/loopback-next/issues/4584)
* add `tslib` as dependency ([a6e0b4c](https://github.com/strongloop/loopback-next/commit/a6e0b4ce7b862764167cefedee14c1115b25e0a4)), closes [#4676](https://github.com/strongloop/loopback-next/issues/4676)
* lb3 migration tests for models customized with db metadata ([c58cc11](https://github.com/strongloop/loopback-next/commit/c58cc117b6e7a75e1920ce873a9cb4b98ff1058b))


### BREAKING CHANGES

* Node.js v8.x is now end of life. Please upgrade to version
10 and above. See https://nodejs.org/en/about/releases.





## [1.30.1](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.30.0...@loopback/cli@1.30.1) (2020-02-06)

**Note:** Version bump only for package @loopback/cli





# [1.30.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.29.0...@loopback/cli@1.30.0) (2020-02-05)


### Features

* leverage isactive for transaction ([fc94437](https://github.com/strongloop/loopback-next/commit/fc9443787039d4a1db3008a0141f5693f95bfbd4))
* **cli:** add hasOne relation type to `lb4 relation` ([3046f3e](https://github.com/strongloop/loopback-next/commit/3046f3e9ca29225c2ca64567af0be337a6fa5b00))





# [1.29.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.28.1...@loopback/cli@1.29.0) (2020-01-27)


### Bug Fixes

* **cli:** disgard any changes if lb4 `relation` fails ([08dc87c](https://github.com/strongloop/loopback-next/commit/08dc87ca3f654f3669c5ffb130e1e4cbf0dcebef))
* **cli:** fix has many relation controller attribute ([5aa83df](https://github.com/strongloop/loopback-next/commit/5aa83df2fe3c38165174328d26726690f6cbafb5))
* **cli:** index file should be updated. Add relation interface to model template ([7fd9b88](https://github.com/strongloop/loopback-next/commit/7fd9b88626a7d1b4a227077a4334fdbd00edea0d))
* **cli:** reject datasources with no name property for service generator ([cc871e5](https://github.com/strongloop/loopback-next/commit/cc871e509b5c3a0de2ac0dc1108332285aa808a4))


### Features

* **cli:** add static BINDING_KEY prop to non-global interceptors ([5fbd95f](https://github.com/strongloop/loopback-next/commit/5fbd95f47f67207d7e0430d8c08e2a9738e685ae))





## [1.28.1](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.28.0...@loopback/cli@1.28.1) (2020-01-07)

**Note:** Version bump only for package @loopback/cli





# [1.28.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.27.0...@loopback/cli@1.28.0) (2020-01-07)


### Features

* add title property to ping response schema definition ([b8b7490](https://github.com/strongloop/loopback-next/commit/b8b7490ce29d0973208ba38c3365de9091b7a795))





# [1.27.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.26.0...@loopback/cli@1.27.0) (2019-12-09)


### Features

* **cli:** add default option for gracePeriodForClose to configure http/https close ([5a243e2](https://github.com/strongloop/loopback-next/commit/5a243e280868c4b83d7b5685f326a44baf5cbd9a))
* **cli:** update templates to enable esModuleInterop and default imports from non-ES modules ([83e628b](https://github.com/strongloop/loopback-next/commit/83e628bdf5834102aa9042e52a3d7e608d2d1754))





# [1.26.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.25.1...@loopback/cli@1.26.0) (2019-11-25)


### Bug Fixes

* **cli:** disconnect the datasource after the model was discovered ([ad30c61](https://github.com/strongloop/loopback-next/commit/ad30c61e8f35795bef6c2aef893884e520561832))
* **cli:** emit correct property definitions for built-in types ([6a972db](https://github.com/strongloop/loopback-next/commit/6a972db819aab9f831a26da4f2f81abe3c26efe7))
* **cli:** emit correct property definitions for built-in types ([9d34f23](https://github.com/strongloop/loopback-next/commit/9d34f23bd8eadaed9a38ca95339384bddce041b2))
* **cli:** handle missing target artifact dir ([ba34838](https://github.com/strongloop/loopback-next/commit/ba348384b045d6976e257f09cdc610766568abfa))
* **cli:** updated OAS 'Date' JS Type Mapping to 'string' ([839caa9](https://github.com/strongloop/loopback-next/commit/839caa92038d5ba8548106cd4136ee40d9abf679))


### Features

* **cli:** add `connectors.json` ([802529e](https://github.com/strongloop/loopback-next/commit/802529ed0ba1e3a9f9ef417b4b8b4a7459589682))
* use stringifyObject instead of JSON.stringify for connector metadata ([da60ee7](https://github.com/strongloop/loopback-next/commit/da60ee79d48a7ec11f510ccdbecc878e28651237))
* **cli:** add lb4 update command to check/update project dependencies ([54d1896](https://github.com/strongloop/loopback-next/commit/54d1896f63705b6938fe74ba2c21ad0b4d9bea23))
* **cli:** add the ability to check latest cli version ([869d1e4](https://github.com/strongloop/loopback-next/commit/869d1e4b19ba5483521a632a9c8af4b39ca7254f))
* **cli:** update controller template to enable filter for findById endpoint ([b0ce84b](https://github.com/strongloop/loopback-next/commit/b0ce84b79158cadf2f53bbe627da4d8196f0543f))





## [1.25.1](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.25.0...@loopback/cli@1.25.1) (2019-11-13)

**Note:** Version bump only for package @loopback/cli





# [1.25.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.24.0...@loopback/cli@1.25.0) (2019-11-12)


### Bug Fixes

* **cli:** improve message for model discovery code generation ([15c11d4](https://github.com/strongloop/loopback-next/commit/15c11d4b6644182b4bd5fc6be34fe805104fc3ca))
* update error message when failing to read datasource, to include filename ([6663733](https://github.com/strongloop/loopback-next/commit/6663733586ec3a98816f63a887c28b3debf51e4c)), closes [#3965](https://github.com/strongloop/loopback-next/issues/3965)


### Features

* **cli:** generate datasource json with '.config.json` extension ([51d8f7b](https://github.com/strongloop/loopback-next/commit/51d8f7b20ec59f888fd6d0634efb47d111f00ef7))
* **cli:** improve UX of multi-item selection ([077f38c](https://github.com/strongloop/loopback-next/commit/077f38ceccb2e1568aed69dbe00e298b30106c30))
* **cli:** recognize PK properties defined as `{id: 1}` ([1094509](https://github.com/strongloop/loopback-next/commit/10945093e17b260686e532804f71965d7b156606))





# [1.24.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.23.2...@loopback/cli@1.24.0) (2019-10-24)


### Bug Fixes

* **cli:** append "Service" in service generator ([c8fb805](https://github.com/strongloop/loopback-next/commit/c8fb8058c375fe22b0c64988c7ff91c1024084ed))


### Features

* **cli:** add inclusion resolver to lb4 relation ([199e1bc](https://github.com/strongloop/loopback-next/commit/199e1bc84a6c57fe650db9588bdb121d27eca7a3))





## [1.23.2](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.23.1...@loopback/cli@1.23.2) (2019-10-07)


### Bug Fixes

* **cli:** fix typo in cli relation tests ([466f79b](https://github.com/strongloop/loopback-next/commit/466f79b))





## [1.23.1](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.23.0...@loopback/cli@1.23.1) (2019-09-28)


### Bug Fixes

* **cli:** make sure properties are correctly generated ([369d58b](https://github.com/strongloop/loopback-next/commit/369d58b))





# [1.23.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.22.1...@loopback/cli@1.23.0) (2019-09-27)


### Bug Fixes

* **cli:** remove extra SPACE at EOL in help output ([aeaf793](https://github.com/strongloop/loopback-next/commit/aeaf793))


### Features

* **cli:** add new command `import-lb3-model` (EXPERIMENTAL) ([2e465e6](https://github.com/strongloop/loopback-next/commit/2e465e6))
* **cli:** print help on updating snapshots when some snapshots were not matched ([c6959b8](https://github.com/strongloop/loopback-next/commit/c6959b8))
* **cli:** write snapshot files in parallel ([a16ae34](https://github.com/strongloop/loopback-next/commit/a16ae34))





## [1.22.1](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.22.0...@loopback/cli@1.22.1) (2019-09-17)

**Note:** Version bump only for package @loopback/cli





# [1.22.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.21.6...@loopback/cli@1.22.0) (2019-09-17)


### Bug Fixes

* **cli:** exclude *.tsbuildinfo from Docker image ([581a0f3](https://github.com/strongloop/loopback-next/commit/581a0f3))
* model with id required ([270e13e](https://github.com/strongloop/loopback-next/commit/270e13e))
* **cli:** fix schema title for POST operation in relation controllers ([34a2077](https://github.com/strongloop/loopback-next/commit/34a2077))


### Features

* **cli:** add lifecycle support for datasources ([8573173](https://github.com/strongloop/loopback-next/commit/8573173))
* use descriptive title to describe schema of POST (create) request bodies ([8f49a45](https://github.com/strongloop/loopback-next/commit/8f49a45))
* **eslint-config:** enable "no-misused-promises" rule ([88d5494](https://github.com/strongloop/loopback-next/commit/88d5494))





## [1.21.6](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.21.5...@loopback/cli@1.21.6) (2019-09-06)

**Note:** Version bump only for package @loopback/cli





## [1.21.5](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.21.4...@loopback/cli@1.21.5) (2019-09-03)


### Bug Fixes

* **cli:** belongsto property generation ([82a95d4](https://github.com/strongloop/loopback-next/commit/82a95d4))





## [1.21.4](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.21.3...@loopback/cli@1.21.4) (2019-08-19)

**Note:** Version bump only for package @loopback/cli





## [1.21.3](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.21.2...@loopback/cli@1.21.3) (2019-08-15)

**Note:** Version bump only for package @loopback/cli





## [1.21.2](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.21.1...@loopback/cli@1.21.2) (2019-08-15)

**Note:** Version bump only for package @loopback/cli





## [1.21.1](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.21.0...@loopback/cli@1.21.1) (2019-08-15)


### Bug Fixes

* set foreignkey to be optional in the requestbody of hasmany relation ([d46ea18](https://github.com/strongloop/loopback-next/commit/d46ea18))





# [1.21.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.20.0...@loopback/cli@1.21.0) (2019-07-31)


### Bug Fixes

* add class name separation to multiple class names output ([fc79bf5](https://github.com/strongloop/loopback-next/commit/fc79bf5)), closes [#3350](https://github.com/strongloop/loopback-next/issues/3350)


### Features

* **cli:** improve `lb4 service` to generate local service classes/providers ([f743008](https://github.com/strongloop/loopback-next/commit/f743008))





# [1.20.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.19.0...@loopback/cli@1.20.0) (2019-07-26)


### Bug Fixes

* **cli:** remove -p option from eslint ([d2ffd80](https://github.com/strongloop/loopback-next/commit/d2ffd80))
* add support for excluding custom pk from POST requests ([9694d99](https://github.com/strongloop/loopback-next/commit/9694d99))


### Features

* update examples and docs to use getModelSchemaRef ([99758b1](https://github.com/strongloop/loopback-next/commit/99758b1))
* **cli:** update templates to make use of getModelSchemaRef ([4147619](https://github.com/strongloop/loopback-next/commit/4147619))
* remove openapi-v3-types package ([2a93395](https://github.com/strongloop/loopback-next/commit/2a93395))





# [1.19.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.18.0...@loopback/cli@1.19.0) (2019-07-17)


### Bug Fixes

* **cli:** app generator handles tildified project path. relevant test added ([7f7feaa](https://github.com/strongloop/loopback-next/commit/7f7feaa))
* **cli:** rearrange interceptor cli prompts ([0b2ed34](https://github.com/strongloop/loopback-next/commit/0b2ed34))
* fix conflict ([6302101](https://github.com/strongloop/loopback-next/commit/6302101))


### Features

* **cli:** modify controller templates to exclude id from POST requests ([4c1ce67](https://github.com/strongloop/loopback-next/commit/4c1ce67))
* **cli:** store original cli version in .yo.rc.json ([3b7db55](https://github.com/strongloop/loopback-next/commit/3b7db55))





# [1.18.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.17.2...@loopback/cli@1.18.0) (2019-06-28)


### Bug Fixes

* address violations of "no-floating-promises" rule ([0947531](https://github.com/strongloop/loopback-next/commit/0947531))


### Features

* **cli:** enable source map for npm start script ([1882240](https://github.com/strongloop/loopback-next/commit/1882240))
* **cli:** modify Controller templates to allow partial updates via PATCH ([c7c6695](https://github.com/strongloop/loopback-next/commit/c7c6695))





## [1.17.2](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.17.1...@loopback/cli@1.17.2) (2019-06-21)


### Bug Fixes

* **cli:** make sure tsbuildinfo is removed by the clean script ([3fdc0b1](https://github.com/strongloop/loopback-next/commit/3fdc0b1))
* **cli:** remove no-any warning from model template ([264aa28](https://github.com/strongloop/loopback-next/commit/264aa28))





## [1.17.1](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.17.0...@loopback/cli@1.17.1) (2019-06-20)

**Note:** Version bump only for package @loopback/cli





# [1.17.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.16.1...@loopback/cli@1.17.0) (2019-06-17)


### Bug Fixes

* **cli:** change class/file naming convention. Add prompt msg ([0b2a45b](https://github.com/strongloop/loopback-next/commit/0b2a45b))
* discover uses owner instead of schema ([ed588b6](https://github.com/strongloop/loopback-next/commit/ed588b6))
* remove forgotten references to tslint ([faa0a92](https://github.com/strongloop/loopback-next/commit/faa0a92))
* **cli:** discover prompt exits after generating ([8ba0dd5](https://github.com/strongloop/loopback-next/commit/8ba0dd5))


### Features

* **build:** enable incremental compilation ([2120712](https://github.com/strongloop/loopback-next/commit/2120712))





## [1.16.1](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.16.0...@loopback/cli@1.16.1) (2019-06-06)

**Note:** Version bump only for package @loopback/cli





# [1.16.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.15.1...@loopback/cli@1.16.0) (2019-06-06)


### Features

* **cli:** add lb4 interceptor command to generate interceptors ([58017b6](https://github.com/strongloop/loopback-next/commit/58017b6))





## [1.15.1](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.15.0...@loopback/cli@1.15.1) (2019-06-03)


### Bug Fixes

* **cli:** add eslint related dev dependencies to generated package.json ([fc18caf](https://github.com/strongloop/loopback-next/commit/fc18caf))





# [1.15.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.14.1...@loopback/cli@1.15.0) (2019-06-03)


### Bug Fixes

* **cli:** add type param to Filter and Where ([a9570bc](https://github.com/strongloop/loopback-next/commit/a9570bc))


### Features

* add navigational properties to find* methods ([1f0aa0b](https://github.com/strongloop/loopback-next/commit/1f0aa0b))
* replace tslint with eslint ([44185a7](https://github.com/strongloop/loopback-next/commit/44185a7))





## [1.14.1](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.14.0...@loopback/cli@1.14.1) (2019-05-31)


### Bug Fixes

* modelSettings is stringified properly [#2915](https://github.com/strongloop/loopback-next/issues/2915) ([84072ec](https://github.com/strongloop/loopback-next/commit/84072ec))





# [1.14.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.13.1...@loopback/cli@1.14.0) (2019-05-30)


### Features

* **cli:** add `lb4 relation` command ([75939a4](https://github.com/strongloop/loopback-next/commit/75939a4))





## [1.13.1](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.13.0...@loopback/cli@1.13.1) (2019-05-23)


### Bug Fixes

* **cli:** clean up template for life cycle observers ([6733610](https://github.com/strongloop/loopback-next/commit/6733610))





# [1.13.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.12.1...@loopback/cli@1.13.0) (2019-05-14)


### Features

* add lb3 application ([bf60011](https://github.com/strongloop/loopback-next/commit/bf60011))





## [1.12.1](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.12.0...@loopback/cli@1.12.1) (2019-05-10)

**Note:** Version bump only for package @loopback/cli





# [1.12.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.11.3...@loopback/cli@1.12.0) (2019-05-09)


### Features

* **cli:** improve scaffolding of complex model settings ([5035c63](https://github.com/strongloop/loopback-next/commit/5035c63))





## [1.11.3](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.11.2...@loopback/cli@1.11.3) (2019-05-06)

**Note:** Version bump only for package @loopback/cli





## [1.11.2](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.11.1...@loopback/cli@1.11.2) (2019-04-26)


### Bug Fixes

* **cli:** escape char sequences for javascript comments ([83ff105](https://github.com/strongloop/loopback-next/commit/83ff105))
* **cli:** escape identifiers with conflicting name as decorators ([6d71439](https://github.com/strongloop/loopback-next/commit/6d71439))





## [1.11.1](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.11.0...@loopback/cli@1.11.1) (2019-04-20)


### Bug Fixes

* **cli:** keep or escape property names for models ([cb308ad](https://github.com/strongloop/loopback-next/commit/cb308ad))





# [1.11.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.10.0...@loopback/cli@1.11.0) (2019-04-11)


### Bug Fixes

* **cli:** generate operation only for the 1st tag to avoid duplicate routes ([4843a1f](https://github.com/strongloop/loopback-next/commit/4843a1f))
* **cli:** improve openapi code generation for naming and typing ([af20548](https://github.com/strongloop/loopback-next/commit/af20548))


### Features

* **cli:** add lb4 discover for model discovery ([35f719c](https://github.com/strongloop/loopback-next/commit/35f719c))
* **cli:** normalize variable names for OpenAPI paths ([a3d0dfc](https://github.com/strongloop/loopback-next/commit/a3d0dfc))





# [1.10.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.9.0...@loopback/cli@1.10.0) (2019-04-09)


### Bug Fixes

* **cli:** make sure the item type is imported for an array in openapi spec ([91b2381](https://github.com/strongloop/loopback-next/commit/91b2381))


### Features

* **cli:** add `lb4 observer` command to generate life cycle scripts ([d54651d](https://github.com/strongloop/loopback-next/commit/d54651d))





# [1.9.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.8.4...@loopback/cli@1.9.0) (2019-04-05)


### Features

* add greeter-extension example ([9b09298](https://github.com/strongloop/loopback-next/commit/9b09298))





## [1.8.4](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.8.3...@loopback/cli@1.8.4) (2019-03-22)

**Note:** Version bump only for package @loopback/cli





## [1.8.3](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.8.2...@loopback/cli@1.8.3) (2019-03-22)


### Bug Fixes

* **build:** remove "dom" from the list of global libraries ([781cd1d](https://github.com/strongloop/loopback-next/commit/781cd1d))





## [1.8.2](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.8.1...@loopback/cli@1.8.2) (2019-03-12)


### Bug Fixes

* **cli:** setup controller generator after adding properties ([b0ee417](https://github.com/strongloop/loopback-next/commit/b0ee417))
* **cli:** simplify HTTP server setup in acceptance tests ([aa0e2f7](https://github.com/strongloop/loopback-next/commit/aa0e2f7))
* **cli:** use pascalCase for toClassName to handle '-' ([861256c](https://github.com/strongloop/loopback-next/commit/861256c))


### Performance Improvements

* update dockerfile to better version ([5494243](https://github.com/strongloop/loopback-next/commit/5494243))





## [1.8.1](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.8.0...@loopback/cli@1.8.1) (2019-03-01)

**Note:** Version bump only for package @loopback/cli





# [1.8.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.7.0...@loopback/cli@1.8.0) (2019-03-01)


### Bug Fixes

* **cli:** fix prompt for base repository class ([b429729](https://github.com/strongloop/loopback-next/commit/b429729)), closes [#2429](https://github.com/strongloop/loopback-next/issues/2429)


### Features

* add express example ([dd2400e](https://github.com/strongloop/loopback-next/commit/dd2400e))





# [1.7.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.6.0...@loopback/cli@1.7.0) (2019-02-25)


### Bug Fixes

* **cli:** do not install deps for built-in connectors ([2e035a5](https://github.com/strongloop/loopback-next/commit/2e035a5))
* update version of nyc ([f8db27c](https://github.com/strongloop/loopback-next/commit/f8db27c))
* **cli:** force test host to be HOST env var or ipv4 interface ([1664d4f](https://github.com/strongloop/loopback-next/commit/1664d4f))
* **cli:** generate property.array for array of simple types ([ec80d9a](https://github.com/strongloop/loopback-next/commit/ec80d9a))


### Features

* **cli:** add `--docker` option to generate docker files ([4cd2442](https://github.com/strongloop/loopback-next/commit/4cd2442))





# [1.6.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.5.2...@loopback/cli@1.6.0) (2019-02-08)


### Bug Fixes

* remove unused juggler import ([0121c10](https://github.com/strongloop/loopback-next/commit/0121c10))
* update to the most recent lodash version ([65ee865](https://github.com/strongloop/loopback-next/commit/65ee865))


### Features

* **cli:** scaffold test files to `src/__tests__` ([d3a3bea](https://github.com/strongloop/loopback-next/commit/d3a3bea))
* **cli:** use a custom repository base class ([edbbe88](https://github.com/strongloop/loopback-next/commit/edbbe88))





## [1.5.2](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.5.1...@loopback/cli@1.5.2) (2019-01-28)


### Bug Fixes

* **cli:** add fs-extra dependency as it's used by lb example ([3c74ffa](https://github.com/strongloop/loopback-next/commit/3c74ffa))
* **cli:** allow base class exist for model config option ([9605ed1](https://github.com/strongloop/loopback-next/commit/9605ed1))





## [1.5.1](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.5.0...@loopback/cli@1.5.1) (2019-01-15)


### Bug Fixes

* **cli:** change enable setting check ([f4a9dc0](https://github.com/strongloop/loopback-next/commit/f4a9dc0))





# [1.5.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.4.0...@loopback/cli@1.5.0) (2019-01-14)


### Bug Fixes

* **cli:** add descriptions to features ([8a94f8f](https://github.com/strongloop/loopback-next/commit/8a94f8f))
* **cli:** remove license header from test code template ([1fd35f4](https://github.com/strongloop/loopback-next/commit/1fd35f4))


### Features

* always include tslint and typescript in project dev-dependencies ([e0df285](https://github.com/strongloop/loopback-next/commit/e0df285))
* use dependency instead of keyword to check loopback projects ([bb6ee51](https://github.com/strongloop/loopback-next/commit/bb6ee51))
* **cli:** add property modelSettings ([e0f75ac](https://github.com/strongloop/loopback-next/commit/e0f75ac))
* **cli:** add strict prompt to model generator ([a68d78b](https://github.com/strongloop/loopback-next/commit/a68d78b))





# [1.4.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.3.0...@loopback/cli@1.4.0) (2018-12-20)


### Bug Fixes

* **cli:** set `required: true` in property decoration for openapi ([3c37286](https://github.com/strongloop/loopback-next/commit/3c37286))


### Features

* **cli:** new projects load tslint config from `[@loopback](https://github.com/loopback)/tslint-config` ([5b9c329](https://github.com/strongloop/loopback-next/commit/5b9c329))





# [1.3.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.2.2...@loopback/cli@1.3.0) (2018-12-13)


### Bug Fixes

* add model/entity descriptions ([8156f9d](https://github.com/strongloop/loopback-next/commit/8156f9d))
* **cli:** add missing PUT method in rest controller template ([8394c74](https://github.com/strongloop/loopback-next/commit/8394c74))
* change service generator ds to uppercase ([83840a3](https://github.com/strongloop/loopback-next/commit/83840a3))


### Features

* scaffold DB migration script for new app projects ([f783f07](https://github.com/strongloop/loopback-next/commit/f783f07))
* **cli:** allow annonymous schemas in openapi to be mapped to models ([eedec1e](https://github.com/strongloop/loopback-next/commit/eedec1e))





## [1.2.2](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.2.1...@loopback/cli@1.2.2) (2018-11-26)

**Note:** Version bump only for package @loopback/cli





## [1.2.1](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.2.0...@loopback/cli@1.2.1) (2018-11-17)

**Note:** Version bump only for package @loopback/cli





# [1.2.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.1.1...@loopback/cli@1.2.0) (2018-11-17)


### Bug Fixes

* **cli:** allow `*` for version range ([0a42541](https://github.com/strongloop/loopback-next/commit/0a42541))


### Features

* an extension adding a self-hosted REST API Explorer ([4c165c7](https://github.com/strongloop/loopback-next/commit/4c165c7))





## [1.1.1](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.1.0...@loopback/cli@1.1.1) (2018-11-14)

**Note:** Version bump only for package @loopback/cli





<a name="1.1.0"></a>
# [1.1.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.0.1...@loopback/cli@1.1.0) (2018-11-08)


### Bug Fixes

* change unmatched html tags, remove redundant 'px' from 0 ([46d08f6](https://github.com/strongloop/loopback-next/commit/46d08f6))
* **cli:** allow other connectors to be used for repositories ([9a0d9a8](https://github.com/strongloop/loopback-next/commit/9a0d9a8))
* update usage of `x-ts-type` for schemas ([57c694e](https://github.com/strongloop/loopback-next/commit/57c694e))
* **cli:** set glob options to support windows paths with special chars ([9a84ef0](https://github.com/strongloop/loopback-next/commit/9a84ef0))


### Features

* **cli:** use app.static for default home page ([1dcf169](https://github.com/strongloop/loopback-next/commit/1dcf169))





<a name="1.0.1"></a>
## [1.0.1](https://github.com/strongloop/loopback-next/compare/@loopback/cli@1.0.0...@loopback/cli@1.0.1) (2018-10-17)


### Bug Fixes

* **cli:** add more exit checks to fail fast ([90c4406](https://github.com/strongloop/loopback-next/commit/90c4406))





<a name="0.31.0"></a>
# [0.31.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.30.0...@loopback/cli@0.31.0) (2018-10-08)


### Features

* use resolveJsonModule to load datasource config ([73e19ff](https://github.com/strongloop/loopback-next/commit/73e19ff))





<a name="0.30.0"></a>
# [0.30.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.29.0...@loopback/cli@0.30.0) (2018-10-06)


### Bug Fixes

* **cli:** generate matching arg names for repository constructors ([190fbf3](https://github.com/strongloop/loopback-next/commit/190fbf3))
* **cli:** remove dist-util from project templates ([f6c3048](https://github.com/strongloop/loopback-next/commit/f6c3048))


### Features

* deprecate dist-util package ([91a343c](https://github.com/strongloop/loopback-next/commit/91a343c))





<a name="0.29.0"></a>
# [0.29.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.28.0...@loopback/cli@0.29.0) (2018-10-05)


### Features

* **cli:** add lb4 model option to select base model class ([4c0ce80](https://github.com/strongloop/loopback-next/commit/4c0ce80)), closes [#1698](https://github.com/strongloop/loopback-next/issues/1698)





<a name="0.28.0"></a>
# [0.28.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.27.0...@loopback/cli@0.28.0) (2018-10-03)


### Bug Fixes

* **cli:** fixed ds names that were hyphened ([568307c](https://github.com/strongloop/loopback-next/commit/568307c)), closes [#1791](https://github.com/strongloop/loopback-next/issues/1791)
* clean up dataSource usage ([69506a4](https://github.com/strongloop/loopback-next/commit/69506a4))


### Features

* **cli:** check project deps against cli template ([8d056c4](https://github.com/strongloop/loopback-next/commit/8d056c4))





<a name="0.27.0"></a>
# [0.27.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.26.0...@loopback/cli@0.27.0) (2018-09-28)


### Bug Fixes

* **cli:** fixes final datasource class name on repository and service ([d0994af](https://github.com/strongloop/loopback-next/commit/d0994af)), closes [#1771](https://github.com/strongloop/loopback-next/issues/1771)


### Features

* **cli:** add code template for default home page controller ([f4be330](https://github.com/strongloop/loopback-next/commit/f4be330))
* **repository:** return an object for count and updateAll ([c146366](https://github.com/strongloop/loopback-next/commit/c146366))





<a name="0.26.0"></a>
# [0.26.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.25.0...@loopback/cli@0.26.0) (2018-09-27)


### Bug Fixes

* **cli:** datasource class being referenced in generators ([6d345f7](https://github.com/strongloop/loopback-next/commit/6d345f7))


### Features

* **cli:** add basic scaffolding for lb4 service ([bed83b3](https://github.com/strongloop/loopback-next/commit/bed83b3))
* **cli:** add integration tests for lb4 service ([3731f5b](https://github.com/strongloop/loopback-next/commit/3731f5b))
* **cli:** change location fixtures service/repository ([d4f5b5c](https://github.com/strongloop/loopback-next/commit/d4f5b5c))
* **cli:** lb4 service install service-proxy if missing ([b086d2d](https://github.com/strongloop/loopback-next/commit/b086d2d))
* **cli:** lb4 service/repository shared scaffold ([9bafc6d](https://github.com/strongloop/loopback-next/commit/9bafc6d))





<a name="0.25.0"></a>
# [0.25.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.24.0...@loopback/cli@0.25.0) (2018-09-25)


### Features

* add "filter" parameter to "find" endpoints ([7e1acfc](https://github.com/strongloop/loopback-next/commit/7e1acfc))
* **cli:** add responses for PingController.ping() ([ec52b89](https://github.com/strongloop/loopback-next/commit/ec52b89))





<a name="0.24.0"></a>
# [0.24.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.23.0...@loopback/cli@0.24.0) (2018-09-21)


### Bug Fixes

* **cli:** removed unused dependencies from project template ([3907df4](https://github.com/strongloop/loopback-next/commit/3907df4))


### Features

* **cli:** add update notifier to remind cli upgrade ([61255cc](https://github.com/strongloop/loopback-next/commit/61255cc))
* **testlab:** add createRestAppClient(), simplify usage in tests ([d75be77](https://github.com/strongloop/loopback-next/commit/d75be77))
* **testlab:** set port to 0 in givenHttpServerConfig ([90a0bfb](https://github.com/strongloop/loopback-next/commit/90a0bfb))





<a name="0.23.0"></a>
# [0.23.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.22.11...@loopback/cli@0.23.0) (2018-09-19)


### Features

* **cli:** add lb4 repository feature ([0397c04](https://github.com/strongloop/loopback-next/commit/0397c04)), closes [#1588](https://github.com/strongloop/loopback-next/issues/1588)
* **cli:** add test for multiple repositories ([6e6faad](https://github.com/strongloop/loopback-next/commit/6e6faad))
* **cli:** add util shared functions and constants ([26915e5](https://github.com/strongloop/loopback-next/commit/26915e5))
* **cli:** ast-helper integration ([99a0bad](https://github.com/strongloop/loopback-next/commit/99a0bad))
* **cli:** change msg when no datasource or repository exists ([739676b](https://github.com/strongloop/loopback-next/commit/739676b))
* **repository:** rework *ById methods to throw if id not found ([264f231](https://github.com/strongloop/loopback-next/commit/264f231))





<a name="0.22.11"></a>
## [0.22.11](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.22.10...@loopback/cli@0.22.11) (2018-09-17)


### Bug Fixes

* **cli:** generate correct index.js without loopback build ([1c8cb3e](https://github.com/strongloop/loopback-next/commit/1c8cb3e))
* **cli:** use rimraf to replace rm -rf ([479f363](https://github.com/strongloop/loopback-next/commit/479f363))





<a name="0.22.10"></a>
## [0.22.10](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.22.9...@loopback/cli@0.22.10) (2018-09-14)

**Note:** Version bump only for package @loopback/cli





<a name="0.22.9"></a>
## [0.22.9](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.22.8...@loopback/cli@0.22.9) (2018-09-14)

**Note:** Version bump only for package @loopback/cli





<a name="0.22.8"></a>
## [0.22.8](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.22.7...@loopback/cli@0.22.8) (2018-09-14)


### Bug Fixes

* **cli:** enforce an empty object on connectors without settings property ([111442b](https://github.com/strongloop/loopback-next/commit/111442b)), closes [#1697](https://github.com/strongloop/loopback-next/issues/1697)
* **cli:** git-ignore all "dist*" dirs in scaffolded projects ([1cab517](https://github.com/strongloop/loopback-next/commit/1cab517))
* **cli:** update template with responses object ([a2bbbc9](https://github.com/strongloop/loopback-next/commit/a2bbbc9))





<a name="0.22.7"></a>
## [0.22.7](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.22.6...@loopback/cli@0.22.7) (2018-09-12)


### Bug Fixes

* make `lb model` prompts clearer ([2ec4d2f](https://github.com/strongloop/loopback-next/commit/2ec4d2f))





<a name="0.22.6"></a>
## [0.22.6](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.22.5...@loopback/cli@0.22.6) (2018-09-10)

**Note:** Version bump only for package @loopback/cli





<a name="0.22.5"></a>
## [0.22.5](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.22.3...@loopback/cli@0.22.5) (2018-09-10)

**Note:** Version bump only for package @loopback/cli





<a name="0.22.4"></a>
## [0.22.4](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.22.3...@loopback/cli@0.22.4) (2018-09-10)

**Note:** Version bump only for package @loopback/cli





<a name="0.22.3"></a>
## [0.22.3](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.22.2...@loopback/cli@0.22.3) (2018-09-10)

**Note:** Version bump only for package @loopback/cli





<a name="0.22.2"></a>
## [0.22.2](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.22.1...@loopback/cli@0.22.2) (2018-09-10)

**Note:** Version bump only for package @loopback/cli





<a name="0.22.1"></a>
## [0.22.1](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.22.0...@loopback/cli@0.22.1) (2018-09-10)

**Note:** Version bump only for package @loopback/cli





<a name="0.22.0"></a>
# [0.22.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.21.4...@loopback/cli@0.22.0) (2018-09-08)


### Bug Fixes

* remove extra imports for mixin dependencies ([35b916b](https://github.com/strongloop/loopback-next/commit/35b916b))
* **cli:** rename repository/service feature flags ([c089299](https://github.com/strongloop/loopback-next/commit/c089299))


### Features

* **service-proxy:** add service mixin ([fb01931](https://github.com/strongloop/loopback-next/commit/fb01931))





<a name="0.21.4"></a>
## [0.21.4](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.21.3...@loopback/cli@0.21.4) (2018-08-25)

**Note:** Version bump only for package @loopback/cli





<a name="0.21.3"></a>
## [0.21.3](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.21.2...@loopback/cli@0.21.3) (2018-08-24)


### Bug Fixes

* **cli:** tweaks to templates ([6f1d7bb](https://github.com/strongloop/loopback-next/commit/6f1d7bb))





<a name="0.21.2"></a>
## [0.21.2](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.21.1...@loopback/cli@0.21.2) (2018-08-20)


### Bug Fixes

* **cli:** add esnext.asynciterable to lib for typescript ([83a8036](https://github.com/strongloop/loopback-next/commit/83a8036))
* **cli:** increase timeout for app generation tests ([c51383d](https://github.com/strongloop/loopback-next/commit/c51383d))




<a name="0.21.1"></a>
## [0.21.1](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.21.0...@loopback/cli@0.21.1) (2018-08-15)


### Bug Fixes

* **repository:** change the way array property definition is built for the juggler ([2471c88](https://github.com/strongloop/loopback-next/commit/2471c88))




<a name="0.21.0"></a>
# [0.21.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.20.2...@loopback/cli@0.21.0) (2018-08-08)


### Bug Fixes

* import package in template ([14bb6a5](https://github.com/strongloop/loopback-next/commit/14bb6a5))
* **cli:** change model template to properly render array types ([2d43a61](https://github.com/strongloop/loopback-next/commit/2d43a61))
* **cli:** install dependencies for clones examples ([5774f1f](https://github.com/strongloop/loopback-next/commit/5774f1f))
* **cli:** remove deleteAll endpoint from REST Controller template ([34eba34](https://github.com/strongloop/loopback-next/commit/34eba34))
* **cli:** use this.exit instead of throwing an error ([8d25a79](https://github.com/strongloop/loopback-next/commit/8d25a79))


### Features

* **cli:** add repositorymixin and imports by a new switch ([be81131](https://github.com/strongloop/loopback-next/commit/be81131)), closes [#1594](https://github.com/strongloop/loopback-next/issues/1594)
* **cli:** use `app.restServer.url` for console logs ([f31160c](https://github.com/strongloop/loopback-next/commit/f31160c))
* **example-soap-calculator:** add soap web services integration example ([9a8d57c](https://github.com/strongloop/loopback-next/commit/9a8d57c)), closes [#1550](https://github.com/strongloop/loopback-next/issues/1550)




<a name="0.20.2"></a>
## [0.20.2](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.20.1...@loopback/cli@0.20.2) (2018-07-21)




**Note:** Version bump only for package @loopback/cli

<a name="0.20.1"></a>
## [0.20.1](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.20.0...@loopback/cli@0.20.1) (2018-07-20)




**Note:** Version bump only for package @loopback/cli

<a name="0.20.0"></a>
# [0.20.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.19.0...@loopback/cli@0.20.0) (2018-07-20)


### Bug Fixes

* **cli:** fix cli rest controller generator template ([cc9591d](https://github.com/strongloop/loopback-next/commit/cc9591d))


### Features

* **example-todo-list:** add TodoList package/tutorial ([306d437](https://github.com/strongloop/loopback-next/commit/306d437))




<a name="0.19.0"></a>
# [0.19.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.18.1...@loopback/cli@0.19.0) (2018-07-13)


### Bug Fixes

* **cli:** add empty logs to better format model prompts ([60b3d57](https://github.com/strongloop/loopback-next/commit/60b3d57))
* **cli:** adds the <idtype> on param.path for those methods in the rest controller template parsing ([c526b99](https://github.com/strongloop/loopback-next/commit/c526b99))
* **cli:** reorder where and body in CLI template for updateAll and make where optional ([c875707](https://github.com/strongloop/loopback-next/commit/c875707))
* **cli:** support updating multiple index.ts files ([1e92f4f](https://github.com/strongloop/loopback-next/commit/1e92f4f))


### Features

* **cli:** `lb4 model` command to scaffold model files ([3593820](https://github.com/strongloop/loopback-next/commit/3593820))




<a name="0.18.1"></a>
## [0.18.1](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.18.0...@loopback/cli@0.18.1) (2018-07-11)




**Note:** Version bump only for package @loopback/cli

<a name="0.18.0"></a>
# [0.18.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.17.0...@loopback/cli@0.18.0) (2018-07-10)


### Bug Fixes

* **cli:** install deps if necessary for datasource ([4c605b0](https://github.com/strongloop/loopback-next/commit/4c605b0))


### Features

* **cli:** add --format to run lint:fix for generated code ([77f15c7](https://github.com/strongloop/loopback-next/commit/77f15c7))




<a name="0.17.0"></a>
# [0.17.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.16.3...@loopback/cli@0.17.0) (2018-07-09)


### Bug Fixes

* **cli:** tweak getArtifactList to return pascalCased strings ([b3bb208](https://github.com/strongloop/loopback-next/commit/b3bb208))


### Features

* **cli:** add comments for generated methods from openapi ([daa7f78](https://github.com/strongloop/loopback-next/commit/daa7f78))
* **cli:** add config and yes options ([5778a2a](https://github.com/strongloop/loopback-next/commit/5778a2a))
* **cli:** improve openapi handling of body and impl ([640b941](https://github.com/strongloop/loopback-next/commit/640b941))




<a name="0.16.3"></a>
## [0.16.3](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.16.2...@loopback/cli@0.16.3) (2018-06-28)




**Note:** Version bump only for package @loopback/cli

<a name="0.16.2"></a>
## [0.16.2](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.16.1...@loopback/cli@0.16.2) (2018-06-27)




**Note:** Version bump only for package @loopback/cli

<a name="0.16.1"></a>
## [0.16.1](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.16.0...@loopback/cli@0.16.1) (2018-06-26)


### Bug Fixes

* **cli:** allow path level parameters for openapi ([55b041a](https://github.com/strongloop/loopback-next/commit/55b041a))




<a name="0.16.0"></a>
# [0.16.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.14.0...@loopback/cli@0.16.0) (2018-06-25)


### Features

* **cli:** add cli for code generation from openapi ([1a1b12c](https://github.com/strongloop/loopback-next/commit/1a1b12c))




<a name="0.15.0"></a>
# [0.15.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.14.0...@loopback/cli@0.15.0) (2018-06-25)


### Features

* **cli:** add cli for code generation from openapi ([1a1b12c](https://github.com/strongloop/loopback-next/commit/1a1b12c))




<a name="0.14.0"></a>
# [0.14.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.13.6...@loopback/cli@0.14.0) (2018-06-20)


### Bug Fixes

* **cli:** make download-connector-list more robust ([a4c2ce0](https://github.com/strongloop/loopback-next/commit/a4c2ce0))
* **cli:** update successful creation message ([d602ded](https://github.com/strongloop/loopback-next/commit/d602ded)), closes [#886](https://github.com/strongloop/loopback-next/issues/886)


### Features

* **cli:** add lb4 datasource command ([b3844eb](https://github.com/strongloop/loopback-next/commit/b3844eb))




<a name="0.13.6"></a>
## [0.13.6](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.13.5...@loopback/cli@0.13.6) (2018-06-11)




**Note:** Version bump only for package @loopback/cli

<a name="0.13.5"></a>
## [0.13.5](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.13.4...@loopback/cli@0.13.5) (2018-06-09)




**Note:** Version bump only for package @loopback/cli

<a name="0.13.4"></a>
## [0.13.4](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.13.3...@loopback/cli@0.13.4) (2018-06-09)




**Note:** Version bump only for package @loopback/cli

<a name="0.13.3"></a>
## [0.13.3](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.13.1...@loopback/cli@0.13.3) (2018-06-09)




**Note:** Version bump only for package @loopback/cli

<a name="0.13.2"></a>
## [0.13.2](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.13.1...@loopback/cli@0.13.2) (2018-06-09)




**Note:** Version bump only for package @loopback/cli

<a name="0.13.1"></a>
## [0.13.1](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.13.0...@loopback/cli@0.13.1) (2018-06-08)




**Note:** Version bump only for package @loopback/cli

<a name="0.13.0"></a>
# [0.13.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.12.1...@loopback/cli@0.13.0) (2018-06-08)


### Bug Fixes

* **cli:** fix controller.integration.js tests and refactor ([f3edbd9](https://github.com/strongloop/loopback-next/commit/f3edbd9))
* **cli:** fix templates & move some utils to base generator ([1a5cbf8](https://github.com/strongloop/loopback-next/commit/1a5cbf8))
* **cli:** make sure --applicationName is honored ([526e6ca](https://github.com/strongloop/loopback-next/commit/526e6ca))


### Features

* **cli:** add vscode config files ([3738b9c](https://github.com/strongloop/loopback-next/commit/3738b9c))
* **cli:** auto-generate / update index.ts for exports ([2998363](https://github.com/strongloop/loopback-next/commit/2998363)), closes [#1127](https://github.com/strongloop/loopback-next/issues/1127)




<a name="0.12.1"></a>
## [0.12.1](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.12.0...@loopback/cli@0.12.1) (2018-05-28)




**Note:** Version bump only for package @loopback/cli

<a name="0.12.0"></a>
# [0.12.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.11.6...@loopback/cli@0.12.0) (2018-05-23)


### Features

* **cli:** add CLI prompt for controller's http path name ([0f9c438](https://github.com/strongloop/loopback-next/commit/0f9c438))




<a name="0.11.6"></a>
## [0.11.6](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.11.5...@loopback/cli@0.11.6) (2018-05-20)


### Bug Fixes

* replace gulp-rename with our own implementation ([f8349d4](https://github.com/strongloop/loopback-next/commit/f8349d4))




<a name="0.11.5"></a>
## [0.11.5](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.11.4...@loopback/cli@0.11.5) (2018-05-14)




**Note:** Version bump only for package @loopback/cli

<a name="0.11.4"></a>
## [0.11.4](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.11.3...@loopback/cli@0.11.4) (2018-05-14)




**Note:** Version bump only for package @loopback/cli

<a name="0.11.3"></a>
## [0.11.3](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.11.2...@loopback/cli@0.11.3) (2018-05-08)




**Note:** Version bump only for package @loopback/cli

<a name="0.11.2"></a>
## [0.11.2](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.11.1...@loopback/cli@0.11.2) (2018-05-03)




**Note:** Version bump only for package @loopback/cli

<a name="0.11.1"></a>
## [0.11.1](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.11.0...@loopback/cli@0.11.1) (2018-05-03)




**Note:** Version bump only for package @loopback/cli

<a name="0.11.0"></a>
# [0.11.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.9.2...@loopback/cli@0.11.0) (2018-05-03)


### Features

* **cli:** download examples via npm ([43383f5](https://github.com/strongloop/loopback-next/commit/43383f5))
* add helper package "dist-util" ([532f153](https://github.com/strongloop/loopback-next/commit/532f153))




<a name="0.10.0"></a>
# [0.10.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.9.2...@loopback/cli@0.10.0) (2018-05-03)


### Features

* **cli:** download examples via npm ([43383f5](https://github.com/strongloop/loopback-next/commit/43383f5))
* add helper package "dist-util" ([532f153](https://github.com/strongloop/loopback-next/commit/532f153))




<a name="0.9.2"></a>
## [0.9.2](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.9.1...@loopback/cli@0.9.2) (2018-04-26)




**Note:** Version bump only for package @loopback/cli

<a name="0.9.1"></a>
## [0.9.1](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.9.0...@loopback/cli@0.9.1) (2018-04-26)




**Note:** Version bump only for package @loopback/cli

<a name="0.9.0"></a>
# [0.9.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.8.0...@loopback/cli@0.9.0) (2018-04-25)


### Features

* **cli:** improve cli help/version/commands options ([715cc91](https://github.com/strongloop/loopback-next/commit/715cc91))




<a name="0.8.0"></a>
# [0.8.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.7.4...@loopback/cli@0.8.0) (2018-04-16)




**Note:** Version bump only for package @loopback/cli

<a name="0.7.4"></a>
## [0.7.4](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.7.3...@loopback/cli@0.7.4) (2018-04-16)




**Note:** Version bump only for package @loopback/cli

<a name="0.7.3"></a>
## [0.7.3](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.7.1...@loopback/cli@0.7.3) (2018-04-12)




**Note:** Version bump only for package @loopback/cli

<a name="0.7.2"></a>
## [0.7.2](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.7.1...@loopback/cli@0.7.2) (2018-04-12)




**Note:** Version bump only for package @loopback/cli

<a name="0.7.1"></a>
## [0.7.1](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.7.0...@loopback/cli@0.7.1) (2018-04-11)




**Note:** Version bump only for package @loopback/cli

<a name="0.7.0"></a>
# [0.7.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.6.2...@loopback/cli@0.7.0) (2018-04-11)


### Bug Fixes

* change file names to fit advocated naming convention ([0331df8](https://github.com/strongloop/loopback-next/commit/0331df8))


### Features

* **context:** typed binding keys ([685195c](https://github.com/strongloop/loopback-next/commit/685195c))
* **repository:** have [@repository](https://github.com/repository) take in constructor as arg ([3db07eb](https://github.com/strongloop/loopback-next/commit/3db07eb))




<a name="0.6.3"></a>
## [0.6.3](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.6.2...@loopback/cli@0.6.3) (2018-04-06)




**Note:** Version bump only for package @loopback/cli

<a name="0.6.2"></a>
## [0.6.2](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.6.1...@loopback/cli@0.6.2) (2018-04-04)




**Note:** Version bump only for package @loopback/cli

<a name="0.6.1"></a>
## [0.6.1](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.6.0...@loopback/cli@0.6.1) (2018-04-02)




**Note:** Version bump only for package @loopback/cli

<a name="0.6.0"></a>
# [0.6.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.5.2...@loopback/cli@0.6.0) (2018-03-29)


### Bug Fixes

* **cli:** exit gracefully if the project name fails validation ([dfdf090](https://github.com/strongloop/loopback-next/commit/dfdf090))
* **cli:** remove automatic license generation ([537ff86](https://github.com/strongloop/loopback-next/commit/537ff86))


### Code Refactoring

* renamed example-getting-started to example-todo ([7a09f1b](https://github.com/strongloop/loopback-next/commit/7a09f1b))


### BREAKING CHANGES

* example-getting-started is now example-todo




<a name="0.5.2"></a>
## [0.5.2](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.5.1...@loopback/cli@0.5.2) (2018-03-23)




**Note:** Version bump only for package @loopback/cli

<a name="0.5.1"></a>
## [0.5.1](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.5.0...@loopback/cli@0.5.1) (2018-03-21)




**Note:** Version bump only for package @loopback/cli

<a name="0.5.0"></a>
# [0.5.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.4.3...@loopback/cli@0.5.0) (2018-03-21)


### Bug Fixes

* **cli:** update tsconfig.json to include index.ts ([dc5107c](https://github.com/strongloop/loopback-next/commit/dc5107c))


### Features

* **rest:** expose app.requestHandler function ([20a41ac](https://github.com/strongloop/loopback-next/commit/20a41ac))


### BREAKING CHANGES

* **rest:** `RestServer#handleHttp` was renamed to
`RestServer#requestHandler`.




<a name="0.4.3"></a>
## [0.4.3](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.4.2...@loopback/cli@0.4.3) (2018-03-14)




**Note:** Version bump only for package @loopback/cli

<a name="0.4.2"></a>
## [0.4.2](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.4.1...@loopback/cli@0.4.2) (2018-03-13)




**Note:** Version bump only for package @loopback/cli

<a name="0.4.1"></a>
## [0.4.1](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.4.0...@loopback/cli@0.4.1) (2018-03-08)




**Note:** Version bump only for package @loopback/cli

<a name="0.4.0"></a>
# [0.4.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.3.1...@loopback/cli@0.4.0) (2018-03-08)


### Bug Fixes

* clean up the app run test ([c0d3731](https://github.com/strongloop/loopback-next/commit/c0d3731))
* **cli:** add `--allow-console-logs` to app npm test script ([5823a18](https://github.com/strongloop/loopback-next/commit/5823a18))
* template ([cf9cf04](https://github.com/strongloop/loopback-next/commit/cf9cf04))


### Features

* add private option for project generartion ([5c42be4](https://github.com/strongloop/loopback-next/commit/5c42be4))
* **build:** use options to control cli/shell run ([c4e8bce](https://github.com/strongloop/loopback-next/commit/c4e8bce))




<a name="0.3.1"></a>
## [0.3.1](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.3.0...@loopback/cli@0.3.1) (2018-03-07)


### Bug Fixes

* fix typo ([6ecc13c](https://github.com/strongloop/loopback-next/commit/6ecc13c))




<a name="0.3.0"></a>
# [0.3.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.2.0...@loopback/cli@0.3.0) (2018-03-06)


### Bug Fixes

* use lerna to collect versions for loopback modules ([2956bf9](https://github.com/strongloop/loopback-next/commit/2956bf9))


### Features

* **cli:** replace hard-coded loopback module version in templates ([0a742d7](https://github.com/strongloop/loopback-next/commit/0a742d7))
* upgrade from swagger 2 to openapi 3 ([71e5af1](https://github.com/strongloop/loopback-next/commit/71e5af1))




<a name="0.2.0"></a>
# [0.2.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.1.3...@loopback/cli@0.2.0) (2018-03-01)




**Note:** Version bump only for package @loopback/cli

<a name="0.1.3"></a>
## [0.1.3](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.1.2...@loopback/cli@0.1.3) (2018-03-01)


### Bug Fixes

* **cli:** move sequence customization to app constructor ([4ee3429](https://github.com/strongloop/loopback-next/commit/4ee3429))




<a name="0.1.2"></a>
## [0.1.2](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.1.1...@loopback/cli@0.1.2) (2018-02-23)




**Note:** Version bump only for package @loopback/cli

<a name="0.1.1"></a>
## [0.1.1](https://github.com/strongloop/loopback-next/compare/@loopback/cli@0.1.0...@loopback/cli@0.1.1) (2018-02-21)


### Bug Fixes

* **cli:** fix app templates with boot and sequence ([81272e8](https://github.com/strongloop/loopback-next/commit/81272e8))




<a name="0.1.0"></a>
# [0.1.0](https://github.com/strongloop/loopback-next/compare/@loopback/cli@4.0.0-alpha.23...@loopback/cli@0.1.0) (2018-02-21)


### Features

* [@loopback](https://github.com/loopback)/boot ([#858](https://github.com/strongloop/loopback-next/issues/858)) ([c2ca8be](https://github.com/strongloop/loopback-next/commit/c2ca8be))




<a name="4.0.0-alpha.23"></a>
# [4.0.0-alpha.23](https://github.com/strongloop/loopback-next/compare/@loopback/cli@4.0.0-alpha.22...@loopback/cli@4.0.0-alpha.23) (2018-02-15)


### Bug Fixes

* **cli:** remove copyright header from generated app ([#991](https://github.com/strongloop/loopback-next/issues/991)) ([c987b28](https://github.com/strongloop/loopback-next/commit/c987b28)), closes [#944](https://github.com/strongloop/loopback-next/issues/944)


### Features

* **cli:** switch .template to .ejs ([#996](https://github.com/strongloop/loopback-next/issues/996)) ([a27e856](https://github.com/strongloop/loopback-next/commit/a27e856))




<a name="4.0.0-alpha.22"></a>
# [4.0.0-alpha.22](https://github.com/strongloop/loopback-next/compare/@loopback/cli@4.0.0-alpha.21...@loopback/cli@4.0.0-alpha.22) (2018-02-07)


### Bug Fixes

* **build:** fix tslint config and slipped violations ([22f8e05](https://github.com/strongloop/loopback-next/commit/22f8e05))


### build

* drop dist6 related targets ([#945](https://github.com/strongloop/loopback-next/issues/945)) ([a2368ce](https://github.com/strongloop/loopback-next/commit/a2368ce))


### BREAKING CHANGES

* Support for Node.js version lower than 8.0 has been dropped.
Please upgrade to the latest Node.js 8.x LTS version.

Co-Authored-by: Taranveer Virk <taranveer@virk.cc>




<a name="4.0.0-alpha.21"></a>
# [4.0.0-alpha.21](https://github.com/strongloop/loopback-next/compare/@loopback/cli@4.0.0-alpha.20...@loopback/cli@4.0.0-alpha.21) (2018-02-04)




**Note:** Version bump only for package @loopback/cli

<a name="4.0.0-alpha.20"></a>
# [4.0.0-alpha.20](https://github.com/strongloop/loopback-next/compare/@loopback/cli@4.0.0-alpha.19...@loopback/cli@4.0.0-alpha.20) (2018-01-30)




**Note:** Version bump only for package @loopback/cli

<a name="4.0.0-alpha.19"></a>
# [4.0.0-alpha.19](https://github.com/strongloop/loopback-next/compare/@loopback/cli@4.0.0-alpha.18...@loopback/cli@4.0.0-alpha.19) (2018-01-29)




**Note:** Version bump only for package @loopback/cli

<a name="4.0.0-alpha.18"></a>
# [4.0.0-alpha.18](https://github.com/strongloop/loopback-next/compare/@loopback/cli@4.0.0-alpha.17...@loopback/cli@4.0.0-alpha.18) (2018-01-26)


### Bug Fixes

* apply source-maps to test errors ([76a7f56](https://github.com/strongloop/loopback-next/commit/76a7f56)), closes [#602](https://github.com/strongloop/loopback-next/issues/602)
* make mocha self-contained with the source map support ([7c6d869](https://github.com/strongloop/loopback-next/commit/7c6d869))


### Features

* **testlab:** create a test sandbox utility ([#877](https://github.com/strongloop/loopback-next/issues/877)) ([9526ba3](https://github.com/strongloop/loopback-next/commit/9526ba3))




<a name="4.0.0-alpha.17"></a>
# [4.0.0-alpha.17](https://github.com/strongloop/loopback-next/compare/@loopback/cli@4.0.0-alpha.16...@loopback/cli@4.0.0-alpha.17) (2018-01-19)


### Bug Fixes

* **cli:** rework template to use inline param decoration ([e3ef86b](https://github.com/strongloop/loopback-next/commit/e3ef86b))


### Features

* **cli:** generate REST controller with CRUD methods ([57fe858](https://github.com/strongloop/loopback-next/commit/57fe858))
* **cli:** lb4 example [<example-name>] ([4286c0d](https://github.com/strongloop/loopback-next/commit/4286c0d))
* **example-getting-started:** migrate into monorepo ([9478d8b](https://github.com/strongloop/loopback-next/commit/9478d8b))




<a name="4.0.0-alpha.16"></a>
# [4.0.0-alpha.16](https://github.com/strongloop/loopback-next/compare/@loopback/cli@4.0.0-alpha.15...@loopback/cli@4.0.0-alpha.16) (2018-01-11)




**Note:** Version bump only for package @loopback/cli

<a name="4.0.0-alpha.15"></a>
# [4.0.0-alpha.15](https://github.com/strongloop/loopback-next/compare/@loopback/cli@4.0.0-alpha.14...@loopback/cli@4.0.0-alpha.15) (2018-01-03)


### Bug Fixes

* add new openapi package ([#829](https://github.com/strongloop/loopback-next/issues/829)) ([dac9320](https://github.com/strongloop/loopback-next/commit/dac9320))




<a name="4.0.0-alpha.14"></a>
# [4.0.0-alpha.14](https://github.com/strongloop/loopback-next/compare/@loopback/cli@4.0.0-alpha.13...@loopback/cli@4.0.0-alpha.14) (2018-01-03)


### Features

* **cli:** add scoped debug function ([8535c5e](https://github.com/strongloop/loopback-next/commit/8535c5e))




<a name="4.0.0-alpha.13"></a>
# [4.0.0-alpha.13](https://github.com/strongloop/loopback-next/compare/@loopback/cli@4.0.0-alpha.12...@loopback/cli@4.0.0-alpha.13) (2017-12-21)




**Note:** Version bump only for package @loopback/cli

<a name="4.0.0-alpha.12"></a>
# [4.0.0-alpha.12](https://github.com/strongloop/loopback-next/compare/@loopback/cli@4.0.0-alpha.11...@loopback/cli@4.0.0-alpha.12) (2017-12-11)


### Features

* **cli:** Cleanup REST application tooling ([#774](https://github.com/strongloop/loopback-next/issues/774)) ([dc50ed8](https://github.com/strongloop/loopback-next/commit/dc50ed8))




<a name="4.0.0-alpha.11"></a>
# [4.0.0-alpha.11](https://github.com/strongloop/loopback-next/compare/@loopback/cli@4.0.0-alpha.10...@loopback/cli@4.0.0-alpha.11) (2017-12-01)


### Bug Fixes

* **cli:** use prerelease versioning for templates ([81aaa6f](https://github.com/strongloop/loopback-next/commit/81aaa6f))




<a name="4.0.0-alpha.10"></a>
# [4.0.0-alpha.10](https://github.com/strongloop/loopback-next/compare/@loopback/cli@4.0.0-alpha.9...@loopback/cli@4.0.0-alpha.10) (2017-12-01)


### Features

* Add exit() to abort generation ([c95aa23](https://github.com/strongloop/loopback-next/commit/c95aa23))




<a name="4.0.0-alpha.9"></a>
# [4.0.0-alpha.9](https://github.com/strongloop/loopback-next/compare/@loopback/cli@4.0.0-alpha.8...@loopback/cli@4.0.0-alpha.9) (2017-12-01)


### Features

* **cli:** remove default option for controller ([#768](https://github.com/strongloop/loopback-next/issues/768)) ([cc41fd6](https://github.com/strongloop/loopback-next/commit/cc41fd6))




<a name="4.0.0-alpha.8"></a>
# [4.0.0-alpha.8](https://github.com/strongloop/loopback-next/compare/@loopback/cli@4.0.0-alpha.7...@loopback/cli@4.0.0-alpha.8) (2017-11-30)


### Features

* **cli:** Tooling for empty controller ([#762](https://github.com/strongloop/loopback-next/issues/762)) ([14e7897](https://github.com/strongloop/loopback-next/commit/14e7897))




<a name="4.0.0-alpha.7"></a>
# [4.0.0-alpha.7](https://github.com/strongloop/loopback-next/compare/@loopback/cli@4.0.0-alpha.6...@loopback/cli@4.0.0-alpha.7) (2017-11-29)




**Note:** Version bump only for package @loopback/cli

<a name="4.0.0-alpha.6"></a>
# [4.0.0-alpha.6](https://github.com/strongloop/loopback-next/compare/@loopback/cli@4.0.0-alpha.5...@loopback/cli@4.0.0-alpha.6) (2017-11-09)


### Bug Fixes

* Fix CLI to include .gitignore in the templates ([842a191](https://github.com/strongloop/loopback-next/commit/842a191))




<a name="4.0.0-alpha.5"></a>
# [4.0.0-alpha.5](https://github.com/strongloop/loopback-next/compare/@loopback/cli@4.0.0-alpha.4...@loopback/cli@4.0.0-alpha.5) (2017-11-06)


### Bug Fixes

* Add start script for apps ([5ba3734](https://github.com/strongloop/loopback-next/commit/5ba3734))




<a name="4.0.0-alpha.4"></a>
# [4.0.0-alpha.4](https://github.com/strongloop/loopback-next/compare/@loopback/cli@4.0.0-alpha.3...@loopback/cli@4.0.0-alpha.4) (2017-11-06)


### Bug Fixes

* Fix cli templates ([2ebf69f](https://github.com/strongloop/loopback-next/commit/2ebf69f))




<a name="4.0.0-alpha.3"></a>
# [4.0.0-alpha.3](https://github.com/strongloop/loopback-next/compare/@loopback/cli@4.0.0-alpha.2...@loopback/cli@4.0.0-alpha.3) (2017-11-06)


### Bug Fixes

* Fix help text for cli ([8f41c2e](https://github.com/strongloop/loopback-next/commit/8f41c2e))




<a name="4.0.0-alpha.2"></a>
# 4.0.0-alpha.2 (2017-11-06)


### Features

* Add experimental CLI for LoopBack 4 ([707f692](https://github.com/strongloop/loopback-next/commit/707f692))
