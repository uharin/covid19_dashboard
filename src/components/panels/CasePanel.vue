<template>
  <div class="pb-5">
    <h1 class="text-center box">Campus Case Tracker</h1>
    <v-container class="panel-wrap px-5 d-flex flex-row justify-space-around">
      <div>
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
          :label="information[chartIndex].name">
        </line-chart>
      </div>
      <div>
        <h2 class="text-center py-5">Case Data for Duquesne University</h2>
        <InfoCard/>
      </div>
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
          {
            name: "Positive Cases",
            arrayInfo: []
          },
          {
            name: "Hospitalized",
            arrayInfo: []
          },
          {
            name: "Recovered",
            arrayInfo: []
          },
          {
            name: "Deaths",
            arrayInfo: []
          }
        ],
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false,
          legend: { position: 'bottom', align: 'start' },
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
        console.dir(this.datacollection);
      },
      
      updateChart(index) {
        this.chartIndex = index;
        this.fillData();
      }
    }
     
  }

</script>

<style scoped>
  .box {
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }
  .panel-wrap {
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }
  h1 {
    background-color: #D5454F;
    color: #fff;
  }
</style>