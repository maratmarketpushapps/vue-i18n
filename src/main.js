import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import vuetify from "./plugins/vuetify";
import SvgTransition from "vue-svg-transition";
import { initFbSdk } from "./lib/FacebookSdk";
import VueScrollTo from "vue-scrollto";
import VueIntercom from "vue-intercom";
// import VueTelInputVuetify from "vue-tel-input-vuetify/lib";
import VueTelInput from "vue-tel-input";

// Vue.use(VueTelInputVuetify, {
//   vuetify,
// });

Vue.use(VueTelInput);

initFbSdk(Vue, process.env.VUE_APP_FACEBOOK_CLIENT_ID).then(() => {
  // console.log(resp);
  Vue.use(SvgTransition);
  Vue.config.productionTip = false;
  Vue.use(VueScrollTo);
  Vue.use(VueIntercom, { appId: "h6dkwybg" });

  new Vue({
    router,
    store,
    i18n,
    vuetify,
    render: (h) => h(App),
  }).$mount("#app");
});
