<template>
  <div class="sorting">
    <ButtonItem
      :class="sortPrice ? 'active' : 'btn_price'"
      text="Price"
      @click="handlePrice"
    />
    <ButtonItem
      :class="sortSize ? 'active' : 'btn_size'"
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
  data() {
    return {
      sortSize: false,
      sortPrice: false,
    };
  },
  methods: {
    handlePrice() {
      const houses = this.houses;
      houses.sort((first, second) => first.price - second.price);
      this.sortSize = false;
      this.sortPrice = true;
    },
    handleSize() {
      const houses = this.houses;
      houses.sort((first, second) => first.size - second.size);
      this.sortSize = true;
      this.sortPrice = false;
    },
  },
  components: {
    ButtonItem,
  },
};
</script>

<style scoped>
.active {
  background-color: var(--primary-element-color);
}
.btn_price {
  background-color: var(--secondary-tertiary-element-color);
  position: relative;
  left: 20px;
  border-radius: 10px 0px 0px 10px;
}
.btn_size {
  background-color: var(--secondary-tertiary-element-color);
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
