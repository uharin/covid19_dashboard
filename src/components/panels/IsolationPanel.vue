<template>
  <div class="pb-5">
    <v-container class="pa-0 box">
      <h1 class="text-center box">Quarantine and Isolation Information</h1>
      <v-row no-gutters class="pa-4 d-flex justify-space-around">
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
          <h2 class="text-center py-5">Course Sections Offered</h2>
          <horizontal-bar-chart
            :chart-data="barChart.chartData"
            :options="barChart.options"
            :label="barChart.title"
            :width="425" 
            :height="275">
          </horizontal-bar-chart>
        </v-col>
      </v-row>
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
        
        sharedOptions: {
          maintainAspectRatio: false,
          plugins: {
            datalabels: { color:'#eee', font: { size: 16 } }
          },     
          legend: { 
            labels: { boxWidth: 10, fontSize: 11, padding: 10 }
          }
        },

        doughnutOptions: {
          layout: {
            padding: { left: 20, right: 20, top: 10, bottom: 30 }
          },
        },

        barOptions: {
          scales: {
            xAxes: [{  gridLines: {display: false}, stacked: true  }],
            yAxes: [{  stacked: true,  barThickness: 50 }]
          },
        },
        
        doughnutChart: {
          title: "Isolation and Quarantine",
          subtitle: "Designated Space on Campus",
          chartData: {
            labels: ['% in Use', '% Available'],
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
          options: null
        },

        barChart: {
          title: "Since August 1st, 2020",
          subtitle: "On-Campus Testing Only",
          maxBarThickness: 4,
          chartData: {
            labels: ['Undergraduate', 'Graduate/Professional'],
            datasets: 
              [{
                label:"Face-to-Face/Hybrid",
                data: [61, 86],
                backgroundColor: ['#D5454F','#D5454F']
              },
              {
                label:"100% Online",
                data: [39, 14],
                backgroundColor: ['#0F4D96','#0F4D96'],
              }],
            options: null
          },
        },
      }
    },
    methods: {
      chartOptions(){
        this.barChart.options = {...this.sharedOptions, ...this.barOptions};
        this.doughnutChart.options = {...this.sharedOptions, ...this.doughnutOptions};
      }
    },
    
    created(){
      this.chartOptions();
    }
  }
</script>