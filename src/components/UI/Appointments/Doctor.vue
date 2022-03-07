<template>
  <div class="doctor-info d-flex">
<!--    <img :src="doctorData.img" class="img-fluid" alt="">
    <div class="text">
      <h4>{{ doctorData.title }}</h4>
      <span>{{ doctorData.branch }}</span>
    </div>-->
    {{doctorData}}
  </div>
</template>

<script setup>
const props = defineProps({
  doctorData: {required: true, type: Object}
})

</script>

<style scoped lang="scss">
@import "../../../assets/scss/style";

</style>
