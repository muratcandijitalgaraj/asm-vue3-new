<template>
  <div class="card d-flex flex-row justify-content-between align-items-center">
    <div
      class="left d-flex flex-column flex-xl-row justify-content-start align-items-center"
    >
      <div
        class="logoContainer d-flex justify-content-start align-items-center"
        :class="bgColor"
      >
        <img :src="logo" alt="" class="logo" />
      </div>
      <div
        class="textContainer d-flex flex-column align-items-start justify-content-center"
      >
        <span class="title" :class="titleColor"> {{ date }} </span>
        <span class="paraColor"> {{ para }} </span>
        <div v-if="type === 2" class="buttonContainer">
          <button class="buttonOne">
            <span class="buttonOneText">Örnek Buton</span>
          </button>
          <button class="buttonTwo">
            <span class="buttonTwoText">Örnek Buton 2</span>
          </button>
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
  margin-bottom: 20px;
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
  border-radius: 6px;
  margin-right: 15px;
}
.blue {
  background: #32a5df;
}
.grey {
  background: #ffffff;
}
.textBlue {
  color: #32a5df !important;
}
.textGrey {
  color: #818b9a !important;
}
.title {
  font-family: "Nunito Sans" !important;
  font-style: normal;
  font-weight: 700 !important;
  font-size: 16px !important;
  line-height: 150% !important;
  /* identical to box height, or 24px */
}
.buttonContainer {
  margin-top: 20px;
}
.buttonOne {
  padding: 12px 20px 11px;
  /* Button Primary */
  background: #ff7c32;
  border-radius: 6px;
  border: none;
  margin-right: 20px;
}
.buttonOneText {
  color: white;
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 110%;
}
.buttonTwo {
  padding: 12px 20px 11px;
  /* Button Primary */
  border: 1px solid #ff7c32;
  box-sizing: border-box;
  border-radius: 6px;
  background: white;
}
.buttonTwoText {
  color: #ff7c32;
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 110%;
}
</style>
