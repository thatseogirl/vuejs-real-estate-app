<template>
  <FormComponent :house="currentHouse.data" :isCreate="false" :id="this.id" />
</template>

<script>
import FormComponent from "@/components/pages/FormComponent.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "EditListingView",
  props: ["id"],
  components: {
    FormComponent,
  },
  methods: {
    ...mapActions(["fetchHouses"]),
  },
  computed: {
    ...mapGetters(["allHouses"]),
    currentHouse() {
      const data = {};
      const current = this.allHouses
        .filter((item) => {
          return item.id == this.id;
        })
        .shift();

      const toSkip = ["id", "createdAt", "madeByMe"];

      Object.keys(current).forEach((entry) => {
        if (entry === "rooms") {
          data.bedrooms = current.rooms.bedrooms;
          data.bathrooms = current.rooms.bathrooms;
        } else if (entry === "location") {
          data.city = current.location.city;
          data.streetName = current.location.street;
          data.zip = current.location.zip;
        } else if (!toSkip.includes(entry)) {
          data[entry] = current[entry];
        }
      });
      data.houseNumber = "";
      data.numberAddition = "";
      return {
        data: data,
        id: this.id,
      };
    },
  },
  created() {
    this.fetchHouses();
  },
};
</script>
