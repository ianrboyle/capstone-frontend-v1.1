import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import Signup from "../views/Signup.vue";
import StocksIndex from "../views/stocks/StocksIndex.vue";
import StocksNew from "../views/stocks/StocksNew.vue";
import StocksShow from "../views/stocks/StocksShow.vue";
import StocksEdit from "../views/stocks/StocksEdit.vue";
import SectorsIndex from "../views/SectorsIndex.vue";
import SectorsNew from "../views/SectorsNew.vue";
import SectorsShow from "../views/SectorsShow.vue";
import IndustriesIndex from "../views/IndustriesIndex.vue";
import IndustriesShow from "../views/IndustriesShow.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  { path: "/stocks", name: "StocksIndex", component: StocksIndex },
  { path: "/stocks/new", name: "StocksNew", component: StocksNew },
  { path: "/stocks/:id", name: "StocksShow", component: StocksShow },
  { path: "/stocks/:id/edit", name: "StocksEdit", component: StocksEdit },
  { path: "/sectors", name: "SectorsIndex", component: SectorsIndex },
  { path: "/sectors/new", name: "SectorsNew", component: SectorsNew },
  { path: "/sectors/:id", name: "SectorsShow", component: SectorsShow },
  { path: "/industries", name: "IndustriesIndex", component: IndustriesIndex },
  { path: "/industries/:id", name: "IndustriesShow", component: IndustriesShow },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
