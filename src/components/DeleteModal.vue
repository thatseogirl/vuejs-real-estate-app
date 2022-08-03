<template>
  <transition name="modal-animation">
    <div v-show="modalActive" class="modal-overlay">
      <transition name="modal-animation-inner">
        <div class="modal" v-show="modalActive">
          <section class="modal">
            <h4>Delete Listing</h4>
            <p>Are you sure you want to delete this Listing?</p>
            <p>This action cannot be undone</p>
          </section>
          <slot />
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  name: "DeleteModal",
  props: ["modalActive"],
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
  background-color: #000000da;
}

.modal {
  text-align: center;
  background-color: white;
  height: 300px;
  width: 500px;
  margin-top: 10%;
  /* padding: 60px 0; */
  border-radius: 20px;
}
</style>
