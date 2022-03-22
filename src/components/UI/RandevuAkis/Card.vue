<template>
  <div
    class="card d-flex flex-row justify-content-start align-items-center"
    v-bind:class="{ active: isActive }"
  >
    <span class="checkBox"></span>
    <span class="para"> {{ para }} </span>
    <!-- <span v-if="ekle" class=" para bluePara"></span> -->
  </div>
</template>

<script setup>
const props = defineProps({
  title: { required: true, type: String },
  para: { required: true, type: String },
  isActive: { required: true, type: String },
});
//change this to true with props
let ekle = false;
//change this to true with props
let isActive = false;
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
}
.checkBox {
  width: 20px;
  height: 20px;
  border: 2px solid #e1e1e1;
  border-radius: 50%;
  margin-left: 15px;
  margin-right: 11px;
}
</style>
