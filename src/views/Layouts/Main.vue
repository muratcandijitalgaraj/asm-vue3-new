<template>
  <div class="main-container col-md-12 col-lg-8 col-xl-8 col-xxl-9">
    <!-- somehow, this is the section slot in master -->
    <div class="row d-flex justify-content-evenly">
      <MainCard
        v-for="(item, key) in cards"
        :title="item.title"
        :url="item.url"
        :src="item.src"
        :key="key"
        :class="item.color"
      />
    </div>
  </div>
</template>

<script setup>
import MainCard from "../../components/main/MainCard.vue";
import { ref } from "vue";
const cards = ref([
  {
    src: "/src/assets/img/cards/blue.svg",
    title: "Hastane Randevusu Alın",
    url: {},
    color: "blue box",
  },
  {
    src: "/src/assets/img/cards/orange.svg",
    title: "Görüntülü Görüşme Randevusu Alın",
    url: {},
    color: "orange box",
  },
  {
    src: "/src/assets/img/cards/purple.svg",
    title: "Check-Up Başvurusu Yapın",
    url: {},
    color: "purple box",
  },
  {
    src: "/src/assets/img/cards/green.svg",
    title: "Destek Merkezi",
    url: {},
    color: "green box",
  },
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
.box {
  margin-top: 29px;
}
.blue {
  border-top: 3px solid $blue;
}
.orange {
  border-top: 3px solid $orange;
}
.purple {
  border-top: 3px solid $purple;
}
.green {
  border-top: 3px solid $green;
}
</style>
