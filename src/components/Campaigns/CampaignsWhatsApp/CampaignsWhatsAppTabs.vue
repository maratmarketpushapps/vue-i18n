<template>
  <v-container fluid class="pl-0 ml-0">
    <v-row style="height:auto; width:100%">
      <v-col cols="7" class="py-0 px-0">
        <v-col
          style="height:100%; width:100%"
          class="app_background px-0 py-0"
        >
          <v-col key="1" class="py-0 px-0 sms_campaigns_font_dims" :eager="false">
            <AbandonedCarts1 />
            <br />
            <AbandonedCarts2 />
          </v-col>
        </v-col>
      </v-col>
      <v-col cols="5" class="py-0" style="padding-left: 2%">
<!--        <CampaignView />-->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
//
import AbandonedCarts1 from "@/components/Campaigns/CampaignsWhatsApp/WhatsAppAbandonedCarts1.vue";
import AbandonedCarts2 from "@/components/Campaigns/CampaignsWhatsApp/WhatsAppAbandonedCarts2.vue";
//import CampaignView from "@/components/Campaigns/CampaignsSMS/WhatsAppCampaignView.vue";

export default {
  name: "CampaignTabsWhatsApp",
  components: {
    AbandonedCarts1,
    AbandonedCarts2,
    // CampaignView,
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
  created() {
    this.$store.dispatch("updActiveTab", "abndndcrt1").then(() => {
      this.$store.dispatch("updCart1Active", true);
      // console.log(response);
    });
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
.ab_crt_msg_bg{
  width: 400px !important;
  height: 77px !important;
  background: #F2F2F2 0% 0% no-repeat padding-box !important;
  opacity: 1;
  border-bottom: 2px solid #006AFF !important;
}
.theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) {
  color: #323f4f !important;
  font-weight: bold;
  font-size: 90% !important;
}
.app_background{
  background-color: #F2F2F2 !important;
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
<style>
.sms_campaigns_font_dims .v-label{
  font-size: 16px !important;
}
.sms_campaigns_font_dims .v-input input{
  font-size: 15px !important;
}
</style>