<template>
  <div class="cards">
    <span class="col-12 title">{{ title }} </span>
    <div
      class="card d-flex justify-content-start align-items-center"
      v-bind:class="{ active: isActive }"
    >
      <img src="" alt="" class="checkBox" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  logo: { required: true, type: String },
  title: { required: true, type: String },
  para: { required: true, type: String },
  isActive: { required: true, type: String },
});
//change this to true with props
let isActive = false;
</script>

<style scoped lang="scss">
// @import "../../assets/scss/style";

.checkBox {
  width: 20px;
  height: 20px;
  border: 1px solid #e1e1e1;
  border-radius: 50%;
}
</style>
