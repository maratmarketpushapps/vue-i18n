import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    TOKEN: "JWT_TOKEN",
    instance_id: "bb-cc-dd",
    stepsCompOnload: true,
    isLoading: 0,
    globalVars: {
      locale: "",
      payment_currency: "",
      is_free: "",
      pricing_plan: "",
      billing_cycle: "",
      created_at: "",
      last_install: "",
      instance_id: "",
      url: "",
    },
    subVars: {
      former_subscription_plan: null,
      subscription_plan_changed: null,
      consumed_recovery_attempts: 0,
      subscription_plan: "",
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
      step3Comp: true,
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
      setup_step_1_completed: true,
      setup_step_2_completed: true,
      setup_step_3_completed: true,
      cart_recovery_attempts_done: "",
    },
    planVars: {
      plans: [{ planName: "Dummy", cart_recovery_attempts: 0 }],
    },
    navState: {
      currentSelected: "Dashboard",
      currentHover: "Dashboard",
    },
    cartsState: {
      carts: [],
    },

    // Messages State

    msgVars: {
      activeTab: "abndndcrt1",
      cart1Active: true,
      qreplyEdit: false,
      step2Com: true,
      abandoned_cart_2: {
        button_text: "",
        quick_reply_thank_you_text: "",
        quick_reply_unsubscribe_text: "",
        intro_message: "",
        title: "",
        active: false,
        subtitle: "",
        quick_reply_more_questions_text: "",
        sent_after: 1,
      },
      abandoned_cart_1: {
        sent_after: 1,
        quick_reply_more_questions_text: "",
        active: false,
        title: "",
        subtitle: "",
        quick_reply_thank_you_text: "",
        intro_message: "",
        quick_reply_unsubscribe_text: "",
        button_text: "",
      },
      sent_count: {
        sent_count_abandoned_cart_2: 0,
        sent_count_order_receipt: 0,
        sent_count_abandoned_cart_1: 0,
        sent_count_order_shipped: 0,
      },
      order_shipped: {
        quick_reply_thank_you_text: "",
        quick_reply_unsubscribe_text: "",
        quick_reply_more_questions_text: "",
        intro_message: "",
        active: false,
      },
      order_receipt: {
        active: false,
        intro_message: "",
        quick_reply_unsubscribe_text: "",
        quick_reply_thank_you_text: "",
        button_text: "",
        quick_reply_more_questions_text: "",
        subtitle: "",
        title: "",
      },
    },

    //Dashboard state

    dashVars: {
      campaigns: {
        total_messages: 0,
        recovery_messages_nr1_sent: 0,
        recovery_messages_nr2_sent: 0,
      },
      carts_recovered: {
        total_recovered: 0,
        carts_recovered_percentage: "",
        total_abandoned: 0,
      },
      revenue_recovered: {
        total_revenue_recovered: "",
        revenue_recovered_percentage: "",
        total_revenue_lost: 0,
      },
      cart_recovery: {
        total_recovered: 0,
        abandoned_carts: 0,
        facebook_subscribers: 0,
        carts_recovered: 0,
      },
    },
  },
  getters: {
    checkClicked: (state) => (id) => {
      return state.navState.currentSelected === id ? true : false;
    },
    checkHover: (state) => (id) => {
      return state.navState.currentHover === id ? true : false;
    },
    getLocale: (state) => {
      return state.globalVars.locale;
    },
    getCreatedAt: (state) => {
      return state.globalVars.created_at;
    },
    getInstanceId: (state) => {
      return state.globalVars.instance_id;
    },
    getUrl: (state) => {
      return state.globalVars.url;
    },
    getStepsCompOnload: (state) => {
      return state.stepsCompOnload;
    },
    getisLoading: (state) => {
      return state.isLoading == 0 ? false : true;
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
      // console.log(state.widgetVars);
      return state.widgetVars;
    },
    getPlanState: (state) => {
      return JSON.parse(JSON.stringify(state.planVars.plans));
    },
    getCartsState: (state) => {
      return JSON.parse(JSON.stringify(state.cartsState.carts));
    },

    getCarts1: (state) => {
      return state.msgVars.abandoned_cart_1;
    },
    getCarts2: (state) => {
      return state.msgVars.abandoned_cart_2;
    },
    getOrderReceipt: (state) => {
      return state.msgVars.order_receipt;
    },
    getOrderShipped: (state) => {
      return state.msgVars.order_shipped;
    },
    getMsgCounts: (state) => {
      return state.msgVars.sent_count;
    },
    getActiveTab: (state) => {
      return state.msgVars.activeTab;
    },
    getCart1Active: (state) => {
      return state.msgVars.cart1Active;
    },
    getQreplyEdit: (state) => {
      return state.msgVars.qreplyEdit;
    },
    getStep1Complete: (state) => {
      return state.settingsVars.setup_step_1_completed;
    },
    getStep2Complete: (state) => {
      return state.msgVars.step2Com;

      // state.msgVars.abandoned_cart_1.active ||
      //   state.msgVars.abandoned_cart_2.active
      //   ? true
      //   : false;
    },
    getStep3Complete: (state) => {
      return state.widgetVars.step3Comp;
    },

    getDash: (state) => {
      return state.dashVars;
    },
    getSubs: (state) => {
      return state.subVars;
    },
  },
  mutations: {
    SET_SELECTED(state, id) {
      state.navState.currentSelected = id;
    },
    SET_HOVER(state, id) {
      state.navState.currentHover = id;
    },
    SET_CARTS_VAL(state, obj) {
      let cleanedObj = [];
      for (let loopObj of obj.subscribers) {
        cleanedObj.push(loopObj);
      }

      state.cartsState.carts = cleanedObj;
    },
    SET_TOKEN(state, token) {
      state.TOKEN = token;
    },

    REFRESH_URL(state, obj) {
      state.globalVars.url = obj.website;
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
      state.widgetVars.active
        ? (state.widgetVars.step3Comp = true)
        : (state.widgetVars.step3Comp = false);
      state.widgetVars.active ? 1 : (state.stepsCompOnload = false);
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
      state.settingsVars.facebook_short_access_token =
        obj.facebook_short_access_token;
    },
    SET_GLOBAL_VALS(state, obj) {
      state.globalVars.locale = obj.locale;
      state.globalVars.payment_currency = obj.payment_currency;
      state.globalVars.is_free = obj.is_free;
      state.globalVars.pricing_plan = obj.pricing_plan;
      state.globalVars.billing_cycle = obj.billing_cycle;
      state.globalVars.created_at = obj.created_at;
      state.globalVars.last_install = obj.last_install;
      state.globalVars.instance_id = obj.instance_id;
      state.globalVars.url = obj.url;
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

    SET_WDGT_LIVE(state, live) {
      state.widgetVars.changesSaved = false;
      state.widgetVars.active = live;
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
      state.settingsVars.setup_step_1_completed = obj.setup_step_1_completed;
      !obj.setup_step_1_completed ? (state.stepsCompOnload = false) : 1;
    },

    //Messages Commits
    SET_MSG_VALS(state, obj) {
      state.msgVars.abandoned_cart_1.button_text =
        obj.abandoned_cart_1.button_text;
      state.msgVars.abandoned_cart_1.quick_reply_thank_you_text =
        obj.abandoned_cart_1.quick_reply_thank_you_text;
      state.msgVars.abandoned_cart_1.quick_reply_unsubscribe_text =
        obj.abandoned_cart_1.quick_reply_unsubscribe_text;
      state.msgVars.abandoned_cart_1.intro_message =
        obj.abandoned_cart_1.intro_message;
      state.msgVars.abandoned_cart_1.title = obj.abandoned_cart_1.title;
      state.msgVars.abandoned_cart_1.active = obj.abandoned_cart_1.active;
      state.msgVars.abandoned_cart_1.subtitle = obj.abandoned_cart_1.subtitle;
      state.msgVars.abandoned_cart_1.quick_reply_more_questions_text =
        obj.abandoned_cart_1.quick_reply_more_questions_text;
      state.msgVars.abandoned_cart_1.sent_after =
        obj.abandoned_cart_1.sent_after;

      state.msgVars.abandoned_cart_2.button_text =
        obj.abandoned_cart_2.button_text;
      state.msgVars.abandoned_cart_2.quick_reply_thank_you_text =
        obj.abandoned_cart_2.quick_reply_thank_you_text;
      state.msgVars.abandoned_cart_2.quick_reply_unsubscribe_text =
        obj.abandoned_cart_2.quick_reply_unsubscribe_text;
      state.msgVars.abandoned_cart_2.intro_message =
        obj.abandoned_cart_2.intro_message;
      state.msgVars.abandoned_cart_2.title = obj.abandoned_cart_2.title;
      state.msgVars.abandoned_cart_2.active = obj.abandoned_cart_2.active;
      state.msgVars.abandoned_cart_2.subtitle = obj.abandoned_cart_2.subtitle;
      state.msgVars.abandoned_cart_2.quick_reply_more_questions_text =
        obj.abandoned_cart_2.quick_reply_more_questions_text;
      state.msgVars.abandoned_cart_2.sent_after =
        obj.abandoned_cart_2.sent_after;

      state.msgVars.order_receipt.button_text = obj.order_receipt.button_text;
      state.msgVars.order_receipt.quick_reply_thank_you_text =
        obj.order_receipt.quick_reply_thank_you_text;
      state.msgVars.order_receipt.quick_reply_unsubscribe_text =
        obj.order_receipt.quick_reply_unsubscribe_text;
      state.msgVars.order_receipt.intro_message =
        obj.order_receipt.intro_message;
      state.msgVars.order_receipt.title = obj.order_receipt.title;
      state.msgVars.order_receipt.active = obj.order_receipt.active;
      state.msgVars.order_receipt.subtitle = obj.order_receipt.subtitle;
      state.msgVars.order_receipt.quick_reply_more_questions_text =
        obj.order_receipt.quick_reply_more_questions_text;

      state.msgVars.order_shipped.quick_reply_thank_you_text =
        obj.order_shipped.quick_reply_thank_you_text;
      state.msgVars.order_shipped.quick_reply_unsubscribe_text =
        obj.order_shipped.quick_reply_unsubscribe_text;
      state.msgVars.order_shipped.intro_message =
        obj.order_shipped.intro_message;
      state.msgVars.order_shipped.active = obj.order_shipped.active;
      state.msgVars.order_shipped.quick_reply_more_questions_text =
        obj.order_shipped.quick_reply_more_questions_text;

      state.msgVars.sent_count.sent_count_abandoned_cart_2 =
        obj.sent_count.sent_count_abandoned_cart_2;
      state.msgVars.sent_count.sent_count_order_receipt =
        obj.sent_count.sent_count_order_receipt;
      state.msgVars.sent_count.sent_count_abandoned_cart_1 =
        obj.sent_count.sent_count_abandoned_cart_1;
      state.msgVars.sent_count.sent_count_order_shipped =
        obj.sent_count.sent_count_order_shipped;

      obj.abandoned_cart_1.active || obj.abandoned_cart_2.active
        ? (state.msgVars.step2Com = true)
        : (state.msgVars.step2Com = false);

      obj.abandoned_cart_1.active || obj.abandoned_cart_2.active
        ? 1
        : (state.stepsCompOnload = false);
    },
    SET_ORDR_RCPT(state, obj) {
      state.msgVars.order_receipt.button_text = obj.button_text;
      state.msgVars.order_receipt.quick_reply_thank_you_text =
        obj.quick_reply_thank_you_text;
      state.msgVars.order_receipt.quick_reply_unsubscribe_text =
        obj.quick_reply_unsubscribe_text;
      state.msgVars.order_receipt.intro_message = obj.intro_message;
      state.msgVars.order_receipt.title = obj.title;
      state.msgVars.order_receipt.active = obj.active;
      state.msgVars.order_receipt.subtitle = obj.subtitle;
      state.msgVars.order_receipt.quick_reply_more_questions_text =
        obj.quick_reply_more_questions_text;
    },
    SET_ORDR_SHIPPED(state, obj) {
      state.msgVars.order_shipped.quick_reply_thank_you_text =
        obj.quick_reply_thank_you_text;
      state.msgVars.order_shipped.quick_reply_unsubscribe_text =
        obj.quick_reply_unsubscribe_text;
      state.msgVars.order_shipped.intro_message = obj.intro_message;
      state.msgVars.order_shipped.active = obj.active;
      state.msgVars.order_shipped.quick_reply_more_questions_text =
        obj.quick_reply_more_questions_text;
    },
    SET_ORDR_ABANDONED_CART(state, obj) {
      state.msgVars.abandoned_cart_1.sent_after = obj.sent_after;
      state.msgVars.abandoned_cart_1.button_text = obj.button_text;
      state.msgVars.abandoned_cart_1.quick_reply_thank_you_text =
        obj.quick_reply_thank_you_text;
      state.msgVars.abandoned_cart_1.quick_reply_unsubscribe_text =
        obj.quick_reply_unsubscribe_text;
      state.msgVars.abandoned_cart_1.intro_message = obj.intro_message;
      state.msgVars.abandoned_cart_1.title = obj.title;
      state.msgVars.abandoned_cart_1.active = obj.active;
      state.msgVars.abandoned_cart_1.subtitle = obj.subtitle;
      state.msgVars.abandoned_cart_1.quick_reply_more_questions_text =
        obj.quick_reply_more_questions_text;
    },
    SET_ORDR_ABANDONED_CART2(state, obj) {
      state.msgVars.abandoned_cart_2.sent_after = obj.sent_after;
      state.msgVars.abandoned_cart_2.button_text = obj.button_text;
      state.msgVars.abandoned_cart_2.quick_reply_thank_you_text =
        obj.quick_reply_thank_you_text;
      state.msgVars.abandoned_cart_2.quick_reply_unsubscribe_text =
        obj.quick_reply_unsubscribe_text;
      state.msgVars.abandoned_cart_2.intro_message = obj.intro_message;
      state.msgVars.abandoned_cart_2.title = obj.title;
      state.msgVars.abandoned_cart_2.active = obj.active;
      state.msgVars.abandoned_cart_2.subtitle = obj.subtitle;
      state.msgVars.abandoned_cart_2.quick_reply_more_questions_text =
        obj.quick_reply_more_questions_text;
    },
    SET_MSG_ACTIVE_TAB(state, activeTab) {
      state.msgVars.activeTab = activeTab;
    },
    SET_MSG_CART_1_ACTIVE(state, cart1Active) {
      state.msgVars.cart1Active = cart1Active;
    },
    SET_MSG_QREPLY_EDIT(state, val) {
      state.msgVars.qreplyEdit = val;
    },

    SET_STEPS_COMP_ON_LOAD(state, val) {
      state.stepsCompOnload = val;
    },
    SET_IS_LOADING(state, val) {
      val ? state.isLoading++ : state.isLoading--;
    },

    SET_DASH_VALS(state, obj) {
      state.dashVars.campaigns.total_messages = obj.campaigns.total_messages;
      state.dashVars.campaigns.recovery_messages_nr1_sent =
        obj.campaigns.recovery_messages_nr1_sent;
      state.dashVars.campaigns.recovery_messages_nr2_sent =
        obj.campaigns.recovery_messages_nr2_sent;

      state.dashVars.carts_recovered.total_recovered =
        obj.carts_recovered.total_recovered;
      state.dashVars.carts_recovered.carts_recovered_percentage =
        obj.carts_recovered.carts_recovered_percentage;
      state.dashVars.carts_recovered.total_abandoned =
        obj.carts_recovered.total_abandoned;

      state.dashVars.revenue_recovered.total_revenue_recovered =
        obj.revenue_recovered.total_revenue_recovered;
      state.dashVars.revenue_recovered.revenue_recovered_percentage =
        obj.revenue_recovered.revenue_recovered_percentage;
      state.dashVars.revenue_recovered.total_revenue_lost =
        obj.revenue_recovered.total_revenue_lost;

      state.dashVars.cart_recovery.total_recovered =
        obj.cart_recovery.total_recovered;
      state.dashVars.cart_recovery.abandoned_carts =
        obj.cart_recovery.abandoned_carts;
      state.dashVars.cart_recovery.facebook_subscribers =
        obj.cart_recovery.facebook_subscribers;
      state.dashVars.cart_recovery.carts_recovered =
        obj.cart_recovery.carts_recovered;
    },
    SET_SUB_VALS(state, obj) {
      state.subVars.former_subscription_plan = obj.former_subscription_plan;
      state.subVars.subscription_plan_changed = obj.subscription_plan_changed;
      state.subVars.consumed_recovery_attempts = obj.consumed_recovery_attempts;
      state.subVars.subscription_plan = obj.subscription_plan;
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
    updateHover({ commit }, id) {
      commit("SET_HOVER", id);
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
        let url = `${process.env.VUE_APP_API_URL_DEV}/websites`;
        let headers = {
          headers: {
            authorization: this.state.TOKEN,
          },
        };
        // console.log("headers :: " + this.state.TOKEN);
        axios
          .get(url, headers)
          .then((res) => {
            // console.log(JSON.parse(JSON.stringify(res.data)));
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
        // console.log("Settings called");
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

    refreshUrl({ commit }) {
      return new Promise((resolve, reject) => {
        let url = `${process.env.VUE_APP_API_URL_DEV}/getUnpublishedWebsiteUrl`;
        let headers = {
          headers: {
            authorization: this.state.TOKEN,
            "Content-Type": "application/json",
          },
        };
        axios
          .get(url, headers)
          .then((res) => {
            commit("REFRESH_URL", JSON.parse(JSON.stringify(res.data)));
            resolve("success");
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    getCarts({ commit }, dateObj) {
      return new Promise((resolve, reject) => {
        let url = `${process.env.VUE_APP_API_URL_DEV}/getFacebookSubscribers?start_date=${dateObj.startDate}&end_date=${dateObj.endDate}`;
        let headers = {
          headers: {
            authorization: this.state.TOKEN,
            "Content-Type": "application/json",
          },
        };
        // console.log("CART-CHECK :: " + url);
        axios
          .get(url, headers)
          .then((res) => {
            // console.log("CartsApi: " + JSON.parse(JSON.stringify(res.data)));
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
        let url = `${process.env.VUE_APP_API_URL_DEV}/plans`;
        let headers = {
          headers: {
            authorization: this.state.TOKEN,
            "Content-Type": "application/json",
          },
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

    updWdgtLive({ commit }, live) {
      return new Promise((resolve) => {
        commit("SET_WDGT_LIVE", live);
        resolve("success");
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
        let url = `${process.env.VUE_APP_API_URL_DEV}/settings`;
        let headers = {
          headers: {
            authorization: this.state.TOKEN,
            "Content-Type": "application/json",
          },
        };
        let data = this.state.settingsVars;
        // console.log(data);
        axios
          .post(url, data, headers)
          .then(() => {
            // console.log(res);
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
        // console.log("headers" + headers);
        // console.log("data" + data);

        axios
          .post(url, data, headers)
          .then(() => {
            // console.log(res);
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

    // Messages actions

    getMsg({ commit }) {
      return new Promise((resolve, reject) => {
        let url = `${process.env.VUE_APP_API_URL_DEV}/messages`;
        let headers = {
          headers: {
            authorization: this.state.TOKEN,
            "Content-Type": "application/json",
          },
        };
        // console.log("Messages called");
        axios
          .get(url, headers)
          .then((res) => {
            commit("SET_MSG_VALS", JSON.parse(JSON.stringify(res.data)));
            resolve("success");
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    setMsg() {
      return new Promise((resolve, reject) => {
        let url = `${process.env.VUE_APP_API_URL_DEV}/messages`;
        let headers = {
          headers: {
            authorization: this.state.TOKEN,
            "Content-Type": "application/json",
          },
        };
        let data = this.state.msgVars;
        // console.log("headers" + JSON.stringify(headers));
        // console.log("data" + JSON.stringify(data));

        axios
          .post(url, data, headers)
          .then(() => {
            // console.log(res);
            resolve("success");
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    updOrdrRcpt({ commit }, obj) {
      return new Promise((resolve) => {
        commit("SET_ORDR_RCPT", obj);
        resolve("success");
      });
    },
    updOrdrShipped({ commit }, obj) {
      return new Promise((resolve) => {
        // console.log("CampaignRequest::" + JSON.stringify(obj));
        commit("SET_ORDR_SHIPPED", obj);
        resolve("success");
      });
    },
    updOrdrAbndCrt({ commit }, obj) {
      return new Promise((resolve) => {
        // console.log("updateCart :: " + JSON.stringify(obj));
        commit("SET_ORDR_ABANDONED_CART", obj);
        resolve("success");
      });
    },
    updOrdrAbndCrt2({ commit }, obj) {
      return new Promise((resolve) => {
        commit("SET_ORDR_ABANDONED_CART2", obj);
        resolve("success");
      });
    },
    updActiveTab({ commit }, activeTab) {
      return new Promise((resolve) => {
        commit("SET_MSG_ACTIVE_TAB", activeTab);
        resolve("success");
      });
    },
    updCart1Active({ commit }, cart1Active) {
      return new Promise((resolve) => {
        commit("SET_MSG_CART_1_ACTIVE", cart1Active);
        resolve("success");
      });
    },
    updQreplyEdit({ commit }, val) {
      return new Promise((resolve) => {
        commit("SET_MSG_QREPLY_EDIT", val);
        resolve("success");
      });
    },
    updStepsCompOnload({ commit }, val) {
      return new Promise((resolve) => {
        commit("SET_STEPS_COMP_ON_LOAD", val);
        resolve("success");
      });
    },
    updIsLoading({ commit }, val) {
      return new Promise((resolve) => {
        commit("SET_IS_LOADING", val);
        resolve("success");
      });
    },

    //Dashboard Actions

    getDash({ commit }, dateObj) {
      return new Promise((resolve, reject) => {
        let url = `${process.env.VUE_APP_API_URL_DEV}/dashboard?start_date=${dateObj.startDate}&end_date=${dateObj.endDate}`;
        let headers = {
          headers: {
            authorization: this.state.TOKEN,
            "Content-Type": "application/json",
          },
        };
        // console.log("Dashboard data refreshed");
        axios
          .get(url, headers)
          .then((res) => {
            commit("SET_DASH_VALS", JSON.parse(JSON.stringify(res.data)));
            resolve("success");
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    //Subscription API
    getSubs({ commit }) {
      return new Promise((resolve, reject) => {
        let url = `${process.env.VUE_APP_API_URL_DEV}/getSubscription`;
        let headers = {
          headers: {
            authorization: this.state.TOKEN,
            "Content-Type": "application/json",
          },
        };
        // console.log("Dashboard data refreshed");
        axios
          .get(url, headers)
          .then((res) => {
            commit("SET_SUB_VALS", JSON.parse(JSON.stringify(res.data)));
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
