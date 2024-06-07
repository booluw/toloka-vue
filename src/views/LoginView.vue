<script lang="ts" setup>
import type { FormInstance, FormRules } from 'element-plus'
import { ref, reactive } from 'vue'
import { supabase } from '@/config/supabase'
import { useRouter } from 'vue-router'

const form = ref<FormInstance>()
const router = useRouter()
const loading = ref(false)

const auth = reactive({
  email: '',
  password: '',
})

const validateEmail = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please add a email'))
  } else if (!/^\w+@[a-zA-Z_0-9]+?\.[a-zA-Z]{2,6}$/.test(value)) {
    callback(new Error('Please provide a valid email'))
  } else {
    callback()
  }
}

const validatePassword = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please add a password'))
  } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(value)) {
    callback(new Error('Please provide a valid password'))
  } else {
    callback()
  }
}
const rules = reactive<FormRules<typeof auth>>({
  email: [{ validator: validateEmail, trigger: 'blur' }],
  password: [{ validator: validatePassword, trigger: 'blur' }],
})

const loginUser = async function (formEl: FormInstance | undefined) {
  if (!formEl) return

  loading.value = true
  formEl.validate(async (valid: any) => {
    if (valid) {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          ...auth
        })

        if (error) throw Error(error)

        if (data.user) {
          ElMessage.success('Welcome back!')
          router.push('/')
        }
      } catch (error: any) {
        console.log(error)
        ElMessage({
          type: 'error',
          message: error
        })
      }
    } else {
      return false
    }

    loading.value = false
  })
}
</script>
<template>
  <main class="bimg min-h-[100vh] overflow-hidden flex items-center justify-center bg-primary">
    <section class="bg-white rounded-2xl p-5 md:p-10 md:w-1/3">
      <h3 class="text-2xl text-primary mb-5">Welcome back!</h3>
      <el-form @submit.prevent="loginUser(form)" label-position="top" ref="form" :model="auth" :rules="rules">
        <el-form-item label="Email" prop="email">
          <el-input type="email" size="large" v-model="auth.email" placeholder="Email" />
        </el-form-item>

        <el-form-item label="Password" prop="password">
          <el-input size="large" v-model="auth.password" type="password" placeholder="Password" show-password />
        </el-form-item>

        <el-button
          class="!bg-primary/90 !border-primary w-full"
          type="primary"
          size="large"
          @click="loginUser(form)"
          :loading="loading"
        >
          Login
        </el-button>
      </el-form>
      <div class="flex flex-col mt-5">
        <div class="">
          Having problem logging in? <a href="#" class="text-blue-500">Reset your password</a>
        </div>
        <div class="">
          Or
          <router-link to="/signup" class="text-blue-500">Sign Up for a new account</router-link>
        </div>
      </div>
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
