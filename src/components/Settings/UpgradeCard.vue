<template>
  <v-card tile height="330" width="97%" class="pa-0 ma-0">
    <v-img :src="upgImg" class="pa-0" height="100%">
      <v-container class="pa-8">
        <v-row width="100%" justify="center" align="center" class="pt-5">
          <span class="upgheader-text white--text">{{ header }}</span>
        </v-row>
        <v-row width="100%" justify="center" align="center" class="pt-3">
          <v-col>
            <p class="upgbody-text">
              {{ body }}
            </p>
          </v-col>
        </v-row>
        <v-row justify="center" class="pt-3">
          <v-btn tile large class="primary" width="30%">
            {{ $t("settingsPage.upgradeCard.buttonText") }}
          </v-btn></v-row
        >
      </v-container>
    </v-img>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "UpgradeCard",
  data() {
    return {
      upgImg: require("@/assets/img/background-upgrade-card.png"),
      globalApiCallSuccess: false,
      settingsApiCallSuccess: false,
      planApiCallSuccess: false,
    };
  },
  mounted() {
    this.$store.dispatch("getSettings").then((response) => {
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
    ...mapGetters(["getPricingPlan", "getSettingsState", "getPlanState"]),
    header() {
      return (
        this.$t("settingsPage.upgradeCard.header1") +
        this.getPricingPlan +
        this.$t("settingsPage.upgradeCard.header2")
      );
    },
    body() {
      console.log(
        this.getPlanState.find((o) => o.planName === this.getPricingPlan)
      );
      let planDetails = this.getPlanState.find(
        (o) => o.planName === this.getPricingPlan
      );
      let recAttempts =
        planDetails == undefined ? 0 : planDetails.cart_recovery_attempts;
      return (
        this.header +
        this.$t("settingsPage.upgradeCard.body1") +
        this.getPricingPlan +
        this.$t("settingsPage.upgradeCard.body2") +
        recAttempts +
        this.$t("settingsPage.upgradeCard.body3") +
        this.getSettingsState.cart_recovery_attempts_done +
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
  font-size: x-large;
  font: Regular 24px/40px Poppins;
}
.upgbody-text {
  color: white;
  text-align: center;
  font-size: medium;
  letter-spacing: 0px;
  opacity: 1;
}


</style>
