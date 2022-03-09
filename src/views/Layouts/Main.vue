<template>
  <div class="main-container col-md-12 col-lg-8 col-xl-8 col-xxl-9">
    <!-- somehow, this is the section slot in master -->
    <div class="row d-flex justify-content-evenly">
      <div
        class="col-sm-12 col-md-6 col-lg-6 col-xxl-3"
        v-for="(item, key) in cards"
        :key="key"
      >
        <TopCards
          :title="item.title"
          :url="item.url"
          :src="item.src"
          :class="item.color"
          class="mb-4"
        />
      </div>
    </div>

    <Appointments
      v-for="(item, key) in appointments"
      :price="item.price"
      :key="key"
      :hospital-data="item.hospital"
      :doctor-data="item.doctor"
      :date="item.date"
      :type="item.type"
    />

    <!-- component buraya gelecek -->

    <Muayeneler
      v-for="(item, key) in muayeneler"
      :firstboxData="item.firstBox"
      :getDate="item.getDate"
      :key="key"
    />
  </div>
</template>

<script setup>
import TopCards from "../../components/UI/TopCards.vue";
import Appointments from "../../components/UI/Appointments/Appointments.vue";
import blueLogo from "../../assets/img/cards/blue.svg";
import orangeLogo from "../../assets/img/cards/orange.svg";
import purpleLogo from "../../assets/img/cards/purple.svg";
import greenlogo from "../../assets/img/cards/green.svg";
import doktorImg from "../../assets/demo-data/doctor.png";
import Muayeneler from "../../components/UI/muayeneler/Muayeneler.vue";

import { ref } from "vue";
const cards = ref([
  {
    src: blueLogo,
    title: "Hastane Randevusu Alın",
    url: {},
    color: "blue",
  },
  {
    src: orangeLogo,
    title: "Görüntülü Görüşme Randevusu Alın",
    url: {},
    color: "orange",
  },
  {
    src: purpleLogo,
    title: "Check-Up Başvurusu Yapın",
    url: {},
    color: "purple",
  },
  {
    src: greenlogo,
    title: "Destek Merkezi",
    url: {},
    color: "green",
  },
]);
const muayeneler = ref([
  {
    firstBox: {
      getDate: "20 OCAK 2021 - 12:30",
      getLocation: "Ataşehir Tıp Merkezi",
    },
  },
]);
const appointments = ref([
  {
    hospital: {
      title: "Ataşehir Tıp Merkezi",
      subTitle: "Ataşehir Tıp Merkezi",
    },
    doctor: {
      title: "Prof. Dr. Mehmet Ali Tahaoğlu",
      branch: "Gögüs Hastalıkları",
      img: doktorImg,
    },
    date: "20 Ocak Pazartesi - 12:30",
    type: 1,
  },
  {
    hospital: {
      title: "Ataşehir Tıp Merkezi",
      subTitle: "Ataşehir Tıp Merkezi",
    },
    doctor: {
      title: "Prof. Dr. Mehmet Ali Tahaoğlu",
      branch: "Gögüs Hastalıkları",
      img: doktorImg,
    },
    date: "20 Ocak Pazartesi - 12:30",
    type: 2,
    price: 241,
  },
  {
    hospital: {
      title: "Ataşehir Tıp Merkezi",
      subTitle: "Ataşehir Tıp Merkezi",
    },
    doctor: {
      title: "Prof. Dr. Mehmet Ali Tahaoğlu",
      branch: "Gögüs Hastalıkları",
      img: doktorImg,
    },
    date: "20 Ocak Pazartesi - 12:30",
    type: 3,
  },
]);
</script>

<style scoped lang="scss">
@import "../../assets/scss/style";
.main-container {
  height: auto;
  background: $main;
  border-top-right-radius: 18px;
  border-bottom-right-radius: 18px;
  padding: 30px;
}

@media only screen and (max-width: 992px) {
  .main-container {
    border-top-right-radius: 0px;
  }
}
</style>
