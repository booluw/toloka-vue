<script lang="ts" setup>
const logo = 'Afro Hub'
</script>
<template>
  <section>
    <div
      class="flex justify-between items-center py-5 px-5 md:px-20 md:py-0 bg-primary text-white sticky top-0 shadow"
    >
      <h2 class="text-3xl">{{ logo }}</h2>
      <input type="checkbox" id="nav" class="hidden" />

      <label
        for="nav"
        class="box-parent md:hidden flex flex-col cursor-pointer justify-end items-center"
      >
        <div class="box w-7 pt-[2px] mb-1 bg-white"></div>
        <div class="box w-7 pt-[2px] mb-1 bg-white"></div>
        <div class="box w-7 pt-[2px] mb-1 bg-white"></div>
      </label>
      <div class="nav-items hidden md:w-[70%] md:flex justify-between items-center bg-[#eea] md:bg-transparent p-[20px] md:p-0">
        <ul
          class="text-xl md:flex md:gap-5 lg:gap-9 flex-col md:flex-row justify-between items-center bg-primary my-5 rounded"
        >
          <li><a class="border-b-white/50 border-b block p-5 md:py-3" href="">Home</a></li>
          <li><a class="hover:border-e-white hover:border-b block p-5 md:py-3" href="">Blog</a></li>
          <li><a class="hover:border-e-white hover:border-b block p-5 md:py-3" href="">FAQ</a></li>
          <li><a class="hover:border-e-white hover:border-b block p-5 md:py-3" href="">Help</a></li>
        </ul>

        <div
          class="btn text-xl flex md:justify-between md:items-center gap-5"
        >
          <router-link class="hover:bg-black hover:text-white hover:border-black md:w-auto p-2 md:px-5 rounded duration-700 w-1/2 text-center border border-primary md:border-none text-primary md:text-white" to="/login">
            Login
          </router-link>
          <router-link class="hover:bg-black hover:text-white hover:border-black md:w-auto p-2 md:px-5 rounded duration-700 w-1/2 text-center border border-primary md:border-none text-primary md:text-white" to="/signup">
            Sign up
          </router-link>
        </div>
      </div>
    </div>
    <router-view />
  </section>
</template>

<style lang="scss" scoped>
#nav:checked ~ .nav-items {
  display: block;
  position: fixed;
  top: 76px;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 99;
}

.box {
  transition: transform .3s ease-in-out;
}

#nav:checked ~ .box-parent {
  & .box:nth-child(even) {
    opacity: 0
  }

  .box:first-child{
    transform: rotate(45deg) translate(0, 8px)
  }

  .box:last-child{
    transform: rotate(-45deg) translate(0px, -9px)
  }
}

</style>
