<template>
  <div>
    <NavDrawer />
    <AppBar />
  </div>
</template>

<script>
import AppBar from "./navigation/AppBar.vue";
import NavDrawer from "./navigation/NavDrawer.vue";

export default {
  name: "Navbar",
  components: {
    AppBar,
    NavDrawer,
  },
};
</script>
<style></style>
