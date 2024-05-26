<script setup></script>
<template>
  <main class="py-20">
    <section
      class="bg-[#f7f7ff] rounded-2xl font-bold px-10 py-10 mx-auto !w-[60%] md:!w-[40%] lg:!w-[35%] xl:!w-[30%]"
    >
      <h3 class="text-3xl text-center text-primary/90 font-bold pb-10">Login</h3>

      <el-form label-position="top" class="flex flex-col gap-y-8">
        <el-form-item label="Username">
          <el-input class="h-12" v-model="input1" placeholder="Username"></el-input>
        </el-form-item>

        <el-form-item label="Password">
          <el-input class="h-12" v-model="input2" type="password" placeholder="Password"></el-input>
        </el-form-item>
        <el-button class="!bg-primary/90 !text-white !h-12 !text-xl">Login</el-button>
        <div class="links flex flex-col gap-y-5 text-blue-800">
          <a href="#" class="hover:underline">Forgotten Password</a>
          <router-link to="/forms" class="hover:underline">Sign Up</router-link>
        </div>
      </el-form>
    </section>
  </main>
</template>
