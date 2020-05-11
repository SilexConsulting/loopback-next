import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {ChallengeLevel, ChallengeLevelRelations, Challenge} from '../models';
import {LocaldbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {ChallengeRepository} from './challenge.repository';

export class ChallengeLevelRepository extends DefaultCrudRepository<
  ChallengeLevel,
  typeof ChallengeLevel.prototype.id,
  ChallengeLevelRelations
> {

  public readonly challenge: BelongsToAccessor<Challenge, typeof ChallengeLevel.prototype.id>;

  constructor(
    @inject('datasources.localdb') dataSource: LocaldbDataSource, @repository.getter('ChallengeRepository') protected challengeRepositoryGetter: Getter<ChallengeRepository>,
  ) {
    super(ChallengeLevel, dataSource);
    this.challenge = this.createBelongsToAccessorFor('challenge', challengeRepositoryGetter,);
    this.registerInclusionResolver('challenge', this.challenge.inclusionResolver);
  }
}
