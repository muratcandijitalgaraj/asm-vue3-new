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
}
.title {
}
.greyLine {
}
</style>
