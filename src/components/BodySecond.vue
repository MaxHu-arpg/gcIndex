<script setup>
import {onMounted, onUnmounted, ref} from "vue";


const FirstRef = ref()

onMounted(() => {
  import("https://cdn.jsdelivr.net/gh/MaxHu-arpg/jsEffect@latest/js/MoveClock.js").then(({clockCursor}) => {
    const cc = [];
    FirstRef.value.addEventListener('mouseenter', () => {
      cc.push(clockCursor({element: FirstRef.value,}))//注意父元素加上relative定位
    })
    FirstRef.value.addEventListener('mouseleave', () => {
      setTimeout(() => cc.shift().destroy(), 1500)
    })
  })
})

onUnmounted(() => {
})

</script>

<template>
  <div ref="FirstRef" className="h-96 relative bg-blue-600 bg-opacity-10">

  </div>
</template>

<style scoped>

</style>
