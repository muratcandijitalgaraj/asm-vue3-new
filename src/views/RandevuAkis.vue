<template>
  <Master>
    <template v-slot:header><Header /></template>
    <template v-slot:sidebar><Sidebar /></template>
    <template v-slot:section>
      <!-- your code comes here -->
      <div class="zemin">
        <SecimVue />
      </div>
    </template>
    <template v-slot:footer><Footer /></template>
  </Master>
</template>

<script setup>
import SecimVue from "../components/randevuAkis/Secim.vue";
</script>

<style lang="scss" scoped>
.zemin {
  width: 60%;
  height: 100%;
  background: #f2f8fb;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.15);
  border-radius: 18px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>
