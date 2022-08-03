<template>
  <header>
    <section>
      <div class="flex_item">
        <h3>Houses</h3>
        <div class="mobile_listing">
          <router-link to="/createListing">
            <img :src="require('@/assets/images/mobilePlus.png')" />
          </router-link>
        </div>
        <div class="desktop_listing">
          <router-link to="/createListing" class="new_listing_btn">
            <img :src="require('@/assets/images/plus.png')" />
            <ButtonItem
              style="
                background-color: transparent;
                text-transform: uppercase;
                padding: 0;
              "
              text="create new"
          /></router-link>
        </div>
      </div>
    </section>
  </header>
</template>

<script>
import ButtonItem from "./ButtonItem.vue";
export default {
  name: "HeaderItem",
  components: {
    ButtonItem,
  },
};
</script>

<style scoped>
header {
  padding: 7em 1.25em 0em;
}
h3 {
  font-size: 32px;
  font-weight: bold;
  font-family: var(--secondary-font);
}
.mobile_listing {
  display: none;
}
section {
  width: 75%;
  max-width: 100%;
  margin: auto;
  padding: 0.5em 0;
}
.flex_item {
  display: flex;
  justify-content: space-between;
}
.new_listing_btn {
  text-decoration: none;
  display: flex;
  border-radius: 10px;
  gap: 10px;
  align-items: center;
  padding: 0.75em 1.5em;
  background-color: var(--primary-element-color);
}
img {
  width: 20px;
  height: 20px;
}
@media (max-width: 840px) {
  .flex_item {
    justify-content: center;
    align-items: center;
  }
  header {
    padding: 0;
  }
  h3 {
    font-size: 18px;
  }
  .mobile_listing {
    display: flex;
    position: absolute;
    right: 50px;
  }
  .desktop_listing {
    display: none;
  }
  section {
    width: 100%;
    padding: 0.5em 1.5em;
  }
}
</style>
