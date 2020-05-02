<template>
  <v-card tile height="37vh" width="97%" class="font_dims" >
    <v-container fluid >
      <v-row class="pl-3 pb-0 mb-0">
        <v-col cols="6" class="pb-0 mb-0">
          <h3 >{{ $t("settingsPage.tzCard.header") }}</h3>
        </v-col>
        <v-col cols="6" class="pa-0 pb-0 mb-0">
          <v-row align="center" justify="end" class="pr-6 pt-1 pb-0 mb-0"
            ><TooltipIcon
              :posRight="true"
              :nudgeBottom="30"
              :nudgeLeft="5"
              :txt="$t('settingsPage.tzCard.tooltipText')"
              style="transform: scale(0.8)"
          /></v-row>
        </v-col>
      </v-row>

      <v-row align="center" justify="center" style="height:100% " class="pb-0 pt-0 mt-3 mb-3">
        <v-col class="pt-0 mt-0">
          <v-row justify="center" class="pl-4 pr-3 pt-0 pb-0 mb-0"
            ><v-col class="pb-0 mb-0">
              <v-select
                :label="$t('settingsPage.tzCard.label')"
                :items="pageList"
                :placeholder="defTmz"
                @change="enableSave"
                v-model="timezone_id"
                dense
                style="font-size:110%"
              >
              </v-select> </v-col
          ></v-row>
          <v-row justify="center" class="pt-2 pb-2 mb-2 mt-3">
            <v-btn
              tile
              medium
              class="primary"
              width="25%"
              :disabled="btnDisable"
              @click="saveSettings"
              style="font-size:100%"
            >
              {{ $t("settingsPage.fbCard2.buttonText") }}
            </v-btn></v-row
          >
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import TooltipIcon from "@/components/svgIcons/TooltipIcon.vue";
import moment from "moment-timezone";
import { mapGetters } from "vuex";
export default {
  name: "SetTimezone",
  components: {
    TooltipIcon,
  },
  data() {
    return {
      btnDisabled: true,
      pageList: moment.tz.names(),
      timezone_id: "",
    };
  },
  methods: {
    enableSave() {
      this.btnDisabled = false;
    },
    saveSettings() {
      this.$store.dispatch("updateTimezone", this.timezone_id).then((res) => {
        if (res === "success") {
          this.$store.dispatch("setSettings").then((response) => {
            if (response === "success") {
              console.log("Settings API refreshed");
              this.btnDisabled = true;
            } else {
              console.log("Settings API not refreshed");
            }
          });
        }
      });
    },
  },
  computed: {
    ...mapGetters(["getSettingsState"]),
    btnDisable() {
      return this.btnDisabled;
    },
    defTmz() {
      return this.getSettingsState.timezone_id == ""
        ? moment.tz.guess()
        : this.getSettingsState.timezone_id;
    },
  },
};
</script>

<style scoped>


.v-select >>> label{
  font-size: 100% !important;
}

.v-select {
  height: 70% !important;
}


.font_dims{
  font-size: 60% !important;
  overflow: hidden;
}

</style>
