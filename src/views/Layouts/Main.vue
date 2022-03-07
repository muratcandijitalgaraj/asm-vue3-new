<template>
  <div class="main-container col-md-12 col-lg-8 col-xl-8 col-xxl-9">
    <!-- somehow, this is the section slot in master -->
    <div class="row d-flex justify-content-evenly">
      <div class="col-sm-12 col-md-6 col-lg-6 col-xxl-3" v-for="(item, key) in cards" :key="key">
        <TopCards
            :title="item.title"
            :url="item.url"
            :src="item.src"
            :class="item.color"
            class="mb-4"
        />
      </div>
    </div>

    <Appointments v-for="(item, key) in appointments" :key="key" :hospital-data="item.hospital" :doctor-data="item.doctor" :date="item.date" :type="item.type"/>

    <!-- component buraya gelecek -->
  </div>
</template>

<script setup>
import TopCards from "../../components/UI/TopCards.vue";
import Appointments from "../../components/UI/Appointments/Appointments.vue";

import { ref } from "vue";
const cards = ref([
  {
    src: "/src/assets/img/cards/blue.svg",
    title: "Hastane Randevusu Alın",
    url: {},
    color: "blue",
  },
  {
    src: "/src/assets/img/cards/orange.svg",
    title: "Görüntülü Görüşme Randevusu Alın",
    url: {},
    color: "orange",
  },
  {
    src: "/src/assets/img/cards/purple.svg",
    title: "Check-Up Başvurusu Yapın",
    url: {},
    color: "purple",
  },
  {
    src: "/src/assets/img/cards/green.svg",
    title: "Destek Merkezi",
    url: {},
    color: "green",
  },
]);
const appointments = ref([
    {
      hospital: {
        title: 'Ataşehir Tıp Merkezi',
        subTitle: 'Ataşehir Tıp Merkezi',
      },
      doctor: {
        title: 'Prof. Dr. Mehmet Ali Tahaoğlu',
        branch: 'Gögüs Hastalıkları',
        img: '/src/assets/demo-data/doctor.png'
      },
      date: "20 Ocak Pazartesi - 12:30",
      type: 1
    },
    {
      hospital: {
        title: 'Ataşehir Tıp Merkezi',
        subTitle: 'Ataşehir Tıp Merkezi',
      },
      doctor: {
        title: 'Prof. Dr. Mehmet Ali Tahaoğlu',
        branch: 'Gögüs Hastalıkları',
        img: '/src/assets/demo-data/doctor.png'
      },
      date: "20 Ocak Pazartesi - 12:30",
      type: 2
    },
    {
      hospital: {
        title: 'Ataşehir Tıp Merkezi',
        subTitle: 'Ataşehir Tıp Merkezi',
      },
      doctor: {
        title: 'Prof. Dr. Mehmet Ali Tahaoğlu',
        branch: 'Gögüs Hastalıkları',
        img: '/src/assets/demo-data/doctor.png'
      },
      date: "20 Ocak Pazartesi - 12:30",
      type: 3
    }
])
</script>

<style scoped lang="scss">
@import "../../assets/scss/style";
.main-container {
  height: 100%;
  background: $main;
  border-top-right-radius: 18px;
  border-bottom-right-radius: 18px;
  padding: 30px;
}

</style>
