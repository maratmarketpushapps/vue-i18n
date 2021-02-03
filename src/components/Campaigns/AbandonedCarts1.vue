<template>
  <v-card tile height="auto" class="pl-0 pt-3 pr-0 font_dims">
<!--    <v-row style="height:14%" class="pl-6 " align="center">-->
<!--      <v-col cols="4">-->
<!--        <v-row-->
<!--          class="pl-6 title_message_fb"-->
<!--          style="height: 50%; width:100%"-->
<!--          align="center"-->
<!--          justify="start"-->
<!--        >-->
<!--          {{ $t("campaigns.carts1.headerTxt") }}-->
<!--        </v-row>-->
<!--        <v-row style="height: 40%; width: 100%" justify="start" align="end" class="pl-6 mt-2 ">-->
<!--          <span>-->
<!--               {{ $t("campaigns.sentAfther")}} {{sent_after}}-->
<!--          </span>-->
<!--        </v-row>-->
<!--      </v-col>-->
<!--      <v-col cols="3" class="px-0">-->
<!--        <v-row style="height: 50%; width: 100%" justify="center" align="start">-->
<!--          <span class="msgCount">-->
<!--            {{ getOrdrAbndCrtMsgCnt }}-->
<!--          </span>-->
<!--        </v-row>-->
<!--        <v-row style="height: 40%; width: 100%" justify="center" align="end"  class="mt-2 " :class="$vuetify.breakpoint.width > 1000 ? 'pr-5' : ''">-->
<!--          <span>-->
<!--            {{ $t("campaigns.msgCount") }}-->
<!--          </span>-->
<!--        </v-row>-->
<!--      </v-col>-->
<!--      <v-col cols="3" class="pr-0" >-->
<!--        <v-row style="width: 100%" align="center" :class="cart1Edit ? 'justify-center' : 'justify-center'">-->
<!--          <v-btn-->
<!--            tile-->
<!--            height="35px"-->
<!--            class="font_dims  btn_save"-->
<!--            :class="$vuetify.breakpoint.width  < 1350 && $vuetify.breakpoint.width  > 1249 ? 'px-5' : $vuetify.breakpoint.width < 1250-->
<!--            ? 'px-2' : $vuetify.breakpoint.width < 1100 ? 'px-0' : 'px-10 pad_resp'"-->
<!--            :disabled="svBtnDsbldOrdrAbndCrt"-->
<!--            style="font-size:100%; text-transform:none;"-->
<!--            v-if="cart1Edit"-->
<!--            @click="saveOrdrAbndCrt()"-->
<!--            outlined-->
<!--          >-->
<!--            {{ $t("widgets.svBtn") }}-->
<!--          </v-btn>-->
<!--          <v-btn icon v-if="!cart1Edit" @click="editCart1" >-->
<!--            <iconEdit  />-->
<!--          </v-btn>-->
<!--        </v-row>-->
<!--        <v-row justify="center" style="width: 100%" >-->
<!--          <span-->
<!--            v-if="!cart1Edit"-->
<!--            @click="editCart1"-->
<!--            style="font-size:85%; cursor: pointer;"-->
<!--          >{{ $t("campaigns.carts1.iconTxt") }}</span-->
<!--          >-->
<!--        </v-row>-->
<!--      </v-col>-->
<!--      <v-col class="px-0 d-flex " cols="2" :class="$vuetify.breakpoint.width < 1350 ? 'justify-start' : 'justify-center'">-->
<!--        <v-switch-->
<!--          v-model="ordrAbndCrtSwitchLive"-->
<!--          color="#006AFF"-->
<!--          :disabled="swtchDisabled"-->
<!--          @change="activeStateChng()"-->
<!--          inset-->
<!--        >-->
<!--        </v-switch>-->
<!--      </v-col>-->
<!--    </v-row>-->
    <v-row class="pl-6 ">
      <v-col :cols="$vuetify.breakpoint.width > 1510 ? 5 : 6" class="pr-0">
        <v-row
          class="pl-6 "
          style="height:33%; width:100%;"
          align="center"
          justify="start"
        >
          <h3 class="title_top_size">
            {{ $t("campaigns.carts1.headerTxt") }}
          </h3>
        </v-row>
        <v-row style="height: 33%; width: 100%" justify="start" align="end" class="pl-6 mt-2">
          <span>
          {{ $t("campaigns.sentAfther")}} {{sent_after}}
          </span>
        </v-row>
        <v-row style="height: 34%;width: 100%" justify="start" align="end" class="pl-6 mt-2" :class="!cart1 ? 'pb-12' :''">
          <span class="msgCountUnder">
            {{ $t("campaigns.msgCount") }}:   {{ getOrdrAbndCrtMsgCnt }}
          </span>
        </v-row>
      </v-col>

      <v-col class="px-0 d-flex " cols="1" :class="$vuetify.breakpoint.width < 1350 ? 'justify-start' : 'justify-center'">
        <v-switch
          v-model="ordrAbndCrtSwitchLive"
          color="#006AFF"
          :disabled="swtchDisabled"
          @change="activeStateChng()"
          class="ma-0 pt-0"
          inset
        >
        </v-switch>
      </v-col>

      <v-col  class="d-flex justify-end pr-12">
        <v-btn
          tile
          height="35px"
          class="font_dims  btn_save mt-4"
          :class="$vuetify.breakpoint.width  < 1350 ? 'px-5' : $vuetify.breakpoint.width < 1250
                     ? 'px-2' : $vuetify.breakpoint.width < 1100 ? 'px-0' : 'px-10 pad_resp'"
          :disabled="svBtnDsbldOrdrAbndCrt"
          style="font-size:100%; text-transform:none;"
          v-if="cart1Edit"
          @click="saveOrdrAbndCrt()"
          outlined
        >
          {{ $t("widgets.svBtn") }}
        </v-btn>
        <v-btn
          tile
          height="35px"
          class="font_dims  btn_edit mt-4"
          :class="$vuetify.breakpoint.width  < 1350 ? 'px-5' : $vuetify.breakpoint.width < 1250
                           ? 'px-2' : $vuetify.breakpoint.width < 1100 ? 'px-0' : 'px-6 pad_resp'"
          style="font-size:100%; text-transform:none; color: #4E5D6B !important;"
          v-if="!cart1Edit"
          @click="editCart1()"
          outlined
        >
          <iconEdit style="width: 23px;height: 24px; margin-right: 20px" />
          {{ $t("campaigns.carts1.iconTxt") }}
        </v-btn>
      </v-col>
    </v-row>
    <v-divider style="width:100%" class="pa-0 ma-0"></v-divider>
    <v-expand-transition>
      <v-row
        style="height: auto; width: 100%"
        v-show="cart1Edit"
        class="pl-6 mt-4"
        align="start"
      >
        <v-row style="height:15%; width:100%" class="ml-4 pl-3 pr-3 ">
          <v-col cols="3" class="pl-0 ml-0">
            <v-select
              :label="$t('campaigns.carts1.selectLabel')"
              :items="timeListCart1"
              @change="activeStateChng()"
              v-model="sent_after"
              dense
              style="font-size:110%"
            >
            </v-select>
          </v-col>
          <v-col>
            <v-row class="mt-0">
              <TooltipIcon
                :posRight="true"
                :nudgeBottom="30"
                :nudgeLeft="5"
                :txt="$t('campaigns.carts1.sendAfter')"
                class="infoicon_scale mt-0 pt-0"
                style="top:30%; transform:scale(.85)"
              />
            </v-row>
          </v-col>
        </v-row>
        <v-row style="height:15%; width:100%" class="mt-1 pl-4 pr-3 mb-0">
          <v-text-field
            :label="$t('campaigns.ordrrcpt.introMsg')"
            v-model="ordrAbndCrtIntroMsg"
            @change="activeStateChng()"
            @input="activeStateChng()"
            dense
            style="font-size:110%"
            class=" pb-0 ml-6 mr-9"
            hint="test"
            :persistent-hint="true"
          >
            <template slot="message"
              ><span>
                <span>{{ $t("campaigns.carts1.discountTxt1") }}</span>
                <b>
                  {{ $t("campaigns.carts1.discountTxt2") }}
                </b>
                <span>{{ $t("campaigns.carts1.discountTxt3") }}</span>
              </span></template
            >
          </v-text-field>
        </v-row>
        <v-row style="height:15%; width:100%" class="mt-2 pl-4 pr-3">
          <!-- <v-text-field
            :label="$t('campaigns.ordrrcpt.title')"
            v-model="ordrAbndCrtTitle"
            @change="activeStateChng()"
            @input="activeStateChng()"
            dense
            style="font-size:110%"
            class="mt-5 pb-1 ml-6 mr-9"
          >
          </v-text-field> -->

          <v-text-field
            :label="$t('campaigns.ordrrcpt.btnTxt')"
            v-model="ordrAbndCrtBtnText"
            @change="activeStateChng()"
            @input="activeStateChng()"
            dense
            style="font-size:110%"
            class="mt-5 pb-1 ml-6 mr-9"
          >
          </v-text-field>
        </v-row>

        <!-- <v-row style="height:15%; width:100%" class="pl-4 pr-3">
          <v-col cols="6">
            <v-text-field
              :label="$t('campaigns.ordrrcpt.subTitle')"
              v-model="ordrAbndCrtSubTitle"
              @change="activeStateChng()"
              @input="activeStateChng()"
              dense
              style="font-size:110%"
              class="mt-2 pb-1 ml-3 mr-3"
            >
            </v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              :label="$t('campaigns.ordrrcpt.btnTxt')"
              v-model="ordrAbndCrtBtnText"
              @change="activeStateChng()"
              @input="activeStateChng()"
              dense
              style="font-size:110%"
              class="mt-2 pb-1 ml-3 mr-7"
            >
            </v-text-field>
          </v-col>
        </v-row> -->
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
                :txt="$t('campaigns.infocons.msg5')"
                class="infoicon_scale mt-0 pt-0"
                style="top:30%; transform:scale(.85)"
              />
            </v-row>
            <v-row class="ml-3 mt-4">
              <v-btn
                class="mr-3 qckRplBtn font_dims"
                color="#7DA2F7"
                @click="ovrlyOrdrAbndCrt1()"
                :class="$vuetify.breakpoint.width < 1001 ? 'px-2' : ''"
              >
                {{ ordrAbndCrtQckRpl1 }}
              </v-btn>
              <v-btn
                class="mr-3 qckRplBtn font_dims"
                color="#7DA2F7"
                @click="ovrlyOrdrAbndCrt2()"
                :class="$vuetify.breakpoint.width < 1001 ? 'px-2' : ''"
              >
                {{ ordrAbndCrtQckRpl2 }}
              </v-btn>
              <v-btn
                class="mr-3 qckRplBtn font_dims"
                color="#7DA2F7"
                @click="ovrlyOrdrAbndCrt3()"
                :class="$vuetify.breakpoint.width < 1001 ? 'px-2' : ''"
              >
                {{ ordrAbndCrtQckRpl3 }}
              </v-btn>
            </v-row>
          </v-col>
        </v-row>

        <v-row style="height:10vh; width:100%" class="pl-4 pr-3"> </v-row>
      </v-row>
    </v-expand-transition>
    <v-overlay
      :absolute="absolute"
      :opacity="opacity"
      :value="overlayOrdrAbndCrtQckRpl1"
      :z-index="zIndex"
    >
      <v-card tile light height="40vh" width="30vw" class="pa-1">
        <v-row style="height:10%; width:100%" justify="end" class="mr-4 mt-2">
          <v-icon @click="canclOvrlyOrdrAbndCrt1()">
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
              v-model="ordrAbndCrtQckRplEdit1"
              @change="ordrAbndCrtQckRplEdit1Chng"
              @input="ordrAbndCrtQckRplEdit1Chng"
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
              :disabled="svBtnordrAbndCrtQckRplEdit1"
              @click="svOrdrAbndCrtQckRplEdit1()"
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
      :value="overlayOrdrAbndCrtQckRpl2"
      :z-index="zIndex"
    >
      <v-card tile light height="40vh" width="30vw" class="pa-1">
        <v-row style="height:10%; width:100%" justify="end" class="mr-4 mt-2">
          <v-icon @click="canclOvrlyOrdrAbndCrt2()">
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
              v-model="ordrAbndCrtQckRplEdit2"
              @change="ordrAbndCrtQckRplEdit2Chng"
              @input="ordrAbndCrtQckRplEdit2Chng"
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
              :disabled="svBtnordrAbndCrtQckRplEdit2"
              @click="svOrdrAbndCrtQckRplEdit2()"
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
      :value="overlayOrdrAbndCrtQckRpl3"
      :z-index="zIndex"
    >
      <v-card tile light height="40vh" width="30vw" class="pa-1">
        <v-row style="height:10%; width:100%" justify="end" class="mr-4 mt-2">
          <v-icon @click="canclOvrlyOrdrAbndCrt3()">
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
              v-model="ordrAbndCrtQckRplEdit3"
              @change="ordrAbndCrtQckRplEdit3Chng"
              @input="ordrAbndCrtQckRplEdit3Chng"
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
              :disabled="svBtnordrAbndCrtQckRplEdit3"
              @click="svOrdrAbndCrtQckRplEdit3()"
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
import iconEdit from "@/assets/icons/misc/icon-edit-message.svg";

export default {
  name: "AbandonedCarts1",
  components: { TooltipIcon, iconEdit },
  data() {
    return {
      ordrAbndCrtSwitchLive: false,
      ordrAbndCrtBtnDisabled: true,
      ordrAbndCrtIntroMsg: "",
      sent_after: "",
      ordrAbndCrtTitle: "",
      ordrAbndCrtSubTitle: "",
      ordrAbndCrtBtnText: "",
      ordrAbndCrtQckRpl1: "",
      ordrAbndCrtQckRpl2: "",
      ordrAbndCrtQckRpl3: "",
      overlayOrdrAbndCrtQckRpl1: false,
      ordrAbndCrtQckRplEdit1: "",
      ordrAbndCrtQckRplEdit1Btn: true,
      overlayOrdrAbndCrtQckRpl2: false,
      ordrAbndCrtQckRplEdit2: "",
      ordrAbndCrtQckRplEdit2Btn: true,
      overlayOrdrAbndCrtQckRpl3: false,
      ordrAbndCrtQckRplEdit3: "",
      ordrAbndCrtQckRplEdit3Btn: true,
      absolute: false,
      opacity: 0.46,
      zIndex: 5,
      timeList: [
        "1 hour",
        "2 hour",
        "3 hour",
        "4 hour",
        "5 hour",
        "6 hour",
        "7 hour",
        "8 hour",
        "9 hour",
        "10 hour",
        "11 hour",
        "12 hour",
        "13 hour",
        "14 hour",
        "15 hour",
        "16 hour",
        "17 hour",
        "18 hour",
        "19 hour",
        "20 hour",
        "21 hour",
        "22 hour",
        "23 hour",
        "24 hour",
      ],
    };
  },
  computed: {
    getOrdrAbndCrtMsgCnt() {
      return this.$store.getters.getMsgCounts.sent_count_abandoned_cart_1;
    },
    cart1Edit() {
      return this.$store.getters.getActiveTab == "abndndcrt1" ||
        this.$store.getters.getCart1Active
        ? true
        : false;
    },
    swtchDisabled() {
      return this.$store.getters.getActiveTab == "abndndcrt1" ? false : true;
    },
    svBtnDsbldOrdrAbndCrt() {
      return this.ordrAbndCrtBtnDisabled;
    },
    svBtnordrAbndCrtQckRplEdit1() {
      return this.ordrAbndCrtQckRplEdit1Btn;
    },
    svBtnordrAbndCrtQckRplEdit2() {
      return this.ordrAbndCrtQckRplEdit2Btn;
    },
    svBtnordrAbndCrtQckRplEdit3() {
      return this.ordrAbndCrtQckRplEdit3Btn;
    },
    timeListCart1() {
      return this.timeList.slice(
        0,
        this.timeList.indexOf(
          this.$store.getters.getCarts2.sent_after + " hour"
        )
      );
    },
  },
  methods: {
    saveOrdrAbndCrt() {
      this.$store.dispatch("updIsLoading", true).then(() => {
        let obj = {
          active: this.ordrAbndCrtSwitchLive,
          intro_message: this.ordrAbndCrtIntroMsg,
          title: this.ordrAbndCrtTitle,
          subtitle: this.ordrAbndCrtSubTitle,
          button_text: this.ordrAbndCrtBtnText,
          quick_reply_thank_you_text: this.ordrAbndCrtQckRpl1,
          quick_reply_more_questions_text: this.ordrAbndCrtQckRpl2,
          quick_reply_unsubscribe_text: this.ordrAbndCrtQckRpl3,
          sent_after: Number(this.sent_after.split(" ")[0]),
        };

        this.$store.dispatch("updOrdrAbndCrt", obj).then(() => {
          // console.log(response);
          this.$store.dispatch("setMsg").then(() => {
            // console.log(resp);
            this.ordrAbndCrtBtnDisabled = true;
            this.$store.dispatch("getMsg").then(() => {
              this.$store.dispatch("getStepsCompleted");
              // console.log(response);
              this.$store.dispatch("updIsLoading", false);
            });
          });
        });
      });
    },
    editCart1() {
      this.$store.dispatch("updActiveTab", "abndndcrt1").then(() => {
        this.$store.dispatch("updCart1Active", true);
        // console.log(response);
      });
    },
    saveCart1() {
      this.cart1Edit = false;
    },
    activeStateChng() {
      // this.ordrAbndCrtSwitchLive = !this.ordrAbndCrtSwitchLive;
      let obj = {
        active: this.ordrAbndCrtSwitchLive,
        intro_message: this.ordrAbndCrtIntroMsg,
        title: this.ordrAbndCrtTitle,
        subtitle: this.ordrAbndCrtSubTitle,
        button_text: this.ordrAbndCrtBtnText,
        quick_reply_thank_you_text: this.ordrAbndCrtQckRpl1,
        quick_reply_more_questions_text: this.ordrAbndCrtQckRpl2,
        quick_reply_unsubscribe_text: this.ordrAbndCrtQckRpl3,
        sent_after: Number(this.sent_after.split(" ")[0]),
      };
      this.$store.dispatch("updOrdrAbndCrt", obj).then(() => {
        // console.log(response);
        this.ordrAbndCrtBtnDisabled = false;
      });

      // console.log("new active status" + this.ordrAbndCrtSwitchLive);
    },
    ovrlyOrdrAbndCrt1() {
      this.ordrAbndCrtQckRplEdit1 = this.ordrAbndCrtQckRpl1;
      this.overlayOrdrAbndCrtQckRpl1 = true;
      this.$store.dispatch("updQreplyEdit", true);
    },
    canclOvrlyOrdrAbndCrt1() {
      this.overlayOrdrAbndCrtQckRpl1 = false;
      this.ordrAbndCrtQckRplEdit1Btn = true;
      this.$store.dispatch("updQreplyEdit", false);
    },
    ordrAbndCrtQckRplEdit1Chng() {
      this.ordrAbndCrtQckRplEdit1Btn = false;
    },
    svOrdrAbndCrtQckRplEdit1() {
      this.ordrAbndCrtQckRpl1 = this.ordrAbndCrtQckRplEdit1;
      this.overlayOrdrAbndCrtQckRpl1 = false;
      this.ordrAbndCrtQckRplEdit1Btn = true;
      this.$store.dispatch("updQreplyEdit", false);
    },
    ovrlyOrdrAbndCrt2() {
      this.ordrAbndCrtQckRplEdit2 = this.ordrAbndCrtQckRpl2;
      this.overlayOrdrAbndCrtQckRpl2 = true;
      this.$store.dispatch("updQreplyEdit", true);
    },
    canclOvrlyOrdrAbndCrt2() {
      this.overlayOrdrAbndCrtQckRpl2 = false;
      this.ordrAbndCrtQckRplEdit2Btn = true;
      this.$store.dispatch("updQreplyEdit", false);
    },
    ordrAbndCrtQckRplEdit2Chng() {
      this.ordrAbndCrtQckRplEdit2Btn = false;
    },
    svOrdrAbndCrtQckRplEdit2() {
      this.ordrAbndCrtQckRpl2 = this.ordrAbndCrtQckRplEdit2;
      this.overlayOrdrAbndCrtQckRpl2 = false;
      this.ordrAbndCrtQckRplEdit2Btn = true;
      this.$store.dispatch("updQreplyEdit", false);
    },

    ovrlyOrdrAbndCrt3() {
      this.ordrAbndCrtQckRplEdit3 = this.ordrAbndCrtQckRpl3;
      this.overlayOrdrAbndCrtQckRpl3 = true;
      this.$store.dispatch("updQreplyEdit", true);
    },
    canclOvrlyOrdrAbndCrt3() {
      this.overlayOrdrAbndCrtQckRpl3 = false;
      this.ordrAbndCrtQckRplEdit3Btn = true;
      this.$store.dispatch("updQreplyEdit", false);
    },
    ordrAbndCrtQckRplEdit3Chng() {
      this.ordrAbndCrtQckRplEdit3Btn = false;
    },
    svOrdrAbndCrtQckRplEdit3() {
      this.ordrAbndCrtQckRpl3 = this.ordrAbndCrtQckRplEdit3;
      this.overlayOrdrAbndCrtQckRpl3 = false;
      this.ordrAbndCrtQckRplEdit3Btn = true;
      this.$store.dispatch("updQreplyEdit", false);
    },
  },
  watch: {
    ordrAbndCrtQckRpl1(newVal, oldVal) {
      if (oldVal == "") {
        this.ordrAbndCrtBtnDisabled = true;
      } else if (oldVal != newVal) {
        let obj = {
          active: this.ordrAbndCrtSwitchLive,
          intro_message: this.ordrAbndCrtIntroMsg,
          title: this.ordrAbndCrtTitle,
          subtitle: this.ordrAbndCrtSubTitle,
          button_text: this.ordrAbndCrtBtnText,
          quick_reply_thank_you_text: this.ordrAbndCrtQckRpl1,
          quick_reply_more_questions_text: this.ordrAbndCrtQckRpl2,
          quick_reply_unsubscribe_text: this.ordrAbndCrtQckRpl3,
          sent_after: Number(this.sent_after.split(" ")[0]),
        };

        this.$store.dispatch("updOrdrAbndCrt", obj).then(() => {
          // console.log(response);
        });

        this.ordrAbndCrtBtnDisabled = false;
      }
    },
    ordrAbndCrtQckRpl2(newVal, oldVal) {
      if (oldVal == "") {
        this.ordrAbndCrtBtnDisabled = true;
      } else if (oldVal != newVal) {
        let obj = {
          active: this.ordrAbndCrtSwitchLive,
          intro_message: this.ordrAbndCrtIntroMsg,
          title: this.ordrAbndCrtTitle,
          subtitle: this.ordrAbndCrtSubTitle,
          button_text: this.ordrAbndCrtBtnText,
          quick_reply_thank_you_text: this.ordrAbndCrtQckRpl1,
          quick_reply_more_questions_text: this.ordrAbndCrtQckRpl2,
          quick_reply_unsubscribe_text: this.ordrAbndCrtQckRpl3,
          sent_after: Number(this.sent_after.split(" ")[0]),
        };

        this.$store.dispatch("updOrdrAbndCrt", obj).then(() => {
          // console.log(response);
        });
        this.ordrAbndCrtBtnDisabled = false;
      }
    },
    ordrAbndCrtQckRpl3(newVal, oldVal) {
      if (oldVal == "") {
        this.ordrAbndCrtBtnDisabled = true;
      } else if (oldVal != newVal) {
        let obj = {
          active: this.ordrAbndCrtSwitchLive,
          intro_message: this.ordrAbndCrtIntroMsg,
          title: this.ordrAbndCrtTitle,
          subtitle: this.ordrAbndCrtSubTitle,
          button_text: this.ordrAbndCrtBtnText,
          quick_reply_thank_you_text: this.ordrAbndCrtQckRpl1,
          quick_reply_more_questions_text: this.ordrAbndCrtQckRpl2,
          quick_reply_unsubscribe_text: this.ordrAbndCrtQckRpl3,
          sent_after: Number(this.sent_after.split(" ")[0]),
        };

        this.$store.dispatch("updOrdrAbndCrt", obj).then(() => {
          // console.log(response);
        });

        this.ordrAbndCrtBtnDisabled = false;
      }
    },
    // ordrAbndCrtSwitchLive() {
    //   this.ordrAbndCrtBtnDisabled = false;
    // },
  },

  beforeCreate() {
    this.$store.dispatch("updIsLoading", true).then(() => {
      this.$store.dispatch("getMsg").then(() => {
        // console.log(response);

        this.sent_after = this.$store.getters.getCarts1.sent_after + " hour";
        this.ordrAbndCrtSwitchLive = this.$store.getters.getCarts1.active;
        this.ordrAbndCrtIntroMsg = this.$store.getters.getCarts1.intro_message;
        this.ordrAbndCrtTitle = this.$store.getters.getCarts1.title;
        this.ordrAbndCrtSubTitle = this.$store.getters.getCarts1.subtitle;
        this.ordrAbndCrtBtnText = this.$store.getters.getCarts1.button_text;
        this.ordrAbndCrtQckRpl1 = this.$store.getters.getCarts1.quick_reply_thank_you_text;
        this.ordrAbndCrtQckRpl2 = this.$store.getters.getCarts1.quick_reply_more_questions_text;
        this.ordrAbndCrtQckRpl3 = this.$store.getters.getCarts1.quick_reply_unsubscribe_text;
        this.ordrAbndCrtBtnDisabled = true;
        this.$store.dispatch("updIsLoading", false);
      });
    });
  },
};
</script>

<style scoped>
.msgCountUnder{
  font: normal normal 600 14px/23px Poppins;
  letter-spacing: 0px;
  color: #4E5D6B;
}
.btn_edit{
  text-align: center;
  font: normal normal 600 12px/29px Poppins;
  letter-spacing: 0px;
  color: #4E5D6B;
  opacity: 1;
}
.tab-props {
  color: transparent;
}
.qckRplBtn{
  font: normal normal 300 10px/16px Poppins  !important;
}
.title_message_fb{
  text-align: left !important;
  font: normal normal 600 14px/18px Poppins !important;
  letter-spacing: 0px !important;
  color: #323F4F !important;
  opacity: 1 !important;
}
.btn_save{
  text-align: center;
  font: normal normal 600 12px/29px Poppins;
  letter-spacing: 0px;
  color: #5686F6;
  opacity: 1;
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
@media (max-width: 1349px) {

  .pad_resp{
    padding-right:50px !important;
    padding-left: 50px  !important;
  }
}
</style>
<style>
.v-messages__message {
  line-height: 20px;
  color: black;
  font-size: 90%;
}
</style>
