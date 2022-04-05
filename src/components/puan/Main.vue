<template>
  <div
    v-if="showPuan1"
    class="body d-flex justify-content-center align-items-center"
  >
    <Puan1 @changeComponent="renderFunc" />
  </div>
  <div
    v-if="showPuan2"
    class="body d-flex justify-content-center align-items-center"
  >
    <Puan2 @changeComponent="renderFunc" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Puan1 from "./puan-1/Puan-1.vue";
import Puan2 from "./Puan-2.vue";

let showPuan1 = ref(true);
let showPuan2 = ref(false);

const renderFunc = () => {
  if (showPuan1.value == true) {
    showPuan1.value = false;
    showPuan2.value = true;
  }
};
</script>

<style scoped>
.body {
  height: 100vh;
  padding: 2rem;
  overflow: scroll;
}
</style>
