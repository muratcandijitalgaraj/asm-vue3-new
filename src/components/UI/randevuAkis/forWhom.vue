<template>
  <div class="main">
    <h3 class="title">Randevuyu kim için alıyorsunuz?</h3>
    <div
      class="ekleWrapper d-flex flex-row justify-content-start align-items-center"
    >
      <img :src="icon" alt="" class="icon" />
      <div class="bluePara">Yeni Kişi Ekle</div>
    </div>
  </div>
</template>

<script setup>
import icon from "../../../assets/img/randevuAkis/addUser.svg";
</script>

<style scoped>
.ekleWrapper {
  width: 341px;
  height: 47px;
  background: #ffffff;
  /* Boxx Shadow */
  box-shadow: 0px 1px 3px rgba(42, 49, 55, 0.11);
  border-radius: 6px;
}
.icon {
  margin: 0 12px;
}
.bluePara {
  width: 98px;
  height: 24px;

  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  /* Secondary */

  color: #32a5df;
}
</style>
