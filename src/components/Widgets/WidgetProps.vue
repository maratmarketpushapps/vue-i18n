<template>
  <v-card tile height="auto" width="95%" class="font_dims card-scroll">
    <v-container fluid style="height:auto;width:100%" class="mb-0 pb-0">
      <v-row style="height:25%;width:100%" class="pa-0 ma-0 ">
        <v-col cols="6">
          <v-row
            class="my-2 ml-2"
            style="height:100%;width:100%"
            align="center"
          >
            <h3>{{ $t("widgets.wdgtTypeHdr") }}</h3>
          </v-row>
        </v-col>
        <v-col cols="6">
          <v-row
            class="my-2 mr-2"
            style="height:100%;width:100%"
            justify="end"
            align="center"
          >
            <!-- save button -->
            <v-btn
              tile
              height="90%"
              class="primary mb-2 font_dims"
              width="50%"
              :disabled="detectChange"
              style="text-transform:none; font-size:90% !important"
              @click="svChanges"
            >
              {{ $t("widgets.svBtn") }}
            </v-btn>
          </v-row>
        </v-col>
      </v-row>

      <v-row
        style="border-radius:0px; height:20%;width:100%"
        class="px-0 mx-0 mt-2"
      >
        <v-col cols="1"></v-col>
        <v-col cols="4 px-0 mx-0">
          <v-row align="center" justify="start" style="width: 100%;">
            <input
              type="radio"
              name="group"
              value="Button"
              id="Op1"
              class="cust-chkbx  cust-chkbx-label cursor-hand"
              v-model="radioSelect"
            /><label class="cursor-hand lbl-props" for="Op1">{{
              $t("widgets.btnChc")
            }}</label>
          </v-row>
        </v-col>

        <v-col cols="6">
          <v-row align="center" style="width: 100%;">
            <input
              type="radio"
              name="group"
              value="Checkbox"
              id="Op2"
              class="cust-chkbx cust-chkbx-label cursor-hand"
              v-model="radioSelect"
            /><label class="cursor-hand lbl-props" for="Op2">{{
              $t("widgets.chbxChc")
            }}</label>
          </v-row>
        </v-col>
      </v-row>

      <v-row style="height:20%;width:100%" class="pa-0 ma-0" align="start">
        <v-col cols="6">
          <v-row class="my-2 ml-2" style="width:100%" align="center">
            <h3>{{ $t("widgets.modalHdr") }}</h3>
          </v-row>
        </v-col>
        <v-col cols="6">
          <v-row class="my-0 mr-2" style="width:100%" justify="end">
            <TooltipIcon
              :posRight="true"
              :nudgeBottom="30"
              :nudgeLeft="5"
              :txt="$t('widgets.modalInfo')"
              class="infoicon_scale pt-0 mt-0"
            />
          </v-row>
        </v-col>
      </v-row>
      <v-row style="height:20%;width:100%" align="center">
        <v-col cols="1"></v-col>
        <v-col cols="4">
          <v-row align="center">
            <ColorSelect
              :color="hdrColor"
              :label="$t('widgets.hdrColor')"
              v-on:selectedColor="setHdrClr($event)"
              :key="hdrKey"
              class="item-scale"
              style="width:auto"
            />
          </v-row>
        </v-col>
        <v-col cols="4">
          <v-row align="center">
            <ColorSelect
              :color="bdyColor"
              :label="$t('widgets.bdyColor')"
              v-on:selectedColor="setBdyClr($event)"
              :key="bdyKey"
              class="item-scale"
            />
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-divider></v-divider>
    <v-container fluid style="height:auto;width:100%" class="mb-0 pb-0">
      <v-row align="start" style="height:30% width:100%" class="mb-0 pb-0">
        <v-col cols="1"></v-col>
        <v-col cols="10">
          <v-row align="start" style="height:70%" class="mb-0 pb-0">
            <v-text-field
              :label="$t('widgets.ttlTxt')"
              v-model="ttlText"
              class="text-fonts"
            >
            </v-text-field>
          </v-row>
        </v-col>
      </v-row>
      <v-row align="start" style="width:100%" class="mt-0 pt-0">
        <v-col cols="1" class=""></v-col>
        <v-col cols="3" class="">
          <v-row align="start" class="mr-2">
            <v-select
              dense
              :items="fontLst"
              :label="$t('widgets.fontFamily')"
              class="text-fonts label-scale"
              v-model="ttlFont"
            >
            </v-select>
          </v-row>
        </v-col>
        <v-col cols="4" class="mr-0 ml-3">
          <v-row align="start" class="mr-2">
            <ColorSelect
              :color="ttlColor"
              :label="$t('widgets.fontColor')"
              v-on:selectedColor="setTtlClr($event)"
              :key="ttlKey"
              class="item-scale"
            />
          </v-row>
        </v-col>
        <v-col cols="2" class="ml-0 pl-0">
          <v-row align="start" class="mr-0">
            <v-select
              dense
              :items="fontWeight"
              :label="$t('widgets.fontWght')"
              class="text-fonts label-scale"
              v-model="ttlFontWght"
            >
            </v-select>
          </v-row>
        </v-col>
        <v-col cols="1" class="ml-0 pl-0 ml-4">
          <v-row align="start" class="pl-0">
            <v-select
              dense
              :items="fontSize"
              :label="$t('widgets.fontSize')"
              class="text-fonts label-scale"
              v-model="ttlFontSize"
            >
            </v-select>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-divider></v-divider>

    <v-container fluid style="height:auto;width:100%" class="mb-0 pb-0">
      <v-row align="start" style="height:30% width:100%" class="mb-0 pb-0">
        <v-col cols="1"></v-col>
        <v-col cols="10">
          <v-row align="start" style="height:70%" class="mb-0 pb-0">
            <v-text-field
              :label="$t('widgets.msgTxt')"
              v-model="msgTxt"
              class="text-fonts"
            >
            </v-text-field>
          </v-row>
        </v-col>
      </v-row>
      <v-row align="start" style="width:100%" class="mt-0 pt-0">
        <v-col cols="1" class=""></v-col>
        <v-col cols="3" class="">
          <v-row align="start" class=" mr-2">
            <v-select
              dense
              :items="fontLst"
              :label="$t('widgets.fontFamily')"
              class="text-fonts label-scale"
              v-model="msgFont"
            >
            </v-select>
          </v-row>
        </v-col>
        <v-col cols="4" class=" mr-0 ml-3">
          <v-row align="start" class="mr-2">
            <ColorSelect
              :color="msgColor"
              :label="$t('widgets.fontColor')"
              v-on:selectedColor="setMsgClr($event)"
              :key="msgKey"
              class="item-scale"
            />
          </v-row>
        </v-col>
        <v-col cols="2" class="ml-0 pl-0">
          <v-row align="start" class="mr-0">
            <v-select
              dense
              :items="fontWeight"
              :label="$t('widgets.fontWght')"
              class="text-fonts label-scale"
              v-model="msgFontWght"
            >
            </v-select>
          </v-row>
        </v-col>
        <v-col cols="1" class="ml-0 pl-0 ml-4">
          <v-row align="start" class=" pl-0">
            <v-select
              dense
              :items="fontSize"
              :label="$t('widgets.fontSize')"
              class="text-fonts label-scale"
              v-model="msgFontSize"
            >
            </v-select>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-divider></v-divider>
    <v-container
      fluid
      style="height:auto;width:100%"
      class="mb-0 pb-0"
      v-show="radioSelect == 'Checkbox'"
    >
      <v-row style="height:20%;width:100%" class="pa-0 ma-0" align="start">
        <v-col cols="6">
          <v-row class="my-2 ml-2" style="width:100%" align="center">
            <h3>{{ $t("widgets.btnHdr") }}</h3>
          </v-row>
        </v-col>
        <v-col cols="6">
          <v-row class="my-0 mr-2" style="width:100%" justify="end">
            <TooltipIcon
              :posRight="true"
              :nudgeBottom="30"
              :nudgeLeft="5"
              :txt="$t('widgets.btnInfo')"
              class="infoicon_scale pt-0 mt-0"
            />
          </v-row>
        </v-col>
      </v-row>

      <!-- Start of submit group  -->
      <v-row align="center" style="height:30% width:100%" class="mb-0 pb-0">
        <v-col cols="1"></v-col>
        <v-col cols="6">
          <v-row align="center" style="height:100%" class="">
            <v-text-field
              :label="$t('widgets.btnTxt')"
              v-model="btnTxt"
              class="text-fonts"
              dense
            >
            </v-text-field>
          </v-row>
        </v-col>
        <v-col cols="auto" class="mr-0 ml-6">
          <v-row align="center" style="height:100%" class="">
            <ColorSelect
              :color="btnBcgColor"
              :label="$t('widgets.btnColor')"
              v-on:selectedColor="setBtnBcgClr($event)"
              :key="btnBcgKey"
              class="item-scale"
            />
          </v-row>
        </v-col>
      </v-row>
      <v-row align="start" style="width:100%" class="mt-0 pt-0">
        <v-col cols="1" class="mt-0 pt-0"></v-col>
        <v-col cols="3" class="">
          <v-row align="start" class="mr-2">
            <v-select
              dense
              :items="fontLst"
              :label="$t('widgets.fontFamily')"
              class="text-fonts label-scale"
              v-model="btnFont"
            >
            </v-select>
          </v-row>
        </v-col>
        <v-col cols="4" class="mr-0 ml-3">
          <v-row align="start" class="mt-0 pt-0 mr-2">
            <ColorSelect
              :color="btnFntColor"
              :label="$t('widgets.fontColor')"
              v-on:selectedColor="setBtnFntClr($event)"
              :key="btnFntKey"
              class="item-scale"
              style="height:100%"
            />
          </v-row>
        </v-col>
        <v-col cols="2" class="ml-1 pl-0">
          <v-row align="start" class="mt-0 pt-0 mr-0">
            <v-select
              dense
              :items="fontWeight"
              :label="$t('widgets.fontWght')"
              class="text-fonts label-scale"
              v-model="btnFontWght"
            >
            </v-select>
          </v-row>
        </v-col>
        <v-col cols="1" class=" ml-2 mr-0 pr-0">
          <v-row align="start" class="mt-0 pt-0 pl-0">
            <v-select
              dense
              :items="btnfontSizeArr"
              :label="$t('widgets.fontSize')"
              class="text-fonts label-scale"
              v-model="btnFontSize"
            >
            </v-select>
          </v-row>
        </v-col>
      </v-row>

      <v-row align="start" style="width:100%" class="mt-0 pt-0">
        <v-col cols="1" class="mt-0 pt-0"></v-col>
        <v-col cols="3" class="">
          <v-row align="start" class="mr-0">
            <v-select
              dense
              :items="btnCrnrArr"
              :label="$t('widgets.btnCrnr')"
              class="text-fonts label-scale"
              v-model="btnCrnr"
            >
            </v-select>
          </v-row>
        </v-col>
        <v-col cols="2" class=" mr-2">
          <v-row align="start" class="mt-0 pt-0 pl-2">
            <v-select
              dense
              :items="btnBrdrSzArr"
              :label="$t('widgets.btnBrdrSz')"
              class="text-fonts label-scale"
              v-model="btnBrdrSz"
            >
            </v-select>
          </v-row>
        </v-col>
        <v-col cols="4" class="mr-0 ml-3">
          <v-row align="start" class="mt-0 pt-0 mr-2">
            <ColorSelect
              :color="btnBrdrColor"
              :label="$t('widgets.btnBrdrClr')"
              v-on:selectedColor="setBtnBrdrClr($event)"
              :key="clrBtnBrdrKey"
              class="item-scale"
              style="height:100%"
            />
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-divider></v-divider>
    <v-container fluid style="height:auto;width:100%" class="mb-0 pb-0">
      <v-row style="height:20%;width:100%" class="pa-0 ma-0" align="start">
        <v-col cols="6">
          <v-row class="my-2 ml-2" style="width:100%" align="center">
            <h3>{{ $t("widgets.cnclHdr") }}</h3>
          </v-row>
        </v-col>
        <v-col cols="6">
          <v-row class="my-0 mr-2" style="width:100%" justify="end">
            <TooltipIcon
              :posRight="true"
              :nudgeBottom="30"
              :nudgeLeft="5"
              :txt="$t('widgets.cnclInfo')"
              class="infoicon_scale pt-0 mt-0"
            />
          </v-row>
        </v-col>
      </v-row>
      <v-row align="start" style="height:30% width:100%" class="mb-0 pb-0">
        <v-col cols="1"></v-col>
        <v-col cols="10">
          <v-row align="start" style="height:70%" class="mb-0 pb-0">
            <v-text-field
              :label="$t('widgets.cnclTxt')"
              v-model="cnclTxt"
              class="text-fonts"
            >
            </v-text-field>
          </v-row>
        </v-col>
      </v-row>
      <v-row align="start" style="width:100%" class="mt-0 pt-0">
        <v-col cols="1" class=""></v-col>
        <v-col cols="3" class="">
          <v-row align="start" class=" mr-2">
            <v-select
              dense
              :items="fontLst"
              :label="$t('widgets.fontFamily')"
              class="text-fonts label-scale"
              v-model="cnclFont"
            >
            </v-select>
          </v-row>
        </v-col>
        <v-col cols="4" class="mr-0 ml-3">
          <v-row align="start" class=" mr-2">
            <ColorSelect
              :color="cnclColor"
              :label="$t('widgets.fontColor')"
              v-on:selectedColor="setCnclClr($event)"
              :key="cnclKey"
              class="item-scale"
            />
          </v-row>
        </v-col>
        <v-col cols="2" class=" ml-0 pl-0">
          <v-row align="start" class=" mr-0">
            <v-select
              dense
              :items="fontWeight"
              :label="$t('widgets.fontWght')"
              class="text-fonts label-scale"
              v-model="cnclFontWght"
            >
            </v-select>
          </v-row>
        </v-col>
        <v-col cols="1" class=" ml-0 pl-0 ml-4">
          <v-row align="start" class=" pl-0">
            <v-select
              dense
              :items="fontSize"
              :label="$t('widgets.fontSize')"
              class="text-fonts label-scale"
              v-model="cnclFontSize"
            >
            </v-select>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-divider></v-divider>
  </v-card>
</template>

<script>
import TooltipIcon from "@/components/svgIcons/TooltipIcon.vue";
import ColorSelect from "@/components/GlobalComponents/ColorSelect.vue";
import { mapGetters } from "vuex";

export default {
  name: "WidgetProps",
  components: { TooltipIcon, ColorSelect },
  data() {
    return {
      radioSelect: "",
      headerColor: "#FFFFFF",
      bcgColor: "#FFFFFF",
      hdrClrKey: 0,
      bdyClrKey: 0,
      ttlText: "",
      ttlFont: "",
      fontLst: [
        "Ariel",
        "Georgia",
        "Helvetica",
        "Impact",
        "Open sans",
        "Poppins",
        "Roboto",
        "Times new roman",
        "Verdana",
      ],
      fontSize: [8, 9, 10, 11, 12, 14, 18, 24, 30, 36],
      fontWeight: ["lighter", "normal", "bolder"],
      ttlFontWght: 0,
      ttlFontSize: 0,
      ttlClrKey: 0,
      msgTxt: "",
      msgFont: "",
      msgClrKey: 0,
      msgFontWght: 0,
      msgFontSize: 0,
      cnclTxt: "",
      cnclFont: "",
      cnclClrKey: 0,
      cnclFontWght: 0,
      cnclFontSize: 0,
      btnTxt: "",
      btnBcgClrKey: 0,
      btnFont: "",
      btnFntClrKey: 0,
      btnFontWght: 0,
      btnFontSize: 0,
      btnfontSizeArr: [8, 9, 10, 11, 12, 14, 18, 24],
      btnCrnrArr: ["Round", "Tile"],
      btnCrnr: "",
      btnBrdrSzArr: [1, 2, 3, 4, 5, 6],
      btnBrdrSz: 0,
      btnBrdrClrKey: 0,
    };
  },
  methods: {
    setHdrClr(selectedColor) {
      this.headerColor = selectedColor;
      this.$store.dispatch("updWdgtHdrClr", selectedColor);
    },
    setBdyClr(selectedColor) {
      this.bcgColor = selectedColor;
      this.$store.dispatch("updWdgtBdyClr", selectedColor);
    },
    hdrIncr() {
      this.hdrClrKey++;
    },
    bdyIncr() {
      this.bdyClrKey++;
    },
    ttlIncr() {
      this.ttlClrKey++;
    },
    msgIncr() {
      this.msgClrKey++;
    },
    cnclIncr() {
      this.cnclClrKey++;
    },
    btnBrdrIncr() {
      this.btnBrdrClrKey++;
    },
    btnBcgIncr() {
      this.btnBcgClrKey++;
    },
    btnFntIncr() {
      this.btnFntClrKey++;
    },
    setTtlClr(selectedColor) {
      this.$store.dispatch("updTtlBdyClr", selectedColor);
    },
    setMsgClr(selectedColor) {
      this.$store.dispatch("updMsgBdyClr", selectedColor);
    },
    setCnclClr(selectedColor) {
      this.$store.dispatch("updWdgtCnclClr", selectedColor);
    },
    setBtnBcgClr(selectedColor) {
      this.$store.dispatch("updWdgtBtnBcgClr", selectedColor);
    },
    setBtnFntClr(selectedColor) {
      this.$store.dispatch("updWdgtBtnFntClr", selectedColor);
    },
    setBtnBrdrClr(selectedColor) {
      this.$store.dispatch("updWdgtBtnBrdrClr", selectedColor);
    },
    svChanges() {
      this.$store.dispatch("setWdgts").then((response) => {
        if (response) {
          this.$store.dispatch("getWidgets");
        }
      });
    },
  },
  computed: {
    ...mapGetters(["getWidgetsState"]),
    detectChange() {
      return this.getWidgetsState.changesSaved;
    },

    hdrColor() {
      this.hdrIncr();
      return this.getWidgetsState.header_background_color;
    },
    bdyColor() {
      this.bdyIncr();
      return this.getWidgetsState.popup_background_color;
    },
    hdrKey() {
      return "h" + this.hdrClrKey;
    },
    bdyKey() {
      return "b" + this.bdyClrKey;
    },
    ttlKey() {
      return "ttl" + this.ttlClrKey;
    },
    ttlColor() {
      this.ttlIncr();
      return this.getWidgetsState.pop_up_title_font_color;
    },
    msgColor() {
      this.msgIncr();
      return this.getWidgetsState.pop_up_message_font_color;
    },

    cnclColor() {
      this.cnclIncr();
      return this.getWidgetsState.pop_up_cancel_font_color;
    },

    btnBcgColor() {
      this.btnBcgIncr();
      return this.getWidgetsState.button_background;
    },

    msgKey() {
      return "msg" + this.msgClrKey;
    },
    cnclKey() {
      return "cncl" + this.cnclClrKey;
    },
    btnBcgKey() {
      return "btnBcg" + this.btnBcgClrKey;
    },
    btnFntColor() {
      this.btnFntIncr();
      return this.getWidgetsState.button_font_color;
    },
    btnFntKey() {
      return "btnFnt" + this.btnFntClrKey;
    },
    btnBrdrColor() {
      this.btnBrdrIncr();
      return this.getWidgetsState.button_border_color;
    },
    clrBtnBrdrKey() {
      return "btnBrdr" + this.btnBrdrClrKey;
    },
  },
  watch: {
    radioSelect(newValue, oldValue) {
      console.log(oldValue);
      console.log(newValue);
      this.$store.dispatch("updWdgtType", newValue);
    },
    ttlText(newValue) {
      this.$store.dispatch("updWdgtTtl", newValue);
    },
    ttlFont(newValue) {
      this.$store.dispatch("updWdgtTtlFnt", newValue);
    },
    ttlFontWght(newValue) {
      this.$store.dispatch("updWdgtTtlFntWght", newValue);
    },
    ttlFontSize(newValue) {
      this.$store.dispatch("updWdgtTtlFntSize", newValue);
    },
    msgTxt(newValue) {
      this.$store.dispatch("updWdgtMsg", newValue);
    },
    msgFont(newValue) {
      this.$store.dispatch("updWdgtMsgFnt", newValue);
    },
    msgFontWght(newValue) {
      this.$store.dispatch("updWdgtMsgFntWght", newValue);
    },
    msgFontSize(newValue) {
      this.$store.dispatch("updWdgtMsgFntSz", newValue);
    },
    cnclTxt(newValue) {
      this.$store.dispatch("updWdgtCnclTxt", newValue);
    },
    cnclFont(newValue) {
      this.$store.dispatch("updWdgtCnclFnt", newValue);
    },
    cnclFontWght(newValue) {
      this.$store.dispatch("updWdgtCnclFntWght", newValue);
    },
    cnclFontSize(newValue) {
      this.$store.dispatch("updWdgtCnclFntSz", newValue);
    },
    btnTxt(newValue) {
      this.$store.dispatch("updWdgtBtnTxt", newValue);
    },
    btnFont(newValue) {
      this.$store.dispatch("updWdgtBtnFnt", newValue);
    },
    btnFontWght(newValue) {
      this.$store.dispatch("updWdgtBtnFntWght", newValue);
    },
    btnFontSize(newValue) {
      this.$store.dispatch("updWdgtBtnFntSz", newValue);
    },
    btnCrnr(newValue) {
      this.$store.dispatch("updWdgtBtnCrnr", newValue);
    },
    btnBrdrSz(newValue) {
      this.$store.dispatch("updWdgtBtnBrdrSz", newValue);
    },
  },

  mounted() {
    this.$store.dispatch("getWidgets").then((response) => {
      if (response) {
        this.radioSelect = this.$store.getters.getWidgetsState.facebook_widget_type;
        this.ttlText = this.$store.getters.getWidgetsState.pop_up_title;
        this.ttlFont = this.$store.getters.getWidgetsState.pop_up_title_font_family;
        this.ttlFontWght = this.$store.getters.getWidgetsState.pop_up_title_font_type;
        this.ttlFontSize = this.$store.getters.getWidgetsState.pop_up_title_font_size;
        this.msgTxt = this.$store.getters.getWidgetsState.pop_up_message;
        this.msgFont = this.$store.getters.getWidgetsState.pop_up_message_font_family;
        this.msgFontWght = this.$store.getters.getWidgetsState.pop_up_message_font_type;
        this.msgFontSize = this.$store.getters.getWidgetsState.pop_up_message_font_size;
        this.cnclTxt = this.$store.getters.getWidgetsState.pop_up_cancel;
        this.cnclFont = this.$store.getters.getWidgetsState.pop_up_cancel_font_family;
        this.cnclFontWght = this.$store.getters.getWidgetsState.pop_up_cancel_font_type;
        this.cnclFontSize = this.$store.getters.getWidgetsState.pop_up_cancel_font_size;
        this.btnTxt = this.$store.getters.getWidgetsState.button_text;
        this.btnFont = this.$store.getters.getWidgetsState.button_font_family;
        this.btnFontWght = this.$store.getters.getWidgetsState.button_font_type;
        this.btnFontSize = this.$store.getters.getWidgetsState.button_font_size;
        this.btnCrnr = this.$store.getters.getWidgetsState.button_corners;
        this.btnBrdrSz = this.$store.getters.getWidgetsState.button_border_size;
      }
    });
  },
};
</script>

<style>
.card-scroll {
  overflow: auto;
  scrollbar-width: 2px;
}

.cust-chkbx {
  height: 20px !important;
  width: 20px !important;
  border: 1px solid cornflowerblue;
  border-radius: 2px;
  margin: 2px;
  -webkit-appearance: none;
}

.cursor-hand {
  cursor: pointer;
}

.cust-chkbx:checked {
  background-color: cornflowerblue;
  padding: 1px !important;
  background-size: 2px 2px !important;
  background-clip: content-box;
  color: cornflowerblue;
}

.cust-chkbx-label:checked + label {
  color: cornflowerblue;
  font-weight: bold;
}

.cust-chkbx:focus {
  outline-color: transparent;
}

.lbl-props {
  font-size: 85%;
  font-weight: bold;
  padding-inline-start: 5px;
}

.item-scale {
  transform: scale(0.95);
  transform-origin: 0 0;
}

.label-scale {
  transform: scale(0.95);
  transform-origin: 0 0;
}
.text-fonts {
  font-size: 92%;
}

@media only screen and (max-width: 1399px) {
  .lbl-props {
    font-size: 100%;
  }

  .item-scale {
    transform: scale(0.9);
    transform-origin: 0 0;
  }
  .label-scale {
    transform: scale(0.9);
    transform-origin: 0 0;
  }
}
@media only screen and (max-width: 1230px) {
  .lbl-props {
    font-size: 80%;
  }

  .item-scale {
    transform: scale(0.8);
    transform-origin: 0 0;
  }
  .label-scale {
    transform: scale(0.8);
    transform-origin: 0 0;
  }
}
@media only screen and (max-width: 1050px) {
  .lbl-props {
    font-size: 75%;
  }

  .item-scale {
    transform: scale(0.8);
    transform-origin: 0 0;
  }
  .label-scale {
    transform: scale(0.8);
    transform-origin: 0 0;
  }
}
@media only screen and (min-width: 1455px) {
  .lbl-props {
    font-size: 95%;
  }
  .item-scale {
    transform: scale(1);
    transform-origin: 0 0;
  }
  .label-scale {
    transform: scale(1);
    transform-origin: 0 0;
  }
}
</style>
