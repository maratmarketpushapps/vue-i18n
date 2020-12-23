<template>
  <v-card tile height="100%" width="97%" class=" pt-3 px-7 font_dims">
    <v-row>
      <v-col cols="6">
        <h3>{{ $t("Add Your Phone Number") }}</h3>
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
        <v-form v-model="formValid">
          <v-combobox
            v-model="phoneNumber"
            :items="countries"
            item-text="phoneNumber"
            item-value="phoneNumber"
            :label="$t('Add Your Phone Number')"
            :prepend-inner-icon="selectedFlag"
            @input="detectChange"
            style="font-size:110%"
            class="pt-0 pb-1 px-16"
            dense
            return-object
          >
            <template v-slot:item="slotProps">
              <i :class="['mr-2', 'em', slotProps.item.flag]"></i>
              {{slotProps.item.phoneNumber}}
            </template>
          </v-combobox>
        </v-form>
        <v-row justify="center" style="padding-top:3%">
          <v-btn
            tile
            height="40px"
            class=" btn_save"
            width="20%"
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
      phoneNumber:{
        phoneNumber: "+40",
        flag: "em-flag-ad"
      },
      selectedFlag:null,
      countries: [
        {
          phoneNumber: "+40",
          flag: "em-flag-ad"
        },
        {
          phoneNumber: "+1 202",
          flag: "em-flag-ae"
        },
        {
          phoneNumber: "+2 333 ",
          flag: "em-flag-af"
        },
        {
          phoneNumber: "+1 202 ",
          flag: "em-flag-ag"
        },
        {
          phoneNumber: "+9 292 ",
          flag: "em-flag-al"
        },
        {
          phoneNumber: "+1 ",
          flag: "em-flag-ai"
        }
      ],
      btnDisabled: true,
      first_name: "",
      formValid: false,

    };
  },
  methods: {
    detectChange() {
      if(typeof this.phoneNumber == "object"){
        this.selectedFlag = this.phoneNumber.flag
        this.phoneNumber = this.phoneNumber.phoneNumber
      }
      this.btnDisabled = false;
    },

  },

  created(){
    this.selectedFlag = this.phoneNumber.flag
  },

};
</script>

<style scoped>
.btn_save{
  padding: 9px 68px !important;
  text-align: center;
  font: normal normal medium 14px/13px Poppins !important;
  letter-spacing: 0px !important;
  color: #C9CACB !important;
  opacity: 1 !important;
  background: #F2F2F2 0% 0% no-repeat padding-box !important;
  border: 1px solid #C9CACB !important;
  border-radius: 2px;
}
</style>