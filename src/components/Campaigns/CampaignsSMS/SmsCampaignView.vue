<template>
  <v-card
    style="border-radius: 15px 15px 15px 15px; height:auto;"
    class="cv_font_dims"
  >
    <v-row style=" user-select: none;" @click="toggleDialog()">
      <v-col>
        <v-img :src="headerImg"></v-img>
      </v-col>
    </v-row>
    <v-row
      style="margin-left:3%; margin-top:4%;margin-bottom:3%"
      @click="toggleDialog()"
    >
      <v-col cols="2">
        <v-container
          style="border-radius: 100px 100px 100px 100px; background-color:#4E5D6B; height:6.75vh;width: 6.75vh; transform:scale(1.1) "
        >
          <v-img :src="logoImg"></v-img>
        </v-container>
      </v-col>
      <v-col cols="9">
        <v-container
          fluid
          style="background-color:#F0F1F2;height:auto;border-radius: 15px 15px 15px 15px; "
        >
          <v-row style="height:79%; width:100%">
            <v-col>
              <span>{{ msgTxt }}</span></v-col
            >
          </v-row>
          <!-- <v-row
            style="height:23%; width:110%; background-color:#FFFFFF; border-radius: 0px 0px 15px 15px;border-color:black !important; border-width: 10px; "
          >
            BTTN
          </v-row> -->

          <v-row style="height:40px;" align="end" class="pb-0 mb-0">
            <v-btn
              outlined
              style="height:100%; width:100%; background-color:#FFFFFF; border-radius: 0px 0px 15px 15px; border-color: #F0F1F2; font-size:110%"
              class="ml-0 mt-9 cv_font_dims"
              color="#5686F6"
            >
              {{ btnTxt }}
            </v-btn>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <v-row
      style="margin-left:3%; margin-top:7%; margin-right:3%;margin-bottom:2%"
      @click="toggleDialog()"
      justify="center"
      align="center"
      class="pa-2"
    >

      <v-btn
        outlined
        width="auto"
        style="border-color: #5686F6; text-transform:none;margin-bottom: 8px"
        color="#5686F6"
        class="cv_font_dims"
        height="30px"
      >
        {{ qreply1Txt }}
      </v-btn>

      <v-btn
        outlined
        width="auto"
        style="border-color: #5686F6; text-transform:none;margin-bottom: 8px"
        color="#5686F6"
        class="cv_font_dims ml-4 mr-4"
        height="30px"
      >
        {{ qreply2Txt }}
      </v-btn>

      <v-btn
        outlined
        width="auto"
        style="border-color: #5686F6; text-transform:none;margin-bottom: 8px"
        color="#5686F6"
        class="cv_font_dims"
        height="30px"
      >
        {{ qreply3Txt }}
      </v-btn>
    </v-row>

    <v-row
      style="margin-left:0%; margin-top:4%; margin-right:0%"
      @click="toggleDialog()"
    >
      <v-img :src="footerImg"></v-img>
    </v-row>
    <v-row style="height:5vh"> </v-row>
    <v-overlay
      absolute
      :value="dialogShow"
      style="border-radius: 15px 15px 15px 15px;"
      class="pa-10"
      z-index="0.5"
    >
      <v-card color="white" tile class="pb-4 pt-0" @click="toggleDialog()">
        <v-row justify="end" class="pr-4 pt-2">
          <v-btn x-small icon @click="toggleDialog()">
            <v-icon color="black">
              mdi-window-close
            </v-icon>
          </v-btn>
        </v-row>
        <v-card-text style="color:black ;text-align: center; font-size:12px">
          {{ $t("campaigns.modalText1") }}
        </v-card-text>
        <v-card-text style="color:black ; text-align: center; font-size:12px">
          {{ $t("campaigns.modalText2") }}
        </v-card-text>
      </v-card>
    </v-overlay>
  </v-card>
</template>

<script>
export default {
  name: "CampaignView",
  data() {
    return {
      headerImg: require("@/assets/img/campaign-view-header.png"),
      logoImg: require("@/assets/img/campaign-view-page-logo.png"),
      footerImg: require("@/assets/img/campaign-view-footer.png"),
      dialog: false,
    };
  },
  methods: {
    toggleDialog() {
      // this.dialog = !this.dialog;
    },
  },
  computed: {
    dialogShow() {
      return this.dialog && !this.$store.getters.getQreplyEdit;
    },
    msgTxt() {
      if (this.$store.getters.getActiveTab == "abndndcrt1") {
        let messageText = this.$store.getters.getCarts1.intro_message
        String.prototype.allReplace = function(obj) {
          var retStr = this;
          for (var x in obj) {
            retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
          }
          return retStr;
        };
        messageText = messageText.allReplace({'{{StorePhoneNumber}}': this.$store.getters.getAccountInfo.phone_number,
          '{{BusinessName}}':this.$store.state.settingsVars.bussiness_name,'{{CheckOutTotal}}':'CheckOutTotal',
          '{{CheckOutLink}}':'CheckOutLink','{{write STOP to unsubscribe}}':'write STOP to unsubscribe'})
        return messageText;
      } else if (this.$store.getters.getActiveTab == "abndndcrt2") {
        return this.$store.getters.getCarts2.intro_message;
      } else if (this.$store.getters.getActiveTab == "ordrrcpt") {
        return this.$store.getters.getOrderReceipt.intro_message;
      } else {
        return this.$store.getters.getOrderShipped.intro_message;
      }
    },
    btnTxt() {
      if (this.$store.getters.getActiveTab == "abndndcrt1") {
        return this.$store.getters.getCarts1.button_text;
      } else if (this.$store.getters.getActiveTab == "abndndcrt2") {
        return this.$store.getters.getCarts2.button_text;
      } else if (this.$store.getters.getActiveTab == "ordrrcpt") {
        return this.$store.getters.getOrderReceipt.button_text;
      } else {
        return this.$store.getters.getOrderShipped.button_text;
      }
    },
    qreply1Txt() {
      if (this.$store.getters.getActiveTab == "abndndcrt1") {
        return this.$store.getters.getCarts1.quick_reply_thank_you_text;
      } else if (this.$store.getters.getActiveTab == "abndndcrt2") {
        return this.$store.getters.getCarts2.quick_reply_thank_you_text;
      } else if (this.$store.getters.getActiveTab == "ordrrcpt") {
        return this.$store.getters.getOrderReceipt.quick_reply_thank_you_text;
      } else {
        return this.$store.getters.getOrderShipped.quick_reply_thank_you_text;
      }
    },
    qreply2Txt() {
      if (this.$store.getters.getActiveTab == "abndndcrt1") {
        return this.$store.getters.getCarts1.quick_reply_more_questions_text;
      } else if (this.$store.getters.getActiveTab == "abndndcrt2") {
        return this.$store.getters.getCarts2.quick_reply_more_questions_text;
      } else if (this.$store.getters.getActiveTab == "ordrrcpt") {
        return this.$store.getters.getOrderReceipt
          .quick_reply_more_questions_text;
      } else {
        return this.$store.getters.getOrderShipped
          .quick_reply_more_questions_text;
      }
    },
    qreply3Txt() {
      if (this.$store.getters.getActiveTab == "abndndcrt1") {
        return this.$store.getters.getCarts1.quick_reply_unsubscribe_text;
      } else if (this.$store.getters.getActiveTab == "abndndcrt2") {
        return this.$store.getters.getCarts2.quick_reply_unsubscribe_text;
      } else if (this.$store.getters.getActiveTab == "ordrrcpt") {
        return this.$store.getters.getOrderReceipt.quick_reply_unsubscribe_text;
      } else {
        return this.$store.getters.getOrderShipped.quick_reply_unsubscribe_text;
      }
    },
  },
};
</script>

<style scoped>
.cv_font_dims {
  font-size: 72% !important;
  overflow: hidden;
}
@media (min-width: 1500px) {
  .cv_font_dims {
    font-size: 85% !important;
  }
}
.card-props {
  background-color: #ffffff;
}
</style>
