<template>
  <v-menu
    ref="menu"
    v-model="isPickerOpen"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="date"
        readonly
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker no-title scrollable @input="selectDate($event)">
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

    selectDate(value: string) {
      this.selectedDate = value;
      this.$emit('update:date', value);
      this.isPickerOpen = false;
    }
  }
</script>

<style></style>
