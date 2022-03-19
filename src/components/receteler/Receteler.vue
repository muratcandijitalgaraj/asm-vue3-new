<template>
  <div class="receteler d-flex flex-column">
    <div class="bigTitle">Reçeteler</div>
    <div class="greyLine"></div>
    <TopVue />
    <span class="bigTitle blueTitle"> 2 Ağustos Pazartesi </span>

    <CardsVue
      v-for="(item, key) in cards"
      :key="key"
      :background="item.background"
      :logo="item.logo"
      :receteType="item.receteType"
      :color="item.color"
      :titleStyle="item.titleStyle"
      :date="item.date"
      :department="item.department"
      :title="item.title"
      :locationStyle="item.locationStyle"
      :location="item.location"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import TopVue from "../UI/receteler/Top.vue";
import CardsVue from "../UI/receteler/Cards.vue";
import normal from "../../assets/img/receteler/normal.svg";
import glass from "../../assets/img/receteler/glass.svg";
import red from "../../assets/img/receteler/red.svg";
import orange from "../../assets/img/receteler/orange.svg";
import purple from "../../assets/img/receteler/purple.svg";
import green from "../../assets/img/receteler/green.svg";

const props = defineProps({
  background: { required: true, type: String },
  logo: { required: true, type: String },
  receteType: { required: true, type: String },
  color: { required: true, type: String },
  titleStyle: { required: true, type: String },
  no: { required: true, type: String },
  department: { required: true, type: String },
  title: { required: true, type: String },
  locationStyle: { required: true, type: String },
  location: { required: true, type: String },
});

const cards = ref([
  {
    background: "greybg",
    // logo: normal,
    receteType: "NORMAL REÇETE",
    // color: grey,
    // titleStyle: title,
    no: "No: 90 04A 078",
    department: "Kardiyoloji",
    title: "Dr. Emre Sürmeli",
    // locationStyle: locationStyle,
    location: "Anadolu Sağlık Merkezi - Gebze",
  },
]);
</script>

<style scoped lang="scss">
// @import "../../assets/scss/style";
.bigTitle {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 130%;
  color: #3c4e69;
  margin-bottom: 25px;
}
.title {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  /* Primary */

  color: #3c4e69;
}
.blueTitle {
  color: #32a5df;
  margin-top: 40px;
  margin-bottom: 20px;
}
.locationStyle {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
  /* identical to box height, or 21px */

  letter-spacing: -0.01em;

  /* Gri */

  color: #818b9a;
}
.greyLine {
  border: 1px solid #dae9f1;
}
.greybg {
  background: #f7f7f7;
  border-radius: 5px;
}
.redbg {
  background: #ffeeee;
  border-radius: 5px;
}
.orangebg {
  background: #fff9f0;
  border-radius: 5px;
}
.purplebg {
  background: #f7f6ff;
  border-radius: 5px;
}
.greenbg {
  background: #e0fff0;
  border-radius: 5px;
}
.grey {
  color: #3c4e69;
}
</style>
