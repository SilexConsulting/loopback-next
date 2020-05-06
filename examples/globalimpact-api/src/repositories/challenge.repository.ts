import {DefaultCrudRepository} from '@loopback/repository';
import {Challenge, ChallengeRelations} from '../models';
import {LocaldbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ChallengeRepository extends DefaultCrudRepository<
  Challenge,
  typeof Challenge.prototype.id,
  ChallengeRelations
> {
  constructor(
    @inject('datasources.localdb') dataSource: LocaldbDataSource,
  ) {
    super(Challenge, dataSource);
  }
}
