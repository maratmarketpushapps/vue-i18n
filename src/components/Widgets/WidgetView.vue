<template>
  <v-container fluid style="height:750px">
    <v-row justify="center" style="height:85%">
      <v-card
        tile
        height="95%"
        style="border-radius: 25px 25px 0 0;"
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
            z-index="0.8"
          >
            <v-card color="white" tile class="pb-4 pt-2">
              <v-row justify="end" class="pr-4 pt-2">
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
          <v-row
            style="height:20%;width:102.5%"
            align="center"
            justify="center"
          >
            <span :style="titleProps">{{ titleText }}</span>
          </v-row>
          <v-row
            style="height:30%;width:102.5%"
            align="center"
            justify="center"
          >
            <v-col>
              <p :style="msgProps">{{ msgText }}</p>
            </v-col>
          </v-row>
          <v-row
            style="height:20%;width:102.5%"
            align="center"
            justify="center"
          >
            <v-btn color="#0084FF" class="fb-btn white--text" height="50px">
              <v-icon color="#FFFFFF">
                mdi-facebook-messenger
              </v-icon>
              <span class="pl-2">
                {{ $t("widgets.msngBtnText") }}
              </span>
            </v-btn>
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

          <v-row
            style="height:20%;width:102.5%"
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
  name: "WidgetView",

  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    toggleDialog() {
      this.dialog = !this.dialog;
    },
    resetChanges() {
      this.$store.dispatch("getWidgets");
    },
    ovrlyClose() {},
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
    widgetType() {
      return this.getWidgetsState.facebook_widget_type;
    },

  },

};
</script>

<style scoped>
.fb-btn {
  border-radius: 7px;
  text-transform: none;
}
</style>
