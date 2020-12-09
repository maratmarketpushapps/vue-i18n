<template>
  <v-container fluid class="pt-0 mt-6">
    <v-row class="pt-0 mt-0 pb-0 mb-0 row-style" align="center">
      <v-col cols="auto" class="pt-0">
        <h3 class="header_dims page_headers pr-0 mr-0 pt-0 mt-0">
          {{ $t("dashboard.header") }}&nbsp;
        </h3>
      </v-col>
      <v-col cols="1" class="pl-0 ml-0 pt-0">
        <TooltipIcon
          :posRight="true"
          :nudgeBottom="30"
          :nudgeLeft="5"
          :txt="$t('dashboard.infoMsg')"
          class="infoicon_scale pt-0"
        />
      </v-col>
      <v-col cols="8.75" class="pt-0 pb-0 mb-0">
        <v-row align="center" justify="end" style="width:100%">
          <v-col cols="auto"> </v-col>
          <v-col cols="auto">
            <span><CartAttempts class="pt-0 pr-6"/></span>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="pt-0 mt-0" align="start" style="height:auto">
      <Tabs style="height:100%; width:100%" />
    </v-row>
  </v-container>
</template>

<script>
import Tabs from "@/components/Dashboard/Tabs.vue";
import TooltipIcon from "@/components/svgIcons/TooltipIcon.vue";
import CartAttempts from "@/components/AbandonedCarts/CartAttempts.vue";

export default {
  name: "dashboard",
  components: { Tabs, TooltipIcon, CartAttempts },
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
