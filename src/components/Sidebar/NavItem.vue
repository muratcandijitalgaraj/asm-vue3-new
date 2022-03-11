<template>
  <li class="d-block">
    <router-link :to="url" class="sidebar-nav-item">
      <img :src="src" :alt="title" class="logo" />
      <span class="text">{{ title }}</span>
      <Badge :number="number" :type="type" />
    </router-link>
  </li>
</template>

<script setup>
import Badge from "../UI/Badge.vue";
const props = defineProps({
  src: { required: true, type: String },
  title: { required: true, type: String },
  url: { required: true, type: Object },
  number: { required: true, type: Number },
  type: { required: false, type: String, default: "danger" },
});
</script>

<style scoped lang="scss">
@import "../../assets/scss/style";

li {
  margin-bottom: 30px;

  &:nth-last-child(1) {
    margin-bottom: 0;
  }
}

.sidebar-nav-item {
  display: flex;
  align-items: center;
  cursor: pointer;

  .text {
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    color: $text;
    margin-left: 10px;
  }
}
</style>
