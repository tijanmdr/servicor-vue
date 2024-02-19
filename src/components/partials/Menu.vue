<script setup>
import { ref } from 'vue';

let menus = ref([
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about' },
    { name: 'Login', url: '/login' }
]);
</script>
<template>
    <div class="header">
        <div class="flex w-full justify-between p-5">
            <a
                href="/"
                class="logo flex h-12 w-12 items-center justify-center rounded-full border-2 border-black p-2"
                >Logo
            </a>
            <form class="flex h-12 w-12 items-center justify-center p-2" method="post">
                <input type="text" class="p-2 rounded-2xl border-2" name="search_text" />
                <input type="submit" class="p-2 rounded-2xl border-2" name="Search" />
            </form>
            <div class="flex flex-row items-center gap-10 max-md:hidden md:relative">
                <div v-for="(menu, key) in menus" key="{{key}}">
                    <RouterLink :to="menu.url">{{ menu.name }}</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>
