<template>
  <section>
    <div>
      <div class="inline">
        <router-link :to="{ name: 'edit', params: { id: houseId } }">
          <img :src="require('@/assets/images/edit_red.png')" class="image" />
        </router-link>
        <img
          :src="require('@/assets/images/delete_black.png')"
          class="image"
          @click="toggleModal"
        />
      </div>

      <DeleteModal :modalActive="modalActive" :houseId="houseId">
        <div class="flex_button">
          <ButtonItem
            class="button_item"
            @click="toggleModal"
            text="Go back"
            style="background-color: var(--primary-text-color)"
          />
        </div>
      </DeleteModal>
    </div>
  </section>
</template>

<script>
import ButtonItem from "../ButtonItem.vue";
import DeleteModal from "../DeleteModal.vue";
import { ref } from "vue";
export default {
  name: "EditDeleteComponent",
  props: {
    houseId: Number,
  },
  components: {
    DeleteModal,
    ButtonItem,
  },
  setup() {
    const modalActive = ref(false);
    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };
    return { modalActive, toggleModal };
  },
};
</script>

<style scoped>
.image {
  width: 20px;
  height: 20px;
  margin-left: 15px;
}
.inline {
  display: flex;
}
.flex_button {
  display: flex;
  flex-direction: column;
  padding: 0 3em;
}
.button_item {
  text-transform: uppercase;
  padding: 0.75em;
  margin-bottom: 0.5em;
}
</style>
