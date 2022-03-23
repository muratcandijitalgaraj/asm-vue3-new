<template>
  <div class="left d-flex flex-column">
    <span class="title">Bölüm Seçin</span>
    <div
      class="whiteBox searchContainer d-flex flex-row justify-content-between align-items-center"
    >
      <input type="text" class="searchBox" placeholder="Bölüm Arayın" />
      <img :src="logo" alt="" />
    </div>
    <LeftBoxes
      v-for="(item, key) in box"
      :key="key"
      :title="item.title"
      :para="item.para"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import LeftBoxes from "./LeftBoxes.vue";
import logo from "../../../assets/img/medical-records/search.svg";

const box = ref([
  {
    title: "Ağrı Tedavisi (Algoloji)",
  },
]);
</script>

<style scoped lang="scss">
.left {
}
.title {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 130%;
  /* identical to box height, or 22px */
  letter-spacing: -0.01em;
  /* Primary */
  color: #3c4e69;
  margin-bottom: 22px;
}
.whiteBox {
  background: #ffffff;
  /* Form Shadow */
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.03);
  border-radius: 6px;
  height: 48px;
  padding-left: 15px;
  padding-right: 14px;
  margin-bottom: 35px;
}
.searchBox {
  height: 48px !important;
  width: 90%;
  border: none;
}
img {
}
</style>
