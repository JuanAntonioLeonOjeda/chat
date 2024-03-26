<script setup>
  console.log(import.meta.env.VUE_APP_API_URL)
</script>

<template>
  <nav>
    <RouterLink to="/home">Go to Home</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
