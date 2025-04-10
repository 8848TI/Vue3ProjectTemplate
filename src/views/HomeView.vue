<script setup>
import { useCounterStore } from '@/stores'

const counterStore = useCounterStore()

console.log(counterStore.count)

</script>

<template>
  <main>
    我是首页
  </main>
  <button @click="counterStore.increment">点击</button>{{ counterStore.count }} - {{ counterStore.doubleCount }}
</template>

<style scoped lang="scss">

</style>