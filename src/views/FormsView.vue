<script setup>
import { ref, reactive } from 'vue'

const confirmPassword = ref('')

const auth = reactive({
  username: '',
  email: '',
  password: '',
  account_type: 'CLIENT'
})
</script>

<template>
  <main class="bimg h-screen flex items-center justify-center">
    <section class="bg-white rounded-2xl p-5 md:p-10 md:w-1/3">
      <h3 class="text-2xl text-primary/90 mb-5">Register an account</h3>
      <el-form label-position="top">
        <el-form-item label="Username">
          <el-input v-model="auth.username" size="large" placeholder="Username" />
        </el-form-item>
        <el-form-item label="Email">
          <el-input
            v-model="auth.email"
            size="large"
            type="email"
            placeholder="example@example.com"
          />
        </el-form-item>
        <el-form-item label="Password">
          <el-input
            v-model="auth.password"
            size="password"
            type="password"
            placeholder="Password"
          />
        </el-form-item>

        <el-form-item label="Confirm Password">
          <el-input
            v-model="confirmPassword"
            size="large"
            type="password"
            placeholder="Confirm Password"
          />
        </el-form-item>

        <el-radio-group v-model="auth.account_type">
          <el-radio value="CLIENT" border>Client</el-radio>
          <el-radio value="FREELANCER" border>Freelancer</el-radio>
        </el-radio-group>
        <div class="my-3">
          <el-button class="!bg-primary/90 !text-white w-full" size="large">Register</el-button>
        </div>
        <div class="flex flex-col">
          <div class="">
            Having problem logging in?
            <a href="" class="text-blue-500">Reset your Password</a>
          </div>
          <div class="">
            Or
            <router-link to="/login" class="text-blue-500 hover:underline"
              >Login to your account</router-link
            >
          </div>
        </div>
      </el-form>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.bimg {
  background-image: linear-gradient(rgba(black, 0.8), rgba(#356b4c, 0.95)),
    url(@/assets/pictures/business.jpg);
  background-position: center;
  background-size: cover;
  position: relative;
}
</style>
