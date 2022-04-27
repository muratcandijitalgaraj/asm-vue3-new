<template>
  <div class="main">
    <h2 class="bigTitle">Randevu Alın</h2>
    <div class="greyLine"></div>
    <forWhomVue />
  </div>
</template>

<script setup>
import forWhomVue from "../UI/randevuAkis/forWhom.vue";
</script>

<style lang="scss" scoped>
.main {
  padding: 30px;
}
.bigTitle {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 130%;
  /* identical to box height, or 29px */

  /* Primary */

  color: #3c4e69;
}
.greyLine {
  border: 1px solid #dae9f1;
  margin: 30px 0;
}
</style>
