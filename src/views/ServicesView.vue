<script setup>
import {FwbImg} from "flowbite-vue";
import {onBeforeMount, watch} from "vue";
import {useRoute} from "vue-router";
import {tasksStores} from "@/stores/tasksStores.js";

const router = useRoute()
const serviceStore = new tasksStores()
onBeforeMount(()=>{
  console.log('before mount');
  let slug = router.params.slug
  serviceStore.searchService(slug)
})

watch(() => router.params.slug, (newSlug, oldSlug) => {
   serviceStore.searchService(newSlug)
})
</script>

<template>
  <h1 class="title text-2xl font-bold">Services</h1>
  <div class="grid max-sm:grid-cols-1 max-md:grid-cols-3 md:grid-cols-5 gap-2">

    <div v-for="(service, index) in serviceStore.services">
      <RouterLink :to="'/service/' + service.slug" class="flex flex-col items-center w-full bg-blue-400 text-gray-200 rounded-2xl shadow-2xl">
        <fwb-img src="/service_image.jpg" :alt="service.tags" width={0}
                         height={0}
                         sizes="100vw"
                         style="" class="rounded-t-2xl"/>
        <div class="text-center">{{ service.title }} <br/>{{ service.price }}</div>
      </RouterLink>
    </div>
<!--    <RouterLink-->
<!--          class="flex flex-col items-center w-full bg-blue-400 text-gray-200 rounded-2xl shadow-2xl"-->
<!--          :to="home">-->
<!--      <fwb-img src="/service_image.jpg" alt={_service.tags} width={0}-->
<!--             height={0}-->
<!--             sizes="100vw"-->
<!--             style=""-->
<!--      class="rounded-t-2xl"-->
<!--      />-->
<!--      <div class="text-center">&lt;!&ndash;{{ _service.title }} <br/>{{ _service.price }}&ndash;&gt;</div>-->
<!--    </RouterLink>-->
  </div>
</template>
