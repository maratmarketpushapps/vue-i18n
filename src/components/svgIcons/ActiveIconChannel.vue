
<template>
    <ActiveChannelIcon style="width: 19px;height: 20px;"  class=" cal_icon"   />
</template>

<script>
import ActiveChannelIcon from "@/assets/icons/AbandonedCarts/icon-channel-activ.svg";

export default {
  props:["IconState"],
  name: "TooltipIcon",
  components: {
    ActiveChannelIcon,
  },

};
</script>

<style scoped>
.cal_icon {
  /*fill: red !important;*/
  /*color: red;*/
  margin-right: 10px !important;
}
/*.calendar_text {*/
/*  align-self: bottom;*/
/*  width: 18px;*/
/*  height: 20px;*/
/*  display: inline-block;*/
/*  word-wrap: break-word;*/
/*  font-size: 80%;*/
/*}*/
/*.cal_color {*/
/*  background-color: red !important;*/
/*  opacity: .9 !important;*/
/*}*/

@media (min-width: 1400px) {
  .calendar_text {
    font-size: 100%;
  }
}
</style>
