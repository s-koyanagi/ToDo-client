<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height class="grey lighten-3">
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App',
  data: () => ({})
})
</script>
