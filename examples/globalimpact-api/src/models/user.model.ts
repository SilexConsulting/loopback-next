// Copyright IBM Corp. 2019,2020. All Rights Reserved.
// Node module: loopback4-example-shopping
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {Entity, model, property, hasMany, hasOne} from '@loopback/repository';
import {UserCredentials} from './user-credentials.model';
import {UserIdentity} from './user-identity.model';

@model({
  settings: {
    indexes: {
      uniqueEmail: {
        keys: {
          email: 1,
        },
        options: {
          unique: true,
        },
      },
    },
  },
})
export class User extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
    id: true,
    index: {
      unique: true,
    },
  })
  email: string;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  country?: string;

  @property({
    type: 'string',
    default: ''
  })
  profilePicture?: string;

  @property({
    type: 'string',
  })
  realm?: string;

  @property({
    type: 'string',
    default: '',
  })
  bio?: string;

  @property({
    type: 'boolean',
  })
  emailVerified?: boolean;

  @property({
    type: 'array',
    itemType: 'string',
    default: [],
  })
  hashtags?: string[];

  @property({
    type: 'object',
    default: {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false,
      10: false,
      11: false,
      12: false,
      13: false,
      14: false,
      15: false,
      16: false,
      17: false,
    }
  })
  sdgGoals?: object;

  @property({
    type: 'string',
  })
  verificationToken?: string;

  @hasOne(() => UserCredentials)
  userCredentials: UserCredentials;

  @hasMany(() => UserIdentity)
  profiles?: UserIdentity[];

  @property({
    type: 'array',
    itemType: 'string',
    default: ['user'],
  })
  roles?: string[];

  constructor(data?: Partial<User>) {
    super(data);
  }
}
