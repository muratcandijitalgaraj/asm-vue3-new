<template>
  <div class="doctor-info d-flex">
    <img :src="data.img" class="img-fluid" alt="">
    <div class="text">
      <h4>{{ data.title }}</h4>
      <span>{{ data.branch }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {required: true, type: Object}
})

</script>

<style scoped lang="scss">
@import "../../../assets/scss/style";
.doctor-info {
  align-items: center;
  padding: 0 7.5px;

  img {
    margin-right: 15px;
  }

  .text {
    h4 {
      font-size: 16px;
      color: $title;
      margin-bottom: 0;
    }

    span {
      font-size: 15px;
    }
  }

  @media (max-width: 1199px) {
    width: 100%;
    margin-bottom: 15px;
  }
}
</style>
