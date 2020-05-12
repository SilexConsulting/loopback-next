import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  ChallengeLevel,
  Task,
} from '../models';
import {ChallengeLevelRepository} from '../repositories';

export class ChallengeLevelTaskController {
  constructor(
    @repository(ChallengeLevelRepository) protected challengeLevelRepository: ChallengeLevelRepository,
  ) { }

  @get('/challenge-levels/{id}/tasks', {
    responses: {
      '200': {
        description: 'Array of ChallengeLevel has many Task',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Task)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Task>,
  ): Promise<Task[]> {
    return this.challengeLevelRepository.tasks(id).find(filter);
  }

  @post('/challenge-levels/{id}/tasks', {
    responses: {
      '200': {
        description: 'ChallengeLevel model instance',
        content: {'application/json': {schema: getModelSchemaRef(Task)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof ChallengeLevel.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Task, {
            title: 'NewTaskInChallengeLevel',
            exclude: ['id'],
            optional: ['challengeLevelId']
          }),
        },
      },
    }) task: Omit<Task, 'id'>,
  ): Promise<Task> {
    return this.challengeLevelRepository.tasks(id).create(task);
  }

  @patch('/challenge-levels/{id}/tasks', {
    responses: {
      '200': {
        description: 'ChallengeLevel.Task PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Task, {partial: true}),
        },
      },
    })
    task: Partial<Task>,
    @param.query.object('where', getWhereSchemaFor(Task)) where?: Where<Task>,
  ): Promise<Count> {
    return this.challengeLevelRepository.tasks(id).patch(task, where);
  }

  @del('/challenge-levels/{id}/tasks', {
    responses: {
      '200': {
        description: 'ChallengeLevel.Task DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Task)) where?: Where<Task>,
  ): Promise<Count> {
    return this.challengeLevelRepository.tasks(id).delete(where);
  }
}
