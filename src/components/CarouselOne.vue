
<!-- <script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination,Navigation } from 'swiper/modules';
// define your modules list here
const modules = [Pagination,Navigation]
</script>



<template>
  <swiper :modules="modules" :slides-per-view="1" :Pagination="true">
      <swiper-slide>Foo</swiper-slide>
      <swiper-slide>Bar</swiper-slide>
  </swiper>
</template> -->


<!-- <template>
  <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
    <SplideSlide>
      <img src="@/assets/pictures/google.png" alt="Sample 1">
    </SplideSlide>
    <SplideSlide>
      <img src="@/assets/pictures/meta.png" alt="Sample 2">
    </SplideSlide>
  </Splide>
</template> -->
<script setup>
 
</script>


<template>
  
<section class="splide" aria-label="Slide Container Example">
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide">
        <div class="splide__slide__container">
          <img src="...">
        </div>
        Lorem Ipsum Dolor Sit Amet
      </li>
      <li class="splide__slide">
        <div class="splide__slide__container">
          <img src="...">
        </div>

        
        Lorem Ipsum Dolor Sit Amet
      </li>
    </ul>
  </div>
</section>
</template>
