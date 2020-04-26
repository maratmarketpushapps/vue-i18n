<template>
  <v-container>
    <v-row class="pl-3">
      <v-col cols="6">
        <h3>{{ $t("settingsPage.tzCard.header") }}</h3>
      </v-col>
      <v-col cols="6" class="pa-2 pb-0">
        <v-row align="center" justify="end" class="pr-3"
          ><TooltipIcon
            :posRight="true"
            :nudgeBottom="30"
            :nudgeLeft="5"
            :txt="$t('settingsPage.tzCard.tooltipText')"
        /></v-row>
      </v-col>
    </v-row>

    <v-row align="center" justify="center" style="height:80% " class="pt-0">
      <v-col>
        <v-row justify="center" class="pl-4 pr-3"
          ><v-col>
            <v-select
              :label="$t('settingsPage.tzCard.label')"
              :items="pageList"
              :placeholder="defTmz"
              height="40px"
              @change="enableSave"
              v-model="timezone_id"
            >
            </v-select> </v-col
        ></v-row>
        <v-row justify="center" class="pt-2 pb-0 mb-0">
          <v-btn
            tile
            large
            class="primary"
            width="175px"
            :disabled="btnDisable"
            @click="saveSettings"
          >
            {{ $t("settingsPage.fbCard2.buttonText") }}
          </v-btn></v-row
        >
      </v-col>
    </v-row>
  </v-container>
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
      this.$store.dispatch("updateTimezone", this.timezone_id).then((res)=>{
        if(res==='success'){
          this.$store.dispatch("setSettings").then((response)=>{
            if (response==='success'){
              console.log("Settings API refreshed");
              this.btnDisabled=true;
            }
            else{
              console.log("Settings API not refreshed");
            }
          })
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

<style></style>
