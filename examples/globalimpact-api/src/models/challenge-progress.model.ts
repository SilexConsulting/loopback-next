import {Entity, model, property, belongsTo} from '@loopback/repository';
import {User} from './user.model';

@model()
export class ChallengeProgress extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
  })
  currentLevel?: number;

  @property({
    type: 'array',
    itemType: 'number',
  })
  completedTasks?: number[];

  @belongsTo(() => User)
  userId: number;

  constructor(data?: Partial<ChallengeProgress>) {
    super(data);
  }
}

export interface ChallengeProgressRelations {
  // describe navigational properties here
}

export type ChallengeProgressWithRelations = ChallengeProgress & ChallengeProgressRelations;
