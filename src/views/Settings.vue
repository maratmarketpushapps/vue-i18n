<template>
  <v-container fluid class="pt-0 mt-0">
    <v-row style="height:100%" class="pt-0 mt-0">
      <h4 class="pl-7 pt-0 mt-0">SETTINGS</h4>
    </v-row>
    <v-row style="height:100% !important">
      <v-col cols="6" class="pl-10">
        <v-row>
          <FbConnect />
        </v-row>
        <v-row class="pt-4"> </v-row>
        <v-row>
          <SetTimezone />
        </v-row>
      </v-col>
      <v-col cols="6" class="pr-5">
        <v-row>
          <UpgradeCard />
        </v-row>
        <v-row class="pt-4"> </v-row>
        <v-row>
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
</style>
