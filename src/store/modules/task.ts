import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

import store from '../index';
import axios, { AxiosError, AxiosResponse } from 'axios';
import router from '@/router';
import { TaskData } from '@/types/types';

@Module({
  dynamic: true,
  store,
  name: 'task',
  namespaced: true,
})
class task extends VuexModule {
  private taskData: TaskData[] = [];

  @Mutation
  private SET_TASK_DATA(task: TaskData[]) {
    this.taskData = task;
  }

  @Action({ rawError: true })
  async getTaskData(projectId: number) {}
}
