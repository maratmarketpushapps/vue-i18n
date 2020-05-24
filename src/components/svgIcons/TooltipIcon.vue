// tooltip component. It accepts the following props for positioning and nudging
// "posLeft", "posRight", "posTop", "posBottom",
"txt","nudgeBottom","nudgeTop","nudgeRight","nudgeLeft"

<template>
  <div class="pa-0 ma-0">
    <v-tooltip
      :left="posLeft"
      :right="posRight"
      :top="posTop"
      :bottom="posBottom"
      open-on-click
      :nudge-bottom="nudgeBottom"
      :nudge-top="nudgeTop"
      :nudge-right="nudgeRight"
      :nudge-left="nudgeLeft"
      content-class="tooltip_color"
    >
      <template v-slot:activator="{ on }">
        <v-btn disable tile icon :ripple="false" class="tooltip_icon" v-on="on">
          <InfoIcon />
        </v-btn>
      </template>
      <span class="tooltip_text" tile>{{ txt }}</span>
    </v-tooltip>
  </div>
</template>

<script>
import InfoIcon from "@/assets/icons/global/icon-info-active.svg";
export default {
  props: [
    "posLeft",
    "posRight",
    "posTop",
    "posBottom",
    "txt",
    "nudgeBottom",
    "nudgeTop",
    "nudgeRight",
    "nudgeLeft",
  ],
  name: "TooltipIcon",
  components: {
    InfoIcon,
  },
};
</script>

<style>
.tooltip_icon {
  fill: grey;
}
.tooltip_text {
  align-self: bottom;
  width: 300px;
  display: inline-block;
  word-wrap: break-word;
  font-size: 80%;
}
.tooltip_color {
  background-color: #323f4f !important;
  opacity: .9 !important;
}

@media (min-width: 1400px) {
  .tooltip_text {
    font-size: 100%;
  }
}
</style>
