<template>
  <div
    class="randevuBos d-flex flex-column justify-content-center align-items-center"
  >
    <img :src="bulutlar" alt="" class="bulutlar" />

    <img class="logo" :src="logo" alt="" />
    <span class="title">Randevunuz Bulunmuyor.</span>
    <span class="blueTitle text-center"
      >Randevu almak için aşağıdaki butonu kullabilirsiniz</span
    >
    <button class="btn d-flex justify-content-center align-items-center">
      <span class="btnPara">Yeni Randevu Alın</span>
    </button>
  </div>
</template>

<script setup>
import logo from "../../../assets/img/appointments/empty/calendar.svg";
import bulutlar from "../../../assets/img/appointments/empty/bulutlar.svg";
</script>

<style scoped lang="scss">
@import "../../../assets/scss/style.scss";
.randevuBos {
  // height: 80vh;
  margin-bottom: 10rem;
}
.bulutlar {
  position: relative;
  top: 7rem;
  // display: none;
}
.logo {
  margin-bottom: 30px;
}
.title {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 26px;
  line-height: 130%;
  /* identical to box height, or 34px */

  letter-spacing: -0.01em;

  /* Primary */

  color: #3c4e69;
  margin-bottom: 13px;
}
.blueTitle {
  /* baslik-alt2 */

  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  /* or 26px */

  text-align: center;
  letter-spacing: -0.01em;

  /* Secondary */

  color: #32a5df;
  margin-bottom: 23px;
}
.btn {
  background: #ff7c32;
  border-radius: 6px;
  width: 235px;
  height: 60px;
}
.btnPara {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 110%;
  /* identical to box height, or 20px */

  display: flex;
  align-items: center;
  text-align: center;

  /* Beyaz */

  color: #ffffff;
}
</style>
