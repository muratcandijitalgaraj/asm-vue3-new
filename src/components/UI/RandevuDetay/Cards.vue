<template>
  <div class="detayCards d-flex flex-column">
    <div class="cardContainer d-flex">
      <img class="logo" :src="src" alt="" />
      <div class="texts d-flex flex-column">
        <span class="para">{{ para }} </span>
        <span class="title"> {{ title }} </span>
      </div>
    </div>
    <div v-if="type === 1" class="greyLine"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  src: { required: true, type: String },
  para: { required: true, type: String },
  title: { required: true, type: String },
  type: { required: true, type: Number },
});
</script>

<style scoped lang="scss">
@import "../../../assets/scss/style";
.logo {
}
.para {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
  letter-spacing: -0.01em;
  color: #818b9a;
  margin-bottom: 5px;
}
.title {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #3c4e69;
}
.greyLine {
  border: 1px solid #f3f3f3;
}
img {
  margin-right: 15px;
}
.texts {
  margin: 20px 0;
}
</style>
