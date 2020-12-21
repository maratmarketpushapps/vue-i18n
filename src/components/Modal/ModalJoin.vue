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
                    @click="popupWindow = false
"
                  >
                    <v-img src="@/assets/img/icon-close.png" class="close_img"></v-img>
                  </v-btn>
                </v-fab-transition>
                <span class="headline headline_title"
                >Join us and start recovering those lost cart!</span>
              </v-card-title>
              <v-card-text class="px-0 pb-0">

                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                    class="py-0"
                  >
                    <v-text-field
                      label="First Name"
                      placeholder="Simon"
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
                      label="Last Name"
                      placeholder="Simon"
                      class="image_modal_text_color"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" class="py-0">
                    <v-text-field
                      label="Business Name"
                      placeholder="BusinessShop"
                      class="image_modal_text_color"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" class="py-0">
                    <v-text-field
                      label="Email"
                      placeholder="simon@gmail.com"
                      class="image_modal_text_color"
                      required
                    ></v-text-field>
                  </v-col>
                  <small class="image_modal_text_color pl-3">*By joining in, you agree to our <b class="link_term_privace">Terms of Use</b> and to receive MarketPushApps emails & updates and acknowledge that you read our  <b class="link_term_privace">Privacy Policy.</b></small>
                </v-row>


              </v-card-text>
              <v-card-actions class="pa-0 card_action">
                <v-col  justify="left" class="pa-0">
                  <v-btn
                    color="#006aff"
                    dark
                    class="image_modal_color modal_btn"
                  >
                    SIGN UP
                  </v-btn>
                </v-col>
              </v-card-actions>
              <v-col class="px-0">
                <small class="image_modal_text_color">
                  Please note that due to recent Facebook updates the app is temporarily not available in the EU. We are adding SMS and WhatsApp cart recovery in next 3-4 weeks and will give you an email when these features are available.
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
export default {
  name: "ModalJoin",
  props: ['status',],
  data:() =>({
    popupWindow:true,
  }),
  created() {
    this.status = this.popupWindow
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
  border: 1px solid #006AFF;
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
</style>