<script setup>
import {onMounted, onUnmounted, ref} from "vue";

let myReq, prevTimestamp;
let count = 0;
const fps = ref(0)

function loop(timestamp) {
  if (prevTimestamp) {
    count++;
    // 间隔超过 1s，将之前计算的 count 输出
    if (timestamp - prevTimestamp >= 1000) {
      fps.value = count
      prevTimestamp = timestamp;
      count = 0;
    }
  } else {
    prevTimestamp = timestamp;
  }
  myReq = window.requestAnimationFrame(loop)
}

onMounted(() => myReq = window.requestAnimationFrame(loop))
onUnmounted(() => window.cancelAnimationFrame(myReq))
</script>

<template>
  <div class="fixed left-0 bottom-0 z-10 bg-gray-200 m-3 border-8 border-gray-200 rounded shadow-2xl">
    <p>FPS:{{fps}}</p>
  </div>


</template>

<style scoped>


</style>
