<template>
  <div class="svgdiv_dim">
    <v-container>
      <v-row
        v-if="!detectClick"
        align-content="center"
        justify="center"
        class="pb-3 pr-2"
      >
        <svg-transition ref="transition" trigger="hover" class="svgicon_dim">
          <SettingsInactive slot="initial" />
          <SettingsActive />
        </svg-transition>
      </v-row>
      <v-row v-else align-content="center" justify="center" class="pb-3 pr-1">
        <SettingsActive class="svgicon-active_dim" />
      </v-row>

      <v-row align-content="center" justify="center" class="pr-2">
        <span class="span-prop white--text">
          {{ $t("navbar.navdrawer.Settings") }}
        </span>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SettingsActive from "@/assets/icons/sidebar/icon-settings-active.svg";
import SettingsInactive from "@/assets/icons/sidebar/icon-settings-inactive.svg";

export default {
  name: "SettingsIcon",
  data() {
    return {};
  },
  components: { SettingsActive, SettingsInactive },
  methods: {
    transition() {
      this.$refs.transition.performTransition();
    },
  },
  computed: {
    ...mapGetters(["checkClicked", "checkHover"]),
    detectClick() {
      return this.checkClicked("Settings") || this.checkHover("Settings")
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
.svgicon-active_dim {
  width: 35px;
  height: 35px;
  align-content: center;
}

.span-prop {
  font-size: 20px;
  white-space: normal;
  align-content: center;
}
</style>
