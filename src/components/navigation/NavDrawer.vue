<template>
  <div>
    <v-navigation-drawer
      app
      permanent
      class="right-shadow sidebar_background drawer-dims"
      mini-variant
      mini-variant-width="6vw"
    >
      <v-list-item class="logo_background pa-0 ma-0">
        <v-list-item-content class="pa-0 ma-0">
          <router-link to="/dashboard">
            <div
              class="logo_background navbar-div hgfix right-shadow"
              id="logo-container"
            >
              <NavIcon class="navicon" />
            </div>
          </router-link>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <br />
        <br />
        <br />
        <v-list-item-group mandatory dark>
          <v-list-item
            class="list-dim "
            @click="setSelected('Dashboard'),campingsMenu = false,campaignsList = false"
            @mouseenter="setHover('Dashboard')"
            @mouseleave="setHover('')"
            to="/dashboard"
            ><v-icon class="navicon_scale"
              >$vuetify.icons.dashboard</v-icon
            ></v-list-item
          >

          <v-list-item
            class="list-dim "
            @mouseenter="setHover('Widgets'),campingsMenu = false,campaignsList = false"
            @mouseleave="setHover('')"
            to="/widgets"
            ><v-icon class="navicon_scale"
              >$vuetify.icons.widgets</v-icon
            ></v-list-item
          >

          <v-menu right offset-x  :open-on-hover="campingsMenu" :menu-props="{ 'margin-top': '0px !important'}">
            <template v-slot:activator="{ on, attrs }" >
              <v-list-item
                class="list-dim"
                to="/campaigns-sms"
                :class="campingsMenu == true || $router.currentRoute.fullPath == '/campaigns-facebook' || $router.currentRoute.fullPath == '/campaigns-sms' ? campaignsList : 'none_style_active'"
                @mouseenter="setHover('Campaigns')"
                @mouseover="campingsMenu = true"
                @mouseleave="setHover('')"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon class="navicon_scale" >$vuetify.icons.campaigns </v-icon>
              </v-list-item>
            </template>

            <v-col
              cols="12"
              class="par_tool_tip px-0 pl-5 my-0 py-0 "
              v-if="campingsMenu"
            >
              <v-col cols="12" class="tool_tip px-0 py-0 text-center">
                <router-link class="tool_tip_span" to="/campaigns-sms">{{
                  $t("campaigns.tooltip.sms")
                }}</router-link>
                <router-link class="tool_tip_span" to="/campaigns-facebook">{{
                  $t("campaigns.tooltip.facebook")
                }}</router-link>
                <v-col cols="12" class="arrow-right py-0"></v-col>
              </v-col>
            </v-col>
          </v-menu>

          <v-list-item
            class="list-dim"
            @click="setSelected('AbandonedCarts'),campingsMenu = false,campaignsList = false"
            @mouseenter="setHover('AbandonedCarts')"
            @mouseleave="setHover('')"
            to="/abandonedcarts"
            ><v-icon class="navicon_scale"
              >$vuetify.icons.abandonedCarts</v-icon
            ></v-list-item
          >

          <v-list-item
            class="list-dim"
            @click="setSelected('Settings'),campingsMenu = false,campaignsList = false"
            @mouseenter="setHover('Settings')"
            @mouseleave="setHover('')"
            to="/settings"
            ><v-icon class="navicon_scale"
              >$vuetify.icons.settings</v-icon
            ></v-list-item
          >
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import NavIcon from "@/assets/icons/sidebar/icon-logo-icon.svg";
export default {
  name: "NavDrawer",
  components: {
    NavIcon,
  },
  data() {
    return {
      model: 1,
      preActive: "",
      campingsMenu: false,
      campaignsList:'campaign_list',
      noneStyleActive:false,
    };
  },
 watch:{
   "$route":{
     deep: true,
     handler(){
       if(this.$route.name == 'CampaignsSms' || this.$route.name == 'Campaigns'){
         console.log(this.$route.name == 'CampaignsSms')
         this.campaignsList = 'campaign_list';   this.campingsMenu = true;
       }else  this.campaignsList = false;   this.campingsMenu = false;
    }
  }
 },
  methods: {
    setSelected(id) {
      // console.log(event);
      this.$store.dispatch("updateClick", id);
      if (id == "Campaigns") {
        this.$store.dispatch("updActiveTab", "abndndcrt1").then(() => {
          this.$store.dispatch("updCart1Active", true);
          // console.log(response);
        });
      }
    },
    setHover(id) {
      // console.log(event);

      this.$store.dispatch("updateHover", id);
    },
  },
  computed: {
    ...mapActions(["updateClick"]),
  },
};
</script>

<style scoped>

</style>
<style>
/*.v-list-item--link:before {*/
/*  background-color: transparent !important;*/
/*}*/

.navbar-div {
  top: 0;
  left: 0;
  width: 6vw;
  height: 10vh;
  text-align: center;
  text-justify: center;
  align-content: center;
  padding: 20%;
}
.list-dim {
  align-content: center;
  height: 70px;
}
.campaign_list{
  background-color:#323f4e91 !important;
}
/*.campaign_list:hover{*/
/*  background-color:#323f4e !important;*/
/*}*/
.navicon {
  fill: #ffd85c;
}
.right-shadow {
  box-shadow: 2px 0 8px rgb(146, 143, 143);
}

.drawer-dims {
  height: 100% !important;
}

.navicon_scale {
  transform: scale(0.75);
}
.tool_tip {
  background-color: #4f5d6a;
  width: 250px !important;
}
.par_tool_tip {
  background-color: #e6e7e800 !important;
  width: 250px !important;
  height: 78px !important;
}
.tool_tip_span {
  font-size: 10px;
  padding: 12px 11px;
  white-space: nowrap;
  align-content: center;
  color: #ffffff !important;
  caret-color: #ffffff !important;
  display: block;
  background-color: #323f4e;
}
.tool_tip_span:hover {
  color: #5685e9 !important;
}

.arrow-right {
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-right: 10px solid #4f5d6a;
  position: absolute;
  top: 8px;
  left: -14px;
}

 .v-menu__content {
  box-shadow: none !important;
  border-radius: 0px !important;
  margin-top: 12px !important;
  cursor: pointer;
}
.hgfix {
  height: 80px !important;
}
.none_style_active>.v-list-item--link::before {
   background-color:transparent !important;
 }
@media (min-width: 1400px) {
  .navicon_scale {
    transform: scale(0.9);
  }

  .list-dim {
    height: 90px;
  }
}
@media only screen and (max-width: 1399px) {
  .par_tool_tip {
    margin-top: 0px !important;
    height: 70px !important;
  }
 .v-menu__content {

    margin-top: 0px !important;
    cursor: pointer;
  }
  .par_tool_tip a{
    padding-top: 10px !important;
    padding-bottom:10px !important;
  }
}

</style>
