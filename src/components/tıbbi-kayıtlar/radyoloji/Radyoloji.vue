<template>
  <div class="radyoloji">
    <Top />
    <Search />
    <Body
      v-for="(item, key) in cards"
      :type="item.type"
      :logo="item.logo"
      :status="item.status"
      :title="item.title"
      :bigTitle="item.bigTitle"
      :para="item.para"
      :key="key"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Top from "../../UI/radyoloji/Top.vue";
import Search from "../../UI/radyoloji/Search.vue";
import Body from "../../UI/radyoloji/Body.vue";

const cards = ref([
  {
    bigTitle: "2 Ağustos Pazartesi",
    title: "Akciğer Grafisi (tek yön) (büyük)",
  },
  {
    bigTitle: "2 Ağustos Pazartesi",
    title: "Akciğer Grafisi (tek yön) (büyük)",
  },
]);
</script>

<style scoped lang="scss">
// @import "../../assets/scss/style";
</style>
