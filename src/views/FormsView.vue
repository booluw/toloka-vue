<script lang="ts" setup>
import type { FormInstance, FormRules } from 'element-plus'
import { ref, reactive } from 'vue'
import { supabase } from '@/config/supabase'
import { useRouter } from 'vue-router';

const form = ref<FormInstance>()
const router = useRouter()
const loading = ref(false)

const auth = reactive({
  username: '',
  email: '',
  password: '',
  confirm_password: '',
  account_type: 'CLIENT'
})

const validateUsername = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please add a username'))
  } else {
    callback()
  }
}

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

const validateConfirmPassword = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please add a password'))
  } else if (value !== auth.password) {
    callback(new Error('Password must match'))
  } else {
    callback()
  }
}

const rules = reactive<FormRules<typeof auth>>({
  username: [{ validator: validateUsername, trigger: 'blur' }],
  email: [{ validator: validateEmail, trigger: 'blur' }],
  password: [{ validator: validatePassword, trigger: 'blur' }],
  confirm_password: [{ validator: validateConfirmPassword, trigger: 'blur' }]
})

const addUser = async function (formEl: FormInstance | undefined) {
  if (!formEl) return

  loading.value = true
  formEl.validate(async (valid: any) => {
    if (valid) {
      try {
        const { data, error } = await supabase.auth.signUp({
          email: auth.email,
          password: auth.password,
          options: {
            data: {
              display_name: auth.username
            }
          }
        })

        if (error) throw Error(error.message)

        if (data.user) {
          const { error } = await supabase
            .from('profile')
            .insert({ account_type: auth.account_type, username: auth.username, id: data.user.id, email: auth.email })

          if (error) throw Error(error.message)
          ElMessage.success('Account created')
          router.push('/login')
        }
      } catch (error: any) {
        console.log(error)
        ElMessage.error(error)
      }
    } else {
      return false
    }

    loading.value = false
  })
}
</script>

<template>
  <main class="bimg h-screen flex items-center justify-center">
    <section class="bg-white rounded-2xl p-5 md:p-10 md:w-1/3">
      <h3 class="text-2xl text-primary/90 mb-5">Register an account</h3>
      <el-form @submit.prevent="addUser(form)" label-position="top" ref="form" :model="auth" :rules="rules">
        <el-form-item label="Username" prop="username">
          <el-input v-model="auth.username" size="large" placeholder="Username" />
        </el-form-item>
        <el-form-item label="Email" prop="email">
          <el-input
            v-model="auth.email"
            size="large"
            type="email"
            placeholder="example@example.com"
          />
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input
            v-model="auth.password"
            size="large"
            type="password"
            placeholder="Password"
            show-password
          />
        </el-form-item>
        <el-form-item label="Confirm Password" prop="confirm_password">
          <el-input
            v-model="auth.confirm_password"
            size="large"
            type="password"
            placeholder="Confirm Password"
            show-password
          />
        </el-form-item>

        <el-radio-group v-model="auth.account_type">
          <el-radio value="CLIENT" border>Client</el-radio>
          <el-radio value="FREELANCER" border>Freelancer</el-radio>
        </el-radio-group>
        <div class="my-3">
          <el-button
            @click="addUser(form)"
            mode="submit"
            class="!bg-primary/90 !text-white w-full capitalize"
            size="large"
          >
            Register as a {{ auth.account_type.toLowerCase() }}
          </el-button>
        </div>
      </el-form>
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
