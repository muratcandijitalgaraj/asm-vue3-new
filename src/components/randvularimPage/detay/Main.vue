<template>
  <div class="randevuDetayComponent">
    <!-- titles -->
    <div class="titles d-flex justify-content-between align-items-center">
      <span class="title">Randevu Detayı</span>
      <div class="para d-flex justify-content-end align-items-center">
        <span class="htmlSign">&#8249;</span> Geri Dön
      </div>
    </div>
    <!-- titles ends -->
    <div class="greyLine"></div>
    <WhiteBoard />
  </div>
</template>

<script setup>
import WhiteBoard from "./WhiteBoard.vue";
</script>

<style scoped lang="scss">
@import "../../../assets/scss/style";
.title {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 130%;
  color: $title;
}
.para {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
  letter-spacing: -0.01em;
  color: $text-grey;
}
.htmlSign {
  font-size: 2.5rem;
  color: $text-grey;
  padding-bottom: 5px;
  padding-right: 12px;
}
.greyLine {
  height: 1px;
  width: 100%;
  border: 1px solid #dae9f1;
  margin: 25px 0;
}
</style>
