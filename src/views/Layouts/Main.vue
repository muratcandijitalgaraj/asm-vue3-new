<template>
  <div class="main-container col-md-12 col-lg-8 col-xl-8 col-xxl-9">
    <!-- somehow, this is the section slot in master -->
    <div class="row d-flex">
      <MainCard
        v-for="(item, key) in cards"
        :title="item.title"
        :url="item.url"
        :src="item.src"
        :key="key"
      />
    </div>
  </div>
</template>

<script setup>
import MainCard from "../../components/main/MainCard.vue";
import { ref } from "vue";
const cards = ref([
  { src: "/src/assets/img/sidebar/giris.svg", title: "Giriş", url: {} },
  { src: "/src/assets/img/sidebar/giris.svg", title: "Giriş", url: {} },
  { src: "/src/assets/img/sidebar/giris.svg", title: "Giriş", url: {} },
]);
</script>

<style scoped lang="scss">
@import "../../assets/scss/style";
.main-container {
  height: 100%;
  background: $main;
  border-top-right-radius: 18px;
  border-bottom-right-radius: 18px;
}
</style>
