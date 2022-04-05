<template>
  <div
    class="card d-flex flex-row align-items-center"
    @click="handleClick"
    v-bind:class="{ active: isActive }"
  >
    <div
      v-bind:class="{ circled: isCircled }"
      class="circle d-flex justify-content-center align-items-center"
    >
      <span class="checkSymbole" v-bind:class="{ checked: isChecked }">
        &#10003;</span
      >
    </div>
    <span class="title"> {{ title }} </span>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  title: { required: true, type: String },
});

let isActive = ref(false);
let isChecked = ref(false);
let isCircled = ref(false);

const handleClick = (e) => {
  isActive.value = !isActive.value;
  isChecked.value = !isChecked.value;
  isCircled.value = !isCircled.value;
};
</script>

<style scoped lang="scss">
.card {
  background: #ffffff;
  /* Boxx Shadow */
  box-shadow: 0px 1px 3px rgba(42, 49, 55, 0.11);
  border-radius: 6px;
  padding: 12px;
}
.circle {
  height: 20px;
  width: 20px;
  border: 1px solid #e1e1e1;
  border-radius: 50%;
  margin-right: 10px;
}
.active {
  background: #32a5df;
}
.checkSymbole {
  display: none;
}
.checked {
  display: flex;
  color: #32a5df;
}
.circled {
  background: white;
}
</style>
