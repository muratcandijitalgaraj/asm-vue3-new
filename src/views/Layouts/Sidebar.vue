<template>
  <div class="sidebar col-md-12 col-lg-4 col-xl-4 col-xxl-3">
    <nav>
      <ProfilePhoto />

      <ul class="mb-0">
        <div class="row">
          <NavItem
            class="navbarItem col-6 col-lg-12"
            v-for="(item, key) in links"
            :title="item.title"
            :url="item.url"
            :src="item.src"
            :key="key"
          />
        </div>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import ProfilePhoto from "../../components/Sidebar/ProfilePhoto.vue";
import NavItem from "../../components/Sidebar/NavItem.vue";

import { ref } from "vue";
const links = ref([
  {
    src: "/src/assets/img/sidebar/giris.svg",
    title: "Giriş",
    url: {},
  },
  {
    src: "/src/assets/img/sidebar/randevularim.svg",
    title: "Randevularım",
    url: {},
  },
  {
    src: "/src/assets/img/sidebar/kayitlar.svg",
    title: "Tıbbi Kayıtlar",
    url: {},
  },
  {
    src: "/src/assets/img/sidebar/gecmis.svg",
    title: "Geçmiş Muayeneler",
    url: {},
  },
  {
    src: "/src/assets/img/sidebar/receteler.svg",
    title: "Reçeteler",
    url: {},
  },
  {
    src: "/src/assets/img/sidebar/hesap.svg",
    title: "Hesap Bilgileriniz",
    url: {},
  },
  {
    src: "/src/assets/img/sidebar/anket.svg",
    title: "Anketimize katılın",
    url: {},
  },
  {
    src: "/src/assets/img/sidebar/cikis.svg",
    title: "Çıkış Yap",
    url: {},
  },
]);
</script>

<style scoped lang="scss">
@import "../../assets/scss/style";

.sidebar {
  height: auto;
  background: $sidebar;
  border-radius: 18px 0px 0px 18px;
  padding-left: 30px;
  padding-right: 30px;

  ul {
    padding: 0;
  }
}
.navbarItem {
}
@media only screen and (max-width: 992px) {
  .sidebar {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-top-right-radius: 18px;
  }
}
</style>
