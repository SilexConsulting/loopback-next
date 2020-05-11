import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Challenge} from './challenge.model';

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

  @belongsTo(() => Challenge)
  challengeId: number;

  constructor(data?: Partial<ChallengeLevel>) {
    super(data);
  }
}

export interface ChallengeLevelRelations {
  // describe navigational properties here
}

export type ChallengeLevelWithRelations = ChallengeLevel & ChallengeLevelRelations;
