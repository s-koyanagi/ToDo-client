import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule,
} from 'vuex-module-decorators';

import store from '../index';
import { StatusData } from '@/types/types';

@Module({
  dynamic: true,
  store,
  name: 'Status',
  namespaced: true,
})
class Status extends VuexModule {
  private status: StatusData[] = [];

  @Mutation
  private SET_STATUS_DATA(status: StatusData[]) {
    this.status = status;
  }

  @Action
  setStatusData(statusData: StatusData[]) {
    this.SET_STATUS_DATA(statusData);
  }

  get GET_STATUS_DATA(): StatusData[] {
    return this.status;
  }
}
export const projectStore = getModule(Status);
