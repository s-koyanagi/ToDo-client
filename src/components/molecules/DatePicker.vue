<template>
  <v-menu
    ref="menu"
    v-model="isPickerOpen"
    :close-on-content-click="false"
    :return-value.sync="selectedDate"
    transition="scale-transition"
    offset-y
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="textFieldValue"
        readonly
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
      v-model="selectedDate"
      no-title
      scrollable
      @input="selectDate"
    >
    </v-date-picker>
  </v-menu>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';

  @Component
  export default class DatePicker extends Vue {
    @Prop()
    private date?: string;
    private isPickerOpen: boolean = false;
    private selectedDate: string = '';
    private textFieldValue: string = '';

    selectDate() {
      this.textFieldValue = this.selectedDate;
      this.$emit('update:date', this.selectedDate);
      this.isPickerOpen = false;
    }
  }
</script>

<style></style>
