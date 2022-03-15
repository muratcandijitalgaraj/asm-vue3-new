<template>
  <div class="row topContainer d-flex align-items-center">
    <!-- left -->
    <div
      class="leftPart col-12 col-xxl-7 d-flex justify-content-between align-items-center"
    >
      <span class="leftItem bigTitle">Randevularım</span>
      <div
        class="clickedContainer d-flex flex-column align-items-center justify-content-between"
      >
        <span class="title leftItem">Yerinde Randevular</span>
        <span class="blueLine"></span>
      </div>
      <span class="title leftItem">Görüntülü Görüşme</span>
    </div>
    <!-- right -->
    <div
      class="btnContainer col-12 col-xl-12 col-xxl-5 d-flex justify-content-center justify-content-md-end"
    >
      <button class="btn">
        <span class="btnPara">Yeni Randevu Alın</span>
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
@import "../../assets/scss/style";

.bigTitle {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 130%;
  /* identical to box height, or 29px */

  /* Primary */

  color: $title;
}
.title {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  color: $title;
  //   margin-bottom: 20px;
}
.btn {
  width: 167px;
  height: 40px;
  background: $orange;
  border-radius: 6px;
}
.btnPara {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 110%;
  /* identical to box height, or 17px */

  /* Beyaz */

  color: $white;
}
.lineContainer {
  width: 100%;
  border: 1px solid;
}
.blueLine {
  position: relative;
  top: 25px;
  width: 25px;
  height: 5px;
  background: $blue;
  border-radius: 4px 4px 0px 0px;
}
@media only screen and (max-width: 1399px) {
}
</style>
