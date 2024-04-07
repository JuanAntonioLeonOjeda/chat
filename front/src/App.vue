<script setup>  
  import { useConnectionStore } from "./store/connection"
  import { socket } from "./socket"

  const connectionStore = useConnectionStore()
  //Disable any existing listeners
  socket.off()
  //Start the event listeners defined inside the connection store's 'bindEvents' function
  connectionStore.bindEvents()
</script>

<template>
  <RouterView />
</template>

<style scoped>

</style>
