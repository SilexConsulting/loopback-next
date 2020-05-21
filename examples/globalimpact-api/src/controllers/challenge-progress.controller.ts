import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {ChallengeProgress} from '../models';
import {ChallengeProgressRepository} from '../repositories';

export class ChallengeProgressController {
  constructor(
    @repository(ChallengeProgressRepository)
    public challengeProgressRepository : ChallengeProgressRepository,
  ) {}

  @post('/challenge-progresses', {
    responses: {
      '200': {
        description: 'ChallengeProgress model instance',
        content: {'application/json': {schema: getModelSchemaRef(ChallengeProgress)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ChallengeProgress, {
            title: 'NewChallengeProgress',
            exclude: ['id'],
          }),
        },
      },
    })
    challengeProgress: Omit<ChallengeProgress, 'id'>,
  ): Promise<ChallengeProgress> {
    return this.challengeProgressRepository.create(challengeProgress);
  }

  @get('/challenge-progresses/count', {
    responses: {
      '200': {
        description: 'ChallengeProgress model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(ChallengeProgress) where?: Where<ChallengeProgress>,
  ): Promise<Count> {
    return this.challengeProgressRepository.count(where);
  }

  @get('/challenge-progresses', {
    responses: {
      '200': {
        description: 'Array of ChallengeProgress model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(ChallengeProgress, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(ChallengeProgress) filter?: Filter<ChallengeProgress>,
  ): Promise<ChallengeProgress[]> {
    return this.challengeProgressRepository.find(filter);
  }

  @patch('/challenge-progresses', {
    responses: {
      '200': {
        description: 'ChallengeProgress PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ChallengeProgress, {partial: true}),
        },
      },
    })
    challengeProgress: ChallengeProgress,
    @param.where(ChallengeProgress) where?: Where<ChallengeProgress>,
  ): Promise<Count> {
    return this.challengeProgressRepository.updateAll(challengeProgress, where);
  }

  @get('/challenge-progresses/{id}', {
    responses: {
      '200': {
        description: 'ChallengeProgress model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ChallengeProgress, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ChallengeProgress, {exclude: 'where'}) filter?: FilterExcludingWhere<ChallengeProgress>
  ): Promise<ChallengeProgress> {
    return this.challengeProgressRepository.findById(id, filter);
  }

  @patch('/challenge-progresses/{id}', {
    responses: {
      '204': {
        description: 'ChallengeProgress PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ChallengeProgress, {partial: true}),
        },
      },
    })
    challengeProgress: ChallengeProgress,
  ): Promise<void> {
    await this.challengeProgressRepository.updateById(id, challengeProgress);
  }

  @put('/challenge-progresses/{id}', {
    responses: {
      '204': {
        description: 'ChallengeProgress PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() challengeProgress: ChallengeProgress,
  ): Promise<void> {
    await this.challengeProgressRepository.replaceById(id, challengeProgress);
  }

  @del('/challenge-progresses/{id}', {
    responses: {
      '204': {
        description: 'ChallengeProgress DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.challengeProgressRepository.deleteById(id);
  }
}
