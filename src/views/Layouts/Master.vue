<template>
  <div class="master">
    <div class="__bg-clouds">
      <img src="../../assets/img/bulutlar.svg" alt="" />
    </div>

    <slot name="header"></slot>

    <div class="container __height">
      <div class="row">
        <slot name="sidebar"></slot>

        <slot name="section"></slot>
      </div>
    </div>

    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "Master",
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/style";
.master {
  height: 100vh;
  background-color: $blue;
  position: relative;

  .__bg-clouds {
    position: fixed;
    z-index: 0;
    left: 0;
    top: 150px;
    width: 100vw;
    text-align: center;
    height: 250px;

    img {
      display: inline-block;
      width: 100%;
      height: 100%;
    }
  }
}

.__height {
  height: calc(100vh - 200px);
  position: relative;
  z-index: 1;

  > .row {
    height: 100%;
  }
}
</style>
