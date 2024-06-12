<script setup>
// import BRAND_NAME from "@/utils/constants.js",
import Brands from '@/components/Brands.vue'
import CardsHIW from '@/components/CardsHIW.vue'
import Othertasks from '@/components/Othertasks.vue'
import Freelancer from '@/components/Freelancer.vue'
const landingTxt = 'Get Paid To Do Short Tasks Online'
</script>

<template>
  <section>
    <main
      class="text-white bg-[url(@/assets/pictures/bgimg.gif)] lg:bg-cover md:bg-contain bg-no-repeat h-[70vh] md:h-screen flex items-center px-5 md:px-20"
    >
      <div class="">
        <h2 class="text-white lg:text-[72px] md:text-[50px] text-[50px] leading-tight md:w-2/3">
          {{ landingTxt }}
        </h2>
        <div class="md:w-2/3 leading-lg lg:text-[20px] text-[20px] md:text-[15px] break-words">
          <p>Earn money wherever and whenever you want — <br /></p>
          <p>all you need is a device connected to the internet</p>
        </div>
        <button
          class="hover:bg-gray-900 duration-300 md:text-xl text-[17px] bg-black text-white h-12 md:w-[150px] lg:w-[170px] w-[180px] rounded-sm md:mt-4 mt-8"
        >
          Start Earning
        </button>
      </div>
    </main>
    <Brands />
    <CardsHIW />
    <Othertasks />
    <Freelancer />
  </section>
</template>
