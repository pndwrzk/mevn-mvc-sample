// main.js

import Vue from "vue";
import App from "./views/App.vue";
import "bootstrap/dist/css/bootstrap.min.css";

import VueRouter from "vue-router";
Vue.use(VueRouter);

import VueAxios from "vue-axios";

import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:4000";
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

Vue.component(
    "navbar-component",
    require("./components/NavbarComponent.vue").default
);

import home from "./pages/home.vue";

const routes = [{
    name: "home",
    path: "/",
    component: home,
}, ];

const router = new VueRouter({ mode: "history", routes: routes });

new Vue(Vue.util.extend({ router }, App)).$mount("#app");