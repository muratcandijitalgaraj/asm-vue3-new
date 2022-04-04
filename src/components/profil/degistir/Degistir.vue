<template>
  <div class="body d-flex flex-column">
    <div class="top d-flex justify-content-between">
      <div class="title">Profiller</div>
      <img :src="close" alt="" />
    </div>
    <p class="para">
      Aile bireylerinizi ekleyebilir veya profil değiştirerek aile bireyleriniz
      için işlem yapabilirsiniz
    </p>
    <div class="cards align-self-center">
      <Cards
        v-for="(item, key) in cards"
        :key="key"
        :title="item.title"
        :para="item.para"
      />
    </div>
    <button @click="handleButton" class="button align-self-center">
      <span class="buttonText">+ Yeni Profil Ekle</span>
    </button>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

import close from "../../../assets/img/profil/close.svg";
import Cards from "./Cards.vue";

const cards = ref([
  {
    title: "Mehmet Yılmaz",
    para: "Siz",
  },

  {
    title: "Akgül Yılmaz",
    para: "Eşim",
  },
  {
    title: "Akgül Yılmaz",
    para: "Eşim",
  },
]);

//emits
const emit = defineEmits(["getData"]);
const handleButton = (params) => {
  emit("getData", params);
};
</script>

<style scoped lang="scss">
.body {
  width: 409px;
  height: 520px !important;

  background: #e9f3f9;
  border-radius: 16px;
  padding: 25px;
}
.title {
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
    width: 340px;
  }
  .button {
    width: 223px;
  }
}
</style>
