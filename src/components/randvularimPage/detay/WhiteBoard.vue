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
      </div>
    </div>
  </div>
</template>

<script setup>
import logo from "../../../assets/img/appointments/detay/calendar-1.svg";
import doktorImg from "../../../assets/img/appointments/detay/foto.svg";
import noteImg from "../../../assets/img/appointments/detay/message.svg";
import InfoVue from "../../UI/RandevuDetay/Info.vue";
import DoktorVue from "../../UI/RandevuDetay/Doktor.vue";

const props = defineProps({
  src: { required: true, type: String },
  para: { required: true, type: String },
  color: { required: true, type: String },
  paraColor: { required: true, type: String },
  title: { required: true, type: String },
  logoSrc: { required: true, type: String },
  redPara: { required: true, type: String },
  doktorPara: { required: true, type: String },
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
</script>

<style scoped lang="scss">
@import "../../../assets/scss/style";
.whiteBoard {
  width: 915px;
  height: 665px;
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
