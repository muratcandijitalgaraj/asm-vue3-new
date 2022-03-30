<template>
  <div class="detay">
    <div
      class="titleContainer col-12 d-flex flex-column flex-lg-row align-items-center justify-content-enter justify-content-lg-between"
    >
      <span class="title">Bildirimler</span>
      <div class="deleteContainer">
        <span class="para">Hepsini Temizle</span>
        <img :src="trash" alt="" class="logo" />
      </div>
    </div>
  </div>
</template>

<script setup>
import trash from "../../assets/img/bildirimler/trash.svg";
</script>

<style lang="scss"></style>
