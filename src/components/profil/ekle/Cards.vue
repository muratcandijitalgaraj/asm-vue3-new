<template>
  <div class="card"></div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  title: { required: true, type: String },
  para: { required: true, type: String },
});
</script>

<style scoped lang="scss">
.card {
  width: 160px;
  height: 50px;
  background: #ffffff;
  /* Secondary */
  border: 1px solid #32a5df;
  box-sizing: border-box;
  /* Boxx Shadow */
  box-shadow: 0px 1px 3px rgba(42, 49, 55, 0.11);
  border-radius: 6px;
  border: none;
  margin-left: 35px !important;
}
</style>
