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
  date: { required: true, type: String },
  department: { required: true, type: String },
  title: { required: true, type: String },
  locationStyle: { required: true, type: String },
  location: { required: true, type: String },
});

const cards = ref([{}]);
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
.blueTitle {
  color: #32a5df;
  margin-top: 40px;
  margin-bottom: 20px;
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
</style>
