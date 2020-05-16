<template>
  <v-container fluid class="pt-0 mt-0">
    <v-row class="pt-6 mt-0">
      <h3 class="header_dims page_headers">{{ $t("navbar.navdrawer.Settings") }}</h3>
    </v-row>
    <v-row style="height:100%">
      <v-col cols="6" class="">
        <v-row style="height:59%">
          <FbConnect />
        </v-row>
        <v-row style="height:3%"> </v-row>
        <v-row style="height:46%">
          <SetTimezone />
        </v-row>
      </v-col>
      <v-col cols="6" class="">
        <v-row style="height:45%">
          <UpgradeCard />
        </v-row>
        <v-row style="height:3%"> </v-row>
        <v-row style="height:60%">
          <AccountInfo />
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

export default {
  name: "Settings",
  components: { FbConnect, SetTimezone, UpgradeCard, AccountInfo },
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
