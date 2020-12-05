<template>
  <v-container fluid style="height:750px">
    <v-row justify="center" style="height:90%">
      <v-card
        tile
        height="95%"
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
        <v-overlay
          absolute
          :value="dialog"
          style="border-radius: 25px 25px 0 0;"
          class="pa-10"
        >
          <v-card color="white" tile class="pb-4 pt-2">
            <v-row justify="end" class="pr-5 pt-2">
              <v-btn x-small icon @click="ovrlyClose()">
                <v-icon color="black">
                  mdi-window-close
                </v-icon>
              </v-btn>
            </v-row>
            <v-card-text
              style="color:black ;text-align: center; font-size:12px"
            >
              {{ $t("widgets.modalText1") }}
            </v-card-text>
            <v-card-text
              style="color:black ; text-align: center; font-size:12px"
            >
              {{ $t("widgets.modalText2") }}
            </v-card-text>
          </v-card>
        </v-overlay>
        <v-container
          class="fluid pr-2 pl-6"
          :style="bdyColor"
          style="height:80%; width:100%;"
          id="modalContainer"
        >
          <v-row
            style="height:20%;width:102.5%"
            align="center"
            justify="center"
          >
            <span :style="titleProps">{{ titleText }}</span>
          </v-row>
          <v-row
            style="height:25%;width:102.5%"
            align="center"
            justify="center"
          >
            <v-col>
              <p :style="msgProps">{{ msgText }}</p>
            </v-col>
          </v-row>

          <v-row
            style="height:15%;width:102.5%"
            align="center"
            justify="center"
          >
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
            <v-btn :style="buttonProps" outlined :key="widgetKey">
              <span :style="btnTextProps">
                {{ buttonText }}
              </span>
            </v-btn>
          </v-row>

          <v-row
            style="height:10%;width:102.5%"
            align="center"
            justify="center"
          >
            <a :style="cancelProps">{{ cancelText }}</a>
          </v-row>
        </v-container>
      </v-card>
    </v-row>

    <v-row justify="center">
      <v-btn
        tile
        outlined
        height="5vh"
        class="#4E5D6B--text"
        color="#4E5D6B"
        style="border-width:1px"
        :disabled="detectChange"
        @click="resetChanges"
      >
        {{ $t("widgets.resetButton") }}
      </v-btn>
    </v-row>
  </v-container>
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
    incrBtnId() {
      this.btnId++;
    },
    toggleDialog() {
      console.log("Inside toggle dialog :: " + this.dialog);
      this.dialog = !this.dialog;
    },
    ovrlyClose() {},
    resetChanges() {
      this.$store.dispatch("getWidgets");
    },
  },
  computed: {
    ...mapGetters(["getWidgetsState"]),
    detectChange() {
      return this.getWidgetsState.changesSaved;
    },
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
        "border-width": this.getWidgetsState.button_border_size + "px",
      };
      return buttonObj;
    },
    btnTextProps() {
      let btnObj = {
        color: this.getWidgetsState.button_font_color,
        "font-family": this.getWidgetsState.button_font_family,
        "font-weight": this.getWidgetsState.button_font_type,
        "font-size": this.getWidgetsState.button_font_size + "px",
        "text-transform": "none",
      };
      return btnObj;
    },
    widgetType() {
      return this.getWidgetsState.facebook_widget_type;
    },
    widgetKey() {
      return "key" + this.getWidgetsState.wdgt_key_internal + "b" + this.btnId;
    },
  },

  beforeCreate() {
    this.$store.dispatch("updIsLoading", true).then(() => {
      this.$store.dispatch("getWidgets").then(() => {
        this.$store.dispatch("updIsLoading", false);
      });
    });
  },
};
</script>

<style scoped>
.fb-btn {
  border-radius: 7px;
  text-transform: none;
}
</style>
