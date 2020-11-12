<template>
  <v-container fluid class="pt-0 mt-0">
    <v-row class="pt-0 mt-0 pb-0 mb-0 row-style" align="center">
      <v-col cols="auto" class="pt-0">
        <h3 class="header_dims page_headers pr-0 mr-0 pt-0 mt-0">
          {{ $t("abandonedCarts.ttlTxt") }}&nbsp;
        </h3>
      </v-col>
      <v-col cols="1" class="pl-0 ml-0 pt-0">
        <TooltipIcon
          :posRight="true"
          :nudgeBottom="30"
          :nudgeLeft="5"
          :txt="$t('abandonedCarts.headerInfo')"
          class="infoicon_scale pt-0"
        />
      </v-col>

      <v-col cols="8.75" class="pt-0">
        <v-row align="center" justify="end" style="width: 100%">
          <v-col cols="auto"> </v-col>
          <v-col cols="auto">
            <span><CartAttempts class="pt-2 pr-4" /></span>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="pt-1 mt-0" align="start" style="height: auto">
      <v-col cols="12" style="height: 100%">
        <v-row style="height: 100%; width: 100%" justify="start">
          <Tabs style="height: 100%; width: 100%" />
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TooltipIcon from "@/components/svgIcons/TooltipIcon.vue";
import Tabs from "@/components/AbandonedCarts/Tabs.vue";
import CartAttempts from "@/components/AbandonedCarts/CartAttempts.vue";

export default {
  name: "AbandonedCarts",
  components: {
    TooltipIcon,
    Tabs,
    CartAttempts,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.row-style {
  height: 6vh;
}

@media (min-width: 1400px) {
  .row-style {
    height: 8vh;
  }
}
</style>
