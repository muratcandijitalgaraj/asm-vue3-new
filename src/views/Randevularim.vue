<template>
  <Master>
    <template v-slot:header><Header /></template>
    <template v-slot:sidebar><Sidebar /></template>
    <template v-slot:section>
      <Main>
        <div class="main-container col-md-12 col-lg-8 col-xl-8 col-xxl-9">
          <div class="greyLine"></div>

          <div class="titles d-flex justify-content-between align-items-center">
            <span class="bigTitle">Randevularınız</span>
            <span class="smallTitle">Hepsini Göster</span>
          </div>

<!--          <Appointments
              v-for="(item, key) in appointments"
              :price="item.price"
              :key="key"
              :hospital-data="item.hospital"
              :doctor-data="item.doctor"
              :date="item.date"
              :type="item.type"
          />-->

        </div>
      </Main>
    </template>
    <template v-slot:footer><Footer /></template>
  </Master>
</template>

<script setup>
import Appointments from "../components/UI/Appointments/Appointments.vue";

import store from "../store"
import {ref, onBeforeMount, onMounted} from "vue";

const data = ref([])

onMounted(() => {
  store.dispatch('appointments/getAppointments')
      .then(res => console.log(res))
      .catch(err => console.log(err.response))
})

</script>

<style></style>
