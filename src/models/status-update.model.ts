import {Entity, model, property} from '@loopback/repository';

@model()
export class StatusUpdate extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  status: string;


  constructor(data?: Partial<StatusUpdate>) {
    super(data);
  }
}

export interface StatusUpdateRelations {
  // describe navigational properties here
}

export type StatusUpdateWithRelations = StatusUpdate & StatusUpdateRelations;
