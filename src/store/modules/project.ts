import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

import store from '../index';
import { ProjectData } from '@/types/types';

@Module({
  dynamic: true,
  store,
  name: 'Project',
  namespaced: true,
})
class Project extends VuexModule {
  private projects: ProjectData[] = [];

  @Mutation
  private SET_PROJECT_DATA(projects: ProjectData[]) {
    this.projects = projects;
  }

  @Action
  setProjectData(projectData: ProjectData[]) {
    this.SET_PROJECT_DATA(projectData);
  }

  get GET_PROJECT_DATA(): ProjectData[] {
    return this.projects;
  }
}
