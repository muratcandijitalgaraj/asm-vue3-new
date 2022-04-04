<template>
  <div
    @click="chooseUser"
    class="card d-flex flex-row justify-content-between align-items-center"
  >
    <div class="left d-flex flex-row justify-content-start align-items-center">
      <img class="user" :src="user" alt="" />
      <div class="texts d-flex flex-column">
        <span class="title"> {{ title }} </span>
        <span class="para">{{ para }}</span>
      </div>
    </div>
    <!-- right part is just the circle -->
    <div
      :class="{ active: isActive }"
      class="circle d-flex justify-content-center align-items-center"
    >
      <img class="vector" :src="vector" alt="" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import user from "../../../assets/img/profil/user.svg";
import vector from "../../../assets/img/profil/vector.svg";
const props = defineProps({
  title: { required: true, type: String },
  para: { required: true, type: String },
});

let isActive = ref(false);

const chooseUser = () => {
  isActive.value = !isActive.value;
};
</script>

<style scoped lang="scss">
.card {
  width: 341px;
  height: 70px;
  background: #ffffff;
  border: 1px solid #32a5df;
  box-sizing: border-box;
  box-shadow: 0px 1px 3px rgba(42, 49, 55, 0.11);
  border-radius: 6px;
  border: none;
  // margin-bottom: 17px;
  padding: 0 !important;
  padding-left: 15px !important;
  padding-right: 15px !important;
}
.left {
}
.title {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #3c4e69;
}
.para {
  font-family: "Nunito Sans" !important;
  font-style: normal !important;
  font-weight: 400 !important;
  font-size: 15px !important;
  line-height: 140% !important;
  letter-spacing: -0.01em !important;
  color: #818b9a !important;
}
.user {
  margin-right: 20px;
}
.circle {
  width: 20px;
  height: 20px;
  border: 1px solid #e1e1e1;
  border-radius: 50%;
  // background: #32a5df;
}
.active {
  background: #32a5df;
}

@media only screen and (max-width: 600px) {
  .card {
    width: auto;
  }
}
</style>
