<template>
  <li class="d-block">
    <router-link
      :to="url"
      class="thirdboxItem d-flex flex-column justify-content-center align-items-center"
    >
      <img :src="src" :alt="text" class="logo" />
      <span class="text">{{ text }}</span>
    </router-link>
  </li>
</template>

<script setup>
const props = defineProps({
  src: { required: true, type: String },
  text: { required: true, type: String },
  url: { required: true, type: Object },
});
</script>

<style scoped lang="scss">
@import "../../../assets/scss/style";
.thirdboxItem {
  margin-right: 20px;
}
.text {
  /* text4 */
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 130%;
  /* identical to box height, or 17px */
  text-align: center;
  letter-spacing: -0.01em;
  /* Primary */
  color: #3c4e69;
}
.logo {
  height: 20px;
  width: 20px;
  margin-bottom: 8px;
}
</style>
