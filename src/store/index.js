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
    widgetVars: {
      id: 0,
      instance_id: "",
      website_id: 0,
      facebook_widget_type: "",
      header_background_color: "",
      popup_background_color: "",
      pop_up_title: "",
      pop_up_title_font_family: "",
      pop_up_title_font_color: "",
      pop_up_title_font_type: "",
      pop_up_title_font_size: 0,
      pop_up_message: "",
      pop_up_message_font_family: "",
      pop_up_message_font_color: "",
      pop_up_message_font_type: "",
      pop_up_message_font_size: 0,
      pop_up_cancel: "",
      pop_up_cancel_font_family: "",
      pop_up_cancel_font_color: "",
      pop_up_cancel_font_type: "",
      pop_up_cancel_font_size: 0,
      button_text: "",
      button_background: "",
      button_font_family: "",
      button_font_color: "",
      button_font_type: "",
      button_font_size: 0,
      button_corners: "",
      button_border_size: 0,
      button_border_color: "",
      active: false,
      wdgt_key_internal: 0,
      changesSaved: true,
    },
    settingsVars: {
      first_name: "",
      last_name: "",
      email: "",
      facebook_page_name: "",
      facebook_page_id: "",
      website_id: "",
      facebook_user_id: "",
      facebook_short_access_token: "",
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
    cartsState: {
      carts: [
        {
          cart_abandoned_at: "",
          order_value: "",
          subscribed_on_facebook: "",
          messages_sent: "",
          cart_status: "",
          cart_recovered_at: "",
        },
      ],
    },
  },
  getters: {
    checkClicked: (state) => (id) => {
      return state.navState.currentSelected === id ? true : false;
    },
    getLocale: (state) => {
      return state.globalVars.locale;
    },
    getCreatedAt: (state) => {
      return state.globalVars.created_at;
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
    getWidgetsState: (state) => {
      console.log(state.widgetVars);
      return state.widgetVars;
    },
    getPlanState: (state) => {
      return JSON.parse(JSON.stringify(state.planVars.plans));
    },
    getCartsState: (state) => {
      return JSON.parse(JSON.stringify(state.cartsState.carts));
    },
  },
  mutations: {
    SET_SELECTED(state, id) {
      state.navState.currentSelected = id;
    },
    SET_CARTS_VAL(state, obj) {
      state.cartsState.carts = obj.carts;
    },
    SET_TOKEN(state, token) {
      state.TOKEN = token;
    },

    SET_WIDGETS_VAL(state, obj) {
      state.widgetVars.id = obj.id;
      state.widgetVars.instance_id = obj.instance_id;
      state.widgetVars.website_id = obj.website_id;
      state.widgetVars.facebook_widget_type = obj.facebook_widget_type;
      state.widgetVars.header_background_color = obj.header_background_color;
      state.widgetVars.popup_background_color = obj.popup_background_color;
      state.widgetVars.pop_up_title = obj.pop_up_title;
      state.widgetVars.pop_up_title_font_family = obj.pop_up_title_font_family;
      state.widgetVars.pop_up_title_font_color = obj.pop_up_title_font_color;
      state.widgetVars.pop_up_title_font_type = obj.pop_up_title_font_type;
      state.widgetVars.pop_up_title_font_size = obj.pop_up_title_font_size;
      state.widgetVars.pop_up_message = obj.pop_up_message;
      state.widgetVars.pop_up_message_font_family =
        obj.pop_up_message_font_family;
      state.widgetVars.pop_up_message_font_color =
        obj.pop_up_message_font_color;
      state.widgetVars.pop_up_message_font_type = obj.pop_up_message_font_type;
      state.widgetVars.pop_up_message_font_size = obj.pop_up_message_font_size;
      state.widgetVars.pop_up_cancel = obj.pop_up_cancel;
      state.widgetVars.pop_up_cancel_font_family =
        obj.pop_up_cancel_font_family;
      state.widgetVars.pop_up_cancel_font_color = obj.pop_up_cancel_font_color;
      state.widgetVars.pop_up_cancel_font_type = obj.pop_up_cancel_font_type;
      state.widgetVars.pop_up_cancel_font_size = obj.pop_up_cancel_font_size;
      state.widgetVars.button_text = obj.button_text;
      state.widgetVars.button_background = obj.button_background;
      state.widgetVars.button_font_family = obj.button_font_family;
      state.widgetVars.button_font_color = obj.button_font_color;
      state.widgetVars.button_font_type = obj.button_font_type;
      state.widgetVars.button_font_size = obj.button_font_size;
      state.widgetVars.button_corners = obj.button_corners;
      state.widgetVars.button_border_size = obj.button_border_size;
      state.widgetVars.button_border_color = obj.button_border_color;
      state.widgetVars.active = obj.active;
      state.widgetVars.changesSaved = true;
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
    SET_WDGT_HDR_CLR(state, color) {
      state.widgetVars.header_background_color = color;
      state.widgetVars.changesSaved = false;
    },
    SET_WDGT_BDY_CLR(state, color) {
      state.widgetVars.popup_background_color = color;
      state.widgetVars.changesSaved = false;
    },
    SET_WDGT_TYPE(state, type) {
      type == state.widgetVars.facebook_widget_type
        ? (state.widgetVars.changesSaved = true)
        : (state.widgetVars.changesSaved = false);
      state.widgetVars.facebook_widget_type = type;
    },
    SET_WDGT_HDR_TXT(state, txt) {
      txt == state.widgetVars.pop_up_title
        ? (state.widgetVars.changesSaved = true)
        : (state.widgetVars.changesSaved = false);
      state.widgetVars.pop_up_title = txt;
    },
    SET_WDGT_HDR_FNT(state, fnt) {
      fnt == state.widgetVars.pop_up_title_font_family
        ? (state.widgetVars.changesSaved = true)
        : (state.widgetVars.changesSaved = false);
      state.widgetVars.pop_up_title_font_family = fnt;
    },
    SET_WDGT_TTL_CLR(state, color) {
      color == state.widgetVars.pop_up_title_font_color
        ? (state.widgetVars.changesSaved = true)
        : (state.widgetVars.changesSaved = false);
      state.widgetVars.pop_up_title_font_color = color;
    },
    SET_WDGT_MSG_CLR(state, color) {
      color == state.widgetVars.pop_up_message_font_color
        ? (state.widgetVars.changesSaved = true)
        : (state.widgetVars.changesSaved = false);
      state.widgetVars.pop_up_message_font_color = color;
    },
    SET_WDGT_HDR_FNT_WGHT(state, wght) {
      wght == state.widgetVars.pop_up_title_font_type
        ? (state.widgetVars.changesSaved = true)
        : (state.widgetVars.changesSaved = false);
      state.widgetVars.pop_up_title_font_type = wght;
    },
    SET_WDGT_HDR_FNT_SZ(state, size) {
      size == state.widgetVars.pop_up_title_font_size
        ? (state.widgetVars.changesSaved = true)
        : (state.widgetVars.changesSaved = false);
      state.widgetVars.pop_up_title_font_size = size;
    },
    SET_WDGT_MSG_TXT(state, txt) {
      txt == state.widgetVars.pop_up_message
        ? (state.widgetVars.changesSaved = true)
        : (state.widgetVars.changesSaved = false);
      state.widgetVars.pop_up_message = txt;
    },
    SET_WDGT_MSG_FNT(state, fnt) {
      fnt == state.widgetVars.pop_up_message_font_family
        ? (state.widgetVars.changesSaved = true)
        : (state.widgetVars.changesSaved = false);
      state.widgetVars.pop_up_message_font_family = fnt;
    },
    SET_WDGT_MSG_FNT_WGHT(state, wght) {
      wght == state.widgetVars.pop_up_message_font_type
        ? (state.widgetVars.changesSaved = true)
        : (state.widgetVars.changesSaved = false);
      state.widgetVars.pop_up_message_font_type = wght;
    },
    SET_WIDGET_MSG_SZ(state, size) {
      size == state.widgetVars.pop_up_message_font_size
        ? (state.widgetVars.changesSaved = true)
        : (state.widgetVars.changesSaved = false);
      state.widgetVars.pop_up_message_font_size = size;
    },
    SET_WDGT_CNCL_TXT(state, txt) {
      txt == state.widgetVars.pop_up_cancel
        ? (state.widgetVars.changesSaved = true)
        : (state.widgetVars.changesSaved = false);
      state.widgetVars.pop_up_cancel = txt;
    },
    SET_WDGT_CNCL_FNT(state, fnt) {
      fnt == state.widgetVars.pop_up_cancel_font_family
        ? (state.widgetVars.changesSaved = true)
        : (state.widgetVars.changesSaved = false);
      state.widgetVars.pop_up_cancel_font_family = fnt;
    },
    SET_WDGT_CNCL_FNT_WGHT(state, wght) {
      wght == state.widgetVars.pop_up_cancel_font_type
        ? (state.widgetVars.changesSaved = true)
        : (state.widgetVars.changesSaved = false);
      state.widgetVars.pop_up_cancel_font_type = wght;
    },
    SET_WIDGET_CNCL_SZ(state, size) {
      size == state.widgetVars.pop_up_cancel_font_size
        ? (state.widgetVars.changesSaved = true)
        : (state.widgetVars.changesSaved = false);
      state.widgetVars.pop_up_cancel_font_size = size;
    },
    SET_WDGT_CNCL_CLR(state, color) {
      color == state.widgetVars.pop_up_cancel_font_color
        ? (state.widgetVars.changesSaved = true)
        : (state.widgetVars.changesSaved = false);
      state.widgetVars.pop_up_cancel_font_color = color;
    },
    SET_WDGT_BTN_TXT(state, txt) {
      txt == state.widgetVars.button_text
        ? (state.widgetVars.changesSaved = true)
        : (state.widgetVars.changesSaved = false);
      state.widgetVars.button_text = txt;
    },
    SET_WDGT_BTN_BCG_CLR(state, color) {
      color == state.widgetVars.button_background
        ? (state.widgetVars.changesSaved = true)
        : (state.widgetVars.changesSaved = false);
      state.widgetVars.button_background = color;
      state.widgetVars.wdgt_key_internal++;
    },
    SET_WDGT_BTN_FNT(state, fnt) {
      fnt == state.widgetVars.button_font_family
        ? (state.widgetVars.changesSaved = true)
        : (state.widgetVars.changesSaved = false);
      state.widgetVars.button_font_family = fnt;
      state.widgetVars.wdgt_key_internal++;
    },
    SET_WDGT_BTN_FNT_CLR(state, color) {
      color == state.widgetVars.button_font_color
        ? (state.widgetVars.changesSaved = true)
        : (state.widgetVars.changesSaved = false);
      state.widgetVars.button_font_color = color;
    },
    SET_WDGT_BTN_FNT_WGHT(state, wght) {
      wght == state.widgetVars.button_font_type
        ? (state.widgetVars.changesSaved = true)
        : (state.widgetVars.changesSaved = false);
      state.widgetVars.button_font_type = wght;
    },
    SET_WIDGET_BTN_FNT_SZ(state, size) {
      size == state.widgetVars.button_font_size
        ? (state.widgetVars.changesSaved = true)
        : (state.widgetVars.changesSaved = false);
      state.widgetVars.button_font_size = size;
      state.widgetVars.wdgt_key_internal++;
    },
    SET_WIDGET_BTN_CRNR(state, tp) {
      tp == state.widgetVars.button_corners
        ? (state.widgetVars.changesSaved = true)
        : (state.widgetVars.changesSaved = false);
      state.widgetVars.button_corners = tp;
      state.widgetVars.wdgt_key_internal++;
    },
    SET_WIDGET_BTN_BRDR_SZ(state, size) {
      size == state.widgetVars.button_border_size
        ? (state.widgetVars.changesSaved = true)
        : (state.widgetVars.changesSaved = false);
      state.widgetVars.button_border_size = size;
      state.widgetVars.wdgt_key_internal++;
    },
    SET_WDGT_BTN_BRDR_CLR(state, color) {
      color == state.widgetVars.button_border_color
        ? (state.widgetVars.changesSaved = true)
        : (state.widgetVars.changesSaved = false);
      state.widgetVars.button_border_color = color;
      state.widgetVars.wdgt_key_internal++;
    },
    SET_FB_SETTINGS(state, obj) {
      state.settingsVars.facebook_page_id = obj.facebook_page_id;
      state.settingsVars.facebook_page_name = obj.facebook_page_name;
      state.settingsVars.facebook_user_id = obj.facebook_user_id;
      state.settingsVars.facebook_short_access_token =
        obj.facebook_short_access_token;
    },
  },
  actions: {
    updateToken({ commit }, token) {
      return new Promise((resolve) => {
        commit("SET_TOKEN", token);
        resolve("success");
      });
    },
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
        let url = `${process.env.VUE_APP_API_URL_DEV}/websites/${this.state.instance_id}`;
        let headers = {
          headers: {
            authorization: this.state.TOKEN,
          },
        };
        console.log("headers :: " + this.state.TOKEN);
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
        let url = `${process.env.VUE_APP_API_URL_DEV}/settings`;
        let headers = {
          headers: {
            authorization: this.state.TOKEN,
            "Content-Type": "application/json",
          },
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

    getWidgets({ commit }) {
      return new Promise((resolve, reject) => {
        let url = `${process.env.VUE_APP_API_URL_DEV}/widgets`;
        let headers = {
          headers: {
            authorization: this.state.TOKEN,
            "Content-Type": "application/json",
          },
        };
        axios
          .get(url, headers)
          .then((res) => {
            commit("SET_WIDGETS_VAL", JSON.parse(JSON.stringify(res.data)));
            resolve("success");
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    getCarts({ commit }, dateObj) {
      return new Promise((resolve, reject) => {
        let url = `${process.env.VUE_APP_API_URL}/abandoned_carts/${this.state.instance_id}/${dateObj.startDate}/${dateObj.endDate}`;
        let headers = {
          TOKEN: this.state.TOKEN,
        };
        console.log("CART-CHECK :: " + url);
        axios
          .get(url, headers)
          .then((res) => {
            console.log("CartsApi: " + JSON.parse(JSON.stringify(res.data)));
            commit("SET_CARTS_VAL", JSON.parse(JSON.stringify(res.data)));
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

    updWdgtHdrClr({ commit }, color) {
      return new Promise((resolve) => {
        commit("SET_WDGT_HDR_CLR", color);
        resolve("success");
      });
    },
    updWdgtBdyClr({ commit }, color) {
      return new Promise((resolve) => {
        commit("SET_WDGT_BDY_CLR", color);
        resolve("success");
      });
    },
    updWdgtType({ commit }, type) {
      return new Promise((resolve) => {
        commit("SET_WDGT_TYPE", type);
        resolve("success");
      });
    },
    updWdgtTtl({ commit }, txt) {
      return new Promise((resolve) => {
        commit("SET_WDGT_HDR_TXT", txt);
        resolve("success");
      });
    },
    updWdgtTtlFnt({ commit }, fnt) {
      return new Promise((resolve) => {
        commit("SET_WDGT_HDR_FNT", fnt);
        resolve("success");
      });
    },
    updTtlBdyClr({ commit }, color) {
      return new Promise((resolve) => {
        commit("SET_WDGT_TTL_CLR", color);
        resolve("success");
      });
    },
    updMsgBdyClr({ commit }, color) {
      return new Promise((resolve) => {
        commit("SET_WDGT_MSG_CLR", color);
        resolve("success");
      });
    },
    updWdgtTtlFntWght({ commit }, wght) {
      return new Promise((resolve) => {
        commit("SET_WDGT_HDR_FNT_WGHT", wght);
        resolve("success");
      });
    },
    updWdgtTtlFntSize({ commit }, size) {
      return new Promise((resolve) => {
        commit("SET_WDGT_HDR_FNT_SZ", size);
        resolve("success");
      });
    },
    updWdgtMsg({ commit }, txt) {
      return new Promise((resolve) => {
        commit("SET_WDGT_MSG_TXT", txt);
        resolve("success");
      });
    },
    updWdgtMsgFnt({ commit }, fnt) {
      return new Promise((resolve) => {
        commit("SET_WDGT_MSG_FNT", fnt);
        resolve("success");
      });
    },
    updWdgtMsgFntWght({ commit }, wght) {
      return new Promise((resolve) => {
        commit("SET_WDGT_MSG_FNT_WGHT", wght);
        resolve("success");
      });
    },
    updWdgtMsgFntSz({ commit }, propName, propVal) {
      return new Promise((resolve) => {
        commit("SET_WIDGET_MSG_SZ", propName, propVal);
        resolve("success");
      });
    },
    updWdgtCnclTxt({ commit }, txt) {
      return new Promise((resolve) => {
        commit("SET_WDGT_CNCL_TXT", txt);
        resolve("success");
      });
    },
    updWdgtCnclFnt({ commit }, fnt) {
      return new Promise((resolve) => {
        commit("SET_WDGT_CNCL_FNT", fnt);
        resolve("success");
      });
    },
    updWdgtCnclFntWght({ commit }, wght) {
      return new Promise((resolve) => {
        commit("SET_WDGT_CNCL_FNT_WGHT", wght);
        resolve("success");
      });
    },
    updWdgtCnclFntSz({ commit }, propName, propVal) {
      return new Promise((resolve) => {
        commit("SET_WIDGET_CNCL_SZ", propName, propVal);
        resolve("success");
      });
    },
    updWdgtCnclClr({ commit }, color) {
      return new Promise((resolve) => {
        commit("SET_WDGT_CNCL_CLR", color);
        resolve("success");
      });
    },
    updWdgtBtnTxt({ commit }, txt) {
      return new Promise((resolve) => {
        commit("SET_WDGT_BTN_TXT", txt);
        resolve("success");
      });
    },
    updWdgtBtnBcgClr({ commit }, color) {
      return new Promise((resolve) => {
        commit("SET_WDGT_BTN_BCG_CLR", color);
        resolve("success");
      });
    },
    updWdgtBtnFnt({ commit }, fnt) {
      return new Promise((resolve) => {
        commit("SET_WDGT_BTN_FNT", fnt);
        resolve("success");
      });
    },
    updWdgtBtnFntClr({ commit }, color) {
      return new Promise((resolve) => {
        commit("SET_WDGT_BTN_FNT_CLR", color);
        resolve("success");
      });
    },
    updWdgtBtnFntWght({ commit }, wght) {
      return new Promise((resolve) => {
        commit("SET_WDGT_BTN_FNT_WGHT", wght);
        resolve("success");
      });
    },
    updWdgtBtnFntSz({ commit }, propName, propVal) {
      return new Promise((resolve) => {
        commit("SET_WIDGET_BTN_FNT_SZ", propName, propVal);
        resolve("success");
      });
    },
    updWdgtBtnCrnr({ commit }, tp) {
      return new Promise((resolve) => {
        commit("SET_WIDGET_BTN_CRNR", tp);
        resolve("success");
      });
    },
    updWdgtBtnBrdrSz({ commit }, size) {
      return new Promise((resolve) => {
        commit("SET_WIDGET_BTN_BRDR_SZ", size);
        resolve("success");
      });
    },
    updWdgtBtnBrdrClr({ commit }, color) {
      return new Promise((resolve) => {
        commit("SET_WDGT_BTN_BRDR_CLR", color);
        resolve("success");
      });
    },
    setSettings() {
      return new Promise((resolve, reject) => {
        let url = `${process.env.VUE_APP_API_URL}/settings`;
        let headers = {
          headers: {
            authorization: this.state.TOKEN,
            "Content-Type": "application/json",
          },
        };
        let data = this.state.settingsVars;
        console.log(data);
        axios
          .post(url, data, headers)
          .then((res) => {
            console.log(res);
            resolve("success");
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    setWdgts() {
      return new Promise((resolve, reject) => {
        let url = `${process.env.VUE_APP_API_URL_DEV}/widgets`;
        let headers = {
          headers: {
            authorization: this.state.TOKEN,
            "Content-Type": "application/json",
          },
        };
        let data = this.state.widgetVars;
        console.log("headers" + headers);
        console.log("data" + data);

        axios
          .post(url, data, headers)
          .then((res) => {
            console.log(res);
            resolve("success");
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    updFbSettings({ commit }, obj) {
      return new Promise((resolve) => {
        commit("SET_FB_SETTINGS", obj);
        resolve("success");
      });
    },
  },
  modules: {},
});
