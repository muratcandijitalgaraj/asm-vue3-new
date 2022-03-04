<template>
  <!-- <li class="mainCard d-flex">
    <router-link :to="url" class="card-item d-flex flex-column">
      <img :src="src" :alt="title" class="logo" />
      <span class="text">{{ title }}</span>
    </router-link>
  </li> -->
  <div class="mainCard">
    <router-link :to="url" class="">
      <span :class="lineColor"></span>
      <img :src="src" :alt="title" class="logo" />
      <span class="text">lol + {{ title }}</span>
    </router-link>
  </div>
</template>

<script setup>
const props = defineProps({
  src: { required: true, type: String },
  title: { required: true, type: String },
  url: { required: true, type: Object },
});
</script>

<style lang="scss" scoped>
@import "../../assets/scss/style";

.mainCard {
  width: 210px;
  height: 110px;
  background: $white;
  /* Boxx Shadow */
  box-shadow: 0px 1px 3px rgba(42, 49, 55, 0.11);
  border-radius: 0px 0px 10px 10px;
  border: solid;
}
</style>
