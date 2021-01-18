<template>
  <v-row no-gutters>
    <v-col cols="2">
      <v-card class="grey lighten-3" min-height="800" outlined tile>
        <p style="margin-bottom: 0px" class="headline pt-3 pl-3">Filter</p>
      </v-card>
    </v-col>

    <v-col cols="10">
      <v-card min-height="800" outlined tile>
        <v-card-text>
          <data-table
            class="ma-5"
            :data="tableData"
            :header="head"
            :useSearch="true"
          >
          </data-table>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import DataTable from '../components/organisms/DataTable.vue'

@Component({
  components: {
    DataTable
  }
})
export default class Kanban extends Vue {
  search: String = ''
  head = [
    { text: 'Type', align: 'start', value: 'type' },
    { text: 'Subject', align: 'start', value: 'subject' },
    { text: 'Status', align: 'start', value: 'status' }
  ]

  tableData = [
    { id: 1, type: 'プライベート', subject: '友達とランチ', status: '未着手' },
    { id: 2, type: '仕事', subject: 'テスト仕様書作成', status: '着手中' },
    { id: 3, type: '仕事', subject: '人事提出物', status: '未着手' },
    { id: 4, type: '家事', subject: '風呂掃除', status: '着手中' },
    { id: 5, type: '家事', subject: '夕飯買い物', status: '未着手' },
    { id: 6, type: 'プライベート', subject: '友達とランチ', status: '未着手' },
    { id: 7, type: '仕事', subject: 'テスト仕様書作成', status: '未着手' },
    { id: 8, type: '仕事', subject: '人事提出物', status: '未着手' },
    { id: 9, type: '家事', subject: '風呂掃除', status: '着手中' },
    { id: 10, type: '家事', subject: '夕飯買い物', status: '未着手' },
    { id: 11, type: 'プライベート', subject: '友達とランチ', status: '未着手' },
    { id: 12, type: '仕事', subject: 'テスト仕様書作成', status: '未着手' },
    { id: 13, type: '仕事', subject: '人事提出物', status: '着手中' },
    { id: 14, type: '家事', subject: '風呂掃除', status: '未着手' },
    { id: 15, type: '家事', subject: '夕飯買い物', status: '未着手' }
  ]
}
</script>
