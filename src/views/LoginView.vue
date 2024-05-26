<script setup></script>
<template>
  <main class="h-screen overflow-hidden flex items-center justify-center bg-primary">
    <section
      class="bg-white rounded-2xl p-5 md:p-10 md:w-1/3"
    >
      <h3 class="text-2xl text-primary mb-5">Welcome back!</h3>

      <el-form label-position="top">
        <el-form-item label="Username">
          <el-input size="large" v-model="input1" placeholder="Username" />
        </el-form-item>

        <el-form-item label="Password">
          <el-input size="large" v-model="input2" type="password" placeholder="Password" />
        </el-form-item>

        <el-button class="!bg-primary/90 !border-primary w-full" type="primary" size="large">Login</el-button>
        <div class="flex flex-col mt-5">
          <div class="">
            Having problem logging in? <a href="#" class="text-blue-500">Reset your password</a>
          </div>
          <div class="">
            Or
            <router-link to="/signup" class="text-blue-500">Sign Up for a new account</router-link>
          </div>
        </div>
      </el-form>
    </section>
  </main>
</template>
