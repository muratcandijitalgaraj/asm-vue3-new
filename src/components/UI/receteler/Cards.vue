<template>
  <div class="cards row">
    <div class="card col-12">
      <div
        class="top d-flex flex-column flex-lg-row justify-content-between align-items-center"
        :class="background"
      >
        <div class="topLeft d-flex align-items-center">
          <img :src="logo" alt="" />
          <span :class="color"> {{ receteType }} </span>
        </div>
        <div class="topRight">
          <span :class="color"> {{ no }} </span>
        </div>
      </div>
      <div
        class="bottom d-flex flex-column flex-lg-row justify-content-between align-items-center"
      >
        <div
          class="bottomLeft d-flex flex-column justify-content-center align-items-center"
        >
          <span :class="titleStyle"> {{ title }} </span>
          <span> {{ department }} </span>
        </div>
        <div class="bottomRight">
          <span :class="locationStyle"> {{ location }} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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
</script>

<style scoped lang="scss">
// @import "../../assets/scss/style";
.card {
  min-height: 125px;

  background: #ffffff;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
}
</style>
