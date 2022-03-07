<template>
  <div class="pay">
    <p>Ödemenizi yaptığınızda randevunuz aktif hale gelecektir.</p>
    <button>{{ price }} TL Ödeme Yapın</button>
  </div>
</template>

<script setup>
const props = defineProps({
  price: {required:false, default:0}
})
</script>

<style scoped lang="scss">
@import "../../../assets/scss/style";
.pay {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 7.5px;
  padding-right: 7.5px;
  min-height: 70px;
  border-top: 1px solid $border2;

  p {
    margin-bottom: 0;
    font-size: 15px;
    color: $text-grey;
  }

  button {
    background-color: $orange;
    box-shadow: none;
    outline: none;
    font-size: 15px;
    @include bold;
    color: $white;
    padding: 7px 15px;
    border-radius: 6px;
    border: none;
    min-width: 250px;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    padding-top: 15px;
    padding-bottom: 15px;

    p {
      margin-bottom: 15px;
    }
  }
}
</style>
