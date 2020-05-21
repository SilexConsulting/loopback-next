import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {ChallengeProgress, ChallengeProgressRelations, User} from '../models';
import {LocaldbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {UserRepository} from './user.repository';

export class ChallengeProgressRepository extends DefaultCrudRepository<
  ChallengeProgress,
  typeof ChallengeProgress.prototype.id,
  ChallengeProgressRelations
> {

  public readonly user: BelongsToAccessor<User, typeof ChallengeProgress.prototype.id>;

  constructor(
    @inject('datasources.localdb') dataSource: LocaldbDataSource, @repository.getter('UserRepository') protected userRepositoryGetter: Getter<UserRepository>,
  ) {
    super(ChallengeProgress, dataSource);
    this.user = this.createBelongsToAccessorFor('user', userRepositoryGetter,);
  }
}
