<template>
  <div class="body">
    <div class="top d-flex justify-content-between">
      <span class="title"> Profiller </span>
      <img :src="close" alt="" />
    </div>
  </div>
</template>

<script setup>
import close from "../../assets/img/profil/close.svg";
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
</style>
