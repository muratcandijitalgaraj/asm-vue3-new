<template>
  <div class="forBackgroundColor">
    <div class="mainComponent">
      <Header para="Henüz üye değil misiniz?" buttonText="Kayıt Olun" />
      <Bulutlar />
      <MiddlePart />
      <Bottom />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "../components/shared/Header.vue";
import Bulutlar from "../components/giris/Bulutlar.vue";
import MiddlePart from "../components/giris/MiddlePart.vue";
import Bottom from "../components/shared/Bottom.vue";
import Footer from "../components/shared/Footer.vue";
export default { components: { Header, Bulutlar, MiddlePart, Bottom, Footer } };
</script>

<style scoped lang="scss">
$backgroundColor: #e9f3f9;
.forBackgroundColor {
  width: 100%;
  height: 100%;
  background: $backgroundColor;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
.mainComponent {
  width: 100%;
  height: auto;
  background: linear-gradient(
      0deg,
      #e9f3f9 12.23%,
      rgba(233, 243, 249, 0) 77.17%
    ),
    url("../assets/giris/bulutlar.svg");
  background-repeat: no-repeat;
}
// tablet starts here
@media only screen and (max-width: 1200px) {
  .forBackgroundColor {
    height: auto;
  }
}
@media only screen and (min-width: 1200px) {
  .forBackgroundColor {
    height: auto;
  }
}
</style>
