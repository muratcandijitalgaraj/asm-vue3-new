<template>
  <div class="main">
    <div class="topContainer">
      <TopVue />
    </div>
    <div class="greyLine"></div>
    <BodyVue />
    <!-- <OneVue /> -->
  </div>
</template>

<script setup>
import TopVue from "../UI/RandevuAkis/Top.vue";
import BodyVue from "./randevu-alin-2/Body.vue";
// import OneVue from "./One.vue";
import { ref } from "vue";

// function someEvent(name) {
//   alert("call" + name);
// }
</script>

<style scoped lang="scss">
// @import "../../assets/scss/style";
.main {
}
.greyLine {
  margin-top: 25px;
  margin-bottom: 30px;
  border: 1px solid #dae9f1;
}
</style>
