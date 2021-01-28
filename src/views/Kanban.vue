<template>
  <v-row no-gutters>
    <v-col cols="2">
      <v-card class="grey lighten-3" min-height="800" outlined tile>
        <v-list class="grey lighten-3" shaped>
          <v-subheader>プロジェクト</v-subheader>
          <v-list-item-group v-model="selectedItem">
            <v-list-item v-for="(item, i) in projectData" :key="i">
              <v-list-item-icon>
                <v-icon v-bind:color="item.color" size="15"
                  >mdi-checkbox-blank-circle</v-icon
                >
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  v-text="item.projectName"
                ></v-list-item-title>
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
            :data="taskData"
            :header="header"
            :useSearch="true"
          >
            <template v-slot:[`item.projectId`]="{ item }">
              <v-chip
                v-bind:color="getProjectProperty(item.projectId, 'color')"
                class="mr-5 chip_width"
              >
                <span class="chip_text">
                  {{ getProjectProperty(item.projectId, 'projectName') }}
                </span>
              </v-chip>
            </template>
            <template v-slot:[`item.status`]="{ item }">
              <v-chip color="red" class="mr-5 chip_width">
                <span class="chip_text">
                  {{ item.status }}
                </span>
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
  import { ProjectData, TaskData } from '../types/types';
  import DataTable from '../components/organisms/DataTable.vue';

  @Component({
    components: {
      DataTable,
    },
  })
  export default class Kanban extends Vue {
    search: String = '';
    header: DataTableHeader[] = [
      {
        text: 'プロジェクト',
        align: 'center',
        value: 'projectId',
        width: '100',
      },
      { text: '件名', align: 'start', value: 'subject', width: '500' },
      { text: '状態', align: 'center', value: 'status', width: '100' },
      { text: '期限', align: 'center', value: 'deadLine', width: '150' },
    ];
    taskData: TaskData[] = [
      {
        taskid: 1,
        projectId: 1,
        subject: '友達とランチ',
        statusId: 1,
        deadLine: '2021/01/01',
      },
      {
        taskid: 2,
        projectId: 2,
        subject: 'テスト仕様書作成',
        statusId: 2,
        deadLine: '2021/01/05',
      },
      {
        taskid: 3,
        projectId: 2,
        subject: '人事提出物',
        statusId: 1,
        deadLine: '2021/01/11',
      },
      {
        taskid: 4,
        projectId: 3,
        subject: '風呂掃除',
        statusId: 2,
        deadLine: '2021/01/13',
      },
      {
        taskid: 5,
        projectId: 3,
        subject: '夕飯買い物',
        statusId: 1,
        deadLine: '2021/01/20',
      },
      {
        taskid: 6,
        projectId: 1,
        subject: '友達とランチ',
        statusId: 1,
        deadLine: '2021/01/24',
      },
      {
        taskid: 7,
        projectId: 2,
        subject: 'テスト仕様書作成',
        statusId: 1,
        deadLine: '2021/01/27',
      },
      {
        taskid: 8,
        projectId: 2,
        subject: '人事提出物',
        statusId: 1,
        deadLine: '2021/02/01',
      },
      {
        taskid: 9,
        projectId: 3,
        subject: '風呂掃除',
        statusId: 2,
        deadLine: '2021/02/03',
      },
      {
        taskid: 10,
        projectId: 3,
        subject: '夕飯買い物',
        statusId: 1,
        deadLine: '2021/02/06',
      },
      {
        taskid: 11,
        projectId: 1,
        subject: '友達とランチ',
        statusId: 1,
        deadLine: '2021/02/10',
      },
      {
        taskid: 12,
        projectId: 3,
        subject: 'テスト仕様書作成',
        statusId: 1,
        deadLine: '2021/02/11',
      },
    ];
    projectData: ProjectData[] = [
      { projectId: 1, projectName: 'プライベート', color: '#A5D6A7' },
      { projectId: 2, projectName: '仕事', color: '#FFCC80' },
      { projectId: 3, projectName: '家事', color: '#84FFFF' },
    ];

    getProjectProperty(
      id: number,
      targetProperty: keyof ProjectData
    ): string | number | undefined {
      let property: ProjectData | undefined = this.projectData.find(
        v => v.projectId == id
      );
      if (property === undefined) {
        property = { projectId: 0, projectName: 'Not Data', color: '#FFFFFF' };
      }
      return property[targetProperty];
    }
  }
</script>

<style>
  .chip_width {
    width: 75px;
    justify-content: center;
  }
  .chip_text {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
</style>
