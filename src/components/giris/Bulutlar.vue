<template>
  <div class="bulutlarPart">
    <img src="../../assets/img/giris/sol-bulut.svg" alt="" class="sol-bulut" />
    <img src="../../assets/img/giris/sag-bulut.svg" alt="" class="sag-bulut" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bulutlarPart {
  height: auto;
  width: 100%;
  /* border: 1px solid black; */
}
.sol-bulut {
  position: absolute;
  width: 507px;
  height: 183px;
  left: -11rem;
  top: 83px;
  /* transform: matrix(-1, 0, 0, 1, 0, 0); */
}
.sag-bulut {
  position: absolute;
  width: 200px;
  height: 183px;
  right: 0;
  top: 51px;
  /* transform: matrix(-1, 0, 0, 1, 0, 0); */
}
</style>
