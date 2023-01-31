<script setup>
import {onMounted, onUnmounted, ref} from "vue";
import {useMouse} from "../util/useMouse.js";
import {useScreenSize} from "../util/useScreenSize.js";
import {useFPS} from "../util/useFPS.js";


const { pointX, pointY } = useMouse()
const { innerWidth,innerHeight } = useScreenSize()
const { fps } = useFPS()


onMounted(() => {

})
onUnmounted(() => {})
</script>

<template>
  <div class="fixed left-0 bottom-0 z-10 bg-gray-200 m-3 border-8 border-gray-200 rounded shadow-md">
    <p>FPS:{{fps}}</p>
    <p>鼠标坐标({{ pointX }},{{ pointY }})</p>
    <p>可视尺寸({{ innerWidth }},{{ innerHeight }})</p>
  </div>


</template>

<style scoped>


</style>
