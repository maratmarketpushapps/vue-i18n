<template>
  <v-container fluid >
    <v-row justify="center" >
      <v-card
        tile
        height="100%"
        style="border-radius: 25px 25px 0 0;"
        width="95%"
      >
        <v-container
          class="fluid"
          :style="bcgColor"
          style=" width:100%;height: 120px"
        >
          <v-row style="width:100%; height:30%" justify="end" align="center" @click="toggleDialog()">
            <v-icon>
              mdi-close
            </v-icon>
          </v-row>
        </v-container>
        <v-overlay
          absolute
          :value="dialog"
          style="border-radius: 25px 25px 0 0;"
          class="pa-10"
          z-index="1"
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
          class="fluid pr-2 pl-6 py-0"
          :style="bdyColor"
          style=" width:100%;"
          id="modalContainer"
        >
          <v-row
            style="height:100%;width:102.5%"
            class="pt-8 pb-8"
            align="center"
            justify="center"
            @click="toggleDialog()"
          >
            <span :style="titleProps">{{ titleText }}</span>
          </v-row>

          <v-row
            style="width:102.5%"
            class="pb-7"
            justify="center"
            align="center"
            v-if="wdgtTabcheck"
            @click="toggleDialog()"
          >
            <v-col class="py-0">
              <p :style="msgProps" class="mb-0">{{ msgText }}</p>
            </v-col>
          </v-row>

          <v-row
            style="width:102.5%"
            class="pb-7"
            align="center"
            justify="center"
            v-if="!wdgtTabcheck"
            @click="toggleDialog()"
          >
            <v-col>
              <p :style="msgProps">{{ msgText }}</p>
            </v-col>
          </v-row>

          <v-row
            style="width:95%; border: 1px solid #C9CACB; margin-left:1%"
            align="center"
            justify="center"
            class="pa-0 my-0"
            v-if="wdgtSMScheck && wdgtIsDsc"
          >
            <v-col cols="3" class="img_vh ma-0 pa-0" style="height:100%;width:100%">
              <v-img
                src="https://storage.googleapis.com/dev-facebook-cart-recovery.appspot.com/widget/img/discount-icon.png"
                class="ma-0 pa-0"
                height="100%"
                width="100%"
                style="background:#4E5D6B"
              >
              </v-img>
            </v-col>
            <v-col cols="9" class="py-0" style="height:100%" v-if="checkOptin">
              <v-row style="width:100%;height:100%" class="pl-8 pr-2">
                <span style="font-weight:bold;font-size:120%; color:#5686F6;width: 100%">
                  {{ dscntCd }}
                </span>
              </v-row>

              <v-row style="width:100%" class="pl-8 pr-2" align="center">
                <span style="width: 100%">
                  {{ dscntInstr }}
                </span>
              </v-row>
              <v-row style="width:100%" class="pl-8 pr-2" align="start">
                <v-btn :style="buttonProps" outlined @click="resetOptin">
                  <span :style="btnTextProps">
                    {{ $t("widgets.cpDiscCode") }}
                  </span>
                </v-btn>
              </v-row>
            </v-col>
            <v-col cols="9" class=""  v-if="!checkOptin">
              <v-row style="width:100%;height:5%" class="pl-8 pr-2">
                <span style="font-weight:bold; font-size:90%">
                  {{ dscntStmt }}
                </span>
              </v-row>
              <v-row style="width:100%;" class="mt-2">
                <v-row style="width:125%; height:80%" align="center">
                  <v-col cols="1"> </v-col>
                  <v-col cols="10"  :class="$vuetify.breakpoint.width > 1600 ? 'ml-0' : 'ml-2'">
                    <vue-tel-input
                      v-model="optinNum"
                      dark
                      style="width:100%;"
                      placeholder=""
                      :showDialCode="true"
                      mode="international"
                    >
                    </vue-tel-input>
                  </v-col>
                </v-row>
              </v-row>
              <v-row style="width:100%" class="px-9" align="start">
                <v-btn
                  :style="buttonProps"
                  outlined
                  :key="widgetKey"
                  @click="submitClickDisc"
                >
                  <span :style="btnTextProps">
                    {{ buttonText }}
                  </span>
                </v-btn>
              </v-row>
            </v-col>
          </v-row>

          <v-row
            style="width:102.5%"
            align="center"
            justify="center"
            v-if="wdgtFBcheck && !wdgtIsDsc"
            @click="toggleDialog()"
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

          <v-row
            style="width:102.5%"
            align="start"
            justify="center"
            v-if="wdgtFBcheck && !wdgtIsDsc"
            @click="toggleDialog()"
          >
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
            class="mt-8"
            style="width:102.5%"
            align="end"
            justify="center"
            v-if="wdgtFBcheck && !wdgtIsDsc"
            @click="toggleDialog()"
          >
            <v-btn :style="buttonProps" outlined :key="widgetKey">
              <span :style="btnTextProps">
                {{ buttonText }}
              </span>
            </v-btn>
          </v-row>

          <v-row
            style="width:102.5%"
            align="end"
            justify="center"
            v-if="wdgtSMScheck && !wdgtIsDsc"
            @click="toggleDialog()"
            :class="$vuetify.breakpoint.width > 1600 ? 'ml-0' : 'ml-2'"
          >
            <vue-tel-input
              v-model="optinNum"
              dark
              style="width:70%;"
              placeholder=""
              :showDialCode="true"
              mode="international"
              disabled
            >
            </vue-tel-input>
          </v-row>

          <v-row
            class="mt-8"
            style="width:102.5%"
            align="center"
            justify="center"
            v-if="wdgtSMScheck && !wdgtIsDsc"
            @click="toggleDialog()"
          >
            <v-btn :style="buttonProps" outlined :key="widgetKey">
              <span :style="btnTextProps">
                {{ buttonText }}
              </span>
            </v-btn>
          </v-row>

          <v-row
            style="width:102.5%"
            align="center"
            justify="center"
            v-if="wdgtTabcheck"
          >
            <v-tabs v-model="tab" light centered color="transparent">
              <v-tab light>
                <component v-bind:is="getTabHeader1"></component>
              </v-tab>
              <v-divider vertical></v-divider>
              <v-tab light>
                <component v-bind:is="getTabHeader2"></component>
              </v-tab>
            </v-tabs>
          </v-row>

          <v-row
            style="width:95%; border: 1px solid #C9CACB; margin-left:1%"
            align="center"
            justify="center"
            class="pa-0 my-0 "
            v-if="wdgtFBcheck && wdgtIsDsc"
          >
            <v-col cols="3" class=" ma-0 img_vh pa-0" style="width:100% ">
              <v-img
                src="https://storage.googleapis.com/dev-facebook-cart-recovery.appspot.com/widget/img/discount-icon.png"
                class="ma-0 pa-0 "
                width="100%"
                height="20vh"
                style="background:#4E5D6B;height: 21vh !important;"
              >
              </v-img>
            </v-col>
            <v-col cols="9" class="py-0" style="height:100%" v-if="checkOptin">
              <v-row style="width:100%;" class="pl-8 pr-0">
                <span style="width:100%;font-weight:bold;font-size:120%; color:#5686F6">
                  {{ dscntCd }}
                </span>
              </v-row>

              <v-row style="width:100%;height:100%" class="pl-8 pr-2" align="center">
                <span style="width: 100%">
                  {{ dscntInstr }}
                </span>
              </v-row>
              <v-row style="width:100%" class="pl-8 pr-2" align="start">
                <v-btn :style="buttonProps" outlined @click="resetOptin">
                  <span :style="btnTextProps" style="width: 100%">
                    {{cpDiscCode}}
                  </span>
                </v-btn>
              </v-row>
            </v-col>
            <v-col cols="9" class="py-0" style="height:100%" v-if="!checkOptin">
              <v-row style="width:100%;height:100%" class="pl-6 pr-0">
                <span style="font-weight:bold; font-size:90%">
                  {{ dscntStmt }}
                </span>
              </v-row>
              <v-row style="width:100%;">
                <v-row style="width:100%; height:100%">
                  <v-col cols="1" class="pt-0"> </v-col>
                  <v-col cols="10" class="pl-0 pt-0 ml-11" style="height:100%">
                    <v-row
                      style="width:100%;height:auto"
                      align="center"
                      class="pl-1"
                    >
                      <v-checkbox
                        input-value="true"
                        disabled
                        style="transform: scale(0.8)"
                        class="pr-0 mr-0"
                      >
                      </v-checkbox>
                      <span class="pr-0" style="font-size:80%">
                        {{ $t("widgets.chckBxTxt1") }}
                      </span>
                      <v-icon color="#0084FF" style="transform: scale(0.8)">
                        mdi-facebook-messenger
                      </v-icon>
                      <span class="pl-0" style="font-size:80%">
                        {{ $t("widgets.chckBxTxt2") }}
                      </span>
                      <span> </span>
                    </v-row>

                    <v-row style="width:100%;" align="start">
                      <v-container
                        style="height: 15px; width: 15px; border-radius:100%; background-color: #E6E7E8; transform: scale(0.8)"
                        class="mx-2"
                      ></v-container>

                      <span
                        style="font-size: 70%; height:100%; color: #B3B7BA"
                        class="pt-1 mr-2"
                      >{{ $t("widgets.fbUserName") }}</span
                      >

                      <a
                        style="font-size: 70%; height:100%; color: #B3B7BA; text-decoration:underline"
                        class="pt-1"
                      >{{ $t("widgets.wrngUsrTxt") }}</a
                      >
                    </v-row>
                    <v-row style=" width:100%"> </v-row>
                  </v-col>
                </v-row>
              </v-row>
              <v-row style="width:100%" class="px-7" align="start">
                <v-btn
                  :style="buttonProps"
                  outlined
                  :key="widgetKey"
                  @click="submitClickDisc"
                >
                  <span :style="btnTextProps">
                    {{ buttonText }}
                  </span>
                </v-btn>
              </v-row>
            </v-col>
          </v-row>

          <v-row
            style="width:102.5%"
            align="start"
            justify="center"
            v-if="wdgtTabcheck && !wdgtIsDsc"
            class="pl-2"
            :key="'key1' + wdgtTabKey"
          >
            <v-tabs-items v-model="tab" style="width:90%">
              <v-tab-item :value="getTabKeySMS" style="width:100%">
                <v-row style="width:100%;height:2.5vh">

                </v-row>
                <v-row justify="center" style="width:100%"  @click="toggleDialog()" :class="$vuetify.breakpoint.width > 1600 ? 'ml-0' : 'ml-2'">
                  <vue-tel-input
                    v-model="optinNum"
                    dark
                    style="width:80%;"
                    placeholder=""
                    :showDialCode="true"
                    mode="international"
                    disabled
                  >
                  </vue-tel-input>
                </v-row>
              </v-tab-item>

              <v-tab-item :value="getTabKeyFb">
                <v-row
                  style="width:100%;height:60%"
                  align="center"
                  class="pl-1"
                  justify="center"
                  @click="toggleDialog()"
                >
                  <v-checkbox input-value="true" disabled> </v-checkbox>
                  <span class="pr-1">
                    {{ $t("widgets.chckBxTxt1") }}
                  </span>
                  <v-icon color="#0084FF">
                    mdi-facebook-messenger
                  </v-icon>
                  <span class="pl-2">
                    {{ $t("widgets.chckBxTxt2") }}
                  </span>
                </v-row>

                <v-row
                  style="width:100%;height:40%"
                  align="center"
                  justify="center"
                  @click="toggleDialog()"
                >
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
              </v-tab-item>
            </v-tabs-items>
          </v-row>

          <v-row
            style="width:95%;  border: 1px solid #C9CACB; margin-left:1%"
            align="center"
            justify="center"
            v-if="wdgtTabcheck && wdgtIsDsc"
            :key="'key2' + wdgtTabKey"
            class="mt-4"
          >
            <v-col cols="3" class="img_vh ma-0 pa-0" style="height:100%;width:100%">
              <v-img
                src="https://storage.googleapis.com/dev-facebook-cart-recovery.appspot.com/widget/img/discount-icon.png"
                class="ma-0 pa-0"
                height="100%"
                width="100%"
                style="background:#4E5D6B"
              >
              </v-img>
            </v-col>
            <v-col cols="9" class="py-0" style="height:100%" v-if="checkOptin">
              <v-row style="width:100%;height:100%" class="pl-8 pr-2">
                <span style="font-weight:bold;font-size:120%; color:#5686F6;width: 100%">
                  {{ dscntCd }}
                </span>
              </v-row>

              <v-row style="width:100%;height:100%" class="pl-8 pr-2" align="center">
                <span style="width: 100%">
                  {{ dscntInstr }}
                </span>
              </v-row>
              <v-row style="width:100%" class="pl-8 pr-2" align="start">
                <v-btn :style="buttonProps" outlined @click="resetOptin">
                  <span :style="btnTextProps" style="width: 100%">
                    {{cpDiscCode}}
                  </span>
                </v-btn>
              </v-row>
            </v-col>
            <v-col cols="9" class="" style="height:100%" v-if="!checkOptin">
              <v-row style="width:100%;height:100%" class="pl-8 pr-2">
                <span style="font-weight:bold; font-size:90%">
                  {{ dscntStmt }}
                </span>
              </v-row>
              <v-row style="width:100%;height:100% " class="">
                <v-row style="width:125%; height:100%" align="center">
                  <v-col cols="1"> </v-col>
                  <v-col cols="10">
                    <v-tabs-items v-model="tab" style="width:90%">
                      <v-tab-item :value="getTabKeySMS" style="width:100%">
                        <v-row
                          align="center"
                          style="width:100%"
                          class="pt-5"
                          :class="$vuetify.breakpoint.width > 1600 ? 'ml-0' : 'ml-2'"
                        >
                          <vue-tel-input
                            v-model="optinNum"
                            dark
                            style="width:100%;"
                            placeholder=""
                            :showDialCode="true"
                            mode="international"
                            disabled
                          >
                          </vue-tel-input>
                        </v-row>
                      </v-tab-item>

                      <v-tab-item :value="getTabKeyFb">
                        <v-row
                          style="width:100%;height:auto"
                          align="center"
                          class="pl-1"
                        >
                          <v-checkbox
                            input-value="true"
                            disabled
                            style="transform: scale(0.8)"
                            class="pr-0 mr-0"
                          >
                          </v-checkbox>
                          <span class="pr-0" style="font-size:80%">
                            {{ $t("widgets.chckBxTxt1") }}
                          </span>
                          <v-icon color="#0084FF" style="transform: scale(0.8)">
                            mdi-facebook-messenger
                          </v-icon>
                          <span class="pl-0" style="font-size:80%">
                            {{ $t("widgets.chckBxTxt2") }}
                          </span>
                          <span> </span>
                        </v-row>

                        <v-row style="width:100%;height:30%" align="start">
                          <v-container
                            style="height: 15px; width: 15px; border-radius:100%; background-color: #E6E7E8; transform: scale(0.8)"
                            class="mx-2"
                          ></v-container>

                          <span
                            style="font-size: 70%; height:100%; color: #B3B7BA"
                            class="pt-1 mr-2"
                          >{{ $t("widgets.fbUserName") }}</span
                          >

                          <a
                            style="font-size: 70%; height:100%; color: #B3B7BA; text-decoration:underline"
                            class="pt-1"
                          >{{ $t("widgets.wrngUsrTxt") }}</a
                          >
                        </v-row>
                        <v-row style="height:40%; width:100%"> </v-row>
                      </v-tab-item>
                    </v-tabs-items>
                  </v-col>
                </v-row>
              </v-row>
              <v-row style="width:100%; height:100%" class="pl-8 pr-9 " align="start">
                <v-btn
                  :style="buttonProps"
                  outlined
                  :key="widgetKey"
                  @click="submitClickDisc"
                >
                  <span :style="btnTextProps">
                    {{ buttonText }}
                  </span>
                </v-btn>
              </v-row>
            </v-col>
          </v-row>

          <v-row
            style="width:102.5%"
            align="center"
            justify="center"
            v-if="wdgtTabcheck && !wdgtIsDsc"
            :key="'key3' + wdgtTabKey"
            @click="toggleDialog()"
            class="mt-8"
          >
            <v-btn :style="buttonProps" outlined :key="widgetKey">
              <span :style="btnTextProps">
                {{ buttonText }}
              </span>
            </v-btn>
          </v-row>

          <v-row
            class="mt-6 mb-9"
            style="width:102.5%"
            align="center"
            justify="center"
            @click="toggleDialog()"
          >
            <a :style="cancelProps">{{ cancelText }}</a>
          </v-row>
        </v-container>
      </v-card>
    </v-row>

    <v-row justify="center"  class="mt-8">
      <v-btn
        tile
        outlined
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
import SmsIcon from "@/assets/icons/sms-icon.svg";
import FbIcon from "@/assets/icons/facebook-icon.svg";

export default {
  name: "WidgetViewCheckBox",
  components: { SmsIcon, FbIcon },
  data() {
    return {
      dialog: false,
      btnId: 0,
      didOptIn: false,
      optinNum: "",

      tab: null,
      wdgtTabKey: 0,
    };
  },
  methods: {
    incrBtnId() {
      this.btnId++;
    },
    toggleDialog() {
      // console.log("Inside toggle dialog :: " + this.dialog);
      this.dialog = !this.dialog;
    },
    ovrlyClose() {
      this.dialog = !this.dialog;
    },
    resetChanges() {
      this.$store.dispatch("getWidgets");
    },
    submitClickDisc() {
      this.didOptIn = true;
    },
    resetOptin() {
      this.didOptIn = false;
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
      // console.log("button Text" + this.getWidgetsState.button_text);
      return this.getWidgetsState.button_text;
    },
    buttonProps() {
      let borderRad =
        this.getWidgetsState.button_corners == "Round" ? "8px" : "0px";
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
    wdgtFBcheck() {
      return (
        this.getWidgetsState.enabled_widgets.facebook.enabled &&
        !this.getWidgetsState.enabled_widgets.sms.enabled
      );
    },
    wdgtSMScheck() {
      return (
        !this.getWidgetsState.enabled_widgets.facebook.enabled &&
        this.getWidgetsState.enabled_widgets.sms.enabled
      );
    },
    wdgtTabcheck() {
      return (
        this.getWidgetsState.enabled_widgets.facebook.enabled &&
        this.getWidgetsState.enabled_widgets.sms.enabled
      );
    },
    getTabHeader1() {
      if (this.getWidgetsState.enabled_widgets.facebook.position == 1) {
        return "FbIcon";
      } else {
        return "SmsIcon";
      }
    },
    getTabHeader2() {
      if (this.getWidgetsState.enabled_widgets.facebook.position == 2) {
        return "FbIcon";
      } else {
        return "SmsIcon";
      }
    },
    getTabKeySMS() {
      return this.getWidgetsState.enabled_widgets.sms.position - 1;
    },

    getTabKeyFb() {
      return this.getWidgetsState.enabled_widgets.facebook.position - 1;
    },

    wdgtIsDsc() {
      return this.getWidgetsState.subscribe_type != "default";
    },
    dscntStmt() {
      return this.getWidgetsState.discount_statement;
    },
    checkOptin() {
      return this.didOptIn;
    },
    dscntCd() {
      return this.getWidgetsState.discount_code;
    },
    dscntInstr() {
      return this.getWidgetsState.apply_discount_instruction;
    },
    cpDiscCode(){
      return this.$store.getters.getCopyDiscountCodeButton
    }
  },
  watch: {
    getTabHeader1(newValue) {
      console.log("new value of header 1 ::" + newValue);
      this.wdgtTabKey++;
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
.img_vh{
  object-fit: cover;
  height: 21vh;
}
.img_vh_big{
  height: 21vh !important;
}
.img_vh_sm{
  height: 25vh !important;
}
</style>
<style >
.img_vh  .v-responsive__content{
    height: 21vh !Important;
  }

</style>