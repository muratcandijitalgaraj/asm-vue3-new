<template>
  <header class="header container">
    <div class="left-block">
      <div class="logo">
        <img src="../../assets/img/logo.svg" alt="" class="img-fluid">
      </div>
      <h4 class="text-uppercase">online işlemler</h4>
    </div>
    <div class="right-block">
      <div class="notification">
        <span class="info">3</span>
        <img src="../../assets/img/notification.svg" alt="" class="img-fluid">
      </div>
      <div class="profile">
        <img src="../../assets/img/user-circle.svg" alt="" class="img-fluid">
        <span class="text-capitalize">profili değiştir</span>
      </div>
    </div>
  </header>
</template>

<script setup>

</script>

<style scoped lang="scss">
@import "../../assets/scss/style";
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;

  .left-block {
    display: flex;
    align-items: center;

    h4 {
      color: $white;
      font-size: 15px;
      margin-left: 15px;
      width: 100px;
      margin-bottom: 0;
    }
  }

  .right-block {
    display: flex;
    align-items: center;

    .notification {
      position: relative;
      margin-right: 22px;

      &::after {
        content: "";
        width: 1px;
        height: 50px;
        background-color: rgba($black, .10);
        position: absolute;
        right: -21.50px;
        top: 50%;
        transform: translateY(-50%);
      }

      span {
        position: absolute;
        background-color: $red;
        display: flex;
        align-items: center;
        justify-content: center;
        color: $white;
        height: 17px;
        min-width: 17px;
        border-radius: 17px;
        font-size: 11px;
        top: -5px;
        left: -3px;
        padding: 3px;
        box-sizing: border-box;
      }
    }

    .profile {
      display: flex;
      align-items: center;
      margin-left: 22px;

      span {
        color: $white;
        font-size: 13px;
        margin-left: 10px;
      }
    }
  }
}
</style>
