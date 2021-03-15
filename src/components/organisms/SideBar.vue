<template>
  <div>
    <v-navigation-drawer clipped expand-on-hover permanent app>
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img
              src="https://randomuser.me/api/portraits/women/85.jpg"
            ></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              {{ userData.fullName }}
            </v-list-item-title>
            <v-list-item-subtitle>{{ userData.email }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item link @click="isTaskFormDialogVisible = true">
          <v-list-item-icon>
            <v-icon>mdi-pen-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-title>タスクの追加</v-list-item-title>
        </v-list-item>
        <v-list-group :value="false" prepend-icon="mdi-filter" no-action>
          <template v-slot:activator>
            <v-list-item-title>クイックフィルター</v-list-item-title>
          </template>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-calendar-clock</v-icon>
            </v-list-item-icon>
            <v-list-item-title>期限間近</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-title>お気に入り</v-list-item-title>
          </v-list-item>
        </v-list-group>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-icon>
          <v-list-item-title>設定</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <task-form-dialog :isVisible="isTaskFormDialogVisible"> </task-form-dialog>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import User from '@/models/dto/user';
  import { loginUser } from '@/store/modules/loginUser';
  import TaskFormDialog from './TaskFormDialog.vue';

  @Component({
    components: {
      TaskFormDialog,
    },
  })
  export default class SideBar extends Vue {
    private isTaskFormDialogVisible: boolean = false;
    get userData(): User {
      return loginUser.GET_USER_INFO;
    }
  }
</script>
