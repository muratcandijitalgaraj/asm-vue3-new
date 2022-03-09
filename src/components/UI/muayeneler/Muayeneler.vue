<template>
  <div class="d-flex muayeneItem">
    <div class="item-box">
      <div class="item-info-list">
        <FirstBox :data="firstboxData" />
        <Doctor :data="doctorData" />
      </div>
    </div>
  </div>
</template>

<script setup>
import FirstBox from "./FirstBox.vue";
import Doctor from "../Appointments/Doctor.vue";

const props = defineProps({
  data: { required: true, type: Object },
  firstboxData: { required: true, type: Object },
  doctorData: { required: true, type: Object },
});
</script>

<style scoped lang="scss">
@import "../../../assets/scss/style";

.muayeneItem {
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
