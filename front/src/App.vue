<script setup>  
  import { useConnectionStore } from "./store/connection"
  import { socket } from "./socket"

  const connectionStore = useConnectionStore()
  socket.off()
  connectionStore.bindEvents()
</script>

<template>
  <RouterView />
</template>

<style scoped>

</style>
