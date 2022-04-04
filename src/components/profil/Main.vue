<template>
  <div class="body d-flex justify-content-center align-items-center">
    <div
      v-if="showDegistir"
      class="item d-flex justify-content-center align-items-center"
    >
      <Degistir @getData="handleChildData()" />
    </div>
    <div
      v-if="showEkle"
      class="item d-flex justify-content-center align-items-center"
    >
      <Ekle @getData="handleChildData()" />
    </div>
    <div
      v-if="showEkle2"
      class="item d-flex justify-content-center align-items-center"
    >
      <Ekle2 @getData="handleChildData()" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Degistir from "./degistir/Degistir.vue";
import Ekle from "./ekle/Ekle.vue";
import Ekle2 from "./ekle-2/Ekle2.vue";

let showDegistir = ref(true);
let showEkle = ref(false);
let showEkle2 = ref(false);

const handleChildData = () => {
  if (showDegistir.value == true) {
    showDegistir.value = false;
    showEkle.value = true;
  } else if (showEkle.value == true) {
    showEkle.value = false;
    showEkle2.value = true;
  }
};
</script>

<style scoped lang="scss">
.body {
  height: 100vh;
  overflow: scroll;
}
.item {
}
</style>
