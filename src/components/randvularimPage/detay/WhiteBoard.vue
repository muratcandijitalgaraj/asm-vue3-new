<template>
  <div class="whiteBoard">
    <div class="container">
      <div class="row">
        <div class="col">
          <!-- paracolor is not dynamic right now -->
          <InfoVue
            :src="infoDetails.src"
            :para="infoDetails.para"
            :color="infoDetails.color"
            :paraColor="infoDetails.paraColor"
          />
        </div>
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
  color: "redBackground",
  paraColor: "paraColor",
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
</style>
