<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="header"
      :items="data"
      :search="search"
    ></v-data-table>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class DataTable extends Vue {
  @Prop()
  private header!: object[]
  @Prop()
  private data!: object[]
  search: string = ''
}
</script>
