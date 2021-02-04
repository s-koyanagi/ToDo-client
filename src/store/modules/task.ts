import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule,
} from 'vuex-module-decorators';

import store from '../index';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { TaskData } from '@/types/types';

@Module({
  dynamic: true,
  store,
  name: 'Task',
  namespaced: true,
})
class Task extends VuexModule {
  private taskList: TaskData[] = [];

  @Mutation
  private SET_TASK_LIST(task: TaskData[]) {
    this.taskList = task;
  }

  @Action({ rawError: true })
  async getTaskList(projectId?: number) {
    if (projectId === undefined) {
      await axios
        .post('/task/get-list')
        .then((res: AxiosResponse) => {
          this.SET_TASK_LIST(res.data);
        })
        .catch((err: AxiosError) => {});
    } else {
      await axios
        .post('/task/get-list', projectId)
        .then((res: AxiosResponse) => {
          this.SET_TASK_LIST(res.data);
        })
        .catch((err: AxiosError) => {});
    }
  }

  get GET_TASK_LIST(): TaskData[] {
    return this.taskList;
  }
}
export const taskStore = getModule(Task);
