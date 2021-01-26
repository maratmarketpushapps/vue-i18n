<template>
  <v-col cols="12" class=" pb-0" style="background-color: #e6e7e8 !important">
    <v-col cols="12" class="py-0 d-flex justify-end">
      <v-col cols="11" class="py-0">
        <v-row class="pt-0 mt-0 pb-0 mb-0 row-style" align="center">
          <v-col cols="auto" class="pt-0 pb-0">
            <h3 class="header_dims page_headers pr-0 mr-0 pt-0 mt-0">
              {{ $t("campaigns.header") }}
            </h3>
          </v-col>
          <v-col cols="1" class="pl-0 ml-0 py-0">
            <TooltipIcon
              :posRight="true"
              :nudgeBottom="30"
              :nudgeLeft="5"
              :txt="$t('widgets.headerInfo')"
              class="infoicon_scale pt-0"
            />
          </v-col>
          <v-col cols="1" class="pl-0 ml-0 pt-0 "> </v-col>
          <v-col cols="8.75" class="pt-0 pb-0 mb-0">
            <v-row align="center" justify="end" style="width:100%">
              <v-col cols="auto"> </v-col>
              <v-col cols="auto" class="pb-0">
                <span><CartAttempts class="pt-0 pr-6"/></span>
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
            {{ $t("campaigns.tabs.item1") }}
          </h3>

          <TooltipIcon
            :posRight="true"
            :nudgeBottom="30"
            :nudgeLeft="5"
            :txt="$t('campaigns.infocons.msg1')"
            class="infoicon_scale pt-0 ml-3"
            style="top:30%"
          />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" class="py-0 d-flex justify-end" style="background-color: #F2F2F2">
      <v-col cols="11" class="py-0">
        <v-container fluid class="pt-0 mt-12">

          <v-row class="pt-1 mt-0" align="start" style="height:auto; width:100%">
            <CampaignTabs style="height:100%; width:100%" />
          </v-row>
        </v-container>
      </v-col>
    </v-col>
  </v-col>
<!--  <v-container fluid class="pt-0 mt-12">-->
<!--    <v-row class="pt-0 mt-0 pb-0 mb-0 row-style" align="center">-->
<!--      <v-col cols="auto" class="pt-0">-->
<!--        <h3 class="header_dims page_headers pr-0 mr-0 pt-0 mt-0" >-->
<!--          {{ $t("campaigns.header") }}&nbsp;-->
<!--        </h3>-->
<!--      </v-col>-->
<!--      <v-col cols="1" class="pl-0 ml-0 pt-0"> </v-col>-->
<!--      <v-col cols="8.75" class="pt-0 pb-0 mb-0">-->
<!--        <v-row align="center" justify="end" style="width:100%">-->
<!--          <v-col cols="auto"> </v-col>-->
<!--          <v-col cols="auto">-->
<!--            <span><CartAttempts class="pt-0 pr-6"/></span>-->
<!--          </v-col>-->
<!--        </v-row>-->
<!--      </v-col>-->
<!--    </v-row>-->
<!--    <v-row class="pt-1 mt-0" align="start" style="height:auto; width:100%">-->
<!--      <CampaignTabs style="height:100%; width:100%" />-->
<!--    </v-row>-->
<!--  </v-container>-->
</template>

<script>
import CampaignTabs from "@/components/Campaigns/CampaignTabs.vue";
import TooltipIcon from "@/components/svgIcons/TooltipIcon";
// import CampaignView from "@/components/Campaigns/CampaignView.vue";
import CartAttempts from "@/components/AbandonedCarts/CartAttempts.vue";

export default {
  name: "Campaigns",
  components: {
    CampaignTabs,
    TooltipIcon,
    CartAttempts
  },
  mounted () {
    window.scrollTo(0,0);
  },
};
</script>

<style>
.div-style {
  width: 200px;
  height: 90px;
  padding: 10px;
  text-align: center;
  margin: 50px;
  border: 10px rgb(4, 51, 53);
}

.cmpgn-vw-ht {
  height: 92px;
}
</style>
<style scoped>
.par_title_popup_consent{
  width: 400px;
  height: 77px;
  background: #F2F2F2 0% 0% no-repeat padding-box !important;
  opacity: 1;
  border-bottom: 2px solid #006AFF !important;
  font: normal normal bold 15px/25px Poppins !important;
  letter-spacing: 0px;
  color: #006AFF !important;
}
.popup_wdg_card{
  margin-left: 6% !important;
  padding-left: 3.5% !important;
}
.header_dims{
  font-size: 18px !important;
  font-family: 'Poppins';
}
</style>