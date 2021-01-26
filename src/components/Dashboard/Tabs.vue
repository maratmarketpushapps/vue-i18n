<template>
  <v-container fluid>
    <v-row class="pa-0 ma-0 mt-2" justify="start">
      <v-col class="pa-0 ma-0" cols="auto">
        <v-tabs
          background-color="transparent"
          v-model="tab"
          class="pa-0 mt-0 tabs-color tab-size"
          active-class="tab-item-color-active"
        >
          <v-tab class="font_dims" key="1" @click="refreshComp1()">
            {{ $t("abandonedCarts.tabs.item1") }}
          </v-tab>
          <v-tab class="font_dims" key="2" @click="refreshComp2()">
            {{ $t("abandonedCarts.tabs.item2") }}
          </v-tab>
          <v-tab class="font_dims" key="3" @click="refreshComp3()">
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
              <v-tab class="font_dims" key="4" v-on="on" style="width:auto">
                <v-icon class="pr-1 infoicon_scale">event</v-icon>
                <span class="pr-2">{{ displayStDate }}</span
                ><span>to</span> <span class="pl-2">{{ displayEnDate }}</span>
                <v-icon class="infoicon_scale">keyboard_arrow_down</v-icon>
                <TooltipIcon
                  :posRight="true"
                  :nudgeBottom="30"
                  :nudgeLeft="5"
                  :txt="$t('abandonedCarts.custRangeInfo')"
                  class="infoicon_scale "
                  style="top:30%"
                />
              </v-tab>
            </template>
            <v-date-picker
              v-model="custDates"
              color="grey-ligten-4"
              scrollable
              actions
              show-current="false"
              reactive
              no-title
              range
              style="height:100%;width:100%"
              :min="getStartDate"
              :max="getCurrDate"
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

      <v-col>
        <v-row justify="end" class="pr-5 mr-3 mb-1">
          <v-btn depressed icon class="refIcondim" @click="incrTabCount">
            <v-icon color="#4E5D6B">refresh</v-icon>
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
    <v-row style="height:auto; width:100%">
      <v-tabs-items v-model="tab" style="height:100%; width:100%">
        <v-tab-item key="1" style="height:auto; width:100%" :eager="false">
          <DashboardView
            :startDate="yestDate"
            :endDate="currDate"
            :key="itemKeyDat1"
        />
        </v-tab-item>
        <v-tab-item key="2" :eager="false">
          <DashboardView
              :startDate="lstWeekDate"
              :endDate="currDate"
              :key="itemKeyDat2"
          />
        </v-tab-item>
        <v-tab-item key="3" :eager="false">
          <DashboardView
              :startDate="lstMonthDate"
              :endDate="currDate"
              :key="itemKeyDat3"
          />
        </v-tab-item>

        <v-tab-item key="4">
          <DashboardView
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
import DashboardView from "@/components/Dashboard/DashboardView.vue";
import TooltipIcon from "@/components/svgIcons/TooltipIcon.vue";
import moment from "moment-timezone";
import { mapGetters } from "vuex";
export default {
  name: "Tabs",
  components: { DashboardView, TooltipIcon },
  data() {
    return {
      tab: 1,
      menu: false,
      custDates: [
        moment(new Date() - 86400000 * 15).format("YYYY-MM-DD"),
        moment(new Date()).format("YYYY-MM-DD"),
      ],
      custStDt: moment(new Date() - 86400000 * 15).format("MM-DD-YYYY"),
      custEnDt: moment(new Date()).format("MM-DD-YYYY"),
      custKey: 0,
      itemKeyDat1: 0,
      itemKeyDat2: 0,
      itemKeyDat3: 0,
      activeTab: "2",
    };
  },
  methods: {
    incrTabCount() {
      this.activeTab == "1" ? this.refreshComp1() : "";
      this.activeTab == "2" ? this.refreshComp2() : "";
      this.activeTab == "3" ? this.refreshComp3() : "";
      this.activeTab == "4" ? this.custKey++ : "";
    },

    refreshComp1() {
      this.activeTab = "1";
      this.itemKeyDat1++;
    },
    refreshComp2() {
      this.activeTab = "2";
      this.itemKeyDat2++;
    },
    refreshComp3() {
      this.activeTab = "3";
      this.itemKeyDat3++;
    },

    setMenuactivator() {
      this.menuActivator = true;
    },

    setCustDt() {
      // console.log("DateTestsNew :: " + this.custDates[0]);
      // console.log("DateTestsNew :: " + this.custDates[1]);
      this.custDates[0] > this.custDates[1]
        ? (this.custStDt = moment(this.custDates[1]).format("MM-DD-YYYY"))
        : (this.custStDt = moment(this.custDates[0]).format("MM-DD-YYYY"));

      this.custDates[0] > this.custDates[1]
        ? (this.custEnDt = moment(this.custDates[0]).format("MM-DD-YYYY"))
        : (this.custEnDt = moment(this.custDates[1]).format("MM-DD-YYYY"));

      // console.log("start date :: " + this.custStDt);
      // console.log("end date :: " + this.custEnDt);
      this.activeTab = "4";
      this.custKey++;
      this.menu = false;
    },
  },
  computed: {
    ...mapGetters(["getCreatedAt"]),

    getStartDate() {
      return moment(this.getCreatedAt).format("YYYY-MM-DD");
    },

    getCurrDate() {
      return moment(new Date()).format("YYYY-MM-DD");
    },

    displayStDate() {
      return this.custDates[0] > this.custDates[1]
        ? this.custDates[1]
        : this.custDates[0];
    },
    displayEnDate() {
      return this.custDates[0] > this.custDates[1]
        ? this.custDates[0]
        : this.custDates[1];
    },

    currDate() {
      return moment(new Date()).format("MM-DD-YYYY");
    },
    yestDate() {
      return moment(new Date()).format("MM-DD-YYYY");
    },
    lstWeekDate() {
      // console.log(
      //   "Last-week-time :: " +
      //     moment(new Date() - 86400000 * 7).format("MM-DD-YYYY")
      // );
      return moment(new Date() - 86400000 * 7).format("MM-DD-YYYY");
    },
    lstMonthDate() {
      // console.log(
      //   "Last-week-time :: " +
      //     moment(new Date() - 86400000 * 30).format("MM-DD-YYYY")
      // );
      return moment(new Date() - 86400000 * 30).format("MM-DD-YYYY");
    },
  },
};
</script>

<style scoped>
.tab-props {
  color: transparent;
}
.tab-item-color-active {
  color: #006aff !important;
  font-weight: bold;
  font-size: 90% !important;
}

.theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) {
  color: #323f4f !important;
  font-weight: bold;
  font-size: 90% !important;
}

.v-date-picker-table .v-btn.v-btn--active {
  border-radius: 0px;
}
.refIcondim {
  transform: scale(0.9);
}
.tab-size {
  transform: scale(0.9);
  transform-origin: 0 0;
}

@media (min-width: 1400px) {
  .refIcondim {
    transform: scale(1.2);
  }
  .tab-size {
    transform: scale(1);
    transform-origin: 0 0;
  }
}
</style>
