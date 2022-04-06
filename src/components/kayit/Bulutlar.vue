<template>
  <div class="kayitBulutlarComponent">
    <img src="../../assets/img//kayit/sol-bulut.svg" alt="" class="sol-bulut" />
    <img src="../../assets/img//kayit/sag-bulut.svg" alt="" class="sag-bulut" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.kayitBulutlarComponent {
  height: auto;
  width: 100%;
  display: flex;
  /* border: 2px solid black; */
  justify-content: space-between;
}
.sol-bulut {
  height: 183px;
  width: 357px;
  /* border: 2px solid red; */
  border-radius: 0px;
  margin-top: 2rem;
}

.sag-bulut {
  height: 211px;
  width: 425px;
  /* border: 2px solid red; */
  border-radius: 0px;
  /* position: absolute; */
  right: 0;
}
</style>
