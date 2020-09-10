<template>
  <v-app>
    <v-content class="app_background app-style" style="height:auto">
      <NavDrawer />
      <AppBar style="height: 10vh" />

      <v-overlay
        :absolute="absolute"
        :opacity="opacity"
        :value="allStepsComp"
        :z-index="zIndex"
      >
        <v-card tile light height="30vh" width="25vw" class="pa-1">
          <v-row style="height:15%; width:100%" justify="end" class="mr-0 mt-2">
            <v-btn icon>
              <v-icon @click="canclOvrlyStepComp()">
                mdi-window-close
              </v-icon>
            </v-btn>
          </v-row>
          <v-row
            style="height:25%; width:100%"
            justify="center"
            align="center"
            class="ma-2"
          >
            <v-col>
              {{ $t("navbar.appbar.allStepsCompTxt1") }}
            </v-col>
          </v-row>
          <v-row
            style="height:40%; width:100%"
            justify="center"
            align="start"
            class="ma-2"
          >
            <v-col>
              {{ $t("navbar.appbar.allStepsCompTxt2") }}
            </v-col>
          </v-row>
        </v-card>
      </v-overlay>
      <v-row style="height: auto width: 100%;">
        <v-col cols="12">
          <v-row style="height:10vh">
            <v-col cols="12"> </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-col cols="auto" style="width: 6vw;"> </v-col>
            <v-col cols="11">
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
    this.$store
      .dispatch("updateToken", this.$route.query.instance)
      .then((resp) => {
        console.log(resp);
        this.$store.dispatch("getGlobal").then((response) => {
          console.log(response);
          this.$i18n.locale = this.$store.getters.getLocale;
          console.log("Query Parameters :: " + this.$route.query.instance);
          this.$store.dispatch("getMsg").then((response) => {
            console.log(response);
            this.$store.dispatch("getSettings").then(() => {
              this.$store.dispatch("getWidgets").then(() => {
                this.$store.getters.getStep1Complete &&
                this.$store.getters.getStep2Complete &&
                this.$store.getters.getStep3Complete
                  ? this.$store.dispatch("updStepsCompOnload", true)
                  : this.$store.dispatch("updStepsCompOnload", false);
              });
            });
          });
        });
      });
  },
  beforeUpdate() {
    this.$store.dispatch("getGlobal").then((response) => {
      console.log(response);
      this.$i18n.locale = this.$store.getters.getLocale;
    });
  },

  components: {
    AppBar,
    NavDrawer,
  },

  data() {
    return {
      showAlert: true,
      absolute: false,
      opacity: 0.46,
      zIndex: 5,
    };
  },
  methods: {
    canclOvrlyStepComp() {
      this.$store.dispatch("updStepsCompOnload", true);
    },
  },
  computed: {
    allStepsComp() {
      return (
        this.$store.getters.getStep1Complete &&
        this.$store.getters.getStep2Complete &&
        this.$store.getters.getStep3Complete &&
        !this.$store.getters.getStepsCompOnload
      );
    },
  },
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
  height: auto;
}

.font_dims {
  font-size: 70% !important;
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

.page_headers {
  color: #323f4f;
  font-weight: bold !important;
  text-transform: uppercase;
}

@media (min-width: 1400px) {
  .font_dims {
    font-size: 85% !important;
  }
  .header_dims {
    font-size: 140% !important;
    overflow: hidden;
  }
  .btnfonts_dims {
    font-size: 85% !important;
  }
}
</style>
