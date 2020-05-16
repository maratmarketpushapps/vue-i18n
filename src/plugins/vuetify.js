import Vue from "vue";
import Vuetify from "vuetify/lib";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import SettingsIcon from "@/components/svgIcons/SettingsIcon.vue";
import AbandonedCartsIcon from "@/components/svgIcons/AbandonedCartsIcon.vue";
import CampaignsIcon from "@/components/svgIcons/CampaignsIcon.vue";
import WidgetsIcon from "@/components/svgIcons/WidgetsIcon.vue";
import DashboardIcon from "@/components/svgIcons/DashboardIcon.vue";

Vue.use(Vuetify);

//theme custom colors set here

export default new Vuetify({
  theme: {
    themes: {
      light: {
        app_background: "#E6E7E8",
        logo_background: "#006AFF",
        appbar_background: "#FFFFFF",
        sidebar_background: "#4E5D6B",
        appbar_btn_background: "#FFB742",
        primary: "#5686F6",
      },
    },
  },

  icons: {
    iconfont: "md",
    values: {
      settings: {
        component: SettingsIcon,
      },
      abandonedCarts: {
        component: AbandonedCartsIcon,
      },
      campaigns: {
        component: CampaignsIcon,
      },
      widgets: {
        component: WidgetsIcon,
      },
      dashboard: {
        component: DashboardIcon,
      },
    },
  },
});
