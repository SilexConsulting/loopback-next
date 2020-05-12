import {DefaultCrudRepository} from '@loopback/repository';
import {Task, TaskRelations} from '../models';
import {LocaldbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TaskRepository extends DefaultCrudRepository<
  Task,
  typeof Task.prototype.id,
  TaskRelations
> {
  constructor(
    @inject('datasources.localdb') dataSource: LocaldbDataSource,
  ) {
    super(Task, dataSource);
  }
}
