<template>
    <fwb-modal v-if="isShowModal" @close="closeModal">
        <template #header>
            <div class="flex items-center text-lg">Search</div>
        </template>
        <template #body>
            <div class="bg-gray-100 w-full p-2 flex items-center rounded-2xl mb-4">
                <input
                    type="text"
                    placeholder="Search Text: eg. Plumber, Electrician"
                    class="bg-gray-100 outline-none text-sm flex-1"
                    v-model="searchText"
                />
            </div>
        </template>
        <template #footer>
            <div class="flex justify-between">
                <fwb-button @click="closeModal" color="alternative"> Cancel </fwb-button>
                <fwb-button @click="search" color="green"> Search </fwb-button>
            </div>
        </template>
    </fwb-modal>
</template>
<script setup>
import { FwbButton, FwbModal } from 'flowbite-vue';
import { ref } from 'vue';
const isShowModal = ref(true);

let searchText = '';

function search() {
    isShowModal.value = true;
}
function closeModal() {
    isShowModal.value = false;
}
</script>
