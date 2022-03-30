<template>
  <div class="row body">
    <div class="col-12 col-lg-7 left">
      <Left @insertProp="writeLeftProp" @insertDoctorProp="writeDoctorProp" />
    </div>

    <div class="col-12 col-lg-5 right d-flex flex-column align-items-center">
      <span class="title">Seçimleriniz</span>

      <Right
        v-for="(item, key) in choices"
        :key="key"
        :para="item.para"
        :logo="item.logo"
        :color="item.color"
      />
    </div>
  </div>
</template>

<script setup>
import orangeLogo from "../../../assets/img/randevuAkis/video.svg";
import blackLogo from "../../../assets/img/randevuAkis/user.svg";
import purpleLogo from "../../../assets/img/randevuAkis/secim.svg";
import blueLogo from "../../../assets/img/randevuAkis/doktorLogo.svg";
import greenLogo from "../../../assets/img/randevuAkis/calendar.svg";

import { ref } from "vue";
import Left from "./Left.vue";
import Right from "./Right.vue";

let leftPropToWrite = ref();
let doctorPropToWrite = ref();
let bgcolorLeft = ref();
let bgcolorDoctor = ref();
const writeLeftProp = (value) => {
  console.log(`new ${value}`);
  leftPropToWrite.value = value;
  bgcolorLeft.value = "purple";
};
const writeDoctorProp = (value) => {
  console.log(`new ${value}`);
  doctorPropToWrite.value = value;
  bgcolorDoctor.value = "blue";
};

const choices = ref([
  {
    para: "Görüntülü Görüşme",
    logo: orangeLogo,
    color: "orange",
  },
  {
    para: "Mehmet Yılmaz için",
    logo: blackLogo,
    color: "black",
  },
  {
    para: leftPropToWrite,
    logo: purpleLogo,
    color: bgcolorLeft,
  },
  {
    para: doctorPropToWrite,
    logo: blueLogo,
    color: bgcolorDoctor,
  },
]);
</script>

<style scoped lang="scss">
.body {
}
.title {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 130%;
  /* identical to box height, or 22px */

  letter-spacing: -0.01em;

  /* Turuncu */
  margin-bottom: 21px;
  margin-top: 30px;

  color: #ff8038;
}
</style>
