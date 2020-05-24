<template>
  <div>
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      :nudge-top="20"
      max-width="100%"
    >
      <template v-slot:activator="{ on }">
        <v-text-field
          v-on="on"
          style="width:auto"
          readonly
          :label="label"
          :value="selectedColor"
        >
          <v-icon slot="append" :color="selectedColor">mdi-sticker</v-icon>
        </v-text-field>
      </template>
      <v-color-picker mode="hexa" flat hide-mode-switch v-model="selectedColor">
      </v-color-picker>
      <v-row justify="end" class="pr-3">
        <v-btn
          text
          color="primary"
          @click="menu = false"
          style="font-weight:bold"
          >Cancel</v-btn
        >
        <v-btn
          text
          color="primary"
          @click="colorSelected"
          style="font-weight:bold"
          >OK</v-btn
        >
      </v-row>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: "ColorSelect",
  methods: {
    colorSelected() {
      this.menu = false;
      console.log("child color ::" + this.selectedColor);
      this.$emit("selectedColor", this.selectedColor);
    },
  },
  props: {
    color: {
      type: String,
      default: "#FFFFFF",
    },
    label: {
      type: String,
      default: "XXX",
    },
  },
  data() {
    return {
      menu: null,
      selectedColor: "#5686F6",
    };
  },

  mounted() {
    this.selectedColor = this.color;
  },
};
</script>

<style scoped>

.cursor-hand {
  cursor: pointer;
}
</style>
