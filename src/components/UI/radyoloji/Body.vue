<template>
  <div class="row radyolojiBody">
    <div class="col-12 bigTitle">{{ bigTitle }}</div>
    <CardVue
      v-for="(item, key) in cards"
      :key="key"
      :type="item.type"
      :logo="item.logo"
      :status="item.status"
      :title="item.title"
      :para="item.para"
    />
  </div>
</template>

<script setup>
import CardVue from "./Card.vue";
import results from "../../../assets/img/medical-records/results.svg";
import waiting from "../../../assets/img/medical-records/waiting.svg";
import { ref } from "vue";
const props = defineProps({
  bigTitle: { required: true, type: String },
  type: { required: true },
  logo: { required: true, type: String },
  status: { required: true, type: String },
  title: { required: true, type: String },
  para: { required: true, type: String },
});

const cards = ref([
  {
    title: "Akciğer Grafisi (tek yön) (büyük)",
    para: "4 Sonuç daha var",
    status: "Sonuçlar",
    logo: results,
  },
  {
    title: "Toraks BT (Kontrastlı)",
    para: "Tomografi",
    status: "Sonuç Bekleniyor",
    logo: waiting,
  },
]);
</script>

<style scoped lang="scss">
// @import "../../assets/scss/style";
.radyolojiBody {
  margin-top: 35px;
}
.bigTitle {
  /* baslik3 */

  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 130%;
  /* identical to box height, or 29px */

  /* Secondary */

  color: #32a5df;
  margin-bottom: 12px;
  //this might break things, we'll see
  padding: 0 !important;
}
</style>
