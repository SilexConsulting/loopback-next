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
import {ChallengeLevel} from '../models';
import {ChallengeLevelRepository} from '../repositories';

export class ChallengeLevelController {
  constructor(
    @repository(ChallengeLevelRepository)
    public challengeLevelRepository : ChallengeLevelRepository,
  ) {}

  @post('/challenge-levels', {
    responses: {
      '200': {
        description: 'ChallengeLevel model instance',
        content: {'application/json': {schema: getModelSchemaRef(ChallengeLevel)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ChallengeLevel, {
            title: 'NewChallengeLevel',
            exclude: ['id'],
          }),
        },
      },
    })
    challengeLevel: Omit<ChallengeLevel, 'id'>,
  ): Promise<ChallengeLevel> {
    return this.challengeLevelRepository.create(challengeLevel);
  }

  @get('/challenge-levels/count', {
    responses: {
      '200': {
        description: 'ChallengeLevel model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(ChallengeLevel) where?: Where<ChallengeLevel>,
  ): Promise<Count> {
    return this.challengeLevelRepository.count(where);
  }

  @get('/challenge-levels', {
    responses: {
      '200': {
        description: 'Array of ChallengeLevel model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(ChallengeLevel, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(ChallengeLevel) filter?: Filter<ChallengeLevel>,
  ): Promise<ChallengeLevel[]> {
    return this.challengeLevelRepository.find(filter);
  }

  @patch('/challenge-levels', {
    responses: {
      '200': {
        description: 'ChallengeLevel PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ChallengeLevel, {partial: true}),
        },
      },
    })
    challengeLevel: ChallengeLevel,
    @param.where(ChallengeLevel) where?: Where<ChallengeLevel>,
  ): Promise<Count> {
    return this.challengeLevelRepository.updateAll(challengeLevel, where);
  }

  @get('/challenge-levels/{id}', {
    responses: {
      '200': {
        description: 'ChallengeLevel model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ChallengeLevel, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ChallengeLevel, {exclude: 'where'}) filter?: FilterExcludingWhere<ChallengeLevel>
  ): Promise<ChallengeLevel> {
    return this.challengeLevelRepository.findById(id, filter);
  }

  @patch('/challenge-levels/{id}', {
    responses: {
      '204': {
        description: 'ChallengeLevel PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ChallengeLevel, {partial: true}),
        },
      },
    })
    challengeLevel: ChallengeLevel,
  ): Promise<void> {
    await this.challengeLevelRepository.updateById(id, challengeLevel);
  }

  @put('/challenge-levels/{id}', {
    responses: {
      '204': {
        description: 'ChallengeLevel PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() challengeLevel: ChallengeLevel,
  ): Promise<void> {
    await this.challengeLevelRepository.replaceById(id, challengeLevel);
  }

  @del('/challenge-levels/{id}', {
    responses: {
      '204': {
        description: 'ChallengeLevel DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.challengeLevelRepository.deleteById(id);
  }
}
