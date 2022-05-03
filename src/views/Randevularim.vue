<template>
  <Master>
    <template v-slot:header><Header /></template>
    <template v-slot:sidebar><Sidebar /></template>
    <template v-slot:section>
      <div class="main-container col-md-12 col-lg-8 col-xl-8 col-xxl-9">

        <div class="titles d-flex justify-content-between align-items-center">
          <span class="bigTitle">Randevularınız</span>
          <span class="smallTitle">Hepsini Göster</span>
        </div>

        <Appointments
            v-for="(item, key) in appointments"
            :price="item.price"
            :key="key"
            :hospital-data="{title: item.facilityName, subTitle: item.facilityName,}"
            :doctor-data="{title: item.resources[0].resourceName, branch: item.resources[0].departmentName}"
            :date="item.from"
            :type="item.appointmentType"
        />
      </div>
    </template>
    <template v-slot:footer><Footer /></template>
  </Master>
</template>

<script setup>
import Appointments from "../components/UI/Appointments/Appointments.vue";

import store from "../store"
import {ref, onBeforeMount, onMounted} from "vue";

const appointments = ref([])

onMounted(() => {
  store.dispatch('appointments/getAppointments')
      .then(res => appointments.value = res?.data?.items)
      .catch(err => console.log(err.response))
})

</script>

<style scoped lang="scss">
@import "../assets/scss/style";
.main-container {
  height: auto;
  background: $main;
  border-top-right-radius: 18px;
  border-bottom-right-radius: 18px;
  padding: 30px;

  .greyLine {
    height: 1px;
    background: $border;
  }
  .randevularGreyLine {
    margin-bottom: 25px;
    margin-top: 20px;
  }
  .titles {
    margin-top: 22px;
    margin-bottom: 20px;
  }
  .bigTitle {
    /* baslik3 */
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 130%;
    /* identical to box height, or 29px */
    /* Secondary */
    color: $blue;
  }
  .smallTitle {
    /* text4-bold */
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 130%;
    /* identical to box height, or 17px */
    letter-spacing: -0.01em;
    /* Gri */
    color: $text-grey;
  }
}

@media only screen and (max-width: 992px) {
  .main-container {
    border-top-right-radius: 0px;
  }
}
</style>
