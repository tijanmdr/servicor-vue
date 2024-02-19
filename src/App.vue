<template>
  <div class="wrapper">
    <nav>
      <RouterLink to="/">Home</RouterLink>&nbsp;|&nbsp;
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <RouterView/>
  </div>
</template>
<style>
.wrapper {
  text-align: center
}
</style>
<script setup>
let x = 4;
</script>