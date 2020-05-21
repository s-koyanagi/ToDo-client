<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-sheet>
          <p style="margin-bottom: 0px;" class="headline pt-3 pl-3">
            Task List
          </p>
          <v-container>
            <v-row dense>
              <v-col cols="4">
                <v-sheet color="red lighten-4" height="495" elevation="2">
                  <p style="margin-bottom: 12px;" class="title pt-3 pl-3">
                    Waiting
                  </p>
                  <v-container>
                    <v-row dense v-for="task in tasks" :key="task.id">
                      <v-col>
                        <v-card>
                          <v-card-title class="title pt-2 pb-2">{{
                            task.title
                          }}</v-card-title>
                          <v-divider></v-divider>
                          <v-card-text>{{ task.detail }}</v-card-text>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-sheet>
              </v-col>
              <v-col cols="4">
                <v-sheet color="blue lighten-4" height="495" elevation="2">
                  <p style="margin-bottom: 12px;" class="title pt-3 pl-3">
                    Working
                  </p>
                </v-sheet>
              </v-col>
              <v-col cols="4">
                <v-sheet color="teal lighten-4" height="495" elevation="2">
                  <p style="margin-bottom: 12px;" class="title pt-3 pl-3">
                    Completed
                  </p>
                </v-sheet>
              </v-col>
            </v-row>
          </v-container>
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
export default class Kanban extends Vue {
  tasks = [
    {
      id: '1',
      title: 'テスト1',
      detail: 'テスト1テスト1テスト1テスト1テスト1'
    },
    { id: '2', title: 'テスト2', detail: 'テスト2テスト2テスト2テスト2テスト2' }
  ]
}
</script>
