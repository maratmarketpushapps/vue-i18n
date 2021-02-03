<template>
  <v-card tile height="auto" class="pl-0 pt-3 pr-0 font_dims sms_camp_parent">
    <v-row class="pl-6 ">
      <v-col :cols="$vuetify.breakpoint.width > 1510 ? 5 : 6" class="pr-0 pb-0">
        <v-row
          class="pl-6 "
          style="height:33%; width:100%;"
          align="center"
          justify="start"
        >
          <h3 class="title_top_size">{{ $t("campaigns.smscarts1.headerTxt") }}</h3>
        </v-row>
        <v-row style="height: 19%; width: 100%" justify="start" align="center" class="pl-6 pt-0">
          <span>
            {{ $t("campaigns.sentAfther")}} {{sent_after}}
          </span>
        </v-row>
        <v-row style="height: 24%;width: 100%" justify="start" align="center" class="pl-6 pt-0 pb-12" >
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
            class="ma-0 "
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
    <v-divider ></v-divider>
    <v-expand-transition>
      <v-row
        style="height: auto; width: 100%"
        v-show="cart1Edit"
        class="pl-6 pr-0 mt-9 med_no_spc"
        align="start"
      >
        <v-row style=" width:100%" class="ml-4 pl-3 pr-3  py-0 my-0">
          <v-col cols="3" class="pl-0 ml-0  py-0 my-0">
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
          <v-col class=" py-0 my-0">
            <v-row class="mt-0  py-0 my-0">
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

        <v-row style=" width:100%" class="ml-4 pl-3 pr-3  py-0 my-0">
          <v-col cols="12" class="pl-0 ml-0  py-0 my-0">
            <span class="smsNightTimeHint">
              {{ $t("campaigns.smsNotSendNightTime")}}
            </span>
          </v-col>
        </v-row>

        <v-row style=" width:100%" class="ml-4 pl-3 pr-3  py-0 my-0">
          <v-col class=" py-0 my-0 px-0">
            <v-row style=" width:100%" align="center" class="py-0 my-0 pr-0">
              <v-col :cols="$vuetify.breakpoint.md ? 6 : $vuetify.breakpoint.sm ? 7 : 5" class="pl-0 ml-3 pr-0 py-0 my-0 d-flex justify-content-between">
                <span class=" pb-1  mr-0 qckRpl av_short_code " :class="$vuetify.breakpoint.width < 1500 ? 'pb-0' : ''">
                  {{ $t("campaigns.smsordrrcpt.svashortcod") }}
                </span>
                <TooltipIcon
                  :posRight="true"
                  :nudgeBottom="30"
                  :nudgeLeft="5"
                  :txt="$t('campaigns.infocons.placeholders')"
                  class="infoicon_scale mt-0 pt-0  ml-3"
                  style="top:80%; transform:scale(.85)"
                />
              </v-col>
              <v-col class=" py-0 my-0 pl-0">
                <v-row class="mt-0  py-0 my-0 pl-0">

                </v-row>
              </v-col>
            </v-row>
            <v-row class="mx-0 px-0  py-0 my-0">
              <v-btn
                class="mr-3 qckRplBtn font_dims txt-up btn_sup btnsps"
                color="#7DA2F7"
                @click="putbussName()"
              >
                {{$t("campaigns.btn.BusName")}}
              </v-btn>
              <router-link  to="/settings" class="dbd  btnsps">
                <iconEdit
                  class="mt-1 pt-0 mr-3 ml-0 px-0 "
                  to="/settings"
                />
              </router-link>
              <v-btn
                class="mr-3 qckRplBtn font_dims txt-up btn_sup btnsps"
                color="#7DA2F7"
                @click="putCheckOutTotal"
              >
                {{$t("campaigns.btn.CheckOutTotal")}}
              </v-btn>

              <v-btn
                class="mr-3 qckRplBtn font_dims txt-up btn_sup btnsps"
                color="#7DA2F7"
                @click="putCheckOutLink"
              >
                {{$t("campaigns.btn.CheckOutLink")}}
              </v-btn>

              <v-btn
                class="mr-3 qckRplBtn font_dims txt-up btn_sup btnsps"
                color="#7DA2F7"
                @click="putNumberPhone()"
              >
                {{$t("campaigns.btn.StorePhoneNumber")}}
              </v-btn>
              <router-link  to="/settings" class="dbd btnsps">
                  <iconEdit
                    class="mt-1 pt-0 mr-3 ml-0 px-0"
                  />
              </router-link>
            </v-row>
          </v-col>
        </v-row>

        <v-row class="pl-4 pr-3 mb-0 sms_msg_textarea" style="margin-top: 33px">
          <span v-if="reqMandFields" style="color: red" class="ml-6">Mandatory fields to be present in the SMS Message </span>
          <span v-if="maxCharRule" style="color: red" class="ml-6">characters must be 250 or less </span>
          <v-textarea
            :label="$t('campaigns.smsordrrcpt.introMsg')"
            v-model="ordrAbndCrtIntroMsg"
            @change="activeStateChng()"
            @input="activeStateChng()"
            dense
            class="mt-3 pb-0 ml-6 mr-9"
            rows="3"
            hint="test"
            :persistent-hint="true"
            counter
            maxlength="250"
            :rules=" [v => v.length <= 250 || 'Max 250 characters']"
          >
            <template slot="message"
              >
              <span>
                <span>{{ $t("campaigns.smscarts1.discountTxt1") }}</span>
              </span>
            </template>
            <template v-slot:label >
                  <span >{{$t('campaigns.smsordrrcpt.introMsg')}}</span>
                  <span v-if="ordrAbndCrtIntroMsg.length > 4" style="position: absolute;right: 28px;">{{ordrAbndCrtIntroMsg.length}}/</span>
                  <span v-if="ordrAbndCrtIntroMsg.length > 4" style="position: absolute;right: 0px;">250</span>
            </template>
          </v-textarea>
        </v-row>
        <v-col class="pl-4 pr-3 mb-0 ml-1 mt-1" cols="12">
          <v-btn
            class="ma-2 btnAbon"
            outlined
            color="indigo"
            @click="putOPtOut()"
          >
            {{$t("campaigns.btn.AddOptOut")}}
          </v-btn>
        </v-col>
        <v-row style="height:19vh; width:100%" class="pl-4 pr-3"> </v-row>
      </v-row>
    </v-expand-transition>

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
      reqMandFields:false,
      phoneNumber:"",
      bussName:"",
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
      maxCharRule:false,
    };
  },
  watch:{
    ordrAbndCrtIntroMsg(){
      // let itemtext = this.ordrAbndCrtIntroMsg.length()
      // console.log(itemtext)
      //   if(itemtext >250){
      //     this.maxCharRule = true
      //   }else this.maxCharRule = false

    }
  },
  computed: {
    getOrdrAbndCrtMsgCnt() {
      return this.$store.getters.getMsgCountsSms.sms_sent_count_abandoned_cart_1;
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
    putNumberPhone(){
      this.ordrAbndCrtIntroMsg = this.ordrAbndCrtIntroMsg + ' '+ '{{StorePhoneNumber}}'
      this.activeStateChng()
    },
    putbussName(){
      this.ordrAbndCrtIntroMsg = this.ordrAbndCrtIntroMsg + ' '+ '{{BusinessName}}'
      this.activeStateChng()
    },
    putCheckOutTotal(){
      this.ordrAbndCrtIntroMsg = this.ordrAbndCrtIntroMsg + ' '+ '{{CheckOutTotal}}'
      this.activeStateChng()
    },
    putCheckOutLink(){
      this.ordrAbndCrtIntroMsg = this.ordrAbndCrtIntroMsg + ' '+ '{{CheckOutLink}}'
      this.activeStateChng()
    },
    putOPtOut(){
      this.ordrAbndCrtIntroMsg = this.ordrAbndCrtIntroMsg + ' '+ 'write STOP to unsubscribe'
      this.activeStateChng()
    },
    saveOrdrAbndCrt() {
      if(this.ordrAbndCrtIntroMsg.includes('{{BusinessName}}') && this.ordrAbndCrtIntroMsg.includes('{{CheckOutLink}}')) {
        this.$store.dispatch("updIsLoading", true).then(() => {
          let obj = {
            active: this.ordrAbndCrtSwitchLive,
            intro_message: this.ordrAbndCrtIntroMsg,
            sent_after: Number(this.sent_after.split(" ")[0]),
          };

          this.$store.dispatch("smsUpdOrdrAbndCrt", obj).then(() => {
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
      }else this.reqMandFields = true
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
      this.reqMandFields = false
      // this.ordrAbndCrtSwitchLive = !this.ordrAbndCrtSwitchLive;
      let obj = {
        active: this.ordrAbndCrtSwitchLive,
        intro_message: this.ordrAbndCrtIntroMsg,
        title: this.ordrAbndCrtTitle,
        subtitle: this.ordrAbndCrtSubTitle,
        button_text: this.ordrAbndCrtBtnText,
        sent_after: Number(this.sent_after.split(" ")[0]),
      };
      this.$store.dispatch("smsUpdOrdrAbndCrt", obj).then(() => {
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

  created() {
    this.bussName = this.$store.state.settingsVars.business_name;
    this.phoneNumber = this.$store.getters.getAccountInfo.business_phone_number;
  },
  beforeCreate() {
    this.$store.dispatch("updIsLoading", true).then(() => {
      this.$store.dispatch("getMsg").then(() => {
        // console.log(response);
        this.sent_after = this.$store.state.msgVars.sms_abandoned_cart_1.sent_after + " hour";
        this.ordrAbndCrtSwitchLive = this.$store.getters.smsgetCarts1.active;
        this.ordrAbndCrtIntroMsg = this.$store.getters.smsgetCarts1.intro_message;
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
.smsNightTimeHint {
  font: italic normal normal 10px/11px Arial;
  letter-spacing: 0px;
  color: #323F4F;
  opacity: 1;
}

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
.txt-up{
  text-transform: none !important;
}
.v-messages__message {
  line-height: 20px;
  color: black;
  font-size: 90%;
}
.btnAbon{
  text-align: center;
  font: normal normal 600 12px/29px Poppins;
  letter-spacing: 0px;
  color: #5686F6 !important;
  opacity: 1;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 2px solid #5686F6;
  border-radius: 2px;
  opacity: 1;
}
.btn_save{
  text-align: center;
  font: normal normal 600 12px/29px Poppins;
  letter-spacing: 0px;
  color: #5686F6;
  opacity: 1;
}
.btn_edit{
  text-align: center;
  font: normal normal 600 12px/29px Poppins;
  letter-spacing: 0px;
  color: #4E5D6B;
  opacity: 1;
  border:2px solid #4E5D6B;
}
.av_short_code{
  text-align: left;
  font: normal normal normal 12px/19px Poppins;
  letter-spacing: 0px;
  color: #4E5D6B;
  opacity: 1;
  margin-top: 7px !important;
}
.btn_sup{
  text-align: center;
  font: normal normal 300 10px/16px Poppins !Important;
  letter-spacing: 0px !Important;
  color: #FFFFFF !Important;
  opacity: 1;
}
/*.dbd svg path{*/
/*  fill: black !important;*/
/*}*/
.dbd svg{
  margin-top: 10px !important;
}
.title_top_size{
  font: normal normal 600 14px/18px Poppins !important;
}
@media (max-width: 1500px) {
.av_short_code{
  margin-top: 12px !important;
}
}
@media (max-width: 1479px) {
  .btn_sup{
    padding: 0px 7px !important;
  }
}

@media (max-width: 1349px) {
  .btn_sup{
    padding: 0px 7px !important;
    text-align: center;
    font: normal normal 200 8px/12px Poppins !Important;
    letter-spacing: 0px !Important;
    color: #FFFFFF !Important;
    opacity: 1;
  }
  .btnsps{
    margin-top: 8px !important;
  }
  .pad_resp{
    /*padding-right:50px !important;*/
    /*padding-left: 50px  !important;*/
  }
  .resp_short_code{
   line-height: 200%;
  }
  .short_code_ic_toolt{
    padding-bottom: 19px !important;
  }
  .av_short_code{
    padding-bottom: 0px !important;
  }
}
@media (max-width: 1151px) {
  .btn_sup{
    padding: 0px 2px !important;
    margin-right: 4px !important;
    text-align: center;
    font: normal normal 100 8px/12px Poppins !Important;
    letter-spacing: 0px !Important;
    color: #FFFFFF !Important;
    opacity: 1;
  }
  .med_no_spc{
    padding-right: 0px !important;
  }
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
<style>
.sms_msg_textarea .v-label{
  display: block !important;
  width: 127% !important;
}
.sms_camp_parent  .v-text-field__details{
  height: 0px !important;
  min-height: 0px !important;
}
</style>