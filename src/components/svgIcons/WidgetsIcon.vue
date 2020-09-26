<template>
  <div class="svgdiv_dim">
    <v-container>
      <v-row
        v-if="!detectClick"
        align-content="center"
        justify="center"
        class="pb-2 pr-2 "
      >
        <svg-transition ref="transition" trigger="hover" class="svgicon_dim">
          <WidgetsInactive slot="initial" />
          <WidgetsActive />
        </svg-transition>
      </v-row>
      <v-row v-else align-content="center" justify="center" class="pb-2 pr-2">
        <WidgetsActive class="svgicon-active_dim" />
      </v-row>
      <v-row align-content="center" justify="center" class="pr-2">
        <span class="span-prop white--text">
          {{ $t("navbar.navdrawer.Widgets") }}
        </span>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import WidgetsActive from "@/assets/icons/sidebar/icon-widget-active.svg";
import WidgetsInactive from "@/assets/icons/sidebar/icon-widget-inactive.svg";

export default {
  name: "WidgetsIcon",
  components: { WidgetsActive, WidgetsInactive },
  methods: {
    transition() {
      this.$refs.transition.performTransition();
    },
  },
  computed: {
    ...mapGetters(["checkClicked", "checkHover"]),
    detectClick() {
      return this.checkClicked("Widgets") || this.checkHover("Widgets")
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
