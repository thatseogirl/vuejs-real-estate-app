<template>
  <main>
    <HeaderItem />
    <div class="flex_wrapper">
      <div class="flex">
        <form>
          <img
            :src="require('../assets/images/search.png')"
            class="input_image"
          />
          <input
            type="text"
            placeholder="Search for a house"
            v-model="searchValue"
          />
          <img
            :src="require('../assets/images/clear.png')"
            class="input_image"
            @click="clearSearch"
          />
        </form>
        <HouseSorting :houses="filteredData" />
      </div>
    </div>
    <EmptyState v-if="filteredData.length === 0" />
    <p v-else-if="this.searchValue" class="flex_wrapper log_length">
      {{ filteredData.length }} results found
    </p>
    <div v-for="houses in filteredData" :key="houses.id">
      <HouseOverview :houses="houses" />
    </div>
  </main>
</template>

<script>
import HeaderItem from "@/components/HeaderItem.vue";
import HouseSorting from "@/components/pages/HouseSorting.vue";
import HouseOverview from "@/components/pages/HouseOverview.vue";
import { mapActions, mapGetters } from "vuex";
import EmptyState from "../components/pages/EmptyState.vue";

export default {
  name: "HomeView",
  props: {
    houses: Array,
  },
  data() {
    return {
      searchValue: "",
    };
  },
  components: {
    HeaderItem,
    HouseSorting,
    HouseOverview,
    EmptyState,
  },
  methods: {
    ...mapActions(["fetchHouses"]),
    clearSearch() {
      this.searchValue = "";
    },
  },
  computed: {
    ...mapGetters(["allHouses"]),
    filteredData() {
      if (this.searchValue === "") {
        return this.allHouses;
      }
      return this.allHouses.filter((item) => {
        return (
          item.location.city
            .toLowerCase()
            .includes(this.searchValue.toLowerCase()) ||
          item.location.street
            .toLowerCase()
            .includes(this.searchValue.toLowerCase())
        );
      });
    },
  },
  created() {
    this.fetchHouses();
  },
};
</script>

<style scoped>
main {
  background-color: var(--secondary-background);
  height: 100vh;
}
.flex_wrapper {
  width: 75%;
  max-width: 100%;
  margin: auto;
  padding: 0.5em 0.75em;
}
.flex {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2em;
}
form {
  cursor: pointer;
  display: flex;
  gap: 20px;
  background-color: var(--first-tertiary-element-color);
  border-radius: 10px;
  width: 40%;
  align-items: center;
  padding: 0em 1.5em;
}
.input_image {
  width: 20px;
  height: 20px;
}
input {
  width: 100%;
  outline: 0;
  border: 0;
  background-color: transparent;
  font: 300 14px var(--primary-font);
}
.log_length {
  font: bold 22px var(--secondary-font);
}
@media (max-width: 840px) {
  .flex_wrapper {
    width: 95%;
    padding: 0.5em 1.5em;
  }
  .flex {
    flex-direction: column;
    gap: 1.5em;
  }
  form {
    width: 100%;
    padding: 1em 1em;
  }
  .log_length {
    font-size: 14px;
  }
}
@media (max-width: 500px) {
  .flex_wrapper {
    width: 100%;
  }
}
</style>
