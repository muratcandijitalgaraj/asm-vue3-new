<template>
  <div class="hospital-info">
    <div class="icon">
      <img :src="getImage" class="img-fluid" alt="" />
    </div>
    <div class="text">
      <h4 class="mb-0">{{ data.title }}</h4>
      <span class="date" v-if="data.subTitle.length">{{ data.subTitle }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import hospitalLogo from "../../../assets/img/appointments/hospital.svg";
import videoLogo from "../../../assets/img/appointments/video.svg";
const props = defineProps({
  type: { required: true },
  data: { required: true, type: String },
});

const getImage = computed(() => {
  switch (props.type) {
    case 1:
      return hospitalLogo;
    case 2:
      return videoLogo;
    case 3:
      return videoLogo;
  }
});
</script>

<style scoped lang="scss">
@import "../../../assets/scss/style";
.hospital-info {
  display: flex;
  align-items: center;
  padding: 0 7.5px;

  .icon {
    display: flex;
    width: 50px;
    height: 50px;
    justify-content: center;
    align-items: center;
    background-color: $bg-gray;
    border-radius: 5px;
    margin-right: 15px;
  }

  .text {
    h4 {
      font-size: 16px;
      color: $title;
      margin-bottom: 0;
    }

    span {
      font-size: 15px;
    }
  }

  @media (max-width: 1199px) {
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>
