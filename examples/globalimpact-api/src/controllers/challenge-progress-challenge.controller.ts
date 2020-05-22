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
  Challenge,
} from '../models';
import {ChallengeProgressRepository} from '../repositories';

export class ChallengeProgressChallengeController {
  constructor(
    @repository(ChallengeProgressRepository)
    public challengeProgressRepository: ChallengeProgressRepository,
  ) { }

  @get('/challenge-progresses/{id}/challenge', {
    responses: {
      '200': {
        description: 'Challenge belonging to ChallengeProgress',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Challenge)},
          },
        },
      },
    },
  })
  async getChallenge(
    @param.path.number('id') id: typeof ChallengeProgress.prototype.id,
  ): Promise<Challenge> {
    return this.challengeProgressRepository.challenge(id);
  }
}
