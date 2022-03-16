<template>
  <div class="whiteBoard">
    <div class="row">
      <div class="col">
        <InfoVue :src="infoDetails.src" />
      </div>
    </div>
  </div>
</template>

<script setup>
import logo from "../../../assets/img/appointments/detay/calendar-1.svg";
import InfoVue from "../../UI/RandevuDetay/Info.vue";

const props = defineProps({
  src: { required: true, type: String },
  para: { required: true, type: String },
  color: { required: true, type: String },
  paraColor: { required: true, type: String },
});

const infoDetails = {
  src: logo,
  para: "Görüşme Bekleniyor...",
  color: "#FFEEEE",
  paraColor: "#EA5455",
};
</script>

<style scoped lang="scss">
@import "../../../assets/scss/style";
.whiteBoard {
  width: 915px;
  height: 665px;
  background: $white;
}
</style>
