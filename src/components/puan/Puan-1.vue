<template>
  <div class="body">
    <div class="closeContainer d-flex justify-content-end">
      <img :src="close" alt="" class="close" />
    </div>
    <div class="likeContainer d-flex justify-content-center">
      <img :src="like" alt="" class="like" />
    </div>
    <div
      class="videoContainer d-flex flex-row justify-content-start align-items-center"
    >
      <img :src="video" alt="" class="video paraLogo" />
      <span class="title">Görüşme kalitesi nasıldı?</span>
    </div>
  </div>
</template>

<script setup>
import close from "../../assets/img/puan/close.svg";
import like from "../../assets/img/puan/like.svg";
import message from "../../assets/img/puan/message.svg";
import video from "../../assets/img/puan/video.svg";
import bulutlar from "../../assets/img/puan/bulutlar.svg";
</script>

<style scoped>
.body {
  width: 675px !important;
  height: 629px !important;
  background: #e9f3f9;
  border-radius: 16px;
}
.title {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #3c4e69;
}
.paraLogo {
  margin-right: 15px;
}
</style>
