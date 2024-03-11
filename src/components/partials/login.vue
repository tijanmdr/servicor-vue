<script setup>
import { reactive } from 'vue';
import { userStore } from '@/stores/index.js';
import Error from '@/components/toasts/error.vue';

let user = reactive({
    email: '',
    password: '',
    user_access_level: 1
});

const store = userStore();
async function loginForm() {
    await store.login(user);
}
</script>

<template>
    <form class="flex flex-col items-center" @submit.prevent="loginForm">
        <Error
            :message="store.errorMessage"
            class="max-md:w-full md:w-96 p-2 flex items-center rounded-2xl mb-4"
            v-if="store.error"
        />

        <div class="bg-gray-100 max-md:w-full md:w-96 p-2 flex items-center rounded-2xl mb-4">
            <input
                type="email"
                name="email"
                placeholder="Email Address"
                class="bg-gray-100 outline-none text-sm flex-1"
                v-model="user.email"
            />
        </div>
        <div class="bg-gray-100 max-md:w-full md:w-96 p-2 flex items-center rounded-2xl mb-4">
            <!--      <MdLockOutline class="text-gray-400 m-2"/>-->
            <input
                type="password"
                name="password"
                placeholder="Password"
                class="bg-gray-100 outline-none text-sm flex-1"
                v-model="user.password"
            />
        </div>
        <div class="flex max-md:w-full md:w-96 mb-5 justify-between">
            <label for="remMe" class="flex items-center text-xs cursor-pointer"
                ><input type="checkbox" class="mr-1" id="remMe" /> Remember Me</label
            >

            <RouterLink to="#" class="text-xs">Forgot Password?</RouterLink>
        </div>
        <input
            type="submit"
            @click.prevent="loginForm"
            class="border-2 border-purple-600 text-purple-600 rounded-full px-20 py-2 font-semibold inline-block hover:bg-purple-600 hover:text-white cursor-pointer"
            value="Login"
        />
        <div class="my-2">Or</div>
        <RouterLink
            to="/register"
            class="border-2 border-purple-600 text-purple-600 rounded-full px-20 py-2 font-semibold inline-block hover:bg-purple-600 hover:text-white"
            >Register</RouterLink
        >
        <RouterLink to="/app" class="hidden redirectHome"></RouterLink>
    </form>
</template>
