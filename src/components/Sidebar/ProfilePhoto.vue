<template>
  <div class="profile-photo">
    <img
      class="img-fluid mb-2"
      src="../../assets/img/sidebar/sidebar-img.svg"
      alt="Akgül Yılmaz"
    />
    <span class="title">Akgül Yılmaz</span>
    <input
      type="file"
      ref="fileUpload"
      name="file"
      v-on:change="handleFileUpload"
      class="hideMe"
    />
    <button class="uploadBtn" @click="handleButtonClick">
      <img :src="uploadImg" alt="" class="uploadImg" />
    </button>
  </div>
</template>

<script setup>
import uploadImg from "../../assets/img/sidebar/upload.svg";
import { ref } from "vue";
const fileUpload = ref(null);
const handleButtonClick = (e) => {
  fileUpload.value.click();
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/style";
.profile-photo {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 18px;
  border-bottom: 1px solid $border;
  margin-bottom: 18px;

  img {
    max-width: 116px;
  }

  .title {
    font-size: 16px;
    text-align: center;
    color: $title;
    @include bold;
  }
  .hideMe {
    display: none;
  }
  .uploadBtn {
    background: none;
    border: none;
    position: relative;
    bottom: 5rem;
    left: 2rem;
  }
}
</style>
