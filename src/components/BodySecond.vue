<script setup>
import {onMounted, onUnmounted, ref} from "vue";


const SecondRef = ref()

onMounted(()=>{
  import("https://cdn.jsdelivr.net/gh/MaxHu-arpg/jsEffect@latest/js/MoveDot.js").then(({followingDotCursor})=>{
    const cd = [];
    SecondRef.value.addEventListener('mouseenter',() => {
      cd.push(followingDotCursor({element: SecondRef.value,}))//注意父元素加上relative定位
    })
    SecondRef.value.addEventListener('mouseleave',() => {
      setTimeout(()=>cd.shift().destroy(),1500)
    })
  })




  import("https://cdn.jsdelivr.net/gh/MaxHu-arpg/jsEffect@latest/js/ClickCircle.js").then(({clickEffect})=>{
    clickEffect(SecondRef.value)
  })
})

onUnmounted(()=>{})

</script>

<template>
  <div ref="SecondRef" class="h-screen relative flex">

  </div>

</template>

<style scoped>

</style>
