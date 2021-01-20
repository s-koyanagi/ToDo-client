<template>
  <v-app-bar
    absolute
    color="teal lighten-3"
    dark
    hide-on-scroll
    scroll-target="#scrolling-techniques-4"
    app
  >
    <v-toolbar-title>ToDo</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn outlined>
      ログアウト
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class TopBar extends Vue {}
</script>
