import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  ChallengeProgress,
  User,
} from '../models';
import {ChallengeProgressRepository} from '../repositories';

export class ChallengeProgressUserController {
  constructor(
    @repository(ChallengeProgressRepository)
    public challengeProgressRepository: ChallengeProgressRepository,
  ) { }

  @get('/challenge-progresses/{id}/user', {
    responses: {
      '200': {
        description: 'User belonging to ChallengeProgress',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(User)},
          },
        },
      },
    },
  })
  async getUser(
    @param.path.number('id') id: typeof ChallengeProgress.prototype.id,
  ): Promise<User> {
    return this.challengeProgressRepository.user(id);
  }
}
