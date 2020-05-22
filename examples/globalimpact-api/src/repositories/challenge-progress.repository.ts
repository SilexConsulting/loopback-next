import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {ChallengeProgress, ChallengeProgressRelations, User, Challenge} from '../models';
import {LocaldbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {UserRepository} from './user.repository';
import {ChallengeRepository} from './challenge.repository';

export class ChallengeProgressRepository extends DefaultCrudRepository<
  ChallengeProgress,
  typeof ChallengeProgress.prototype.id,
  ChallengeProgressRelations
> {

  public readonly user: BelongsToAccessor<User, typeof ChallengeProgress.prototype.id>;

  public readonly challenge: BelongsToAccessor<Challenge, typeof ChallengeProgress.prototype.id>;

  constructor(
    @inject('datasources.localdb') dataSource: LocaldbDataSource, @repository.getter('UserRepository') protected userRepositoryGetter: Getter<UserRepository>, @repository.getter('ChallengeRepository') protected challengeRepositoryGetter: Getter<ChallengeRepository>,
  ) {
    super(ChallengeProgress, dataSource);
    this.challenge = this.createBelongsToAccessorFor('challenge', challengeRepositoryGetter,);
    this.registerInclusionResolver('challenge', this.challenge.inclusionResolver);
    this.user = this.createBelongsToAccessorFor('user', userRepositoryGetter,);
  }
}
