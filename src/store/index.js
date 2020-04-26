import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    TOKEN: "JWT_TOKEN",
    instance_id: "bb-cc-dd",
    globalVars: {
      locale: "",
      payment_currency: "",
      is_free: "",
      pricing_plan: "",
      billing_cycle: "",
      created_at: "",
      last_install: "",
    },
    settingsVars: {
      first_name: "",
      last_name: "",
      email: "",
      facebook_page_name: "",
      facebook_page_id: "",
      website_id: "",
      facebook_user_id: "",
      timezone_id: "",
      message_id_1: "",
      message_id_2: "",
      receipt_message_id: "",
      shipped_message_id: "",
      widget_id: "",
      setup_step_1_completed: false,
      setup_step_2_completed: false,
      setup_step_3_completed: false,
      cart_recovery_attempts_done: "",
    },
    planVars: {
      plans: [{ planName: "Dummy", cart_recovery_attempts: 0 }],
    },
    navState: {
      currentSelected: "Dashboard",
    },
  },
  getters: {
    checkClicked: (state) => (id) => {
      return state.navState.currentSelected === id ? true : false;
    },
    getLocale: (state) => {
      return state.globalVars.locale;
    },
    getAccountInfo: (state) => {
      let obj = {
        first_name: state.settingsVars.first_name,
        last_name: state.settingsVars.last_name,
        email: state.settingsVars.email,
      };
      return obj;
    },
    getPricingPlan: (state) => {
      return state.globalVars.pricing_plan;
    },
    getSettingsState: (state) => {
      return state.settingsVars;
    },
    getPlanState: (state) => {
      console.log(JSON.stringify(state.planVars.plans));
      return JSON.parse(JSON.stringify(state.planVars.plans));
    },
  },
  mutations: {
    SET_SELECTED(state, id) {
      state.navState.currentSelected = id;
    },
    SET_SETTINGS_VALS(state, obj) {
      state.settingsVars.first_name = obj.first_name;
      state.settingsVars.last_name = obj.last_name;
      state.settingsVars.email = obj.email;
      state.settingsVars.facebook_page_name = obj.facebook_page_name;
      state.settingsVars.facebook_page_id = obj.facebook_page_id;
      state.settingsVars.website_id = obj.website_id;
      state.settingsVars.facebook_user_id = obj.facebook_user_id;
      state.settingsVars.timezone_id = obj.timezone_id;
      state.settingsVars.message_id_1 = obj.message_id_1;
      state.settingsVars.message_id_2 = obj.message_id_2;
      state.settingsVars.receipt_message_id = obj.receipt_message_id;
      state.settingsVars.shipped_message_id = obj.shipped_message_id;
      state.settingsVars.widget_id = obj.widget_id;
      state.settingsVars.setup_step_1_completed = obj.setup_step_1_completed;
      state.settingsVars.setup_step_2_completed = obj.setup_step_2_completed;
      state.settingsVars.setup_step_3_completed = obj.setup_step_3_completed;
      state.settingsVars.cart_recovery_attempts_done =
        obj.cart_recovery_attempts_done;
    },
    SET_GLOBAL_VALS(state, obj) {
      state.globalVars.locale = obj.locale;
      state.globalVars.payment_currency = obj.payment_currency;
      state.globalVars.is_free = obj.is_free;
      state.globalVars.pricing_plan = obj.pricing_plan;
      state.globalVars.billing_cycle = obj.billing_cycle;
      state.globalVars.created_at = obj.created_at;
      state.globalVars.last_install = obj.last_install;
    },

    SET_PLAN_VARS(state, obj) {
      state.planVars.plans = obj.plans;
    },
    SET_TIMEZONE(state, timezone_id) {
      state.settingsVars.timezone_id = timezone_id;
    },
    SET_ACC_INFO(state, obj) {
      state.settingsVars.first_name = obj.first_name;
      state.settingsVars.last_name = obj.last_name;
      state.settingsVars.email = obj.email;
    },
  },
  actions: {
    updateClick({ commit }, id) {
      commit("SET_SELECTED", id);
    },
    updateTimezone({ commit }, timezone_id) {
      return new Promise((resolve) => {
        commit("SET_TIMEZONE", timezone_id);
        resolve("success");
      });
    },
    updAccInfo({ commit }, obj) {
      return new Promise((resolve) => {
        commit("SET_ACC_INFO", obj);
        resolve("success");
      });
    },
    getGlobal({ commit }) {
      return new Promise((resolve, reject) => {
        let url = `${process.env.VUE_APP_API_URL}/websites/${this.state.instance_id}`;
        let headers = {
          TOKEN: this.state.TOKEN,
        };
        axios
          .get(url, headers)
          .then((res) => {
            commit("SET_GLOBAL_VALS", JSON.parse(JSON.stringify(res.data)));
            resolve("success");
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    getSettings({ commit }) {
      return new Promise((resolve, reject) => {
        let url = `${process.env.VUE_APP_API_URL}/settings/${this.state.instance_id}`;
        let headers = {
          TOKEN: this.state.TOKEN,
        };
        axios
          .get(url, headers)
          .then((res) => {
            commit("SET_SETTINGS_VALS", JSON.parse(JSON.stringify(res.data)));
            resolve("success");
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    getPlan({ commit }) {
      return new Promise((resolve, reject) => {
        let url = `${process.env.VUE_APP_API_URL}/plans`;
        let headers = {
          TOKEN: this.state.TOKEN,
        };
        axios
          .get(url, headers)
          .then((res) => {
            commit("SET_PLAN_VARS", JSON.parse(JSON.stringify(res.data)));
            resolve("success");
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    setSettings() {
      return new Promise((resolve, reject) => {
        let url = `${process.env.VUE_APP_API_URL}/settings/${this.state.instance_id}`;
        let headers = {
          TOKEN: this.state.TOKEN,
        };
        let data = this.state.settingsVars;
        console.log(data);
        axios
          .post(url, headers, data)
          .then((res) => {
            console.log(res);
            resolve("success");
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
  modules: {},
});
