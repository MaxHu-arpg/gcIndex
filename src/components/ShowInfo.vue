<script setup>
import {onMounted, onUnmounted, ref, watch} from "vue";
import {useMouse} from "../util/useMouse.js";
import {useScreenSize} from "../util/useScreenSize.js";
import {useFPS} from "../util/useFPS.js";
import gsap from "gsap"
import { CustomEase } from "gsap/CustomEase";
import { SlowMo } from "gsap/EasePack";

gsap.registerPlugin(SlowMo);
gsap.registerPlugin(CustomEase);

const {pointX, pointY} = useMouse()
const {innerWidth, innerHeight} = useScreenSize()
const {fps} = useFPS()
const show = ref(true)


onMounted(() => {
  const tween = gsap.from("#roo",{
    y: function (index, target, targets) {
      return target.clientWidth-(target.clientWidth*0.56);
    },
    ease: "back.inOut(4)",
    duration: 0.15
  })
  watch(show,(value, oldValue, onCleanup)=>{
    if (value === true){tween.play()}
    else {tween.reverse()}
  })
})
onUnmounted(() => {
})
</script>

<template>
  <div id="roo" class="fixed left-0 bottom-0 z-10 bg-gray-200 m-3 border-8 border-gray-200 rounded shadow-md opacity-75
  transition hover:cursor-pointer hover:opacity-100" @click="show = !show;">
    <p>FPS:{{ fps }}</p>
    <p>鼠标坐标({{ pointX }},{{ pointY }})</p>
    <p>可视尺寸({{ innerWidth }},{{ innerHeight }})</p>
  </div>


</template>

<style scoped>


</style>
