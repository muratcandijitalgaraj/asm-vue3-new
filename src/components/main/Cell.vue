<template>
  <div class="cell">
    <!-- //logo -->
    <div class="box d-flex flex-column">
      <span :alt="title" class="title" :class="titleColor"> {{ title }} </span>
      <p :alt="para" class="para">{{ para }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  src: { required: true, type: String },
  title: { required: true, type: String },
  para: { required: true, type: String },
});
</script>

<style lang="scss" scoped>
@import "../../assets/scss/style";
</style>
