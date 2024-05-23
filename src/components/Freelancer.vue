<script setup></script>

<template>
    <section class="w-[100%] bg-primary px-14 py-20 flex flex-col md:flex-row justify-between md:items-stretch gap-y-10  ">
        <!-- -------------------------------card one -------------------------------->
        <div class="card-one p-14 bg-[#f7f7ff] md:w-[47%] lg:w-[28%] w-[100%]  rounded-3xl">
          <h3 class="text-primary/90 font-bold text-[27px] rounded-xl">I Want to Hire a Freelancer</h3>
          <p class="text-2xl leading-tight mt-3">I'd like to work with vetted freelancers while using free business tools</p>
          <el-button type="" href="" plain class="hover:!bg-primary hover:!text-white !text-primary !text-xl !border-primary !mt-5 !p-6">Post a Job</el-button>
        </div>
        <!-- -------------------------------card two ----------------------------------->
       <div class="card-two p-14 bg-[#f7f7ff] md:w-[47%] lg:w-[28%] w-[100%] rounded-3xl">
        <h3 class="text-primary/90 font-bold text-[27px] rounded-xl">I am a Freelancer</h3>
          <p class="text-2xl leading-tight mt-3">I want to work on business projects as a pro freelancer.</p>
          <el-button type="" href="" plain class="hover:!bg-primary hover:!text-white !text-primary !text-xl !border-primary !mt-5 !p-6">Browse Jobs</el-button>
       </div>

        <!-- -------------------------------img ----------------------------------->
       <div class="img xl:ml-5 hidden lg:block">
        <img src="@/assets/pictures/freeimg.jpg" class="lg:w-[350px] xl:w-[520px] h-full lg:object-cover rounded-3xl"/></div>
    </section>
</template>