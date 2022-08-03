<template>
  <div id="app">
    <NavComponent />
    <router-view />
    <MobileNav />
  </div>
</template>

<script>
import NavComponent from "./components/NavComponent.vue";
import MobileNav from "./components/MobileNav.vue";
export default {
  name: "App",
  components: {
    NavComponent,
    MobileNav,
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
  height: 100%;
  margin: 0;
  background-color: var(--secondary-background);
}
#app {
  width: 100%;
  max-width: 100%;
  height: 100vh;
}
</style>
