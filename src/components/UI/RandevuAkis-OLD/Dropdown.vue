<template>
  <select name="cars" id="cars" class="date dropdown">
    <option
      v-for="(item, key) in data"
      :key="key"
      class="date"
      value="{{item}}"
    >
      {{ item }}
    </option>
  </select>
</template>

<script setup>
const props = defineProps({
  dateData: { required: true, type: Object },
});

let data = props.dateData;
// console.log(data);
</script>

<style scoped lang="scss">
.dropdown {
  height: 48px;
  background: #ffffff;
  /* Form Shadow */
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.03);
  border: none;
  border-radius: 6px;
  margin-bottom: 34px;
  padding-left: 15px;
}
.date {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #3c4e69;
}
</style>
