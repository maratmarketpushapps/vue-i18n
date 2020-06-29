<template>
  <v-card
    tile
    height="100%"
    width="97%"
    class="pl-6 pt-3 pr-9 font_dims"
    :key="cardKey"
  >
    <v-row style="height:10%">
      <v-col cols="6">
        <h3>{{ $t("settingsPage.fbCard1.header") }}</h3>
      </v-col>
      <v-col cols="6" class="pa-2 pt-0 pr-0">
        <v-row align="center" justify="end"
          ><TooltipIcon
            :posRight="true"
            :nudgeBottom="30"
            :nudgeLeft="5"
            :txt="$t('settingsPage.fbCard1.tooltipText')"
            class="infoicon_scale"
        /></v-row>
      </v-col>
    </v-row>

    <v-row
      v-show="stepShow == 1"
      align="center"
      justify="center"
      key="fbStep1"
      style="height:80%"
    >
      <v-col>
        <v-row justify="center" class="pb-6">
          {{ $t("settingsPage.fbCard1.buttonHeader") }}</v-row
        >
        <v-row justify="center" class="pt-0 pb-1 mb-0">
          <v-btn
            tile
            large
            class="fbbtn white--text"
            color="#3A559F"
            width="185px"
            @click="step1Comp()"
          >
            <fbIcon class="fbicon pr-2 pl-0" style="transform: scale(.7)" />

            <span class="pl-1 font_dims_fb">
              {{ $t("settingsPage.fbCard1.buttonText") }}</span
            >
          </v-btn></v-row
        >
        <v-row justify="center" class="pt-4">
          <span class="pr-1">{{
            $t("settingsPage.fbCard1.buttonFooter")
          }}</span>
          <span>
            <a
              href="https://www.facebook.com/pages/create/?ref_type=universal_creation_hub"
              target="_blank"
              style="text-decoration:underline"
              >{{ $t("settingsPage.fbCard1.hrefText") }}</a
            >
          </span>
        </v-row>
      </v-col>
    </v-row>
    <v-row
      v-show="stepShow == 2"
      align="center"
      justify="center"
      class="pt-0"
      key="fbStep2"
      style="height:80%"
    >
      <v-col>
        <v-row
          justify="start"
          class="px-4"
          style="padding-top: 0%;
                   padding-bottom: 3%;"
        >
          {{ $t("settingsPage.fbCard2.subheader") }}</v-row
        >
        <v-row
          align="start"
          class="px-4"
          style="padding-top: 5%;
                   padding-bottom: 0%;"
          ><v-select
            :label="$t('settingsPage.fbCard2.dropdownHeader')"
            :items="pageList"
            v-model="PageSelectedId"
            class="pt-0 mt-0 select_page"
            style="font-size:110%;"
          >
          </v-select
        ></v-row>
        <v-row
          justify="center"
          class="pl-4 pr-3 fbcard2-btnfooter_text"
          style="padding-top: 0%;
                   padding-bottom: 5%;"
        >
          {{ $t("settingsPage.fbCard2.dropdownSubText") }}</v-row
        >
        <v-row justify="center" class="fbStep_padding pb-0 mb-0">
          <v-btn
            tile
            height="40px"
            class="primary"
            @click="step2Comp()"
            width="22%"
            :disabled="card2BtnDisable"
            style="font-size:100%"
          >
            {{ $t("settingsPage.fbCard2.buttonText") }}
          </v-btn></v-row
        >
      </v-col>
    </v-row>

    <v-row
      v-show="stepShow == 3"
      align="center"
      justify="center"
      class="pa-12"
      key="fbStep3"
      style="height:80%"
    >
      <v-col>
        <v-row justify="center" class="pb-10"
          >{{ $t("settingsPage.fbCard3.msg1") }}
          <b class="pl-1 pr-1">{{ card3Msg }}</b>
          {{ $t("settingsPage.fbCard3.msg2") }}
        </v-row>
        <v-row justify="center" class="pt-0 pb-1 mb-0">
          <v-btn
            tile
            height="40px"
            class="primary"
            @click="step3Comp()"
            width="30%"
            style="font-size:100%"
          >
            {{ $t("settingsPage.fbCard3.buttonText") }}
          </v-btn></v-row
        >
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import TooltipIcon from "@/components/svgIcons/TooltipIcon.vue";
import fbIcon from "@/assets/icons/settings/fbIcon.svg";
import Vue from "vue";
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "FbConnect",
  components: {
    TooltipIcon,
    fbIcon,
  },
  data() {
    return {
      cardKey: 0,
      fbStep: 0,
      PageSelectedId: 1,
      arrVal: 1,
      pageList: [
        {
          value: 1,
          text: "Your Business Name",
          disabled: true,
        },
      ],
    };
  },
  methods: {
    step1Comp() {
      Vue.FB.getLoginStatus((response) => {
        console.log("FBAUTH status :: " + response.status);

        if (response.status == "connected") {
          let fbUsrId = response.authResponse.userID;
          let accessTokenFB = response.authResponse.accessToken;
          let url = `https://graph.facebook.com/${fbUsrId}/accounts?access_token=${accessTokenFB}`;

          axios
            .get(url)
            .then((res) => {
              console.log("PageResponse ::" + JSON.stringify(res));
              let pgList = JSON.parse(JSON.stringify(res)).data.data;
              pgList.forEach((element) => {
                this.arrVal++;
                let pgObj = {
                  value: this.arrVal,
                  text: element.name,
                  disabled: false,
                  facebook_page_name: element.name,
                  facebook_page_id: element.id,
                  facebook_user_id: fbUsrId,
                  facebook_short_access_token: element.access_token,
                  setup_step_1_completed: true,
                };
                this.pageList.push(pgObj);
              });
              if (this.arrVal - 1 == pgList.length) {
                this.fbStep = 2;
              }
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          Vue.FB.login(
            (resp) => {
              console.log(resp);

              if (resp.status == "connected") {
                let url = `https://graph.facebook.com/${resp.authResponse.userID}/accounts?access_token=${resp.authResponse.accessToken}`;
                let fbUsrId = resp.authResponse.userID;

                axios
                  .get(url)
                  .then((res) => {
                    console.log("PageResponse ::" + JSON.stringify(res));
                    let pgList = JSON.parse(JSON.stringify(res)).data.data;
                    pgList.forEach((element) => {
                      this.arrVal++;
                      let pgObj = {
                        value: this.arrVal,
                        text: element.name,
                        disabled: false,
                        facebook_page_name: element.name,
                        facebook_page_id: element.id,
                        facebook_user_id: fbUsrId,
                        facebook_short_access_token: element.access_token,
                        setup_step_1_completed: true,
                      };
                      this.pageList.push(pgObj);
                    });
                    if (this.arrVal - 1 == pgList.length) {
                      this.fbStep = 2;
                    }
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }
            },
            {
              scope: "pages_show_list,pages_messaging",
              return_scopes: true,
            }
          );
        }
      });
    },
    step2Comp() {
      let pageObj = this.pageList.find((o) => o.value === this.PageSelectedId);
      this.$store.dispatch("updFbSettings", pageObj).then((res) => {
        console.log(res);
        this.$store.dispatch("setSettings").then((response) => {
          console.log(response);
          this.fbStep = 3;
        });
      });
    },
    step3Comp() {
      let fbObj = {
        facebook_page_name: "",
        facebook_page_id: "",
        facebook_user_id: "",
        facebook_short_access_token: "",
        setup_step_1_completed: false,
      };
      this.$store.dispatch("updFbSettings", fbObj).then((res) => {
        console.log(res);
        this.$store.dispatch("setSettings").then((response) => {
          console.log(response);
          this.PageSelectedId = 1;
          this.fbStep = 1;
        });
      });
    },
  },
  beforeCreate() {
    this.$store.dispatch("getSettings").then((res) => {
      if (res === "success") {
        console.log(res);
        console.log("Step to display" + this.fbStep);
        console.log(
          "step1Completed" +
            this.$store.getters.getSettingsState.setup_step_1_completed
        );
        this.fbStep != 2
          ? this.$store.getters.getSettingsState.setup_step_1_completed
            ? (this.fbStep = 3)
            : (this.fbStep = 1)
          : (this.fbStep = 2);
      }
    });
  },
  computed: {
    ...mapGetters(["getSettingsState"]),
    card2BtnDisable() {
      return this.PageSelectedId == 1 ? true : false;
    },
    card3Msg() {
      return ` ${this.getSettingsState.facebook_page_name} `;
    },
    stepShow() {
      return this.fbStep;
    },
  },
};
</script>

<style>
.fbbtn {
  border: 1px solid #3a559f;
  text-transform: none;
}
.fbicon {
  fill: white;
  justify-self: left;
}
.fbcomps-enter-active,
.fbcomps-leave-active {
  transition: all 0.5s;
}
.fbcomps-enter-active {
  transition-delay: 0.5s;
}

.fbcomps-enter {
  opacity: 0;
}
.fbcomps-leave-to {
  opacity: 0;
}
.fbcard2-btnfooter_text {
  font-size: 90% !important;
  word-wrap: normal;
}

.v-select >>> label {
  font-size: 100% !important;
  color: black !important;
}
.v-label--active {
  color: rgba(0, 0, 0, 0.993) !important;
  opacity: 2;
}

.font_dims_fb {
  font-size: 75% !important;
  overflow: hidden;
}
</style>
