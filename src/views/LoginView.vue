<script setup>
import LoginForm from '../components/partials/login.vue';
import error from '@/components/toasts/error.vue'
</script>
<template>
    <div class="flex flex-col items-center justify-center min-h-screen py-2">
        <main
            class="flex flex-col items-center justify-center w-full flex-1 md:px-20 max-md:px-10 text-center"
        >
            <div
                class="bg-white flex max-lg:w-full lg:w-3/5 max-md:w-4/5 max-w-4xl rounded-2xl shadow-2xl"
            >
                <div class="p-5 w-full">
                    <div class="py-10">
                        <h2 class="text-purple-600 text-3xl font-bold mb-2">Sign in to account!</h2>
                        <div class="border-2 w-10 border-purple-600 inline-block mb-2"></div>
                        <div class="flex justify-center my-2 text-3xl text-purple-600">
                            <!--              <a href="#" class="rounded-full p-2 ">< FaFacebook/></a>-->
                            <!--              <a href="#" class="rounded-full p-2 mx-4">< FaLinkedin/></a>-->
                            <!--              <a href="#" class="rounded-full p-2">< FaTwitter/></a>-->
                        </div>
                        <p class="text-gray-400 my-3">or use your email account</p>
                        <LoginForm />
                      <error/>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
