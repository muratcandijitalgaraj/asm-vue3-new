<template>
  <div
    @click="handleButton"
    class="box d-flex flex-row justify-content-start align-items-center"
  >
    <img :src="img" alt="" />
    <span class="name"> {{ name }} </span>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";
const props = defineProps({
  name: { required: true, type: String },
  img: { required: true, type: String },
});
//this is the function in the parent component
//here we define which function in the parent component we want to emit to
const emit = defineEmits(["getDoctorTitle"]);
//this function emits to the parent component
//in this particular example, params are not really necessary at all
const handleButton = (params) => {
  emit("getDoctorTitle", params);
};
</script>

<style scoped lang="scss">
.box {
  background: #ffffff;
  /* Boxx Shadow */
  min-height: 47px;
  height: 65px;
  box-shadow: 0px 1px 3px rgba(42, 49, 55, 0.11);
  border-radius: 6px;
  margin-bottom: 17px;
  padding-left: 15px;
}
.name {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  /* Primary */

  color: #3c4e69;
}
img {
  margin-right: 13px;
}
</style>
