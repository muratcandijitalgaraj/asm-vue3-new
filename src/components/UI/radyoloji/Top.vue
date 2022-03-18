<template>
  <div class="titles d-flex justify-content-start align-items-center">
    <span class="bigTitle">Tıbbi Kayıt ve Sonuçlar</span>
    <span class="title">Laboratuvar</span>
    <div class="clicked d-flex flex-column">
      <span class="title blueTitle">Radyoloji</span>
      <div class="blueLine"></div>
    </div>
    <span class="title">Diğer</span>
  </div>
  <div class="greyLine"></div>
</template>

<script setup></script>

<style scoped lang="scss">
// @import "../../assets/scss/style";

.bigTitle {
  margin-right: 50px;
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 130%;
  /* identical to box height, or 29px */

  /* Primary */

  color: #3c4e69;
}
.title {
  margin-right: 50px;
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  text-align: center;

  /* Primary */

  color: #3c4e69;
}
.blueTitle {
  color: #32a5df;
}
.blueLine {
  position: relative;
  left: 1.4rem;
  width: 25px;
  height: 5px;
  top: 1rem;

  /* Secondary */

  background: #32a5df;
  border-radius: 4px 4px 0px 0px;
}
.greyLine {
  border: 1px solid #dae9f1;
  margin-top: 1rem;
}
@media only screen and (max-width: 768px) {
  .titles {
    display: flex;
    flex-direction: column;
  }
  .blueLine {
    display: none;
  }
}
</style>
