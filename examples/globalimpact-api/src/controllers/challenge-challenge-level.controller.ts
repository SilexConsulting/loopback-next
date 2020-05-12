import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Challenge,
  ChallengeLevel,
} from '../models';
import {ChallengeRepository} from '../repositories';

export class ChallengeChallengeLevelController {
  constructor(
    @repository(ChallengeRepository) protected challengeRepository: ChallengeRepository,
  ) { }

  @get('/challenges/{id}/challenge-levels', {
    responses: {
      '200': {
        description: 'Array of Challenge has many ChallengeLevel',
        content: {
          'application/json': {
            schema: {
              type: 'array', 
              items: getModelSchemaRef(ChallengeLevel, {includeRelations: true})
            },
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<ChallengeLevel>,
  ): Promise<ChallengeLevel[]> {
    return this.challengeRepository.challengeLevels(id).find(filter);
  }

  @post('/challenges/{id}/challenge-levels', {
    responses: {
      '200': {
        description: 'Challenge model instance',
        content: {'application/json': {schema: getModelSchemaRef(ChallengeLevel)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Challenge.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ChallengeLevel, {
            title: 'NewChallengeLevelInChallenge',
            exclude: ['id'],
            optional: ['challengeId']
          }),
        },
      },
    }) challengeLevel: Omit<ChallengeLevel, 'id'>,
  ): Promise<ChallengeLevel> {
    return this.challengeRepository.challengeLevels(id).create(challengeLevel);
  }

  @patch('/challenges/{id}/challenge-levels', {
    responses: {
      '200': {
        description: 'Challenge.ChallengeLevel PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ChallengeLevel, {partial: true}),
        },
      },
    })
    challengeLevel: Partial<ChallengeLevel>,
    @param.query.object('where', getWhereSchemaFor(ChallengeLevel)) where?: Where<ChallengeLevel>,
  ): Promise<Count> {
    return this.challengeRepository.challengeLevels(id).patch(challengeLevel, where);
  }

  @del('/challenges/{id}/challenge-levels', {
    responses: {
      '200': {
        description: 'Challenge.ChallengeLevel DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(ChallengeLevel)) where?: Where<ChallengeLevel>,
  ): Promise<Count> {
    return this.challengeRepository.challengeLevels(id).delete(where);
  }
}
