<template>
  <div class="doktorComponent d-flex">
    <img :src="src" alt="" />
    <div class="textContainer d-flex flex-column justify-content-center">
      <span class="title"> {{ title }} </span>
      <span class="para"> {{ para }} </span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  src: { required: true, type: String },
  para: { required: true, type: String },
  title: { required: true, type: String },
});
</script>

<style scoped lang="scss">
@import "../../../assets/scss/style";
.title {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  /* Primary */

  color: #3c4e69;
}

.para {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
  /* identical to box height, or 21px */

  letter-spacing: -0.01em;

  /* Primary */

  color: #3c4e69;
}
img {
  margin-right: 17px;
}
</style>
