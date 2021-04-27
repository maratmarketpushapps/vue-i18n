<template>
  <v-app class="width_overflow">
    <v-content class="app_background app-style pl-0 width_overflow_hidden" style="height:auto;min-width: 1060px !important;">
      <NavDrawer />
      <AppBar class="app_bar_height" />

      <v-snackbar
        v-model="snackbar"
        elevation="24"
        absolute
        centered
        shaped
        top
        :timeout="timeClose"
      >
        <span style="font-size: 18px">{{ $t("absenseToken") }}</span>
      </v-snackbar>
<!--      /* modal for technical support */-->
      <v-row justify="center">
        <v-dialog
          v-model="modal_technical_support"
          persistent
          max-width="290"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
            >
              Open Dialog
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="headline">
              Maintenance mode:
            </v-card-title>
            <v-card-text>
              We are currently adding SMS cart recovery to the app.
              Please come back to this page and refresh it in 2-3 hours. We apologize for the inconvenience.
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-row>

      <v-row style="height:auto width: 100%;" v-if="!modal_technical_support">
        <v-col cols="12" class="pb-0 ">
<!--          /* by andra task*/-->
<!--          <v-row style="height:4vh">-->
<!--            <v-col cols="12" class="no_pr"> </v-col>-->
<!--          </v-row>-->
          <v-row align="center" justify="center">
            <v-col cols="auto" style="width: 6vw;" class=""> </v-col>
            <v-col cols="12" class="px-0  pb-0">
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

export default {
  name: "App",
  beforeCreate() {
    // console.log(window.top.location);
    this.$store.dispatch("updateToken", this.$route.query.instance).then(() => {
      // console.log(resp);
      this.$store.dispatch("getGlobal").then(() => {

        // console.log(response);
        this.$i18n.locale = this.$store.getters.getLocale;
        // console.log("Query Parameters :: " + this.$route.query.instance);
        this.$store.dispatch("getMsg").then(() => {
          // console.log(response);
          this.$store.dispatch("getSettings").then(() => {
            this.$store.dispatch("getSubs").then(() => {
              this.$intercom.boot({
                user_id: this.$store.getters.getInstanceId,
                instance_id: this.$store.getters.getInstanceId,
                subscription_plan: this.$store.getters.getSubs.subscription_plan,
                consumed_recovery_attempts: this.$store.getters.getSubs.consumed_recovery_attempts,
                website_url: this.$store.getters.getUrl,
                email: this.$store.getters.getSettingsState.email,
              });
            });

            this.$store.dispatch("getWidgets").then(() => {


            });
          });
        });
      });
    });
  },
  mounted() {
    this.$router.push("/dashboard");
    if(this.$store.getters.getToken == undefined || this.$store.getters.getToken == ''){
      this.snackbar = true
    } else this.snackbar = false
  },
  components: {
    AppBar,
    NavDrawer
  },
  data() {
    return {
      showAlert: true,
      absolute: false,
      opacity: 0.46,
      zIndex: 5,
      // isLoading: false,
      nuRequests: 0,
      modal_technical_support:false,
      snackbar:false,
      multiLine: true,
      timeClose:99999999,
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
    }
  },

};
</script>

<style>

.v-application .elevation-15{
  box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%) !important;
}
.v-menu__content{
  box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%) !important;
}
/*.v-tab:focus {*/
/*  background-color: transparent !important;*/
/*  cursor: inherit;*/
/*}*/
menuable__content__active{
  position: relative !important;
  top:-90px !important;
}
.vti__dropdown:visited{
  background-color: yellow !important;
}

.vti__dropdown:link {
  background-color: yellow !important;
}

/* visited link */
.vti__dropdown:visited {
  background-color: yellow !important;
}

/* mouse over link  disapled by Marat*/
/*.vti__dropdown:hover {*/
/*  background-color: yellow !important;*/
/*}*/

/*!* selected link *!*/
/*.vti__dropdown:active {*/
/*  background-color: yellow !important;*/
/*}*/

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

.app_bar_height{
  height: 80px !important;
}

.app_bar_height .v-toolbar__content, .v-toolbar__extension{
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
@media (max-width: 1000px) {
  .width_overflow {
    overflow: scroll !important;

  }
  .width_overflow_hidden{
    overflow: hidden !important;
  }
}

</style>
