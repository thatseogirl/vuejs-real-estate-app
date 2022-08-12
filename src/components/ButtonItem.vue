<template>
  <button @click="onClick()" :style="{ background: color }" class="btn">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ButtonItem",
  props: {
    text: String,
    color: String,
  },
  methods: {
    onClick() {
      this.$emit("btn-click");
    },
  },
};
</script>

<style scoped>
.btn {
  display: inline;
  color: #fff;
  border: none;
  padding: 1em 4em;
  margin: 5px;
  border-radius: 10px;
  cursor: pointer;
  font: bold 18px var(--secondary-font);
}
.btn:active {
  transform: scale(0.98);
}
@media (max-width: 840px) {
  .btn {
    font-size: 12px;
  }
}
</style>
