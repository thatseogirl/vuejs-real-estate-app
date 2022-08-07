<template>
  <div class="wrapper">
    <section class="house_wrapper">
      <div class="wrapper_flex_item">
        <div>
          <img :src="houses.image" class="house" />
        </div>
        <div>
          <h3>
            <router-link
              class="details_link"
              :to="{ name: 'details', params: { id: houses.id } }"
            >
              {{ houses.location.street }}</router-link
            >
          </h3>
          <div class="price_tag">
            <img
              :src="require('@/assets/images/price.png')"
              alt="price"
              class="currency"
            />
            <p>{{ formatPrice(houses.price) }}</p>
          </div>
          <p class="location">
            {{ houses.location.zip }} {{ houses.location.city }}
          </p>
          <div class="flex_section">
            <aside>
              <img :src="require('@/assets/images/bed.png')" alt="bed" />
              <span>{{ houses.rooms.bedrooms }}</span>
            </aside>
            <aside>
              <img :src="require('@/assets/images/bath.png')" alt="bath" />
              <span>{{ houses.rooms.bathrooms }}</span>
            </aside>
            <aside>
              <img :src="require('@/assets/images/size.png')" alt="size" />
              <span>{{ houses.size }} m2</span>
            </aside>
          </div>
        </div>
      </div>
      <div style="padding: 1em; margin: 1em" v-if="houses.madeByMe === true">
        <EditDeleteComponent :houseId="houses.id" />
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import EditDeleteComponent from "./EditDeleteComponent.vue";
export default {
  name: "HouseOverview",
  props: {
    houses: Object,
  },
  components: {
    EditDeleteComponent,
  },
  methods: {
    ...mapActions(["deleteListing"]),
    formatPrice(value) {
      let val = (value / 1).toFixed(3).replace(".", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
};
</script>

<style scoped>
.wrapper {
  padding: 0.5em 0.75em;
  font-family: var(--primary-font);
}
.house_wrapper {
  width: 75%;
  max-width: 100%;
  height: 130px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  background-color: var(--primary-background);
  border-radius: 10px;
}
.house {
  width: 100px;
  height: 100px;
  border-radius: 10px;
}
.wrapper_flex_item {
  display: flex;
  gap: 1em;
  padding: 1em;
}
.price_tag {
  display: flex;
  margin-top: 0.25em;
}
.price_tag p {
  font-family: var(--primary-font);
  font-size: 12px;
  font-weight: 400;
  color: var(--secondary-element-color);
}
.location {
  font-size: 14px;
  font-family: var(--primary-font);
  margin-top: 0.25em;
  color: var(--secondary-teritary-element-color);
}
.flex_section {
  display: flex;
  margin-top: 0.75em;
  gap: 0.5em;
}
h3 {
  margin-top: 0.25em;
}
.details_link {
  font-family: var(--secondary-font);
  font-size: 18px;
  font-weight: bold;
  color: var(--primary-text-color);
  text-decoration: none;
  text-transform: capitalize;
}

img {
  width: 15px;
  height: 15px;
}
aside {
  display: flex;
  gap: 0.5em;
}
@media (max-width: 840px) {
  .house_wrapper {
    width: 95%;
  }
  .wrapper {
    padding: 0.75em 1em;
  }
  .details_link {
    font-size: 10px;
  }
  .location,
  .price_tag p {
    font-size: 12px;
  }
  .details_link {
    font-size: 14px;
  }
  span {
    font-size: 10px;
  }
  .inline {
    padding: 0;
  }
  aside {
    grid-area: 0.25em;
  }
}
@media (max-width: 500px) {
  .house_wrapper {
    width: 100%;
  }
  .image {
    margin: 0;
  }
}
@media (max-width: 400px) {
  .house_wrapper {
    flex-direction: column;
  }
}
</style>
