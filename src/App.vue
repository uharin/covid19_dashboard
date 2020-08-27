<template>
  <v-app>
    <v-container>
      <h2 class="text-center py-5">Cumulative Data for the State of Pennsylvania</h2>
      <div>
        <InfoCard/>
      </div>
      <div>
        <h2 class="py-5 text-center">Information on {{information[chartIndex].name}}</h2>
        <line-chart 
          v-if="loaded"
          class="mb-5"
          :chart-data="datacollection" 
          :options="chartOptions" 
          :label="information[chartIndex].name">
        </line-chart>
        <v-btn 
          class="mr-3 mt-2"
          v-for="(item, index) in information" 
          :key="index"
          v-on:click="updateChart(index)">{{information[index].name}}</v-btn>
      </div>
    </v-container>
  </v-app>
</template>

<script>
  import axios from 'axios';
  import moment from 'moment';
  import LineChart from './components/LineChart';
  import InfoCard from "./components/InfoCard";

  export default {
    name: "App",
    components: {
      InfoCard, 
      LineChart
    },
    data() {
      return { 
        chartIndex: 0,
        chartData: [],
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
      console.log("information is ", this.information);
      this.fillData();
    },
    
    mounted() {
      // this.updateChart();
      this.loaded = true;
    },
    
    methods:{
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
							backgroundColor: '#b33939',
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
    },

    // watch: {
    //   options: function() {
    //     this._data._chart.destroy();
    //     this.renderChart(this.chartData, this.options);
    //   }
    // },
    
  };
</script>
