<template>
  <div class="date"></div>
</template>

<script setup>
const props = defineProps({
  hour: { required: true, type: String },
});
</script>

<style scoped lang="scss">
.date {
  width: 70px;
  height: 40px;
  background: #ffffff;
  /* Form Shadow */
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.03);
  border-radius: 6px;
}
</style>
