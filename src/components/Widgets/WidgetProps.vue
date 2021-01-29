<template>
  <v-card tile height="auto" width="100%" class="wdgt_font_dims card-scroll par_">
    <v-container fluid style="height:auto;width:100%" class="mb-0 pb-0 mt-0">
      <v-row style="height:20%;width:100%" class="">
        <v-col :cols="$vuetify.breakpoint.width < 1190 ? '4 offset-1' : '3 offset-1 ' " >
          <v-row
            class="my-0 "
            style="height:100%;width:100%"
            align="center"
          >
            <h3 class="pop_con_wdg">{{ $t('widgets.setUpPopupLive') }}</h3>
          </v-row>
        </v-col>

        <v-col :cols="$vuetify.breakpoint.width < 976 ? '2' : $vuetify.breakpoint.width < 1249 ? '3' :  '5'" class="">
          <v-switch v-model="live" inset
                    color="#006AFF"
                    @change="wdgtLive()">
          </v-switch>
        </v-col>

        <v-col :cols="$vuetify.breakpoint.width < 976 ? '5' : $vuetify.breakpoint.width < 1249 ? '4' :'3'">
          <v-row
            class="my-0 mr-2"
            style="height:100%;width:100%"
            justify="end"
            align="center"
          >
            <!-- save button -->
            <v-btn
              tile
              :class="!detectChange ? 'mb-2 sv_changes wdgt_font_dims resp_sp' : 'mb-2 wdgt_font_dims resp_sp'"
              :disabled="detectChange"
              @click="svChanges"
              outlined
            >
              {{ $t("widgets.svBtn") }}

            </v-btn>

          </v-row>
        </v-col>

      </v-row>
      <span style="color: red" v-if="discCodeNotValid" class="d-flex justify-end mr-9">  {{ $t("widgets.requiredValidCode") }}</span>
      <v-row class=" pt-4">
        <v-col cols="9 offset-1 d-flex align-center" class="py-0 px-0">
          <h3 class="subs_title gath_msg">{{ $t("widgets.GathMess") }}</h3>
        </v-col>
        <v-col cols="2" class="row justify-end pr-9 ma-0  py-0 px-0">
          <TooltipIcon
            :posRight="true"
            :nudgeBottom="30"
            :nudgeLeft="5"
            :txt="$t('widgets.channelsInfo')"
            class="infoicon_scale pt-0 mt-0"
          />
        </v-col>
      </v-row>

      <v-col class="pa-0 parent_gat_message">
        <!--      <draggable v-model="coneData" class="row pl-4 pr-5 mb-6">-->
        <v-col  v-for="(ite,ke) in coneData" :key="ke+'item.id'" cols="11 offset-1"
                :class="notSel?'notSelSpc pl-0 mt-6 height_row':'pl-0 mt-0 height_row'" align-self="end">
          <small :class="notSel?'notSelTxt mt-10':''" v-if="notSel">{{ $t("widgets.notSelTxt") }}</small>
          <v-col cols="12" class="connection_row height_row row py-0 my-0 pl-2 pr-0" row
                 :class="notSel?'notSel connection_row height_row row py-0 my-0 pl-2 pr-0':'connection_row height_row row py-0 my-0 pl-2 pr-0'">
            <v-col cols="6" class="py-0 my-0 " >
              <v-checkbox
                v-model="ite.connection"
                :label="$t(getDisplayAvailabilityNotice(ite))"
                class="mt-0 mb-0"
                :disabled="detectEuRegion && ite.title == 'Facebook'"
              >
              </v-checkbox>

            </v-col>
            <v-col class="pt-0 d-flex justify-end Eu_hint_NotAv">
              <span v-if="detectEuRegion && ite.title == 'Facebook'">{{ $t("widgets.notAvEU") }}</span>
            </v-col>
            <v-col @click="rev()" cols="1 " class="pb-0 cursor_pointer" justify="end" :class="detectEuRegion ? 'disabled_display pt-0' : 'pt-3'">
              <v-img src="../../assets/img/arrowmove.png" width="11px" height="14px"  :class="detectEuRegion ? 'fix_image_pos' : ''"
                     v-if="(ite.title !== 'Facebook' && detectEuRegion == true) ||detectEuRegion == false"
              ></v-img>
            </v-col>
          </v-col>
        </v-col>
      </v-col>
     </v-container>
    <v-divider ></v-divider>
    <v-container>
    <v-row class="Sub_Par">
        <v-col cols="6 offset-1 py-0 px-0" class="py-0 align-end">
          <h3 class="subs_title gath_msg">{{ $t("widgets.subsType") }}</h3>
        </v-col>
        <v-col cols="5" class="justify-end row pr-6 py-0 mr-0">
          <TooltipIcon
            :posRight="true"
            :nudgeBottom="30"
            :nudgeLeft="5"
            :txt="$t('widgets.subscribeInfo')"
            class="infoicon_scale pt-0 mt-0"
          />
        </v-col>
        <v-col cols="12 offset-1 py-0 px-0">
          <p class="subs_text widg_hint_txt">{{$t("widgets.discText")}}</p>
        </v-col>
        <v-row>
          <v-col :cols="$vuetify.breakpoint.width < 1550 ? '3 offset-1' : '2 offset-1'" class="par_spc py-0 mb-0 px-0">
            <v-checkbox
              @change="def_selected == '' ? discount_selected = 'subscribe' : discount_selected = ''"
              v-model="def_selected"
              value="deafult"
              :label="$t('widgets.subscribeTypeNoDiscount')"
              class="mt-0 ml-2"
            ></v-checkbox>
          </v-col >
          <v-col class="py-0">
            <v-checkbox
              @change="discount_selected == '' ? discount_selected = 'deafult' : def_selected = ''"
              v-model="discount_selected"
              value="subscribe"
              class="checkbox_widget mt-0 mb-0"
              :label="$t('widgets.subscribeTypeDiscount')"
            ></v-checkbox>
          </v-col>
        </v-row>
      </v-row>
    </v-container>
    <v-container class="py-0">
      <v-row class="py-0">
        <v-col cols="11 offset-1" v-if="def_selected == ''" class="px-0 py-0">
          <v-row  class="py-0 par_disc_fields">
            <v-col cols="6" class="py-0 mb-0 ">
              <v-text-field
                v-model="discount_statement"
                :label="$t('widgets.discState')"
                class="mb-0"
                :value="discount_statement"
              ></v-text-field>
            </v-col>
            <v-col cols="5" class="py-0 mb-0 ">
              <v-text-field
                v-model="discount_code"
                :label="$t('widgets.addYourDiscCode')"
                class="mb-0 dis_code"
                :class="discCodeNotValid ? 'not_valid' : ''"
                :value="discount_code"
                :rules="nameRules"
              ></v-text-field>
            </v-col>
            <v-container class="pr-12 py-0 pos_sm_cont">
              <v-col cols="12" class="pl-0 pr-2 py-0 d-flex justify-start">
                <small class="smaller_text space_bottom ">{{$t('widgets.discSmallText')}}<b>{{ $t('widgets.discMarkHint')}}</b>{{$t('widgets.discSmallTextManualCoupon')}}</small>
              </v-col>
            </v-container>
            <v-container fluid style="height:auto;width:100%" class="mb-0 pb-0 px-6 py-0 pos_smaller">
              <v-row align="start" style="height:30% width:100%" class="mb-0 pb-0 py-0">
                <v-col cols="11" class="py-0">
                  <v-row align="start" style="height:70%" class="mb-0 pb-0 py-0">
                    <v-text-field
                      v-model="apply_discount_instruction"
                      :label="$t('widgets.discountLabelinstruction')"
                      class="text-fonts"
                      :value="apply_discount_instruction"
                    >
                    </v-text-field>
                  </v-row>
                </v-col>
                <v-col cols="1"></v-col>
              </v-row>
            </v-container>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-divider class="mt-0"></v-divider>
    <v-container>
      <v-row style="height:20%;width:100%" class="pa-0 ma-0" align="start">
        <v-col cols="6 offset-1" class="align-center pl-0">
          <v-row class="my-2 " style="width:100%" align="center">
            <h3 class="subs_title gath_msg">{{ $t("widgets.modalHdr") }}</h3>
          </v-row>
        </v-col>
        <v-col cols="5">
          <v-row class="my-0 mr-2" style="width:100%" justify="end">
            <TooltipIcon
              :posRight="true"
              :nudgeBottom="30"
              :nudgeLeft="5"
              :txt="$t('widgets.customizePopupHint')"
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
              :items="titleFontSize"
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
        <v-col cols="5 offset-1" class="px-0">
          <v-row class="my-2 px-0" style="width:100%" align="center">
            <h3 class="subs_title gath_msg">{{ $t("widgets.btnHdr") }}</h3>
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
        <v-col cols="5">
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
        <v-col cols="5" class="mr-0 ml-6">
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
        <v-col cols="5 offset-1" class="px-0">
          <v-row class="my-2 " style="width:100%" align="center">
            <h3 class="subs_title gath_msg">{{ $t("widgets.cnclHdr") }}</h3>
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
      live: false,
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
      fontSize: [12, 13, 14, 15, 16, 17, 18, 19, 20],
      titleFontSize: [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 34, 36],
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
      def_selected:true,
      discount_selected:false,
      coneData: [
        { id:1,connection: true, title: "Facebook" },
        { id:2,connection: false, title: "SMS" },
      ],
      disCodeInst:null,
      discount_statement:"",
      discount_code:"",
      apply_discount_instruction:"",
      statusWidgets:null,
      subType:null,
      subscribe_type:null,
      notSel:false,
      isGdprAffected: false,
      discCodeNotValid:false,
      nameRules: [
        v => !!v || 'Name is required',
        // v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
    };
  },
  methods: {
    wdgtLive() {
      this.$store.dispatch("updWdgtLive", this.live);
    },
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
      if((this.discount_selected == 'subscribe' && this.discount_code !== '') || this.def_selected == 'deafult'){
        this.discCodeNotValid = false
        if(this.coneData[0].connection == true || this.coneData[1].connection == true){
          this.def_selected == null || this.def_selected == false || this.def_selected == ""
            ? this.subscribe_type = "subscribe" : this.subscribe_type = "default"
          let objWidg = {
            coneData:this.coneData,
            subscribe_type:this.subscribe_type,
            discount_statement:this.discount_statement,
            discount_code:this.discount_code,
            apply_discount_instruction:this.apply_discount_instruction,
          };
          this.$store.dispatch("updWdgtDiscForm",objWidg)
          // this.$store.commit('SAVE_WIDGET_FORM',objWidg)
          this.$store.dispatch("updIsLoading", true).then(() => {
            this.$store.dispatch
            ("setWdgts").then((response) => {
              if (response) {
                this.$store.dispatch("getStepsCompleted");
                this.$store.dispatch("getWidgets").then(() => {
                  this.$store.dispatch("updIsLoading", false);
                });
              }
            });
          });
        } else this.notSel = true
      }else this.discCodeNotValid = true

    },
    rev(){
      if(this.coneData[0].id == 1 ){
        this.coneData[0].id = 2
        this.coneData[1].id = 1
      }else {
        this.coneData[0].id = 1
        this.coneData[1].id = 2
      }
      setTimeout(() => this.coneData.reverse(), 200);
    },
    changesWidg(){
      if(this.statusWidgets.facebook.position == 1){
        this.detectEuRegion == true ? this.coneData[0].connection = false
        : this.coneData[0].connection = this.statusWidgets.facebook.enabled
        this.coneData[0].id = this.statusWidgets.facebook.position
        this.coneData[0].title = "Facebook"
        this.coneData[1].connection = this.statusWidgets.sms.enabled
        this.coneData[1].id = this.statusWidgets.sms.position
        this.coneData[1].title = "SMS"
      }else {
        this.detectEuRegion == true ? this.coneData[1].connection = false
        : this.coneData[1].connection = this.statusWidgets.facebook.enabled
        this.coneData[1].id = this.statusWidgets.facebook.position
        this.coneData[1].title = "Facebook"
        this.coneData[0].connection = this.statusWidgets.sms.enabled
        this.coneData[0].id = this.statusWidgets.sms.position
        this.coneData[0].title = "SMS"
      }
      if(this.subType == "subscribe"){
        this.discount_selected = 'subscribe'
        this.def_selected = ''
      }else this.def_selected = 'deafult' , this.discount_selected = ''
    },
    getDisplayAvailabilityNotice(ite) {
      return ite.title;
    }
  },
  computed: {
    ...mapGetters(["getWidgetsState", "getSettingsState","getWidgEU"]),
    detectEuRegion(){
      return this.getWidgEU
    },
    detectChange() {
      return this.getWidgetsState.changesSaved;
    },
    liveLbl() {
      return this.live ? this.$t("widgets.liveLbl") : this.$t("widgets.offLbl");
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
    getPageSettingsLink() {
      if (this.getSettingsState.facebook_page_name == "") {
        return `https://www.facebook.com/pages`;
      } else {
        return `https://www.facebook.com/${this.getSettingsState.facebook_page_id}/settings/?tab=messenger_platform`;
      }
    },
  },
  watch: {
    coneData: {
      deep: true,
      handler() {
        this.notSel = false
        this.$store.dispatch("updWdgtConcType", this.coneData);
      }
    },
    def_selected(newValue) {
      if((newValue == '' || newValue == null) && this.discount_selected != 'subscribe'){
        setTimeout(() => {this.def_selected = 'deafult'} , 1)
      }else this.$store.dispatch("updWdgtDefSel", newValue);
    },
    discount_selected(newValue) {
      if((newValue == '' || newValue == null) && this.def_selected != 'deafult'){
        setTimeout(() => {this.discount_selected = 'subscribe'} , 1)
        setTimeout(() => {this.$store.dispatch("changeSavedWdgt",false)} , 10)
      }else this.$store.dispatch("updWdgtDefSel", newValue);
    },
    radioSelect(newValue) {
      this.$store.dispatch("updWdgtType", newValue);
    },
    discount_statement(newValue) {
      this.$store.dispatch("updWdgtDiscStatment", newValue);
    },
    discount_code(newValue) {
      this.$store.dispatch("updWdgtDiscCode", newValue);
      this.discCodeNotValid = false
    },
    apply_discount_instruction(newValue) {
      this.$store.dispatch("updWdgtDiscInst", newValue);
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
    this.$store.dispatch("updIsLoading", true).then(() => {
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
          this.live = this.$store.getters.getWidgetsState.active;
          this.$store.dispatch("getSettings").then(() => {
            this.$store.dispatch("updIsLoading", false);
          });
          this.isGdprAffected =
            this.$store.getters.getWidgetsState.is_gdpr_affected;
        }
      });
    });
    setTimeout(() => ( this.subType = this.$store.state.widgetVars.subscribe_type,this.statusWidgets = this.$store.state.widgetVars.enabled_widgets,
      this.discount_statement = this.$store.state.widgetVars.discount_statement,
      this.discount_code = this.$store.state.widgetVars.discount_code,
      this.apply_discount_instruction = this.$store.state.widgetVars.apply_discount_instruction,this.changesWidg()), 500)

  },

};
</script>

<style scoped>

.parent_gat_message{
  margin-bottom: 36px !important;
}
.widg_hint_txt{
  width: 89% !important;
}
  .Eu_hint_NotAv{
    height: 34px !important;
    align-items: center !important;
    padding-bottom: 0px !important;
  }
.cursor_pointer{
  cursor: pointer;
}
/*}*/
</style>

<style>


.dis_code .v-messages__message{
  display: none;
}
.not_valid .v-text-field input{
  border: 2px solid red !important;
}
.par_spc .v-input__slot{
  margin-bottom: 0px !important;
}

.par_disc_fields .v-text-field{
  padding-top: 0px !important;
}
.checkbox_widget .v-messages{
  height: 1px !important;
}
.wdgt_font_dims {
  text-align: center !important;
  font: normal normal 12px/29px Poppins !important;
  letter-spacing: 0px !important;

  opacity: 1 !important;
  overflow: hidden !important;
}

.wdgt_btn

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
  font-weight: bold !important;

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
.sv_changes{
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 2px solid #5686F6;
  border-radius: 2px;
  opacity: 1;
  text-align: center;
  font: normal normal 600 12px/29px Poppins;
  letter-spacing: 0px;
  color: #5686F6 !important;
  padding: 0px 30px !important;
}
.subs_title{
  text-align: left !important;
  letter-spacing: 0px !important;
  color: #323F4F !important;
  opacity: 1 !important;
}

.subs_text{
  text-align: left !important;
  font: normal normal 300 10px/14px Poppins !important;
  letter-spacing: 0px !important;
  color: #4E5D6B !important;
  opacity: 1 !important;
  margin-bottom: 7px!important;
}
.checkbox_widget{
  text-align: left;
  font: normal normal normal 12px/19px Poppins;
  letter-spacing: 0px;
  color: #323F4F;
  opacity: 1;
}
.smaller_text{
  text-align: left;
  font: italic normal normal 10px/11px Arial;
  letter-spacing: 0px;
  color: #323F4F;
}
.space_bottom{
  margin-bottom: 26px !important;
}
.text_checkbox{
  font: normal normal normal 12px/19px Poppins;
  letter-spacing: 0px;
  color: #323F4F;
  opacity: 1;
}
.connection_row{
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #C9CACB;
  border-radius: 4px;
  opacity: 1;
  padding: 8px 23px !important;
}
.height_row{
  height: 36px !important;
  margin-bottom: 10px !important;
}
.tri_for_hover{
  width: 0;
  height: 0;
  border-top: 60px solid transparent;
  border-bottom: 60px solid transparent;
  border-left: 60px solid green;
}
.pos_smaller{
  position: relative;
  bottom: 12px;
}
.pos_sm_cont{
  position: relative;
  bottom: 20px;
}
.notSel{
  border: 2px solid red !important;
}
.notSelTxt{
  color: red;
}
.notSelSpc{
  position: relative !important;
  bottom: 28px !important;
}
.Sub_Par{
  margin-top: 15px !important;
}
.gath_msg{
  font-family: Poppins;
  font-size: 14px !important;
  line-height: 16px;
}
.pop_con_wdg{
  font-family: Poppins;
  font-size: 16px !important;
}
.disabled_display{
  pointer-events: none !important;
}
.fix_image_pos{
  margin-top: 10px;
  margin-left: 18px;
}
.wdgt_font_dims .v-label{
  font-size: 14px !important;
  color:#4E5D6B !important;
}
.wdgt_font_dims .v-input input{
  font-size: 16px !important;
  color:#323F4F !important;
  font-weight:normal;
}
@media only screen and (max-width: 1799px) {
  .fix_image_pos{
    margin-left: 11px;
  }
}
@media only screen and (max-width: 1399px) {
  .lbl-props {
    font-size: 100%;
  }
  .fix_image_pos{
    margin-left: 17px;
  }
  .disabled_display{
    padding: 0px !important;
  }
  .item-scale {
    transform: scale(0.9);
    transform-origin: 0 0;
  }
  .label-scale {
    transform: scale(0.9);
    transform-origin: 0 0;
  }
  .resp_sp{
    font-size: 90% !important;
    width:100% !important; ;
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
  .Eu_hint_NotAv{
    font: normal normal 600 10px/37px Poppins !important;
  }
}
@media only screen and (max-width: 1050px) {
  .lbl-props {
    font-size: 75%;
  }
  .fix_image_pos{
    margin-left: 12px;
  }
  .resp_sp{
    font-size: 80% !important;
    width:100% !important; ;
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

  .wdgt_font_dims {
    font-size: 95% !important;
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
