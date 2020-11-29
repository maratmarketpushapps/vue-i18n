<template>
  <v-container fluid style=" height:1000px" class="app_background">
    <v-row style="height:50%; width:100%; margin-bottom:1%">
      <v-col cols="6">
        <v-card height="100%" width="100%" tile class="font_dims px-4">
          <v-row style="height:15%; width:100%" align="center">
            <v-col cols="6">
              <v-row justify="start" align="center" class="ml-5 mt-2">
                <h3>{{ $t("dashboard.card1.header") }}</h3>
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-row justify="end" align="center" class=" mt-0 ">
                <TooltipIcon
                  :posRight="true"
                  :nudgeBottom="30"
                  :nudgeLeft="5"
                  :txt="$t('dashboard.card1.infoconMsg')"
                  class="infoicon_scale pt-0"
                />
              </v-row>
            </v-col>
          </v-row>
          <v-row style="height:25%; width:100%">
            <v-col cols="auto">
              <v-row justify="start" align="end" class="ml-5 mt-2">
                <span class="msgCount">
                  {{ dashVars.campaigns.total_messages }}
                </span>
                <span class="mb-2 ml-2 countLabel">
                  {{ $t("dashboard.card1.totalMsg") }}
                </span>
              </v-row>
            </v-col>
          </v-row>
          <v-row style="height:20%; width:100%">
            <v-col cols="12">
              <v-row style="width:100%" class="ml-5 mt-0 pr-0">
                <v-col cols="6">
                  <v-row style="width:100%">
                    <span>{{ $t("dashboard.card1.recov1Msg") }}</span>
                  </v-row>
                </v-col>
                <v-col cols="6">
                  <v-row style="width:100%" justify="end">
                    <span style="color:#5686F6; font-weight:900">{{
                      dashVars.campaigns.recovery_messages_nr1_sent
                    }}</span>
                  </v-row>
                </v-col>
              </v-row>
              <v-row
                justify="start"
                align="center"
                class="ml-5 mt-0 pr-6"
                style="width:100%"
              >
                <v-progress-linear
                  color="#5686F6"
                  :value="recovMsg1Percent"
                  height="5px"
                  background-color="#E6E7E8"
                  style="width:100%"
                >
                </v-progress-linear>
              </v-row>
            </v-col>
          </v-row>
          <v-row style="height:20%; width:100%">
            <v-col cols="12">
              <v-row style="width:100%" class="ml-5 mt-0 pr-0">
                <v-col cols="6">
                  <v-row style="width:100%">
                    <span> {{ $t("dashboard.card1.recov2Msg") }}</span>
                  </v-row>
                </v-col>
                <v-col cols="6">
                  <v-row style="width:100%" justify="end">
                    <span style="color:#5686F6; font-weight:900">{{
                      dashVars.campaigns.recovery_messages_nr2_sent
                    }}</span>
                  </v-row>
                </v-col>
              </v-row>
              <v-row
                justify="start"
                align="center"
                class="ml-5 mt-0 pr-6"
                style="width:100%"
              >
                <v-progress-linear
                  color="#5686F6"
                  :value="recovMsg2Percent"
                  height="5px"
                  background-color="#E6E7E8"
                  style="width:100%"
                >
                </v-progress-linear>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card height="100%" width="100%" tile class="font_dims">
          <v-row style="height:15%; width:100%" align="center">
            <v-col cols="6">
              <v-row justify="start" align="center" class="ml-5 mt-0">
                <h3>{{ $t("dashboard.card2.header") }}</h3>
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-row justify="end" align="center" class=" mt-0 ">
                <TooltipIcon
                  :posRight="true"
                  :nudgeBottom="30"
                  :nudgeLeft="5"
                  :txt="$t('dashboard.card2.infoconMsg')"
                  class="infoicon_scale pt-0"
                />
              </v-row>
            </v-col>
          </v-row>
          <v-row
            style="height:15%; width:100%"
            justify="center"
            class="mt-0 mb-0 pt-0"
          >
            <v-row
              style="height:75%; width:100%"
              justify="center"
              class="mt-0 mx-2"
            >
              <span class="msgCount">
                {{ dashVars.carts_recovered.total_recovered }}
              </span>
            </v-row>
            <v-row
              style="height:75%; width:100%"
              justify="center"
              class="mt-0 mx-2"
            >
              <span class="countLabel">
                {{ $t("dashboard.card2.recovLabel") }}
              </span>
            </v-row>
          </v-row>
          <v-row style="height:45%; width:100%" justify="center" align="center">
            <v-progress-circular
              :value="dashVars.carts_recovered.carts_recovered_percentage || 0"
              rotate="270"
              color="#006AFF"
              size="140"
              class="circularProgress"
            >
              {{ dashVars.carts_recovered.carts_recovered_percentage }}
            </v-progress-circular>
          </v-row>
          <v-row
            style="height:15%; width:100%"
            justify="center"
            class="mt-0 mb-0 pt-0"
          >
            <v-row
              style="height:75%; width:100%; font-size:85%"
              justify="center"
              class="mt-0 mx-1"
            >
              <span class="msgCount">
                {{ dashVars.carts_recovered.total_abandoned }}
              </span>
            </v-row>
            <v-row
              style="height:75%; width:100%"
              justify="center"
              class="mt-0 mx-2"
            >
              <span class="countLabel">
                {{ $t("dashboard.card2.abndndLabel") }}
              </span>
            </v-row>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card height="100%" width="100%" tile class="font_dims">
          <v-row style="height:15%; width:100%" align="center">
            <v-col cols="6">
              <v-row justify="start" align="center" class="ml-5 mt-0">
                <h3>{{ $t("dashboard.card3.header") }}</h3>
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-row justify="end" align="center" class=" mt-0 ">
                <TooltipIcon
                  :posLeft="true"
                  :nudgeBottom="30"
                  :nudgeLeft="5"
                  :txt="$t('dashboard.card3.infoconMsg')"
                  class="infoicon_scale pt-0"
                />
              </v-row>
            </v-col>
          </v-row>
          <v-row
            style="height:15%; width:100%"
            justify="center"
            class="mt-0 mb-0 pt-0"
          >
            <v-row
              style="height:75%; width:100%"
              justify="center"
              class="mt-0 mx-2"
            >
              <span class="msgCount">
                {{ dashVars.revenue_recovered.total_revenue_recovered }}
              </span>
            </v-row>
            <v-row
              style="height:75%; width:100%"
              justify="center"
              class="mt-0 mx-2"
            >
              <span class="countLabel">
                {{ $t("dashboard.card3.recovLabel") }}
              </span>
            </v-row>
          </v-row>
          <v-row style="height:45%; width:100%" justify="center" align="center">
            <v-progress-circular
              :value="
                dashVars.revenue_recovered.revenue_recovered_percentage || 0
              "
              :rotate="270"
              color="#006AFF"
              size="140"
              class="circularProgress"
            >
              {{ dashVars.revenue_recovered.revenue_recovered_percentage }}
            </v-progress-circular>
          </v-row>
          <v-row
            style="height:15%; width:100%"
            justify="center"
            class="mt-0 mb-0 pt-0"
          >
            <v-row
              style="height:75%; width:100%; font-size:85%"
              justify="center"
              class="mt-0 mx-1"
            >
              <span class="msgCount">
                {{ dashVars.revenue_recovered.total_revenue_lost }}
              </span>
            </v-row>
            <v-row
              style="height:75%; width:100%"
              justify="center"
              class="mt-0 mx-2"
            >
              <span class="countLabel">
                {{ $t("dashboard.card3.abndndLabel") }}
              </span>
            </v-row>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row style="height:50%; width:100%">
      <v-col cols="12">
        <v-card height="100%" width="100%" tile class="font_dims px-4">
          <v-row style="height:15%; width:100%">
            <v-col cols="6">
              <v-row justify="start" class="ml-5 mt-2">
                <h3>{{ $t("dashboard.card4.header") }}</h3>
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-row justify="end" class=" mt-0 ">
                <TooltipIcon
                  :posLeft="true"
                  :nudgeBottom="30"
                  :nudgeLeft="5"
                  :txt="$t('dashboard.card4.infoconMsg')"
                  class="infoicon_scale pt-0"
                />
              </v-row>
            </v-col>
          </v-row>
          <v-row style="height:20%; width:100%">
            <v-col cols="auto">
              <v-row justify="start" align="end" class="ml-5 mt-2">
                <span class="msgCount">
                  {{ dashVars.cart_recovery.total_recovered }}
                </span>
                <span class="mb-2 ml-2 countLabel">
                  {{ $t("dashboard.card4.totalMsg") }}
                </span>
              </v-row>
            </v-col>
          </v-row>
          <v-row style="height:15%; width:100%" class="pt-0 mt-0">
            <v-col cols="12">
              <v-row style="width:100%" class="ml-5 mt-0 pr-0">
                <v-col cols="6">
                  <v-row style="width:100%">
                    <span>{{ $t("dashboard.card4.abndndLabel") }}</span>
                  </v-row>
                </v-col>
                <v-col cols="6">
                  <v-row style="width:100%" justify="end">
                    <span style="color:#F25A5A; font-weight:900">{{
                      dashVars.cart_recovery.abandoned_carts
                    }}</span>
                  </v-row>
                </v-col>
              </v-row>
              <v-row
                justify="start"
                align="center"
                class="ml-5 mt-0 pr-6"
                style="width:100%"
              >
                <v-progress-linear
                  color="#F25A5A"
                  :value="abndndCartPcnt"
                  height="5px"
                  background-color="#E6E7E8"
                  style="width:100%"
                >
                </v-progress-linear>
              </v-row>
            </v-col>
          </v-row>
          <v-row style="height:15%; width:100%">
            <v-col cols="12">
              <v-row style="width:100%" class="ml-5 mt-0 pr-0">
                <v-col cols="6">
                  <v-row style="width:100%">
                    <span>{{ $t("dashboard.card4.subLabel") }}</span>
                  </v-row>
                </v-col>
                <v-col cols="6">
                  <v-row style="width:100%" justify="end">
                    <span style="color:#5686F6; font-weight:900">{{
                      dashVars.cart_recovery.facebook_subscribers
                    }}</span>
                  </v-row>
                </v-col>
              </v-row>
              <v-row
                justify="start"
                align="center"
                class="ml-5 mt-0 pr-6"
                style="width:100%"
              >
                <v-progress-linear
                  color="#5686F6"
                  :value="fbSubPcnt"
                  height="5px"
                  background-color="#E6E7E8"
                  style="width:100%"
                >
                </v-progress-linear>
              </v-row>
            </v-col>
          </v-row>
          <v-row style="height:20%; width:100%">
            <v-col cols="12">
              <v-row style="width:100%" class="ml-5 mt-0 pr-0">
                <v-col cols="6">
                  <v-row style="width:100%">
                    <span>{{ $t("dashboard.card4.recovLabel") }}</span>
                  </v-row>
                </v-col>
                <v-col cols="6">
                  <v-row style="width:100%" justify="end">
                    <span style="color:#6DE889; font-weight:900">{{
                      dashVars.cart_recovery.carts_recovered
                    }}</span>
                  </v-row>
                </v-col>
              </v-row>
              <v-row
                justify="start"
                align="center"
                class="ml-5 mt-0 pr-6"
                style="width:100%"
              >
                <v-progress-linear
                  color="#6DE889"
                  :value="cartRecovPcnt"
                  height="5px"
                  background-color="#E6E7E8"
                  style="width:100%"
                >
                </v-progress-linear>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TooltipIcon from "@/components/svgIcons/TooltipIcon.vue";
import moment from "moment-timezone";

export default {
  name: "DashboardView",
  props: ["startDate", "endDate"],
  components: { TooltipIcon },
  data() {
    return {
      recovMsg1Percent: 0,
      recovMsg2Percent: 0,
      abndndCartPcnt: 0,
      fbSubPcnt: 0,
      cartRecovPcnt: 0,
    };
  },
  mounted() {
    this.$store.dispatch("updIsLoading", true).then(() => {
      this.$store.dispatch("getSettings").then(() => {
        if (this.$store.getters.getSettingsState.timezone_id == "") {
          this.$store.dispatch("updateTimezone", moment.tz.guess()).then(() => {
            this.$store.dispatch("setSettings").then(() => {
              this.$store
                .dispatch("getDash", {
                  startDate: this.startDate,
                  endDate: this.endDate,
                })
                .then(() => {
                  this.recovMsg1Percent =
                    (this.$store.getters.getDash.campaigns
                      .recovery_messages_nr1_sent *
                      100) /
                    this.$store.getters.getDash.campaigns.total_messages;
                  this.recovMsg2Percent =
                    (this.$store.getters.getDash.campaigns
                      .recovery_messages_nr2_sent *
                      100) /
                    this.$store.getters.getDash.campaigns.total_messages;
                  this.abndndCartPcnt =
                    (this.$store.getters.getDash.cart_recovery.abandoned_carts *
                      100) /
                    this.$store.getters.getDash.cart_recovery.abandoned_carts;
                  this.fbSubPcnt =
                    (this.$store.getters.getDash.cart_recovery
                      .facebook_subscribers *
                      100) /
                    this.$store.getters.getDash.cart_recovery.abandoned_carts;
                  this.cartRecovPcnt =
                    (this.$store.getters.getDash.cart_recovery.carts_recovered *
                      100) /
                    this.$store.getters.getDash.cart_recovery.abandoned_carts;
                  this.$store.dispatch("updIsLoading", false);
                });
            });
          });
        } else {
          this.$store
            .dispatch("getDash", {
              startDate: this.startDate,
              endDate: this.endDate,
            })
            .then(() => {
              this.recovMsg1Percent =
                (this.$store.getters.getDash.campaigns
                  .recovery_messages_nr1_sent *
                  100) /
                this.$store.getters.getDash.campaigns.total_messages;
              this.recovMsg2Percent =
                (this.$store.getters.getDash.campaigns
                  .recovery_messages_nr2_sent *
                  100) /
                this.$store.getters.getDash.campaigns.total_messages;
              this.abndndCartPcnt =
                (this.$store.getters.getDash.cart_recovery.abandoned_carts *
                  100) /
                this.$store.getters.getDash.cart_recovery.abandoned_carts;
              this.fbSubPcnt =
                (this.$store.getters.getDash.cart_recovery
                  .facebook_subscribers *
                  100) /
                this.$store.getters.getDash.cart_recovery.abandoned_carts;
              this.cartRecovPcnt =
                (this.$store.getters.getDash.cart_recovery.carts_recovered *
                  100) /
                this.$store.getters.getDash.cart_recovery.abandoned_carts;
              this.$store.dispatch("updIsLoading", false);
            });
        }
      });
    });
  },
  computed: {
    dashVars() {
      return this.$store.getters.getDash;
    },
  },
};
</script>

<style scoped>
.msgCount {
  font-size: 250%;
  color: #006aff;
  font-weight: 900;
}

.countLabel {
  font-size: 120%;
  font-weight: 500;
  color: #4e5d6b;
}

.circularProgress {
  font-size: 200%;
}
</style>
