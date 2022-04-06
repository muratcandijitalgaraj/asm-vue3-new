<template>
  <div class="headerComponent">
    <div class="headerContainer">
      <div class="headerLogoPart">
        <img src="../../assets/img/giris/logo.svg" alt="" class="logo" />
        <div class="headerIslemler">ONLINE İŞLEMLER</div>
      </div>
      <div class="headerSignupPart">
        <div class="headerSignupPara">{{ para }}</div>
        <button class="headerSignupButton">{{ buttonText }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["para", "buttonText"],
};
</script>

<style lang="scss">
//create a flex  mixin
@mixin flex($direction) {
  display: flex;
  //   justify-content: center;
  //   align-items: center;
  flex-direction: $direction;
}
//flex center mixin
@mixin flexCenter($direction) {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: $direction;
}
//auto dimensions
@mixin autoDimensions {
  height: auto;
  width: auto;
}
//full dimensions
@mixin fullDimensions {
}
//black borer mixin
@mixin blackBorder {
  border: 1px solid black;
}
.headerComponent {
  width: 100%;
  height: auto;
  @include flexCenter(row);
  //   @include blackBorder();
}
.headerContainer {
  width: 65%;
  @include flex(row);
  justify-content: space-between;
  //   @include blackBorder();
}
.headerLogoPart {
  @include autoDimensions();
  //   @include blackBorder();
  @include flexCenter(row);
  margin-top: 40px;
}
.logo {
  height: 70.00016784667969px;
  width: 200.6733856201172px;
  border-radius: 0px;
  margin-right: 23.33px;
}
.headerIslemler {
  height: 42px;
  width: 69px;
  border-radius: nullpx;
  /* text3 */
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 140%;
  /* or 21px */
  letter-spacing: -0.01em;
  color: #ffffff;
}
//signup part
.headerSignupPart {
  @include autoDimensions();
  @include flexCenter(row);

  //   @include blackBorder();
  margin-top: 55px;
}
.headerSignupPara {
  /* Henüz üye değil misiniz? */
  width: auto;
  height: 17px;
  /* buton-text-kucuk */
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 110%;
  /* identical to box height, or 17px */
  display: flex;
  align-items: center;
  text-align: center;
  /* Beyaz */
  color: #ffffff;
  // border: 1px solid red;
  margin-right: 20px;
}
.headerSignupButton {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 20px 11px;
  width: 114px;
  height: 40px;
  /* Beyaz */
  background: #ffffff;
  border-radius: 6px;
  /* buton-text-kucuk */
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 110%;
  /* Button Primary */
  color: #ff7c32;
  /* Inside auto layout */
  order: 0;
  flex-grow: 0;
  margin: 0px 10px;
  border: none;
}
// tablet starts here
@media only screen and (max-width: 1200px) {
  .headerContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .headerSignupPart {
    margin-top: 25px;
  }
}
</style>
