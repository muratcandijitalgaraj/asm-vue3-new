<template>
  <div class="info-icon" :class="getColor">
    <img :src="getImage" class="img-fluid" alt="">
  </div>
</template>

<script setup>
import {computed} from "vue";
const props = defineProps({
  type: {required: true}
})

const getImage = computed( () => {
  switch (props.type) {
    case 1:
      return "/src/assets/img/appointments/color-hospital.svg";
    case 2:
      return "/src/assets/img/appointments/color-clock.svg";
    case 3:
      return "/src/assets/img/appointments/color-like.svg";
  }
})

const getColor = computed( () => {
  switch (props.type) {
    case 1: return "red"
    case 2: return "orange"
    case 3: return "green"
  }
})

</script>

<style scoped lang="scss">
@import "../../../assets/scss/style";
.info-icon {
  display: flex;
  align-self: stretch;
  width: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  @media (max-width: 1199px) {
    width: 100%;
    height: 30px;
    margin-bottom: 15px;
  }

  &.red {
    background-color: rgba($red, .10);
  }

  &.orange {
    background-color: rgba($orange, .10);
  }

  &.green {
    background-color: rgba($green, .10);
  }
}
</style>
