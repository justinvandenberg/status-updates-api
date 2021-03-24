import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {StatusUpdate, StatusUpdateRelations} from '../models';

export class StatusUpdateRepository extends DefaultCrudRepository<
  StatusUpdate,
  typeof StatusUpdate.prototype.id,
  StatusUpdateRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(StatusUpdate, dataSource);
  }
}
