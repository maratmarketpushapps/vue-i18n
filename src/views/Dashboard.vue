<template>
  <v-col cols="12" class="pl-4 no_pr d-flex justify-end py-0 dashboard-check">
    <v-col cols="11" class="py-0 no_pr">
      <v-container fluid class="pt-0 no_pr">
        <v-row class="pt-0 mt-0 pb-0 mb-0  row-style" align="center">
          <v-col cols="auto" class="pt-0 no_pr">
            <h3 class="header_dims page_headers pr-0 mr-0 pt-0 mt-0">
              {{ $t("dashboard.header") }}&nbsp;
            </h3>
          </v-col>
          <v-col cols="1" class="pl-0 ml-0 pt-0 no_pr">
            <TooltipIcon
                :posRight="true"
                :nudgeBottom="30"
                :nudgeLeft="5"
                :txt="$t('dashboard.infoMsg')"
                class="infoicon_scale pt-0"
            />
          </v-col>
          <v-col v-if="modal">
            <ModalJoin  :status="modal"></ModalJoin>
          </v-col>
          <v-col cols="8.75" class="pt-0 pb-0 mb-0 no_pr">
            <v-row align="center" justify="end" style="width:100%">
              <v-col cols="auto" class="no_pr"> </v-col>
              <v-col cols="auto" class="no_pr">
                <span><CartAttempts class="pt-0 pr-6"/></span>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row class="pt-0 mt-0" align="start" style="height:auto">
          <Tabs style="height:100%; width:100%" />
        </v-row>
      </v-container>
    </v-col>

  </v-col>

</template>

<script>
import Tabs from "@/components/Dashboard/Tabs.vue";
import TooltipIcon from "@/components/svgIcons/TooltipIcon.vue";
import CartAttempts from "@/components/AbandonedCarts/CartAttempts.vue";
import ModalJoin from "@/components/Modal/ModalJoin.vue";

export default {
  name: "dashboard",
  data:()=>({
    modal:false,
  }),
  methods:{
    getTimeZone(){
       this.$store.getters.getAccountInfo.install_popop_show == true
        ? this.modal = true : this.modal = false
    }
  },
  components: { Tabs, TooltipIcon, CartAttempts,ModalJoin },
  created() {
    setTimeout(() =>  this.getTimeZone(), 1800)
  },
  mounted () {
    window.scrollTo(0,0);
  },
};
</script>

<style>
.div-style {
  width: 200px;
  height: 90px;
  padding: 10px;
  text-align: center;
  margin: 50px;
  border: 10px rgb(4, 51, 53);
}

.cmpgn-vw-ht {
  height: 92px;
}
@media only screen and (max-width: 1001px){
  .no_pr{
    padding-right: 0px !important;
  }
}
</style>
