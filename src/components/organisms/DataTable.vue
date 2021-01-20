<template>
  <v-sheet>
    <v-card-title>
      全てのタスク
      <v-spacer></v-spacer>
      <div style="width:300px">
        <v-text-field
          v-if="useSearch"
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </div>
    </v-card-title>
    <v-data-table
      :headers="header"
      :items="data"
      :search="search"
      :footer-props="{ disableItemsPerPage: true }"
    >
      <template
        v-for="(slotContent, slotName) of $scopedSlots"
        #[slotName]="item"
      >
        <slot :name="slotName" v-bind="item"></slot>
      </template>
    </v-data-table>
  </v-sheet>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';

  @Component
  export default class DataTable extends Vue {
    @Prop()
    private header!: object[];
    @Prop()
    private data!: object[];
    @Prop()
    private useSearch!: boolean;
    search: string = '';
  }
</script>
