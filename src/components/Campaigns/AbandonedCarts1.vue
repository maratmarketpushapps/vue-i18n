<template>
  <v-card tile height="auto" class="pl-0 pt-3 pr-0 font_dims">
    <v-row style="height:14%" class="pl-6" align="center">
      <v-col cols="4">
        <v-row
          class="pl-6"
          style="height: 100%; width:100%"
          align="center"
          justify="start"
        >
          <h3>{{ $t("campaigns.carts1.headerTxt") }}</h3>
        </v-row>
      </v-col>
      <v-col cols="3">
        <v-row style="height: 50%; width: 100%" justify="center" align="start">
          <span class="msgCount">
            {{ getOrdrAbndCrtMsgCnt }}
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
            :disabled="svBtnDsbldOrdrAbndCrt"
            style="font-size:100%; text-transform:none;"
            v-if="cart1Edit"
            @click="saveCart1"
          >
            {{ $t("widgets.svBtn") }}
          </v-btn>
          <v-btn icon v-if="!cart1Edit" @click="editCart1">
            <v-icon>
              mdi-square-edit-outline
            </v-icon>
          </v-btn>
        </v-row>
      </v-col>
      <v-col>
        <v-row style="width:100%" align="center" justify="center">
          <v-switch
            v-model="ordrAbndCrtSwitchLive"
            color="#006AFF"
            :disabled="swtchDisabled"
            @change="activeStateChng()"
          >
          </v-switch>
        </v-row>
      </v-col>
    </v-row>
    <v-divider style="width:100%" class="pa-0 ma-0"></v-divider>
    <v-expand-transition>
      <v-row
        style="height: 59vh; width: 100%"
        v-show="cart1Edit"
        class="pl-6 pr-9 mt-9"
        align="start"
      >
        <v-row style="height:15%; width:100%" class="pl-4 pr-3"> 

        </v-row>
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

        <v-row style="height:20%; width:100%" class="pl-4 pr-3"> </v-row>
      </v-row>
    </v-expand-transition>
  </v-card>
</template>

<script>
// import TooltipIcon from "@/components/svgIcons/TooltipIcon.vue";

export default {
  name: "AbandonedCarts1",
  //   components: { TooltipIcon },
  data() {
    return {
      ordrAbndCrtSwitchLive: false,
      cart1Edit: false,
      ordrAbndCrtBtnDisabled: true,
      timeList:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
    };
  },
  computed: {
    getOrdrAbndCrtMsgCnt() {
      return this.$store.getters.getMsgCounts.sent_count_order_receipt;
    },
    swtchDisabled() {
      return !this.cart1Edit;
    },
    svBtnDsbldOrdrAbndCrt() {
      return this.ordrAbndCrtBtnDisabled;
    },
  },
  methods: {
    saveOrdrAbndCrt() {
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
          });
        });
      });
    },
    editCart1() {
      this.cart1Edit = true;
    },
    saveCart1() {
      this.cart1Edit = false;
    },
    activeStateChng() {
      console.log("old active status" + this.ordrAbndCrtSwitchLive);
      // this.ordrAbndCrtSwitchLive = !this.ordrAbndCrtSwitchLive;
      this.ordrAbndCrtBtnDisabled = false;
      console.log("new active status" + this.ordrAbndCrtSwitchLive);
    },
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
