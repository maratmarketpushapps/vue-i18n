<template>
  <v-card tile height="100%" width="97%" class="font_dims">
    <v-row class="pl-3  mb-0" style="height:20%">
      <v-col cols="6" class="pb-0 mb-0">
        <h3 class="pt-3 pl-3">{{ $t("settingsPage.tzCard.header") }}</h3>
      </v-col>
      <v-col cols="6">
        <v-row align="center" justify="end" class="pr-6 pt-0 mt-0 pb-0 mb-0"
          ><TooltipIcon
            :posRight="true"
            :nudgeBottom="30"
            :nudgeLeft="5"
            :txt="$t('settingsPage.tzCard.tooltipText')"
            class="infoicon_scale"
        /></v-row>
      </v-col>
    </v-row>
    <v-row style="height:80%" align="center" justify="center">
      <v-col>
        <v-row
          align="center"
          justify="center"
          style="height:100%"
          class="pb-0 pt-0 mt-3 mb-3 px-3"
        >
          <v-col class="pt-0 mt-0">
            <v-row justify="center" class="pl-4 pr-5 pt-0 pb-0 mb-0"
              ><v-col class="pb-0 mb-0">
                <v-select
                  :label="$t('settingsPage.tzCard.label')"
                  :items="pageList"
                  @change="enableSave"
                  v-model="timezone_id"
                  dense
                  style="font-size:110%"
                >
                </v-select> </v-col
            ></v-row>
            <v-row justify="center" align="center" style="padding-top:5%">
              <v-btn
                tile
                height="40px"
                class="primary"
                width="20%"
                :disabled="btnDisable"
                @click="saveSettings"
                style="font-size:100%"
              >
                {{ $t("settingsPage.fbCard2.buttonText") }}
              </v-btn></v-row
            >
          </v-col>
        </v-row>
      </v-col>
    </v-row>
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

  beforeCreate() {
    this.$store.dispatch("getSettings").then((res) => {
      if (res === "success") {
        if (this.$store.getters.getSettingsState.timezone_id == "") {
          this.timezone_id = moment.tz.guess();
          this.$store.dispatch("updateTimezone", moment.tz.guess()).then(() => {
            this.$store.dispatch("setSettings");
          });
        } else {
          this.timezone_id = this.getSettingsState.timezone_id;
        }
      }
    });
  },
  beforeMount() {
    this.timezone_id =
      this.getSettingsState.timezone_id == ""
        ? moment.tz.guess()
        : this.getSettingsState.timezone_id;
  },
};
</script>

<style scoped>
.v-select >>> label {
  font-size: 80% !important;
}

.v-select {
  height: 70% !important;
}
</style>
