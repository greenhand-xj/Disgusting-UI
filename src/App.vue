<script setup lang="ts">
import { ref } from 'vue'

const handleClick = (e: PointerEvent) => {
  console.log('e', e)
}
const loading = ref(true)
setTimeout(() => {
  loading.value = false
}, 2000)
</script>

<template>
  <div class="flex p-4 items-center">
    <dis-button type="primary" size="large" :loading="loading">1111</dis-button>
    <dis-button type="danger" size="medium" :loading="loading">1111</dis-button>
    <dis-button size="small" type="warning" :loading="!loading">
      111</dis-button
    >
    <dis-button type="success" size="mini" :loading="!loading">1</dis-button>
    <dis-button type="outline" disabled :loading="!loading">1</dis-button>
    <dis-button type="text" size="mini" :loading="!loading">wode</dis-button>
    <dis-button type="primary" shape="circle" size="large" loading></dis-button>
    <dis-button type="danger" shape="circle" loading></dis-button>
    <dis-button type="success" shape="circle" size="small" loading></dis-button>
    <dis-button type="warning" shape="circle" size="mini" loading></dis-button>
    <dis-button type="warning" shape="round" size="large" loading
      >wode</dis-button
    >
  </div>
</template>

<style scoped></style>
