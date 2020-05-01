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
              class="logo_background navbar-div right-shadow"
              id="logo-container"
            >
              <NavIcon class="navicon" />
            </div>
          </router-link>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list >
        <br />
        <br />
        <br />
        <v-list-item-group class="list-dim" mandatory dark>
          <v-list-item
            class="list-dim "
            @click="setSelected('Dashboard')" to="/dashboard"
            ><v-icon style="transform:scale(.75)">$vuetify.icons.dashboard</v-icon></v-list-item
          >

          <v-list-item
            class="list-dim "
            @click="setSelected('Widgets')" to="/widgets"
            ><v-icon style="transform:scale(.75)">$vuetify.icons.widgets</v-icon></v-list-item
          >
          
          <v-list-item
            class="list-dim"
            @click="setSelected('Campaigns')" to="/campaigns"
            ><v-icon style="transform:scale(.75)">$vuetify.icons.campaigns</v-icon></v-list-item
          >
         
          <v-list-item
            class="list-dim" 
            @click="setSelected('AbandonedCarts')" to="/abandonedcarts"
            ><v-icon style="transform:scale(.75)">$vuetify.icons.abandonedCarts</v-icon></v-list-item
          >
          
          <v-list-item
            class="list-dim"
            @click="setSelected('Settings')" to="/settings"
            ><v-icon style="transform:scale(.75)">$vuetify.icons.settings</v-icon></v-list-item
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
    };
  },
  methods: {
    setSelected(id) {
      console.log(event);
      this.$store.dispatch("updateClick", id);
    },
  },
  computed: {
    ...mapActions(["updateClick"]),
  },
};
</script>

<style>
.navbar-div {
  top: 0;
  left: 0;
  width: 6vw;
  height: 10vh;
  text-align: center;
  text-justify: center;
  align-content: center;
  padding:20%
}

.list-dim {
  align-content: center;
}

.navicon {
  fill: #ffd85c;
}

.right-shadow {
  box-shadow: 2px 0 8px rgb(146, 143, 143);
}

.drawer-dims{
  height:100% !important
}
</style>
