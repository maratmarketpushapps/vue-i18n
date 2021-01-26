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
              <v-img src="@/assets/img/ModalStep/image-install-steps.png" ></v-img>
            </v-col>
          </v-col>
          <v-col cols="7" class="pa-0">
            <v-card class="modal_right_section">
              <v-col cols="11" class="pl-0 py-0">
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
              </v-col>
              <v-card-text class="px-0 pt-0 pb-0 spc_text">
                <div v-if="getIsGdprAffected" class="step_fl fbNotAvailable">{{ $t("settingsPage.fbCard1.isGdprAffected") }}</div>

                <span class="step_fl">{{ $t("ModalStepsCompleted.stepsToComplete") }}</span>
                <v-row>
                  <v-col class="step_part_txt" cols="9">
                    <router-link :to="stepARoute" class="step_part_txt"  @click.native="closeStepsCompletedModal">
                      {{ $t("ModalStepsCompleted.stepIndex1") }}
                      {{ $t("ModalStepsCompleted." + recoveryType + "Instruction1") }}
                    </router-link>

                  </v-col>
                  <v-col v-if="getStep1Done" class="px-0" >
                    <v-btn
                      tile
                      height="24px"
                      class="font_dims pad_resp btn_save "
                      style="font-size:100%; text-transform:none;"
                      outlined
                    >
                      <template left>
                          <v-img src="@/assets/img/ModalStep/icon-check.png" class="mr-1"></v-img>
                      </template>
                      {{ $t("ModalStepsCompleted.done") }}
                    </v-btn>
                  </v-col>
                  <v-col v-else class="px-0 ">
                    <v-btn
                      tile
                      height="24px"
                      class="primary font_not_done pad_resp_nt btn_save ml-0"
                      style="font-size:100%; text-transform:none;"
                      :to="stepARoute"
                      @click.native="closeStepsCompletedModal"
                    >
                      <template left>
                        <v-img src="@/assets/img/ModalStep/icon-check.png" class="mr-1"></v-img>
                      </template>
                      {{ $t("ModalStepsCompleted.notDone") }}
                    </v-btn>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col class="step_part_txt" cols="9">
                    <router-link :to="stepBRoute" class="step_part_txt"  @click.native="closeStepsCompletedModal">
                    {{ $t("ModalStepsCompleted.stepIndex2") }}
                    {{ $t("ModalStepsCompleted." + recoveryType + "Instruction2") }}
                    </router-link>
                  </v-col>
                  <v-col v-if="getStep2Done" class="px-0">
                    <v-btn
                      tile
                      height="24px"
                      class="font_dims pad_resp btn_save "
                      style="font-size:100%; text-transform:none;"
                      outlined
                    >
                      <template left>
                        <v-img src="@/assets/img/ModalStep/icon-check.png" class="mr-1"></v-img>
                      </template>
                      {{ $t("ModalStepsCompleted.done") }}
                    </v-btn>
                  </v-col>
                  <v-col v-else class="px-0 ">
                    <v-btn
                      tile
                      height="24px"
                      class="primary font_not_done pad_resp_nt btn_save ml-0"
                      style="font-size:100%; text-transform:none;"
                      :to="stepBRoute"
                      @click.native="closeStepsCompletedModal"
                    >
                      <template left>
                        <v-img src="@/assets/img/ModalStep/icon-check.png" class="mr-1"></v-img>
                      </template>
                      {{ $t("ModalStepsCompleted.notDone") }}
                    </v-btn>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col class="step_part_txt" cols="9">
                    <router-link :to="stepCRoute" class="step_part_txt"  @click.native="closeStepsCompletedModal">
                    {{ $t("ModalStepsCompleted.stepIndex3") }}
                    {{ $t("ModalStepsCompleted." + recoveryType + "Instruction3") }}
                    </router-link>
                  </v-col>
                  <v-col v-if="getStep3Done" class="px-0">
                    <v-btn
                      tile
                      height="24px"
                      class="font_dims pad_resp btn_save "
                      style="font-size:100%; text-transform:none;"
                      outlined
                    >
                      <template left>
                        <v-img src="@/assets/img/ModalStep/icon-check.png" class="mr-1"></v-img>
                      </template>
                      {{ $t("ModalStepsCompleted.done") }}
                    </v-btn>
                  </v-col>
                  <v-col v-else class="px-0 py-0">
                    <v-btn
                      tile
                      height="24px"
                      class="primary font_not_done pad_resp_nt btn_save ml-0"
                      style="font-size:100%; text-transform:none;"
                      :to="stepCRoute"
                      @click.native="closeStepsCompletedModal"
                    >
                      <template left>
                        <v-img src="@/assets/img/ModalStep/icon-check.png" class="mr-1"></v-img>
                      </template>
                      {{ $t("ModalStepsCompleted.notDone") }}
                    </v-btn>
                  </v-col>
                </v-row>



                <v-row>
<!--                  <a-->
<!--                    :href="getYoutubeLink"-->
<!--                    target="_blank"-->
<!--                    style="text-decoration:underline; color:#323F4F"-->
<!--                    >{{ $t("ModalStepsCompleted.watchVideoButton") }}</a-->
<!--                  >-->
                  <v-col class="py-0">
                    <span  class="step_hint_txt">
                      {{ $t("ModalStepsCompleted.stillHaveQuestions") }}
                    </span>
                    <br>
                    <v-btn
                      tile
                      height="40px"
                      class=" btn_see_video py-5"
                      style="font-size:100%; text-transform:none;"
                      @click.native="toYoutube()"
                    >
                      <template left class="mr-4 pr-4">
                        <v-img src="@/assets/img/ModalStep/icon-play-tutorial.png" class="mr-3"></v-img>
                      </template>
                      {{ $t("ModalStepsCompleted.watchVideoButton") }}
                    </v-btn>
                  </v-col>

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
      return this.recoveryType == 'sms' ? 'https://www.youtube.com/watch?v=OXfKnRDVET4' :
        'https://www.youtube.com/watch?v=OXfKnRDVET4';
    },
    getIsGdprAffected: function() {
      return this.$store.getters.getWidgetsState.is_gdpr_affected &&
        this.recoveryType == 'fb';
    }

  },
  methods: {
    closeStepsCompletedModal: function() {
      let obj = {
        type: this.recoveryType,
        status: false
      };
      this.$store.dispatch("updateCartRecoveryModalShow", obj);
    },
    toYoutube(){

      let obj = {
        type: this.recoveryType,
        status: false
      };
      this.$store.dispatch("updateCartRecoveryModalShow", obj);
      window.open(this.getYoutubeLink)
    }
  },
  mounted() {
  }
}
</script>

<style scoped>
.modal_right_section{
  padding: 52px 25px 38px 51.41px;
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
.spc_text{
  margin-top: 26px !important;
}
.step_fl{
  text-align: left;
  font: normal normal normal 12px/19px Poppins;
  letter-spacing: 0px;
  color: #4E5D6B;
  opacity: 1;
  margin-top: 26px;
}
.step_part_txt{
  text-align: left;
  letter-spacing: 0px;
  color: #4E5D6B !important;
  opacity: 1;
  text-decoration: underline;
  font: normal normal 600 12px/19px Poppins;
}
.step_hint_txt{
  text-align: left;
  font: normal normal normal 12px/19px Poppins;
  letter-spacing: 0px;
  color: #4E5D6B;
}
.font_dims{
  cursor: default !important;
  text-align: center !important;
  font: normal normal 600 8px/29px Poppins !important;
  letter-spacing: 0px !important;
  color: #5686F6 !important;
  opacity: 1 !important;
}
.font_not_done{
  text-align: center !important;
  font: normal normal 600 8px/29px Poppins !important;
  letter-spacing: 0px !important;
  color: #FFFFFF !important;
  opacity: 1 !important;
}
.pad_resp{
  padding-right: 20px !important;
  padding-left: 20px !important;
}
.pad_resp_nt{
  padding-right: 6px !important;
  padding-left: 6px !important;
  margin-left: 12px;
}
.btn_see_video{
  margin-top: 26px !important;
  text-align: center;
  font: normal normal medium 14px/13px Poppins !important;
  letter-spacing: 0px;
  color: #FFFFFF !important;
  background-color: #006AFF !important;
  opacity: 1;
  padding-right: 41px !important;
  padding-left: 31px !important;
  padding-top: 9px !important;
  padding-bottom: 9px !important;
}
.fbNotAvailable {
  color: red;
  margin-bottom: 10px;
}
</style>
