import axios from "axios";

const state = {
  houses: [],
};

const getters = {
  allHouses: (state) => state.houses,
};

const actions = {
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

  async addNewListing({ commit }, formData) {
    const response = await axios.post(process.env.VUE_APP_DTT_API, formData, {
      headers: {
        "X-Api-Key": process.env.VUE_APP_SECRET_KEY,
      },
    });

    // console.log(response)
    commit("newHouses", response.data);
  },

  async uploadImage({ commit }, upload) {
    console.log(upload);
    const response = await axios.post(process.env.VUE_APP_DTT_API, upload, {
      headers: {
        "X-Api-Key": process.env.VUE_APP_SECRET_KEY,
      },
    });
    console.log(response);
    commit("newHouses", response.data);
  },

  async deleteListing({ commit }, id) {
    await axios
      .delete(process.env.VUE_APP_DTT_API + `/${id}`, {
        headers: {
          "X-Api-Key": process.env.VUE_APP_SECRET_KEY,
        },
      })
      .catch((error) => {
        console.log(error);
      });
    commit("removeListing", id);
  },
};

const mutations = {
  setHouses: (state, houses) => (state.houses = houses),
  newHouses: (state, house) => state.houses.shift(house),
  removeListing: (state, id) =>
    (state.houses = state.houses.filter((house) => house.id !== id)),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
