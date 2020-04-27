<template>
  <v-app :class="{'scale':!$vuetify.breakpoint.lgAndUp}"
  >
    <v-content class="app_background">
      <v-container fluid >
        <v-row
          ><v-col><Navbar /></v-col
        ></v-row>
        <v-row class="pt-5"
          ><v-col>
            <transition name="rtr">
              <router-view></router-view>
            </transition> </v-col
        ></v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

//
<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",
  beforeCreate() {
    this.$store.dispatch("getGlobal").then((response) => {
      console.log(response);
      console.log();
      this.$i18n.locale = this.$store.getters.getLocale;
    });
  },
  beforeUpdate() {
    this.$store.dispatch("getGlobal").then((response) => {
      console.log(response);
      console.log();
      this.$i18n.locale = this.$store.getters.getLocale;
    });
  },

  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
.router-content_style {
  padding: 0;
}

.rtr-enter-active,
.rtr-leave-active {
  transition: all 0.5s;
}

.rtr-enter-active {
  transition-delay: 0.5s;
}

.rtr-enter {
  opacity: 0;
  transform: translateX(-20%);
}
.rtr-leave-to {
  opacity: 0;
  transform: translateX(20%);
}
.scale{
  transform: scale(.7);
}
</style>
