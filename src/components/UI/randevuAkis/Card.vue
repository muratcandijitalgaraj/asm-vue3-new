<template>
  <div
    class="card d-flex flex-row justify-content-start align-items-center"
    v-bind:class="{ active: isActive }"
  >
    <span class="checkBox"></span>
    <span class="para"> </span>
  </div>
</template>

<script setup>
const props = defineProps({});
</script>

<style scoped lang="scss">
// @import "../../assets/scss/style";
.card {
  width: 341px;
  height: 47px;

  background: #ffffff;
  /* Boxx Shadow */

  box-shadow: 0px 1px 3px rgba(42, 49, 55, 0.11);
  border-radius: 6px;
  margin-bottom: 12px;
}
.checkBox {
  width: 20px;
  height: 20px;
  border: 2px solid #e1e1e1;
  border-radius: 50%;
  margin-left: 15px;
  margin-right: 11px;
}
.logo {
  margin-left: 15px;
  margin-right: 11px;
}
.para {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  /* Primary */

  color: #3c4e69;
}
</style>
