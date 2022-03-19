<template>
  <div class="receteler d-flex flex-column">
    <div class="bigTitle">Reçeteler</div>
    <div class="greyLine"></div>
    <TopVue />
  </div>
</template>

<script setup>
import TopVue from "../UI/receteler/Top.vue";
</script>

<style scoped lang="scss">
// @import "../../assets/scss/style";
.bigTitle {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 130%;
  color: #3c4e69;
  margin-bottom: 25px;
}
.greyLine {
  border: 1px solid #dae9f1;
}
</style>
