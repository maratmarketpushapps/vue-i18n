<template>
  <v-container fluid class="pt-0 mt-9">
    <v-row class="pt-0 mt-0 pb-0 mb-0 row-style" align="center">
      <v-col cols="auto" class="pt-0">
        <h3 class="header_dims page_headers pr-0 mr-0 pt-0 mt-0">
          {{ $t("navbar.navdrawer.Widgets") }}&nbsp;
        </h3>
      </v-col>
      <v-col cols="1" class="pl-0 ml-0 pt-0">
        <TooltipIcon
          :posRight="true"
          :nudgeBottom="30"
          :nudgeLeft="5"
          :txt="$t('widgets.headerInfo')"
          class="infoicon_scale pt-0"
        />
      </v-col>

      <v-col cols="8.75" class="pt-0">
        <v-row align="center" justify="end" style="width:100%">
          <v-col cols="auto"> </v-col>
          <v-col cols="auto"> </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row
      class="pt-1 mt-6"
      align="start"
      justify="start"
      style="height:auto;"
    >
      <v-col cols="7" style="height:100%">
        <v-row style="height:100%" align="start" justify="start">
          <WidgetProps class="mt-3" />
        </v-row>
      </v-col>
      <v-col cols="5" style="">
        <v-row
          style="height:75vh; width:auto; "
          align="start"
          justify="center"
          v-show="widgetType == 'Button'"
        >
          <WidgetView />
        </v-row>
        <v-row
          style="height:75vh; width:auto;"
          align="start"
          justify="center"
          v-show="widgetType == 'Checkbox'"
        >
          <WidgetViewCheckBox />
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TooltipIcon from "@/components/svgIcons/TooltipIcon.vue";
import WidgetProps from "@/components/Widgets/WidgetProps.vue";
import WidgetView from "@/components/Widgets/WidgetView.vue";
import WidgetViewCheckBox from "@/components/Widgets/WidgetViewCheckBox.vue";
import { mapGetters } from "vuex";

export default {
  name: "Widgets",
  components: {
    TooltipIcon,
    WidgetProps,
    WidgetView,
    WidgetViewCheckBox,
  },
  data() {
    return {
      live: false,
    };
  },
  beforeCreate() {
    this.$store.dispatch("getWidgets").then((response) => {
      console.log(response);
      this.live = this.$store.getters.getWidgetsState.active;
    });
  },
  methods: {
    updWdgtLiveActive() {
      this.$store.dispatch("updWdgtLive", this.live).then(() => {
        this.$store.dispatch("setWdgts").then(() => {
          this.$store.dispatch("getWidgets");
        });
      });
    },
  },
  computed: {
    ...mapGetters(["getWidgetsState"]),
    widgetType() {
      console.log(
        "widget type :: " + this.getWidgetsState.facebook_widget_type
      );
      return this.getWidgetsState.facebook_widget_type;
    },
    liveLbl() {
      return this.live ? this.$t("widgets.liveLbl") : this.$t("widgets.offLbl");
    },
  },
};
</script>

<style scoped>
.row-style {
  height: 6vh;
}

@media (min-width: 1400px) {
  .row-style {
    height: 8vh;
  }
}
</style>
