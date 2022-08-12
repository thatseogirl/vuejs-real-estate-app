<template>
  <div>
    <img
      :src="require('@/assets/images/empty_houses.png')"
      class="input_image"
    />
    <p>No result found. <br />Please try another keyword.</p>
  </div>
</template>

<script>
export default {
  name: "EmptyState",
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
div img {
  width: 35%;
  margin-bottom: 1.5em;
}
div p {
  text-align: center;
  font: 500 18px var(--secondary-font);
}
@media (max-width: 840px) {
  div p {
    font-size: 14px;
  }
}
</style>
