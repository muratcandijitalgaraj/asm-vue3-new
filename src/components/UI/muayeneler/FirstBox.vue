<template>
  <div class="firstBox">
    <h4 class="mb-0 muayeneDate">{{ data.getDate }}</h4>
    <span class="muayeneLocation"> {{ data.getLocation }} </span>
  </div>
</template>

<script setup>
const props = defineProps({
  data: { required: true, type: Object },
});
// let getDate = "20 OCAK 2021 - 12:30";
// let getLocation = "Ataşehir Tıp Merkezi";
</script>

<style scoped lang="scss">
@import "../../../assets/scss/style";
.muayeneDate {
  color: $orange;
}
</style>
