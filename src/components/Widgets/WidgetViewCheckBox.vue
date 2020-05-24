<template>
  <v-card
    tile
    height="85%"
    style="border-radius: 25px 25px 0 0; pr-0"
    width="90%"
    @click="toggleDialog()"
  >
    <v-container
      class="fluid"
      :style="bcgColor"
      style="height:20%; width:100%;"
    >
    </v-container>
    <v-container
      class="fluid pr-2 pl-6"
      :style="bdyColor"
      style="height:80%; width:100%;"
      id="modalContainer"
    >
      <v-overlay
        absolute
        :value="dialog"
        style="border-radius: 25px 25px 0 0;"
        class="pa-10"
      >
        <v-card color="white" tile class="pb-4 pt-2">
          <v-card-text style="color:black ;text-align: center; font-size:12px">
            {{ $t("widgets.modalText1") }}
          </v-card-text>
          <v-card-text style="color:black ; text-align: center; font-size:12px">
            {{ $t("widgets.modalText2") }}
          </v-card-text>
        </v-card>
      </v-overlay>
      <v-row style="height:20%;width:102.5%" align="center" justify="center">
        <span :style="titleProps">{{ titleText }}</span>
      </v-row>
      <v-row style="height:25%;width:102.5%" align="center" justify="center">
        <v-col>
          <p :style="msgProps">{{ msgText }}</p>
        </v-col>
      </v-row>

      <v-row style="height:15%;width:102.5%" align="center" justify="center">
        <v-checkbox input-value="true" disabled> </v-checkbox>
        <span class="pr-2">
          {{ $t("widgets.chckBxTxt1") }}
        </span>
        <v-icon color="#0084FF">
          mdi-facebook-messenger
        </v-icon>
        <span class="pl-2">
          {{ $t("widgets.chckBxTxt2") }}
        </span>
      </v-row>

      <v-row style="height:7%;width:102.5%" align="start" justify="center">
        <v-container
          style="height: 26px; width: 26px; border-radius:100%; background-color: #E6E7E8"
          class="mx-2"
        ></v-container>

        <span
          style="font-size: 14px; height:100%; color: #B3B7BA"
          class="pt-1 mr-2"
          >{{ $t("widgets.fbUserName") }}</span
        >

        <a
          style="font-size: 13px; height:100%; color: #B3B7BA; text-decoration:underline"
          class="pt-1"
          >{{ $t("widgets.wrngUsrTxt") }}</a
        >
      </v-row>
      <v-row style="height:15%;width:102.5%" align="end" justify="center">
        <v-btn :style="buttonProps" outlined :key="btnId">
          <span :style="btnTextProps">
            {{ buttonText }}
          </span>
        </v-btn>
      </v-row>

      <v-row style="height:10%;width:102.5%" align="center" justify="center">
        <a :style="cancelProps">{{ cancelText }}</a>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "WidgetViewCheckBox",
  data() {
    return {
      dialog: false,
      btnId: 0,
    };
  },
  methods: {
    incrBtnId(){
      this.btnId ++;
    },
    toggleDialog() {
      this.dialog = !this.dialog;
    },
  },
  computed: {
    ...mapGetters(["getWidgetsState"]),
    bcgColor() {
      let hdrClsObj = {
        "background-color": this.getWidgetsState.header_background_color,
      };
      return hdrClsObj;
    },
    bdyColor() {
      let bdyClsObj = {
        "background-color": this.getWidgetsState.popup_background_color,
      };
      return bdyClsObj;
    },
    titleText() {
      return this.getWidgetsState.pop_up_title;
    },
    titleProps() {
      let ttlObj = {
        color: this.getWidgetsState.pop_up_title_font_color,
        "font-weight": this.getWidgetsState.pop_up_title_font_type,
        "font-size": this.getWidgetsState.pop_up_title_font_size + "px",
        "font-family": this.getWidgetsState.pop_up_title_font_family,
      };
      return ttlObj;
    },
    msgText() {
      return this.getWidgetsState.pop_up_message;
    },
    msgProps() {
      let ttlObj = {
        color: this.getWidgetsState.pop_up_message_font_color,
        "font-weight": this.getWidgetsState.pop_up_message_font_type,
        "font-size": this.getWidgetsState.pop_up_message_font_size + "px",
        "font-family": this.getWidgetsState.pop_up_message_font_family,
        "text-align": "center",
      };
      return ttlObj;
    },
    cancelText() {
      return this.getWidgetsState.pop_up_cancel;
    },
    cancelProps() {
      let ttlObj = {
        color: this.getWidgetsState.pop_up_cancel_font_color,
        "font-weight": this.getWidgetsState.pop_up_cancel_font_type,
        "font-size": this.getWidgetsState.pop_up_cancel_font_size + "px",
        "font-family": this.getWidgetsState.pop_up_cancel_font_family,
        "text-decoration": "underline",
        "text-align": "center",
      };
      return ttlObj;
    },
    buttonText() {
      this.incrBtnId();
      console.log("button Text" + this.getWidgetsState.button_text);
      return this.getWidgetsState.button_text;
    },
    buttonProps() {
      let borderRad =
        this.getWidgetsState.button_corners == "Round" ? "4px" : "0px";
      let buttonObj = {
        "background-color": this.getWidgetsState.button_background,
        "border-color": this.getWidgetsState.button_border_color,
        "border-radius": borderRad,
      };
      return buttonObj;
    },
    btnTextProps() {
      let btnObj = {
        color: this.getWidgetsState.button_font_color,
        "font-family": this.getWidgetsState.button_font_family,
        "font-weight": this.getWidgetsState.button_font_type,
        "font-size": this.getWidgetsState.button_font_size,
      };
      return btnObj;
    },
    widgetType() {
      return this.getWidgetsState.facebook_widget_type;
    },
  },

  beforeCreate() {
    this.$store.dispatch("getWidgets");
  },
};
</script>

<style scoped>
.fb-btn {
  border-radius: 7px;
  text-transform: none;
}
</style>
