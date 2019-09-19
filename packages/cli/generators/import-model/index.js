// Copyright IBM Corp. 2019. All Rights Reserved.
// Node module: @loopback/cli
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';

const chalk = require('chalk');
const path = require('path');
const BaseGenerator = require('../../lib/base-generator');
const modelUtils = require('../../lib/model-discoverer');
const debug = require('../../lib/debug')('import-model');
const utils = require('../../lib/utils');
const {loadLb3App} = require('./lb3app-loader');
const {importModelDefinition} = require('./migrate-model');

// List of built-in LB models to exclude from the prompt
const EXCLUDED_MODEL_NAMES = [
  // base models
  'Model',
  'PersistedModel',
  'KeyValueModel',
  // change tracking & replication
  'Change',
  'Checkpoint',
  // Email - a dummy model used to attach email-connector methods only
  'Email',
];

module.exports = class ModelImporter extends BaseGenerator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('lb3app', {
      type: String,
      required: true,
      description:
        'Path to your LoopBack 3.x application. ' +
        'This can be a project directory (e.g. "my-lb3-app") or ' +
        'the server file (e.g. "my-lb3-app/server/server.js").',
    });

    this.option('outDir', {
      type: String,
      description: 'Directory where to write the generated source file',
      default: 'src/models',
    });
  }

  async setOptions() {
    this.sourceAppDir = this.args[0];
    this.artifactInfo.outDir = this.options.outDir;
    this.artifactInfo.relPath = path.relative(
      this.destinationPath(),
      this.artifactInfo.outDir,
    );
    return super.setOptions();
  }

  async experimentalStatus() {
    this.log();
    this.log(
      chalk.red(
        '**WARNING WARNING WARNING**\n' +
          'This command is experimental and not feature-complete yet.\n' +
          'Watch the progress at https://github.com/strongloop/loopback-next/issues/2480',
      ),
    );
    this.log();
  }

  /**
   * Ensure CLI is being run in a LoopBack 4 project.
   */
  checkLoopBackProject() {
    if (this.shouldExit()) return;
    return super.checkLoopBackProject();
  }

  async loadTheApp() {
    this.lb3app = await loadLb3App(this.sourceAppDir);
    this.modelRegistry = this.lb3app.registry.modelBuilder.models;
  }

  async promptModels() {
    const modelNames = Object.keys(this.modelRegistry).filter(
      canImportModelName,
    );

    debug('Available LB3 models', modelNames);

    const prompts = [
      {
        name: 'modelNames',
        message: 'Select models to import:',
        type: 'checkbox',
        choices: modelNames,
        validate: result => !!result.length,
        // TODO: add a CLI flag to supply these names programmatically
      },
    ];

    const answers = await this.prompt(prompts);
    debug('Models chosen:', answers.modelNames);
    this.modelNames = answers.modelNames;
  }

  async migrateModels() {
    if (this.shouldExit()) return;
    this.modelFiles = [];

    try {
      for (const name of this.modelNames) {
        utils.printClassFileName('model', 'models', name, this.log.bind(this));

        const templateData = importModelDefinition(
          this.modelRegistry[name],
          this.log.bind(this),
        );
        debug('LB4 model data', templateData);

        const fileName = utils.getModelFileName(name);
        const fullTargetPath = path.resolve(
          this.artifactInfo.relPath,
          fileName,
        );
        debug('Model %s output file', name, fullTargetPath);

        this.copyTemplatedFiles(
          modelUtils.MODEL_TEMPLATE_PATH,
          fullTargetPath,
          templateData,
        );

        this.modelFiles.push(fileName);
      }
    } catch (err) {
      if (err.exit) {
        this.exit(err.message);
      } else {
        throw err;
      }
    }
  }

  /**
   * Iterate through all the models we have discovered and scaffold
   */
  async scaffold() {
    if (this.shouldExit()) return;
  }

  async end() {
    if (this.shouldExit() || !this._wasGenerationSuccessful()) {
      await super.end();
      return;
    }

    for (const f of this.modelFiles) {
      await this._updateIndexFile(this.artifactInfo.outDir, f);
    }

    await super.end();
  }
};

function canImportModelName(name) {
  if (EXCLUDED_MODEL_NAMES.includes(name)) return false;
  // TODO: find out where are anonymous models coming from
  // (perhaps from object types defined inside property definitions?)
  // and add test cases to verify that we are handling those scenarios correctly
  if (name.startsWith('AnonymousModel_')) return false;
  return true;
}
