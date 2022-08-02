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
  name: "FooterComponent",
};
</script>

<style scoped>
footer {
  visibility: hidden;
}
.navbar {
  overflow: hidden;
  background-color: var(--primary-background);
  position: fixed;
  bottom: 0;
  width: 100%;
}
ul {
  display: flex;
  justify-content: space-around;
}
li {
  list-style: none;
}
img {
  width: 50px;
}
ul .nav_active_link img {
  background-color: var(--primary-element-color);
  filter: saturate(4);
}
@media (max-width: 768px) {
  footer {
    visibility: visible;
  }
}
</style>
