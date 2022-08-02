<template>
  <div>
    <nav>
      <img :src="require('../assets/images/logo.png')" />
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
  z-index: 200;
  background-color: var(--primary-background);
  padding: 0.75em 0;
}

nav {
  overflow: hidden;
  display: flex;
  gap: 1rem;
  width: 75%;
  max-width: 100%;
  margin: auto;
}

ul .nav_active_link {
  color: var(--primary-text-color);
}

ul {
  display: flex;
  gap: 3rem;
}

.nav_link {
  text-decoration: none;
  color: var(--secondary-teritary-element-color);
  list-style-type: none;
}
img {
  width: 10vw;
  height: 6vh;
}
@media (max-width: 768px) {
  div {
    visibility: hidden;
  }
}
</style>
