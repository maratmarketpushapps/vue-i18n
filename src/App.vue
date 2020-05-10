<template>
  <v-app >
    <v-content class="app_background app-style">
      <v-row style="height:100%"
        ><v-col cols="1"><NavDrawer /></v-col>
        <v-col cols="12">
          <AppBar style="height: 10vh" />
          <v-row style="height:3%">
            <v-col>
            </v-col>
          </v-row>
          
          <v-row
            style="width: 95%;height: 95%; padding-top:1%; margin-left:5%; margin-right:3%"
            align="start"
            
          >
            <v-col cols="12">
              <transition name="rtr">
                <router-view></router-view>
              </transition>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
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
    NavDrawer,
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

.app-style {
  min-width: 900px !important;
  height: 100%;
}

.font_dims {
  font-size: 60% !important;
  overflow: hidden;
}
.header_dims {
  font-size: 100% !important;
  overflow: hidden;
}

.btnfonts_dims {
  font-size: 60% !important;
  overflow: hidden;
}

@media (min-width: 1400px) {
  .font_dims {
    font-size: 85% !important;
  }
  .header_dims {
    font-size: 140% !important;
    overflow: hidden;
  }
  .btnfonts_dims{
    font-size: 85% !important;
  }
}
</style>
