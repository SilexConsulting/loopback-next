import {Entity, model, property, hasMany} from '@loopback/repository';
import {ChallengeLevel} from './challenge-level.model';

@model()
export class Challenge extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  shortDescription: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'array',
    itemType: 'number',
    default: [],
  })
  sdgGoals?: number[];

  @property({
    type: 'boolean',
    required: true,
    default: false,
  })
  archived: boolean;

  @property({
    type: 'string',
    required: true,
  })
  badge: string;

  @hasMany(() => ChallengeLevel)
  challengeLevels: ChallengeLevel[];

  constructor(data?: Partial<Challenge>) {
    super(data);
  }
}

export interface ChallengeRelations {
  // describe navigational properties here
}

export type ChallengeWithRelations = Challenge & ChallengeRelations;
