<template>
  <div class="body d-flex justify-content-center align-items-center">
    <div class="item">
      <Degistir />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Degistir from "./degistir/Degistir.vue";
</script>

<style scoped lang="scss">
.body {
  height: 100vh;
}
.item {
}
</style>
