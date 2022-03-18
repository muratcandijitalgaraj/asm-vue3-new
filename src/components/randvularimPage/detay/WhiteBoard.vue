<template>
  <div class="whiteBoard">
    <div class="container">
      <div class="row">
        <div class="col-12 infoCard">
          <!-- paracolor is not dynamic right now -->
          <InfoVue
            :src="infoDetails.src"
            :para="infoDetails.para"
            :color="infoDetails.color"
            :paraColor="infoDetails.paraColor"
          />
        </div>
        <div class="col-12 doktorCard">
          <DoktorVue
            :src="doktorDetails.src"
            :title="doktorDetails.title"
            :para="doktorDetails.para"
            :logoSrc="doktorDetails.logoSrc"
            :redPara="doktorDetails.redPara"
            :doktorPara="doktorDetails.doktorPara"
          />
        </div>
        <div class="greyLine"></div>
        <div class="col-12">
          <Cards
            v-for="(item, key) in cards"
            :key="key"
            :src="item.src"
            :para="item.para"
            :title="item.title"
            :type="item.type"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import logo from "../../../assets/img/appointments/detay/calendar-1.svg";
import doktorImg from "../../../assets/img/appointments/detay/foto.svg";
import noteImg from "../../../assets/img/appointments/detay/message.svg";
import InfoVue from "../../UI/RandevuDetay/Info.vue";
import DoktorVue from "../../UI/RandevuDetay/Doktor.vue";
import Cards from "../../UI/RandevuDetay/Cards.vue";
import sikayet from "../../../assets/img/appointments/detay/sikayet.svg";
import randevu from "../../../assets/img/appointments/detay/randevu.svg";
import tarih from "../../../assets/img/appointments/detay/tarih.svg";
import user from "../../../assets/img/appointments/detay/user.svg";

const props = defineProps({
  src: { required: true, type: String },
  para: { required: true, type: String },
  color: { required: true, type: String },
  paraColor: { required: true, type: String },
  title: { required: true, type: String },
  logoSrc: { required: true, type: String },
  redPara: { required: true, type: String },
  doktorPara: { required: true, type: String },
  type: { required: true, type: Number },
});

const infoDetails = {
  src: logo,
  para: "Görüşme Bekleniyor...",
  color: "redBackground",
  paraColor: "paraColor",
};

const doktorDetails = {
  src: doktorImg,
  title: "Prof. Dr. Mehmet Ali Tahaoğlu",
  para: "Göğüs Hastalıkları",
  logoSrc: noteImg,
  redPara: "Doktorun Notu",
  doktorPara: "Lütfen muayeneye aç karnına gelin.",
};

const cards = ref([
  {
    src: user,
    para: "Kim için",
    title: "Mehmet Balkan",
    type: 1,
  },
  {
    src: tarih,
    para: "Tarih",
    title: "14 Ağustos 2020 - Pazartesi 15:30",
    type: 1,
  },
  {
    src: randevu,
    para: "Randevu Türü",
    title: "Ataşehir Tıp Merkezi",
    type: 1,
  },
  {
    src: user,
    para: "Şikayet",
    title:
      "Gögüs boşlugumda ara ara ağrılar hissediyorum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
  },
]);
</script>

<style scoped lang="scss">
@import "../../../assets/scss/style";
.whiteBoard {
  width: auto;
  height: auto;
  background: $white;
  box-shadow: 0px 1px 3px rgba(42, 49, 55, 0.11);
  border-radius: 10px;
  padding-top: 15px;
}
.redBackground {
  background-color: #ffeeee;
  height: 50px;
}
// .paraColor {
//   color: red;
// }
.infoCard {
  margin-bottom: 22px;
}
.doktorCard {
  margin-left: 15px;
}
.greyLine {
  border: 1px solid #f3f3f3;
  margin: 15px 0;
}
</style>
