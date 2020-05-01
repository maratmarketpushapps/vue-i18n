<template>
  <v-app class="scale">
    <v-content class="app_background">
      <v-container fluid>
        <v-row style="width:50vw"
          ><v-col col="2"><NavDrawer style="width:50vw"/></v-col>
          <v-col col="10" >
            <AppBar style="height: 10vh" />
          </v-col>
        </v-row>
          <v-row>
            <v-col cols="12" class="pt-2 pl-12 pr-5" style="justify-content: center">
              <transition name="rtr">
              <router-view ></router-view>
            </transition> 
            </v-col>
          </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

//
<script>
import AppBar from "@/components/navigation/AppBar.vue";
import NavDrawer from "@/components/navigation/NavDrawer.vue";

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
    AppBar,
    NavDrawer
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



</style>
