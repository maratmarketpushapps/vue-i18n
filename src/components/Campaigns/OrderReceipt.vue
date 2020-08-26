<template>
  <v-card tile height="auto" class="pl-0 pt-3 pr-0 font_dims">
    <v-row style="height:23%" class="pl-6" align="center">
      <v-col cols="4">
        <v-row
          class="pl-6"
          style="height: 100%; width:100%"
          align="center"
          justify="start"
        >
          <h3>{{ $t("campaigns.ordrrcpt.headerTxt") }}</h3>
        </v-row>
      </v-col>
      <v-col cols="3">
        <v-row style="height: 50%; width: 100%" justify="center" align="start">
          <span class="msgCount">
            {{ getOrdrRcptMsgCnt }}
          </span>
        </v-row>
        <v-row style="height: 40%; width: 100%" justify="center" align="end">
          <span>
            {{ $t("campaigns.msgCount") }}
          </span>
        </v-row>
      </v-col>
      <v-col cols="3">
        <v-row style="width: 100%" justify="end" align="center">
          <v-btn
            tile
            height="35px"
            class="primary font_dims"
            width="70%"
            :disabled="svBtnDsbldOrdrRcpt"
            style="font-size:100%; text-transform:none;"
            @click="saveOrdrRcpt()"
          >
            {{ $t("widgets.svBtn") }}
          </v-btn>
        </v-row>
      </v-col>
      <v-col>
        <v-row style="width:100%" align="center" justify="center">
          <v-switch
            v-model="ordrRcptSwitchLive"
            color="#006AFF"
            @change="activeStateChng()"
          >
          </v-switch>
        </v-row>
      </v-col>
    </v-row>
    <v-divider style="width:100%" class="pa-0 ma-0"></v-divider>
    <v-row style="height:80%" class="pl-6 pr-9 mt-9" align="start">
      <v-row style="height:15%; width:100%" class="pl-4 pr-3">
        <v-text-field
          :label="$t('campaigns.ordrrcpt.introMsg')"
          v-model="ordrRcptIntroMsg"
          @change="detectChange"
          @input="detectChange"
          dense
          style="font-size:110%"
          class="mt-9 pb-1 ml-6 mr-9"
          :hint="$t('campaigns.ordrrcpt.hint1')"
        >
        </v-text-field>
      </v-row>
      <v-row style="height:15%; width:100%" class="mt-2 pl-4 pr-3">
        <v-text-field
          :label="$t('campaigns.ordrrcpt.title')"
          v-model="ordrRcptTitle"
          @change="detectChange"
          @input="detectChange"
          dense
          style="font-size:110%"
          class="mt-5 pb-1 ml-6 mr-9"
        >
        </v-text-field>
      </v-row>
      <v-row style="height:15%; width:100%" class="pl-4 pr-3">
        <v-col cols="6">
          <v-text-field
            :label="$t('campaigns.ordrrcpt.subTitle')"
            v-model="ordrRcptSubTitle"
            @change="detectChange"
            @input="detectChange"
            dense
            style="font-size:110%"
            class="mt-2 pb-1 ml-3 mr-3"
          >
          </v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            :label="$t('campaigns.ordrrcpt.btnTxt')"
            v-model="ordrRcptBtnText"
            @change="detectChange"
            @input="detectChange"
            dense
            style="font-size:110%"
            class="mt-2 pb-1 ml-3 mr-7"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row style="height:15%; width:100%" class="pl-4 pr-3">
        <v-col>
          <v-row align="center">
            <span class="mt-1 pb-1 ml-6 mr-0 qckRpl">
              {{ $t("campaigns.ordrrcpt.qckRply") }}
            </span>
            <TooltipIcon
              :posRight="true"
              :nudgeBottom="30"
              :nudgeLeft="5"
              :txt="$t('campaigns.infocons.msg3')"
              class="infoicon_scale mt-0 pt-0"
              style="top:30%; transform:scale(.85)"
            />
          </v-row>
          <v-row class="ml-3 mt-4">
            <v-btn
              class="mr-3 qckRplBtn font_dims"
              color="#7DA2F7"
              @click="ovrlyOrdrRcpt1()"
            >
              {{ ordrRcptQckRpl1 }}
            </v-btn>
            <v-btn
              class="mr-3 qckRplBtn font_dims"
              color="#7DA2F7"
              @click="ovrlyOrdrRcpt2()"
            >
              {{ ordrRcptQckRpl2 }}
            </v-btn>
            <v-btn
              class="mr-3 qckRplBtn font_dims"
              color="#7DA2F7"
              @click="ovrlyOrdrRcpt3()"
            >
              {{ ordrRcptQckRpl3 }}
            </v-btn>
          </v-row>
        </v-col>
      </v-row>

      <v-row style="height:15vh; width:100%" class="pl-4 pr-3"> </v-row>
    </v-row>

    <v-overlay
      :absolute="absolute"
      :opacity="opacity"
      :value="overlayOrdrRcptQckRpl1"
      :z-index="zIndex"
    >
      <v-card tile light height="40vh" width="30vw" class="pa-1">
        <v-row style="height:10%; width:100%" justify="end" class="mr-4 mt-2">
          <v-icon @click="canclOvrlyOrdrRcpt1()">
            mdi-window-close
          </v-icon>
        </v-row>
        <v-row style="height:20%; width:100%" justify="start" class="ml-5 mt-0">
          <v-col>
            <h3 style="color:#4E5D6B">
              {{ $t("campaigns.qckRplyOvrly.header") }}
            </h3>
          </v-col>
        </v-row>
        <v-row style="height:20%; width:100%" class="ml-2">
          <v-col>
            <v-text-field
              :label="$t('campaigns.ordrrcpt.qckRply')"
              v-model="ordrRcptQckRplEdit1"
              @change="ordrRcptQckRplEdit1Chng"
              @input="ordrRcptQckRplEdit1Chng"
              dense
              style="font-size:110%"
              class="mt-2 pb-1 ml-3 mr-7"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row style="height:20%; width:100%" class="ml-2">
          <v-col>
            <v-btn
              tile
              height="40px"
              class="primary ml-3 mt-3"
              width="30%"
              :disabled="svBtnordrRcptQckRplEdit1"
              @click="svOrdrRcptQckRplEdit1()"
            >
              {{ $t("settingsPage.accInfoCard.buttonText") }}
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-overlay>

    <v-overlay
      :absolute="absolute"
      :opacity="opacity"
      :value="overlayOrdrRcptQckRpl2"
      :z-index="zIndex"
    >
      <v-card tile light height="40vh" width="30vw" class="pa-1">
        <v-row style="height:10%; width:100%" justify="end" class="mr-4 mt-2">
          <v-icon @click="canclOvrlyOrdrRcpt2()">
            mdi-window-close
          </v-icon>
        </v-row>
        <v-row style="height:20%; width:100%" justify="start" class="ml-5 mt-0">
          <v-col>
            <h3 style="color:#4E5D6B">
              {{ $t("campaigns.qckRplyOvrly.header") }}
            </h3>
          </v-col>
        </v-row>
        <v-row style="height:20%; width:100%" class="ml-2">
          <v-col>
            <v-text-field
              :label="$t('campaigns.ordrrcpt.qckRply')"
              v-model="ordrRcptQckRplEdit2"
              @change="ordrRcptQckRplEdit2Chng"
              @input="ordrRcptQckRplEdit2Chng"
              dense
              style="font-size:110%"
              class="mt-2 pb-1 ml-3 mr-7"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row style="height:20%; width:100%" class="ml-2">
          <v-col>
            <v-btn
              tile
              height="40px"
              class="primary ml-3 mt-3"
              width="30%"
              :disabled="svBtnordrRcptQckRplEdit2"
              @click="svOrdrRcptQckRplEdit2()"
            >
              {{ $t("settingsPage.accInfoCard.buttonText") }}
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-overlay>
    <v-overlay
      :absolute="absolute"
      :opacity="opacity"
      :value="overlayOrdrRcptQckRpl3"
      :z-index="zIndex"
    >
      <v-card tile light height="40vh" width="30vw" class="pa-1">
        <v-row style="height:10%; width:100%" justify="end" class="mr-4 mt-2">
          <v-icon @click="canclOvrlyOrdrRcpt3()">
            mdi-window-close
          </v-icon>
        </v-row>
        <v-row style="height:20%; width:100%" justify="start" class="ml-5 mt-0">
          <v-col>
            <h3 style="color:#4E5D6B">
              {{ $t("campaigns.qckRplyOvrly.header") }}
            </h3>
          </v-col>
        </v-row>
        <v-row style="height:20%; width:100%" class="ml-2">
          <v-col>
            <v-text-field
              :label="$t('campaigns.ordrrcpt.qckRply')"
              v-model="ordrRcptQckRplEdit3"
              @change="ordrRcptQckRplEdit3Chng"
              @input="ordrRcptQckRplEdit3Chng"
              dense
              style="font-size:110%"
              class="mt-2 pb-1 ml-3 mr-7"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row style="height:20%; width:100%" class="ml-2">
          <v-col>
            <v-btn
              tile
              height="40px"
              class="primary ml-3 mt-3"
              width="30%"
              :disabled="svBtnordrRcptQckRplEdit3"
              @click="svOrdrRcptQckRplEdit3()"
            >
              {{ $t("settingsPage.accInfoCard.buttonText") }}
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-overlay>
  </v-card>
</template>

<script>
import TooltipIcon from "@/components/svgIcons/TooltipIcon.vue";
// import moment from "moment-timezone";
// import { mapGetters } from "vuex";
export default {
  name: "OrderReceipt",
  components: { TooltipIcon },
  data() {
    return {
      tab: null,
      menu: false,
      absolute: false,
      opacity: 0.46,
      zIndex: 5,
      ordrRcptSwitchLive: false,
      ordrRcptIntroMsg: "",
      ordrRcptBtnDisabled: true,
      ordrRcptTitle: "",
      ordrRcptSubTitle: "",
      ordrRcptBtnText: "",
      ordrRcptQckRpl1: "",
      ordrRcptQckRpl2: "",
      ordrRcptQckRpl3: "",
      overlayOrdrRcptQckRpl1: false,
      ordrRcptQckRplEdit1: "",
      ordrRcptQckRplEdit1Btn: true,
      overlayOrdrRcptQckRpl2: false,
      ordrRcptQckRplEdit2: "",
      ordrRcptQckRplEdit2Btn: true,
      overlayOrdrRcptQckRpl3: false,
      ordrRcptQckRplEdit3: "",
      ordrRcptQckRplEdit3Btn: true,
    };
  },
  methods: {
    activeStateChng() {
      console.log("old active status" + this.ordrRcptSwitchLive);
      // this.ordrRcptSwitchLive = !this.ordrRcptSwitchLive;

      this.ordrRcptBtnDisabled = false;
      console.log("new active status" + this.ordrRcptSwitchLive);
    },
    incrTabCount() {
      this.activeTab == "1" ? this.refreshComp1() : "";
      this.activeTab == "2" ? this.refreshComp2() : "";
      this.activeTab == "3" ? this.refreshComp3() : "";
      this.activeTab == "4" ? this.custKey++ : "";
    },

    refreshComp1() {
      this.activeTab = "1";
      this.itemKeyDat1++;
    },
    refreshComp2() {
      this.activeTab = "2";
      this.itemKeyDat2++;
    },
    refreshComp3() {
      this.activeTab = "3";
      this.itemKeyDat3++;
    },

    setMenuactivator() {
      this.menuActivator = true;
    },
    detectChange() {
      let obj = {
        active: this.ordrRcptSwitchLive,
        intro_message: this.ordrRcptIntroMsg,
        title: this.ordrRcptTitle,
        subtitle: this.ordrRcptSubTitle,
        button_text: this.ordrRcptBtnText,
        quick_reply_thank_you_text: this.ordrRcptQckRpl1,
        quick_reply_more_questions_text: this.ordrRcptQckRpl2,
        quick_reply_unsubscribe_text: this.ordrRcptQckRpl3,
      };

      this.$store.dispatch("updOrdrRcpt", obj).then((response) => {
        console.log(response);
      });
      this.ordrRcptBtnDisabled = false;
    },
    ovrlyOrdrRcpt1() {
      this.ordrRcptQckRplEdit1 = this.ordrRcptQckRpl1;
      this.overlayOrdrRcptQckRpl1 = true;
    },
    canclOvrlyOrdrRcpt1() {
      this.overlayOrdrRcptQckRpl1 = false;
      this.ordrRcptQckRplEdit1Btn = true;
    },
    ordrRcptQckRplEdit1Chng() {
      this.ordrRcptQckRplEdit1Btn = false;
    },
    svOrdrRcptQckRplEdit1() {
      this.ordrRcptQckRpl1 = this.ordrRcptQckRplEdit1;
      this.overlayOrdrRcptQckRpl1 = false;
      this.ordrRcptQckRplEdit1Btn = true;
    },
    ovrlyOrdrRcpt2() {
      this.ordrRcptQckRplEdit2 = this.ordrRcptQckRpl2;
      this.overlayOrdrRcptQckRpl2 = true;
    },
    canclOvrlyOrdrRcpt2() {
      this.overlayOrdrRcptQckRpl2 = false;
      this.ordrRcptQckRplEdit2Btn = true;
    },
    ordrRcptQckRplEdit2Chng() {
      this.ordrRcptQckRplEdit2Btn = false;
    },
    svOrdrRcptQckRplEdit2() {
      this.ordrRcptQckRpl2 = this.ordrRcptQckRplEdit2;
      this.overlayOrdrRcptQckRpl2 = false;
      this.ordrRcptQckRplEdit2Btn = true;
    },

    ovrlyOrdrRcpt3() {
      this.ordrRcptQckRplEdit3 = this.ordrRcptQckRpl3;
      this.overlayOrdrRcptQckRpl3 = true;
    },
    canclOvrlyOrdrRcpt3() {
      this.overlayOrdrRcptQckRpl3 = false;
      this.ordrRcptQckRplEdit3Btn = true;
    },
    ordrRcptQckRplEdit3Chng() {
      this.ordrRcptQckRplEdit3Btn = false;
    },
    svOrdrRcptQckRplEdit3() {
      this.ordrRcptQckRpl3 = this.ordrRcptQckRplEdit3;
      this.overlayOrdrRcptQckRpl3 = false;
      this.ordrRcptQckRplEdit3Btn = true;
    },
    saveOrdrRcpt() {
      let obj = {
        active: this.ordrRcptSwitchLive,
        intro_message: this.ordrRcptIntroMsg,
        title: this.ordrRcptTitle,
        subtitle: this.ordrRcptSubTitle,
        button_text: this.ordrRcptBtnText,
        quick_reply_thank_you_text: this.ordrRcptQckRpl1,
        quick_reply_more_questions_text: this.ordrRcptQckRpl2,
        quick_reply_unsubscribe_text: this.ordrRcptQckRpl3,
      };

      this.$store.dispatch("updOrdrRcpt", obj).then((response) => {
        console.log(response);
        this.$store.dispatch("setMsg").then((resp) => {
          console.log(resp);
          this.ordrRcptBtnDisabled = true;
          this.$store.dispatch("getMsg").then((response) => {
            console.log(response);

            this.ordrRcptSwitchLive = this.$store.getters.getOrderReceipt.active;
            this.ordrRcptIntroMsg = this.$store.getters.getOrderReceipt.intro_message;
            this.ordrRcptTitle = this.$store.getters.getOrderReceipt.title;
            this.ordrRcptSubTitle = this.$store.getters.getOrderReceipt.subtitle;
            this.ordrRcptBtnText = this.$store.getters.getOrderReceipt.button_text;
            this.ordrRcptQckRpl1 = this.$store.getters.getOrderReceipt.quick_reply_thank_you_text;
            this.ordrRcptQckRpl2 = this.$store.getters.getOrderReceipt.quick_reply_more_questions_text;
            this.ordrRcptQckRpl3 = this.$store.getters.getOrderReceipt.quick_reply_unsubscribe_text;
          });
        });
      });
    },
  },
  computed: {
    // ...mapGetters(["getCreatedAt"]),
    getOrdrRcptMsgCnt() {
      return this.$store.getters.getMsgCounts.sent_count_order_receipt;
    },
    svBtnDsbldOrdrRcpt() {
      return this.ordrRcptBtnDisabled;
    },
    svBtnordrRcptQckRplEdit1() {
      return this.ordrRcptQckRplEdit1Btn;
    },
    svBtnordrRcptQckRplEdit2() {
      return this.ordrRcptQckRplEdit2Btn;
    },
    svBtnordrRcptQckRplEdit3() {
      return this.ordrRcptQckRplEdit3Btn;
    },
  },
  watch: {
    ordrRcptQckRpl1(newVal, oldVal) {
      if (oldVal == "") {
        this.ordrRcptBtnDisabled = true;
      } else if (oldVal != newVal) {
        let obj = {
          active: this.ordrRcptSwitchLive,
          intro_message: this.ordrRcptIntroMsg,
          title: this.ordrRcptTitle,
          subtitle: this.ordrRcptSubTitle,
          button_text: this.ordrRcptBtnText,
          quick_reply_thank_you_text: this.ordrRcptQckRpl1,
          quick_reply_more_questions_text: this.ordrRcptQckRpl2,
          quick_reply_unsubscribe_text: this.ordrRcptQckRpl3,
        };

        this.$store.dispatch("updOrdrRcpt", obj).then((response) => {
          console.log(response);
        });
        this.ordrRcptBtnDisabled = false;
      }
    },
    ordrRcptQckRpl2(newVal, oldVal) {
      if (oldVal == "") {
        this.ordrRcptBtnDisabled = true;
      } else if (oldVal != newVal) {
        let obj = {
          active: this.ordrRcptSwitchLive,
          intro_message: this.ordrRcptIntroMsg,
          title: this.ordrRcptTitle,
          subtitle: this.ordrRcptSubTitle,
          button_text: this.ordrRcptBtnText,
          quick_reply_thank_you_text: this.ordrRcptQckRpl1,
          quick_reply_more_questions_text: this.ordrRcptQckRpl2,
          quick_reply_unsubscribe_text: this.ordrRcptQckRpl3,
        };

        this.$store.dispatch("updOrdrRcpt", obj).then((response) => {
          console.log(response);
        });
        this.ordrRcptBtnDisabled = false;
      }
    },
    ordrRcptQckRpl3(newVal, oldVal) {
      if (oldVal == "") {
        this.ordrRcptBtnDisabled = true;
      } else if (oldVal != newVal) {
        let obj = {
          active: this.ordrRcptSwitchLive,
          intro_message: this.ordrRcptIntroMsg,
          title: this.ordrRcptTitle,
          subtitle: this.ordrRcptSubTitle,
          button_text: this.ordrRcptBtnText,
          quick_reply_thank_you_text: this.ordrRcptQckRpl1,
          quick_reply_more_questions_text: this.ordrRcptQckRpl2,
          quick_reply_unsubscribe_text: this.ordrRcptQckRpl3,
        };

        this.$store.dispatch("updOrdrRcpt", obj).then((response) => {
          console.log(response);
        });
        this.ordrRcptBtnDisabled = false;
      }
    },
    // ordrRcptSwitchLive() {
    //   this.ordrRcptBtnDisabled = false;
    // },
  },

  beforeCreate() {
    this.$store.dispatch("getMsg").then((response) => {
      console.log(response);

      this.ordrRcptSwitchLive = this.$store.getters.getOrderReceipt.active;
      this.ordrRcptIntroMsg = this.$store.getters.getOrderReceipt.intro_message;
      this.ordrRcptTitle = this.$store.getters.getOrderReceipt.title;
      this.ordrRcptSubTitle = this.$store.getters.getOrderReceipt.subtitle;
      this.ordrRcptBtnText = this.$store.getters.getOrderReceipt.button_text;
      this.ordrRcptQckRpl1 = this.$store.getters.getOrderReceipt.quick_reply_thank_you_text;
      this.ordrRcptQckRpl2 = this.$store.getters.getOrderReceipt.quick_reply_more_questions_text;
      this.ordrRcptQckRpl3 = this.$store.getters.getOrderReceipt.quick_reply_unsubscribe_text;
      this.ordrRcptBtnDisabled = true;
    });
  },
};
</script>

<style scoped>
.tab-props {
  color: transparent;
}
.tab-item-color-active {
  color: #006aff !important;
  font-weight: bold;
  font-size: 90% !important;
}

.theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) {
  color: #323f4f !important;
  font-weight: bold;
  font-size: 90% !important;
}

.v-date-picker-table .v-btn.v-btn--active {
  border-radius: 0px;
}
.refIcondim {
  transform: scale(0.9);
}
.tab-size {
  transform: scale(0.9);
  transform-origin: 0 0;
}

.msgCount {
  font-size: 120%;
  color: #5686f6;
  font-weight: bolder;
}

.qckRpl {
  font-size: 85%;
}

.qckRplBtn {
  color: #ffffff !important;
}

@media (min-width: 1400px) {
  .refIcondim {
    transform: scale(1.2);
  }
  .tab-size {
    transform: scale(1);
    transform-origin: 0 0;
  }
}
</style>
