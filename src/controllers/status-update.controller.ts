import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {StatusUpdate} from '../models';
import {StatusUpdateRepository} from '../repositories';

export class StatusUpdateController {
  constructor(
    @repository(StatusUpdateRepository)
    public statusUpdateRepository : StatusUpdateRepository,
  ) {}

  @post('/status-updates')
  @response(200, {
    description: 'StatusUpdate model instance',
    content: {'application/json': {schema: getModelSchemaRef(StatusUpdate)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(StatusUpdate, {
            title: 'NewStatusUpdate',
            
          }),
        },
      },
    })
    statusUpdate: StatusUpdate,
  ): Promise<StatusUpdate> {
    return this.statusUpdateRepository.create(statusUpdate);
  }

  @get('/status-updates/count')
  @response(200, {
    description: 'StatusUpdate model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(StatusUpdate) where?: Where<StatusUpdate>,
  ): Promise<Count> {
    return this.statusUpdateRepository.count(where);
  }

  @get('/status-updates')
  @response(200, {
    description: 'Array of StatusUpdate model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(StatusUpdate, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(StatusUpdate) filter?: Filter<StatusUpdate>,
  ): Promise<StatusUpdate[]> {
    return this.statusUpdateRepository.find(filter);
  }

  @patch('/status-updates')
  @response(200, {
    description: 'StatusUpdate PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(StatusUpdate, {partial: true}),
        },
      },
    })
    statusUpdate: StatusUpdate,
    @param.where(StatusUpdate) where?: Where<StatusUpdate>,
  ): Promise<Count> {
    return this.statusUpdateRepository.updateAll(statusUpdate, where);
  }

  @get('/status-updates/{id}')
  @response(200, {
    description: 'StatusUpdate model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(StatusUpdate, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(StatusUpdate, {exclude: 'where'}) filter?: FilterExcludingWhere<StatusUpdate>
  ): Promise<StatusUpdate> {
    return this.statusUpdateRepository.findById(id, filter);
  }

  @patch('/status-updates/{id}')
  @response(204, {
    description: 'StatusUpdate PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(StatusUpdate, {partial: true}),
        },
      },
    })
    statusUpdate: StatusUpdate,
  ): Promise<void> {
    await this.statusUpdateRepository.updateById(id, statusUpdate);
  }

  @put('/status-updates/{id}')
  @response(204, {
    description: 'StatusUpdate PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() statusUpdate: StatusUpdate,
  ): Promise<void> {
    await this.statusUpdateRepository.replaceById(id, statusUpdate);
  }

  @del('/status-updates/{id}')
  @response(204, {
    description: 'StatusUpdate DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.statusUpdateRepository.deleteById(id);
  }
}
