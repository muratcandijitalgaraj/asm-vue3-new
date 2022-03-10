<template>
  <li class="d-block">
    <router-link :to="url" class="thirdboxItem">
      <img :src="src" :alt="text" class="logo" />
      <span class="text">{{ text }}</span>
    </router-link>
  </li>
</template>

<script setup></script>

<style scoped lang="scss">
@import "../../../assets/scss/style";
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
</style>
