<template>
  <div
    class="right col-6 col-lg-8 col-xl-6 align-items-center justify-content-center"
  >
    <div class="boxes d-flex flex-row align-items-center">
      <div
        class="bg col-3 d-flex justify-content-center align-items-center"
        :class="color"
      >
        <img :src="logo" alt="" />
      </div>
      <span class="para col-9"> {{ para }} </span>
    </div>
    <span class="dots align-self-start"></span>
    <span class="dots align-self-start"></span>
  </div>
</template>

<script setup>
const props = defineProps({
  para: { required: true, type: String },
  logo: { required: true, type: String },
  color: { required: true, type: String },
});
</script>

<style scoped lang="scss">
.right {
}
.bg {
  margin-right: 13px;
  width: 24px;
  height: 24px;
  border-radius: 4px;
}
.para {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 130%;
  /* identical to box height, or 17px */

  letter-spacing: -0.01em;

  /* Primary */

  color: #3c4e69;
}
.orange {
  background: #ff8038;
}
.black {
  /* Primary */

  background: #3c4e69;
}
.purple {
  background: #7367f0;
}
.blue {
  background: #2e95df;
}
.green {
  background: #29a87b;
}
.dots {
  width: 3px;
  height: 3px;
  background: #d5e2eb;
  margin-top: 8px;
  margin-bottom: 8px;
  margin-left: 10px;
}
</style>
