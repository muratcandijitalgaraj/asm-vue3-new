<template>
  <div class="body">
    <div class="closeContainer d-flex justify-content-end">
      <img :src="close" alt="" class="close" />
    </div>
    <div class="likeContainer d-flex justify-content-center">
      <img :src="like" alt="" class="close" />
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
</style>
