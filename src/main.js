import App from "./App.vue";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Vue from "vue";
import vuetify from "@/plugins/vuetify"

// global chart config
Chart.defaults.doughnut.cutoutPercentage = 65;
Chart.defaults.global.elements.responsive = true;
Chart.defaults.global.legend.position = "bottom",
  
Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");