<template>
  <footer>
    <nav class="navbar">
      <ul>
        <li>
          <router-link to="/">
            <img :src="require('../assets/images/houseMobile.png')" alt="house"
          /></router-link>
        </li>
        <li>
          <router-link to="/about">
            <img :src="require('../assets/images/aboutMobile.png')" alt="about"
          /></router-link>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script>
export default {
  name: "MobileNav",
};
</script>

<style scoped>
footer {
  display: none;
}
.navbar {
  overflow: hidden;
  margin-top: 300px;
  background-color: var(--primary-background);
  position: fixed;
  bottom: 0;
  width: 100%;
}
ul {
  display: flex;
  justify-content: space-around;
  padding: 0.5em;
}
li {
  list-style: none;
}
img {
  width: 35px;
  height: 35px;
}
ul .nav_active_link img {
  background-color: var(--primary-element-color);
  filter: saturate(4);
}
@media (max-width: 840px) {
  footer {
    display: flex;
  }
}
</style>
