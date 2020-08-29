import App from "./App.vue";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Colors from 'vuetify/lib/util/colors'
import Vue from "vue";
import Vuetify from "vuetify/lib"

// unregister global datalabels
// Chart.plugins.unregister(ChartDataLabels);

Vue.config.productionTip = false;
Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: Colors.red.darken1, // #E53935
        secondary: Colors.red.lighten4, // #FFCDD2
        accent: Colors.indigo.base, // #3F51B5
      },
    },
  },
})

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
