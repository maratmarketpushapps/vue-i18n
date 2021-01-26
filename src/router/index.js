import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Settings from '../views/Settings.vue';
import Widgets from '../views/Widgets.vue';
import Campaigns from '../views/Campaigns.vue';
import AbandonedCarts from '../views/AbandonedCarts.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Dashboard
  },

  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  },

  {
    path:"/widgets",
    name: "Widgets",
    component: Widgets
  },
  {
    path:"/campaigns-facebook",
    name: "Campaigns",
    component: Campaigns
  },
  {
    path:"/campaigns-sms",
    name: "CampaignsSms",
    component: () => import("../components/Campaigns/CampaignsSms.vue")
  },
  {
    path:"/abandonedcarts",
    name: "AbandonedCarts",
    component: AbandonedCarts
  },
  {
    path:"/settings",
    name: "Settings",
    component: Settings
  },

  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
