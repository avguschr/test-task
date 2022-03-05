import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import home from "./home/home";

Vue.prototype.$http = Axios;
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    home: home(),
  },
});

export default store;
