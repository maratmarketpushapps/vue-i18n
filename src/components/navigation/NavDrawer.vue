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

      <v-list>
        <br />
        <br />
        <br />
        <v-list-item-group mandatory dark>
          <v-list-item
            class="list-dim "
            @click="setSelected('Dashboard')"
            @mouseenter="setHover('Dashboard')"
            @mouseleave="setHover('')"
            to="/dashboard"
            ><v-icon class="navicon_scale"
              >$vuetify.icons.dashboard</v-icon
            ></v-list-item
          >

          <v-list-item
            class="list-dim "
            @click="setSelected('Widgets')"
            @mouseenter="setHover('Widgets')"
            @mouseleave="setHover('')"
            to="/widgets"
            ><v-icon class="navicon_scale"
              >$vuetify.icons.widgets</v-icon
            ></v-list-item
          >

          <v-list-item
            class="list-dim"
            @click="setSelected('Campaigns')"
            @mouseenter="setHover('Campaigns')"
            @mouseleave="setHover('')"
            to="/campaigns"
            ><v-icon class="navicon_scale"
              >$vuetify.icons.campaigns</v-icon
            ></v-list-item
          >

          <v-list-item
            class="list-dim"
            @click="setSelected('AbandonedCarts')"
            @mouseenter="setHover('AbandonedCarts')"
            @mouseleave="setHover('')"
            to="/abandonedcarts"
            ><v-icon class="navicon_scale"
              >$vuetify.icons.abandonedCarts</v-icon
            ></v-list-item
          >

          <v-list-item
            class="list-dim"
            @click="setSelected('Settings')"
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
      preActive:''
    };
  },
  methods: {
    setSelected(id) {
      console.log(event);
      this.$store.dispatch("updateClick", id);
      if (id == "Campaigns") {
        this.$store.dispatch("updActiveTab", "abndndcrt1").then((response) => {
          this.$store.dispatch("updCart1Active", true);
          console.log(response);
        });
      }
    },
    setHover(id) {
      console.log(event);

      this.$store.dispatch("updateHover", id);
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
  padding: 20%;
}

.list-dim {
  align-content: center;
  height: 70px;
}

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

@media (min-width: 1400px) {
  .navicon_scale {
    transform: scale(0.9);
  }

  .list-dim {
    height: 90px;
  }
}
</style>
