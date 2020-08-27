<template>
  <v-card height="auto" width="auto">
    <v-data-table
      :no-data-text="$t('abandonedCarts.noDataTxt')"
      :headers="headers"
      :items="items"
      :footer-props="{
        showFirstLastPage: true,
        itemsPerPageOptions: [10, 25, 50, -1],
        showCurrentPage: true,
      }"
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
        <h4>{{ item.order_value }}</h4>
      </template>
      <template #item.cart_recovered_at="{item}">
        <span v-show="item.cart_recovered_at != false">{{
          new Date(item.cart_recovered_at).toLocaleString()
        }}</span>
      </template>

      <template #item.created_at="{item}">
        <span>{{ new Date(item.created_at).toLocaleString() }}</span>
      </template>

      <template #item.first_message_sent_at="{item}">
        <span v-show="item.first_message_sent_at != null">{{
          new Date(item.first_message_sent_at).toLocaleString()
        }}</span>
      </template>

      <template #item.second_message_sent_at="{item}">
        <span v-show="item.second_message_sent_at != null">{{
          new Date(item.second_message_sent_at).toLocaleString()
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
    this.$store.dispatch("getCarts", {
      startDate: this.startDate,
      endDate: this.endDate,
    });
  },
  props: ["startDate", "endDate"],
  data() {
    return {
      headers: [
        {
          text: this.$t("abandonedCarts.dataTab.headers.col1"),
          align: "start",
          sortable: false,
          value: "created_at",
        },
        {
          text: this.$t("abandonedCarts.dataTab.headers.col2"),
          value: "order_value",
          sortable: false,
        },
        {
          text: this.$t("abandonedCarts.dataTab.headers.col3"),
          value: "first_message_sent_at",
          sortable: false,
        },
        {
          text: this.$t("abandonedCarts.dataTab.headers.col4"),
          value: "second_message_sent_at",
          sortable: false,
        },
        {
          text: this.$t("abandonedCarts.dataTab.headers.col5"),
          value: "cart_status",
          sortable: false,
        },
        {
          text: this.$t("abandonedCarts.dataTab.headers.col6"),
          value: "cart_recovered_at",
          sortable: false,
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["getCartsState"]),
    items() {
      return this.getCartsState;
    },
  },
};
</script>

<style>
.v-data-table thead th {
  font-weight: 50000;
  font-size: 70%;
  opacity: 2;
  color: black !important;
}

.v-data-table tbody td {
  font-weight: 500;
  font-size: 60%;
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
    font-size: 80%;
    opacity: 2;
    color: black !important;
  }

  .v-data-table tbody td {
    font-weight: 100;
    font-size: 70%;
  }
}
</style>
