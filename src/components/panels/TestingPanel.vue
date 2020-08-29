<template>
  <div class="pb-5">
    <h1 class="text-center box">On-Campus Testing</h1>
    <v-container class="panel-wrap d-flex flex-row justify-space-around">
      <div class="card-chart d-flex flex-column">
        <v-card class="mr-5">
          <v-card-title>{{doughnutChart.title}}</v-card-title>
          <v-card-subtitle class="pb-0">{{doughnutChart.subtitle}}</v-card-subtitle>
            <doughnut-chart
              id="doughnut-chart"
              :chart-data="doughnutChart.chartData"
              :options="doughnutChart.options"
              :label="doughnutChart.chartData.label">
            </doughnut-chart>
        </v-card>
      </div>
      <div>
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
          options: {
            cutoutPercentage: 65,
            responsive: true,
            maintainAspectRatio: false,
            layout: {
              padding: { left: 20, right: 20, top: 20, bottom: 30 }
            },
            legend: {
              position: 'bottom',
              labels: { boxWidth: 15, fontSize: 12, padding: 15 }
            },
            plugins: {
              datalabels: { color:'#eee', font: { size: 16 }  }
            }
          }
        },

        // Doughnut Chart Options 
        
      }
    }
  }

</script>

<style scoped>
  .box {
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }
  #doughnut-chart {
    height: 80%;
  }
  .card-chart {
    width: 35%;
  }
  .panel-wrap {
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }
  h1 {
    background-color: #D5454F;
    color: #fff;
  }
  div {
    border: solid black 1px;
  }
  v-card {
    width:35%;
  }
</style>