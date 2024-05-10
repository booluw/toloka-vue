<script setup>
// import BRAND_NAME from "@/utils/constants.js"
import { FwbButton } from 'flowbite-vue'
import Brands from "@/components/Brands.vue"
import CarouselOne from "@/components/CarouselOne.vue"
const logo = "Afro Hub"
const landingTxt = "Get paid to do short tasks online"
</script>

<template>
  <section>
    <main class=" text-white bg-[url(@/assets/pictures/bgimg.gif)] lg:bg-cover md:bg-contain bg-no-repeat h-screen ">
      <div class="container flex justify-between items-center p-5">
        <h2 class="text-3xl ml-14">{{ logo }}</h2>
        <input type="checkbox" id="nav" class="hidden" />

        <label for="nav" class="res-nav md:hidden fixed left-96 flex flex-col cursor-pointer justify-end items-center">
          <div class="box1 w-10 pt-1 mb-1 bg-danger"></div>
          <div class="box2 w-10 pt-1 mb-1 bg-danger"></div>
          <div class="box3 w-10 pt-1 mb-1 bg-danger"></div>
        </label>
          <ul class="nav-items md:flex flex-col hidden md:flex-row md:gap-[30px] ml-10  justify-center items-center">
            <li><a class="hover:text-gray-300" href="">Home</a></li>
            <li><a class="hover:text-gray-300" href="">Blog</a></li>
            <li><a class="hover:text-gray-300" href="">FAQ</a></li>
            <li><a class="hover:text-gray-300" href="">Help</a></li>
          </ul>

          <div class="btn md:flex nav-items hidden  md:gap-[10px] justify-center items-center">
            <button class="hover:bg-black w-20 p-2 rounded-sm duration-700">Login</button>
            <button class="hover:bg-black w-20 p-2 rounded-sm duration-700">Sign up</button>
          </div>
        </div>

        <div class="text"> 
          <h2 class="text-white lg:text-[72px] md:text-[50px] text-[45px] md:w-[50%] w-[85%] leading-none lg:w-[42%] ml-14 lg:ml-14 mt-20 lg:mt-28 md:mt-16">
            {{landingTxt}}
          </h2>
          <p class="lg:w-[32%] md:w-[40%] w-[70%] ml-10 lg:ml-14
           lg:text-[20px] text-[20px] md:text-[15px] mt-5 break-words">Earn money wherever and whenever you want — all you need is a device
            connected to the internet</p>
          <button class="hover:bg-gray-900 duration-300 md:text-[15px] text-[17px] bg-black text-white h-12 md:w-[150px] lg:w-[170px] w-[180px] rounded-sm ml-10 lg:ml-14 mt-5">Start earning money</button>
        </div>
    </main>
    <Brands/>
    <CarouselOne/>

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
