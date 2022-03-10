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
</script>

<style scoped lang="scss">
@import "../../../assets/scss/style";
.muayeneDate {
  color: $orange;
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
}
</style>
