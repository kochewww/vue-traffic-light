import Vue from "vue";
import Red from "./Components/Red.vue";
import Green from "./Components/Green.vue";
import Yellow from "./Components/Yellow.vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const routes = [
  { path: "/red", component: Red },
  { path: "/yellow", component: Yellow },
  { path: "/green", component: Green }
];
export default new VueRouter({
  routes
});
