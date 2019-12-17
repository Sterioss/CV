import Vue from "vue";
import "bootstrap/dist/js/bootstrap.min";
import "animate.css/animate.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "lato-font/css/lato-font.min.css";
import VueScrollTo from "vue-scrollto";
import PortalVue from "portal-vue";
import Vuelidate from "vuelidate";
import BootstrapVue from "bootstrap-vue";
const App = () => import("./App.vue");

Vue.use(PortalVue);
Vue.use(Vuelidate);
Vue.use(VueScrollTo);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
