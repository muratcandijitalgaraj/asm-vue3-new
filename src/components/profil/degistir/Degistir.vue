<template>
  <div class="body">
    <div class="top d-flex justify-content-between">
      <span class="title"> Profiller </span>
      <img :src="close" alt="" />
    </div>
    <p class="para">
      Aile bireylerinizi ekleyebilir veya profil değiştirerek aile bireyleriniz
      için işlem yapabilirsiniz
    </p>
    <div class="cards">
      <Cards />
    </div>
  </div>
</template>

<script setup>
import close from "../../../assets/img/profil/close.svg";
import Cards from "./Cards.vue";
</script>

<style scoped lang="scss">
.body {
  width: 409px;
  height: 520px;

  background: #e9f3f9;
  border-radius: 16px;
  padding: 25px;
}
.title {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  letter-spacing: -0.01em;
  color: #3c4e69;
}
.para {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
  /* or 21px */

  letter-spacing: -0.01em;

  /* Primary */

  color: #3c4e69;
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
