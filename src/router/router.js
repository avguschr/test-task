import VueRouter from "vue-router";
import Vue from "vue";
import Home from "../views/Home";
import Gallery from "../views/Gallery";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/", component: Home },
    { path: "/gallery", component: Gallery },
  ],
});

export default router;
