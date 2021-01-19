<template>
  <v-app>
    <v-content class="app_background app-style" style="height:auto">
      <NavDrawer />
      <AppBar class="app_bar_height" />

      <!--
      <ModalTestCartRecoveryMethod recoveryType="sms"  />
      <ModalTestCartRecoveryMethod recoveryType="fb" />
      -->

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
//Deployment test 3
import AppBar from "@/components/navigation/AppBar.vue";
import NavDrawer from "@/components/navigation/NavDrawer.vue";

//import ModalTestCartRecoveryMethod from "@/components/Modal/ModalTestCartRecoveryMethod.vue";
// import loaderAnim from "@/components/GlobalComponents/loaderAnim.vue";
// import axios from "axios";

// (function(h, o, t, j, a, r) {
//   h.hj =
//     h.hj ||
//     function() {
//       (h.hj.q = h.hj.q || []).push(arguments);
//     };
//   h._hjSettings = { hjid: 2035266, hjsv: 6 };
//   a = o.getElementsByTagName("head")[0];
//   r = o.createElement("script");
//   r.async = 1;
//   r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
//   a.appendChild(r);
// })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
export default {
  name: "App",
  beforeCreate() {
    // console.log(window.top.location);
    this.$store.dispatch("updateToken", this.$route.query.instance).then(() => {
      // console.log(resp);
      this.$store.dispatch("getGlobal").then(() => {
        this.$store.dispatch("getSubs").then(() => {
          this.$intercom.boot({
            user_id: this.$store.getters.getInstanceId,
            instance_id: this.$store.getters.getInstanceId,
            subscription_plan: this.$store.getters.getSubs.subscription_plan,
            website_url: this.$store.getters.getUrl,
          });
        });
        // console.log(response);
        this.$i18n.locale = this.$store.getters.getLocale;
        // console.log("Query Parameters :: " + this.$route.query.instance);
        this.$store.dispatch("getMsg").then(() => {
          // console.log(response);
          this.$store.dispatch("getSettings").then(() => {
            this.$store.dispatch("getWidgets").then(() => {});
          });
        });
      });
    });
  },
  mounted() {
    this.$router.push("/dashboard");
  },
  // mounted() {
  // },
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
    //,
    //ModalTestCartRecoveryMethod
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
      // console.log("inside axios check");
    },
  },
  computed: {
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
.app_bar_height {
  height: 80px !important;
}
.app_bar_height .v-toolbar__content,
.v-toolbar__extension {
  height: 80px !important;
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  padding-right: 0px !important;
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
