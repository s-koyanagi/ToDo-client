<template>
  <v-row no-gutters>
    <v-col cols="2">
      <v-card class="grey lighten-3" min-height="800" outlined tile>
        <v-list class="grey lighten-3" shaped>
          <v-subheader>プロジェクト</v-subheader>
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item v-for="(item, i) in filters" :key="i">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
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
            <template v-slot:[`item.project`]="{ item }">
              <v-chip color="primary" class="mr-3">
                {{ item.project }}
              </v-chip>
            </template>
            <template v-slot:[`item.status`]="{ item }">
              <v-chip color="red" class="mr-3">
                {{ item.status }}
              </v-chip>
            </template>
          </data-table>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { DataTableHeader } from 'vuetify';
  import DataTable from '../components/organisms/DataTable.vue';

  @Component({
    components: {
      DataTable,
    },
  })
  export default class Kanban extends Vue {
    search: String = '';
    head: DataTableHeader[] = [
      { text: 'プロジェクト', align: 'center', value: 'project', width: '150' },
      { text: '件名', align: 'start', value: 'subject', width: '500' },
      { text: '状態', align: 'center', value: 'status', width: '100' },
      { text: '期限', align: 'center', value: 'deadLine', width: '150' },
    ];
    tableData = [
      {
        id: 1,
        project: 'プライベート',
        subject: '友達とランチ',
        status: '未着手',
        deadLine: '2021/01/01',
      },
      {
        id: 2,
        project: '仕事',
        subject: 'テスト仕様書作成',
        status: '着手中',
        deadLine: '2021/01/05',
      },
      {
        id: 3,
        project: '仕事',
        subject: '人事提出物',
        status: '未着手',
        deadLine: '2021/01/11',
      },
      {
        id: 4,
        project: '家事',
        subject: '風呂掃除',
        status: '着手中',
        deadLine: '2021/01/13',
      },
      {
        id: 5,
        project: '家事',
        subject: '夕飯買い物',
        status: '未着手',
        deadLine: '2021/01/20',
      },
      {
        id: 6,
        project: 'プライベート',
        subject: '友達とランチ',
        status: '未着手',
        deadLine: '2021/01/24',
      },
      {
        id: 7,
        project: '仕事',
        subject: 'テスト仕様書作成',
        status: '未着手',
        deadLine: '2021/01/27',
      },
      {
        id: 8,
        project: '仕事',
        subject: '人事提出物',
        status: '未着手',
        deadLine: '2021/02/01',
      },
      {
        id: 9,
        project: '家事',
        subject: '風呂掃除',
        status: '着手中',
        deadLine: '2021/02/03',
      },
      {
        id: 10,
        project: '家事',
        subject: '夕飯買い物',
        status: '未着手',
        deadLine: '2021/02/06',
      },
      {
        id: 11,
        project: 'プライベート',
        subject: '友達とランチ',
        status: '未着手',
        deadLine: '2021/02/10',
      },
      {
        id: 12,
        project: '仕事',
        subject: 'テスト仕様書作成',
        status: '未着手',
        deadLine: '2021/02/11',
      },
      {
        id: 13,
        project: '仕事',
        subject: '人事提出物',
        status: '着手中',
        deadLine: '2021/02/14',
      },
      {
        id: 14,
        project: '家事',
        subject: '風呂掃除',
        status: '未着手',
        deadLine: '2021/02/19',
      },
      {
        id: 15,
        project: '家事',
        subject: '夕飯買い物',
        status: '未着手',
        deadLine: '2021/02/25',
      },
      {
        id: 16,
        project: '家事',
        subject: '夕飯買い物',
        status: '未着手',
        deadLine: '2021/02/27',
      },
    ];
    filters: object[] = [
      { text: 'Real-Time', icon: 'mdi-clock' },
      { text: 'Audience', icon: 'mdi-account' },
      { text: 'Conversions', icon: 'mdi-flag' },
    ];
  }
</script>
