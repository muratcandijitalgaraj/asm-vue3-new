<template>
  <div class="main">
    <TopVue />

    <div v-if="lolz">lolz</div>

    <OneVue @someEvent="someEvent" />
  </div>
</template>

<script setup>
import TopVue from "../UI/RandevuAkis/Top.vue";
import OneVue from "./One.vue";
import { ref } from "vue";

function someEvent(name) {
  alert("call" + name);
}
</script>

<style scoped lang="scss">
// @import "../../assets/scss/style";
</style>
