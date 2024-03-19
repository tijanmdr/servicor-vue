<script setup>
import {FwbImg} from "flowbite-vue";
import {onBeforeMount} from "vue";
import {useRoute} from "vue-router";
import {tasksStores} from "@/stores/tasksStores.js";

const router = useRoute()
const serviceStore = new tasksStores()
onBeforeMount(()=>{
  let slug = router.params.slug
  serviceStore.getService(slug)
  console.log('before mount');
})
</script>

<template>
  <h2 className="text-2xl font-semibold">{{serviceStore.service.title}}</h2>
  <div className="grid md:grid-cols-2 max-md:grid-cols-1 gap-4">
    <FwbImg src="/dummy_image.jpg" :alt="serviceStore.service.tags" width={0}
           height={0}
           sizes="100vw"/>
    <div className="flex flex-wrap flex-col gap-2">
      <table className="bordered_table table-auto">
        <tbody>
        <tr>
          <th className="w-1/4">Details</th>
          <td>{{ serviceStore.service.details }}</td>
        </tr>
        <tr>
          <th className="w-1/4">Email</th>
          <td><a :href="'mailto:' + serviceStore.service.contact_email">{{serviceStore.service.contact_email}}</a></td>
        </tr>
        <tr>
          <th className="w-1/4">Contact Number</th>
          <td><a :href="'phone:' + serviceStore.service.contact_number">{{serviceStore.service.contact_number}}</a></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
