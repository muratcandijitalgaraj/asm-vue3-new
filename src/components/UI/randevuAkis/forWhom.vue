<template>
  <div class="main">
    <h3 class="title">Randevuyu kim için alıyorsunuz?</h3>
    <div
      :class="{ active: isActive }"
      @click="toggle"
      class="profileWrapper d-flex flex-row justify-content-start align-items-center"
    >
      <div class="circle d-flex justify-content-center align-items-center">
        <img :src="checkMark" alt="" class="checkMark" />
      </div>
      <div class="profileName">Mehmet Yılmaz</div>
    </div>
    <div
      class="ekleWrapper d-flex flex-row justify-content-start align-items-center"
    >
      <img :src="icon" alt="" class="icon" />
      <div class="bluePara">Yeni Kişi Ekle</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import checkMark from "../../../assets/img/randevuAkis/checkMark.svg";
import icon from "../../../assets/img/randevuAkis/addUser.svg";
//toggle functionality
let isActive = ref(false);
const toggle = function () {
  isActive.value = !isActive.value;
};
</script>

<style lang="scss" scoped>
.profileWrapper {
  width: 341px;
  height: 47px;
  background: #ffffff;
  /* Boxx Shadow */
  box-shadow: 0px 1px 3px rgba(42, 49, 55, 0.11);
  border-radius: 6px;
  margin-bottom: 17px;
}
.ekleWrapper {
  width: 341px;
  height: 47px;
  background: #ffffff;
  /* Boxx Shadow */
  box-shadow: 0px 1px 3px rgba(42, 49, 55, 0.11);
  border-radius: 6px;
}
.title {
  width: 249px;
  height: 22px;

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
.profileName {
  /* baslik4 */

  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */
}
.circle {
  width: 20px;
  height: 20px;
  border: 1px solid #e1e1e1;
  border-radius: 50%;
  margin: 0 12px;
}
.checkMark {
  display: none;
}
.icon {
  margin: 0 12px;
}
.bluePara {
  width: 98px;
  height: 24px;

  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  /* Secondary */

  color: #32a5df;
}
.active {
  background: #32a5df;
  .profileName {
    color: white;
  }
  .circle {
    background: white;
  }
  .checkMark {
    display: inline-block;
  }
}
</style>
