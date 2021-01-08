<template>
  <v-container fluid class="pl-0 ml-0">
    <v-row class="pa-0 ma-0 mt-2 pl-0 ml-0" justify="start" style="width:100%">
      <v-col class="pa-0 ma-0 pl-0 ml-0" cols="auto">
        <v-tabs
          background-color="transparent"
          v-model="tab"
          class="pa-0 mt-0 ml-0 tabs-color tab-size"
          active-class="tab-item-color-active"
          :show-arrows="showArr"
          style="width:100%;"
        >
          <v-tab
            class="font_dims"
            key="1"
            @click="refreshComp1()"
            style="text-transform:none;"
          >
            {{ $t("campaigns.tabs.item1") }}
            <TooltipIcon
              :posRight="true"
              :nudgeBottom="30"
              :nudgeLeft="5"
              :txt="$t('campaigns.infocons.msg1')"
              class="infoicon_scale "
              style="top:30%"
            />
          </v-tab>
          <!-- <v-tab
            class="font_dims"
            key="2"
            @click="refreshComp2()"
            style="text-transform:none;"
          >
            {{ $t("campaigns.tabs.item2") }}
            <TooltipIcon
              :posRight="true"
              :nudgeBottom="30"
              :nudgeLeft="5"
              :txt="$t('campaigns.infocons.msg3')"
              class="infoicon_scale "
              style="top:30%"
            />
          </v-tab>
          <v-tab
            class="font_dims"
            key="3"
            @click="refreshComp3()"
            style="text-transform:none;"
          >
            {{ $t("campaigns.tabs.item3") }}
            <TooltipIcon
              :posRight="true"
              :nudgeBottom="30"
              :nudgeLeft="5"
              :txt="$t('campaigns.infocons.msg4')"
              class="infoicon_scale "
              style="top:30%"
            />
          </v-tab> -->
        </v-tabs>
      </v-col>
    </v-row>
    <br />
    <v-row style="height:auto; width:100%">
      <v-col cols="7">
        <v-tabs-items
          v-model="tab"
          style="height:100%; width:100%"
          class="app_background"
        >
          <v-tab-item key="1" :eager="false">
            <AbandonedCarts1 />
            <br />
            <AbandonedCarts2 />
          </v-tab-item>
          <v-tab-item key="2" :eager="false"> <OrderReceipt /> </v-tab-item>
          <v-tab-item key="3" :eager="false"><OrderShipped /> </v-tab-item>
        </v-tabs-items>
      </v-col>
      <v-col cols="5" style="padding-left: 2%">
        <CampaignView />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TooltipIcon from "@/components/svgIcons/TooltipIcon.vue";
import OrderReceipt from "@/components/Campaigns/OrderReceipt.vue";
import OrderShipped from "@/components/Campaigns/OrderShipped.vue";
import AbandonedCarts1 from "@/components/Campaigns/AbandonedCarts1.vue";
import AbandonedCarts2 from "@/components/Campaigns/AbandonedCarts2.vue";
import CampaignView from "@/components/Campaigns/CampaignView.vue";
// import moment from "moment-timezone";
// import { mapGetters } from "vuex";
export default {
  name: "CampaignTabs",
  components: {
    TooltipIcon,
    OrderReceipt,
    OrderShipped,
    AbandonedCarts1,
    AbandonedCarts2,
    CampaignView,
  },
  data() {
    return {
      showArr: false,
      tab: null,
      menu: false,
      itemKeyDat1: 0,
      itemKeyDat2: 0,
      itemKeyDat3: 0,
      activeTab: "1",
    };
  },
  created() {
    this.$store.dispatch("updActiveTab", "abndndcrt1").then(() => {
      this.$store.dispatch("updCart1Active", true);
      // console.log(response);
    });
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
      this.$store.dispatch("updActiveTab", "abndndcrt1").then(() => {
        // console.log(response);
      });
    },
    refreshComp2() {
      this.activeTab = "2";
      this.itemKeyDat2++;
      this.$store.dispatch("updActiveTab", "ordrrcpt").then(() => {
        this.$store.dispatch("updCart1Active", true);
        // console.log(response);
      });
    },
    refreshComp3() {
      this.activeTab = "3";
      this.itemKeyDat3++;
      this.$store.dispatch("updActiveTab", "ordrshpd").then(() => {
        this.$store.dispatch("updCart1Active", true);
        // console.log(response);
      });
    },

    setMenuactivator() {
      this.menuActivator = true;
    },
  },
  computed: {
    // ...mapGetters(["getCreatedAt"]),
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
  font-size: 80%;
}

.msgCount {
  font-size: 120%;
  color: #5686f6;
  font-weight: bolder;
}

.qckRpl {
  font-size: 85%;
}

.qckRplBtn {
  color: #ffffff !important;
}

@media (min-width: 1500px) {
  .refIcondim {
    transform: scale(1.2);
  }
  .tab-size {
    font-size: 100%;
  }
}

@media (min-width: 1280px) and (max-width: 1499px) {
  .tab-size {
    font-size: 80%;
  }
}
</style>
