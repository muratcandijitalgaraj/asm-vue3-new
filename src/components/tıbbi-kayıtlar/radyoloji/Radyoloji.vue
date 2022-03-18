<template>
  <div class="radyoloji">
    <Top />
    <Search />
    <Body v-for="(item, key) in body" :key="key" :bigTitle="item.bigTitle" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Top from "../../UI/radyoloji/Top.vue";
import Search from "../../UI/radyoloji/Search.vue";
import Body from "../../UI/radyoloji/Body.vue";

const body = ref([
  {
    bigTitle: "2 Ağustos Pazartesi",
  },
  {
    bigTitle: "2 Ağustos Pazartesi",
  },
]);
</script>

<style scoped lang="scss">
// @import "../../assets/scss/style";
.radyoloji {
}
</style>
