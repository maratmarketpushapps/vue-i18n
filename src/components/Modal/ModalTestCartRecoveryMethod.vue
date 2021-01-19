<template>
  <div class="popupWindow">
    <v-row justify="center">
      <v-dialog
        v-model="showRecoveryTestModal"
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
                    @click="showRecoveryTestModal = false"
                  >
                    <v-img src="@/assets/img/icon-close.png" class="close_img"></v-img>
                  </v-btn>
                </v-fab-transition>
                <span class="headline headline_title"
                >{{ $t("ModalTestRecovery.setupSuccessful" + recoveryType) }}</span>
              </v-card-title>
              <v-card-text class="px-0 pb-0">

              </v-card-text>
              <v-card-actions class="pa-0 card_action">
                <v-col  justify="left" class="pa-0">
                  <v-btn
                    color="#006aff"
                    dark
                    :class="btnStatus ? 'btn wdgt_font_dims':'btn image_modal_color modal_btn' "
                    @click="updAccInfo()"
                  >
                    {{$t('ModalTestRecovery.openYourWebsite')}}
                  </v-btn>
                </v-col>
              </v-card-actions>

            </v-card>
          </v-col>
        </v-row>
      </v-dialog>
    </v-row>
  </div>
<!--
  <v-overlay
    :absolute="absolute"
    :opacity="opacity"
    :value="true"
    :z-index="zIndex"
  >
    <v-card tile light height="400px" width="35vw" class=" font_dims">
      <v-row style="height:4%; width:100%" justify="end" class="mt-4">
        <v-btn icon small>
          <v-icon @click="canclOvrlyStepComp()">
            mdi-window-close
          </v-icon>
        </v-btn>
      </v-row>
      <v-row
        style="height:20%; width:100%"
        justify="center"
        align="center"
        class="mt-1 ml-2"
      >
        <iconSuccess class="sccssSvgStyle" />
      </v-row>
      <v-row style="height:15%; width:100%" class="mr-0 mt-2">
        <v-col cols="12">
          <v-row style="width:100%" justify="center" class="ml-4">
            <h3 style="color:#4E5D6B; font-size:150%">
              {{ $t("navbar.appbar.allStepsCompHeader") }}
            </h3>
          </v-row>
        </v-col>
      </v-row>
      <v-row
        style="height:15%; width:100%"
        justify="center"
        align="center"
        class="ma-2 pr-2"
      >
        <v-col>
          <v-row
            style="width:98%; text-align:center"
            justify="center"
            align="center"
            class="ml-0"
          >
            {{ $t("navbar.appbar.allStepsCompTxt1") }}
          </v-row>
        </v-col>
      </v-row>
      <v-row
        style="height:10%; width:100%"
        justify="center"
        align="start"
        class="ma-2 pr-2"
      >
        <v-col>
          <v-row
            style="width:98%; text-align:center"
            justify="center"
            align="center"
            class="ml-0"
          >
            <span
              ><span
                ><a target="_blank" :href="getUrl">
                  {{ $t("navbar.appbar.urltxt") }}
                </a></span
              >
              <span>
                {{ $t("navbar.appbar.allStepsCompTxt2") }}
              </span></span
            >
          </v-row>
        </v-col>
      </v-row>
      <v-row
        style="height:20%; width:106%"
        class="ma-0 mt-6"
        justify="center"
        align="end"
      >
        <v-col>
          <v-row style="width:100%" justify="center" align="end">
            <v-btn
              tile
              height="52px"
              class="ma-0 mt-3"
              width="100%"
              @click="canclOvrlyStepComp()"
              outlined
              color="#006AFF"
              style="border-color:#F2F2F2"
            >
              {{ $t("navbar.appbar.buttonText") }}
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </v-overlay>
-->
</template>
<script>
//import iconSuccess from "@/assets/icons/misc/icon-success.svg";

export default {

  name: "ModalTestCartRecoveryMethod",
  components: {
    //iconSuccess
  },
  data: () => ({
    showRecoveryTestModal: true
  }),
  props: ["recoveryType"],
  methods: {
    canclOvrlyStepComp() {
      this.$store.dispatch("updStepsCompOnload", true);
    }
  },
  computed: {
    getUrl() {
      return this.$store.getters.getUrl;
    }
  }
}
</script>

<style lang="scss" scoped>
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
