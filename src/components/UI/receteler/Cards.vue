<template>
  <div class="cards row">
    <div class="card col-12">
      <div
        class="top d-flex flex-column flex-lg-row justify-content-between align-items-center"
        :class="background"
      >
        <div class="topLeft d-flex align-items-center">
          <img class="logo" :src="logo" alt="" />
          <span :class="color"> {{ receteType }} </span>
        </div>
        <div class="topRight">
          <span :class="color"> {{ receteNo }} </span>
        </div>
      </div>
      <div
        class="bottom d-flex flex-column flex-lg-row justify-content-between align-items-center"
      >
        <div
          class="bottomLeft d-flex flex-column justify-content-center align-items-center align-items-lg-start"
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
  receteNo: { required: true, type: String },
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
  margin-bottom: 1.5rem;
}
.top {
  height: 60px;
}
.topRight {
  margin-right: 10px;
}
.bottom {
  height: 100%;
}

.bottomLeft {
  margin-left: 1rem;
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
.logo {
  margin-left: 12px;
  margin-right: 8px;
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
.red {
  color: #ea5455;
}
.orange {
  color: #ff8038;
}
.purple {
  color: #7367f0;
}
.green {
  color: #29a87b;
}

@media only screen and (max-width: 992px) {
  .topLeft {
    margin-bottom: 5px;
  }
  .top {
    margin-bottom: 7px;
  }
  .bottomRight {
    margin-bottom: 10px;
  }
}
</style>
