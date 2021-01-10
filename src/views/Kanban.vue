<template>
  <v-row no-gutters>
    <v-col cols="2">
      <v-card class="grey lighten-3" min-height="800" outlined tile>
        <p style="margin-bottom: 0px" class="headline pt-3 pl-3">Filter</p>
        <!-- <v-container>
          <v-row dense>
            <v-col></v-col>
          </v-row>
        </v-container> -->
      </v-card>
    </v-col>

    <v-col cols="10">
      <v-card min-height="800" outlined tile>
        <v-app-bar class="ma-5" color="white" flat elevate-on-scroll>
          <v-btn x-large icon><v-icon>mdi-arrow-left</v-icon></v-btn>
          <v-toolbar-title class="mr-3">2020/1/1</v-toolbar-title>
          <v-btn x-large icon><v-icon>mdi-arrow-right</v-icon></v-btn>
          <v-spacer></v-spacer>
          <v-btn icon><v-icon>mdi-dots-vertical</v-icon></v-btn>
        </v-app-bar>
        <v-card-text class="ma-5">
          <v-simple-table>
            <thead>
              <tr>
                <th>subject</th>
                <th>status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>友達とランチ</td>
                <td>完了</td>
              </tr>
              <tr>
                <td>評価書提出</td>
                <td>進行中</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class Kanban extends Vue {}
</script>
