<template>
  <div class="body d-flex justify-content-center align-items-center">
    <div v-if="showDegistir" class="item">
      <Degistir @getData="handleChildData()" />
    </div>
    <div v-if="showEkle" class="item">
      <Ekle @getData="handleChildData()" />
    </div>
    <div v-if="showEkle2" class="item">
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

const handleChildData = () => {
  if (showDegistir.value == true) {
    showDegistir.value = false;
    showEkle.value = true;
  } else if (showEkle.value == true) {
    showEkle.value = false;
  }
};
</script>

<style scoped lang="scss">
.body {
  height: 100vh;
}
.item {
}
</style>
