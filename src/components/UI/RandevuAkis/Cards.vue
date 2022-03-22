<template>
  <div class="cards">
    <span class="title">{{ title }} </span>
    <Card
      v-for="(item, key) in card"
      :key="key"
      :para="item.para"
      :isActive="item.isActive"
      :standard="item.standard"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Card from "./Card.vue";
const props = defineProps({
  title: { required: true, type: String },
  para: { required: true, type: String },
  isActive: { required: true, type: String },
  standard: { required: true, type: Boolean },
  ekle: { required: true, type: String },
});

const card = ref([{ para: "Mehmet Yılmaz", standard: true }]);
</script>

<style scoped lang="scss">
// @import "../../assets/scss/style";
.title {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 130%;
  /* identical to box height, or 22px */

  letter-spacing: -0.01em;

  /* Primary */

  color: #3c4e69;
}
</style>
