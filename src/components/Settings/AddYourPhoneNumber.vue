<template>
  <v-card tile height="100%" width="97%" class=" pt-3 px-7 phone_number_section font_dims">
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
          :txt="$t('settingsPage.addYourPhoneNumberCardInfo')"
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
          type="number"
          v-model="phone"
          v-bind="bindProps"
          v-on:country-changed="countryChanged"
          @onValidate="btnDisabled = $event.valid"
          @keydown="checkValidNumber($event)"
          required
          :placeholder="$t('settingsPage.addYourPhoneNumber')"
          :label="$t('settingsPage.addYourPhoneNumber')"
          :hint="$t('settingsPage.hintTelNumber')"
          class="phone_number_section"
        >
         </vue-tel-input-vuetify>
<!--        <v-col class="px-0 py-0" style="z-index: 99">-->
<!--          <small class="hintTelNumber" style="z-index: 99">{{$t('settingsPage.hintTelNumber')}}</small>-->
<!--        </v-col>-->
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
      country:null,
      btnDisabled: false,
      bindProps: {
        mode: "international",
        placeholder: "Enter a phone number",
        required: false,
        enabledCountryCode: true,
        enabledFlags: true,
        autocomplete: "off",
        name: "telephone",
        maxLen: 25,
        inputOptions: {
          showDialCode: true
        },
        reg:null,
      },
      first:false,
    };
  },
  methods:{
    countryChanged(country) {
      setTimeout(()=> {this.phone == '' ? this.phone = '+' + country.dialCode : this.phone.length > 4 && this.first == true ? this.phone = '+' + country.dialCode: this.phone,
        this.btnDisabled = false},300)
      if(country.dialCode !== null){
        this.country = '+' + country.dialCode
      }
    },
    checkValidNumber(event){
      switch (event.code){
        case 'Backspace':

        break;
        case 'Delete':

        break;
        case 'ArrowUp':

        break;
        case 'ArrowDown':

        break;
        case 'ArrowLeft':

        break;
        case 'ArrowRight':

        break;
        default: (/[a-zA-Z]/).test( event.key) == true ? event.preventDefault() : ''
      }
    },
    savePhoneNumber(){
      let obj = {
        business_phone_number:this.phone
      }
      this.$store.dispatch("updIsLoading", true).then(() => {
        this.$store.dispatch("updAccInfo", obj).then((res) => {
          if (res === "success") {
            this.$store.dispatch("setSettings").then((response) => {
              this.$store.dispatch("updIsLoading", false);
              if (response === "success") {
                this.$store.dispatch("getStepsCompleted");
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
  watch:{
    phone(newVal){
      // console.log(newVal)

      function isLetter(c) {
        return c.toLowerCase() != c.toUpperCase();
      }
      var str = newVal
      isLetter(str) == true ? this.btnDisabled = false : this.btnDisabled
      newVal == '' ? setTimeout(() => this.btnDisabled = true ,400): this.btnDisabled
      newVal == '' ? setTimeout(() => this.btnDisabled = true ,400): this.btnDisabled
    }
  },
  mounted() {
    setTimeout(() => (this.phone = this.$store.state.settingsVars.business_phone_number),200)
    setTimeout(() => (this.first = true),800)
  }

};
</script>


<style lang="css">
.v-menu__content{
  /*margin-top: 23px !important;*/
}
</style>
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
