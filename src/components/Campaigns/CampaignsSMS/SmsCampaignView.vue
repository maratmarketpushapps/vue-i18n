<template>
  <v-col cols="12" class="my-0 py-0 ">

    <v-card
      class="cv_font_dims br_rad"
    >
      <v-row class="px-0 mx-0 py-0 my-0 ">
        <v-img src="@/assets/img/Campaigns/image-header-phone.png"></v-img>
      </v-row>

      <v-col cols="12" class="px-0 mx-0 mb-1">

      </v-col>
      <v-col cols="12 mb-0 pb-0 mt-10 pt-12" class="d-flex justify-center">Thursday 20:13</v-col>
      <v-row
        class=""
        @click="toggleDialog()"
      >
        <v-col cols="10" class="mx-8">
          <v-container
            fluid
            style="background-color:#F0F1F2;height:auto;border-radius: 15px 15px 15px 15px; "
          >

            <v-row style="height:79%; width:100%">
              <v-col>
                <span>{{ msgTxt }}</span>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
      <v-row class="px-0 mx-0 py-0 my-0 bg_trans" >
        <v-img src="@/assets/img/Campaigns/input-image.png" ></v-img>
      </v-row>

    </v-card>
  </v-col>

</template>

<script>
// import inputCapit from "@/assets/icons/AbandonedCarts/input-image-sms.svg";

export default {
  name: "CampaignView",
  // components: { inputCapit },
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
        let messageText = this.$store.getters.smsgetCarts1.intro_message
        String.prototype.allReplace = function(obj) {
          var retStr = this;
          for (var x in obj) {
            retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
          }
          return retStr;
        };
        messageText = messageText.allReplace({'{{StorePhoneNumber}}': this.$store.getters.getAccountInfo.phone_number,
          '{{BusinessName}}':this.$store.state.settingsVars.bussiness_name,'{{CheckOutTotal}}':'{{CheckOutTotal}}',
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
        messageText = messageText.allReplace({'{{StorePhoneNumber}}': this.$store.getters.getAccountInfo.phone_number,
          '{{BusinessName}}':this.$store.state.settingsVars.bussiness_name,'{{CheckOutTotal}}':'{{CheckOutTotal}}',
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
