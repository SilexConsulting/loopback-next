// Copyright IBM Corp. 2019. All Rights Reserved.
// Node module: @loopback/cli
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';

const {
  validateClassName,
  remindAboutNamingRules,
  pascalCase,
  stringifyModelSettings,
} = require('../../lib/utils');
const {sanitizeProperty} = require('../../lib/model-discoverer');
const {
  createPropertyTemplateData,
  BUILTIN_TYPES,
} = require('../model/property-definition');

module.exports = {
  importModelDefinition,
};

/**
 *
 * @param {Function} modelCtor LB3 model class
 * @param {(msg: string, ...args: any) => void} log Logging function
 * @returns {object} Template data for model source file template
 */
function importModelDefinition(modelCtor, log) {
  const modelName = modelCtor.modelName;
  const result = validateClassName(modelName);
  if (!result) {
    const err = new Error(
      `Cannot import model: the name ${modelName} is not valid. ${result}`,
    );
    err.exit = true;
    throw err;
  }

  remindAboutNamingRules(modelName, log);

  const templateData = {
    name: modelName,
    properties: {},
    settings: {...modelCtor.definition.settings},
  };

  // In LB 3.x, primary keys are typically contributed by connectors later in
  // the startup process, therefore they end up at the end of the property list.
  // Here we create placeholder entries for PKs to get them generated first.
  Object.keys(modelCtor.definition.properties)
    .filter(p => !!modelCtor.definition.properties[p].id)
    .forEach(pk => {
      templateData.properties[pk] = null;
    });

  for (const prop in modelCtor.definition.properties) {
    const def = {...modelCtor.definition.properties[prop]};

    // TODO: apply sanitization recursively on nested properties too
    if (typeof def.type === 'function') {
      def.type = def.type.name.toString();
    }

    const builtin = BUILTIN_TYPES.find(t => t === def.type.toLowerCase());
    if (builtin) def.type = builtin;

    // FIXME: handle properties with array type, e.g. `{type: [object]}`
    sanitizeProperty(def);

    templateData.properties[prop] = createPropertyTemplateData(def);
  }

  /* FIXME: The following base model classes should be recognized and mapped to LB4:
      - Model -> Model
      - PersistedModel -> Entity
      - KeyValueModel -> (to be determined)
    When the base model class is not recognized, the CLI should abort with a descriptive error.
     */
  templateData.modelBaseClass = 'Entity';
  templateData.isModelBaseBuiltin = true;

  templateData.className = pascalCase(modelName);

  /* FIXME
    The following model settings should trigger a warning when a non-empty value is provided in LB3 model file:
     - relations
     - methods
     - mixins
     - acls

     All other model settings should be copied as-is to LB4 model definition.

     Notable settings to test & support:
      - forceId
      - strict
      - connector-specific config like SQL table name and MongoDB collection name
    */
  delete templateData.settings.acls;
  delete templateData.settings.methods;
  delete templateData.settings.mixins;
  delete templateData.settings.relations;
  delete templateData.settings.validations;

  // FIXME: parse LB3 "strict" setting
  templateData.allowAdditionalProperties = true;

  templateData.modelSettings = stringifyModelSettings(templateData.settings);
  return templateData;
}
