<template>
 <CalendarIcon style="width: 19px;height: 20px;"  class=" cal_icon"   />
</template>

<script>
import CalendarIcon from "@/assets/icons/AbandonedCarts/wa-icon.svg";


export default {
  props:["IconState"],
  name: "TooltipIcon",
  components: {
    CalendarIcon,
  },
};
</script>

<style scoped>
.cal_icon {
  /*fill: red !important;*/
  /*color: red;*/
  
	padding-top: 1px !important;
}

</style>