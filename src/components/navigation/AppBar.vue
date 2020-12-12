<template>
  <v-app-bar
    elevation="4"
    flat
    height="100vh"
    class="appbar_background  text--bottom"
    align-content="center"
    fixed
    style="z-index:1.5"
  >
    <v-row style="height:100% !important" class="pb-0 mb-0">
      <v-col cols="1"><v-spacer></v-spacer></v-col>
      <!-- Stepper component -->
      <v-col cols="8" class="pb-0">
        <v-stepper class="stepper" :value="step" v-if="!allstepsComplete">
          <v-stepper-header class="stepperhead">
            <!-- Step 1 -->
            <v-stepper-step
              step="1"
              :complete="step1Complete"
              class="step-item"
            >
              <router-link
                to="/settings"
                @click.native="step = 1"
                class="step-item-font"
                >{{ $t("navbar.appbar.step1") }}
              </router-link>
            </v-stepper-step>

            <v-divider class="divider"> </v-divider>

            <!-- Step 2 -->
            <v-stepper-step
              step="2"
              :complete="step2Complete"
              class="step-item"
            >
              <router-link
                v-if="step1Complete"
                to="/campaigns"
                @click.native="step = 2"
                class="step-item-font"
                >{{ $t("navbar.appbar.step2") }}
              </router-link>
              <router-link
                v-else
                to="/campaigns"
                tag="button"
                disabled
                class="step-item-font"
                >{{ $t("navbar.appbar.step2") }}
              </router-link>
            </v-stepper-step>

            <v-divider class="divider"></v-divider>
            <!-- Step 3 -->
            <v-stepper-step
              step="3"
              :complete="step3Complete"
              class="step-item"
            >
              <router-link
                v-if="step2Complete"
                to="/widgets"
                @click.native="step = 3"
                class="step-item-font"
                >{{ $t("navbar.appbar.step3") }}
              </router-link>
              <router-link
                v-else
                to="/widgets"
                tag="button"
                disabled
                class="step-item-font"
                >{{ $t("navbar.appbar.step3") }}
              </router-link>
            </v-stepper-step>
          </v-stepper-header>
        </v-stepper></v-col
      >
      <v-col cols="1">
        <v-row align="center" class="ml-0" v-if="!allstepsComplete">
          <v-tooltip
            :bottom="true"
            open-on-click
            nudge-top="10"
            nudge-right="100"
            content-class="tooltip_color"
          >
            <template v-slot:activator="{ on }">
              <v-btn
                icon
                tile
                href="https://youtu.be/8zSKMZKK2Rw"
                target="_blank"
                v-on="on"
              >
                <v-img
                  :src="playImg"
                  height="3vw"
                  width="2vw"
                  style="transform: scale(0.8)"
                  class="mt-0"
                >
                </v-img>
              </v-btn>
            </template>
            <span class="tooltip_text" tile>{{
              $t("navbar.appbar.vidIconTxt")
            }}</span>
          </v-tooltip>
        </v-row>
      </v-col>

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
// import iconPlay from "@/assets/icons/misc/icon-play.svg";
export default {
  name: "AppBar",
  // components: {
  //   iconPlay,
  // },
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
