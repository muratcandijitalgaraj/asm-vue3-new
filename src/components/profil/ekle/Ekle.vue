<template>
  <div class="body">
    <div class="top d-flex justify-content-between">
      <div class="title">Yeni profili kim için oluşturmak istersiniz?</div>
      <img :src="close" alt="" />
    </div>
    <div class="itemContainer d-flex flex-wrap">
      <Cards v-for="(item, key) in cards" :key="key" :para="item.para" />
    </div>
    <div class="buttonContainer d-flex justify-content-center">
      <button @click="handleButton" class="button">
        <span class="buttonText">+ Yeni Profil Ekle</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import close from "../../../assets/img/profil/close.svg";
import Cards from "./Cards.vue";
import { ref, defineEmits } from "vue";
//emits
const emit = defineEmits(["getData"]);
const handleButton = (params) => {
  emit("getData", params);
};

const cards = ref([
  {
    para: "Eşim",
  },
  {
    para: "Eşim",
  },
  {
    para: "Eşim",
  },
  {
    para: "Çocuğum",
  },
  {
    para: "Çocuğum",
  },
  {
    para: "Çocuğum",
  },
]);
</script>

<style scoped lang="scss">
.body {
  width: 409px;
  height: 444px !important;
  background: #e9f3f9;
  border-radius: 16px;
}
.top {
  padding: 35px;
}

.title {
  width: 198px;
  height: 52px;
  font-family: "Nunito Sans" !important;
  font-style: normal !important;
  font-weight: 700 !important;
  font-size: 20px !important;
  line-height: 130% !important;
  letter-spacing: -0.01em !important;
  color: #3c4e69;
}
.para {
  font-family: "Nunito Sans" !important;
  font-style: normal !important;
  font-weight: 400 !important;
  font-size: 15px !important;
  line-height: 140% !important;
  /* or 21px */

  letter-spacing: -0.01em !important;

  /* Primary */

  color: #3c4e69;
  margin-top: 30px;
  margin-bottom: 30px;
}
.itemContainer {
}
.givePadding {
  padding-left: 35px;
  padding-right: 15px;
}
.buttonContainer {
  width: 100%;
}
.button {
  padding: 12px 20px 11px;
  width: 341px;
  height: 50px;
  background: #ff8038;
  border-radius: 6px;
  border: none;
}
.buttonText {
  /* buton-text-orta */

  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 110%;
  /* identical to box height, or 18px */

  /* Beyaz */

  color: #ffffff;
}
@media only screen and (max-width: 600px) {
  .body {
    width: 90%;
    height: auto !important;
  }
  .itemContainer {
    justify-content: center;
  }
}
</style>
