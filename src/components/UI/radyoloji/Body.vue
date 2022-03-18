<template>
  <div class="row radyolojiBody">
    <span class="col-12 bigTitle"> {{ bigTitle }} </span>
    <CardVue
      :type="type"
      :logo="logo"
      :status="status"
      :title="title"
      :para="para"
    />
  </div>
</template>

<script setup>
import CardVue from "./Card.vue";
const props = defineProps({
  bigTitle: { required: true, type: String },
  type: { required: true },
  logo: { required: true, type: String },
  status: { required: true, type: String },
  title: { required: true, type: String },
  para: { required: true, type: String },
});
</script>

<style scoped lang="scss">
// @import "../../assets/scss/style";
.bigTitle {
  /* baslik3 */

  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 130%;
  /* identical to box height, or 29px */

  /* Secondary */

  color: #32a5df;
  margin-bottom: 20px;
}
</style>
