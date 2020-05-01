<template>
  <v-card tile height="48vh" width="97%" class="pa-3 pt-0 ">
    <v-container fluid class="font_dims">
      <v-row>
        <v-col cols="6">
          <h3>{{ $t("settingsPage.accInfoCard.header") }}</h3>
        </v-col>
        <v-col cols="6" class="pa-2 pt-0">
          <v-row align="center" justify="end" class="pr-1 pt-1"
            ><TooltipIcon
              :posLeft="true"
              :nudgeRight="10"
              :nudgeBottom="10"
              :txt="$t('settingsPage.accInfoCard.tooltipText')"
              style="transform: scale(.8)"
          /></v-row>
        </v-col>
      </v-row>
      <v-text-field
        :label="$t('settingsPage.accInfoCard.label1')"
        :placeholder="accInfo.first_name"
        v-model="first_name"
        @change="detectChange"
        dense
        style="font-size:110%"
        class="pt-4"
      >
      </v-text-field>
      <v-text-field
        :label="$t('settingsPage.accInfoCard.label2')"
        :placeholder="accInfo.last_name"
        v-model="last_name"
        @change="detectChange"
        dense
        style="font-size:110%"
      >
      </v-text-field>
      <v-text-field
        :label="$t('settingsPage.accInfoCard.label3')"
        :placeholder="accInfo.email"
        v-model="email"
        @change="detectChange"
        dense
        style="font-size:110%"
      >
      </v-text-field>
      <v-row justify="center" class="pt-3 pb-5 mb-5">
        <v-btn
          tile
          medium
          class="primary mb-2"
          width="25%"
          :disabled="btnStatus"
          @click="updAccInfo"
          style="font-size:100%"
        >
          {{ $t("settingsPage.accInfoCard.buttonText") }}
        </v-btn></v-row
      >
    </v-container>
  </v-card>
</template>

<script>
import TooltipIcon from "@/components/svgIcons/TooltipIcon.vue";
import { mapGetters } from "vuex";
export default {
  name: "AccountInfo",
  components: {
    TooltipIcon,
  },
  data() {
    return {
      btnDisabled: true,
      first_name: "",
      last_name: "",
      email: "",
    };
  },
  methods: {
    detectChange() {
      this.btnDisabled = false;
    },
    updAccInfo() {
      let obj = {
        first_name:
          this.first_name == "" ? this.accInfo.first_name : this.first_name,
        last_name:
          this.last_name == "" ? this.accInfo.last_name : this.last_name,
        email: this.email == "" ? this.accInfo.email : this.email,
      };

      this.$store.dispatch("updAccInfo", obj).then((res) => {
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
    ...mapGetters(["getAccountInfo"]),
    btnStatus() {
      return this.btnDisabled;
    },
    accInfo() {
      let obj = this.getAccountInfo;
      return obj;
    },
  },
};
</script>

<style>
.font_dims{
  font-size: 60% !important;
  overflow: hidden;
}

.v-text-field label{
  font-size: 100%;
}
</style>
