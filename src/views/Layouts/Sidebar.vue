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
            :number="item.number"
          />
        </div>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import ProfilePhoto from "../../components/Sidebar/ProfilePhoto.vue";
import NavItem from "../../components/Sidebar/NavItem.vue";
import girisLogo from "../../assets/img/sidebar/giris.svg";
import randevuLogo from "../../assets/img/sidebar/randevularim.svg";
import kayitlarLogo from "../../assets/img/sidebar/kayitlar.svg";
import gecmisLogo from "../../assets/img/sidebar/gecmis.svg";
import receteLogo from "../../assets/img/sidebar/receteler.svg";
import hesapLogo from "../../assets/img/sidebar/hesap.svg";
import anketLogo from "../../assets/img/sidebar/anket.svg";
import cikisLogo from "../../assets/img/sidebar/cikis.svg";
import Badge from "../../components/UI/Badge.vue";

import { ref } from "vue";
const links = ref([
  {
    src: girisLogo,
    title: "Giriş",
    url: {},
  },
  {
    src: randevuLogo,
    title: "Randevularım",
    url: { name: "Randevularim" },
  },
  {
    src: kayitlarLogo,
    title: "Tıbbi Kayıtlar",
    url: {},
    number: 1,
  },
  {
    src: gecmisLogo,
    title: "Geçmiş Muayeneler",
    url: {},
  },
  {
    src: receteLogo,
    title: "Reçeteler",
    url: {},
  },
  {
    src: hesapLogo,
    title: "Hesap Bilgileriniz",
    url: {},
  },
  {
    src: anketLogo,
    title: "Anketimize katılın",
    url: {},
  },
  {
    src: cikisLogo,
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
// .badge {
//   border: 5px solid red;
// }
@media only screen and (max-width: 992px) {
  .sidebar {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-top-right-radius: 18px;
  }
}
</style>
