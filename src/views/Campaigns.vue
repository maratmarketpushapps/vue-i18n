<template>
  <v-container fluid class="pt-0 mt-0">
    <v-row class="pt-0 mt-0 pb-0 mb-0 row-style" align="center">
      <v-col cols="auto" class="pt-0">
        <h3 class="header_dims page_headers pr-0 mr-0 pt-0 mt-0">
          {{ $t("campaigns.header") }}&nbsp;
        </h3>
      </v-col>
      <v-col cols="1" class="pl-0 ml-0 pt-0"> </v-col>
    </v-row>
    <v-row class="pt-1 mt-0" align="start" style="height:auto">
      <v-col cols="8" style="height:100%">
        <CampaignTabs style="height:100%; width:100%" />
      </v-col>
      <v-col cols="4" style="height:100%; margin-top: 5.5%">
        <CampaignView />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CampaignTabs from "@/components/Campaigns/CampaignTabs.vue";
import CampaignView from "@/components/Campaigns/CampaignView.vue";

export default {
  name: "Campaigns",
  components: {
    CampaignTabs,
    CampaignView,
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
</style>
