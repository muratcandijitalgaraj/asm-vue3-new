<template>
  <div class="info" :class="getColor">
    <h4 class="mb-0">{{ getText }}</h4>
    <span class="date">{{ date }}</span>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  type: { required: true },
  date: { required: true, type: String },
});

const getText = computed(() => {
  switch (props.type) {
    case 1:
      return "Görüşme Bekleniyor";
    case 2:
      return "Ödeme Bekleniyor";
    case 3:
      return "Görüşme Tamamlandı";
  }
});

const getColor = computed(() => {
  switch (props.type) {
    case 1:
      return "red";
    case 2:
      return "orange";
    case 3:
      return "green";
  }
});
</script>

<style scoped lang="scss">
@import "../../../assets/scss/style";
.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 7.5px;

  h4 {
    font-size: 16px;
    @include bold;
  }

  .date {
    font-size: 15px;
  }

  @media (max-width: 1199px) {
    margin-bottom: 15px;
    width: 100%;
  }

  &.red {
    h4 {
      color: $red;
    }
  }

  &.orange {
    h4 {
      color: $orange;
    }
  }

  &.green {
    h4 {
      color: $green;
    }
  }
}
</style>
