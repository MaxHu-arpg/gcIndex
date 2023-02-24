<script setup>
import {onMounted, onUnmounted, ref} from "vue";


const SecondRef = ref()
const domain = ref('masxs.top')
const port = ref(18181)
const version = ref(3.4)
const onlinenum = ref("....")


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

  fetch('https://' + domain.value + ':' + port.value  + '/status/server',{method:'GET'})
      .then((response) => response.json())
      .then((data) => {
        onlinenum.value = data.status.playerCount
        version.value = data.status.version
      })
      .catch((err) => {
        fetch('http://' + domain.value + ':' + port.value  + '/status/server',{method:'GET'})
            .then((response) => response.json())
            .then((data) => {
              onlinenum.value = data.status.playerCount
              version.value = data.status.version
            })
            .catch((err) => {
              onlinenum.value = '?'
            });
      })
      .finally(() => {

      });
})

onUnmounted(()=>{})

</script>

<template>
  <div ref="SecondRef" class="h-screen relative flex flex-col justify-around content-center justify-items-center">
    <p class="text-5xl text-center text-gray-800 text-opacity-80 font-black">砸瓦鲁多の奇妙冒险</p>
    <p class="text-lg text-center text-gray-800 text-opacity-80 leading-loose">连接地址：{{domain}} <br>Port：{{port}}<br>当前版本：
      {{ version }}<br>实时在线：{{ onlinenum }}</p>
    <p class="text-lg text-center text-gray-800 text-opacity-80 leading-loose">Feel free and have fun.</p>
  </div>

</template>

<style scoped>

</style>
