<template>
  <div class="body">
    <div class="top d-flex justify-content-between align-items-center">
      <div class="title">Eşim için profil oluştur</div>
      <img :src="close" alt="" />
    </div>
    <div class="columns d-flex flex-column">
      <div class="tcPart d-flex flex-row justify-content-between">
        <input type="text" class="uyruk item" placeholder="Uyruk" />
        <input
          type="text"
          class="tcNo item"
          placeholder="T.C. Kimlik Numarası"
        />
      </div>
      <input type="text" class="card item" placeholder="İsim" />
      <input type="text" class="card item" placeholder="Soyisim" />
      <input type="text" class="card item" placeholder="Doğum Tarihi" />
      <select name="card" class="card item">
        <option value="Cinsiyet" class="optionItem" disabled selected hidden>
          Cinsiyet
        </option>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
      </select>
      <select name="card" class="card item">
        <option value="Ülke" class="optionItem" disabled selected hidden>
          Ülke
        </option>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
      </select>
      <select name="card" class="card item">
        <option value="Şehir" class="optionItem" disabled selected hidden>
          Şehir
        </option>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
      </select>
      <select name="card" class="card item">
        <option value="İlçe" class="optionItem" disabled selected hidden>
          İlçe
        </option>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
      </select>
      <div class="buttonContainer d-flex justify-content-center">
        <button @click="handleButton" class="button">
          <span class="buttonText">+ Yeni Profil Ekle</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import close from "../../../assets/img/profil/close.svg";
</script>

<style scoped lang="scss">
.body {
  width: 470px;
  height: 750px;
  background: #e9f3f9;
  border-radius: 16px;
  padding: 35px 25px;
  margin-top: 5rem;
}

.title {
  // width: 198px;
  // height: 52px;
  font-family: "Nunito Sans" !important;
  font-style: normal !important;
  font-weight: 700 !important;
  font-size: 20px !important;
  line-height: 130% !important;
  letter-spacing: -0.01em !important;
  color: #3c4e69;
}
.item {
  background: #ffffff;
  /* Form Shadow */

  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.03);
  border-radius: 6px;
  border: none;
  padding-left: 15px;
}
.top {
  margin-bottom: 30px;
}
.tcPart {
  margin-bottom: 17px;
}
.uyruk {
  width: 70px;
  height: 56px;
}
.tcNo {
  width: 310px;
  height: 56px;
}
.card {
  width: 100%;
  height: 56px;
  padding-top: 15px;
}

//this doesn't work
.optionItem {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  /* identical to box height, or 16px */

  letter-spacing: -0.01em;

  /* Gri */

  color: red !important;
  border: 2px solid red !important;
}

.buttonContainer {
  width: 100%;
}
.button {
  padding: 12px 20px 11px;
  width: 100%;
  height: 50px;
  background: #ff8038;
  border-radius: 6px;
  border: none;
}
.buttonText {
  /* buton-text-orta */

  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 110%;
  /* identical to box height, or 18px */

  /* Beyaz */

  color: #ffffff;
}
//style the select tags
select {
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
}
@media only screen and (max-width: 600px) {
  .body {
    width: 85vw;
  }
  .tcPart {
    display: flex;
    flex-direction: column !important;
  }
  .item {
    width: auto;
    // margin-right: 2rem;
  }
  .uyruk {
    margin-bottom: 1rem;
  }
}
</style>
