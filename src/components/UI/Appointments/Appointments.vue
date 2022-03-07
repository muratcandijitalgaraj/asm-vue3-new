<template>

  <div class="d-flex appointments-list-item">
    <InfoIcon :type="type" />
    <div class="item-box">
      <div class="item-info-list">
        <Info :type="type" :date="date" />
        <Doctor :data="doctorData"/>
        <Hospital :type="type" :data="hospitalData"/>
      </div>
      <Pay v-if="type === 2" :price="price"/>
    </div>
  </div>

</template>

<script setup>
import InfoIcon from "./InfoIcon.vue";
import Info from "./Info.vue";
import Doctor from "./Doctor.vue";
import Hospital from "./Hospital.vue";
import Pay from "./Pay.vue";

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
  background-color: $white;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0px 1px 3px rgba(42, 49, 55, 0.11);
  margin-bottom: 20px;

  .item-box {
    width: 100%;
    padding: 0 20px;

    .item-info-list {
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-height: 100px;
    }
  }

  @media (max-width: 1199px) {
    flex-direction: column;

    .item-box {
      .item-info-list {
        flex-direction: column;
      }
    }
  }
}
</style>
