<template>
  <div
    class="top d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center"
  >
    <span class="title">Randevu Alın</span>
    <div class="numbers d-flex align-items-center">
      <div class="fullCircle numberOne">
        <span class="fullNumber">1</span>
      </div>
      <!-- //1 ends -->
      <div class="dots d-flex align-items-center">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
      <!-- 2 starts -->
      <div class="emptyCircle numberTwo">
        <span class="emptyNumber">2</span>
      </div>
      <div class="dots d-flex align-items-center">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
      <!-- 2 ends -->
      <!-- 3 starts -->
      <div class="emptyCircle numberThree">
        <span class="emptyNumber">3</span>
      </div>
      <div class="dots d-flex align-items-center">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
      <!-- 3 ends -->
      <!-- 4 starts -->
      <div class="emptyCircle numberFour">
        <span class="emptyNumber">4</span>
      </div>
      <div class="dots d-flex align-items-center">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
      <!-- 4 ends -->
      <!-- 5 starts -->
      <div class="emptyCircle numberFive">
        <span class="emptyNumber">5</span>
      </div>
      <!-- 5 ends -->
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
// @import "../../assets/scss/style";
.title {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 130%;
  color: #3c4e69;
}
.fullNumber {
  /* text4-bold */

  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 130%;
  /* or 17px */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.01em;

  /* Beyaz */

  color: #ffffff;
}
.emptyNumber {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 130%;
  /* or 17px */
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.01em;
  /* Primary */
  color: #3c4e69;
  position: relative;
  top: 1px;
}
.fullCircle {
  width: 23px;
  height: 23px;
  background: #3c4e69;
  /* Form Shadow */
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.03);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
}
.emptyCircle {
  width: 23px;
  height: 23px;
  border: 1.5px solid #3c4e69;
  box-sizing: border-box;
  /* Form Shadow */
  border-radius: 50%;
  filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.03));
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
}
.dot {
  width: 3px;
  height: 3px;
  background: #7a8596;
  margin-right: 6px;
}

@media only screen and (max-width: 992px) {
  .title {
    margin-bottom: 10px;
  }
}
</style>
