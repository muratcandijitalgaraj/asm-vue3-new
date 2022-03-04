<template>
  <div class="topCard">
    <router-link
      :class="color"
      :to="url"
      class="d-flex flex-column align-items-start jutify-content-center"
    >
      <img :src="src" :alt="title" class="logo" />
      <span class="title text">{{ title }}</span>
    </router-link>
  </div>
</template>

<script setup>
const props = defineProps({
  src: { required: true, type: String },
  title: { required: true, type: String },
  url: { required: true, type: Object },
  color: { required: true, type: String },
});
</script>

<style lang="scss" scoped>
@import "../../assets/scss/style";

.topCard {
  width: 210px;
  height: 110px;
  background: $white;
  /* Boxx Shadow */
  box-shadow: 0px 1px 3px rgba(42, 49, 55, 0.11);
  border-radius: 0px 0px 10px 10px;
}
.logo {
  margin-bottom: 10px;
  margin-top: 14px;
}
.text {
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  color: $text;
}
</style>
