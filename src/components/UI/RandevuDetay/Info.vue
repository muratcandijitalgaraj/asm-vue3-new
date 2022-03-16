<template>
  <div
    class="info d-flex justify-content-start align-items-center"
    :class="color"
  >
    <img :src="src" alt="" />
    <span :class="paraColor"> {{ para }} </span>
  </div>
</template>

<script setup>
const props = defineProps({
  src: { required: true, type: String },
  para: { required: true, type: String },
  color: { required: true, type: String },
  paraColor: { required: true, type: String },
});
</script>

<style scoped lang="scss">
@import "../../../assets/scss/style";
</style>
