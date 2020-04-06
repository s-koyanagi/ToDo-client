<template>
  <v-container>
    <v-row></v-row>
    <v-divider></v-divider>
    <v-row>
      <v-col cols="4">
        <v-sheet color="red lighten-4" min-height="100">
          <p
            style="margin-bottom: 12px;"
            class="title pt-3 text-center font-weight-black"
          >
            未着手
          </p>
          <v-divider></v-divider>
        </v-sheet>
      </v-col>
      <v-col cols="4">
        <v-sheet color="blue lighten-4" min-height="100">
          <p
            style="margin-bottom: 12px;"
            class="title pt-3 text-center font-weight-black"
          >
            着手中
          </p>
          <v-divider></v-divider>
        </v-sheet>
      </v-col>
      <v-col cols="4">
        <v-sheet color="teal lighten-4" min-height="100">
          <p
            style="margin-bottom: 12px;"
            class="title pt-3 text-center font-weight-black"
          >
            完了
          </p>
          <v-divider></v-divider>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Component, Vue, Watch } from 'vue-property-decorator'
import MenuBar from '../components/orgnisms/MenuBar'

@Component({
  components: {
    MenuBar
  }
})
export default class Kanban extends Vue {}
</script>
