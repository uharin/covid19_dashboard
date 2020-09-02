<template>
  <div class="pb-5">
    <v-container class="pa-0 box">
      <h1 class="text-center box">On-Campus Testing</h1>
      <v-row no-gutters class="d-flex justify-space-around pa-4">
        <v-col cols="12" sm="4" class="box px-4 pt-4">
          <h4>{{doughnutChart.title}}</h4>
          <p class="pb-0">{{doughnutChart.subtitle}}</p>
            <doughnut-chart
              :chart-data="doughnutChart.chartData"
              :options="doughnutChart.options"
              :label="doughnutChart.chartData.label"
              :width="275" 
              :height="275">
            </doughnut-chart>
        </v-col>
        <v-col class="mx-5">
          <h2 class="text-center py-5">Reporting Period</h2>
          <DataTable/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import DoughnutChart from '../charts/DoughnutChart';
  import DataTable from '../DataTable';
  import ChartDataLabels from 'chartjs-plugin-datalabels';

  export default {
    name: "TestingPanel",
    components: {
      DataTable,
      DoughnutChart
    },

    data: () => {
      return { 

        // Settings for Doughnut Chart

        doughnutChart: {
          title: "Since August 1st, 2020",
          subtitle: "On-Campus Testing Only",
          chartData: {
            labels: ['Total Positive', 'Total Negative'],
            datasets: [{
              label:"Test Results",
              hoverBorderWidth: 3,
              data: [234, 123],
              backgroundColor: [
                '#D5454F',
                '#0F4D96'
              ],
            }]
          },
          options: {
            maintainAspectRatio: false,
            layout: {
              padding: { left: 20, right: 20, top: 10, bottom: 30 }
            },
            legend: {
              labels: { boxWidth: 10, fontSize: 11, padding: 10 }
            },
            plugins: {
              datalabels: { color:'#eee', font: { size: 16 }  }
            }
          }
        },
      }
    }
  }

</script>

<style scoped>
</style>