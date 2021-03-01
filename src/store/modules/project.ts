import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule,
} from 'vuex-module-decorators';

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
    const allProject: ProjectData = {
      projectId: 0,
      projectName: '全て',
      color: '#000000',
    };
    this.projects.unshift(allProject);
  }

  @Action
  setProjectData(projectData: ProjectData[]) {
    this.SET_PROJECT_DATA(projectData);
  }

  get GET_PROJECT_DATA(): ProjectData[] {
    return this.projects;
  }
}
export const projectStore = getModule(Project);
