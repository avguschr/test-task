import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import home from "./home/home";
import gallery from "./gallery/gallery";

Vue.prototype.$http = Axios;
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    home: home(),
    gallery: gallery(),
  },
});

export default store;
