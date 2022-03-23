<template>
  <div class="cards">
    <div class="title">{{ title }}</div>
    <Card
      v-for="(item, key) in card"
      :key="key"
      :para="item.para"
      :is-active="item.isActive"
      :standard="item.standard"
      :ekle="item.ekle"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Card from "./Card.vue";
const props = defineProps({
  // cardData: { required: true, type: Object },

  title: { required: true, type: String },
  para: { required: true, type: String },
  isActive: { required: true, type: String },
  standard: { required: true, type: Boolean },
  ekle: { required: true, type: Boolean },
});

// const card = ref([
//   { para: "Mehmet Yılmaz", standard: true },
//   { para: "Yeni Kişi Ekle", standard: false, ekle: true },
// ]);

const card = ref([
  //   { title: "jey", standard: true },

  {
    para: "Mehmet Yılmaz",
    //   para: "Yeni Kişi Ekle",
    standard: true,
    ekle: false,
  },
  {
    para: "Mehmesdfsdft Yılmaz",
    //   para: "Yeni Kişi Ekle",
    standard: true,
    ekle: false,
  },

  {
    title: "Randevu türünü seçin",

    card: {
      para: "Msdgfsdfgsfdgehmet Yılmaz",
      //   para: "Yeni Kişi Ekle",
      standard: true,
      ekle: false,
    },
  },
]);
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
  margin-bottom: 18px;

  /* Primary */

  color: #3c4e69;
}
</style>
