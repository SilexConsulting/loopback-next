import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  ChallengeLevel,
  Challenge,
} from '../models';
import {ChallengeLevelRepository} from '../repositories';

export class ChallengeLevelChallengeController {
  constructor(
    @repository(ChallengeLevelRepository)
    public challengeLevelRepository: ChallengeLevelRepository,
  ) { }

  @get('/challenge-levels/{id}/challenge', {
    responses: {
      '200': {
        description: 'Challenge belonging to ChallengeLevel',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Challenge, {includeRelations: true})},
          },
        },
      },
    },
  })
  async getChallenge(
    @param.path.number('id') id: typeof ChallengeLevel.prototype.id,
  ): Promise<Challenge> {
    return this.challengeLevelRepository.challenge(id);
  }
}
