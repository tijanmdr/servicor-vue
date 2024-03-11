<template>
  <FwbToast closable type="danger">
    {{message}}
  </FwbToast>
</template>
<script setup>
import {FwbToast} from "flowbite-vue";
defineProps(['message'])
</script>