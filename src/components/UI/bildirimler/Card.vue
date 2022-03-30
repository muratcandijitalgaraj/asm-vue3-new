<template>
  <div class="card d-flex flex-row justify-content-between align-items-center">
    <div class="left d-flex flex-row justify-content-start align-items-center">
      <div class="logoContainer" :class="bgColor">
        <img :src="logo" alt="" class="logo" />
      </div>
      <div
        class="textContainer d-flex flex-column align-items-start justify-content-center"
      >
        <span class="title" :class="titleColor"> {{ date }} </span>
        <span class="paraColor"> {{ para }} </span>
        <div v-if="type === 2" class="buttonContainer">
          <button class="buttonOne">Örnek Buton</button>
          <button class="buttonTwo">Örnek Buton 2</button>
        </div>
      </div>
    </div>
    <!-- right is just trash logo -->
    <img :src="trash" alt="" class="deleteLogo" />
  </div>
</template>

<script setup>
import trash from "../../../assets/img/bildirimler/trash.svg";

const props = defineProps({
  type: { required: true, type: Number },
  logo: { required: true, type: String },
  bgColor: { required: true, type: String },
  titleColor: { required: true, type: String },
  date: { required: true, type: String },
  para: { required: true, type: String },
});
</script>

<style lang="scss">
.card {
  background: #f2f8fb;
  border: none;
  padding-bottom: 20px;
  border-bottom: 1px solid #dae9f1;
}
.paraColor {
  /* baslik4 */

  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  /* Primary */

  color: #3c4e69;
}
.logoContainer {
  width: 40px;
  height: 40px;
  left: 0px;
  top: 0px;
  border-radius: 6px;
}
.blue {
  background: #32a5df;
}
.grey {
  background: #ffffff;
}
</style>
