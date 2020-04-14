// Copyright IBM Corp. 2019,2020. All Rights Reserved.
// Node module: loopback4-example-shopping
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {Client, expect} from '@loopback/testlab';
import {GlobalimpactApiApplication} from '../..';
import {PasswordHasherBindings} from '../../keys';
import {User} from '../../models';
import {UserRepository} from '../../repositories';
import {PasswordHasher} from '../../services/hash.password.bcryptjs';
import {setupApplication} from './helper';

describe('authorization', function () {
  // eslint-disable-next-line no-invalid-this
  this.timeout(5000);
  let app: GlobalimpactApiApplication;
  let client: Client;
  let userRepo: UserRepository;
  const userPassword = 'p4ssw0rd';
  let passwordHasher: PasswordHasher;
  let newUser: User;
  let token: string;

  before('setupApplication', async () => {
    ({app, client} = await setupApplication());
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

  async function createAUser(userData: object) {
    const encryptedPassword = await passwordHasher.hashPassword(userPassword);
    const aUser = await userRepo.create(userData);

    // MongoDB returns an id object we need to convert to string
    aUser.id = aUser.id.toString();

    await userRepo.userCredentials(aUser.id).create({
      password: encryptedPassword,
    });
    return aUser;
  }

  async function createPasswordHasher() {
    passwordHasher = await app.get(PasswordHasherBindings.PASSWORD_HASHER);
  }
});
