import { axiosClient, axiosMultiPartClient } from "@/axiosRequest/ApiClient";

const state = {
  houses: [],
};

const getters = {
  allHouses: (state) => state.houses,
};

const actions = {
  async fetchHouses({ commit }) {
    const response = await axiosClient.get("/houses").catch((error) => {
      console.log(error);
    });
    commit("setHouses", response.data);
  },

  async addNewListing({ commit }, formData) {
    console.log(formData);
    let image = formData.upload;
    delete formData.upload;

    const response = await axiosClient
      .post("/houses", formData)
      .catch((error) => {
        console.log(error);
      });

    await axiosMultiPartClient
      .post(`/houses/${response.data.id}/upload`, image)
      .catch((error) => {
        console.log(error);
      });

    commit("newHouses", response.data);

    return response.data.id;
  },

  async editListing({ commit }, currentHouse) {
    await axiosClient
      .post(`/houses/${currentHouse.id}`, currentHouse.data)
      .catch((error) => {
        console.log(error);
      });

    commit("updateListing", currentHouse.data);

    if (currentHouse.image) {
      await axiosMultiPartClient
        .post(`/houses/${currentHouse.id}/upload`, currentHouse.image)
        .catch((error) => {
          console.log(error);
        });
    }

    return currentHouse.id;
  },

  async deleteListing({ commit }, id) {
    await axiosClient.delete(`/houses/${id}`).catch((error) => {
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
