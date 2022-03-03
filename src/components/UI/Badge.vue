<template>
  <span class="badge" :class="type"> {{ number }}</span>
</template>

<script setup>
const props = defineProps({
  number: {required: true, type: Number},
  type: {required: false, type: String, default: 'danger'}
})
</script>

<style scoped lang="scss">
@import "../../assets/scss/style";
</style>
