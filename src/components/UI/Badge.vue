<template>
  <span class="badge" :class="color"> {{ number }}</span>
</template>

<script setup>
const props = defineProps({
  number: { required: true, type: Number },
  color: { required: false, type: String, default: "danger" },
});
</script>

<style scoped lang="scss">
@import "../../assets/scss/style";
</style>
