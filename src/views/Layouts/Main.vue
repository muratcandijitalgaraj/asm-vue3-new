<template>
  <div class="main-container col-md-12 col-lg-8 col-xl-8 col-xxl-9">
    <slot></slot>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
@import "../../assets/scss/style";
.main-container {
  height: 100%;
  background: $main;
  border-top-right-radius: 18px;
  border-bottom-right-radius: 18px;
}
</style>
