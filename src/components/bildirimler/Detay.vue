<template>
  <div class="detay">
    <div
      class="titleContainer col-12 d-flex flex-column flex-lg-row align-items-center justify-content-enter justify-content-lg-between"
    >
      <span class="title">Bildirimler</span>
      <div
        class="deleteContainer d-flex justify-content-center align-items-center"
      >
        <span class="para">Hepsini Temizle</span>
        <img :src="trash" alt="" class="logo" />
      </div>
    </div>
  </div>
</template>

<script setup>
import trash from "../../assets/img/bildirimler/trash.svg";
</script>

<style lang="scss">
.title {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 130%;

  color: #3c4e69;
}
.para {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
  letter-spacing: -0.01em;
  color: #818b9a;
}
.logo {
  margin-left: 9px;
}
</style>
