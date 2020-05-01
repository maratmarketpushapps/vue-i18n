<template>
  <v-card
    tile
    height="50vh"
    width="97%"
    class="pl-7 pt-5 pr-9 font_dims"
    style="position:static !important"
  >
    <v-row>
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
            style="transform: scale(.8)"
        /></v-row>
      </v-col>
    </v-row>
    <transition-group name="fbcomps">
      <v-row
        v-show="fbStep == 1"
        align="center"
        justify="center"
        style="height:80% "
        class="pa-12"
        key="fbStep1"
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
              width="170px"
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
            <a
              href="https://www.facebook.com/pages/create/?ref_type=universal_creation_hub"
              target="_blank"
              >{{ $t("settingsPage.fbCard1.hrefText") }}</a
            >
          </v-row>
        </v-col>
      </v-row>
      <v-row
        v-show="fbStep == 2"
        align="center"
        justify="center"
        class="pt-0"
        key="fbStep2"
      >
        <v-col>
          <v-row justify="start" class="pb-6 mb-6 pl-4 pr-2">
            {{ $t("settingsPage.fbCard2.subheader") }}</v-row
          >
          <v-row align="start" class="pl-4 pr-3 pt-0 mt-0"
            ><v-select
              :label="$t('settingsPage.fbCard2.dropdownHeader')"
              :items="pageList"
              v-model="PageSelectedId"
              dense
              class="pt-0 select_page"
              style="font-size:110%"
            >
            </v-select
          ></v-row>
          <v-row
            justify="center"
            class="pl-4 pt-0 mt-0 pr-3 fbcard2-btnfooter_text"
          >
            {{ $t("settingsPage.fbCard2.dropdownSubText") }}</v-row
          >
          <v-row justify="center" class="mt-8 pt-2 pb-0 mb-0">
            <v-btn
              tile
              medium
              class="primary"
              @click="step2Comp()"
              width="28%"
              :disabled="card2BtnDisable"
              style="font-size:100%"
            >
              {{ $t("settingsPage.fbCard2.buttonText") }}
            </v-btn></v-row
          >
        </v-col>
      </v-row>
    </transition-group>

    <v-row
      v-show="fbStep == 3"
      align="center"
      justify="center"
      style="height:80% "
      class="pa-12"
      key="fbStep3"
    >
      <transition name="card3">
        <v-col>
          <v-row justify="center" class="pb-10"
            >{{ $t("settingsPage.fbCard3.msg1") }}
            <b class="pl-1 pr-1">{{ card3Msg }}</b>
            {{ $t("settingsPage.fbCard3.msg2") }}
          </v-row>
          <v-row justify="center" class="pt-10 pb-1 mb-0">
            <v-btn
              tile
              medium
              class="primary"
              @click="step3Comp()"
              width="35%"
              style="font-size:100%"
            >
              {{ $t("settingsPage.fbCard3.buttonText") }}
            </v-btn></v-row
          >
        </v-col>
      </transition>
    </v-row>
  </v-card>
</template>

<script>
import TooltipIcon from "@/components/svgIcons/TooltipIcon.vue";
import fbIcon from "@/assets/icons/settings/fbIcon.svg";
export default {
  name: "FbConnect",
  components: {
    TooltipIcon,
    fbIcon,
  },
  data() {
    return {
      fbStep: 1,
      PageSelectedId: 1,
      pageList: [
        {
          value: 1,
          text: "Your Business Name",
          disabled: true,
        },
        {
          value: 2,
          text: "FB Page1",
          disabled: false,
        },
        {
          value: 3,
          text: "FB Page2",
          disabled: false,
        },
      ],
    };
  },
  methods: {
    step1Comp() {
      this.fbStep = 2;
    },
    step2Comp() {
      this.fbStep = 3;
    },
    step3Comp() {
      this.fbStep = 1;
      this.PageSelectedId = 1;
    },
  },
  computed: {
    card2BtnDisable() {
      return this.PageSelectedId == 1 ? true : false;
    },
    card3Msg() {
      let pageObj = this.pageList.find((o) => o.value === this.PageSelectedId);
      return ` ${pageObj.text} `;
    },
  },
};
</script>

<style>
.fbbtn {
  border: 1px solid #3a559f;
  border-radius: 2px;
  text-transform: none;
}
.fbicon {
  fill: white;
  justify-self: left;
}
.fbcomps-enter-active,
.fbcomps-leave-active,
.card3-enter-active,
.card3-leave-active {
  transition: all 0.5s;
}
.fbcomps-enter-active,
.card3-enter-active {
  transition-delay: 0.5s;
}

.fbcomps-enter,
.card3-enter {
  opacity: 0;
}
.fbcomps-leave-to,
.card3-leave-to {
  opacity: 0;
}
.fbcomps-leave,
.card3-leave {
  opacity: 1;
}
.fbcard2-btnfooter_text {
  font-size: 90% !important;
  word-wrap: normal;
}

.font_dims {
  font-size: 60% !important;
  overflow: hidden;
}

.select_page >>> label {
  font-size: 100% !important;
}

.font_dims_fb {
  font-size: 75% !important;
  overflow: hidden;
}
</style>
