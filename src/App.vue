<template>
  <v-app>
    <!-- <side-bar v-if="$route.name != 'login'"></side-bar> -->
    <top-bar v-if="$route.name != 'login'"></top-bar>
    <v-content>
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TopBar from './components/orgnisms/TopBar.vue'
import SideBar from './components/orgnisms/SideBar.vue'

@Component({
  components: {
    TopBar,
    SideBar
  }
})
export default class App extends Vue {}
</script>
