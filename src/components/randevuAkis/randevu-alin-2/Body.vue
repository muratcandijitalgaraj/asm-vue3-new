<template>
  <div class="row body">
    <div class="col-12 col-lg-7 left">
      <Left />
    </div>
    <div class="col-12 col-lg-5 right">
      <Right />
    </div>
  </div>
</template>

<script setup>
import Left from "./Left.vue";
import Right from "./Right.vue";
</script>

<style scoped lang="scss">
.body {
}
</style>
