<template>
  <v-app-bar
    elevation="4"
    flat

    class="appbar_background  text--bottom"
    align-content="center"
    fixed
    style="z-index:1.5;height: 100%"
  >
    <v-row style="height:100% !important" class="pb-0 mb-0">

      <v-col>
        <CartRecoveryStatus recoveryType="sms" />
      </v-col>
      <v-col>
        <CartRecoveryStatus recoveryType="fb" />
      </v-col>

      <ModalStepsCompleted
        recoveryType="sms"
        stepARoute="/settings"
        stepBRoute="/campaigns-sms"
        stepCRoute="/widgets"
      />
      <ModalStepsCompleted
        recoveryType="fb"
        stepARoute="/settings"
        stepBRoute="/campaigns-facebook"
        stepCRoute="/widgets"
      />

      <!-- Upgrade button component -->
      <v-col cols="2" class="pl-8 mb-2"
        ><v-btn
          tile
          elevation="1"
          outlined
          class="appbar_btn_background white--text button-dims mt-0"
          v-show="showUpgrade"
          :href="upgrdUrl"
          target="_blank"
        >
          {{ $t("navbar.appbar.buttonUpgrade") }}
        </v-btn></v-col
      >
    </v-row>
  </v-app-bar>
</template>

<script>
import { mapGetters } from "vuex";
import CartRecoveryStatus from "@/components/navigation/CartRecoveryStatus.vue";
import ModalStepsCompleted from "@/components/Modal/ModalStepsCompleted.vue";

export default {
  name: "AppBar",
  components: {
    CartRecoveryStatus,
    ModalStepsCompleted
  },
  data() {
    return {
      step: 1,
      showAlert: true,
      playImg: require("@/assets/img/icon-play.png"),
    };
  },
  methods: {
    setStep(step) {
      this.step = step;
    },

    step1Click() {
      this.step = 1;
      this.$store.dispatch("updateHover", "").then(() => {
        this.$store.dispatch("updateClick", "Settings");
      });
    },
    step2Click() {
      this.step = 2;
      this.$store.dispatch("updateHover", "").then(() => {
        this.$store.dispatch("updateClick", "Campaigns").then(() => {
          this.$store.dispatch("updActiveTab", "abndndcrt1").then(() => {
            this.$store.dispatch("updCart1Active", true);
            // console.log(response);
          });
        });
      });
    },
    step3Click() {
      this.step = 3;
      this.$store.dispatch("updateHover", "").then(() => {
        this.$store.dispatch("updateClick", "Widgets");
      });
    },
  },
  computed: {
    ...mapGetters(["getInstanceId"]),
    step1Complete() {
      return this.$store.getters.getStep1Complete;
    },
    step2Complete() {
      return this.$store.getters.getStep2Complete;
    },
    step3Complete() {
      return this.$store.getters.getStep3Complete;
    },
    allstepsComplete() {
      return (
        this.$store.getters.getStep1Complete &&
        this.$store.getters.getStep2Complete &&
        this.$store.getters.getStep3Complete
      );
    },
    showUpgrade() {
      return this.$store.getters.getSubs.subscription_plan == "Mogul"
        ? false
        : true;
    },
    upgrdUrl() {
      return `https://www.wix.com/apps/upgrade/1c15809f-0715-427d-969d-3f0f3939418f?appInstanceId=${this.getInstanceId}`;
    },
  },
  beforeMount() {
    this.$store.dispatch("getMsg").then(() => {
      // console.log(response);
      this.$store.dispatch("getSettings").then(() => {
        this.$store.dispatch("getWidgets");
        // this.$store.dispatch("getStepsCompleted");
      });
    });
  },
};
</script>

<style>
.stepper {
  box-shadow: none;
  height: 7vh !important;
  align-content: center !important;
  width: 65vw !important;
}
.stepperhead {
  box-shadow: none;
  height: 7vh !important;
  align-content: center;
}

.divider {
  color: rgb(5, 5, 5);
}

a {
  text-decoration: none;
}

.step-item {
  align-content: center !important;
}

.step-item-font {
  font-size: 65%;
  word-wrap: initial;
}

.button-dims {
  height: 60% !important;
  width: 80% !important;
  font-size: 60% !important;
  position: relative;
}

.pad_fix{
  padding: 0px 24px !important;
}

@media (min-width: 1400px) {
  .step-item-font {
    font-size: 90%;
  }

  .button-dims {
    height: 70% !important;
    width: 70% !important;
    font-size: 80% !important;
    position: relative;
  }
}
</style>

<style lang="css" scoped>
.v-stepper__step{
  padding: 0px 24px !important;
}
</style>
