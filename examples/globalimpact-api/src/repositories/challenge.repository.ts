import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Challenge, ChallengeRelations, ChallengeLevel} from '../models';
import {LocaldbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {ChallengeLevelRepository} from './challenge-level.repository';

export class ChallengeRepository extends DefaultCrudRepository<
  Challenge,
  typeof Challenge.prototype.id,
  ChallengeRelations
> {

  public readonly challengeLevels: HasManyRepositoryFactory<ChallengeLevel, typeof Challenge.prototype.id>;

  constructor(
    @inject('datasources.localdb') dataSource: LocaldbDataSource, @repository.getter('ChallengeLevelRepository') protected challengeLevelRepositoryGetter: Getter<ChallengeLevelRepository>,
  ) {
    super(Challenge, dataSource);
    this.challengeLevels = this.createHasManyRepositoryFactoryFor('challengeLevels', challengeLevelRepositoryGetter,);
    this.registerInclusionResolver('challengeLevels', this.challengeLevels.inclusionResolver);
  }
}
