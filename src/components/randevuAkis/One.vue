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

const props = defineProps({
  title: { required: true, type: String },
  //   isActive: { required: true, type: String },
  //   standard: { required: true, type: Boolean },
  //   ekle: { required: true, type: Boolean },
});
const cards = ref([
  {
    title: "Randevuyu kim için alıyorsunuz?",
  },
  {
    title: "Randevu türünü seçin",
  },
]);
</script>

<style scoped lang="scss">
// @import "../../assets/scss/style";
</style>
