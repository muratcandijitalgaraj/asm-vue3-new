<template>
  <div class="cards">
    <div class="title"></div>
    <Card />
  </div>
</template>

<script setup>
import { ref } from "vue";
// import Card from "./Card.vue";
const props = defineProps({});
const card = ref([]);
</script>

<style scoped lang="scss">
// @import "../../assets/scss/style";
.title {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 130%;
  /* identical to box height, or 22px */

  letter-spacing: -0.01em;
  margin-bottom: 18px;

  /* Primary */

  color: #3c4e69;
}
</style>
