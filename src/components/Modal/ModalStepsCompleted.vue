<template>
  <div class="stepsCompletedDialog">
    <v-row justify="center">
      <v-dialog
        v-model="showStepsCompletedDialog"
        persistent
        max-width="832px"
      >
        <v-row class="pa-0 ml-0">
          <v-col
            cols="5"
            class="pa-0 image_modal_color"
          >
            <v-col class="image_modal_join">
              <v-img src="@/assets/img/image_modal_join.png"></v-img>
            </v-col>
          </v-col>
          <v-col cols="7" class="pa-0">
            <v-card class="modal_right_section">
              <v-card-title class="pa-0">
                <v-fab-transition >
                  <v-btn
                    class="btn_transparent"
                    dark
                    absolute
                    top
                    right
                    @click="closeStepsCompletedModal"
                  >
                    <v-img src="@/assets/img/icon-close.png" class="close_img">
                    </v-img>
                  </v-btn>
                </v-fab-transition>
                <span class="headline headline_title"
                >{{ $t("ModalStepsCompleted." + recoveryType + "Title") }}</span>
              </v-card-title>
              <v-card-text class="px-0 pb-0">

                <v-row>
                  <v-col>
                    {{ $t("ModalStepsCompleted.stepIndex1") }}
                    {{ $t("ModalStepsCompleted." + recoveryType + "Instruction1") }}
                  </v-col>
                  <v-col>
                    <v-col v-if="getStep1Done">
                      {{ $t("ModalStepsCompleted.done") }}
                    </v-col>
                    <v-col v-else>
                      <router-link
                        :to="stepARoute"
                        @click.native="closeStepsCompletedModal"
                        class="step-item-font"
                        >
                      {{ $t("ModalStepsCompleted.notDone") }}
                      </router-link>
                    </v-col>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    {{ $t("ModalStepsCompleted.stepIndex2") }}
                    {{ $t("ModalStepsCompleted." + recoveryType + "Instruction2") }}
                  </v-col>
                  <v-col v-if="getStep2Done">
                    {{ $t("ModalStepsCompleted.done") }}
                  </v-col>
                  <v-col v-else>
                    <router-link
                      :to="stepBRoute"
                      @click.native="closeStepsCompletedModal"
                      class="step-item-font"
                      >
                    {{ $t("ModalStepsCompleted.notDone") }}
                    </router-link>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    {{ $t("ModalStepsCompleted.stepIndex3") }}
                    {{ $t("ModalStepsCompleted." + recoveryType + "Instruction3") }}
                  </v-col>
                  <v-col v-if="getStep3Done">
                    {{ $t("ModalStepsCompleted.done") }}
                  </v-col>
                  <v-col v-else>
                    <router-link
                      :to="stepCRoute"
                      @click.native="closeStepsCompletedModal"
                      class="step-item-font"
                      >
                    {{ $t("ModalStepsCompleted.notDone") }}
                    </router-link>
                  </v-col>
                </v-row>

                <v-row>{{ $t("ModalStepsCompleted.stillHaveQuestions") }}</v-row>

                <v-row>
                  <a
                    :href="getYoutubeLink"
                    target="_blank"
                    style="text-decoration:underline; color:#323F4F"
                    >{{ $t("ModalStepsCompleted.watchVideoButton") }}</a
                  >
                </v-row>

              </v-card-text>

              <v-col class="px-0">

              </v-col>
            </v-card>
          </v-col>
        </v-row>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
//@click="stepsCompletedDialog = false"
//import { mapGetters } from "vuex";
export default {
  name: "ModalStepsCompleted",
  props: ["recoveryType", "stepARoute", "stepBRoute", "stepCRoute"],
  data: () => ({
  }),
  computed: {
    showStepsCompletedDialog: function() {
      let fullResponseStepsCompleted = this.$store.getters.getStepsCompleted;
      return fullResponseStepsCompleted[this.recoveryType + 'ShowCartRecoveryStepsModal'];
    },
    getStep1Done: function() {
      let fullResponseStepsCompleted = this.$store.getters.getStepsCompleted;
      return fullResponseStepsCompleted[this.recoveryType + 'CartRecoverySteps'].step1;
    },
    getStep2Done: function() {
      let fullResponseStepsCompleted = this.$store.getters.getStepsCompleted;
      return fullResponseStepsCompleted[this.recoveryType + 'CartRecoverySteps'].step2;
    },
    getStep3Done: function() {
      let fullResponseStepsCompleted = this.$store.getters.getStepsCompleted;
      return fullResponseStepsCompleted[this.recoveryType + 'CartRecoverySteps'].step3;
    },
    getYoutubeLink: function() {
      return this.recoveryType == 'sms' ? 'https://youtu.be/8zSKMZKK2Rw' :
        'https://youtu.be/8zSKMZKK2Rw';
    }
  },
  methods: {
    closeStepsCompletedModal: function() {
      let obj = {
        type: this.recoveryType,
        status: false
      };
      this.$store.dispatch("updateCartRecoveryModalShow", obj);
    }
  },
  mounted() {
  }
}
</script>

<style scoped>
.modal_right_section{
  padding: 52px 33.41px 38px 33.41px;
}
.headline_title{
  text-align: left;
  font: normal normal normal 22px/28px Poppins;
  letter-spacing: 0px;
  color: #323F4F;
  opacity: 1;
}
.image_modal_color{
  background-color:#006AFF;
}
.modal_btn{
  background: #006AFF 0% 0% no-repeat padding-box;
  padding: 9px 58px !important;
  border: none;
  border-radius: 2px;
  opacity: 1;
  text-align: center;
  font: normal normal medium 14px/13px Poppins;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
}
.image_modal_text_color{
  color: #4E5D6B;
}
.image_modal_join{
  padding: 40.97px 23.34px 56.28px 24px !important;
}
.link_term_privace{
  text-align: left;
  text-decoration: underline;
  font: normal normal medium 12px/19px Poppins;
  letter-spacing: 0px;
  color: #4E5D6B;
  cursor: pointer;
}
.card_action{
  margin:33px 0px 16px 0px;
}
.btn_transparent{
  background: transparent !important;
  box-shadow:none !important;
  font-weight: 200;
  min-width: 10px !important;
  right: 0px !important;
  top: 10px !important;
}
.close_img{
  width: 10px !important;
  height: 9px !important;
  background-size: cover;
}
.wdgt_font_dims{
  font-size: 95% !important;
  overflow: hidden;
  text-transform:none; font-size:70% !important;
  background-color:rgba(0, 0, 0, 0.12) !important;
  color: rgba(0, 0, 0, 0.26) !important;
  cursor: default !important;
  box-shadow: none !important;
  pointer-events: none !important;
  padding: 9px 58px !important;
  border: none;
  border-radius: 2px;
  opacity: 1;
  text-align: center;
  font: normal normal medium 14px/13px Poppins;
}
</style>
