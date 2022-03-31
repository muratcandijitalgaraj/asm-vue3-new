<template>
  <div class="body">
    <div class="top d-flex justify-content-between">
      <div class="title">Yeni profili kim için oluşturmak istersiniz?</div>
      <img :src="close" alt="" />
    </div>
    <div class="itemContainer d-flex flex-wrap">
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
  height: 444px;
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
</style>
