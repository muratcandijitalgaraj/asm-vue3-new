<template>
  <div class="bottomComponent">
    <div class="container">
      <!-- <div class="frame"> -->
      <img src="../../assets/img/giris/frame.svg" alt="" class="frame" />
      <!-- </div> -->
      <div class="textGroup">
        <div class="blueText">
          Mobil Uygulamamız ile Anadolu Sağlık hizmetlerine
          <span class="orangeText">her yerden ulaşın</span>
        </div>
        <img src="../../assets/img/giris/arrow.svg" alt="" class="arrow" />
      </div>
      <div class="buttons">
        <button class="btn">
          <img
            src="../../assets/img/giris/apple-logo.svg"
            alt=""
            class="btnLogo"
          />
          <div class="btnTextContainer">
            <div class="btnParaTop">
              Hemen İndirin <br />
              <div class="btnParaDown">App Store</div>
            </div>
          </div>
        </button>
        <button class="btn">
          <img
            src="../../assets/img/giris/google-logo.svg"
            alt=""
            class="btnLogo"
          />
          <div class="btnTextContainer">
            <div class="btnParaTop">
              Hemen İndirin <br />
              <div class="btnParaDown">Google Play</div>
            </div>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
//flex center mixin
@mixin flexCenter($direction) {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: $direction;
}
.bottomComponent {
  height: 100%;
  width: 100%;
  background: linear-gradient(#e9f3f9 25%, #f3fafe 25%);
  // border: 1px solid black;
  @include flexCenter(row);
}
.container {
  height: 190px;
  width: 65%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.frame {
  width: 250px;
  height: 190px;
  margin-right: 48px;
}
.textGroup {
  width: 439px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 3rem;
}
.arrow {
  position: relative;
  height: 32.999999223329326px;
  width: 91.9999978347363px;
  right: 2rem;
  top: 1rem;
}
.blueText {
  // border: 1px solid black;

  width: 439px;
  height: 52px;
  /* baslik-alt2 */
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 130%;
  /* or 26px */
  letter-spacing: -0.01em;
  /* Secondary */
  color: #32a5df;
}
.orangeText {
  width: 439px;
  height: 52px;
  /* baslik-alt2 */
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 130%;
  /* or 26px */
  letter-spacing: -0.01em;
  /* Turuncu */
  color: #ff8038;
}
.buttons {
  height: auto;
  width: auto;
  /* border: 2px solid black; */
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-top: 3rem;
}
.btn {
  /* Rectangle 6 */
  width: 12.188rem;
  height: 3.75rem;
  /* Secondary */
  background: #32a5df;
  border-radius: 40px;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* border: 2px solid black; */
  margin-right: 30px;
}
.btnLogo {
  width: auto;
  height: 30px;
  padding-left: 1rem;
}
.btnTextContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* border: 1px solid red; */
  /* padding-bottom: 1.5rem;
  padding-left: 1rem; */
  width: 100%;
  height: 100%;
  padding-left: 1rem;
  padding-bottom: 1rem;
}
.btnParaTop {
  width: auto;
  height: 17px;
  /* text4 */
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 130%;
  /* identical to box height, or 17px */
  /* border: 1px solid black; */
  letter-spacing: -0.01em;
  color: #ffffff;
}
.btnParaDown {
  width: auto;
  height: 24px;
  /* baslik4 */
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;
  /* border: 1px solid black; */
}

//tablet starts
@media only screen and (max-width: 1170px) {
  .bottomComponent {
    height: 290px;
  }
  .buttons {
    flex-direction: column;
    position: relative;
    top: 1rem;
    margin: 0;
  }
  .btn {
    margin-top: 1rem;
  }
}
@media only screen and (max-width: 950px) {
  .bottomComponent {
    height: 100%;
    // border: 2px solid red;
    margin: 0;
  }
  .container {
    height: 100%;

    flex-direction: column;
  }
  .frame {
    margin: 0;
    padding-top: 2rem;
  }
  .textGroup {
    // justify-content: center;
    // border: 2px solid red;
    // position: relative;
    // left: 3rem;
    // margin-top: 1rem;
    width: auto;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
  }
  .blueText {
    width: auto;
  }
  .orangeText {
    width: auto;
  }
  .arrow {
    display: none;
  }
  .buttons {
    flex-direction: row;
    position: relative;
    padding-bottom: 2rem;
  }
  .btn {
    // margin-top: 1rem;
  }
}
//mobile starts
@media only screen and (max-width: 470px) {
  .frame {
    margin: 0;
    padding-top: 4rem;
  }
  .buttons {
    flex-direction: column;
  }
}
</style>
