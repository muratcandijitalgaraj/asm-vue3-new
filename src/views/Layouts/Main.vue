<template>
  <!-- redo this component and use slots instead -->
  <div class="main-container col-md-12 col-lg-8 col-xl-8 col-xxl-9">
    <!-- somehow, this is the section slot in master -->
    <div class="row d-flex justify-content-evenly">
      <div
        class="col-sm-12 col-md-6 col-lg-6 col-xxl-3"
        v-for="(item, key) in cards"
        :key="key"
      >
        <TopCards
          v-if="showCards"
          :title="item.title"
          :url="item.url"
          :src="item.src"
          :class="item.color"
          class="mb-4"
        />
      </div>
    </div>

    <div v-if="dashboardGreyline" class="greyLine"></div>
    <div v-if="randevularimTopPart">
      <TopPart />
    </div>
    <div v-if="randevularGreyLine" class="greyLine randevularGreyLine"></div>

    <!-- titles here -->
    <div
      v-if="showAppointmentstitle"
      class="titles d-flex justify-content-between align-items-center"
    >
      <span class="bigTitle">Randevularınız</span>
      <span class="smallTitle">Hepsini Göster</span>
    </div>

    <!-- titles ends -->
    <div v-if="showAppointments">
      <Appointments
        v-for="(item, key) in appointments"
        :price="item.price"
        :key="key"
        :hospital-data="item.hospital"
        :doctor-data="item.doctor"
        :date="item.date"
        :type="item.type"
      />
    </div>

    <!-- titles here -->
    <div
      v-if="showMuayeneTitle"
      class="titles d-flex justify-content-between align-items-center"
    >
      <span class="bigTitle">Son Muayeneler</span>
      <span class="smallTitle">Hepsini Göster</span>
    </div>
    <!-- titles ends -->

    <!-- adding a wrapper div as v-if and v-for shouldn't be used together -->
    <div v-if="showMuayeneler">
      <Muayeneler
        v-for="(item, key) in muayeneler"
        :firstboxData="item.firstBox"
        :doctor-data="item.doctor"
        :key="key"
      />
    </div>
    <!-- randevu detay component -->
    <div v-if="showRandevudetay">
      <RandevuDetay />
    </div>
    <div v-if="showRandevularBos">
      <randevularBos />
    </div>
    <!-- Tıbbi Kayıt ve Sonuçlar section -->
    <!-- Radyoloji -->
    <div v-if="showRadyoloji">
      <RadyolojiVue />
    </div>
    <!-- diğer  -->
    <div v-if="showDiger">
      <Diger />
    </div>
    <!-- reçeteler -->
    <div v-if="showReceteler">
      <RecetelerVue />
    </div>
    <!-- <div v-if="showAkis">
      <RandevuAkis />
    </div> -->
    <!-- bildirimler -->
    <div v-if="showNotifications">
      <Detay />
    </div>
  </div>
</template>

<script setup>
import TopCards from "../../components/UI/TopCards.vue";
import TopPart from "../../components/randvularimPage/TopPart.vue";
import Appointments from "../../components/UI/Appointments/Appointments.vue";
import blueLogo from "../../assets/img/cards/blue.svg";
import orangeLogo from "../../assets/img/cards/orange.svg";
import purpleLogo from "../../assets/img/cards/purple.svg";
import greenlogo from "../../assets/img/cards/green.svg";
import doktorImg from "../../assets/demo-data/doctor.png";
import Muayeneler from "../../components/UI/muayeneler/Muayeneler.vue";
import RandevuDetay from "../../components/randvularimPage/detay/Main.vue";
import randevularBos from "../../components/randvularimPage/RandevuEmpty/Randevularim-bos.vue";
//tıbbi kayıtlar ve sonuçlar
import RadyolojiVue from "../../components/tıbbi-kayıtlar/radyoloji/Radyoloji.vue";
import Diger from "../../components/tıbbi-kayıtlar/radyoloji/Radyoloji.vue";
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";
//reçeteler
import RecetelerVue from "../../components/receteler/Receteler.vue";
//randevu akış
// import RandevuAkis from "../../components/randevuAkis/Main.vue";
//bildirimler
import Detay from "../../components/bildirimler/Detay.vue";

//in this part, we show/hide elements regarding routing
const route = useRoute();

//show/hide Cards according to routing
let showCards = false;

// alert(`current route name on component setup init: ${route.name}`);
if (route.name === "Dashboard") {
  showCards = true;
}
//show/hide randevular title regarding routing
let showAppointmentstitle = false;
if (route.name === "Dashboard") {
  showAppointmentstitle = true;
}

//show hide appointments only in anasayfa and randevular routes
let showAppointments = false;
if (route.name === "Randevularim" || route.name === "Dashboard") {
  showAppointments = true;
}

//do these grey lines due to earlier CSS decisions

//show/hide greyline for dashboard
let dashboardGreyline = false;
if (route.name === "Dashboard") {
  dashboardGreyline = true;
}

//show/hide randevularim top part
let randevularimTopPart = false;
if (route.name === "Randevularim") {
  randevularimTopPart = true;
} else if (route.name === "RandevularEmpty") {
  randevularimTopPart = true;
}

//show/hide greyline for randevular page

let randevularGreyLine = false;
if (route.name === "Randevularim") {
  randevularGreyLine = true;
} else if (route.name === "RandevularEmpty") {
  randevularGreyLine = true;
}

//show/hide muayene title regarding routing
let showMuayeneTitle = false;
if (route.name === "Dashboard") {
  showMuayeneTitle = true;
}

//show/hide muayeneler regarding routing
let showMuayeneler = false;
if (route.name === "Dashboard") {
  showMuayeneler = true;
}

//show/hide randevu detay regarding routing
let showRandevudetay = false;
if (route.name === "RandevuDetay") {
  showRandevudetay = true;
}

//show/hide randevular bos
let showRandevularBos = false;
if (route.name === "RandevularEmpty") {
  showRandevularBos = true;
}

//show/hide bildirimler detay
let showNotifications = false;
if (route.name === "BildirimlerDetay") {
  showNotifications = true;
}

//TIBBİ KAYIT VE SONUÇLAR SECTION
//radyoloji section
let showRadyoloji = false;
if (route.name === "Radyoloji") {
  showRadyoloji = true;
}
//diger section
let showDiger = false;
if (route.name === "Diger") {
  showDiger = true;
}
//receteler section
let showReceteler = false;
if (route.name === "Receteler") {
  showReceteler = true;
}
//randevu akışı
// let showAkis = false;
// if (route.name === "RandevuAkis") {
//   showAkis = true;
// }

// You could use computed property which re-evaluates on route name updates
//export const routeName = computed(() => route.name);

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
    doctor: {
      title: "Prof. Dr. Mehmet Ali Tahaoğlu",
      branch: "Gögüs Hastalıkları",
      img: doktorImg,
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

  .greyLine {
    height: 1px;
    background: $border;
  }
  .randevularGreyLine {
    margin-bottom: 25px;
    margin-top: 20px;
  }
  .titles {
    margin-top: 22px;
    margin-bottom: 20px;
  }
  .bigTitle {
    /* baslik3 */
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 130%;
    /* identical to box height, or 29px */
    /* Secondary */
    color: $blue;
  }
  .smallTitle {
    /* text4-bold */
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 130%;
    /* identical to box height, or 17px */
    letter-spacing: -0.01em;
    /* Gri */
    color: $text-grey;
  }
}

@media only screen and (max-width: 992px) {
  .main-container {
    border-top-right-radius: 0px;
  }
}
</style>
