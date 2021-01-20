<template>
  <v-app-bar class="ma-5" color="white" flat elevate-on-scroll>
    <v-btn x-large icon><v-icon>mdi-chevron-left</v-icon></v-btn>
    <v-toolbar-title class="mr-3">2020/1/1</v-toolbar-title>
    <v-btn x-large icon><v-icon>mdi-chevron-right</v-icon></v-btn>
    <v-spacer></v-spacer>
    <v-btn icon><v-icon>mdi-dots-vertical</v-icon></v-btn>
  </v-app-bar>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class AppBar extends Vue {}
</script>
