<template>
  <v-col cols="12" class="pl-4 d-flex justify-end">
    <v-col cols="11">
        <v-container fluid class="pt-0 mt-4">
          <v-row class="pt-6 mt-0">
            <h3 class="header_dims page_headers">
              {{ $t("navbar.navdrawer.Settings") }}
            </h3>
          </v-row>

          <v-row>
            <v-col cols="6">
              <v-row  class="height_365 space">
                <FbConnect />
              </v-row>
              <v-row class="height_247 space">
                <SetTimezone />
              </v-row>
              <v-row class="height_247">
                <InstructionalVids />
              </v-row>
            </v-col>
            <v-col cols="6 pt-0">
              <v-col cols="12" class="height_247 space ">
                <AddYourPhoneNumber />
              </v-col>
              <v-col class="space height_247 pad_no_space">
                <UpgradeCard />
              </v-col>

              <v-col class="height_365 space pad_no_space">
                <AccountInfo />
              </v-col>
            </v-col>
          </v-row>
          <!-- <v-row style="height:50px; width:99%; background-color:#E6E7E8">
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
    </v-col>
  </v-col>
</template>

<script>
import UpgradeCard from "@/components/Settings/UpgradeCard.vue";
import FbConnect from "@/components/Settings/FbConnect.vue";
import AccountInfo from "@/components/Settings/AccountInfo.vue";
import SetTimezone from "@/components/Settings/SetTimezone.vue";
import InstructionalVids from "@/components/Settings/InstructionalVids.vue";
import AddYourPhoneNumber from "@/components/Settings/AddYourPhoneNumber.vue";

export default {
  name: "Settings",
  components: {
    FbConnect,
    SetTimezone,
    UpgradeCard,
    AccountInfo,
    InstructionalVids,
    AddYourPhoneNumber,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.div-style {
  padding: 2px;
  margin: 2px;
  border: 10px rgb(4, 51, 53);
}

.infoicon_scale {
  transform: scale(0.8);
}

.space{
  margin-bottom: 28px;
  padding-bottom: 0px !important;
}

.height_247{
  height: 247px !important;
}

.height_365{
  height:365px !important;;
}
.pad_no_space{
  padding-top:0px !important;
  padding-bottom: 0px !important;
}

@media (min-width: 1400px) {
  .infoicon_scale {
    transform: scale(1);
  }
}
</style>
