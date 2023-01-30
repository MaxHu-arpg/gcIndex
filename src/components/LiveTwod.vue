<script setup>
import {onMounted} from "vue";

onMounted(async ()=> {
  // await import('../live2d/live2d.js');
  // loadlive2d("live2d", "/src/live2d/model/liang/2.json");
  await import('https://fastly.jsdelivr.net/gh/MaxHu-arpg/live2d-widget@master/autoload.js')

})





</script>

<template>
<!--  <canvas class="live2d" id="live2d" width="300" height="800"></canvas>-->
</template>

<style scoped>
.live2d {
  position: fixed;
  bottom : 0;
  right : 0;
}
</style>
