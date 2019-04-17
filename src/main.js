import Vue from "vue";
import "./plugins/vuetify";
import App from "./components/App.vue";
import axios from "axios";
import Vuelidate from "vuelidate";

import router from "./router";
import store from "./store";

axios.defaults.baseURL = "https://recipies2-e7e5e.firebaseio.com";
axios.defaults.headers.get["Accepts"] = "application/json";

const reqInterceptor = axios.interceptors.request.use(config => {
  console.log("Request Interceptor", config);
  return config;
});
const resInterceptor = axios.interceptors.response.use(res => {
  console.log("Response Interceptor", res);
  return res;
});

axios.interceptors.request.eject(reqInterceptor);
axios.interceptors.response.eject(resInterceptor);

Vue.use(Vuelidate);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
