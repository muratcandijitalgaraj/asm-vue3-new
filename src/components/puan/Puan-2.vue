<template>
  <div class="body">
    <div class="closeContainer d-flex justify-content-end align-items-start">
      <img :src="bulutlar" alt="" class="bulutlar" />
      <img :src="close" alt="" class="close" />
    </div>
    <div class="title">Bildiriminiz için teşekkürler</div>
    <div class="buttonContainer d-flex justify-content-center">
      <button @click="handleButton" class="button">
        <span class="buttonText">Tamamdır</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import close from "../../assets/img/puan/close.svg";
import bulutlar from "../../assets/img/puan/bulutlar-2.svg";
</script>

<style scoped>
.body {
  width: 675px !important;
  height: 386px !important;

  background: #e9f3f9;
  border-radius: 16px;
}
.closeContainer {
  margin-bottom: 30px;
}
.bulutlar {
  position: relative;
  z-index: 1;
}
.title {
  /* baslik-alt1 */

  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700 !important;
  font-size: 26px !important;
  line-height: 130%;
  /* identical to box height, or 34px */

  text-align: center;
  letter-spacing: -0.01em;

  /* Primary */

  color: #3c4e69;
}
.buttonContainer {
  width: 100%;
  margin-top: 30px;
}
.button {
  padding: 12px 20px 11px;
  width: 300px;
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
</style>
