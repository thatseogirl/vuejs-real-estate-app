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
  },
  methods: {
    ...mapActions(["fetchHouses", "deleteListing"]),
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
        return item.location.city
          .toLowerCase()
          .includes(this.searchValue.toLowerCase());
      });
    },

    // logLength() {
    //   if (this.searchValue === "") {
    //     return 0;
    //   } else if (this.filteredData.length == 0) {
    //     document.getElementById("show").style.display = "inline";
    //     document.getElementById("result").style.display = "none";
    //   } else {
    //     return this.filteredData.length;
    //   }
    // },
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
  display: flex;
  gap: 20px;
  background-color: var(--first-teritary-element-color);
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
  font-family: var(--primary-font);
  font-size: 14px;
  font-weight: lighter;
}
.hide {
  display: none;
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
}
@media (max-width: 500px) {
  .flex_wrapper {
    width: 100%;
  }
}
</style>
