<template>
  <v-container fluid>
    <v-row class="pa-0 ma-0 mt-4" justify="start" >
      <v-col class="pa-0 ma-0" cols="auto"  >
        <v-tabs
          background-color="transparent"
          v-model="tab"
          class="pa-0 mt-0 tabs-color tab-size"
          active-class="tab-item-color-active"
        >
          <v-tab class="font_dims" key="1" @click="refreshComp1()">
<!--            <v-img src="@/assets/icons/AbandonedCarts/icon-calendar.svg"></v-img>-->
<!--            <IconCalendar />-->
<!--            <v-icon class="pr-1 infoicon_scale"> <IconCalendar /></v-icon>-->
<!--            <CalendarIcon-->
<!--              class="infoicon_scale "-->
<!--              style="top:30%"-->
<!--              v-if="!activeOne"-->
<!--            />-->
<!--            <ActiveCalendarIcon-->
<!--              class="infoicon_scale "-->
<!--              style="top:30%"-->
<!--              v-else-->
<!--            />-->
            {{ $t("abandonedCarts.tabs.item1") }}
          </v-tab>
          <v-tab class="font_dims" key="2" @click="refreshComp2()">
<!--            <v-icon class="pr-1 infoicon_scale">event</v-icon>-->
<!--            <CalendarIcon-->
<!--              class="infoicon_scale "-->
<!--              style="top:30%"-->
<!--              v-if="!activeTwo"-->
<!--            />-->
<!--            <ActiveCalendarIcon-->
<!--              class="infoicon_scale "-->
<!--              style="top:30%"-->
<!--              v-else-->
<!--            />-->
            {{ $t("abandonedCarts.tabs.item2") }}
          </v-tab>
          <v-tab class="font_dims" key="3" @click="refreshComp3()">
<!--            <v-icon class="pr-1 infoicon_scale">event</v-icon>-->
<!--            <CalendarIcon-->
<!--              class="infoicon_scale "-->
<!--              style="top:30%"-->
<!--              v-if="!activeThree"-->
<!--            />-->
<!--            <ActiveCalendarIcon-->
<!--              class="infoicon_scale "-->
<!--              style="top:30%"-->
<!--              v-else-->
<!--            />-->
            {{ $t("abandonedCarts.tabs.item3") }}
          </v-tab>
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            :nudge-bottom="-15"
          >
            <template v-slot:activator="{ on }">
              <v-tab class="font_dims" key="4" v-on="on" style="width:auto"  @click="refreshComp4()"
                     :class="activeFour && $vuetify.breakpoint.width > 1110 ? 'mr-4' : ''">
<!--                <v-icon class="pr-1 infoicon_scale">event</v-icon>-->
                <CalendarIcon
                  class="infoicon_scale "
                  style="top:30%"
                  v-if="!activeFour"
                />
                <ActiveCalendarIcon
                  class="infoicon_scale "
                  style="top:30%"
                  v-else
                />
                <span class="pr-2 font_85">{{ displayStDate }}</span
                ><span class="font_85">to</span> <span class="pl-2 font_85">{{ displayEnDate }}</span>
                <v-icon class="infoicon_scale">keyboard_arrow_down</v-icon>
<!--                <TooltipIcon-->
<!--                  :posRight="true"-->
<!--                  :nudgeBottom="30"-->
<!--                  :nudgeLeft="5"-->
<!--                  :txt="$t('abandonedCarts.custRangeInfo')"-->
<!--                  class="infoicon_scale "-->
<!--                  style="top:30%"-->
<!--                />-->
              </v-tab>
            </template>
            <v-date-picker
              v-show="readyPicker"
              v-model="custDates"
              color="grey-ligten-4"
              scrollable
              actions
              show-current="false"
              reactive
              no-title
              range
              style="height:100%;width:100%"
              :min="getStartDate"
              :max="getCurrDate"

            >
              <v-spacer /><v-spacer />
              <v-btn
                text
                color="primary"
                @click="menu = false"
                style="font-weight:bold"
                >Cancel</v-btn
              >
              <v-btn
                text
                color="primary"
                @click="setCustDt"
                style="font-weight:bold"
                >OK</v-btn
              ></v-date-picker
            >
          </v-menu>


        </v-tabs>
      </v-col>
      <div :class="!activeImage ? 'selTypecol line_active wid_space spc_resp_top' : 'selTypecol wid_space spc_resp_top'"  class="pos_closer">
        <v-select
          flat
          v-model="selectedType"
          :items="TypeForSel"
          :label="selectedType"
          hide-details
          single-line
          @click="minusModel(selectedType)"
          @focusout="activeImage = false"
          :class="activeImage ? 'change_active' : 'line_active'"

        >
          <template v-slot:append>
            <v-icon class="infoicon_scale">keyboard_arrow_down</v-icon>
<!--            <v-icon-->
<!--              dark-->
<!--              right-->
<!--            >-->
<!--              mdi-checkbox-marked-circle-->
<!--            </v-icon>-->
          </template>
          <template slot="prepend-inner"  >
            <ActiveChannelIcon
              class="infoicon_scale "
              style="top:30%"
              v-if="activeImage"
            />
            <ChannelIcon
              class="infoicon_scale "
              style="top:30%"
              v-if="!activeImage"
            />
<!--            <v-img src="@/assets/img/Subscribers/icon-channel.png" v-if="!activeImage"></v-img>-->
<!--            <v-img src="@/assets/img/Subscribers/icon_channel_active.png" v-if="activeImage"></v-img>-->
          </template>
          <template slot="apend-inner" >
            <v-img src="@/assets/img/Subscribers/icon-channel.png" v-if="!activeImage"></v-img>
            <v-img src="@/assets/img/Subscribers/icon_channel_active.png" v-if="activeImage"></v-img>
          </template>
        </v-select>
      </div>
      <v-col class="pt-0" >
        <v-row justify="end" class="pr-0 mr-0 mb-1">
          <v-btn depressed icon class="refIcondim mr-0" @click="incrTabCount">
            <v-icon color="#4E5D6B">refresh</v-icon>
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
    <br />
    <v-row style="height:auto; width:100%">
      <v-tabs-items v-model="tab" style="height:100%; width:100%">
        <v-tab-item key="1" style="height:auto; width:100%" :eager="false">
          <CartsTable
            :startDate="yestDate"
            :endDate="currDate"
            :key="itemKeyDat1"
          />
        </v-tab-item>
        <v-tab-item key="2" :eager="false">
          <CartsTable
            :startDate="lstWeekDate"
            :endDate="currDate"
            :key="itemKeyDat2"
          />
        </v-tab-item>
        <v-tab-item key="3" :eager="false">
          <CartsTable
            :startDate="lstMonthDate"
            :endDate="currDate"
            :key="itemKeyDat3"
          />
        </v-tab-item>

        <v-tab-item key="4">
          <CartsTable
            :startDate="custStDt"
            :endDate="custEnDt"
            :key="custKey"
          />
        </v-tab-item>
      </v-tabs-items>
    </v-row>
  </v-container>
</template>

<script>
import CartsTable from "@/components/AbandonedCarts/CartsTable.vue";
import CalendarIcon from "@/components/svgIcons/CalendarIcon.vue";
import ActiveCalendarIcon from "@/components/svgIcons/ActiveCalendarIcon.vue";
import ActiveChannelIcon from "@/components/svgIcons/ActiveIconChannel.vue";
import ChannelIcon from "@/components/svgIcons/IconChannel.vue";
// import TooltipIcon from "@/components/svgIcons/TooltipIcon.vue";
import moment from "moment-timezone";
import { mapGetters } from "vuex";
export default {
  name: "Tabs",
  components: { CartsTable, CalendarIcon,ActiveCalendarIcon,ChannelIcon,ActiveChannelIcon},
  data() {
    return {
      tab: 1,
      menu: false,
      custDates: [
        moment(new Date() - 86400000 * 15).format("YYYY-MM-DD"),
        moment(new Date()).format("YYYY-MM-DD"),
      ],
      custStDt: moment(new Date() - 86400000 * 15).format("MM-DD-YYYY"),
      custEnDt: moment(new Date()).format("MM-DD-YYYY"),
      custKey: 0,
      itemKeyDat1: 0,
      itemKeyDat2: 0,
      itemKeyDat3: 0,
      activeTab: "2",
      TypeForSel:this.$t("abandonedCarts.TypeForSel"),
      selectedType:"",
      currData:this.$t("abandonedCarts.TypeForSel"),
      activeImage:false,
      calendarIcon:'@/assets/icons/AbandonedCarts/icon-calendar.svg',
      activeOne:false,
      activeTwo:true,
      activeThree:false,
      activeFour:false,
      readyPicker:false,
    };
  },
  mounted() {
    this.selectedType = this.$t("abandonedCarts.selectedType")
  },
  methods: {
    setCurChannel(){
      let currData = this.selectedType
      this.selectedType = 'All Channels'
      setTimeout(() =>  this.selectedType = currData,1000)
    },
    incrTabCount() {
      this.activeTab == "1" ? this.refreshComp1() : "";
      this.activeTab == "2" ? this.refreshComp2() : "";
      this.activeTab == "3" ? this.refreshComp3() : "";
      this.activeTab == "4" ? this.custKey++ : "";
    },
    refIcon(){
      this.activeOne = false;
      this.activeTwo = false;
      this.activeThree = false;
      this.activeFour = false;
    },
    refreshComp1() {
      this.activeTab = "1";
      this.itemKeyDat1++;
      this.refIcon();
      this.activeOne = true;
      this.setCurChannel()
    },
    refreshComp2() {
      this.activeTab = "2";
      this.itemKeyDat2++;
      this.refIcon();
      this.activeTwo = true;
      this.setCurChannel()
    },
    refreshComp3() {
      this.activeTab = "3";
      this.itemKeyDat3++;
      this.refIcon();
      this.activeThree = true;
      this.setCurChannel()
    },
    refreshComp4() {
      this.refIcon();
      this.activeFour = true;
      let currData = this.selectedType
      this.selectedType = 'All Channels'
      setTimeout(() =>  this.selectedType = currData,1500)
    },
    setMenuactivator() {
      this.menuActivator = true;
    },
    setCustDt() {
      // console.log("DateTestsNew :: " + this.custDates[0]);
      // console.log("DateTestsNew :: " + this.custDates[1]);
      this.custDates[0] > this.custDates[1]
        ? (this.custStDt = moment(this.custDates[1]).format("MM-DD-YYYY"))
        : (this.custStDt = moment(this.custDates[0]).format("MM-DD-YYYY"));

      this.custDates[0] > this.custDates[1]
        ? (this.custEnDt = moment(this.custDates[0]).format("MM-DD-YYYY"))
        : (this.custEnDt = moment(this.custDates[1]).format("MM-DD-YYYY"));

      // console.log("start date :: " + this.custStDt);
      // console.log("end date :: " + this.custEnDt);
      this.activeTab = "4";
      this.custKey++;
      this.menu = false;
    },
    minusModel(item){
      this.activeImage = true
      this.selectedType = item
      this.TypeForSel = this.currData
      this.TypeForSel = this.TypeForSel.filter(  t => t !== item)
      this.selectedType = item
    }
  },
  watch:{
    selectedType(newVal){
        this.activeImage = false
        this.$store.dispatch("updSubsType",newVal)
    },
    menu(newVal){
      if (newVal == true) {
        setTimeout(() => this.readyPicker = true,1000)
      }
    }
  },
  computed: {
    ...mapGetters(["getCreatedAt"]),

    getStartDate() {
      return moment(this.getCreatedAt).format("YYYY-MM-DD");
    },

    getCurrDate() {
      return moment(new Date()).format("YYYY-MM-DD");
    },

    displayStDate() {
      return this.custDates[0] > this.custDates[1]
        ? this.custDates[1]
        : this.custDates[0];
    },
    displayEnDate() {
      return this.custDates[0] > this.custDates[1]
        ? this.custDates[0]
        : this.custDates[1];
    },

    currDate() {
      return moment(new Date()).format("MM-DD-YYYY");
    },
    yestDate() {
      return moment(new Date()).format("MM-DD-YYYY");
    },
    lstWeekDate() {
      // console.log(
      //   "Last-week-time :: " +
      //     moment(new Date() - 86400000 * 7).format("MM-DD-YYYY")
      // );
      return moment(new Date() - 86400000 * 7).format("MM-DD-YYYY");
    },
    lstMonthDate() {
      // console.log(
      //   "Last-week-time :: " +
      //     moment(new Date() - 86400000 * 30).format("MM-DD-YYYY")
      // );
      return moment(new Date() - 86400000 * 30).format("MM-DD-YYYY");
    },
  },
};
</script>

<style scoped>
/*.v-input .v-label {*/
/*  color: 1.2em;*/
/*}*/

.font_85{
  font-size: 85% !important;
}
.spc_resp_top{
 padding-top: 4px !important;
}
.tab-item-color-active{
  border-bottom: 2px solid #006aff !important;
}
.tab-props {
  color: transparent;
}
.tab-item-color-active {
  color: #006aff !important;
  font-weight: bold;
  font-size: 90% !important;
}

.theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) {
  color: #323f4f !important;
  font-weight: bold;
  font-size: 90% !important;
}

.v-date-picker-table .v-btn.v-btn--active {
  border-radius: 0px;
}
.refIcondim {
  transform: scale(0.9);
}
.tab-size {
  transform: scale(0.9);
  transform-origin: 0 0;
}
.selTypecol{
  font: normal normal 600 12px/29px Poppins;
  width: 157px !important;
  text-align: left;
  letter-spacing: 0px;
  color: #5686F6;
  opacity: 1;
}
.v-text-field{
  padding-top: 0px !important;
}
.v-select__selection v-select__selection--comma{
  color: #5686F6 !important;
}
.theme--light.v-select{
  color: #5686F6 !important;
}
.theme--light.v-select .v-select__selection--comma{
  color: #5686F6 !important;
}
.wid_space{
  width: 175px !important;
}

@media (min-width: 1400px) {
  .refIcondim {
    transform: scale(1.2);
  }
  .tab-size {
    transform: scale(1);
    transform-origin: 0 0;
  }
}

@media only screen and (max-width: 1399px) and (min-width: 1110px)  {
  .pos_closer{
    position: relative !important;
    left: -7% !important;
  }
}
@media (max-width: 1400px) {
  .spc_resp_top {
    padding-top: 0px !important;
  }

}
</style>

<style>
.v-text-field > .v-input__control > .v-input__slot:before, .v-text-field > .v-input__control > .v-input__slot:after{
  bottom: -7px !important;
}

.v-select__selection,
.v-select__selection--comma,
.v-select.v-text-field input {
  color: #323f4f !important;
}
.change_active .theme--light.v-label{
  color: #5686F6 ;
}
.line_active>.v-text-field > .v-input__control > .v-input__slot:before{
  border-style: hidden;
}

.wid_space>.theme--light.v-select .v-select__selection--comma{
  font-size: 85% !important;
}
@media (max-width: 1400px) {

}



</style>