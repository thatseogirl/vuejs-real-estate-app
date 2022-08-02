<template>
  <div class="container">
    <NavComponent />
    <router-view />
    <FooterComponent />
  </div>
</template>

<script>
import NavComponent from "./components/NavComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
export default {
  name: "App",
  components: {
    NavComponent,
    FooterComponent,
  },
};
</script>
<style>
@import url(./assets/styles/variables.css);
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body {
  width: 100%;
  height: 100vh;
  margin: 0;
}
.container {
  width: 100%;
  max-width: 100%;
  height: 100vh;
}
</style>
