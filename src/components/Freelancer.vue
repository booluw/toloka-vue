<script setup></script>

<template>
  <section
    class="w-[100%] bg-primary px-5 md:px-20 py-14 flex flex-col md:flex-row justify-between md:items-stretch gap-10 gap-y-10"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:w-2/3">
      <!-- -------------------------------card one -------------------------------->
      <div class="p-10 bg-[#f7f7ff] rounded-3xl flex flex-col gap-5 items-start justify-center">
        <h3 class="text-primary/90 font-bold text-2xl">Hire Freelancers</h3>
        <p class="text-xl leading-tight text-black">
          I'd like to work with vetted freelancers while using free business tools
        </p>
        <el-button
          type="secondary"
          plain
          size="large"
          class="hover:!bg-primary hover:!text-white !text-primary !border-primary !bg-transparent"
        >
          Post a Job
        </el-button>
      </div>
      <!-- -------------------------------card two ----------------------------------->
      <div class="p-10 bg-[#f7f7ff] rounded-3xl flex flex-col gap-5 items-start justify-center">
        <h3 class="text-primary/90 font-bold text-2xl rounded-xl">Get Jobs</h3>
        <p class="text-xl leading-tight text-black">
          I want to work on business projects as a pro freelancer.
        </p>
        <el-button
          type="secondary"
          size="large"
          plain
          class="hover:!bg-primary hover:!text-white !text-primary !border-primary !bg-transparent"
        >
          Browse Jobs
        </el-button>
      </div>
    </div>

    <!-- -------------------------------img ----------------------------------->
    <div class="img xl:ml-5 hidden lg:block">
      <img
        src="@/assets/pictures/freeimg.jpg"
        class="lg:w-[350px] xl:w-[520px] h-full lg:object-cover rounded-3xl"
      />
    </div>
  </section>
</template>
