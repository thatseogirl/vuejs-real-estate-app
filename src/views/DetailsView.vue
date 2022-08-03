<template>
  <router-link to="/">Back to overview</router-link>
  <div>
    <section class="card" style="padding: 90px">
      <img :src="getCurrentHouse.image" />
      <div class="card_body">
        <div>
          <h3>{{ getCurrentHouse.location.street }}</h3>
          <section>
            <img :src="require('../assets/images/location.png')" />
            <span>{{ getCurrentHouse.location.zip }}</span>
            <span>{{ getCurrentHouse.location.city }}</span>
          </section>

          <section>
            <div>
              <img :src="require('../assets/images/price.png')" />
              <span>{{ getCurrentHouse.price }}</span>
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

          <section>
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

          <div>
            <p>{{ getCurrentHouse.description }}</p>
          </div>
        </div>
      </div>

      <section>
        <div>
          <div class="inline" v-if="this.getCurrentHouse.madeByMe === true">
            <img
              @click="editHouse"
              :src="require('../assets/images/edit_red.png')"
              class="image"
            />
            <img
              :src="require('../assets/images/delete_black.png')"
              class="image"
              @click="toggleModal"
            />
          </div>

          <DeleteModal :modalActive="modalActive">
            <div>
              <ButtonItem
                text="Yes, Delete"
                @click="deleteListing(this.getCurrentHouse.id)"
              />
              <ButtonItem text="No, go back" @click="toggleModal" />
            </div>
          </DeleteModal>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ButtonItem from "@/components/ButtonItem.vue";
import DeleteModal from "@/components/DeleteModal.vue";
import { ref } from "vue";
export default {
  name: "DetailsView",
  props: ["id"],
  components: {
    DeleteModal,
    ButtonItem,
  },
  methods: {
    ...mapActions(["fetchHouses", "deleteListing"]),
    //   deleteListing(){
    //   console.log(this.getCurrentHouse.id)
    //   return this.getCurrentHouse.id
    // },
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
  setup() {
    const modalActive = ref(false);
    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };
    return { modalActive, toggleModal };
  },
  created() {
    this.fetchHouses();
  },
};
</script>

<style></style>
