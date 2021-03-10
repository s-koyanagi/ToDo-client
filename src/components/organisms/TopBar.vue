<template>
  <v-app-bar
    absolute
    dark
    hide-on-scroll
    clipped-left
    color="teal lighten-3"
    scroll-target="#scrolling-techniques-4"
    app
  >
    <v-toolbar-title>ToDo</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn outlined @click="logout">
      ログアウト
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
  import { loginUser } from '@/store/modules/loginUser';
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class TopBar extends Vue {
    async logout() {
      await loginUser.logout();
    }
  }
</script>
