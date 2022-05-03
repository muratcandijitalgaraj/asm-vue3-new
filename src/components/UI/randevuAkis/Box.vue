<template>
  <div
    @click="click"
    :class="{'active': getCheck}"
    class="wrapper d-flex flex-row justify-content-start align-items-center"
    :id="data"
  >
    <div class="circle d-flex justify-content-center align-items-center">
      <img :src="checkMark" alt="" class="checkMark" />
    </div>
    <div class="name">{{ name }}</div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import checkMark from "../../../assets/img/randevuAkis/checkMark.svg";
const props = defineProps({
  name: { required: true, type: String },
  data: { required: true, type: Number },
  modelValue: {required: true, type: Number}
});

const emit = defineEmits(['update:modelValue'])

// const handle = ref(false);
const click = async () => {
  await emit('update:modelValue', props.data)

  if (props.modelValue === props.data) {
    isCheck.value = true
  } else {
    isCheck.value = false
  }
}

const isCheck = ref(false)

const getCheck = computed(() => {
  if (isCheck.value && props.data === props.modelValue) {
    return true
  }

  return false
})

</script>

<style lang="scss" scoped>
.title {
  width: 249px;
  height: 22px;
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 130%;
  /* identical to box height, or 22px */

  letter-spacing: -0.01em;

  /* Primary */

  color: #3c4e69;
}
.wrapper {
  width: 341px;
  height: 47px;
  background: #ffffff;
  /* Boxx Shadow */
  box-shadow: 0px 1px 3px rgba(42, 49, 55, 0.11);
  border-radius: 6px;
  margin-bottom: 17px;
}
.circle {
  width: 20px;
  height: 20px;
  border: 1px solid #e1e1e1;
  border-radius: 50%;
  margin: 0 12px;
}
.name {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  /* Primary */

  color: #3c4e69;
}
.checkMark {
  display: none;
}
.active {
  background: #32a5df;
  .name {
    color: white;
  }
  .circle {
    background: white;
  }
  .checkMark {
    display: inline-block;
  }
}
</style>
