<script setup>
import Menu from '@/components/partials/Menu.vue';
import Footer from '@/components/partials/Footer.vue';
import { onBeforeMount } from 'vue';
import { initFlowbite } from 'flowbite';

// initialize components based on data attribute selectors
onBeforeMount(() => {
    initFlowbite();
});
</script>

<template>
    <html lang="en" class>
        <body class="bg-gray-100 w-full">
            <div class="p-4">
                <Menu />
                <RouterView />
                <Footer />
            </div>
        </body>
    </html>
    <!--  <div class="wrapper flex flex-col items-center content-center h-screen bg-blue-400 text-gray-200">
      <nav>
        <RouterLink to="/">Home</RouterLink>&nbsp;|&nbsp;
        <RouterLink to="/about">About</RouterLink>
      </nav>
      <RouterView/>
    </div>-->
</template>
