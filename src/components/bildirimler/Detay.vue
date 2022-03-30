<template>
  <div class="detay">
    <div
      class="titleContainer col-12 d-flex flex-column flex-lg-row align-items-center justify-content-enter justify-content-lg-between"
    >
      <span class="title">Bildirimler</span>
      <div
        class="deleteContainer d-flex justify-content-center align-items-center"
      >
        <span class="para">Hepsini Temizle</span>
        <img :src="trash" alt="" class="logo" />
      </div>
    </div>
    <div class="greyLine"></div>
    <!-- cards come here -->
    <Card v-for="(item, key) in cards" :key="key" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import trash from "../../assets/img/bildirimler/trash.svg";
import note from "../../assets/img/bildirimler/note.svg";
import health from "../../assets/img/bildirimler/health.svg";
import calendar from "../../assets/img/bildirimler/calendar.svg";
import notification from "../../assets/img/bildirimler/notification.svg";
import Card from "../UI/bildirimler/Card.vue";

const props = defineProps({
  type: { required: true, type: Number },
  logo: { required: true, type: String },
  bgColor: { required: true, type: String },
  titleColor: { required: true, type: String },
  date: { required: true, type: String },
  para: { required: true, type: String },
});

const cards = ref([{ type: 1 }]);
</script>

<style lang="scss">
.titleContainer {
  margin-bottom: 25px;
}
.title {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 130%;

  color: #3c4e69;
}
.para {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
  letter-spacing: -0.01em;
  color: #818b9a;
}
.logo {
  margin-left: 9px;
}
.greyLine {
  border: 1px solid #dae9f1;
  margin-bottom: 20px;
}
</style>
