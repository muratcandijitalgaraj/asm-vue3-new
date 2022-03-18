<template>
  <div class="card d-flex flex-lg-row align-items-center">
    <div class="col-12 col-lg-9 d-flex flex-column">
      <span class="title"> {{ title }} </span>
      <span class="para"> {{ para }} </span>
    </div>
    <div class="status col-12 col-lg-3 d-flex justify-content-end">
      <span class="bluePara para">{{ status }} </span>
      <img class="logo" :src="logo" alt="" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  type: { required: true },
  logo: { required: true, type: String },
  status: { required: true, type: String },
  title: { required: true, type: String },
  para: { required: true, type: String },
});
</script>

<style scoped lang="scss">
// @import "../../assets/scss/style";
.card {
  min-height: 90px;

  background: #ffffff;
  /* Boxx Shadow */

  box-shadow: 0px 1px 3px rgba(42, 49, 55, 0.11);
  border-radius: 10px;
  margin-bottom: 20px;
}
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

  /* Gri */

  color: #818b9a;
}
.bluePara {
  color: hsl(200, 73%, 54%);
}
.logo {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
