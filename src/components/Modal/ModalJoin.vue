<template>
  <div class="popupWindow">
    <v-row justify="center">
      <v-dialog
        v-model="popupWindow"
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
                    @click="popupWindow = false"
                  >
                    <v-img src="@/assets/img/icon-close.png" class="close_img"></v-img>
                  </v-btn>
                </v-fab-transition>
                <span class="headline headline_title"
                >{{ $t("ModalJoin.joinUsTitle") }}</span>
              </v-card-title>
              <v-card-text class="px-0 pb-0">
                <v-form v-model="formValid">
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                    class="py-0"
                  >
                    <v-text-field
                      @change="detectChange"
                      @input="detectChange"
                      v-model="first_name"
                      :label="$t('ModalJoin.firstName')"
                      class="image_modal_text_color"

                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                    class="py-0"
                  >
                    <v-text-field
                      @change="detectChange"
                      @input="detectChange"
                      v-model="last_name"
                      :label="$t('ModalJoin.lastName')"
                      class="image_modal_text_color"

                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" class="py-0">
                    <v-text-field
                      @change="detectChange"
                      @input="detectChange"
                      v-model="bussiness_name"
                      :label="$t('ModalJoin.BussinesName')"
                      class="image_modal_text_color"

                    ></v-text-field>
                  </v-col>
                </v-row>
                </v-form>
                <v-row>
                  <v-col cols="12" class="py-0">
                    <v-text-field
                      @change="detectChange"
                      @input="detectChange"
                      v-model="email"
                      :label="$t('ModalJoin.Email')"
                      class="image_modal_text_color"
                      :rules="emailRules "
                    ></v-text-field>

                  <small class="image_modal_text_color pl-3">
                    {{$t('ModalJoin.byJoining')}}

                    <a href="https://www.marketpushapps.com/terms-of-use" target="_blank">
                      <b class="link_term_privace">{{$t('ModalJoin.termOfUse')}}</b>
                    </a>

                    {{$t('ModalJoin.recMarketPushTx')}}
                  </small>
                  </v-col>
                </v-row>


              </v-card-text>
              <v-card-actions class="pa-0 card_action">
                <v-col  justify="left" class="pa-0">
                  <v-btn
                    color="#006aff"
                    dark
                    :class="btnStatus ? 'btn wdgt_font_dims':'btn image_modal_color modal_btn' "
                    @click="updAccInfo()"
                  >
                    {{$t('ModalJoin.signUpBtn')}}
                  </v-btn>
                </v-col>
              </v-card-actions>
              <v-col class="px-0">
                <small class="image_modal_text_color">
                  {{$t('ModalJoin.PlsNoteTx')}}
                </small>
              </v-col>
            </v-card>
          </v-col>
        </v-row>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ModalJoin",
  props: ['status',],
  data:() =>({
    popupWindow:true,
    first_name:null,
    last_name:null,
    bussiness_name:null,
    email:null,
    emailRules: [
      (v) =>
        v !== null && v !== '' &&
        !v ||
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "Invalid E-mail",
    ],
    minLenght:[(v) => v !== null && v !== ''],
    formValid: false,
    btnDisabled:false,
    withEmail:false,
    valEmail:null,
  }),
  methods: {
    checkEm(){
      if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.email))
      {
        return (true)
      }else return (false)
    },
    detectChange() {
      this.btnDisabled = false;
    },
    updAccInfo() {
      let obj = {
        first_name:this.first_name,
        bussiness_name:this.bussiness_name,
        last_name: this.last_name,
      };
      this.valEmail = this.checkEm()
      if(this.valEmail == true ){
        obj.email  = this.email
      }
      this.$store.commit('UPDATE_SET_VARS_POP',this.withEmail)
      this.$store.dispatch("updIsLoading", true).then(() => {
        this.$store.dispatch("updAccInfo", obj).then((res) => {
          if (res === "success") {

            this.$store.dispatch("setSettings").then((response) => {
              this.$store.dispatch("updIsLoading", false);
              if (response === "success") {
                this.popupWindow = false;
                this.btnDisabled = true;
              } else {
                // console.log("Settings API not refreshed");
              }
            });
          }
        });
      });
    },
  },

  computed: {
    ...mapGetters(["getAccountInfo"]),
    btnStatus() {
      return this.btnDisabled || !this.formValid ? true : false;
    },

    accInfo() {
      let aa = this.getAccountInfo;
      return aa;
    },
  },

  created() {
    this.status = this.popupWindow
    // this.popupWindow = this.getAccountInfo.install_popop_show
  }
};
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
