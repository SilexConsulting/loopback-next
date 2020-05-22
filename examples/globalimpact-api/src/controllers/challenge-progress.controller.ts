import {Count, CountSchema, Filter, FilterExcludingWhere, repository, Where} from '@loopback/repository';
import {del, get, getModelSchemaRef, param, patch, post, put, requestBody} from '@loopback/rest';
import {ChallengeLevel, ChallengeProgress} from '../models';
import {ChallengeLevelRepository, ChallengeProgressRepository, ChallengeRepository, TaskRepository} from '../repositories';

export class ChallengeProgressController {
  constructor(
    @repository(ChallengeProgressRepository)
    public challengeProgressRepository: ChallengeProgressRepository,
    @repository(ChallengeRepository)
    public challengeRepository: ChallengeProgressRepository,
    @repository(ChallengeLevelRepository)
    public challengeLevelRepository: ChallengeLevelRepository,
    @repository(TaskRepository)
    public taskRepository: ChallengeLevelRepository,
  ) {}

  @post('/challenge-progresses', {
    responses: {
      '200': {
        description: 'ChallengeProgress model instance',
        content: {'application/json': {schema: getModelSchemaRef(ChallengeProgress)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ChallengeProgress, {
            title: 'NewChallengeProgress',
            exclude: ['id'],
          }),
        },
      },
    })
    challengeProgress: Omit<ChallengeProgress, 'id'>,
  ): Promise<ChallengeProgress> {
    const existingFilter: Filter = {
      where: {
        ...challengeProgress
      }
    };
    return this.challengeProgressRepository.create(challengeProgress);
  }

  @get('/challenge-progresses/count', {
    responses: {
      '200': {
        description: 'ChallengeProgress model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(ChallengeProgress) where?: Where<ChallengeProgress>,
  ): Promise<Count> {
    return this.challengeProgressRepository.count(where);
  }

  @get('/challenge-progresses', {
    responses: {
      '200': {
        description: 'Array of ChallengeProgress model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(ChallengeProgress, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(ChallengeProgress) filter?: Filter<ChallengeProgress>,
  ): Promise<ChallengeProgress[]> {
    return this.challengeProgressRepository.find(filter);
  }

  @patch('/challenge-progresses', {
    responses: {
      '200': {
        description: 'ChallengeProgress PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ChallengeProgress, {partial: true}),
        },
      },
    })
    challengeProgress: ChallengeProgress,
    @param.where(ChallengeProgress) where?: Where<ChallengeProgress>,
  ): Promise<Count> {
    return this.challengeProgressRepository.updateAll(challengeProgress, where);
  }

  @get('/challenge-progresses/{id}', {
    responses: {
      '200': {
        description: 'ChallengeProgress model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ChallengeProgress, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ChallengeProgress, {exclude: 'where'}) filter?: FilterExcludingWhere<ChallengeProgress>
  ): Promise<ChallengeProgress> {
    return this.challengeProgressRepository.findById(id, filter);
  }

  @patch('/challenge-progresses/{id}', {
    responses: {
      '204': {
        description: 'ChallengeProgress PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ChallengeProgress, {partial: true}),
        },
      },
    })
    challengeProgress: ChallengeProgress,
  ): Promise<void> {
    console.log(challengeProgress);
    await this.challengeProgressRepository.updateById(id, challengeProgress);
  }

  @patch('/challenge-progresses/{id}/advance', {
    responses: {
      '204': {
        description: 'ChallengeProgress PATCH success',
      },
    },
  })
  async advance(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ChallengeProgress, {partial: true}),
        },
      },
    })
    challengeProgress: ChallengeProgress,
  ): Promise<void> {
    //Get challenge progress
    let progress: ChallengeProgress = await this.challengeProgressRepository.findById(id);

    //Get challenge levels
    let currentLevelIndex: number = (progress as any).currentLevel;
    const challengeLevelFilter: Filter = {
      where: {
        challengeId: progress.challengeId
      }
    };
    let challengeLevels = await this.challengeLevelRepository.find(challengeLevelFilter);

    //Get current level object
    let currentLevel: ChallengeLevel = challengeLevels[currentLevelIndex];

    //Get current level tasks
    let currentLevelId: number = (currentLevel as any).id;
    const taskFilter: Filter = {
      where: {
        challengeLevelId: currentLevel.id
      }
    };
    let currentTasks = await this.taskRepository.find(taskFilter);

    //Increment completed tasks
    (progress as any).completedTasks++;

    // if final task in current level
    if ((progress as any).completedTasks > currentTasks.length) {

      // if final level
      if (progress.currentLevel === challengeLevels.length) {
        // complete challenge
      } else {
        //increment level
        //reset task count
        (progress as any).currentLevel++;
        (progress as any).completedTasks = 0;
      }
    }

    await this.challengeProgressRepository.updateById(id, {
      ...progress
    });
  }

  @put('/challenge-progresses/{id}', {
    responses: {
      '204': {
        description: 'ChallengeProgress PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() challengeProgress: ChallengeProgress,
  ): Promise<void> {
    await this.challengeProgressRepository.replaceById(id, challengeProgress);
  }

  @del('/challenge-progresses/{id}', {
    responses: {
      '204': {
        description: 'ChallengeProgress DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.challengeProgressRepository.deleteById(id);
  }
}
