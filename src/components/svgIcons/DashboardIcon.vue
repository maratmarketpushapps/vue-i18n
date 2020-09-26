<template>
  <div class="svgdiv_dim">
    <v-container>
      <v-row
        v-if="!detectClick"
        align-content="center"
        justify="center"
        class="pb-2 pr-2"
      >
        <svg-transition ref="transition" trigger="hover" class="svgicon_dim">
          <DashboardInactive slot="initial" />
          <DashboardActive />
        </svg-transition>
      </v-row>
      <v-row v-else align-content="center" justify="center" class="pb-2 pr-2">
        <DashboardActive class="svgicon-active_dim" />
      </v-row>
      <v-row align-content="center" justify="center" class="pr-2">
        <span class="span-prop white--text">
          {{ $t("navbar.navdrawer.Dashboard") }}
        </span>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import DashboardActive from "@/assets/icons/sidebar/icon-dashboard-active.svg";
import DashboardInactive from "@/assets/icons/sidebar/icon-dashboard-inactive.svg";

export default {
  name: "DashboardIcon",
  components: { DashboardActive, DashboardInactive },
  methods: {
    transition() {
      this.$refs.transition.performTransition();
    },
  },
  computed: {
    ...mapGetters(["checkClicked","checkHover"]),
    detectClick() {
      return this.checkClicked("Dashboard") || this.checkHover("Dashboard")
        ? true
        : false;
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
