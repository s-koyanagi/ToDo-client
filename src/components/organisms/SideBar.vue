<template>
  <v-navigation-drawer clipped expand-on-hover permanent app>
    <v-list>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
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
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-folder</v-icon>
        </v-list-item-icon>
        <v-list-item-title>My Files</v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-account-multiple</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Shared with me</v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-star</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Starred</v-list-item-title>
      </v-list-item>
      <v-list-group :value="true" prepend-icon="mdi-account-circle">
        <template v-slot:activator>
          <v-list-item-title>Users</v-list-item-title>
        </template>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import User from '@/models/dto/user';
  import { loginUser } from '@/store/modules/loginUser';

  @Component
  export default class SideBar extends Vue {
    get userData(): User {
      console.log('mounted!');
      return loginUser.GET_USER_INFO;
    }
  }
</script>
