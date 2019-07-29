import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import City from "./views/city/city.vue"
import Detali from "./views/details/Details.vue"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path:"/city",
      name:"city",
      component:City
    },
    {
      path:"/detail/:id",
      name:"detail",
      component:Detali
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});
