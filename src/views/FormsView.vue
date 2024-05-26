<script setup>
import { ref } from "vue"
const input1 = ref("")
const input2 = ref("")
const input3 = ref("")
const input4 = ref("")
const checked1 = ref(true)
const checked2 = ref(false)
</script>

<template>
    <main class="py-20">
        <section class="bg-[#f7f7ff] rounded-2xl font-bold px-10 py-10 mx-auto !w-[60%] md:!w-[40%] lg:!w-[35%] xl:!w-[30%]">
           <h3 class="text-3xl text-center text-primary/90 font-bold pb-10">Sign Up As a Client</h3>
          <h3 class="text-3xl text-center text-primary/90 font-bold pb-10">Sign in As a Client</h3>
           <el-form label-position="top" class="flex flex-col gap-y-8">
            <el-form-item label="Username">
               <el-input class="h-12" v-model="input1" placeholder="Username"></el-input>
            </el-form-item>

            <el-form-item label="Email">
               <el-input class="h-12" v-model="input2" type="email" placeholder="Email"></el-input>
            </el-form-item>
            
            <el-form-item label="Password">
               <el-input class="h-12" v-model="input3" type="password" placeholder="Password"></el-input>
            </el-form-item>
            
            <el-form-item label="Confirm Password">
               <el-input class="h-12" v-model="input4" type="password" placeholder="Confirm Password"></el-input>
            </el-form-item>

               <div class="flex">
               <el-checkbox v-model="checked1" label="Client" size="large" />
               <el-checkbox v-model="checked2" label="Freelancer" size="large" />
            </div>
               <el-button class="!bg-primary/90 !text-white !h-12 !text-xl">Register</el-button>
            <div class="links mt-5 flex flex-col gap-y-5 text-blue-800"> 
               <a href="" class="hover:underline">Forgotten Password</a>
               <router-link to="/login" class="hover:underline">Login</router-link>
            </div>
               
            
           </el-form>
        </section>
    </main>
</template>



<style scoped>
main{
    width: 100%;
    height: 100vh;
    background-image:linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.8)), url(@/assets/pictures/business.jpg) ;
    background-position: center;
    background-size: cover;
    position: relative;   
}

</style>