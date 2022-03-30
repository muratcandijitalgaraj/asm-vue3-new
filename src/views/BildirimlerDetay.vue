<template>
  <Master>
    <template v-slot:header><Header /></template>
    <template v-slot:sidebar><Sidebar /></template>
    <template v-slot:section>
      <Main> </Main>
    </template>
    <template v-slot:footer><Footer /></template>
  </Master>
</template>

<script setup></script>

<style lang="scss"></style>
