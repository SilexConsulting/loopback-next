// Copyright IBM Corp. 2019,2020. All Rights Reserved.
// Node module: loopback4-example-shopping
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {GlobalimpactApiApplication} from '../..';
import {
  createRestAppClient,
  givenHttpServerConfig,
  Client,
} from '@loopback/testlab';

export interface AppWithClient {
  app: GlobalimpactApiApplication;
  client: Client;
}

export async function setupApplication(): Promise<AppWithClient> {
  const app = new GlobalimpactApiApplication({
    rest: givenHttpServerConfig(),
    databaseSeeding: false,
  });

  await app.boot();
  await app.start();

  const client = createRestAppClient(app);

  return {app, client};
}
