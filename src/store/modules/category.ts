import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule,
} from 'vuex-module-decorators';

import store from '../index';
import { CategoryData } from '@/types/types';

@Module({
  dynamic: true,
  store,
  name: 'Category',
  namespaced: true,
})
class Category extends VuexModule {
  private categories: CategoryData[] = [];

  @Mutation
  private SET_CATEGORY_DATA(categories: CategoryData[]) {
    this.categories = categories;
    const tmp: CategoryData = {
      categoryId: 0,
      categoryName: '全て',
      color: '#000000',
    };
    this.categories.unshift(tmp);
  }

  @Action
  setCategoryData(categoryData: CategoryData[]) {
    this.SET_CATEGORY_DATA(categoryData);
  }

  get GET_CATEGORY_DATA(): CategoryData[] {
    return this.categories;
  }
}
export const categoryStore = getModule(Category);
