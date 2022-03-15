<template>
  <div class="row topContainer d-flex align-items-center">
    <!-- left -->
    <div
      class="leftPart col-12 col-md-7 d-flex justify-content-between align-items-center"
    >
      <span class="leftItem bigTitle">Randevularım</span>
      <span class="title leftItem">Yerinde Randevular</span>
      <span class="title leftItem">Görüntülü Görüşme</span>
    </div>
    <!-- right -->
    <div
      class="btnContainer col-12 col-md-5 d-flex justify-content-center justify-content-md-end"
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
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  /* Primary */

  color: $title;
}
.btn {
  width: 167px;
  height: 40px;

  /* Button Primary */

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
  border: 2px solid;
}
</style>
