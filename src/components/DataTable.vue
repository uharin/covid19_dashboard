<template>
    <v-data-table
      dense
      :headers="headers"
      :items="info"
      :hide-default-footer="true"
      class="elevation-1">
    </v-data-table>
</template>

<script>
export default {
  name: "DataTable",
  data: () => {
    return {
      headers: [
        { text: 'Testing Information', value: 'name', align: 'start', sortable: false },
        { text: '08/17-08/23', value: 'date1', sortable: false },
        { text: '08/24-08/31', value: 'date2', sortable: false },
        { text: 'Since 08/01', value: 'date3', sortable: false }
      ],
      info: [
        {
          name: 'Students Tested',
          date1: '1754',
          date2: '2221',
          date3: '6430'
        },
        {
          name: 'Student Positive Rate',
          date1: '8.8%',
          date2: '2.8%',
          date3: '3.6%'
        },
        {
          name: 'Employees Tested',
          date1: 1456,
          date2: 123,
          date3: 1234
        },
        {
          name: 'Employee Positive Rate',
          date1: '0.0%',
          date2: '0.4%',
          date3: '0.6%'
        },
        {
          name: 'Total Tested',
          date1: '1935',
          date2: '2716',
          date3: '7365'
        },
        {
          name: 'Total Negative',
          date1: '897',
          date2: '2651',
          date3: '6515'
        },
        {
          name: 'Total Pending',
          date1: '883',
          date2: '0',
          date3: '883'
        },
      ],
    }
  }
}
</script>

<style>
  tbody tr:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, .05);
  }
</style>