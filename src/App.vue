<template>
  <div class="wrapper flex flex-col items-center content-center h-screen bg-blue-400 text-gray-200">
    <nav>
      <RouterLink to="/">Home</RouterLink>&nbsp;|&nbsp;
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <RouterView/>
  </div>
</template>