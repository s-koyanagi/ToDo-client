<template>
  <v-dialog v-model="isVisible" @click:outside="closeDialog" width="1000">
    <v-card>
      <v-card-title class="headline grey lighten-2">
        タスクの追加
      </v-card-title>
      <v-container fluid>
        <v-row>
          <v-col cols="2">
            <v-subheader>カテゴリー</v-subheader>
          </v-col>
          <v-col cols="3">
            <v-select :items="getCategory" v-model="form.categoryId" dense>
            </v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">
            <v-subheader>件名</v-subheader>
          </v-col>
          <v-col cols="5">
            <v-text-field label="件名" v-model="form.subject"> </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">
            <v-subheader>期限</v-subheader>
          </v-col>
          <v-col cols="5">
            <v-menu
              ref="menu1"
              v-model="menu1"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="dateFormatted"
                  label="日付"
                  v-bind="attrs"
                  @blur="date = parseDate(dateFormatted)"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="form.deadLine"
                no-title
                @input="menu1 = false"
              ></v-date-picker>
            </v-menu>
          </v-col>
        </v-row>
      </v-container>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="closeDialog">
          追加
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';
  import { categoryStore } from '@/store/modules/category';

  export interface TaskForm {
    categoryId?: Number;
    subject?: string;
    deadLine?: string;
  }

  @Component
  export default class TaskFormDialog extends Vue {
    @Prop()
    private isVisible!: boolean;

    private form: TaskForm = {};

    closeDialog() {
      this.isVisible = false;
      this.$emit('update:isVisible', this.isVisible);
    }

    get getCategory() {
      return categoryStore.GET_CATEGORY_DATA.map(v => {
        return v.categoryName;
      });
    }
  }
</script>
