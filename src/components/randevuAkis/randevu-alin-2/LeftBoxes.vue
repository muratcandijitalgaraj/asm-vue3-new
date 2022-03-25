<template>
  <div class="box d-flex flex-column justify-content-center">
    <span @click="handleButton" class="title"> {{ title }} </span>
    <span class="para"> {{ para }} </span>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";
const props = defineProps({
  title: { required: true, type: String },
  para: { required: true, type: String },
});
//this is the function in the parent component
//here we define which function in the parent component we want to emit to
const emit = defineEmits(["getTitle"]);
//this function emits to the parent component
//in this particular example, params are not really necessary at all
const handleButton = (params) => {
  emit("getTitle", params);
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
.para {
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
</style>
