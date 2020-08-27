import Vue from "vue";
import App from "./App.vue";
// import vuetify from "./plugins/vuetify";
import Vuetify from "vuetify/lib"
import colors from 'vuetify/lib/util/colors'


Vue.config.productionTip = false;
Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.red.darken1, // #E53935
        secondary: colors.red.lighten4, // #FFCDD2
        accent: colors.indigo.base, // #3F51B5
      },
    },
  },
})

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
