<template>
  <div class="d-flex flex-column justify-content-center align-items-center">
    <CardsVue v-for="(item, key) in cards" :key="key" :title="item.title" />
  </div>

  <!-- <button @click="sendEvent">click me</button> -->
</template>

<script setup>
import { ref } from "vue";
import CardsVue from "../UI/RandevuAkis/Cards.vue";

// let params = "parametres here";
// const emit = defineEmits(["someEvent"]);
// function sendEvent() {
//   emit("someEvent", "sth new");
// }

const props = defineProps({});
const cards = ref([{}]);
</script>

<style scoped lang="scss">
// @import "../../assets/scss/style";
</style>
