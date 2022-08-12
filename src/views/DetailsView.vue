<template>
  <div class="details_section">
    <router-link to="/" class="overview_link">
      <img
        :src="require('@/assets/images/back.png')"
        class="go-back-arrow"
      />Back to overview</router-link
    >
    <section class="card">
      <img :src="getCurrentHouse.image" class="card_image" />
      <div class="card_body">
        <div>
          <div class="card_header">
            <h3>{{ getCurrentHouse.location.street }}</h3>
            <div v-if="getCurrentHouse.madeByMe === true">
              <EditDeleteComponent :houseId="getCurrentHouse.id" />
            </div>
          </div>
          <section class="card_flex_item">
            <img :src="require('../assets/images/location.png')" />
            <div>
              <span>{{ getCurrentHouse.location.zip }}</span>
              <span style="margin-left: 0.25em">{{
                getCurrentHouse.location.city
              }}</span>
            </div>
          </section>

          <section class="card_flex_item gap_class">
            <div>
              <img :src="require('../assets/images/price.png')" />
              <span>{{ formatPrice(getCurrentHouse.price) }}</span>
            </div>
            <div>
              <img :src="require('../assets/images/size.png')" />
              <span>{{ getCurrentHouse.size }}</span>
            </div>
            <div>
              <img :src="require('../assets/images/construction.png')" />
              <span>{{ getCurrentHouse.constructionYear }}</span>
            </div>
          </section>

          <section class="card_flex_item gap_class">
            <div>
              <img :src="require('../assets/images/bed.png')" />
              <span>{{ getCurrentHouse.rooms.bedrooms }}</span>
            </div>
            <div>
              <img :src="require('../assets/images/bath.png')" />
              <span>{{ getCurrentHouse.rooms.bathrooms }}</span>
            </div>
            <div>
              <img :src="require('../assets/images/garage.png')" />
              <span>{{ getCurrentHouse.hasGarage }}</span>
            </div>
          </section>

          <div class="card_description">
            <p>{{ getCurrentHouse.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import EditDeleteComponent from "@/components/pages/EditDeleteComponent.vue";
export default {
  name: "DetailsView",
  props: ["id"],
  components: {
    EditDeleteComponent,
  },
  methods: {
    ...mapActions(["fetchHouses"]),
    formatPrice(value) {
      let val = (value / 1).toFixed(3).replace(".", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
  computed: {
    ...mapGetters(["allHouses"]),
    getCurrentHouse() {
      return this.allHouses
        .filter((item) => {
          return item.id == this.id;
        })
        .shift();
    },
  },
  created() {
    this.fetchHouses();
  },
};
</script>

<style scoped>
.details_section {
  width: 80%;
  max-width: 100%;
  margin: auto;
  padding: 6em 2.5em;
}
.go-back-arrow {
  width: 20px;
  height: 20px;
}
.overview_link {
  display: flex;
  gap: 0.75em;
  text-decoration: none;
  color: var(--primary-text-color);
  margin-bottom: 2em;
  font: 600 16px var(--secondary-font);
}
.card {
  width: 55%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.card_image {
  width: 100%;
}
.card_body {
  padding: 0.95em;
}
.card_header {
  display: flex;
  justify-content: space-between;
}
h3 {
  font: bold 22px var(--secondary-font);
  text-transform: capitalize;
  margin-bottom: 0.3em;
  color: var(--primary-text-color);
}
.card_body img {
  width: 15px;
  height: 15px;
  margin-right: 10px;
}
.card_flex_item {
  display: flex;
  font: 400 14px var(--primary-font);
  margin-top: 0.75em;
  color: var(--secondary-element-color);
}
.gap_class {
  gap: 1em;
}
.card_description {
  margin: 1em 0 1em;
  font: 400 14px var(--primary-font);
  color: var(--secondary-element-color);
}
@media (max-width: 996px) {
  .card {
    width: 65%;
  }
  h3 {
    font-size: 14px;
  }
  .card_body {
    font-size: 12px;
  }
}
@media (max-width: 840px) {
  .details_section {
    width: 90%;
    margin: auto;
    padding: 1em 2em;
  }
  .card {
    width: 100%;
  }
}
</style>
