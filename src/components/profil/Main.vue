<template>
  <div class="body d-flex justify-content-center align-items-center">
    <div v-if="showDegistir" class="item">
      <Degistir @getData="handleChildData()" />
    </div>
    <div v-if="showEkle" class="item">
      <Ekle @getData="handleChildData()" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Degistir from "./degistir/Degistir.vue";
import Ekle from "./ekle/Ekle.vue";

let showDegistir = ref(false);
let showEkle = ref(true);

const handleChildData = () => {
  if (showDegistir.value == true) {
    showDegistir.value = false;
    showEkle.value = true;
  } else if (showEkle.value == true) {
    showEkle.value = false;
    alert("hey");
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
