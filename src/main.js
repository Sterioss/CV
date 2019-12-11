import Vue from "vue";
const App = () => import("./App.vue");
import "bootstrap/dist/js/bootstrap.min";
import "animate.css/animate.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "lato-font/css/lato-font.min.css";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
