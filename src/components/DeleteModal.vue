<template>
  <div v-show="modalActive" class="modal-overlay">
    <div class="modal" v-show="modalActive">
      <section>
        <h4>Delete Listing</h4>
        <p>Are you sure you want to delete this Listing?</p>
        <p>This action cannot be undone</p>
        <div class="flex_button">
          <ButtonItem
            class="button_item"
            @click="deleteListing(houseId)"
            style="background-color: var(--primary-element-color)"
            text="Yes, Delete"
          />
        </div>
      </section>
      <slot />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import ButtonItem from "./ButtonItem.vue";
export default {
  name: "DeleteModal",
  props: {
    houseId: Number,
    modalActive: Boolean,
  },
  components: {
    ButtonItem,
  },
  methods: {
    ...mapActions(["fetchHouses", "deleteListing"]),
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: var(--secondary-element-color);
  opacity: 0.8;
}
.modal {
  text-align: center;
  background-color: var(--primary-background);
  height: 300px;
  width: 500px;
  margin-top: 15%;
  padding: 60px 0;
  border-radius: 20px;
}
.flex_button {
  display: flex;
  flex-direction: column;
  margin-top: 2em;
  padding: 0 3em;
}
.button_item {
  text-transform: uppercase;
  padding: 0.75em;
  margin-bottom: 0.5em;
}
</style>
