<template>
  <div class="py-5">
    <v-container class="box pa-0">
      <h1 class="text-center box">Campus Case Tracker</h1>
      <v-row no-gutters class="d-flex justify-space-around pa-4">
        <v-col cols="12" sm="8">  
          <h2 class="py-5 text-center">Information on {{information[chartIndex].name}}</h2>
          <v-btn 
            x-small
            class="mr-3 mb-5"
            v-for="(item, index) in information" 
            :key="index"
            v-on:click="updateChart(index)">{{information[index].name}}</v-btn>
          <line-chart 
            v-if="loaded"
            class="mb-5 pa-2 box"
            :chart-data="datacollection" 
            :options="chartOptions" 
            :label="information[chartIndex].name"
            :width="350" 
            :height="375">
          </line-chart>
        </v-col>
        <v-col sm="4">
          <h2 class="text-center py-5">Case Data for Duquesne University</h2>
          <InfoCard/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import LineChart from '../charts/LineChart';
  import InfoCard from '../InfoCard';
  import axios from 'axios';
  import moment from 'moment';

  export default {
    name: "CasePanel",

    components: {
      InfoCard,
      LineChart
    },

    data: () => {
      return { 
        chartIndex: 0,
        datacollection: {},
        loaded: false,
        information: [
          { name: "Positive Cases", arrayInfo:[] },
          { name: "Hospitalized", arrayInfo:[] },
          { name: "Recovered", arrayInfo: [] },
          { name: "Deaths", arrayInfo: [] }
        ],
        chartOptions: {
          maintainAspectRatio: false,
          legend: { 
            align: 'start', 
            labels: { boxWidth: 10, fontSize: 12, padding: 10 }
          },
          plugins: {
            datalabels: { display: false }
          }
        }
      }
    },

    async created(){
      const { data } = await axios.get("https://api.covidtracking.com/us/daily");
      const dataPa = await axios.get("https://api.covidtracking.com/v1/states/pa/current.json");
      
      const clonePaData = {...dataPa.data}

      data.forEach(d => {
        const date = moment(d.date, "YYYYMMDD").format("MM/DD");
        
        const {
          positive,
          hospitalizedCurrently,
          recovered,
          death
        } = d;

        this.information[0].arrayInfo.push({date, total: positive});
        this.information[1].arrayInfo.push({date, total: hospitalizedCurrently});
        this.information[2].arrayInfo.push({date, total: recovered});
        this.information[3].arrayInfo.push({date, total: death});
      })
      this.fillData();
    },
    
    mounted() {
      this.loaded = true;
    },
    
    methods: {
      fillData () {
        const dates = this.information[this.chartIndex].arrayInfo.map(d => d.date).reverse();
        const totals = this.information[this.chartIndex].arrayInfo.map(d => d.total).reverse();
        const name = this.information[this.chartIndex].name;
        
        this.datacollection = {
          labels: dates,
					datasets: [{
							label: name,
              data: totals,
							borderColor: '#d2dae2',
							backgroundColor: '#D5454F',
							pointBackgroundColor: 'white',
							borderWidth: 1,
							pointBorderColor: '#d2dae2'
					}],
        }
      },
      
      updateChart(index) {
        this.chartIndex = index;
        this.fillData();
      }
    }
  }
</script>