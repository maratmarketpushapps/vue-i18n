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
        <v-card tile light height="400px" width="25vw" class=" font_dims">
          <v-row style="height:4%; width:100%" justify="end" class="mt-4">
            <v-btn icon small>
              <v-icon @click="canclOvrlyStepComp()">
                mdi-window-close
              </v-icon>
            </v-btn>
          </v-row>
          <v-row
            style="height:20%; width:100%"
            justify="center"
            align="center"
            class="mt-1 ml-2"
          >
            <iconSuccess class="sccssSvgStyle" />
          </v-row>
          <v-row style="height:15%; width:100%" class="mr-0 mt-2">
            <v-col cols="12">
              <v-row style="width:100%" justify="center" class="ml-4">
                <h3 style="color:#4E5D6B; font-size:150%">
                  {{ $t("navbar.appbar.allStepsCompHeader") }}
                </h3>
              </v-row>
            </v-col>
          </v-row>
          <v-row
            style="height:15%; width:100%"
            justify="center"
            align="center"
            class="ma-2 pr-2"
          >
            <v-col>
              <v-row
                style="width:98%; text-align:center"
                justify="center"
                align="center"
                class="ml-0"
              >
                {{ $t("navbar.appbar.allStepsCompTxt1") }}
              </v-row>
            </v-col>
          </v-row>
          <v-row
            style="height:10%; width:100%"
            justify="center"
            align="start"
            class="ma-2 pr-2"
          >
            <v-col>
              <v-row
                style="width:98%; text-align:center"
                justify="center"
                align="center"
                class="ml-0"
              >
                {{ $t("navbar.appbar.allStepsCompTxt2") }}
              </v-row>
            </v-col>
          </v-row>
          <v-row
            style="height:20%; width:106%"
            class="ma-0 mt-6"
            justify="center"
            align="end"
          >
            <v-col>
              <v-row style="width:100%" justify="center" align="end">
                <v-btn
                  tile
                  height="52px"
                  class="ma-0 mt-3"
                  width="100%"
                  @click="canclOvrlyStepComp()"
                  outlined
                  color="#006AFF"
                  style="border-color:#F2F2F2"
                >
                  {{ $t("navbar.appbar.buttonText") }}
                </v-btn>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-overlay>
      <v-row style="height:auto width: 100%;">
        <v-col cols="12">
          <v-row style="height:10vh">
            <v-col cols="12"> </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-col cols="auto" style="width: 6vw;"> </v-col>
            <v-col cols="11">
              <v-row v-show="!isLoading">
                <transition name="rtr">
                  <router-view></router-view>
                </transition>
              </v-row>
            </v-col>
          </v-row>

          <v-overlay
            :absolute="absolute"
            opacity="0"
            :value="isLoading"
            :z-index="zIndex"
          >
            <v-progress-circular
              indeterminate
              color="#5298D4"
              size="60"
              style="z-index:5 "
            >
            </v-progress-circular>
          </v-overlay>
        </v-col>
      </v-row>
    </v-content>
  </v-app>
</template>

//
<script>
//App Engine test.
import AppBar from "@/components/navigation/AppBar.vue";
import NavDrawer from "@/components/navigation/NavDrawer.vue";
import iconSuccess from "@/assets/icons/misc/icon-success.svg";
// import loaderAnim from "@/components/GlobalComponents/loaderAnim.vue";
// import axios from "axios";

(function(h, o, t, j, a, r) {
  h.hj =
    h.hj ||
    function() {
      (h.hj.q = h.hj.q || []).push(arguments);
    };
  h._hjSettings = { hjid: 2035266, hjsv: 6 };
  a = o.getElementsByTagName("head")[0];
  r = o.createElement("script");
  r.async = 1;
  r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
  a.appendChild(r);
})(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");

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
                  ? this.$store
                      .dispatch("updStepsCompOnload", true)
                      .then(() => {
                        // this.$store.dispatch("updIsLoading", false);
                      })
                  : this.$store
                      .dispatch("updStepsCompOnload", false)
                      .then(() => {
                        // this.$store.dispatch("updIsLoading", false);
                      });
              });
            });
          });
        });
      });
  },
  mounted() {
    this.$intercom.boot({
      instance_id: this.$store.getters.getInstanceId,
    });
    
  },
  // beforeUpdate() {
  //   this.$store.dispatch("getGlobal").then((response) => {
  //     console.log(response);
  //     this.$i18n.locale = this.$store.getters.getLocale;
  //   });
  // },
  // created() {
  //   axios.interceptors.request.use(
  //     (config) => {
  //       this.isLoading = true;
  //       this.nuRequests++;
  //       return config;
  //     },
  //     (error) => {
  //       this.isLoading = false;
  //       return Promise.reject(error);
  //     }
  //   );

  //   axios.interceptors.response.use(
  //     (response) => {
  //       this.isLoading = false;
  //       return response;
  //     },
  //     (error) => {
  //       this.isLoading = false;
  //       return Promise.reject(error);
  //     }
  //   );
  // },

  components: {
    AppBar,
    NavDrawer,
    iconSuccess,
    // loaderAnim,
  },

  data() {
    return {
      showAlert: true,
      absolute: false,
      opacity: 0.46,
      zIndex: 5,
      // isLoading: false,
      nuRequests: 0,
    };
  },
  methods: {
    canclOvrlyStepComp() {
      this.$store.dispatch("updStepsCompOnload", true);
    },
    checkaxios() {
      console.log("inside axios check");
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
    isLoading() {
      return this.$store.getters.getisLoading;
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
  font-size: 80% !important;
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

.sccssSvgStyle {
  align-content: center;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  fill: #fff;
  stroke: #323f4f;
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
