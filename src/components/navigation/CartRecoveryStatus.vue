<template>
  <div>
    <div>
      <!-- Add image for cart recovery type depending on recoveryType prop -->

      {{ $t("cartRecoveryStatus." + recoveryType + "CartRecovery") }}
      <span v-if="getCartRecoveryStatus" class="cartRecoveryStatusON">
        {{ $t("cartRecoveryStatus.ON") }}
      </span>
      <span v-else class="cartRecoveryStatusOFF">
        {{ $t("cartRecoveryStatus.OFF") }}
      </span>
    </div>
    <span class="cartRecoveryHowToTurnOn" @click="showStepsCompletedModal">
      {{ $t("cartRecoveryStatus.howToTurnOn") }}
    </span>
  </div>
</template>
<script>
//      this.$store.commit('UPDATE_SET_VARS_POP', this.withEmail)
export default {
  name: "CartRecoveryStatus",
  props: ["recoveryType"],
  data() {
    return {
    };
  },
  computed: {
    getCartRecoveryStatus: function() {
      let fullResponseStepsCompleted = this.$store.getters.getStepsCompleted;
      // this.stepsCompleted = fullResponseStepsCompleted[this.recoveryType+"CartRecoverySteps"];
      // console.log(this.recoveryType + " " + fullResponseStepsCompleted[this.recoveryType+"CartRecovery"]);
      return fullResponseStepsCompleted[this.recoveryType+"CartRecovery"];
    }
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
    setTimeout(() => this.$store.dispatch("getStepsCompleted"), 700)
  }
}
</script>

<style lang="scss" scoped>
.cartRecoveryHowToTurnOn {
  cursor: pointer;
}
.cartRecoveryStatusON {
  font: normal normal bold 12px Poppins;
  letter-spacing: 0px;
}

.cartRecoveryStatusOFF {
  font: normal normal bold 12px Poppins;
  letter-spacing: 0px;
  color: #F25A5A;
}
</style>
