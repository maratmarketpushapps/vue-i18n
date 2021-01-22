
<template>
  <v-col class="py-0 " style="heigh:72px !important;">
    <v-list three-line class="py-0 " >
      <template >
        <v-list-item >
          <v-list-item-avatar class="item_title_spc">
            <v-img v-if="typeRecovery == 'fb'" src="@/assets/img/appBar/fb_icon@2x.png" width="35px" class="pt-4"></v-img>
            <v-img v-if="typeRecovery == 'sms'" src="@/assets/img/appBar/sms_icon@2x.png" width="35px"></v-img>
          </v-list-item-avatar>

          <v-list-item-content class="txt_posit">
            <v-list-item-title >  <span class="cart_rec_txt">{{ $t("cartRecoveryStatus." + recoveryType + "CartRecovery") }}</span>
              <span v-if="getCartRecoveryStatus" class="cartRecoveryStatusON">
                        {{ $t("cartRecoveryStatus.ON") }}
              </span>
              <span class="red_off cartRecoveryStatusOFF" v-else >{{ " " +  $t("cartRecoveryStatus.OFF") }}</span></v-list-item-title>
            <v-list-item-subtitle :class="typeRecovery == 'fb' ? 'txt_sub_fb' : 'txt_sub'">
              <span class="trn_on_txt cartRecoveryHowToTurnOn" @click="showStepsCompletedModal">
              {{ $t("cartRecoveryStatus.howToTurnOn") }}
              </span>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-col>
</template>
<script>
//      this.$store.commit('UPDATE_SET_VARS_POP', this.withEmail)
export default {
  name: "CartRecoveryStatus",
  props: ["recoveryType"],
  data:() => ({
    typeRecovery:''
  }),
  computed: {
    getCartRecoveryStatus: function() {
      let fullResponseStepsCompleted = this.$store.getters.getStepsCompleted;
      return fullResponseStepsCompleted[this.recoveryType+"CartRecovery"];
    }
  },
  mounted() {
    this.typeRecovery =  this.recoveryType
  },
  methods: {
    showStepsCompletedModal: function() {
      let obj = {
        type: this.recoveryType,
        status: true
      };
      this.$store.dispatch("updateCartRecoveryModalShow", obj);
    }
  },
  beforeMount() {
    setTimeout(() => this.$store.dispatch("getStepsCompleted"), 1000)
  }
}
</script>

<style lang="scss" scoped>
.cartRecoveryHowToTurnOn {
  cursor: pointer;
  text-align: center;
  text-decoration: underline;
  font-size: 12px !important;
  line-height: 19px !Important;
  font-weight: normal;
  font-family: Poppins;
  letter-spacing: 0px;
  color: #323F4F;
  opacity: 1;
}
.cartRecoveryStatusON {
  text-align: center;
  font: normal normal bold 12px/19px Poppins;
  letter-spacing: 0px;
  color: #39D989;
}
.cartRecoveryStatusOFF {
  font: normal normal bold 12px Poppins;
  letter-spacing: 0px;
  color: #F25A5A;
}
.red_off{
  color: #F25A5A;
  text-align: center;
  font: normal normal bold 12px/19px Poppins;
  letter-spacing: 0px;
  color: #F25A5A;
}
.cart_rec_txt{
  text-align: center;
  font: normal normal bold 12px/19px Poppins;
  letter-spacing: 0px;
  color:#323F4F
}
.trn_on_txt{
  text-align: center;
  text-decoration: underline;
  font: normal normal medium 12px/19px Poppins;
  letter-spacing: 0px;
  color: #323F4F;
  opacity: 1;
  cursor: pointer;
}
.item_title_spc{
  margin-top: 30px !important;
  margin-right: 10px !important;
}
.txt_posit{
align-items:end;
padding: 20px 0 10px 0;
}
.txt_sub{
  margin-left: 19px ;
}
.txt_sub_fb{
  margin-left: 40px;
}
</style>
