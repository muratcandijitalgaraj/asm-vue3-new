<template>
  <nav class="sidebar col-md-12 col-lg-4 col-xl-4 col-xxl-3">
    <div class="container">
      <div class="row">
        <div class="col-12 d-flex justify-content-center">
          <img
            class="image"
            src="../../assets/img/sidebar/sidebar-img.svg"
            alt=""
          />
        </div>
        <div class="col-12 d-flex justify-content-center">
          <p class="title">Akgül Yılmaz</p>
        </div>
        <div class="col-12 d-flex justify-content-center">
          <span class="greyline"></span>
        </div>
        <div class="col cols d-flex justify-content-start align-items-center">
          <img src="../../assets/img/sidebar/giris.svg" alt="" class="logo" />
          <div class="text">Giriş</div>
        </div>
        <!-- col ends -->
        <div class="col cols d-flex justify-content-start align-items-center">
          <img
            src="../../assets/img/sidebar/randevularim.svg"
            alt=""
            class="logo"
          />
          <div class="text">Randevularım</div>
        </div>
        <!-- col ends -->
        <div class="col cols d-flex justify-content-start align-items-center">
          <img
            src="../../assets/img/sidebar/kayitlar.svg"
            alt=""
            class="logo"
          />
          <div class="text">Tıbbi Kayıtlar</div>
        </div>
        <!-- col ends -->
        <div class="col cols d-flex justify-content-start align-items-center">
          <img src="../../assets/img/sidebar/gecmis.svg" alt="" class="logo" />
          <div class="text">Geçmiş Muayeneler</div>
        </div>
        <!-- col ends -->
        <div class="col cols d-flex justify-content-start align-items-center">
          <img
            src="../../assets/img/sidebar/receteler.svg"
            alt=""
            class="logo"
          />
          <div class="text">Reçeteler</div>
        </div>
        <!-- col ends -->
        <div class="col cols d-flex justify-content-start align-items-center">
          <img src="../../assets/img/sidebar/hesap.svg" alt="" class="logo" />
          <div class="text">Hesap Bilgileriniz</div>
        </div>
        <!-- col ends -->
        <div class="col cols d-flex justify-content-start align-items-center">
          <img src="../../assets/img/sidebar/anket.svg" alt="" class="logo" />
          <div class="text">Anketimize katılın</div>
        </div>
        <!-- col ends -->
        <div class="col cols d-flex justify-content-start align-items-center">
          <img src="../../assets/img/sidebar/cikis.svg" alt="" class="logo" />
          <div class="text">Çıkış Yap</div>
        </div>
        <!-- col ends -->
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style scoped lang="scss">
@import "../../assets/scss/style";
.sidebar {
  width: 270px;
  height: 1018px;
  background: $sidebar;
  border-radius: 18px 0px 0px 18px;
}

.image {
  width: 116px;
  height: 116px;
  margin-top: 10px;
  margin-bottom: 2px;
}
.logo {
  margin-right: 10px;
  width: 22px;
  height: 22px;
}
.title {
  width: 97px;
  height: 22px;
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height */
  text-align: center;
  color: $title;
}
.greyline {
  background: $border;
  height: 1px;
  width: 100%;
  margin-bottom: 22px;
}
.text {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height */
  color: $text;
  width: auto;
  height: 22px;
}
.cols {
  margin-bottom: 28px;
}
</style>
