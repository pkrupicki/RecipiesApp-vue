import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/views/Home.vue";
import Profile from "@/components/Profile/Profile.vue";

import store from "./store";

import Signin from "@/components/Auth/Signin.vue";
import Signup from "@/components/Auth/Signup.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  // base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
      beforeEnter(to, from, next) {
        if (store.state.idToken) {
          next();
        } else {
          next("/signin");
        }
      }
    },
    {
      path: "/signin",
      name: "Signin",
      component: Signin
    },
    {
      path: "/signup",
      name: "Signup",
      component: Signup
    }
  ]
});
