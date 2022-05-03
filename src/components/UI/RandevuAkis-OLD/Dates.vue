<template>
  <div
    @click="handleClick"
    class="date d-flex justify-content-center align-items-center"
  >
    <span class="hour">
      {{ hour }}
    </span>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";
const props = defineProps({
  hour: { required: true, type: String },
});

//this is the function in the parent component
//here we define which function in the parent component we want to emit to
const emit = defineEmits(["getHour"]);
//this function emits to the parent component
//in this particular example, params are not really necessary at all
const handleClick = (params) => {
  emit("getHour", params);
};
</script>

<style scoped lang="scss">
.date {
  width: 70px;
  height: 40px;
  background: #ffffff;
  /* Form Shadow */
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.03);
  border-radius: 6px;
  margin: 10px 0 10px 15px;

  .hour {
    /* baslik4 */

    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    /* identical to box height, or 24px */

    text-align: center;

    /* Primary */

    color: #3c4e69;
  }
}
.date:hover {
  background: #32a5df;
  .hour:hover {
    color: white;
  }
}
</style>
