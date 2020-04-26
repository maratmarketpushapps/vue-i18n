<template>
  <div>
    <v-navigation-drawer
      app
      permanent
      class="right-shadow sidebar_background"
      mini-variant
      mini-variant-width="100"
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
            class="list-dim pa-0 ma-0 pb-4 pt-4"
            @click="setSelected('Dashboard')" to="/dashboard"
            ><v-icon>$vuetify.icons.dashboard</v-icon></v-list-item
          >

          <v-list-item
            class="list-dim pa-0 ma-0 pb-4 pt-4"
            @click="setSelected('Widgets')" to="/widgets"
            ><v-icon>$vuetify.icons.widgets</v-icon></v-list-item
          >
          
          <v-list-item
            class="list-dim pa-0 ma-0 pb-4 pt-4"
            @click="setSelected('Campaigns')" to="/campaigns"
            ><v-icon>$vuetify.icons.campaigns</v-icon></v-list-item
          >
         
          <v-list-item
            class="list-dim pa-0 ma-0 pb-4 pt-4" 
            @click="setSelected('AbandonedCarts')" to="/abandonedcarts"
            ><v-icon>$vuetify.icons.abandonedCarts</v-icon></v-list-item
          >
          
          <v-list-item
            class="list-dim pa-0 ma-0 pb-4 pt-4"
            @click="setSelected('Settings')" to="/settings"
            ><v-icon>$vuetify.icons.settings</v-icon></v-list-item
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
  top: 0px;
  left: 0px;
  width: 100px;
  height: 80px;
  padding: 20px;
  text-align: center;
  text-justify: center;
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
</style>
