<template>

  <div class="d-flex appointments-list-item">
    <InfoIcon :type="type" />
    <Info :type="type" :date="date" />
    <Doctor :data="doctorData"/>
    <Hospital :hospital="hospitalData"/>
  </div>

</template>

<script setup>
import InfoIcon from "./InfoIcon.vue";
import Info from "./Info.vue";
import Doctor from "./Doctor.vue";
import Hospital from "./Hospital.vue";
import {defineProps} from "vue";

const props = defineProps({
  type: {required: true, type: Number},
  date: {required: true, type: String},
  doctorData: {required: true, type: Object},
  hospitalData: {required: true, type: Object},
  price: {required: false, default:0 },
})

</script>

<style scoped lang="scss">
@import "../../../assets/scss/style";

.appointments-list-item {
  align-items: center;
  justify-content: space-between;
  min-height: 110px;
  background-color: $white;
  padding: 5px;
  border-radius: 10px;
}
</style>
