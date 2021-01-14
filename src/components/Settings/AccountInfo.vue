<template>
  <v-card tile height="103%" width="97%" class=" pt-3 px-7 font_dims">
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
            class="infoicon_scale"
        /></v-row>
      </v-col>
    </v-row>
    <v-row
      style="width:100%; height:80%; padding-top:2%"
      align="center"
      justify="center"
      class="pt-0 mt-0 pr-0"
    >
      <v-col>
        <v-form v-model="formValid">
          <v-text-field
            :label="$t('settingsPage.accInfoCard.label1')"
            v-model="first_name"
            @change="detectChange"
            @input="detectChange"
            dense
            style="font-size:110%"
            class="pt-0 pb-1"
          >
          </v-text-field>
          <v-text-field
            :label="$t('settingsPage.accInfoCard.label2')"
            v-model="last_name"
            @change="detectChange"
            @input="detectChange"
            dense
            style="font-size:110%"
            class="pt-2 pb-1"
          >
          </v-text-field>
          <v-text-field
            :label="$t('settingsPage.accInfoCard.label4')"
            v-model="buss_name"
            @change="detectChange"
            @input="detectChange"
            dense
            style="font-size:110%"
            class="pt-2 pb-1"
          >
          </v-text-field>
          <v-text-field
            :label="$t('settingsPage.accInfoCard.label3')"
            v-model="email"
            @change="detectChange"
            @input="detectChange"
            dense
            style="font-size:110%"
            class="pt-2 pb-1"
            :rules="emailRules"
          >
          </v-text-field>
        </v-form>
        <v-row justify="center" style="padding-top:3%">
          <v-btn
            tile
            height="40px"
            class="primary mb-2"
            width="20%"
            :disabled="btnStatus"
            @click="updAccInfo"
          >
            {{ $t("settingsPage.accInfoCard.buttonText") }}
          </v-btn></v-row
        >
      </v-col>
    </v-row>
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
      buss_name:"",
      email: "",
      emailRules: [
        (v) =>
          !v ||
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid",
      ],
      formValid: false,
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
        business_name:
          this.buss_name == "" ? this.accInfo.business_name : this.buss_name,
        email: this.email == "" ? this.accInfo.email : this.email,
      };

      this.$store.dispatch("updIsLoading", true).then(() => {
        this.$store.dispatch("updAccInfo", obj).then((res) => {
          if (res === "success") {
            this.$store.dispatch("setSettings").then((response) => {
              this.$store.dispatch("updIsLoading", false);
              if (response === "success") {
                // console.log("Settings API refreshed");
                this.btnDisabled = true;
              } else {
                // console.log("Settings API not refreshed");
              }
            });
          }
        });
      });
    },
  },
  beforeCreate() {
    this.$store.dispatch("updIsLoading", true).then(() => {
      this.$store.dispatch("getSettings").then((res) => {
        if (res === "success") {
          this.first_name = this.$store.getters.getAccountInfo.first_name;
          this.last_name = this.$store.getters.getAccountInfo.last_name;
          this.buss_name = this.$store.getters.getAccountInfo.business_name
          this.email = this.$store.getters.getAccountInfo.email;
          this.$store.dispatch("updIsLoading", false);
        }
      });
    });
  },
  computed: {
    ...mapGetters(["getAccountInfo"]),
    btnStatus() {
      return this.btnDisabled || !this.formValid ? true : false;
    },
    accInfo() {
      let obj = this.getAccountInfo;
      return obj;
    },
  },
};
</script>

<style>
.v-text-field label {
  font-size: 100%;
}

.v-application--is-ltr .v-messages {
  text-align: left;
  font-style: oblique;
}
</style>
