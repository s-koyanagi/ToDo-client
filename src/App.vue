<template>
  <v-app>
    <menu-bar v-if="$route.name != 'login'"></menu-bar>
    <v-content class="grey lighten-3">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MenuBar from './components/orgnisms/MenuBar.vue'

@Component({
  components: {
    MenuBar
  }
})
export default class App extends Vue {}
</script>
