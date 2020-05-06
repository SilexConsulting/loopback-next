import {Entity, model, property} from '@loopback/repository';

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
    type: 'string',
    required: true,
  })
  badge: string;


  constructor(data?: Partial<Challenge>) {
    super(data);
  }
}

export interface ChallengeRelations {
  // describe navigational properties here
}

export type ChallengeWithRelations = Challenge & ChallengeRelations;
