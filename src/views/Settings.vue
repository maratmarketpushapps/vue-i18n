<template>
  <v-container fluid class="pt-0 mt-4">
    <v-row class="pt-6 mt-0">
      <h3 class="header_dims page_headers">
        {{ $t("navbar.navdrawer.Settings") }}
      </h3>
    </v-row>
    <v-row style="height:60%; width:99%; background-color:#E6E7E8;">
      <v-col cols="6" class="">
        <v-row style="height:59%">
          <FbConnect />
        </v-row>
        <v-row style="height:20px"> </v-row>
        <v-row style="height:46%">
          <SetTimezone />
        </v-row>
      </v-col>
      <v-col cols="6" class="">
        <v-row style="height:45%">
          <UpgradeCard />
        </v-row>
        <v-row style="height:20px"> </v-row>
        <v-row style="height:60%">
          <AccountInfo />
        </v-row>
      </v-col>
    </v-row>
    <v-row style="height:35%; width:99%; background-color:#E6E7E8">
    </v-row>
    
    <!-- <v-row style="height:35%; width:99%; background-color:#E6E7E8" class="mb-0 pb-0">
      <v-col cols="6">
        <v-row style="height:100%">
          <InstructionalVids />
        </v-row>
      </v-col>
      <v-col cols="6"> </v-col>
    </v-row> -->
    <v-row style="height:6%; width:93%;" class="pa-0 ma-0" align="center">
      <v-col cols="2">
        <a
            href="https://www.marketpushapps.com/terms-of-use"
            target="_blank"
            style="text-decoration:underline ; color: #323F4F; font-weight:bolder; font-size:11px"
            >{{ $t("settingsPage.footers.link1") }}</a
          >
      </v-col>
      <v-col cols="3">
        <a
          href="https://www.marketpushapps.com/data-processing-agreement"
          target="_blank"
          style="text-decoration:underline ; color: #323F4F; font-weight:bolder; font-size:11px"
          >{{ $t("settingsPage.footers.link2") }}</a
        >
      </v-col>
      <v-col cols="2">
        <a
          href="https://www.marketpushapps.com/privacy-policy"
          target="_blank"
          style="text-decoration:underline ; color: #323F4F; font-weight:bolder; font-size:11px"
          >{{ $t("settingsPage.footers.link3") }}</a
        >
      </v-col>
      <v-col cols="5">
        <v-row justify="end" align="end" class="mt-1">
          <span
            style="text-decoration:underline ; color: #323F4F; font-weight:bolder; font-size:11px"
          >
            {{ $t("settingsPage.footers.cpyrght") }}
          </span>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UpgradeCard from "@/components/Settings/UpgradeCard.vue";
import FbConnect from "@/components/Settings/FbConnect.vue";
import AccountInfo from "@/components/Settings/AccountInfo.vue";
import SetTimezone from "@/components/Settings/SetTimezone.vue";
// import InstructionalVids from "@/components/Settings/InstructionalVids.vue";

export default {
  name: "Settings",
  components: {
    FbConnect,
    SetTimezone,
    UpgradeCard,
    AccountInfo,
    // InstructionalVids,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style>
.div-style {
  padding: 2px;
  margin: 2px;
  border: 10px rgb(4, 51, 53);
}

.infoicon_scale {
  transform: scale(0.8);
}

@media (min-width: 1400px) {
  .infoicon_scale {
    transform: scale(1);
  }
}
</style>
