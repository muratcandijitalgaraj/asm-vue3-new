<template>
  <div class="d-flex muayeneItem">
    <div class="item-box">
      <div class="item-info-list">
        <FirstBox :data="firstboxData" />
        <Doctor :data="doctorData" />
        <ThirdBox
          v-for="(item, key) in items"
          :text="item.text"
          :url="item.url"
          :src="item.src"
          :key="key"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
//components
import FirstBox from "./FirstBox.vue";
import Doctor from "../Appointments/Doctor.vue";
import ThirdBox from "./ThirdBox.vue";
//images
import recete from "../../../assets/img/muayeneler/recete.svg";
import lab from "../../../assets/img/muayeneler/lab.svg";
import radyoloji from "../../../assets/img/muayeneler/radyoloji.svg";
import patoloji from "../../../assets/img/muayeneler/patoloji.svg";

const props = defineProps({
  data: { required: true, type: Object },
  firstboxData: { required: true, type: Object },
  doctorData: { required: true, type: Object },
  src: { required: true, type: String },
  text: { required: true, type: String },
  url: { required: true, type: Object },
});

const items = ref([
  {
    src: recete,
    text: "Reçete",
    url: {},
  },
  {
    src: lab,
    text: "Lab",
    url: {},
  },
  {
    src: radyoloji,
    text: "Radyoloji",
    url: {},
  },
  {
    src: patoloji,
    text: "Patoloji",
    url: {},
  },
]);
</script>

<style scoped lang="scss">
@import "../../../assets/scss/style";

.muayeneItem {
  align-items: center;
  justify-content: space-between;
  background-color: $white;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0px 1px 3px rgba(42, 49, 55, 0.11);
  margin-bottom: 20px;

  .item-box {
    width: 100%;
    padding: 0 20px;

    .item-info-list {
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-height: 100px;
    }
  }

  @media (max-width: 1199px) {
    flex-direction: column;

    .item-box {
      .item-info-list {
        flex-direction: column;
      }
    }
  }
}
</style>
