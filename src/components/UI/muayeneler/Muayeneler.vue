<template>
  <div class="d-flex muayeneItem flex-column">
    <div class="item-box">
      <div class="item-info-list">
        <div class="firstBox">
          <FirstBox :data="firstboxData" />
        </div>
        <div class="doktorBox">
          <Doctor :data="doctorData" />
        </div>
        <div class="thirdBox d-flex">
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
    <!-- grey line -->
    <div class="greyLine"></div>
    <!-- bottom part -->
    <div class="bottomPart d-flex justify-content-between">
      <div class="bottomLeft d-flex">
        <div class="logoContainer d-flex align-items-center">
          <img class="bottomLogo" :src="puan" alt="" />
          <span class="bottomText"> Puan Ver </span>
        </div>
        <div class="logoContainer d-flex align-items-center">
          <img class="bottomLogo" :src="anket" alt="" />
          <span class="bottomText"> Ankete Katıl </span>
        </div>
      </div>
      <!-- bottom right -->
      <button
        class="bottomButton d-flex justify-content-center align-items-center"
      >
        <span class="buttonPara">Randevu Alın</span>
      </button>
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
import anket from "../../../assets/img/muayeneler/anket.svg";
import puan from "../../../assets/img/muayeneler/puan.svg";

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
.bottomLeft {
  margin-left: 20px;
}
.muayeneItem {
  align-items: center;
  justify-content: space-between;
  background-color: $white;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0px 1px 3px rgba(42, 49, 55, 0.11);
  margin-bottom: 20px;
  .doktorBox {
    padding-left: 60px;
  }
  .item-box {
    width: 100%;
    // padding-left: 57px;
    padding: 0 20px;
    .item-info-list {
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-height: 100px;
    }
  }
  .greyLine {
    height: 1px;
    width: 95%;
    background: #f3f3f3;
  }

  .bottomPart {
    width: 100%;
    margin: 1.2rem 0;
  }
  .logoContainer {
    margin-right: 40px;
    height: 40px;
  }
  .bottomLogo {
    width: 22px;
    height: 22px;
    margin-right: 8px;
  }

  .bottomButton {
    background-color: $orange;
    box-shadow: none;
    outline: none;
    font-size: 15px;
    @include bold;
    color: $white;
    padding: 7px 15px;
    border-radius: 6px;
    border: none;
    min-width: 250px;
    margin-right: 1.6rem;
    height: 40px;
  }
  .buttonPara {
    /* buton-text-kucuk */
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 110%;
    /* identical to box height, or 17px */
    display: flex;
    align-items: center;
    text-align: center;
    /* Beyaz */
    color: #ffffff;
    /* Inside auto layout */

    margin: 0px 10px;
  }
  @media (max-width: 1199px) {
    flex-direction: column;
    .doktorBox {
      padding-left: 0;
    }
    .item-box {
      .item-info-list {
        flex-direction: column;
        align-items: flex-start;
      }
    }

    .firstBox {
      padding-left: 4px;
      margin-bottom: 0.5rem;
    }
    .doktorBox {
      margin-bottom: 0.5rem;
    }
    .thirdBox {
      padding-left: 5px;
      margin-bottom: 0.5rem;
    }
  }
  @media (max-width: 767px) {
    .bottomPart {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .bottomButton {
      min-width: 250px;
      margin-top: 1rem;
    }
  }
}
</style>
