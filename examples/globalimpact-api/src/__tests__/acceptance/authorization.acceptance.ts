// Copyright IBM Corp. 2019,2020. All Rights Reserved.
// Node module: loopback4-example-shopping
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {GlobalimpactApiApplication} from '../..';
import {UserRepository} from '../../repositories';
import {setupApplication} from './helper';

describe('authorization', function () {
  // eslint-disable-next-line no-invalid-this
  this.timeout(5000);
  let app: GlobalimpactApiApplication;
  let userRepo: UserRepository;

  before('setupApplication', async () => {
    ({app} = await setupApplication());
    userRepo = await app.get('repositories.UserRepository');
  });
  before(migrateSchema);
  before(createPasswordHasher);
  before(clearDatabase);
  after(async () => {
    if (app != null) await app.stop();
  });

  async function clearDatabase() {
    await userRepo.deleteAll();
  }

  async function migrateSchema() {
    await app.migrateSchema();
  }

  async function createPasswordHasher() {}
});
