<template>
  <div class="pb-5">
    <h1 class="text-center box">On-Campus Testing</h1>
    <v-container class="p-info d-flex flex-row justify-space-around">
      <!-- <div class="card-chart d-flex flex-column"> -->
        <v-card height="100%" class="ml-5">
          <v-card-title>{{doughnutChart.title}}</v-card-title>
          <v-card-subtitle class="pb-0">{{doughnutChart.subtitle}}</v-card-subtitle>
            <doughnut-chart
              :chart-data="doughnutChart.chartData"
              :options="doughnutChart.options"
              :label="doughnutChart.chartData.label">
            </doughnut-chart>
        </v-card>
      <!-- </div> -->
      <div class="mx-5">
        <h2 class="text-center pb-5">Reporting Period</h2>
        <DataTable/>
      </div>
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
        doughnutChart: {
          title: "Since August 1st, 2020",
          subtitle: "On-Campus Testing Only",

          // Doughnut Chart Data 

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
          
          // Doughnut Chart Options 
          
          options: {
            cutoutPercentage: 65,
            responsive: true,
            maintainAspectRatio: false,
            layout: {
              padding: { left: 20, right: 20, top: 20, bottom: 30 }
            },
            legend: {
              position: 'bottom',
              labels: { boxWidth: 15, fontSize: 12, padding: 10 }
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