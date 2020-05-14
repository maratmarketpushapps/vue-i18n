<template>
  <v-container fluid>
    <v-row class="pa-0 ma-0">
      <v-col class="pa-0 ma-0">
        <v-tabs
          background-color="transparent"
          v-model="tab"
          class="pa-0 mt-0 tabs-color"
          active-class="tab-item-color-active"
        >
          <v-tab class="font_dims" key="1">
            {{ $t("abandonedCarts.tabs.item1") }}
          </v-tab>
          <v-tab class="font_dims" key="2">
            {{ $t("abandonedCarts.tabs.item2") }}
          </v-tab>
          <v-tab class="font_dims" key="3">
            {{ $t("abandonedCarts.tabs.item3") }}
          </v-tab>
          <v-tab class="font_dims" key="4">
            {{ $t("abandonedCarts.tabs.item4") }}
          </v-tab>
        </v-tabs>
      </v-col>
    </v-row>
    <br />
    <v-row style="height:auto; width:100%">
      <v-tabs-items v-model="tab" style="height:100%; width:100%">
        <v-tab-item key="1" style="height:auto; width:100%">
          <CartsTable :startDate="yestDate" :endDate="currDate" />
        </v-tab-item>
        <v-tab-item key="2">
          <CartsTable :startDate="lstWeekDate" :endDate="currDate" />
        </v-tab-item>
        <v-tab-item key="3">
          <CartsTable :startDate="lstMonthDate" :endDate="currDate" />
        </v-tab-item>
        <v-menu attach="v-tab-item">
          <template v-slot:activator="{on}">
          <v-tab-item key="4" v-on="on">
            <v-date-picker></v-date-picker>
          </v-tab-item>
          </template>
        </v-menu>
      </v-tabs-items>
    </v-row>
  </v-container>
</template>

<script>
import CartsTable from "@/components/AbandonedCarts/CartsTable.vue";
import moment from "moment-timezone";
export default {
  name: "Tabs",
  components: { CartsTable },
  data() {
    return {
      tab: null,
      menuActivator: null,
    };
  },
  methods: {
    setMenuactivator() {
      this.menuActivator = true;
    },
  },
  computed: {
    currDate() {
      return moment(new Date())
        .utc()
        .format("MM-DD-YYYY");
    },
    yestDate() {
      return moment(new Date() - 86400000)
        .utc()
        .format("MM-DD-YYYY");
    },
    lstWeekDate() {
      console.log(
        "Last-week-time :: " +
          moment(new Date() - 86400000 * 7)
            .utc()
            .format("MM-DD-YYYY")
      );
      return moment(new Date() - 86400000 * 7)
        .utc()
        .format("MM-DD-YYYY");
    },
    lstMonthDate() {
      console.log(
        "Last-week-time :: " +
          moment(new Date() - 86400000 * 30)
            .utc()
            .format("MM-DD-YYYY")
      );
      return moment(new Date() - 86400000 * 30)
        .utc()
        .format("MM-DD-YYYY");
    },
  },
};
</script>

<style scoped>
.tab-props {
  color: transparent;
}
.tab-item-color-active {
  color: #5686f6 !important;
}

.theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) {
  color: black;
}
</style>
