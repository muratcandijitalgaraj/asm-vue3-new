<template>
  one

  <button @click="sendEvent">click me</button>
</template>

<script setup>
// const emit = defineEmits(['eventA', 'eventB'])
// function btnClick(params) {
//     emit('eventA')
//     emit('eventB', params)
// }
let params = "parametres here";
const emit = defineEmits(["someEvent"]);
function sendEvent() {
  emit("someEvent", "sth new");
}
</script>

<style scoped lang="scss">
// @import "../../assets/scss/style";
</style>
