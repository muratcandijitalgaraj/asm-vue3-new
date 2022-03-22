<template>
  <div class="cards">
    <span class="title">{{ title }} </span>
    <Card />
  </div>
</template>

<script setup>
import Card from "./Card.vue";
const props = defineProps({
  title: { required: true, type: String },
  para: { required: true, type: String },
  isActive: { required: true, type: String },
});
</script>

<style scoped lang="scss">
// @import "../../assets/scss/style";
</style>
