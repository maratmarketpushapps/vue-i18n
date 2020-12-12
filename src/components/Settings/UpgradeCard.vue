<template>
  <v-card
    tile
    height="100%"
    width="97%"
    class="pa-0 ma-0 "
    style="justify:center; align:center"
  >
    <v-img
      :src="upgImg"
      class="pa-0"
      height="100%"
      style="justify:center; align:center"
    >
      <v-row style="height:100%;" align="center" class="px-4">
        <v-col>
          <v-row
            width="100%"
            justify="center"
            align="center"
            class="pt-2 mt-0 pb-0"
          >
            <span class="upgheader-text white--text">{{ header }}</span>
          </v-row>
          <v-row width="100%" justify="center" align="center" class="pt-3">
            <v-col>
              <p class="upgbody-text">
                {{ body }}
              </p>
            </v-col>
          </v-row>
          <v-row justify="center" class="pt-0">
            <v-btn
              tile
              height="40px"
              class="primary btnfonts_dims"
              width="25%"
              v-show="showBtn"
              style="font-size:100%"
              :href="upgrdUrl"
              target="_blank"
            >
              {{ $t("settingsPage.upgradeCard.buttonText") }}
            </v-btn></v-row
          >
        </v-col>
      </v-row>
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
    this.$store.dispatch("updIsLoading", true).then(() => {
      this.$store.dispatch("getSubs").then((response) => {
        if (response == "success") {
          this.settingsApiCallSuccess = true;
          this.$store.dispatch("getPlan").then((response) => {
            if (response == "success") {
              this.$store.dispatch("updIsLoading", false);
              this.planApiCallSuccess = true;
            }
          });
        }
      });
    });
  },
  computed: {
    ...mapGetters(["getSubs", "getPlanState", "getInstanceId"]),
    header() {
      return (
        this.$t("settingsPage.upgradeCard.header1") +
        this.getSubs.subscription_plan +
        this.$t("settingsPage.upgradeCard.header2")
      );
    },
    upgrdUrl() {
      return `https://www.wix.com/apps/upgrade/1c15809f-0715-427d-969d-3f0f3939418f?appInstanceId=${this.getInstanceId}`;
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
        this.header +
        this.$t("settingsPage.upgradeCard.body1") +
        this.getSubs.subscription_plan +
        this.$t("settingsPage.upgradeCard.body2") +
        recAttempts +
        this.$t("settingsPage.upgradeCard.body3") +
        this.getSubs.consumed_recovery_attempts +
        "/" +
        recAttempts +
        this.$t("settingsPage.upgradeCard.body4") +
        this.upgTxt
      );
    },
    showBtn() {
      return this.getSubs.subscription_plan === "Mogul" ? false : true;
    },
    upgTxt() {
      return this.getSubs.subscription_plan === "Mogul"
        ? ""
        : this.$t("settingsPage.upgradeCard.body5");
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

@media (min-width: 1400px) {
  .upgheader-text {
    font-size: 150%;
  }

  .upgbody-text {
    font-size: 100%;
  }
}

.btn_font {
  /* font-size: 70% !important; */
  overflow: hidden;
}
</style>
