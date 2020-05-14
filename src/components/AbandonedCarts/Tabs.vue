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
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            :nudge-bottom="20"
          >
            <template v-slot:activator="{ on }">
              <v-tab class="font_dims" key="4" v-on="on">
                <v-icon class="pr-1 infoicon_scale">event</v-icon>
                <span class="pr-2">{{custStDt}}</span><span>to</span> <span class="pl-2">{{custEnDt}}</span>
                <v-icon class="infoicon_scale">keyboard_arrow_down</v-icon>
              </v-tab>
            </template>
            <v-date-picker
              v-model="custDates"
              color="#f2f2f2"
              scrollable
              actions
              show-current="false"
              reactive
              no-title
              range
            >
              <v-spacer /><v-spacer />
              <v-btn
                text
                color="primary"
                @click="menu = false"
                style="font-weight:bold"
                >Cancel</v-btn
              >
              <v-btn
                text
                color="primary"
                @click="setCustDt"
                style="font-weight:bold"
                >OK</v-btn
              ></v-date-picker
            >
          </v-menu>
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

        <v-tab-item key="4">
          <CartsTable
            :startDate="custStDt"
            :endDate="custEnDt"
            :key="custKey"
          />
        </v-tab-item>
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
      menu: false,
      custDates: [],
      custStDt: moment(new Date() - 86400000 * 15)
        .utc()
        .format("MM-DD-YYYY"),
      custEnDt: moment(new Date())
        .utc()
        .format("MM-DD-YYYY"),
      custKey: 0,
    };
  },
  methods: {
    setMenuactivator() {
      this.menuActivator = true;
    },

    setCustDt() {
      this.custDates[0] > this.custDates[1]
        ? (this.custStDt = moment(this.custDates[1])
            .utc()
            .format("MM-DD-YYYY"))
        : (this.custStDt = moment(this.custDates[0])
            .utc()
            .format("MM-DD-YYYY"));

      this.custDates[0] > this.custDates[1]
        ? (this.custEnDt = moment(this.custDates[0])
            .utc()
            .format("MM-DD-YYYY"))
        : (this.custEnDt = moment(this.custDates[1])
            .utc()
            .format("MM-DD-YYYY"));

      console.log("start date :: " + this.custStDt);
      console.log("end date :: " + this.custEnDt);

      this.custKey++;
      this.menu = false;
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

.v-date-picker-table .v-btn.v-btn--active {
  border-radius: 0px;
}
</style>
