<template>
  <div class="main">
    <h3 class="title">Randevuyu kim için alıyorsunuz?</h3>
    <div
      class="profileWrapper d-flex flex-row justify-content-start align-items-center"
    >
      <div class="circle"></div>
      <div class="profileName">Mehmet Yılmaz</div>
    </div>
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
.profileWrapper {
  width: 341px;
  height: 47px;
  background: #ffffff;
  /* Boxx Shadow */
  box-shadow: 0px 1px 3px rgba(42, 49, 55, 0.11);
  border-radius: 6px;
  margin-bottom: 17px;
}
.ekleWrapper {
  width: 341px;
  height: 47px;
  background: #ffffff;
  /* Boxx Shadow */
  box-shadow: 0px 1px 3px rgba(42, 49, 55, 0.11);
  border-radius: 6px;
}
.title {
  width: 249px;
  height: 22px;

  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 130%;
  /* identical to box height, or 22px */

  letter-spacing: -0.01em;

  /* Primary */

  color: #3c4e69;
}
.circle {
  width: 20px;
  height: 20px;
  border: 1px solid #e1e1e1;
  border-radius: 50%;
  margin: 0 12px;
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
