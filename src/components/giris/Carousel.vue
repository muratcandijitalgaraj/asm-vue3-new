<template>
  <div class="carouselComponent">
    <!-- :autoplay="3000"  -->
    <Carousel class="caro" :wrap-around="true">
      <Slide v-for="image in images" :key="image.id">
        <div class="carousel__item">
          <img class="image" :src="image.url" alt="" />
          <div class="carouselTexts">{{ image.message }}</div>
        </div>
      </Slide>

      <template class="ads" #addons>
        <Pagination class="pags" />
      </template>
    </Carousel>
  </div>
</template>

<script scoped>
import image1 from "../../assets/img/carousel/1.svg";
import image2 from "../../assets/img/carousel/2.svg";
import image3 from "../../assets/img/carousel/3.svg";
import { defineComponent } from "vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Autoplay",
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      images: [
        { id: 1, url: image1, message: "Hızlıca randevu alın ve düzenleyin" },
        {
          id: 2,
          url: image2,
          message: "Dilediğiniz yerden doktorunuzla görüntülü görüşün",
        },
        {
          id: 2,
          url: image3,
          message: "Test sonuçlarınızı ve raporlarınızı anında görüntüleyin",
        },
      ],
    };
  },
});
</script>

<style>
.carouselComponent {
  margin-left: 5rem;
  margin-bottom: 4rem;
}
.carousel__pagination-button {
  margin: var(--vc-pgn-margin);
  width: var(--vc-pgn-width);
  height: var(--vc-pgn-height);
  border-radius: var(--vc-pgn-height);
  border: 0;
  cursor: pointer;
  background-color: #a4abb6;
}

.carousel__pagination-button--active {
  background-color: black;
}
.carousel__item {
  margin-right: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.carouselTexts {
  width: 300px;
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: 800;
  text-align: center;
  font-size: 20px;
  margin-top: 27px;
  margin-bottom: 20px;
  margin-left: 1rem;

  /* Primary */

  color: #3c4e69;
}
.pags {
  margin-right: 3rem;
}
</style>
