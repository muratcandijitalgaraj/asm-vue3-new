<template>
  <div class="body">
    <div class="closeContainer d-flex justify-content-end align-items-start">
      <img :src="bulutlar" alt="" class="bulutlar" />
      <img :src="close" alt="" class="close" />
    </div>
    <!-- <div class="likeContainer d-flex justify-content-center">
      <img :src="like" alt="" class="like" />
    </div> -->
    <div
      class="question d-flex flex-row justify-content-start align-items-center"
    >
      <img :src="video" alt="" class="video paraLogo" />
      <span class="title">Görüşme kalitesi nasıldı?</span>
    </div>
    <!-- cards -->
    <div
      class="cards d-flex flex-row align-items-center justify-content-between"
    >
      <Cards v-for="(card, index) in cards" :key="index" :title="card.title" />
    </div>
    <!-- second question -->
    <div
      class="question d-flex flex-row justify-content-start align-items-center"
    >
      <img :src="message" alt="" class="message paraLogo" />
      <span class="title">İletmek istediğiniz not var mı?</span>
    </div>
    <input
      type="text"
      class="bigInput"
      placeholder="Dilerseniz boş bırakabilirsiniz."
    />
    <div class="buttonContainer d-flex justify-content-center">
      <button @click="handleButton" class="button">
        <span class="buttonText">+ Yeni Profil Ekle</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import close from "../../../assets/img/puan/close.svg";
import like from "../../../assets/img/puan/like.svg";
import message from "../../../assets/img/puan/message.svg";
import video from "../../../assets/img/puan/video.svg";
import bulutlar from "../../../assets/img/puan/bulutlar.svg";
import Cards from "./Cards.vue";

let title = ref("");

const cards = ref([
  { title: "Çok iyi" },
  { title: "İyi" },
  { title: "Eh İşte" },
  { title: "Kötü" },
  { title: "Çok Kötü" },
]);

const emit = defineEmits(["changeComponent"]);
const handleButton = (params) => {
  emit("changeComponent", params);
};
</script>

<style scoped>
.body {
  width: 675px;
  height: 629px !important;
  background: #e9f3f9;
  border-radius: 16px;
}
.bulutlar {
  position: relative;
  z-index: 1;
}
.closeContainer {
  margin-bottom: 30px;
}
/* .title {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #3c4e69;
} */
.paraLogo {
  margin-right: 15px;
}
.question {
  margin-bottom: 18px;
}
.cards {
}

.title {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */
  /* Primary */
  color: #3c4e69;
  margin-right: 5px;
}
.bigInput {
  width: 605px;
  height: 150px;
  border: none;
  padding-bottom: 90px !important;
  padding-left: 10px;
}
.buttonContainer {
  width: 100%;
  margin-top: 30px;
}
.button {
  padding: 12px 20px 11px;
  width: 100%;
  height: 50px;
  background: #ff8038;
  border-radius: 6px;
  border: none;
}
.buttonText {
  /* buton-text-orta */

  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 110%;
  /* identical to box height, or 18px */

  /* Beyaz */

  color: #ffffff;
}

@media only screen and (max-width: 700px) {
  .body {
    width: auto;
    height: auto !important;
  }
  .bigInput {
    width: 100%;
  }
  .cards {
    flex-wrap: wrap;
  }
  .card {
    width: 150px !important;
  }
}
@media only screen and (max-width: 500px) {
  .cards {
    justify-content: center !important;
  }
  .card {
    margin: 1rem;
  }
}
</style>
