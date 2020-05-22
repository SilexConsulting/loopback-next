import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Challenge} from './challenge.model';
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
    default: 0,
  })
  currentLevel?: number;

  @property({
    type: 'number',
    default: 0,
  })
  completedTasks?: number;

  @property({
    type: 'boolean',
    default: false,
  })
  completed?: boolean;

  @belongsTo(() => User)
  userId: number;

  @belongsTo(() => Challenge)
  challengeId: number;

  constructor(data?: Partial<ChallengeProgress>) {
    super(data);
  }
}

export interface ChallengeProgressRelations {
  // describe navigational properties here
}

export type ChallengeProgressWithRelations = ChallengeProgress & ChallengeProgressRelations;
