import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {ChallengeLevel, ChallengeLevelRelations, Challenge, Task} from '../models';
import {LocaldbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {ChallengeRepository} from './challenge.repository';
import {TaskRepository} from './task.repository';

export class ChallengeLevelRepository extends DefaultCrudRepository<
  ChallengeLevel,
  typeof ChallengeLevel.prototype.id,
  ChallengeLevelRelations
> {

  public readonly challenge: BelongsToAccessor<Challenge, typeof ChallengeLevel.prototype.id>;

  public readonly tasks: HasManyRepositoryFactory<Task, typeof ChallengeLevel.prototype.id>;

  constructor(
    @inject('datasources.localdb') dataSource: LocaldbDataSource, @repository.getter('ChallengeRepository') protected challengeRepositoryGetter: Getter<ChallengeRepository>, @repository.getter('TaskRepository') protected taskRepositoryGetter: Getter<TaskRepository>,
  ) {
    super(ChallengeLevel, dataSource);
    this.tasks = this.createHasManyRepositoryFactoryFor('tasks', taskRepositoryGetter,);
    this.registerInclusionResolver('tasks', this.tasks.inclusionResolver);
    this.challenge = this.createBelongsToAccessorFor('challenge', challengeRepositoryGetter,);
    this.registerInclusionResolver('challenge', this.challenge.inclusionResolver);
  }
}
