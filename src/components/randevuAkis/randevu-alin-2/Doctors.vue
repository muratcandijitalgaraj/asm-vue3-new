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

<style scoped lang="scss"></style>
