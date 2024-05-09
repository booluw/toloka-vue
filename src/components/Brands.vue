
<script setup>
import { FwbCarousel } from 'flowbite-vue'
import google from '@/assets/pictures/google.png'
import meta from '@/assets/pictures/meta.png'

const pictures = [
  {src: google, alt: 'Image 1'},
  {src: meta, alt: 'Image 2'},
  {src: './assets/pictures/paypal.png', alt: 'Image 3'},
]

</script>

<template>
  <section>
   
  
  <div class="container w-[80%] grid grid-cols-6">

    <h3 class="text-[22px] ml-16 mt-3 font-bold ">Trusted by:</h3>
    <img src="@/assets/pictures/google.png" alt="google"/>
    <img src="@/assets/pictures/meta.png" alt="meta"/>
    <img src="@/assets/pictures/netflix.png" alt="netflix"/>
    <img src="@/assets/pictures/panda.png" alt="PandG"/>
    <img src="@/assets/pictures/paypal.png" alt="paypal"/>
  </div>

  <template class="bg-danger">
  <fwb-carousel :pictures="pictures" />
   </template>
</section>
</template>