<template>
  <v-card tile height="100%" width="97%" class=" pt-3 px-7 font_dims">
    <v-row>
      <v-col cols="6">
        <h3>{{ $t('settingsPage.titleCard') }}</h3>
      </v-col>
      <v-col cols="6" class="pa-2 pt-0">
        <v-row align="center" justify="end" class="pr-1 pt-1"
        ><TooltipIcon
          :posLeft="true"
          :nudgeRight="10"
          :nudgeBottom="10"
          :txt="$t('settingsPage.accInfoCard.tooltipText')"
          class="infoicon_scale"
        /></v-row>
      </v-col>
    </v-row>
    <v-row
      style="width:100%; height:80%; padding-top:2%"
      align="center"
      justify="center"
      class="pt-0 mt-0 pr-0"
    >
      <v-col>
        <vue-tel-input-vuetify
          v-model="phone"
          @onValidate="btnDisabled = $event.valid"
          required
          :placeholder="$t('settingsPage.addYourPhoneNumber')" :label="$t('settingsPage.addYourPhoneNumber')"

        ></vue-tel-input-vuetify>
        <small class="hintTelNumber">{{$t('settingsPage.hintTelNumber')}}</small>
        <v-row justify="center" style="padding-top:3%">
          <v-btn
            :disabled="!btnDisabled"
            tile
            height="40px"
            class=" btn_save"
            width="20%"
            @click="savePhoneNumber()"
          >
            {{ $t("settingsPage.accInfoCard.buttonText") }}
          </v-btn></v-row
        >
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import TooltipIcon from "@/components/svgIcons/TooltipIcon.vue";



export default {
  name: "AddYourPhoneNumber",
  components: {
    TooltipIcon,
  },
  data() {
    return {
      phone: null,
      btnDisabled: false,
    };
  },
  methods:{
    savePhoneNumber(){
      let obj = {
        phone_number:this.phone
      }
      this.$store.dispatch("updIsLoading", true).then(() => {
        this.$store.dispatch("updAccInfo", obj).then((res) => {
          if (res === "success") {
            this.$store.dispatch("setSettings").then((response) => {
              this.$store.dispatch("updIsLoading", false);
              if (response === "success") {
                // console.log("Settings API refreshed");
                this.btnDisabled = false;
              } else {
                // console.log("Settings API not refreshed");
              }
            });
          }
        });
      });
    }
  },
  mounted() {
    setTimeout(() => (this.phone = this.$store.state.settingsVars.phone_number,this.btnDisabled = false),500)
  }

};
</script>

<style scoped>
.btn_save{
  padding: 9px 68px !important;
  text-align: center;
  font: normal normal medium 14px/13px Poppins !important;
  letter-spacing: 0px !important;
  color: white !important;
  opacity: 1 !important;
  background-color: #5686f6 !important;
  border-color: #5686f6 !important;
  border-radius: 2px;
}
.hintTelNumber{
  position: relative !important;
  bottom: 21px !important;
}
</style>