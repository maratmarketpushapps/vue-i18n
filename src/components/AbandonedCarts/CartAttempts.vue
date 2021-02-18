<template>
  <div>
    <v-row justify="end">
      <v-col cols="auto">
        <v-row class="font_dims" justify="end" :class="colorBody == true ? 'txt_red' : '' "> {{ header }}</v-row>
        <v-row class="font_dims" justify="end" v-if="!colorBody">{{ body }}</v-row>
        <v-row class="font_dims txt_red" justify="end" v-if="colorBody" >{{ this.$t("settingsPage.upgradeCard.attemptsLeft") }}</v-row>
      </v-col>
      <v-col cols="auto">
        <abIcon class="abicon-dims" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import abIcon from "@/assets/icons/AbandonedCarts/fb-recovercart-icon-diamond.svg";
export default {
  name: "UpgradeCard",
  components: { abIcon },
  data() {
    return {
      globalApiCallSuccess: false,
      settingsApiCallSuccess: false,
      planApiCallSuccess: false,
      textCartAttemptsLeft:false,
    };
  },
  mounted() {
    this.$store.dispatch("getSubs").then((response) => {
      if (response == "success") {
        this.settingsApiCallSuccess = true;
        this.$store.dispatch("getPlan").then((response) => {
          if (response == "success") {
            this.planApiCallSuccess = true;
          }
        });
      }
    });
    // setTimeout( this.changeStatusText(),9000)


  },
  watch: {
  },
  methods:{
    changeStatusText(){
      // let planDetails = this.getPlanState.find(
      //   (o) => o.planName === this.getSubs.subscription_plan
      // );
      // let recAttempts =
      //   planDetails == undefined ? 0 : planDetails.cart_recovery_attempts;
      // console.log(recAttempts - this.getSubs.consumed_recovery_attempts)
      // console.log(recAttempts)
      // console.log(recAttempts - this.getSubs.consumed_recovery_attempts)
      // if(recAttempts - this.getSubs.consumed_recovery_attempts == 0){
      //   alert('aa')
      //   console.log(this.textCartAttemptsLeft)
      // }else     this.textCartAttemptsLeft = true

    }
  },
  computed: {
    ...mapGetters(["getSubs", "getPlanState"]),
    header() {
      return (
        this.$t("settingsPage.upgradeCard.header1") +
        this.getSubs.subscription_plan +
        this.$t("settingsPage.upgradeCard.header2")
      );
    },
    colorBody(){
      let planDetails = this.getPlanState.find(
        (o) => o.planName === this.getSubs.subscription_plan
      );
      let recAttempts =
        planDetails == undefined ? 0 : planDetails.cart_recovery_attempts;
      return  (recAttempts - this.getSubs.consumed_recovery_attempts == 0 || recAttempts - this.getSubs.consumed_recovery_attempts == -1)
        },
    body() {
      // console.log(
      //   this.getPlanState.find(
      //     (o) => o.planName === this.getSubs.subscription_plan
      //   )
      // );

      let planDetails = this.getPlanState.find(
        (o) => o.planName === this.getSubs.subscription_plan
      );
      let recAttempts =
        planDetails == undefined ? 0 : planDetails.cart_recovery_attempts;

      return (
        recAttempts -
        this.getSubs.consumed_recovery_attempts +
        "/" +
        recAttempts +
        this.$t("settingsPage.upgradeCard.body4")
      )
    },
  },
};
</script>

<style>
.upgheader-text {
  font-size: 110%;
  font-weight: 400;
}
.upgbody-text {
  color: white;
  text-align: center;
  font-size: 70%;
  font-weight: 300;
}

.abicon-dims {
  height: 30px;
  width: 30px;
}
.txt_red{
  color: red;
}

@media (min-width: 1400px) {
  .upgheader-text {
    font-size: 150%;
  }

  .upgbody-text {
    font-size: 100%;
  }

  .abicon-dims {
    height: 40px;
    width: 40px;
  }
}

.btn_font {
  /* font-size: 70% !important; */
  overflow: hidden;
}
</style>
