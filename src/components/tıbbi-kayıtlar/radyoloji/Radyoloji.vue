<template>
  <div class="radyoloji">
    <Top />
    <Search />
    <Body
      v-for="(item, key) in body"
      :key="key"
      :bigTitle="item.bigTitle"
      :type="item.type"
      :logo="item.logo"
      :status="item.status"
      :title="item.title"
      :para="item.para"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Top from "../../UI/radyoloji/Top.vue";
import Search from "../../UI/radyoloji/Search.vue";
import Body from "../../UI/radyoloji/Body.vue";
import results from "../../../assets/img/medical-records/results.svg";
import waiting from "../../../assets/img/medical-records/waiting.svg";

const body = ref([
  {
    bigTitle: "2 Ağustos Pazartesi",
    title: "Akciğer Grafisi (tek yön) (büyük)",
    para: "4 Sonuç daha var",
  },
  {
    bigTitle: "2 Ağustos Pazartesi",
    title: "Akciğer Grafisi (tek yön) (büyük)",
  },
]);
</script>

<style scoped lang="scss">
// @import "../../assets/scss/style";
.radyoloji {
}
</style>
