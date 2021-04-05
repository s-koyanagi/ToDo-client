<template>
  <v-dialog v-model="isVisible" @click:outside="closeDialog" width="600">
    <v-card>
      <v-card-title class="headline grey lighten-2">
        タスクの追加
      </v-card-title>
      <v-container fluid>
        <v-row dense>
          <v-col cols="11">
            <v-subheader>件名</v-subheader>
            <v-text-field v-model="form.subject" class="ml-4" outlined dense>
            </v-text-field>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="4">
            <v-subheader>カテゴリー</v-subheader>
            <v-select
              :items="getCategory"
              v-model="form.categoryId"
              item-text="categoryName"
              item-value="categoryId"
              class="ml-4"
              outlined
              dense
            >
            </v-select>
          </v-col>

          <v-col cols="4">
            <v-subheader>期限</v-subheader>
            <date-picker :date.sync="form.deadLine"> </date-picker>
          </v-col>
        </v-row>
      </v-container>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="taskFormSubmit">
          追加
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';
  import { categoryStore } from '@/store/modules/category';
  import { taskStore } from '@/store/modules/task';
  import DatePicker from '../molecules/DatePicker.vue';
  import TaskForm from '@/models/form/taskForm';

  @Component({
    components: {
      DatePicker,
    },
  })
  export default class TaskFormDialog extends Vue {
    @Prop()
    private isVisible?: boolean;
    private form: TaskForm = {};

    async taskFormSubmit() {
      await taskStore.submitTask(this.form);
      this.closeDialog();
      this.form = {};
    }

    closeDialog() {
      this.$emit('update:isVisible', false);
    }

    get getCategory() {
      return categoryStore.GET_CATEGORY_DATA;
    }
  }
</script>
