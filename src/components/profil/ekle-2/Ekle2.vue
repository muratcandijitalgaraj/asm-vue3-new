<template>
  <div class="body">
    <div class="top d-flex justify-content-between align-items-center">
      <div class="title">Eşim için profil oluştur</div>
      <img :src="close" alt="" />
    </div>
    <div class="columns d-flex flex-column">
      <div class="tcPart d-flex flex-row justify-content-between">
        <input type="text" class="uyruk item" placeholder="Uyruk" />
        <input
          type="text"
          class="tcNo item"
          placeholder="T.C. Kimlik Numarası"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import close from "../../../assets/img/profil/close.svg";
</script>

<style scoped lang="scss">
.body {
  width: 470px;
  height: 750px;
  background: #e9f3f9;
  border-radius: 16px;
  padding: 35px 25px;
}
.title {
  // width: 198px;
  // height: 52px;
  font-family: "Nunito Sans" !important;
  font-style: normal !important;
  font-weight: 700 !important;
  font-size: 20px !important;
  line-height: 130% !important;
  letter-spacing: -0.01em !important;
  color: #3c4e69;
}
.item {
  background: #ffffff;
  /* Form Shadow */

  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.03);
  border-radius: 6px;
  border: none;
}

.uyruk {
  width: 70px;
  height: 56px;
}
.tcNo {
  width: 310px;
  height: 56px;
}
</style>
