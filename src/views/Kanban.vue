<template>
  <v-row no-gutters>
    <v-col cols="2">
      <v-card class="grey lighten-3" min-height="800" outlined tile>
        <v-list class="grey lighten-3" shaped>
          <v-subheader>プロジェクト</v-subheader>
          <v-list-item-group>
            <v-list-item
              v-for="(item, i) in projectData"
              :key="i"
              @click="filterByProject(item.projectId)"
            >
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
            <template v-slot:[`item.statusId`]="{ item }">
              <v-chip
                v-bind:color="getStatusProperty(item.statusId, 'color')"
                class="mr-5 chip_width"
              >
                <span class="chip_text">
                  {{ getStatusProperty(item.statusId, 'statusName') }}
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
  import { ProjectData, TaskData, StatusData } from '../types/types';
  import DataTable from '../components/organisms/DataTable.vue';
  import { taskStore } from '@/store/modules/task';

  @Component({
    components: {
      DataTable,
    },
  })
  export default class Kanban extends Vue {
    search: String = '';
    selectedProject: String = '';
    taskData: TaskData[] = [];
    header: DataTableHeader[] = [
      {
        text: 'プロジェクト',
        align: 'center',
        value: 'projectId',
        width: '100',
      },
      { text: '件名', align: 'start', value: 'subject', width: '500' },
      { text: '状態', align: 'center', value: 'statusId', width: '100' },
      { text: '期限', align: 'center', value: 'deadLine', width: '150' },
    ];
    projectData: ProjectData[] = [
      { projectId: 1, projectName: 'プライベート', color: '#A5D6A7' },
      { projectId: 2, projectName: '仕事', color: '#FFCC80' },
      { projectId: 3, projectName: '家事', color: '#84FFFF' },
    ];
    statusData: StatusData[] = [
      { statusId: 1, statusName: '未着手', color: '#EF9A9A' },
      { statusId: 2, statusName: '着手中', color: '#90CAF9' },
      { statusId: 3, statusName: '完了', color: '#DCE775' },
    ];

    async created() {
      await taskStore.getTaskList();
      this.taskData = taskStore.GET_TASK_LIST;
    }

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

    getStatusProperty(
      id: number,
      targetProperty: keyof StatusData
    ): string | number | undefined {
      let property: StatusData | undefined = this.statusData.find(
        v => v.statusId == id
      );
      if (property === undefined) {
        property = { statusId: 0, statusName: 'Not Data', color: '#FFFFFF' };
      }
      return property[targetProperty];
    }

    filterByProject(projectId: number) {
      this.taskData = taskStore.GET_TASK_LIST.filter(
        v => v.projectId == projectId
      );
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
