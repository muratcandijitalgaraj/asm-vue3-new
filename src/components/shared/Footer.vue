<template>
  <div class="footerComponent">
    <div class="container">
      <div class="flexContainer">
        <div class="logoPart">
          <div class="leftPart">
            <img
              src="../../assets/img/giris/logoGroup.svg"
              alt=""
              class="logoGroup"
            />
            <p class="footerPara">
              Anadolu Eğitim ve Sosyal Yardım Sağlık Tesisleri İktisadi
              İşletmesi, Vakıflar Kanunu’nun 26/1 maddesine göre tesis edilmiş
              bir vakıf işletmesidir.
            </p>
          </div>
          <div class="telefon">
            <img
              src="../../assets/img/giris/telefon.svg"
              alt=""
              class="telefonLogo"
            />
            <div class="telefonGroup">
              <div class="telefonText">
                Anadolu Grubu Danışma Hattı <br />
                <span class="telefonNo">+90 (262) 678 54 00</span>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright">Copyright © 2018 Anadolu Sağlık Merkezi</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footerComponent {
  /* overflow-x: hidden; */
  width: 100%;
  height: auto;
  background: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* margin-top: 20px; */
  /* padding: 0  */
  padding-left: 2rem;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  /* margin: 0; */
}
.container {
  width: 1250px;
  height: auto;
  /* align-self: flex-end; */
}
.flexContainer {
  /* display: flex;
  flex-direction: column; */
  width: auto;
}
.logoPart {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid #f4f4f4;
  width: auto;
  /* border: 1px solid black; */
}
.leftPart {
  display: flex;
}
.logoGroup {
  width: 238.21px;
  height: 40px;
  margin-right: 16px;
}
.footerPara {
  width: 446px;
  height: 34px;
  /* text4 */
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 130%;
  /* or 17px */
  letter-spacing: -0.01em;
  /* Gri */
  color: #818b9a;
}
.telefon {
  width: auto;
  /* justify-self: flex-end; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 5rem;
}
.telefonGroup {
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.telefonLogo {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}
.telefonText {
  width: 184px;
  height: 34px;
  /* text4 */
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 130%;
  /* or 17px */
  letter-spacing: -0.01em;
  /* Turuncu */
  color: #ff8038;
}
.telefonNo {
  width: 184px;
  height: 34px;
  /* text4 */
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 130%;
  /* or 17px */
  letter-spacing: -0.01em;
  /* Gri */
  color: #818b9a;
}
.copyright {
  width: 248px;
  height: 17px;
  /* text4 */
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 130%;
  /* identical to box height, or 17px */
  letter-spacing: -0.01em;
  /* Gri */
  color: #818b9a;
  margin-top: 16px;
}
/* tablet */
@media only screen and (max-width: 1300px) {
  .flexContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .logoPart {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 10px;
    border-bottom: 1px solid #f4f4f4;
  }
  .leftPart {
    margin-bottom: 1rem;
    width: auto;
  }
  .footerPara {
    width: 446px;
  }
}
@media only screen and (max-width: 770px) {
  .footerComponent {
    /* margin-top: 5rem; */
    /* max-width: 90%; */
  }
  .container {
    position: relative;
    right: 1.5rem;
  }
  .leftPart {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
/* @media only screen and (max-width: 666px) {
  .leftPart {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
} */
@media only screen and (max-width: 550px) {
  .footerPara {
    width: auto;
    margin-bottom: 2rem;
  }
}
</style>
