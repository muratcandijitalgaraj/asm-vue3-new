<template>
  <div class="doktorComponent d-flex flex-column">
    <div class="top d-flex">
      <img :src="src" alt="" />
      <div class="textContainer d-flex flex-column justify-content-center">
        <span class="title"> {{ title }} </span>
        <span class="para"> {{ para }} </span>
      </div>
    </div>
    <!-- bottom -->
    <div class="bottom d-flex align-items-center">
      <img :src="logoSrc" alt="" />
      <span class="para redPara"> {{ redPara }} </span>
      <span class="para"> {{ doktorPara }} </span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  src: { required: true, type: String },
  para: { required: true, type: String },
  title: { required: true, type: String },
  logoSrc: { required: true, type: String },
  redPara: { required: true, type: String },
  doktorPara: { required: true, type: String },
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
.redPara {
  color: #ea5455;
  margin: 0 20px 0 8px;
}
img {
  margin-right: 17px;
}
.bottom {
  background: #fafafa;
  height: 50px;
  margin-top: 15px;
}
</style>
