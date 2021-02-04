<template>
  <v-col cols="12" class=" pb-0" style="background-color: #e6e7e8 !important">
    <v-col cols="12" class="py-0 d-flex justify-end">
      <v-col cols="11" class="py-0">
          <v-row class="pt-0 mt-0 pb-0 mb-0 row-style" align="center">
            <v-col cols="auto" class="pt-0 pb-0">
              <h3 class="header_dims page_headers pr-0 mr-0 pt-0 mt-0">
                {{ $t("campaigns.smsheader") }}&nbsp;
              </h3>
            </v-col>
            <v-col cols="1" class="pl-0 ml-0 py-0">
              <!--
              <TooltipIcon
                :posRight="true"
                :nudgeBottom="30"
                :nudgeLeft="5"
                :txt="$t('widgets.headerInfo')"
                class="infoicon_scale pt-0"
              />
              -->
            </v-col>
            <v-col cols="1" class="pl-0 ml-0 pt-0 "> </v-col>
            <v-col cols="8.75" class="pt-0 pb-0 mb-0">
              <v-row align="center" justify="end" style="width:100%">
                <v-col cols="auto"> </v-col>
                <v-col cols="auto" class="pb-0">
                  <span><CartAttemptsSmS class="pt-0 pr-6"/></span>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
      </v-col>
    </v-col>
    <v-col cols="12" class="py-0">
      <v-row class=" pt-0 mt-0 pb-0 mb-0 row-style" align="center">
        <v-col cols="auto" class="popup_wdg_card pt-0 pb-0 par_title_popup_consent d-flex align-center" >
          <h3 class="title_popup_consent  pr-0 mr-0 pt-0 mt-0">
            {{ $t("campaigns.tabs.itemSMS") }}
          </h3>

          <TooltipIcon
            :posRight="true"
            :nudgeBottom="30"
            :nudgeLeft="5"
            :txt="$t('campaigns.infocons.msg1SMS')"
            class="infoicon_scale pt-0 ml-3"
            style="top:30%"
          />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" class="py-0 d-flex justify-end" style="background-color: #F2F2F2">
      <v-col cols="11" class="py-0">
        <v-container fluid class="pt-0 mt-4">
          <v-row class="pt-1 mt-0" align="start" style="height:auto; width:100%">
            <CampaignSMSTabs style="height:100%; width:100%" />
          </v-row>
        </v-container>
      </v-col>
    </v-col>
  </v-col>
</template>

<script>
import CampaignSMSTabs from "@/components/Campaigns/CampaignsSMS/CampaignSMSTabs.vue";
// import CampaignView from "@/components/Campaigns/CampaignView.vue";
import CartAttemptsSmS from "../AbandonedCarts/CartAttempts.vue";
import TooltipIcon from "@/components/svgIcons/TooltipIcon";

export default {
  name: "CampaignsSms",
  components: {
    CampaignSMSTabs,
    CartAttemptsSmS,
    TooltipIcon,
  },
};
</script>

<style lang="css" scoped>
.div-style {
  width: 200px;
  height: 90px;
  padding: 10px;
  text-align: center;
  margin: 50px;
  border: 10px rgb(4, 51, 53);
}
.par_title_popup_consent{
  width: 400px;
  height: 77px;
  background: #F2F2F2 0% 0% no-repeat padding-box;
  opacity: 1;
  border-bottom: 2px solid #006AFF;
}
.title_popup_consent{
  text-align: left;
  font: normal normal bold 15px/25px Poppins;
  letter-spacing: 0px;
  color: #006AFF;
  opacity: 1;
}
.popup_wdg_card{
  margin-left: 6% !important;
  padding-left: 3.5% !important;
}
.cmpgn-vw-ht {
  height: 92px;
}

@media (max-width: 1449px) {
  .popup_wdg_card{
    margin-left: 6% !important;
    padding-left: 4.2% !important;
  }
}
</style>
