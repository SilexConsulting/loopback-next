import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Challenge} from './challenge.model';
import {Task} from './task.model';

@model()
export class ChallengeLevel extends Entity {
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
  description: string;

  @belongsTo(() => Challenge)
  challengeId: number;

  @hasMany(() => Task)
  tasks: Task[];

  constructor(data?: Partial<ChallengeLevel>) {
    super(data);
  }
}

export interface ChallengeLevelRelations {
  // describe navigational properties here
}

export type ChallengeLevelWithRelations = ChallengeLevel & ChallengeLevelRelations;
