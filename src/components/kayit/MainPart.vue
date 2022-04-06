<template>
  <div class="mainKayitComponent">
    <div class="container">
      <div class="upperSection">
        <div class="title">Hesap Oluştur</div>

        <div class="sections">
          <!-- section 1 -->
          <div class="section" id="section-1">
            <div
              v-bind:class="{
                currentSection: oneIsCurrent,
                sectionOnHold: oneIsOnHold,
                checked: isChecked,
              }"
            >
              <div v-if="one" class="currentSection">1</div>
              <div v-if="!one" class="vectorContainer">
                <img
                  src="../../assets/img//kayit/vector.svg"
                  alt=""
                  class="sectionChecked"
                />
              </div>
            </div>
          </div>
          <img src="../../assets/img//kayit/dots.svg" alt="" class="dots" />
          <!-- section 2 -->
          <div class="section" id="section-2">
            <div v-if="two" class="currentSection">2</div>
            <div v-else-if="one" class="sectionOnHold">2</div>
            <div v-else class="vectorContainer">
              <img
                src="../../assets/img//kayit/vector.svg"
                alt=""
                class="sectionChecked"
              />
            </div>
          </div>
          <img src="../../assets/img//kayit/dots.svg" alt="" class="dots" />
          <!-- section 3 -->
          <div class="section" id="section-3">
            <div v-if="three" class="currentSection">3</div>
            <div v-else-if="one" class="sectionOnHold">3</div>
            <div v-else-if="two" class="sectionOnHold">3</div>
            <div v-else class="vectorContainer">
              <img
                src="../../assets/img//kayit/vector.svg"
                alt=""
                class="sectionChecked"
              />
            </div>
            <!-- <div class="sectionOnHold">3</div> -->
          </div>
          <img src="../../assets/img//kayit/dots.svg" alt="" class="dots" />
          <!-- section 4 -->
          <div class="section" id="section-4">
            <div v-if="four" class="currentSection">4</div>
            <div v-else-if="one" class="sectionOnHold">4</div>
            <div v-else-if="two" class="sectionOnHold">4</div>
            <div v-else-if="three" class="sectionOnHold">4</div>
            <div v-else class="vectorContainer">
              <img
                src="../../assets/img//kayit/vector.svg"
                alt=""
                class="sectionChecked"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- ONE -->
      <div v-if="one" class="ONE">
        <!-- box -->
        <form class="box">
          <input
            v-model="ePosta"
            placeholder="E-posta"
            type="text"
            class="input"
          />
          <input
            v-model="sifre"
            placeholder="Şifreniz"
            type="password"
            class="input"
          />
          <input
            v-model="sifreRepeated"
            placeholder="Şifreniz (tekrar)"
            type="password"
            class="input"
          />
          <button @click="buttonOne" id="buttonOne" class="button">
            <span class="buttonText">Devam</span>
          </button>
          <!-- <input v-model="message" placeholder="add multiple lines"></input> -->
        </form>
      </div>

      <!-- TWO -->
      <div v-if="two" class="TWO">
        <form action="" class="box">
          <div class="nationalityPart">
            <select class="uyruk" name="" id="">
              <option class="optionValue" value="Uyruk">Uyruk</option>
              <option class="optionValue" value="saab">Saab</option>
              <option class="optionValue" value="opel">Opel</option>
              <option class="optionValue" value="audi">Audi</option>
            </select>
            <input
              placeholder="T.C. Kimlik Numarası"
              type="text"
              class="tcNo"
            />
          </div>
          <input placeholder="İsim" type="text" class="input" />
          <input placeholder="Soyisim" type="text" class="input" />
          <!--///////// DATE PICKER HERE ///////////////////////////// -->
          <Datepicker
            placeholder="Doğum Tarihi (GG/AA/YYYY)"
            class="picker"
            v-model="date"
            :format="format"
            autoApply
            :closeOnAutoApply="false"
            locale="tr"
            :autoPosition="false"
            :startDate="startDate"
          />

          <select class="dropDownSelect" name=" " id=" ">
            <option class="optionValue" value="">Cinsiyet</option>
            <option class="optionValue" value="dog">Erkek</option>
            <option class="optionValue" value="cat">Kadın</option>
          </select>
          <button @click="buttonTwo" id="buttonTwo" class="button">
            <span class="buttonText">Devam</span>
          </button>
        </form>
      </div>

      <!-- THREE -->
      <div v-if="three" class="THREE">
        <form action="" class="box">
          <select class="dropDownSelect" name=" " id=" ">
            <option class="optionValue" value="">Ülke</option>
            <option class="optionValue" value="dog">Dog</option>
            <option class="optionValue" value="cat">Cat</option>
          </select>
          <select class="dropDownSelect" name=" " id=" ">
            <option class="optionValue" value="">Şehir</option>
            <option class="optionValue" value="dog">Dog</option>
            <option class="optionValue" value="cat">Cat</option>
          </select>
          <select class="dropDownSelect" name=" " id=" ">
            <option class="optionValue" value="">İlçe</option>
            <option class="optionValue" value="dog">Dog</option>
            <option class="optionValue" value="cat">Cat</option>
          </select>
          <button @click="buttonThree" id="buttonThree" class="button">
            <span class="buttonText">Devam</span>
          </button>
        </form>
      </div>
      <!-- FOUR -->
      <div v-if="four" class="FOUR">
        <form action="" class="box">
          <div @click="ppUpload" class="profilFotoContainer">
            <div class="uploadImageGroupContainer">
              <img
                src="../../assets/img//kayit/ppGroup.svg"
                alt=""
                class="uploadImageGroup"
              />
            </div>
            <div class="fileInputContainer">
              <img
                src="../../assets/img//kayit/ppUpload.svg"
                alt=""
                class="ppUploadLogo"
              />
              <div class="fileUploadPara">Profil Fotoğrafını Değiştir</div>
              <!-- this is hidden -->
              <input
                type="file"
                accept="image/png, image/jpeg"
                class="fileInput"
                ref="fileInput"
              />
            </div>
          </div>
          <!-- <select class="dropDownSelect" name=" " id=" ">
            <option class="optionValue" value="">Ülke</option>
            <option class="optionValue" value="dog">Dog</option>
            <option class="optionValue" value="cat">Cat</option>
          </select> -->

          <input placeholder="Kilo" type="number" min="10" max="1000" />
          <input placeholder="Boy (cm)" type="number" min="10" max="1000" />

          <select class="dropDownSelect" name=" " id=" ">
            <option class="optionValue" disabled value="">Kan Grubu</option>
            <option class="optionValue">0+</option>
            <option class="optionValue">0-</option>
            <option class="optionValue">A+</option>
            <option class="optionValue">A-</option>
            <option class="optionValue">B+</option>
            <option class="optionValue">B-</option>
            <option class="optionValue">AB+</option>
            <option class="optionValue">AB-</option>
          </select>
          <button @click="buttonThree" id="buttonThree" class="button">
            <span class="buttonText">Devam</span>
          </button>
          <button class="skipStep">Bu Adımı Atla</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Datepicker from "vue3-date-time-picker";
import "vue3-date-time-picker/dist/main.css";
export default {
  components: { Datepicker },
  setup() {
    const date = ref();

    const format = (date) => {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return `${day}/${month}/${year}`;
    };
    const startDate = ref(new Date(1985, 1));

    return {
      date,
      format,
      startDate,
    };
  },
  data() {
    return {
      one: true,
      two: false,
      three: false,
      four: false,
      //toggle
      oneIsCurrent: true,
      oneIsOnHold: false,
      isChecked: false,
      //date
      // date: null,
      //user inputs
      //section One
      ePosta: "",
      sifre: "",
      sifreRepeated: "",
    };
  },
  methods: {
    buttonOne: function (e) {
      e.preventDefault();
      this.one = false;
      this.two = true;
      //toggle
      this.oneIsCurrent = false;
      this.isChecked = true;
    },
    buttonTwo: function (e) {
      e.preventDefault();
      this.two = false;
      this.three = true;
    },
    buttonThree: function (e) {
      e.preventDefault();
      this.three = false;
      this.four = true;
    },
    ppUpload: function () {
      this.$refs.fileInput.click();
    },
  },
};
</script>

<style>
.mainKayitComponent {
  position: relative;
  bottom: 12rem;
  height: 423px;
  /* width: 468px; */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
}
.container {
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.upperSection {
  width: auto;
  height: 5.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 53px;
  padding: 0;
}
.sections {
}
.ONE {
  width: 468px;
  height: 400px;
  /* display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center; */
}
.title {
  width: 146px;
  height: 29px;

  /* baslik3 */

  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 130%;
  /* identical to box height, or 29px */

  text-align: center;

  /* Beyaz */

  color: #ffffff;
  margin-bottom: 18px;
}
.sections {
  width: auto;
  height: 25px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.dots {
  height: 3px;
  width: 21px;
  border-radius: 0px;
  margin-right: 9px;
}
.section {
  height: 23px;
  width: 23px;
  border-radius: 0px;
  margin-right: 8px;
}
#section-1 {
}
.currentSection {
  width: 25px;
  height: 25px;

  /* Primary */

  background: #3c4e69;
  /* Form Shadow */

  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.03);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  /* text4-bold */

  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
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
.sectionOnHold {
  color: #3c4e69;
  border: 1.5px solid #3c4e69;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* .sectionNumber {
  display: none;
} */
.vectorContainer {
  height: 23px;
  width: 23px;
  background: #ff8038;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sectionChecked {
  height: 8px;
  width: 11px;
}
/* .checked {
  height: 100%;
  width: 100%;
  background-color: orange;
} */
.box {
  height: 423px;
  width: 468px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
input {
  width: 468px;
  height: 60px;

  background: #ffffff;

  border-radius: 6px;
  margin-bottom: 20px;
  border: none;

  /* form-baslik */
  /* form-text */

  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 100%;
  /* identical to box height, or 16px */
  /* Primary */
  color: #3c4e69;
}

.picker {
  width: 468px;
  height: 60px;
  background: #ffffff;

  border-radius: 6px;
  margin-bottom: 20px;
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 100%;
  /* identical to box height, or 16px */
  /* Primary */
  color: #3c4e69;
}
.dp__pointer,
.dp__input,
.dp__input_icon_pad {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 100%;
  /* identical to box height, or 16px */
  /* Primary */
  color: #3c4e69;
  border: none !important;
  padding: 0 12px 0 35px;
}
.dp__icon,
.dp__input_icon,
.dp__input_icons {
  /* border: 2px solid red; */
  padding-bottom: 1.8rem;
}
/* to style the placeholder separately from the input text */
input::placeholder {
  /* form-baslik */
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 100%;
  /* identical to box height, or 16px */
  letter-spacing: -0.01em;
  /* Gri */
  color: #818b9a;
  padding-left: 15px;
  padding-bottom: 5px;
}

.button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 20px 11px;
  width: 468px;
  height: 50px;
  /* Turuncu */
  background: #ff8038;
  border-radius: 6px;
  border: none;
}
.buttonText {
  width: 53px;
  height: 18px;
  /* buton-text-orta */
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 110%;
  /* identical to box height, or 18px */
  display: flex;
  align-items: center;
  text-align: center;
  /* Beyaz */
  color: #ffffff;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 10px;
}
#buttonOne {
}

.Two {
  display: flex;
}
.nationalityPart {
  height: auto;
  width: auto;
  display: flex;
  flex-direction: row;
  /* justify-content: center;
  align-items: center; */
}
.uyruk {
  width: 100px;
  height: 60px;
  background: #ffffff;

  border-radius: 6px;
  margin-bottom: 20px;
  border: none;

  /* form-baslik */
  /* form-text */

  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 100%;
  /* identical to box height, or 16px */
  /* Primary */

  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 100%;
  /* identical to box height, or 16px */
  letter-spacing: -0.01em;
  /* Gri */
  color: #818b9a;
  margin-right: 20px;
  padding-left: 1.3rem;
}

.tcNo {
  height: 60px;
  width: 348px;

  border-radius: 6px;
}
.dropDownSelect {
  width: 468px;
  height: 60px;

  background: #ffffff;

  border-radius: 6px;
  margin-bottom: 20px;
  border: none;

  /* form-baslik */
  /* form-text */

  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 100%;
  /* identical to box height, or 16px */
  /* Primary */

  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 100%;
  /* identical to box height, or 16px */
  letter-spacing: -0.01em;
  /* Gri */
  color: #818b9a;
}

.skipStep {
  /* baslik-alt2 */

  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 130%;
  /* identical to box height, or 26px */

  text-align: center;
  letter-spacing: -0.01em;

  /* Turuncu */

  color: #ff8038;
  border: none;
  background: #e9f3f9;
  margin-top: 35px;
}

.dropDownSelect {
  padding-left: 15px;
}
.profilFotoContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 160px;
  position: absolute;
  /* bottom: 12rem; */
  top: 4.5rem;
  border-radius: 50%;
}
.uploadImageGroupContainer {
  position: relative;
  height: 160px;
  width: 160px;
  border-radius: 0px;
  /* display: none; */
  z-index: 0;
  top: 4rem;
}
.uploadImageGroup {
  width: auto;
  height: auto;
}
.fileInputContainer {
  width: 220px;
  height: 36px;
  background: #ffffff;
  box-shadow: 0px 1px 4px #e3ebee;
  border-radius: 60px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 55px;
  position: relative;
  z-index: 1;
}
.fileInput {
  width: 10px;
  height: 36px;

  /* opacity: 0; */
  display: none;
}
.ppUploadLogo {
  height: 50px;
  width: 20px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 0px;
}
.fileUploadPara {
  width: 100%;
  height: 21px;

  /* text3 */

  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 140%;
  /* identical to box height, or 21px */

  letter-spacing: -0.01em;

  /* Primary */
  color: #3c4e69;
}
.FOUR {
  margin-top: 145px;
}
::placeholder {
  /* form-baslik */

  font-family: Nunito Sans !important;
  font-style: normal !important;
  font-weight: normal !important;
  font-size: 16px !important;
  line-height: 100% !important;
  /* identical to box height, or 16px */

  letter-spacing: -0.01em !important;

  /* Gri */

  color: #818b9a !important;
}
/* for some reason, datepicker's color doesn't follow the other colors
so I had to fix it by choosing a color by hand */
.dp__input::placeholder {
  color: #575d66 !important;
}
.dp__button,
.dp__button_bottom {
  display: none;
}

@media only screen and (max-width: 550px) {
  input {
    /* height: 100%; */
    width: 325px;
  }
  .picker {
    width: 325px;
  }

  .button {
    width: 325px;
  }
  .uyruk {
    width: 100px;
    height: 60px;
  }
  .tcNo {
    height: 60px;
    width: 200px;
  }
  .dropDownSelect {
    width: 325px;
    /* height: 60px; */
  }
}
</style>
