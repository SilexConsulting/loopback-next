# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 5.0.0 (2020-04-17)


### Bug Fixes

* passport strategy adapter must support oauth2 flows ([67c2f02](https://github.com/strongloop/loopback-next/commit/67c2f02f74c08ee037827c0045e1f225d6ca8ede))
* update package locks ([cd2f6fa](https://github.com/strongloop/loopback-next/commit/cd2f6fa7a732afe4a16f4ccf8316ff3142959fe8))
* **authentication:** add breaking change notice ([4122488](https://github.com/strongloop/loopback-next/commit/412248843b3ca569141217c5c82f8b0cffe0de64))
* **authentication:** fix broken link in authentication docs ([ee071f6](https://github.com/strongloop/loopback-next/commit/ee071f65d093e9366cd1468694b73838b4d1eb4f))
* **authentication:** fix the options type in decorator ([d4116cf](https://github.com/strongloop/loopback-next/commit/d4116cf1558560560240b73084a6dcc6bc64af38))
* **cli:** extract messages for generators ([2f572bd](https://github.com/strongloop/loopback-next/commit/2f572bd75883420e38bfaa780bc38445aec92e65))
* apply source-maps to test errors ([76a7f56](https://github.com/strongloop/loopback-next/commit/76a7f56cd1166d4407f2a50b188db91a74f7deae)), closes [#602](https://github.com/strongloop/loopback-next/issues/602)
* change file names to fit advocated naming convention ([0331df8](https://github.com/strongloop/loopback-next/commit/0331df8e188f2ba857d04d6a6aff579c7b7726c1))
* change index.d.ts files to point to dist8 ([42ca42d](https://github.com/strongloop/loopback-next/commit/42ca42d5d984df9efe52b219f2be531392256bdd))
* fix [#1643](https://github.com/strongloop/loopback-next/issues/1643): import MetadataAccessor direct from metadata to avoid TypeScript 3 compiler issue ([37d727a](https://github.com/strongloop/loopback-next/commit/37d727a3041898a656d1baff03dfe2f2bb99167a))
* Fix node module names in source code headers ([0316f28](https://github.com/strongloop/loopback-next/commit/0316f28a22a1b85dce72f67b1dab66599c6b9403))
* fix typo of `additional` ([2fd7610](https://github.com/strongloop/loopback-next/commit/2fd76106ecebd4d5257262f4cda8af1e5ec409a3))
* fix version for @loopback/openapi-v2 ([d032129](https://github.com/strongloop/loopback-next/commit/d032129710cecc715be4aa0e458a43402525c5a6))
* include user and token service interfaces in index.ts ([3a1a978](https://github.com/strongloop/loopback-next/commit/3a1a9783678de4dab9c95e5191a405f241c3988b))
* make mocha self-contained with the source map support ([7c6d869](https://github.com/strongloop/loopback-next/commit/7c6d86975a379388f433110df91b1bf0e2e4b94d))
* optional auth metadata ([6145e54](https://github.com/strongloop/loopback-next/commit/6145e54aac5c4a7611312bce0d8653c19fd37f2f))
* **authentication:** fix misleading example ([#794](https://github.com/strongloop/loopback-next/issues/794)) ([3a6057b](https://github.com/strongloop/loopback-next/commit/3a6057b225c35352c8a8297914648a3648bab8f0))
* **authentication:** update broken code in Readme ([3423f6e](https://github.com/strongloop/loopback-next/commit/3423f6ea20797381c7080203bc9562dd9f3f83f9))
* **metadata:** remove the default type to work around a TS bug ([fc89a2c](https://github.com/strongloop/loopback-next/commit/fc89a2c2e01d3642a557c8fca4cd0068d35f8980))


### Build System

* drop dist6 related targets ([#945](https://github.com/strongloop/loopback-next/issues/945)) ([a2368ce](https://github.com/strongloop/loopback-next/commit/a2368cee598c131a826ee42e347266c6e25ae582))


### chore

* remove support for Node.js v8.x ([4281d9d](https://github.com/strongloop/loopback-next/commit/4281d9df50f0715d32879e1442a90b643ec8f542))


### Features

* enable authStrategy to provide OASEnhancer ([df7dd2b](https://github.com/strongloop/loopback-next/commit/df7dd2b7852eef83a259d38819a0175fc408a5fc))
* **authentication:** extend TokenService for revokeable tokens ([d8e9fbb](https://github.com/strongloop/loopback-next/commit/d8e9fbbc83cff964e278da9d004d98cb8a149e9f))
* add `tslib` as dependency ([a6e0b4c](https://github.com/strongloop/loopback-next/commit/a6e0b4ce7b862764167cefedee14c1115b25e0a4)), closes [#4676](https://github.com/strongloop/loopback-next/issues/4676)
* add user profile factory interface ([0630194](https://github.com/strongloop/loopback-next/commit/0630194539ba7971ca6c6579ebb9d986e6340a41))
* **authentication:** allow `[@authenticate](https://github.com/authenticate)` to be applied at class level ([89dbbaa](https://github.com/strongloop/loopback-next/commit/89dbbaa0c76be4929a49aadd34c0dc585e0d1b40))
* **authentication:** allow AuthenticationStrategyProvider to get extended ([c88a424](https://github.com/strongloop/loopback-next/commit/c88a424be41a74e7e77f68f3c19b61577e82c2a1))
* **authentication:** allow defaultMetadata for methods not decorated with [@authenticate](https://github.com/authenticate) ([8d21834](https://github.com/strongloop/loopback-next/commit/8d218344875ce9fd450d97b1bf1c4c925b36092c))
* **authentication:** return binding for registerAuthenticationStrategy ([051eeb8](https://github.com/strongloop/loopback-next/commit/051eeb81b2fb9284f282ea50572d861b61bffece))
* add helper package "dist-util" ([532f153](https://github.com/strongloop/loopback-next/commit/532f15324f0378a951dbb7f101ce9df3bb3711ef))
* Add metadata inspector ([c683019](https://github.com/strongloop/loopback-next/commit/c6830192253e532e4529c18ba680df96db47e8cd))
* Create @loopback/openapi-v2 ([#804](https://github.com/strongloop/loopback-next/issues/804)) ([4ddd4bc](https://github.com/strongloop/loopback-next/commit/4ddd4bc95e69b2653ba3156a50cbb44cbcccaa38))
* design auth system with user scenario ([124c078](https://github.com/strongloop/loopback-next/commit/124c078efea81fb4eefbb972c3b1357e4369a055))
* introduce an authentication strategy interface ([6ebb283](https://github.com/strongloop/loopback-next/commit/6ebb283b2b859c0c8427f100510b01baf3e16996))
* replace tslint with eslint ([44185a7](https://github.com/strongloop/loopback-next/commit/44185a744f772566f2cb186ba8cd288fed65d04c))
* resolve authentication strategy registered via extension point ([e8b8e8b](https://github.com/strongloop/loopback-next/commit/e8b8e8be6d7449e1ed1d11e440a796434240dad0))
* **context:** add `[@inject](https://github.com/inject).binding` and improve `[@inject](https://github.com/inject).setter` ([a396274](https://github.com/strongloop/loopback-next/commit/a396274db3ecd0486b686f4e7f0703636e57e97b))
* **context:** add type as a generic parameter to `ctx.get()` and friends ([24b217d](https://github.com/strongloop/loopback-next/commit/24b217df94a8a21f037a85ff4d6f748741c2f599))
* **context:** typed binding keys ([685195c](https://github.com/strongloop/loopback-next/commit/685195c27825844f2bba9fc177767cccb68a6ebf))
* **metadata:** add strongly-typed metadata accessors ([45f9f80](https://github.com/strongloop/loopback-next/commit/45f9f80c9944ab02c923ce4911ca23e6401e07c7))
* **rest:** expose app.requestHandler function ([20a41ac](https://github.com/strongloop/loopback-next/commit/20a41ac7081a8cead0011447b5a8e5794a320ded))
* upgrade from swagger 2 to openapi 3 ([71e5af1](https://github.com/strongloop/loopback-next/commit/71e5af10365b7fa6277cad8f6a216439610f19df))


### BREAKING CHANGES

* Node.js v8.x is now end of life. Please upgrade to version
10 and above. See https://nodejs.org/en/about/releases.
* **authentication:** PR #3590 rewrote type UserProfile, add the missing
* **authentication:** tag here to amend the one in #3590
* the new interface and authentication action in 2.0 will require users to adjust existing code
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





## [4.1.3](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@4.1.2...@loopback/authentication@4.1.3) (2020-04-11)

**Note:** Version bump only for package @loopback/authentication





## [4.1.2](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@4.1.1...@loopback/authentication@4.1.2) (2020-04-08)


### Bug Fixes

* passport strategy adapter must support oauth2 flows ([67c2f02](https://github.com/strongloop/loopback-next/commit/67c2f02f74c08ee037827c0045e1f225d6ca8ede))





## [4.1.1](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@4.1.0...@loopback/authentication@4.1.1) (2020-03-24)


### Bug Fixes

* update package locks ([cd2f6fa](https://github.com/strongloop/loopback-next/commit/cd2f6fa7a732afe4a16f4ccf8316ff3142959fe8))





# [4.1.0](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@4.0.0...@loopback/authentication@4.1.0) (2020-03-17)


### Features

* enable authStrategy to provide OASEnhancer ([df7dd2b](https://github.com/strongloop/loopback-next/commit/df7dd2b7852eef83a259d38819a0175fc408a5fc))
* **authentication:** extend TokenService for revokeable tokens ([d8e9fbb](https://github.com/strongloop/loopback-next/commit/d8e9fbbc83cff964e278da9d004d98cb8a149e9f))





# [4.0.0](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@3.3.3...@loopback/authentication@4.0.0) (2020-03-05)


### Bug Fixes

* **cli:** extract messages for generators ([2f572bd](https://github.com/strongloop/loopback-next/commit/2f572bd75883420e38bfaa780bc38445aec92e65))


### chore

* remove support for Node.js v8.x ([4281d9d](https://github.com/strongloop/loopback-next/commit/4281d9df50f0715d32879e1442a90b643ec8f542))


### Features

* add `tslib` as dependency ([a6e0b4c](https://github.com/strongloop/loopback-next/commit/a6e0b4ce7b862764167cefedee14c1115b25e0a4)), closes [#4676](https://github.com/strongloop/loopback-next/issues/4676)


### BREAKING CHANGES

* Node.js v8.x is now end of life. Please upgrade to version
10 and above. See https://nodejs.org/en/about/releases.





## [3.3.3](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@3.3.2...@loopback/authentication@3.3.3) (2020-02-06)

**Note:** Version bump only for package @loopback/authentication





## [3.3.2](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@3.3.1...@loopback/authentication@3.3.2) (2020-02-05)

**Note:** Version bump only for package @loopback/authentication





## [3.3.1](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@3.3.0...@loopback/authentication@3.3.1) (2020-01-27)

**Note:** Version bump only for package @loopback/authentication





# [3.3.0](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@3.2.4...@loopback/authentication@3.3.0) (2020-01-07)


### Features

* add user profile factory interface ([0630194](https://github.com/strongloop/loopback-next/commit/0630194539ba7971ca6c6579ebb9d986e6340a41))





## [3.2.4](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@3.2.3...@loopback/authentication@3.2.4) (2019-12-09)

**Note:** Version bump only for package @loopback/authentication





## [3.2.3](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@3.2.2...@loopback/authentication@3.2.3) (2019-11-25)

**Note:** Version bump only for package @loopback/authentication





## [3.2.2](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@3.2.1...@loopback/authentication@3.2.2) (2019-11-12)

**Note:** Version bump only for package @loopback/authentication





## [3.2.1](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@3.2.0...@loopback/authentication@3.2.1) (2019-10-24)

**Note:** Version bump only for package @loopback/authentication





# [3.2.0](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@3.1.1...@loopback/authentication@3.2.0) (2019-10-07)


### Features

* **authentication:** return binding for registerAuthenticationStrategy ([051eeb8](https://github.com/strongloop/loopback-next/commit/051eeb8))





## [3.1.1](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@3.1.0...@loopback/authentication@3.1.1) (2019-09-28)

**Note:** Version bump only for package @loopback/authentication





# [3.1.0](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@3.0.1...@loopback/authentication@3.1.0) (2019-09-27)


### Features

* **authentication:** allow `[@authenticate](https://github.com/authenticate)` to be applied at class level ([89dbbaa](https://github.com/strongloop/loopback-next/commit/89dbbaa))
* **authentication:** allow defaultMetadata for methods not decorated with [@authenticate](https://github.com/authenticate) ([8d21834](https://github.com/strongloop/loopback-next/commit/8d21834))





## [3.0.1](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@3.0.0...@loopback/authentication@3.0.1) (2019-09-17)

**Note:** Version bump only for package @loopback/authentication





# [3.0.0](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@2.2.0...@loopback/authentication@3.0.0) (2019-09-06)


### Bug Fixes

* **authentication:** add breaking change notice ([4122488](https://github.com/strongloop/loopback-next/commit/4122488))


### BREAKING CHANGES

* **authentication:** PR #3590 rewrote type UserProfile, add the missing
* **authentication:** tag here to amend the one in #3590





# [2.2.0](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@2.1.11...@loopback/authentication@2.2.0) (2019-09-03)


### Features

* **authentication:** allow AuthenticationStrategyProvider to get extended ([c88a424](https://github.com/strongloop/loopback-next/commit/c88a424))





## [2.1.11](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@2.1.10...@loopback/authentication@2.1.11) (2019-08-19)

**Note:** Version bump only for package @loopback/authentication





## [2.1.10](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@2.1.9...@loopback/authentication@2.1.10) (2019-08-15)

**Note:** Version bump only for package @loopback/authentication





## [2.1.9](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@2.1.8...@loopback/authentication@2.1.9) (2019-08-15)

**Note:** Version bump only for package @loopback/authentication





## [2.1.8](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@2.1.7...@loopback/authentication@2.1.8) (2019-07-31)

**Note:** Version bump only for package @loopback/authentication





## [2.1.7](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@2.1.6...@loopback/authentication@2.1.7) (2019-07-26)

**Note:** Version bump only for package @loopback/authentication





## [2.1.6](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@2.1.5...@loopback/authentication@2.1.6) (2019-07-17)

**Note:** Version bump only for package @loopback/authentication





## [2.1.5](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@2.1.4...@loopback/authentication@2.1.5) (2019-06-28)

**Note:** Version bump only for package @loopback/authentication





## [2.1.4](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@2.1.3...@loopback/authentication@2.1.4) (2019-06-21)

**Note:** Version bump only for package @loopback/authentication





## [2.1.3](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@2.1.2...@loopback/authentication@2.1.3) (2019-06-20)

**Note:** Version bump only for package @loopback/authentication





## [2.1.2](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@2.1.1...@loopback/authentication@2.1.2) (2019-06-17)

**Note:** Version bump only for package @loopback/authentication





## [2.1.1](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@2.1.0...@loopback/authentication@2.1.1) (2019-06-06)

**Note:** Version bump only for package @loopback/authentication





# [2.1.0](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@2.0.6...@loopback/authentication@2.1.0) (2019-06-03)


### Features

* replace tslint with eslint ([44185a7](https://github.com/strongloop/loopback-next/commit/44185a7))





## [2.0.6](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@2.0.5...@loopback/authentication@2.0.6) (2019-05-31)

**Note:** Version bump only for package @loopback/authentication





## [2.0.5](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@2.0.4...@loopback/authentication@2.0.5) (2019-05-30)


### Bug Fixes

* **authentication:** fix the options type in decorator ([d4116cf](https://github.com/strongloop/loopback-next/commit/d4116cf))





## [2.0.4](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@2.0.3...@loopback/authentication@2.0.4) (2019-05-23)

**Note:** Version bump only for package @loopback/authentication





## [2.0.3](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@2.0.2...@loopback/authentication@2.0.3) (2019-05-14)


### Bug Fixes

* include user and token service interfaces in index.ts ([3a1a978](https://github.com/strongloop/loopback-next/commit/3a1a978))





## [2.0.2](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@2.0.1...@loopback/authentication@2.0.2) (2019-05-10)

**Note:** Version bump only for package @loopback/authentication





## [2.0.1](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@2.0.0...@loopback/authentication@2.0.1) (2019-05-09)

**Note:** Version bump only for package @loopback/authentication





# [2.0.0](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@1.2.1...@loopback/authentication@2.0.0) (2019-05-06)


### Features

* resolve authentication strategy registered via extension point ([e8b8e8b](https://github.com/strongloop/loopback-next/commit/e8b8e8b))


### BREAKING CHANGES

* the new interface and authentication action in 2.0 will require users to adjust existing code





## [1.2.1](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@1.2.0...@loopback/authentication@1.2.1) (2019-04-26)

**Note:** Version bump only for package @loopback/authentication





# [1.2.0](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@1.1.2...@loopback/authentication@1.2.0) (2019-04-20)


### Bug Fixes

* **authentication:** fix broken link in authentication docs ([ee071f6](https://github.com/strongloop/loopback-next/commit/ee071f6))


### Features

* **context:** add `[@inject](https://github.com/inject).binding` and improve `[@inject](https://github.com/inject).setter` ([a396274](https://github.com/strongloop/loopback-next/commit/a396274))
* introduce an authentication strategy interface ([6ebb283](https://github.com/strongloop/loopback-next/commit/6ebb283))





## [1.1.2](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@1.1.1...@loopback/authentication@1.1.2) (2019-04-11)

**Note:** Version bump only for package @loopback/authentication





## [1.1.1](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@1.1.0...@loopback/authentication@1.1.1) (2019-04-09)

**Note:** Version bump only for package @loopback/authentication





# [1.1.0](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@1.0.17...@loopback/authentication@1.1.0) (2019-04-05)


### Features

* design auth system with user scenario ([124c078](https://github.com/strongloop/loopback-next/commit/124c078))





## [1.0.17](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@1.0.16...@loopback/authentication@1.0.17) (2019-03-22)

**Note:** Version bump only for package @loopback/authentication





## [1.0.16](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@1.0.15...@loopback/authentication@1.0.16) (2019-03-22)

**Note:** Version bump only for package @loopback/authentication





## [1.0.15](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@1.0.14...@loopback/authentication@1.0.15) (2019-03-12)

**Note:** Version bump only for package @loopback/authentication





## [1.0.14](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@1.0.13...@loopback/authentication@1.0.14) (2019-03-01)

**Note:** Version bump only for package @loopback/authentication





## [1.0.13](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@1.0.12...@loopback/authentication@1.0.13) (2019-02-25)

**Note:** Version bump only for package @loopback/authentication





## [1.0.12](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@1.0.11...@loopback/authentication@1.0.12) (2019-02-08)

**Note:** Version bump only for package @loopback/authentication





## [1.0.11](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@1.0.10...@loopback/authentication@1.0.11) (2019-01-28)

**Note:** Version bump only for package @loopback/authentication





## [1.0.10](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@1.0.9...@loopback/authentication@1.0.10) (2019-01-15)

**Note:** Version bump only for package @loopback/authentication





## [1.0.9](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@1.0.8...@loopback/authentication@1.0.9) (2019-01-14)


### Bug Fixes

* optional auth metadata ([6145e54](https://github.com/strongloop/loopback-next/commit/6145e54))





## [1.0.8](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@1.0.7...@loopback/authentication@1.0.8) (2018-12-20)

**Note:** Version bump only for package @loopback/authentication





## [1.0.7](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@1.0.6...@loopback/authentication@1.0.7) (2018-12-13)

**Note:** Version bump only for package @loopback/authentication





## [1.0.6](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@1.0.5...@loopback/authentication@1.0.6) (2018-11-26)

**Note:** Version bump only for package @loopback/authentication





## [1.0.5](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@1.0.4...@loopback/authentication@1.0.5) (2018-11-17)

**Note:** Version bump only for package @loopback/authentication





## [1.0.4](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@1.0.3...@loopback/authentication@1.0.4) (2018-11-14)

**Note:** Version bump only for package @loopback/authentication





<a name="1.0.3"></a>
## [1.0.3](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@1.0.1...@loopback/authentication@1.0.3) (2018-11-08)

**Note:** Version bump only for package @loopback/authentication





<a name="1.0.1"></a>
## [1.0.1](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@1.0.0...@loopback/authentication@1.0.1) (2018-10-17)

**Note:** Version bump only for package @loopback/authentication





<a name="0.11.21"></a>
## [0.11.21](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.11.20...@loopback/authentication@0.11.21) (2018-10-08)

**Note:** Version bump only for package @loopback/authentication





<a name="0.11.20"></a>
## [0.11.20](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.11.19...@loopback/authentication@0.11.20) (2018-10-06)

**Note:** Version bump only for package @loopback/authentication





<a name="0.11.19"></a>
## [0.11.19](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.11.18...@loopback/authentication@0.11.19) (2018-10-05)

**Note:** Version bump only for package @loopback/authentication





<a name="0.11.18"></a>
## [0.11.18](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.11.17...@loopback/authentication@0.11.18) (2018-10-03)

**Note:** Version bump only for package @loopback/authentication





<a name="0.11.17"></a>
## [0.11.17](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.11.16...@loopback/authentication@0.11.17) (2018-09-28)


### Bug Fixes

* **metadata:** remove the default type to work around a TS bug ([fc89a2c](https://github.com/strongloop/loopback-next/commit/fc89a2c))





<a name="0.11.16"></a>
## [0.11.16](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.11.15...@loopback/authentication@0.11.16) (2018-09-27)

**Note:** Version bump only for package @loopback/authentication





<a name="0.11.15"></a>
## [0.11.15](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.11.14...@loopback/authentication@0.11.15) (2018-09-25)

**Note:** Version bump only for package @loopback/authentication





<a name="0.11.14"></a>
## [0.11.14](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.11.13...@loopback/authentication@0.11.14) (2018-09-21)

**Note:** Version bump only for package @loopback/authentication





<a name="0.11.13"></a>
## [0.11.13](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.11.12...@loopback/authentication@0.11.13) (2018-09-19)

**Note:** Version bump only for package @loopback/authentication





<a name="0.11.12"></a>
## [0.11.12](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.11.11...@loopback/authentication@0.11.12) (2018-09-14)

**Note:** Version bump only for package @loopback/authentication





<a name="0.11.11"></a>
## [0.11.11](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.11.10...@loopback/authentication@0.11.11) (2018-09-14)

**Note:** Version bump only for package @loopback/authentication





<a name="0.11.10"></a>
## [0.11.10](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.11.9...@loopback/authentication@0.11.10) (2018-09-14)

**Note:** Version bump only for package @loopback/authentication





<a name="0.11.9"></a>
## [0.11.9](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.11.8...@loopback/authentication@0.11.9) (2018-09-12)

**Note:** Version bump only for package @loopback/authentication





<a name="0.11.8"></a>
## [0.11.8](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.11.7...@loopback/authentication@0.11.8) (2018-09-10)

**Note:** Version bump only for package @loopback/authentication





<a name="0.11.7"></a>
## [0.11.7](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.11.6...@loopback/authentication@0.11.7) (2018-09-08)

**Note:** Version bump only for package @loopback/authentication





<a name="0.11.6"></a>
## [0.11.6](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.11.5...@loopback/authentication@0.11.6) (2018-08-25)


### Bug Fixes

* fix [#1643](https://github.com/strongloop/loopback-next/issues/1643): import MetadataAccessor direct from metadata to avoid TypeScript 3 compiler issue ([37d727a](https://github.com/strongloop/loopback-next/commit/37d727a))





<a name="0.11.5"></a>
## [0.11.5](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.11.4...@loopback/authentication@0.11.5) (2018-08-24)

**Note:** Version bump only for package @loopback/authentication





<a name="0.11.4"></a>
## [0.11.4](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.11.3...@loopback/authentication@0.11.4) (2018-08-15)




**Note:** Version bump only for package @loopback/authentication

<a name="0.11.3"></a>
## [0.11.3](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.11.2...@loopback/authentication@0.11.3) (2018-08-08)




**Note:** Version bump only for package @loopback/authentication

<a name="0.11.2"></a>
## [0.11.2](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.11.1...@loopback/authentication@0.11.2) (2018-07-21)




**Note:** Version bump only for package @loopback/authentication

<a name="0.11.1"></a>
## [0.11.1](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.11.0...@loopback/authentication@0.11.1) (2018-07-20)




**Note:** Version bump only for package @loopback/authentication

<a name="0.11.0"></a>
# [0.11.0](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.10.19...@loopback/authentication@0.11.0) (2018-07-20)




**Note:** Version bump only for package @loopback/authentication

<a name="0.10.19"></a>
## [0.10.19](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.10.18...@loopback/authentication@0.10.19) (2018-07-13)




**Note:** Version bump only for package @loopback/authentication

<a name="0.10.18"></a>
## [0.10.18](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.10.17...@loopback/authentication@0.10.18) (2018-07-11)




**Note:** Version bump only for package @loopback/authentication

<a name="0.10.17"></a>
## [0.10.17](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.10.16...@loopback/authentication@0.10.17) (2018-07-10)




**Note:** Version bump only for package @loopback/authentication

<a name="0.10.16"></a>
## [0.10.16](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.10.15...@loopback/authentication@0.10.16) (2018-07-09)




**Note:** Version bump only for package @loopback/authentication

<a name="0.10.15"></a>
## [0.10.15](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.10.14...@loopback/authentication@0.10.15) (2018-06-28)




**Note:** Version bump only for package @loopback/authentication

<a name="0.10.14"></a>
## [0.10.14](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.10.13...@loopback/authentication@0.10.14) (2018-06-27)




**Note:** Version bump only for package @loopback/authentication

<a name="0.10.13"></a>
## [0.10.13](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.10.12...@loopback/authentication@0.10.13) (2018-06-26)




**Note:** Version bump only for package @loopback/authentication

<a name="0.10.12"></a>
## [0.10.12](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.10.10...@loopback/authentication@0.10.12) (2018-06-25)




**Note:** Version bump only for package @loopback/authentication

<a name="0.10.11"></a>
## [0.10.11](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.10.10...@loopback/authentication@0.10.11) (2018-06-25)




**Note:** Version bump only for package @loopback/authentication

<a name="0.10.10"></a>
## [0.10.10](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.10.9...@loopback/authentication@0.10.10) (2018-06-20)




**Note:** Version bump only for package @loopback/authentication

<a name="0.10.9"></a>
## [0.10.9](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.10.8...@loopback/authentication@0.10.9) (2018-06-11)




**Note:** Version bump only for package @loopback/authentication

<a name="0.10.8"></a>
## [0.10.8](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.10.6...@loopback/authentication@0.10.8) (2018-06-09)




**Note:** Version bump only for package @loopback/authentication

<a name="0.10.7"></a>
## [0.10.7](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.10.6...@loopback/authentication@0.10.7) (2018-06-09)




**Note:** Version bump only for package @loopback/authentication

<a name="0.10.6"></a>
## [0.10.6](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.10.5...@loopback/authentication@0.10.6) (2018-06-08)




**Note:** Version bump only for package @loopback/authentication

<a name="0.10.5"></a>
## [0.10.5](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.10.4...@loopback/authentication@0.10.5) (2018-05-28)




**Note:** Version bump only for package @loopback/authentication

<a name="0.10.4"></a>
## [0.10.4](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.10.3...@loopback/authentication@0.10.4) (2018-05-20)




**Note:** Version bump only for package @loopback/authentication

<a name="0.10.3"></a>
## [0.10.3](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.10.2...@loopback/authentication@0.10.3) (2018-05-14)


### Bug Fixes

* change index.d.ts files to point to dist8 ([42ca42d](https://github.com/strongloop/loopback-next/commit/42ca42d))




<a name="0.10.2"></a>
## [0.10.2](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.10.1...@loopback/authentication@0.10.2) (2018-05-14)




**Note:** Version bump only for package @loopback/authentication

<a name="0.10.1"></a>
## [0.10.1](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.10.0...@loopback/authentication@0.10.1) (2018-05-08)




**Note:** Version bump only for package @loopback/authentication

<a name="0.10.0"></a>
# [0.10.0](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.8.2...@loopback/authentication@0.10.0) (2018-05-03)


### Features

* add helper package "dist-util" ([532f153](https://github.com/strongloop/loopback-next/commit/532f153))




<a name="0.9.0"></a>
# [0.9.0](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.8.2...@loopback/authentication@0.9.0) (2018-05-03)


### Features

* add helper package "dist-util" ([532f153](https://github.com/strongloop/loopback-next/commit/532f153))




<a name="0.8.2"></a>
## [0.8.2](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.8.1...@loopback/authentication@0.8.2) (2018-04-26)




**Note:** Version bump only for package @loopback/authentication

<a name="0.8.1"></a>
## [0.8.1](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.8.0...@loopback/authentication@0.8.1) (2018-04-25)




**Note:** Version bump only for package @loopback/authentication

<a name="0.8.0"></a>
# [0.8.0](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.7.1...@loopback/authentication@0.8.0) (2018-04-16)




**Note:** Version bump only for package @loopback/authentication

<a name="0.7.1"></a>
## [0.7.1](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.7.0...@loopback/authentication@0.7.1) (2018-04-16)




**Note:** Version bump only for package @loopback/authentication

<a name="0.7.0"></a>
# [0.7.0](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.6.1...@loopback/authentication@0.7.0) (2018-04-12)


### Features

* **metadata:** add strongly-typed metadata accessors ([45f9f80](https://github.com/strongloop/loopback-next/commit/45f9f80))




<a name="0.6.1"></a>
## [0.6.1](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.6.0...@loopback/authentication@0.6.1) (2018-04-11)




**Note:** Version bump only for package @loopback/authentication

<a name="0.6.0"></a>
# [0.6.0](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.5.2...@loopback/authentication@0.6.0) (2018-04-11)


### Bug Fixes

* change file names to fit advocated naming convention ([0331df8](https://github.com/strongloop/loopback-next/commit/0331df8))


### Features

* **context:** typed binding keys ([685195c](https://github.com/strongloop/loopback-next/commit/685195c))




<a name="0.5.3"></a>
## [0.5.3](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.5.2...@loopback/authentication@0.5.3) (2018-04-06)




**Note:** Version bump only for package @loopback/authentication

<a name="0.5.2"></a>
## [0.5.2](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.5.1...@loopback/authentication@0.5.2) (2018-04-04)




**Note:** Version bump only for package @loopback/authentication

<a name="0.5.1"></a>
## [0.5.1](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.5.0...@loopback/authentication@0.5.1) (2018-04-02)




**Note:** Version bump only for package @loopback/authentication

<a name="0.5.0"></a>
# [0.5.0](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.4.1...@loopback/authentication@0.5.0) (2018-03-29)




**Note:** Version bump only for package @loopback/authentication

<a name="0.4.1"></a>
## [0.4.1](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.4.0...@loopback/authentication@0.4.1) (2018-03-23)




**Note:** Version bump only for package @loopback/authentication

<a name="0.4.0"></a>
# [0.4.0](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.3.4...@loopback/authentication@0.4.0) (2018-03-21)


### Bug Fixes

* **authentication:** update broken code in Readme ([3423f6e](https://github.com/strongloop/loopback-next/commit/3423f6e))


### Features

* **rest:** expose app.requestHandler function ([20a41ac](https://github.com/strongloop/loopback-next/commit/20a41ac))


### BREAKING CHANGES

* **rest:** `RestServer#handleHttp` was renamed to
`RestServer#requestHandler`.




<a name="0.3.4"></a>
## [0.3.4](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.3.3...@loopback/authentication@0.3.4) (2018-03-14)




**Note:** Version bump only for package @loopback/authentication

<a name="0.3.3"></a>
## [0.3.3](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.3.2...@loopback/authentication@0.3.3) (2018-03-13)




**Note:** Version bump only for package @loopback/authentication

<a name="0.3.2"></a>
## [0.3.2](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.3.1...@loopback/authentication@0.3.2) (2018-03-08)




**Note:** Version bump only for package @loopback/authentication

<a name="0.3.1"></a>
## [0.3.1](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.3.0...@loopback/authentication@0.3.1) (2018-03-07)




**Note:** Version bump only for package @loopback/authentication

<a name="0.3.0"></a>
# [0.3.0](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.2.0...@loopback/authentication@0.3.0) (2018-03-06)


### Bug Fixes

* fix typo of `additional` ([2fd7610](https://github.com/strongloop/loopback-next/commit/2fd7610))


### Features

* upgrade from swagger 2 to openapi 3 ([71e5af1](https://github.com/strongloop/loopback-next/commit/71e5af1))




<a name="0.2.0"></a>
# [0.2.0](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.1.2...@loopback/authentication@0.2.0) (2018-03-01)




**Note:** Version bump only for package @loopback/authentication

<a name="0.1.2"></a>
## [0.1.2](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.1.1...@loopback/authentication@0.1.2) (2018-03-01)


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
## [0.1.1](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@0.1.0...@loopback/authentication@0.1.1) (2018-02-23)




**Note:** Version bump only for package @loopback/authentication

<a name="0.1.0"></a>
# [0.1.0](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@4.0.0-alpha.33...@loopback/authentication@0.1.0) (2018-02-21)




**Note:** Version bump only for package @loopback/authentication

<a name="4.0.0-alpha.33"></a>
# [4.0.0-alpha.33](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@4.0.0-alpha.32...@loopback/authentication@4.0.0-alpha.33) (2018-02-15)




**Note:** Version bump only for package @loopback/authentication

<a name="4.0.0-alpha.32"></a>
# [4.0.0-alpha.32](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@4.0.0-alpha.31...@loopback/authentication@4.0.0-alpha.32) (2018-02-07)


### build

* drop dist6 related targets ([#945](https://github.com/strongloop/loopback-next/issues/945)) ([a2368ce](https://github.com/strongloop/loopback-next/commit/a2368ce))


### BREAKING CHANGES

* Support for Node.js version lower than 8.0 has been dropped.
Please upgrade to the latest Node.js 8.x LTS version.

Co-Authored-by: Taranveer Virk <taranveer@virk.cc>




<a name="4.0.0-alpha.31"></a>
# [4.0.0-alpha.31](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@4.0.0-alpha.30...@loopback/authentication@4.0.0-alpha.31) (2018-02-04)




**Note:** Version bump only for package @loopback/authentication

<a name="4.0.0-alpha.30"></a>
# [4.0.0-alpha.30](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@4.0.0-alpha.29...@loopback/authentication@4.0.0-alpha.30) (2018-01-30)




**Note:** Version bump only for package @loopback/authentication

<a name="4.0.0-alpha.29"></a>
# [4.0.0-alpha.29](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@4.0.0-alpha.28...@loopback/authentication@4.0.0-alpha.29) (2018-01-29)




**Note:** Version bump only for package @loopback/authentication

<a name="4.0.0-alpha.28"></a>
# [4.0.0-alpha.28](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@4.0.0-alpha.27...@loopback/authentication@4.0.0-alpha.28) (2018-01-26)




**Note:** Version bump only for package @loopback/authentication

<a name="4.0.0-alpha.27"></a>
# [4.0.0-alpha.27](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@4.0.0-alpha.26...@loopback/authentication@4.0.0-alpha.27) (2018-01-26)


### Bug Fixes

* apply source-maps to test errors ([76a7f56](https://github.com/strongloop/loopback-next/commit/76a7f56)), closes [#602](https://github.com/strongloop/loopback-next/issues/602)
* make mocha self-contained with the source map support ([7c6d869](https://github.com/strongloop/loopback-next/commit/7c6d869))




<a name="4.0.0-alpha.26"></a>
# [4.0.0-alpha.26](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@4.0.0-alpha.25...@loopback/authentication@4.0.0-alpha.26) (2018-01-19)




**Note:** Version bump only for package @loopback/authentication

<a name="4.0.0-alpha.25"></a>
# [4.0.0-alpha.25](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@4.0.0-alpha.24...@loopback/authentication@4.0.0-alpha.25) (2018-01-11)




**Note:** Version bump only for package @loopback/authentication

<a name="4.0.0-alpha.24"></a>
# [4.0.0-alpha.24](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@4.0.0-alpha.23...@loopback/authentication@4.0.0-alpha.24) (2018-01-03)


### Bug Fixes

* fix version for [@loopback](https://github.com/loopback)/openapi-v2 ([d032129](https://github.com/strongloop/loopback-next/commit/d032129))




<a name="4.0.0-alpha.23"></a>
# [4.0.0-alpha.23](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@4.0.0-alpha.22...@loopback/authentication@4.0.0-alpha.23) (2018-01-03)


### Features

* Create [@loopback](https://github.com/loopback)/openapi-v2 ([#804](https://github.com/strongloop/loopback-next/issues/804)) ([4ddd4bc](https://github.com/strongloop/loopback-next/commit/4ddd4bc))




<a name="4.0.0-alpha.22"></a>
# [4.0.0-alpha.22](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@4.0.0-alpha.21...@loopback/authentication@4.0.0-alpha.22) (2017-12-21)




**Note:** Version bump only for package @loopback/authentication

<a name="4.0.0-alpha.21"></a>
# [4.0.0-alpha.21](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@4.0.0-alpha.20...@loopback/authentication@4.0.0-alpha.21) (2017-12-15)


### Bug Fixes

* **authentication:** fix misleading example ([#794](https://github.com/strongloop/loopback-next/issues/794)) ([3a6057b](https://github.com/strongloop/loopback-next/commit/3a6057b))


### Features

* Add metadata inspector ([c683019](https://github.com/strongloop/loopback-next/commit/c683019))




<a name="4.0.0-alpha.20"></a>
# [4.0.0-alpha.20](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@4.0.0-alpha.19...@loopback/authentication@4.0.0-alpha.20) (2017-12-11)


### Bug Fixes

* Fix node module names in source code headers ([0316f28](https://github.com/strongloop/loopback-next/commit/0316f28))




<a name="4.0.0-alpha.19"></a>
# [4.0.0-alpha.19](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@4.0.0-alpha.18...@loopback/authentication@4.0.0-alpha.19) (2017-12-01)




**Note:** Version bump only for package @loopback/authentication

<a name="4.0.0-alpha.18"></a>
# [4.0.0-alpha.18](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@4.0.0-alpha.17...@loopback/authentication@4.0.0-alpha.18) (2017-11-30)




**Note:** Version bump only for package @loopback/authentication

<a name="4.0.0-alpha.17"></a>
# [4.0.0-alpha.17](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@4.0.0-alpha.16...@loopback/authentication@4.0.0-alpha.17) (2017-11-29)




**Note:** Version bump only for package @loopback/authentication

<a name="4.0.0-alpha.16"></a>
# [4.0.0-alpha.16](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@4.0.0-alpha.15...@loopback/authentication@4.0.0-alpha.16) (2017-11-14)




**Note:** Version bump only for package @loopback/authentication

<a name="4.0.0-alpha.15"></a>
# [4.0.0-alpha.15](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@4.0.0-alpha.14...@loopback/authentication@4.0.0-alpha.15) (2017-11-09)




**Note:** Version bump only for package @loopback/authentication

<a name="4.0.0-alpha.14"></a>
# [4.0.0-alpha.14](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@4.0.0-alpha.13...@loopback/authentication@4.0.0-alpha.14) (2017-11-06)




**Note:** Version bump only for package @loopback/authentication

<a name="4.0.0-alpha.13"></a>
# [4.0.0-alpha.13](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@4.0.0-alpha.12...@loopback/authentication@4.0.0-alpha.13) (2017-10-31)




**Note:** Version bump only for package @loopback/authentication

<a name="4.0.0-alpha.12"></a>
# [4.0.0-alpha.12](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@4.0.0-alpha.11...@loopback/authentication@4.0.0-alpha.12) (2017-10-31)




**Note:** Version bump only for package @loopback/authentication

<a name="4.0.0-alpha.11"></a>
# [4.0.0-alpha.11](https://github.com/strongloop/loopback-next/compare/@loopback/authentication@4.0.0-alpha.8...@loopback/authentication@4.0.0-alpha.11) (2017-10-25)




**Note:** Version bump only for package @loopback/authentication
