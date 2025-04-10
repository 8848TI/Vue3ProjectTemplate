<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const msg = ref('Hello Vue 3')



</script>

<template>
  <div id="app">
    {{ msg }}   
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
#app {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
