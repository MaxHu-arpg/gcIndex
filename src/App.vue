<script setup>
import {onMounted, onUnmounted} from "vue";
import HelloWorld from './components/HelloWorld.vue'
import BodyFirst from './components/BodyFirst.vue'
import BodySecond from './components/BodySecond.vue'
import BottomContent from "./components/BottomContent.vue";
import ShowInfo from "./components/ShowInfo.vue";
import LiveTwod from "./components/LiveTwod.vue";
import CanvasNest from "canvas-nest.js";


onMounted(() => {
  const cn = new CanvasNest(document.body, {
    color: '0,0,0',
    pointColor: '0,0,0',
    opacity: 0.6,
    count: 300,
    zIndex: '-2147483648'
  });
  // cn.destroy();

  import("https://fastly.jsdelivr.net/gh/MaxHu-arpg/jsEffect@latest/js/TitleTrick.js").then(({TitleTrick}) => {
    TitleTrick("砸瓦鲁多的奇妙冒险")
  })
  import('./util/TopScrollScreen.js')
})

onUnmounted(() => {
})

</script>

<template>
  <HelloWorld/>
  <BodyFirst/>
  <BodySecond/>
  <BottomContent/>
  <ShowInfo/>
  <LiveTwod/>
</template>

<style scoped>

</style>
