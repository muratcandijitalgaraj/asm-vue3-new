<template>
  <div
    class="info d-flex justify-content-start align-items-center"
    :class="color"
  >
    <img :src="src" alt="" />
    <span class="paraColor"> {{ para }} </span>
  </div>
</template>

<script setup>
const props = defineProps({
  src: { required: true, type: String },
  para: { required: true, type: String },
  color: { required: true, type: String },
  paraColor: { required: true, type: String },
});
</script>

<style scoped lang="scss">
@import "../../../assets/scss/style";
img {
  margin: 0 12px 0 15px;
}
.paraColor {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  /* Kırmızı */

  color: #ea5455;
}
</style>
