<template>
  <div class="card d-flex justify-content-between align-items-center">
    <div class="left d-flex flex-row justify-content-start align-items-center">
      <img :src="user" alt="" />
      <div class="texts d-flex flex-column">
        <span class="title"> {{ title }} </span>
        <span class="para">{{ para }} </span>
      </div>
    </div>
    <!-- right part is just the circle -->
    <div class="circle">
      <img :src="vector" alt="" />
    </div>
    <!-- <button class="button">
      <span class="buttonText">+ Yeni Profil Ekle</span>
    </button> -->
  </div>
</template>

<script setup>
import user from "../../../assets/img/profil/user.svg";
import vector from "../../../assets/img/profil/vector.svg";
const props = defineProps({
  title: { required: true, type: String },
  para: { required: true, type: String },
});
</script>

<style scoped lang="scss">
.card {
  width: auto;
  height: auto;
  background: #ffffff;
  border: 1px solid #32a5df;
  box-sizing: border-box;
  box-shadow: 0px 1px 3px rgba(42, 49, 55, 0.11);
  border-radius: 6px;
  border: none;
  margin-bottom: 17px;
}
.left {
  border: solid;
  width: 100%;
}
.title {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
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
.button {
  padding: 12px 20px 11px;
  width: 70%;
  height: auto;
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
