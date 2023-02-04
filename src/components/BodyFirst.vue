<script setup>
import {onMounted, onUnmounted, ref} from "vue";


const SecondRef = ref()

onMounted(()=>{
  import("https://fastly.jsdelivr.net/gh/MaxHu-arpg/jsEffect@latest/js/MoveDot.js").then(({followingDotCursor})=>{
    const cd = [];
    SecondRef.value.addEventListener('mouseenter',() => {
      cd.push(followingDotCursor({element: SecondRef.value,}))//注意父元素加上relative定位
    })
    SecondRef.value.addEventListener('mouseleave',() => {
      setTimeout(()=>cd.shift().destroy(),1500)
    })
  })




  import("https://fastly.jsdelivr.net/gh/MaxHu-arpg/jsEffect@latest/js/ClickCircle.js").then(({clickEffect})=>{
    clickEffect(SecondRef.value)
  })
})

onUnmounted(()=>{})

</script>

<template>
  <div ref="SecondRef" class="h-screen relative flex flex-col justify-around content-center justify-items-center">
    <p class="text-5xl text-center text-gray-800 text-opacity-80 font-black">Max 私人服务器</p>
    <p class="text-lg text-center text-gray-800 text-opacity-80 leading-loose">连接地址: https://masxs.dynv6.net<br>当前游戏版本 3.4<br>实时在线:  ?</p>
    <p class="text-lg text-center text-gray-800 text-opacity-80 leading-loose">本服务器开放注册, 开放大部分指令权限, 希望你玩的开心。</p>
  </div>

</template>

<style scoped>

</style>
