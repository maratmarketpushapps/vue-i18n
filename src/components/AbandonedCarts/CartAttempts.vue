<template>
  <div>
    <v-row justify="end">
      <v-col cols="auto">
        <v-row class="font_dims" justify="end"> {{ header }}</v-row>
        <v-row class="font_dims" justify="end">{{ body }}</v-row>
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
      );
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
