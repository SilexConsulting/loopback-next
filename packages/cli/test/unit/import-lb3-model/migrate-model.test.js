// Copyright IBM Corp. 2019. All Rights Reserved.
// Node module: @loopback/cli
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';

const loopback = require('loopback');
const {expect, sinon, toJSON} = require('@loopback/testlab');
const {
  importLb3ModelDefinition,
} = require('../../../generators/import-lb3-model/migrate-model');

describe('importLb3ModelDefinition', () => {
  let log;
  beforeEach(function setupLogSpy() {
    log = sinon.spy();
  });

  context('bare-bone model attached to memory', () => {
    let app;
    let modelData;

    before(function setupLb3AppWithMemoryAndModel(done) {
      app = loopback({localRegistry: true});
      app.dataSource('db', {connector: 'memory'});
      const TestModel = app.registry.createModel('TestModel', {name: 'string'});
      app.model(TestModel, {dataSource: 'db'});

      modelData = importLb3ModelDefinition(TestModel, log);

      setTimeout(done, 1000);
    });

    it('normalizes model settings', () => {
      expect(toJSON(modelData.settings)).to.deepEqual({
        // By default, LB3 models are not strict
        strict: false,
        replaceOnPUT: true,
      });
    });

    it('imports all properties', () => {
      expect(Object.keys(modelData.properties)).to.deepEqual(['id', 'name']);
    });

    it('normalizes custom property', () => {
      expect(modelData.properties)
        .to.have.property('name')
        .deepEqual({
          type: `'string'`,
          tsType: 'string',
        });
    });

    it('handles id property injected by the connector', () => {
      expect(modelData.properties)
        .to.have.property('id')
        .deepEqual({
          type: `'number'`,
          tsType: 'number',
          id: 1,
          generated: true,
          updateOnly: true,
        });
    });

    it('adds other data for the model template', () => {
      const data = {...modelData};

      // Settings & properties have been already tested (see above)
      delete data.settings;
      delete data.properties;
      // We don't care about stringified settings in this test
      delete data.modelSettings;

      expect(data).to.deepEqual({
        name: 'TestModel',
        className: 'TestModel',

        modelBaseClass: 'Entity',
        isModelBaseBuiltin: true,

        allowAdditionalProperties: true,
      });
    });
  });

  // TODO
  // - `"strict": true` settings
  // - `"strict": false` settings
  // - `"forceId": true` settings
  // - `"forceId": false` settings
  // - attach to MongoDB -> test ObjectID primary key
  // - attach to Cloudant -> test `_rev` property
});
