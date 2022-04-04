<template>
  <div @click="chooseUser" class="card d-flex flex-row justify-content-start">
    <div
      :class="{ active: isActive }"
      class="circle d-flex justify-content-center align-items-center"
    >
      <img class="vector" :src="vector" alt="" />
    </div>
    <p class="para">{{ para }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import vector from "../../../assets/img/profil/vector.svg";

const props = defineProps({
  para: { required: true, type: String },
});

let isActive = ref(false);

const chooseUser = () => {
  isActive.value = !isActive.value;
};
</script>

<style scoped lang="scss">
.card {
  width: 160px;
  height: 50px;
  background: #ffffff;
  /* Secondary */
  border: 1px solid #32a5df;
  box-sizing: border-box;
  /* Boxx Shadow */
  box-shadow: 0px 1px 3px rgba(42, 49, 55, 0.11);
  border-radius: 6px;
  border: none;
  margin-left: 35px !important;
  //   padding-top: 15px;
}
.circle {
  width: 20px;
  height: 20px;
  border: 1px solid #e1e1e1;
  border-radius: 50%;
  // background: #32a5df;
  margin: 15px;
}
.active {
  background: #32a5df;
}
.para {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  /* Primary */

  color: #3c4e69;
  margin-top: 13.5px;
}
@media only screen and (max-width: 600px) {
  .card {
  }
}
</style>
