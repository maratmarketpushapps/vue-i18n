<template>
  <div class="pl-5 pt-2 pr-5 ma-0">
    <v-container fluid class="pa-2">
      <h3>SETTINGS</h3>
      <v-row class="pt-5 pa-3">
        <v-col class="pr-20">
          <v-row>
            <FbConnect />
          </v-row>

          <br />
          <v-row>
            <v-card tile height="250" width="97%"> <SetTimezone /> </v-card>
          </v-row>
        </v-col>
        <v-col cols="6">
          <v-row>
            <UpgradeCard />
          </v-row>
          <br />
          <v-row>
            <v-card tile height="370" width="97%" class="pa-3">
              <AccountInfo />
            </v-card>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import UpgradeCard from "@/components/Settings/UpgradeCard.vue";
import FbConnect from "@/components/Settings/FbConnect.vue";
import AccountInfo from "@/components/Settings/AccountInfo.vue";
import SetTimezone from "@/components/Settings/SetTimezone.vue";

export default {
  name: "Settings",
  components: { UpgradeCard, FbConnect, AccountInfo, SetTimezone },
};
</script>

<style>
.div-style {
  padding: 2px;
  margin: 2px;
  border: 10px rgb(4, 51, 53);
}
</style>
