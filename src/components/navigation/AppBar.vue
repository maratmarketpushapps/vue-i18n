<template>
  <div>
    <v-row fluid class="pl-10">
      <!-- App Bar Component -->
      <v-app-bar
        elevation="4"
        flat
        height="80px"
        class="appbar_background pr-10 text--bottom"
        align-content="center"
        fixed
      >
        <v-spacer></v-spacer>
        <!-- Stepper component -->
        <v-stepper class="stepper" :value="step">
          <v-stepper-header class="stepperhead">
            <!-- Step 1 -->
            <v-stepper-step step="1" :complete="step1Complete">
              <router-link
                to="/"
                @click.native="
                  step = 1;
                  step1Complete = true;
                "
                >{{ $t("navbar.appbar.step1") }}
              </router-link>
            </v-stepper-step>

            <v-divider class="divider"></v-divider>

            <!-- Step 2 -->
            <v-stepper-step step="2" :complete="step2Complete">
              <router-link
                v-if="step1Complete"
                to="/dashboard"
                @click.native="
                  step = 2;
                  step2Complete = true;
                "
                >{{ $t("navbar.appbar.step2") }}
              </router-link>
              <router-link v-else to="/dashboard" tag="button" disabled
                >{{ $t("navbar.appbar.step2") }}
              </router-link>
            </v-stepper-step>

            <v-divider class="divider"></v-divider>
            <!-- Step 3 -->
            <v-stepper-step step="3" :complete="step3Complete">
              <router-link
                v-if="step2Complete"
                to="/about"
                @click.native="
                  step = 3;
                  step3Complete = true;
                "
                >{{ $t("navbar.appbar.step2") }}
              </router-link>
              <router-link v-else to="/about" tag="button" disabled
                >{{ $t("navbar.appbar.step2") }}
              </router-link>
            </v-stepper-step>
          </v-stepper-header>
        </v-stepper>

        <v-spacer></v-spacer>
        <!-- Upgrade button component -->
        <v-btn
          tile
          elevation="1"
          outlined
          class="appbar_btn_background white--text"
          v-show="showUpgrade"
        >
          {{ $t("navbar.appbar.buttonUpgrade") }}
        </v-btn>
      </v-app-bar>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "AppBar",
  data() {
    return {
      step: 1,
      step1Complete: false,
      step2Complete: false,
      step3Complete: false,
    };
  },
  methods: {
    setStep(step) {
      this.step = step;
    },
  },
  computed: {
    showUpgrade() {
      return this.$store.getters.getPricingPlan == "Mogul" ? false : true;
    },
  },
};
</script>

<style>
.stepper {
  height: 80px;
  box-shadow: none;
}
.stepperhead {
  height: 150px;
  box-shadow: none;
}

.divider {
  color: rgb(5, 5, 5);
  width: 90px;
  height: 5px;
}

a {
  text-decoration: none;
}
</style>
