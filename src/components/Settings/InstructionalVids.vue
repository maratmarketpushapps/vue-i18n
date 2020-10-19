<template>
  <v-card tile height="85%" width="97%" class="font_dims">
    <v-row class="pl-3  mb-0" style="height:20%">
      <v-col cols="6" class="pb-0 mb-0">
        <h3 class="pt-3 pl-3">{{ $t("settingsPage.instVids.header") }}</h3>
      </v-col>
      <v-col cols="6"> </v-col>
    </v-row>
    <v-row class="pl-3  mb-2">
      <v-col cols="3">
        <v-img class="ml-3" :src="ytImg"> </v-img>
      </v-col>
      <v-col cols="9">
        <v-row style=" height:60% ; width:100%" align="end">
          <span style="font-weight:bold">
            {{ $t("settingsPage.instVids.vid1Title") }}
          </span>
        </v-row>
        <v-row style="height:40% ;width:100%" align="center">
          <a
            href="https://www.youtube.com/channel/UCOKGEwMeTDMkQr3cMXjmkEQ"
            target="_blank"
            style="text-decoration:underline; color:#323F4F"
            >{{ $t("settingsPage.instVids.link") }}</a
          >
        </v-row>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row class="pl-3  mt-2">
      <v-col cols="3">
        <v-img class="ml-3" :src="ytImg"> </v-img>
      </v-col>
      <v-col cols="9">
        <v-row style=" height:60% ; width:100%" align="end">
          <span style="font-weight:bold">
            {{ $t("settingsPage.instVids.vid2Title") }}
          </span>
        </v-row>
        <v-row style="height:40% ;width:100%" align="center">
          <a
            href="https://www.youtube.com/channel/UCOKGEwMeTDMkQr3cMXjmkEQ"
            target="_blank"
            style="text-decoration:underline; color:#323F4F"
            >{{ $t("settingsPage.instVids.link") }}</a
          >
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "InstructionalVids",
  components: {},
  data() {
    return {
      ytImg: require("@/assets/img/mp-cartrecovery-yt-cover.png"),
    };
  },
};
</script>

<style scoped>
.v-select >>> label {
  font-size: 100% !important;
}

.v-select {
  height: 70% !important;
}
</style>
