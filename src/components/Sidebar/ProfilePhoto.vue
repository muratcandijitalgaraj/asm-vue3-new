<template>
  <div class="profile-photo">
    <img
        class="img-fluid mb-2"
        src="../../assets/img/sidebar/sidebar-img.svg"
        alt="Akgül Yılmaz"
    />
    <span class="title">Akgül Yılmaz</span>
  </div>
</template>

<script setup>
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
}
</style>
