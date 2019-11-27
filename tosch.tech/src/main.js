import Vue from "vue";
import App from "./App.vue";
import "bootstrap";
import "pikaday";
import "animate.css/animate.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "material-icons/css/material-icons.min.css";
import "lato-font/css/lato-font.min.css";
import "font-awesome/css/font-awesome.min.css";
import "ionicons/dist/css/ionicons.min.css";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
