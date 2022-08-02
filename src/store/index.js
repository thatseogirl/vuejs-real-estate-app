import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    houses: [],
  },

  getters: {
    allHouses: (state) => state.houses,
  },

  mutations: {
    setHouses: (state, houses) => (state.houses = houses),
  },

  actions: {
    async fetchHouses({ commit }) {
      const response = await axios
        .get(process.env.VUE_APP_DTT_API, {
          headers: {
            "X-Api-Key": process.env.VUE_APP_SECRET_KEY,
          },
        })
        .catch((error) => {
          console.log(error);
        });
      commit("setHouses", response.data);
    },
  },

  modules: {},
});
