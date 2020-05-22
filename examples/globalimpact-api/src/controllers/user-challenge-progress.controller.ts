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
  User,
  ChallengeProgress,
} from '../models';
import {UserRepository} from '../repositories';

export class UserChallengeProgressController {
  constructor(
    @repository(UserRepository) protected userRepository: UserRepository,
  ) { }

  @get('/users/{id}/challenge-progresses', {
    responses: {
      '200': {
        description: 'Array of User has many ChallengeProgress',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(ChallengeProgress)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<ChallengeProgress>,
  ): Promise<ChallengeProgress[]> {
    return this.userRepository.challengeProgresses(id).find(filter);
  }

  @post('/users/{id}/challenge-progresses', {
    responses: {
      '200': {
        description: 'User model instance',
        content: {'application/json': {schema: getModelSchemaRef(ChallengeProgress)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof User.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ChallengeProgress, {
            title: 'NewChallengeProgressInUser',
            exclude: ['id'],
            optional: ['userId']
          }),
        },
      },
    }) challengeProgress: Omit<ChallengeProgress, 'id'>,
  ): Promise<ChallengeProgress> {
    return this.userRepository.challengeProgresses(id).create(challengeProgress);
  }

  @patch('/users/{id}/challenge-progresses', {
    responses: {
      '200': {
        description: 'User.ChallengeProgress PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ChallengeProgress, {partial: true}),
        },
      },
    })
    challengeProgress: Partial<ChallengeProgress>,
    @param.query.object('where', getWhereSchemaFor(ChallengeProgress)) where?: Where<ChallengeProgress>,
  ): Promise<Count> {
    return this.userRepository.challengeProgresses(id).patch(challengeProgress, where);
  }

  @del('/users/{id}/challenge-progresses', {
    responses: {
      '200': {
        description: 'User.ChallengeProgress DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(ChallengeProgress)) where?: Where<ChallengeProgress>,
  ): Promise<Count> {
    return this.userRepository.challengeProgresses(id).delete(where);
  }
}
