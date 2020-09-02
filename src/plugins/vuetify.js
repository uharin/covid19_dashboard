import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

const opts = {
  theme: {
    themes: {
      light: {
        primary: '#D5454F',
        secondary: '#0F4D96',
        accent: '#bdc3c7',
        error: '#b71c1c',
      },
    },
  },
}

export default new Vuetify(opts);
