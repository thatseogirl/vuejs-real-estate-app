<template>
  <div>
    <nav>
      <router-link to="/" class="nav_link">
        <img :src="require('../assets/images/logo.png')" />
      </router-link>
      <ul>
        <li>
          <router-link to="/" class="nav_link">Houses</router-link>
        </li>
        <li>
          <router-link to="/about" class="nav_link">About</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavComponent",
};
</script>

<style scoped>
div {
  position: fixed;
  top: 0;
  width: 100vw;
  background-color: var(--primary-background);
  padding: 0.75em 0;
}

nav {
  overflow: hidden;
  display: flex;
  gap: 3rem;
  width: 75%;
  max-width: 100%;
  margin: auto;
}

ul {
  display: flex;
  gap: 3rem;
  margin-top: 0.5em;
  font-family: var(--secondary-font);
}

ul .nav_active_link {
  color: var(--primary-text-color);
  font: bold 18px var(--secondary-font);
}

.nav_link {
  font: 500 18px var(--secondary-font);
  text-decoration: none;
  color: var(--secondary-tertiary-element-color);
}

li {
  list-style-type: none;
}
img {
  height: 6vh;
}
@media (max-width: 840px) {
  div {
    display: none;
  }
}
</style>
