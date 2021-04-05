<template>
  <v-col cols="12" class="my-0 py-0 ">
    <v-card
      class="cv_font_dims br_rad"
    >
      <v-row class="px-0 mx-0 py-0 my-0" @click="toggleDialog()">
        <v-img src="@/assets/img/whatsappCampaigns/header.png"></v-img>
      </v-row>

      <v-overlay
        absolute
        :value="dialog"
        style="border-radius: 25px 25px 0 0;"
        class="pa-10 "
        z-index="1"
      >
        <v-card color="white" tile class="pb-4 ovr_spc ovr_pd">
          <v-row justify="end" class="pr-5 pt-2">
            <v-btn x-small icon @click="ovrlyClose()">
              <v-icon color="#323F4F"  >
                mdi-window-close
              </v-icon>
            </v-btn>
          </v-row>
          <v-card-text
            style="color:#323F4F ;text-align: center; font-size:14px ; padding-left: 15px ; padding-right: 15px"
          >
            {{ $t("campaigns.smsModalText1") }}
          </v-card-text>
          <v-card-text
            style="color:#323F4F ; text-align: center; font-size:14px; padding-left: 15px ; padding-right: 15px"
          >
            {{ $t("campaigns.smsModalText2") }}
          </v-card-text>
        </v-card>
      </v-overlay>
<!--      <v-col cols="12" class="px-0 mx-0 mb-1"   @click="toggleDialog()">-->

<!--      </v-col>-->

      <v-row
        class="d-flex justify-end ml-10"
        style="margin-top:80px"
        @click="toggleDialog()"
      >
        <v-col cols="11" class=" pa-0">
          <v-container
            fluid
            style="background-color:#F0F1F2;height:auto;border-radius: 15px 15px 15px 15px; "
            class="pa-0"
          >
            <v-row style="height:79%; width:100%">
              <v-col class="px-0">
                <v-img src="@/assets/img/whatsappCampaigns/message-box.png" height="185px" width="82%" class="pl-3 pt-6 pr-9 pb-10">
                 Hi <b>CustomerName</b>, the payment for your order of <b>order of</b>from <b>BusinessName</b> is
                  still pending. Click on the link to complete the payment and conﬁrm your order:
                  <a href="#">https://www.marketpushapps.com/cart</a>
                  Chat with us at: <a href="#">wa.me/+18559305560</a>
                </v-img>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
      <v-row class="px-0 mx-0 py-0 my-0 bg_trans"   @click="toggleDialog()">
        <v-img src="@/assets/img/whatsappCampaigns/input-image.png" ></v-img>
      </v-row>

    </v-card>
  </v-col>

</template>

<script>

export default {
  name: "whatsAppCampaignView",
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    toggleDialog() {
      this.dialog = !this.dialog;
    },
    ovrlyClose() {
      this.dialog = !this.dialog;
    },
  },
  computed: {
    dialogShow() {
      return this.dialog && !this.$store.getters.getQreplyEdit;
    },
    msgTxt() {
      if (this.$store.getters.getActiveTab == "abndndcrt1") {
        let messageText = this.$store.getters.smsgetCarts1.intro_message
        String.prototype.allReplace = function(obj) {
          var retStr = this;
          for (var x in obj) {
            retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
          }
          return retStr;
        };
        let storePhoneNumberPlaceholder = this.$store.getters.getAccountInfo.business_phone_number;
        if (storePhoneNumberPlaceholder == ""
          || storePhoneNumberPlaceholder == undefined) {
          storePhoneNumberPlaceholder = "{{AddYourPhoneInSettingsPage}}";
        }
        messageText = messageText.allReplace({'{{StorePhoneNumber}}': storePhoneNumberPlaceholder,
          '{{BusinessName}}':this.$store.getters.getAccountInfo.business_name,'{{CheckOutTotal}}':'{{CheckOutTotal}}',
          '{{CheckOutLink}}':'{{CheckOutLink}}'})
        return messageText;
      } else if (this.$store.getters.getActiveTab == "abndndcrt2") {
        let messageText = this.$store.getters.smsgetCarts2.intro_message
        String.prototype.allReplace = function(obj) {
          var retStr = this;
          for (var x in obj) {
            retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
          }
          return retStr;
        };
        let storePhoneNumberPlaceholder = this.$store.getters.getAccountInfo.business_phone_number;
        if (storePhoneNumberPlaceholder == ""
          || storePhoneNumberPlaceholder == undefined) {
          storePhoneNumberPlaceholder = "{{AddYourPhoneInSettingsPage}}";
        }
        messageText = messageText.allReplace({'{{StorePhoneNumber}}': storePhoneNumberPlaceholder,
          '{{BusinessName}}':this.$store.getters.getAccountInfo.business_name,'{{CheckOutTotal}}':'{{CheckOutTotal}}',
          '{{CheckOutLink}}':'{{CheckOutLink}}'})
        return messageText;
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
.ovr_spc {
  padding-right: 15px;
  padding-left:15px;
  color: #323f4f;
  font-size: 14px;
}
.cv_font_dims {
  font-size: 72% !important;
  overflow: hidden;
}
.bg_trans{
  background-color: rgb(230 231 232) !important;
}
.br_rad{
  border-top-left-radius: 20px !important;
  border-top-right-radius: 20px !important;
  border-bottom-left-radius: 20px !important;
  border-bottom-right-radius: 20px !important;

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
