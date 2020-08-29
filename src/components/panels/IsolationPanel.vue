<template>
  <div>
    <h1 class="text-center box">Quarantine and Isolation Information</h1>
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
      <div class="chart-container">
        <h2 class="text-center pb-5">Course Sections Offered</h2>
        <horizontal-bar-chart
          id="horizontalbar-chart"
          :chart-data="barChart.chartData"
          :options="barChart.options"
          :label="barChart.title">
        </horizontal-bar-chart>
      </div>
    </v-container>
  </div>
</template>

<script>
  import DoughnutChart from '../charts/DoughnutChart';
  import HorizontalBarChart from '../charts/HorizontalBarChart';
  import ChartDataLabels from 'chartjs-plugin-datalabels';

  export default {
    name: "IsolationPanel",

    components: {
      DoughnutChart,
      HorizontalBarChart
    },

    data: () => {
      return { 

        // ========================================= //
        // DOUGHNUT CHART INFO
        // ========================================= //

        doughnutChart: {
          title: "Isolation and Quarantine",
          subtitle: "Designated Space on Campus",

          // Doughnut Chart Data 
          
          chartData: {
            labels: ['Percent in Use', 'Percent Available'],
            datasets: [{
              label:"Isolation and Quarantine",
              hoverBorderWidth: 3,
              data: [12.6, 87.4],
              backgroundColor: [
                '#D5454F',
                '#0F4D96'
              ],
            }],
          },
          
          // Doughnut Chart Options 
          
          options: {
            cutoutPercentage: 65,
            responsive: true,
            maintainAspectRatio: true,
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
          },
        },



        // ========================================= //
        // BAR CHART INFO
        // ========================================= //

        barChart: {
          title: "Since August 1st, 2020",
          subtitle: "On-Campus Testing Only",
          maxBarThickness: 4,
          
          // Bar Chart Data 

          chartData: {
            labels: ['Undergraduate', 'Graduate/Professional'],
            datasets: 
              [{
                label:"Face-to-Face/Hybrid",
                data: [61, 86],
                backgroundColor: ['#D5454F','#D5454F']
              },
              {
                label:"Entirely Online",
                data: [39, 14],
                backgroundColor: ['#0F4D96','#0F4D96'],
              }],
          },

          // Bar Chart Options

          options: {
            responsive: true,
            maintainAspectRation: false,
            plugins: {
              datalabels: { color:'#eee', font: { size: 16 } }
            },     
            scales: {
              xAxes: [{  gridLines: {display: false}, stacked: true  }],
              yAxes: [{  stacked: true,  barThickness: 50 }]
            },
            legend: { position: 'bottom' }
          }
        },
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
  .chart-container {
    width: 482px;
    height: 482px;
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