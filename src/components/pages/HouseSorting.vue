<template>
  <div class="sorting">
    <ButtonItem class="btn_price" text="Price" @click="handlePrice" />
    <ButtonItem
      class="btn_size"
      style="background-color: var(--secondary-teritary-element-color)"
      text="Size"
      @click="handleSize"
    />
  </div>
</template>

<script>
import ButtonItem from "@/components/ButtonItem.vue";
export default {
  name: "HouseSorting",
  props: {
    houses: Object,
  },
  methods: {
    handlePrice() {
      const houses = this.houses;
      houses.sort((first, second) => first.price - second.price);
    },
    handleSize() {
      const houses = this.houses;
      houses.sort((first, second) => first.size - second.size);
    },
  },
  components: {
    ButtonItem,
  },
};
</script>

<style scoped>
.btn_price {
  background-color: var(--primary-element-color);
  position: relative;
  left: 20px;
  border-radius: 10px 0px 0px 10px;
}
.sorting {
  display: flex;
}
@media (max-width: 990px) {
  .btn_price {
    left: 15px;
  }
}
@media (max-width: 840px) {
  .btn_price,
  .btn_size {
    right: 0;
    left: 0;
    width: 50%;
  }
}
</style>
