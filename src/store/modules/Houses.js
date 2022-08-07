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
    let image = formData.upload;
    delete formData.upload;

    const response = await axios
      .post(process.env.VUE_APP_DTT_API, formData, {
        headers: {
          "X-Api-Key": process.env.VUE_APP_SECRET_KEY,
        },
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .post(
        process.env.VUE_APP_DTT_API + `/${response.data.id}/upload`,
        image,
        {
          headers: {
            "content-type": "multipart/form-data",
            "X-Api-Key": process.env.VUE_APP_SECRET_KEY,
          },
        }
      )
      .catch((error) => {
        console.log(error);
      });

    commit("newHouses", response.data);

    return response.data.id;
  },

  async editListing({ commit }, currentHouse) {
    await axios
      .post(
        process.env.VUE_APP_DTT_API + `/${currentHouse.id}`,
        currentHouse.data,
        {
          headers: {
            "X-Api-Key": process.env.VUE_APP_SECRET_KEY,
          },
        }
      )
      .catch((error) => {
        console.log(error);
      });

    commit("updateListing", currentHouse.data);

    if (currentHouse.image) {
      await axios
        .post(
          process.env.VUE_APP_DTT_API + `/${currentHouse.id}/upload`,
          currentHouse.image,
          {
            headers: {
              "content-type": "multipart/form-data",
              "X-Api-Key": process.env.VUE_APP_SECRET_KEY,
            },
          }
        )
        .catch((error) => {
          console.log(error);
        });
    }

    return currentHouse.id;
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
  newHouses: (state, house) => state.houses.unshift(house),
  removeListing: (state, id) =>
    (state.houses = state.houses.filter((house) => house.id !== id)),
  updateListing: (state, currentHouse) => {
    const index = state.houses.findIndex(
      (house) => house.id === currentHouse.id
    );
    if (index !== -1) {
      state.houses.splice(index, 1, currentHouse);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
