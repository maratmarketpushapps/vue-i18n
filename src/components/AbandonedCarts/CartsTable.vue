<template>
  <v-card height="auto" width="auto" v-if="renderComponent">
    <v-data-table
      :no-data-text="$t('abandonedCarts.noDataTxt')"
      :headers="headers"
      :items="currentData"
      :footer-props="{
        showFirstLastPage: true,
        itemsPerPageOptions: [25, 50, -1],
        showCurrentPage: true,
      }"
      :key="tableKey"
    >
      <template #item.cart_status="{item}">
        <span
          :style="
            item.cart_status === 'Recovered'
              ? 'color:#7ED321 !important;'
              : 'color:#F2775A !important;'
          "
        >
          {{ item.cart_status }}</span
        >
      </template>
      <template #item.order_value="{item}">
        <h4 class="ord_val">{{ item.order_value }}</h4>
      </template>
      <template #item.cart_recovered_at="{item}">
        <span v-show="item.cart_recovered_at != false" >{{
          item.cart_recovered_at
        }}</span>
      </template>

      <template #item.created_at="{item}" >
        <span  class="cr_at">
           {{ item.created_at }}
        </span>
        <br>
        <span class="cartr_rec">
           {{ item.cart_recovered_at}}
        </span>



<!--        <span >{{-->
<!--            item.cart_recovered_at-->
<!--          }}</span>-->

      </template>

      <template #item.first_message_sent_at="{item}">
        <span v-show="item.first_message_sent_at != null" class="table_design">{{
          item.first_message_sent_at
        }}</span>
      </template>

      <template #item.second_message_sent_at="{item}">
        <span v-show="item.second_message_sent_at != null" class="table_design">{{
          item.second_message_sent_at
        }}</span>
      </template>

    </v-data-table>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CartsTable",
  mounted() {
    this.currentHeader = this.headers;
    this.$store.dispatch("updIsLoading", true).then(() => {
      this.$store
        .dispatch("getCarts", {
          startDate: this.startDate,
          endDate: this.endDate,
        })
        .then(() => {
          this.$store.dispatch("updIsLoading", false);
        });
    });
    this.currentData = this.items;
  },
  methods: {
    forceRerender() {
      this.renderComponent = false;
      this.$nextTick(() => {
        this.renderComponent = true;
      });
    },
  },
  watch: {
    startDate() {
      // console.log(newVAL);
    },
    items(newVal) {
      this.currentData = newVal;
      this.headers = this.currentHeader;

      switch (this.subSelType) {
        case "Facebook":
          this.headers = this.headers.filter(
            (header) => header.value !== "phone"
          );
          this.currentData = this.currentData.filter(
            (item) => item.channel.toUpperCase() !== "SMS" && item.channel.toUpperCase() !== "WHASTAPP"
          );
          break;
        case "SMS":
          // this.headers = this.headers.filter(header => header.value !== 'channel')
          this.currentData = this.items.filter(
            (oneitem) => oneitem.channel.toUpperCase() !== "FACEBOOK" && oneitem.channel.toUpperCase() !== "WHASTAPP"
          );
          break;
        case "Whatsapp":
          // this.headers = this.headers.filter(header => header.value !== 'channel')
          this.currentData = this.items.filter(
            (oneitem) => oneitem.channel.toUpperCase() !== "FACEBOOK" &&  oneitem.channel.toUpperCase() !== "SMS"
          );
          break;
        default:
          this.headers = this.currentHeader;
          break;
      }
      this.tableKey++;
    },
    subSelType(newVal) {
      // console.log("subSel" + newVal);
      // console.log(this.currentHeader);
      // console.log(this.items);
      this.forceRerender();
      this.headers = this.currentHeader;
      this.currentData = this.items;

      switch (newVal) {
        case "Facebook":
          this.headers = this.headers.filter(
            (header) => header.value.toUpperCase() !== "PHONE"
          );
          this.currentData = this.currentData.filter(
            (item) => item.channel.toUpperCase() !== "SMS" && item.channel.toUpperCase() !== "WHASTAPP"
          );
          break;
        case "SMS":
          // this.headers = this.headers.filter(header => header.value !== 'channel')
          this.currentData = this.items.filter(
            (oneitem) => oneitem.channel.toUpperCase() !== "FACEBOOK" && oneitem.channel.toUpperCase() !== "WHASTAPP"
          );
          break;
        case "WhatsApp":
          // this.headers = this.headers.filter(header => header.value !== 'channel')
          this.currentData = this.items.filter(
            (oneitem) => oneitem.channel.toUpperCase() !== "FACEBOOK" && oneitem.channel.toUpperCase() !== "SMS"
          );
          break;
        default:
          this.headers = this.currentHeader;
          break;
      }
      this.$nextTick(() => {
        this.tableKey++;
      });
    },
    headers: {
      deep: true,
      handler() {},
    },
  },
  props: ["startDate", "endDate"],
  data() {
    return {
      renderComponent: true,
      tableKey: 1,
      headers: [
        {
          text: this.$t("abandonedCarts.dataTab.headers.col1") + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + '/' +
          '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + this.$t("abandonedCarts.dataTab.headers.col6"),
          align: "start",
          sortable: false,
          value: "created_at",
          class: "hd_bg "
        },
        {
          text: this.$t("abandonedCarts.dataTab.headers.col7"),
          align: "start",
          sortable: false,
          value: "channel",
          class: "hd_bg"
        },
        {
          text: this.$t("abandonedCarts.dataTab.headers.col2"),
          value: "order_value",
          sortable: false,
          class: "hd_bg"
        },
        {
          text: this.$t("abandonedCarts.dataTab.headers.col3"),
          value: "first_message_sent_at",
          sortable: false,
          class: "hd_bg"
        },
        {
          text: this.$t("abandonedCarts.dataTab.headers.col4"),
          value: "second_message_sent_at",
          sortable: false,
          class: "hd_bg"
        },
        {
          text: this.$t("abandonedCarts.dataTab.headers.col5"),
          value: "cart_status",
          sortable: false,
          class: "hd_bg"
        },
        // {
        //   text: this.$t("abandonedCarts.dataTab.headers.col6"),
        //   value: "cart_recovered_at",
        //   sortable: false,
        // },
        {
          text: this.$t("abandonedCarts.dataTab.headers.col8"),
          value: "phone",
          sortable: false,
          class: "hd_bg"
        },
      ],
      currentHeader: "",
      currentData: [],
    };
  },
  computed: {
    ...mapGetters(["getCartsState", "getSubType"]),
    items() {
      return this.getCartsState;
    },
    subSelType() {
      return this.getSubType;
    },

  },
};
</script>

<style>
.table_design{
  text-align: left;
  font-family: Poppins !important;
  font-weight: 300 !important;
  font-size: 14px !important;
  line-height: 23px !important;
  letter-spacing: 0px;
  color: #4E5D6B !important;
  opacity: 1;
}
.ord_val{
  text-align: left;
  font-family: Poppins !important;
  font-weight: 600 !important;
  font-size: 14px !important;
  line-height: 23px !important;
  letter-spacing: 0px;
  color: #4E5D6B !important;
  opacity: 1;
}
.cartr_rec{
  text-align: left;
  font-family: Poppins !important;
  font-weight: normal !important;
  font-size: 14px !important;
  line-height: 23px !important;
  letter-spacing: 0px;
  color: #39D989 !important;
  opacity: 1;
}
.cr_at{
  text-align: left;
  font-family: Poppins !important;
  font-weight: normal !important;
  font-size: 14px !important;
  line-height: 23px !important;
  letter-spacing: 0px !important;
  color: #4E5D6B !important;
  opacity: 1;
}
.hd_bg{
  height: 80px !important;
  background-color: #4E5D6B;
  text-align: left;
  font-family: Poppins !important;
  font-weight: normal !important;
  font-size: 12px !important;
  line-height: 18px !important;
  letter-spacing: 0px !important;
  color: #FFFFFF !important;
  opacity: 1 !important;
}
.theme--light.v-data-table thead tr th{
  color: #FFFFFF !important;
}
.v-data-table thead th {
  font-weight: 50000;
  font-size: 85%;
  opacity: 2;
  color: black !important;
}

.v-data-table tbody td {
  font-weight: 500;
  font-size: 80%;
  text-align: center !important;
}

.v-data-table tbody tr:nth-of-type(even) {
  background-color: #f2f2f2;
}
.recTrue {
  color: green;
}
.recFalse {
  color: red;
}

@media (min-width: 1400px) {
  .v-data-table thead th {
    font-weight: 5000;
    font-size: 75%;
    opacity: 2;
    color: black !important;
  }

  .v-data-table tbody td {
    font-weight: 100;
    font-size: 65%;
    text-justify: center !important;
  }
}
</style>
