<script setup>
// import BRAND_NAME from "@/utils/constants.js",
import Brands from "@/components/Brands.vue"
import CardsHIW from "@/components/CardsHIW.vue"
import Othertasks from "@/components/Othertasks.vue"
import Freelancer from "@/components/Freelancer.vue"
const logo = "Afro Hub"
const landingTxt = "Get Paid To Do Short Tasks Online"
</script>

<template>
  <section>
    <main
      class="text-white bg-[url(@/assets/pictures/bgimg.gif)] lg:bg-cover md:bg-contain bg-no-repeat h-screen"
    >
      <div class="container flex justify-between items-center p-5">
        <h2 class="text-3xl ml-14">{{ logo }}</h2>
        <input type="checkbox" id="nav" class="hidden" />

        <label
          for="nav"
          class="res-nav md:hidden fixed left-96 flex flex-col cursor-pointer justify-end items-center"
        >
          <div class="box1 w-10 pt-1 mb-1 bg-danger"></div>
          <div class="box2 w-10 pt-1 mb-1 bg-danger"></div>
          <div class="box3 w-10 pt-1 mb-1 bg-danger"></div>
        </label>
        <ul
          class="nav-items text-xl md:flex md:gap-5 lg:gap-9 flex-col hidden md:flex-row justify-between items-center"
        >
          <li><a class="border-e-white border-b-2 py-3" href="">Home</a></li>
          <li><a class="hover:border-e-white hover:border-b-2 py-3" href="">Blog</a></li>
          <li><a class="hover:border-e-white hover:border-b-2 py-3" href="">FAQ</a></li>
          <li><a class="hover:border-e-white hover:border-b-2 py-3" href="">Help</a></li>
        </ul>

        <div class="btn text-xl md:ml-10 md:flex nav-items hidden md:justify-between md:items-center">
        <router-link to="/login">
          <button class="hover:bg-black w-20 p-2 rounded-sm duration-700">Login</button>
        </router-link>
          <router-link to="/forms">
          <button class="hover:bg-black w-24 p-2 rounded-sm duration-700">Sign up</button>
        </router-link>
        
        </div>
      </div>

      <div class="text pt-24 md:pt-10 ml-20">
        <h2
          class="text-white lg:text-[72px] md:text-[50px] text-[50px] md:w-[65%] leading-tight lg:w-[42%] mt-22 lg:mt-28 md:mt-16"
        >
          {{ landingTxt }}
        </h2>
        <div
          class="lg:w-[32%] md:w-[55%] leading-lg lg:text-[20px] text-[20px] md:text-[15px] md:mt-3 mt-8 break-words"
        >
          <p>Earn money wherever and whenever you want — <br/> </p>
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
    <CardsHIW/>
    <Othertasks/>
    <Freelancer/>
    
    
    
  </section>
</template>

<style scoped>
#nav:checked ~ .nav-items {
  display: flex;
  /* position:absolute; */
  /* width: 100%; */
  /* height: 50vh; */
  /* padding: 200px; */
}
</style>
