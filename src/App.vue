<template>
  <Master>
    <template v-slot:header><Header/></template>
    <template v-slot:sidebar><Sidebar/></template>
    <template v-slot:section>
      <Main>
        <Dashboard/>
      </Main>
    </template>
    <template v-slot:footer><Footer/></template>
  </Master>
</template>

<script setup>
import Dashboard from './views/Dashboard.vue'
</script>

<style lang="scss">
</style>
