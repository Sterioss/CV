import Vue from "vue";
import "bootstrap/dist/js/bootstrap.min";
import "animate.css/animate.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "lato-font/css/lato-font.min.css";
import VueScrollTo from "vue-scrollto";
import Vuelidate from "vuelidate";
const App = () => import("./App.vue");

Vue.use(Vuelidate);
Vue.use(VueScrollTo);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
