<template>
  <div class="topContainer d-flex justify-content-between">
    <span
      class="item bigTitle d-flex justify-content-center justify-content-xl-start"
      >Randevularım</span
    >
    <div
      class="item clickContainer d-flex flex-column align-items-center align-items-xl-end"
    >
      <span class="title">Yerinde Randevular</span>
    </div>
    <div
      class="item clickContainer d-flex flex-column align-items-center align-items-xl-start"
    >
      <span class="title">Görüntülü Görüşme</span>
    </div>
    <div
      class="btnContainer d-flex justify-content-center justify-content-xl-end"
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
@media only screen and (max-width: 1199px) {
  .topContainer {
    flex-direction: column;
  }
  .item {
    margin-bottom: 5px;
  }
}
</style>
