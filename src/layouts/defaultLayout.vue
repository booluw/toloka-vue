<script lang="ts" setup>
const logo = 'Afro Hub'
</script>
<template>
  <section>
    <div
      class="flex justify-between items-center py-5 px-5 md:px-20 bg-primary text-white sticky top-0 shadow"
    >
      <h2 class="text-3xl">{{ logo }}</h2>
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

      <div
        class="btn text-xl md:ml-10 md:flex nav-items hidden md:justify-between md:items-center gap-5"
      >
        <router-link to="/login">
          <button class="hover:bg-black w-20 p-2 rounded-sm duration-700">Login</button>
        </router-link>
        <router-link to="/signup">
          <button class="hover:bg-black w-24 p-2 rounded-sm duration-700">Sign up</button>
        </router-link>
      </div>
    </div>
    <router-view />
  </section>
</template>
