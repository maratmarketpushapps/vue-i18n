<template>
  <div class="svgdiv_dim">
    <v-container>
      <v-row
        v-if="!detectClick"
        align-content="center"
        justify="center"
        class="pb-4"
      >
        <svg-transition ref="transition" trigger="hover" class="svgicon_dim">
          <CampaignsInactive slot="initial" />
          <CampaignsActive />
        </svg-transition>
      </v-row>
      <v-row v-else align-content="center" justify="center" class="pb-3 pr-1">
        <CampaignsActive class="svgicon-active_dim" />
      </v-row>
      <v-row align-content="center" justify="center">
        <span class="span-prop white--text">
          {{ $t("navbar.navdrawer.Campaigns") }}
        </span>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CampaignsActive from "@/assets/icons/sidebar/icon-campaigns-active.svg";
import CampaignsInactive from "@/assets/icons/sidebar/icon-campaigns-inactive.svg";

export default {
  name: "CampaignsIcon",
  components: { CampaignsActive, CampaignsInactive },
  methods: {
    transition() {
      this.$refs.transition.performTransition();
    },
  },
  computed: {
    ...mapGetters(["checkClicked"]),
    detectClick() {
      return this.checkClicked("Campaigns") ? true : false;
    },
  },
};
</script>

<style>
.svgdiv_dim {
  width: 70px;
  height: 70px;
  align-content: center;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  fill: #fff;
}

.svgicon_dim {
  width: 35px;
  height: 35px;
  align-content: center;
}

.span-prop {
  font-size: 10px;
  white-space: nowrap;
  align-content: center;
}
</style>
