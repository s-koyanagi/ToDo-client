<template>
  <v-app>
    <top-bar v-if="$route.name != 'login'"></top-bar>
    <side-bar v-if="$route.name != 'login'"></side-bar>
    <v-main>
      <v-container class="ma-0 pa-0" fluid fill-height>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import TopBar from './components/organisms/TopBar.vue';
  import SideBar from './components/organisms/SideBar.vue';

  @Component({
    components: {
      TopBar,
      SideBar,
    },
  })
  export default class App extends Vue {}
</script>
