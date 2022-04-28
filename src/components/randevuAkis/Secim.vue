<template>
  <div class="main">
    <h2 class="bigTitle">Randevu Alın</h2>
    <div class="greyLine"></div>
    <div
      class="body d-flex flex-column align-items-center justify-content-center"
    >
      <forWhomVue />
      <randevuTuruVue />
      <button class="button">
        <div class="buttonText">Devam</div>
      </button>
    </div>
  </div>
</template>

<script setup>
import forWhomVue from "../UI/randevuAkis/forWhom.vue";
import randevuTuruVue from "../UI/randevuAkis/randevuTuru.vue";
</script>

<style lang="scss" scoped>
.main {
  padding: 30px;
}
.bigTitle {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 130%;
  /* identical to box height, or 29px */

  /* Primary */

  color: #3c4e69;
}
.greyLine {
  border: 1px solid #dae9f1;
  margin: 30px 0;
}
.button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 20px 11px;

  width: 341px;
  height: 50px;

  /* Turuncu */

  background: #ff8038;
  border: none;
  border-radius: 6px;
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
