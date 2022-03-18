<template>
  <div class="searchComp row">
    <div class="col-12 col-lg-9">
      <div class="searchContainer d-flex">
        <input class="searchBar" type="text" placeholder="Sonuç Ara" />
        <div class="searchLogoContainer d-flex align-items-center">
          <img class="searchLogo" :src="search" alt="" />
        </div>
      </div>
    </div>
    <div class="col-12 col-lg-3 d-flex justify-content-center">
      <button class="btn d-flex align-items-center">
        <img :src="filtre" alt="" class="logo filtreLogo" />
        <span class="para">Filtre Kullan</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import search from "../../../assets/img/medical-records/search.svg";
import filtre from "../../../assets/img/medical-records/filtre.svg";
</script>

<style scoped lang="scss">
// @import "../../assets/scss/style";
.searchComp {
  margin-top: 22px;
}
.searchContainer {
  width: 100%;
}
.searchBar {
  width: 100%;
  height: 48px;
  padding-left: 15px;

  background: #ffffff;
  /* Form Shadow */

  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.03);
  border-radius: 6px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  border: none;
  /* text3 */

  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
  /* identical to box height, or 21px */

  letter-spacing: -0.01em;

  /* Gri */
}
.searchLogoContainer {
  height: 48px;
  width: 10%;
  background: #ffffff;
  /* Form Shadow */

  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.03);
  border-radius: 6px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border: none;
}
.btn {
  height: 48px;

  background: #ffffff;
  /* Form Shadow */

  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.03);
  border-radius: 6px;
}
.filtreLogo {
  margin-right: 13px;
}
.para {
  /* text3 */

  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
  /* identical to box height, or 21px */

  letter-spacing: -0.01em;

  /* Gri */

  color: #818b9a;
}
@media only screen and (max-width: 991px) {
  .searchBar {
    margin-bottom: 1rem;
  }
}
</style>
