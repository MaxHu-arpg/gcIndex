<script setup>
import {onMounted, onUnmounted, ref} from "vue";


const bg = ref()
const bgloading = ref(true)
const face = ref()



onMounted(() => {
  import("https://fastly.jsdelivr.net/gh/MaxHu-arpg/jsEffect@latest/js/MoveSpringyEmoji.js").then(({springyEmojiCursor})=>{
    springyEmojiCursor({
      element: face.value,
      emoji: "🤤",
      fontSize: '24px'
    })
  })
})

onUnmounted(()=>{})
</script>

<template>
  <div>
    <!--  ↓↓↓↓  -->
    <div class="absolute -z-100000">
<!--      https://fastly.jsdelivr.net/gh/MaxHu-arpg/gcIndex-cdn@latest/dist/video/%E7%94%98%E9%9B%A8%E5%A4%9C%E6%99%9A.mp4-->
<!--      https://streamja.com/GGLnZ-->
<!--      /video/甘雨夜晚.mp4-->
      <video src="https://fastly.jsdelivr.net/gh/MaxHu-arpg/gcIndex-cdn@latest/dist/video/甘雨夜晚.mp4" ref="bg" class="w-screen h-screen object-cover"
             @canplaythrough="bg.play()" @pause='bgloading=true;bg.play();' @play="bgloading=false"
             loop autoplay muted preload="auto"></video>
    </div>
    <div class="absolute -z-1 w-screen h-screen">
      <div v-if="bgloading" class="myloading">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
      <div class="poster__arrows">
        <div class="poster__arrow"></div>
        <div class="poster__arrow"></div>
        <div class="poster__arrow"></div>
      </div>
    </div>

    <!--  ↑↑↑↑  -->
    <!--  ↓↓正常文档流↓↓  -->
    <div ref="face" class="w-full h-screen relative">


    </div>
  </div>


</template>

<style scoped>
.myloading {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 40px; /* 高度 */
  display: flex; /* 弹性布局 */
  align-items: center; /* 设置子项在y轴方向居中，应该是设置起点在中间，非常有用，不然动画很怪 */
}

.item { /* 小竖条 */
  height: 50px;
  width: 5px;
  background: #0a53be;
  margin: 0px 3px; /* 加margin，使竖条之间有空隙 */
  border-radius: 10px; /* 圆角 */
  animation: myloading 1s infinite; /* 动画：名称、时间、循环 */
}

/* 设置动画 */
@keyframes myloading {
  0% {
    height: 0px;
  }
  50% {
    height: 50px;
  }
  100% {
    height: 0px;
  }
}

.item:nth-child(2) {
  animation-delay: 0.1s;
}

.item:nth-child(3) {
  animation-delay: 0.2s;
}

.item:nth-child(4) {
  animation-delay: 0.3s;
}

.item:nth-child(5) {
  animation-delay: 0.4s;
}

.item:nth-child(6) {
  animation-delay: 0.5s;
}

.item:nth-child(7) {
  animation-delay: 0.6s;
}

.item:nth-child(8) {
  animation-delay: 0.7s;
}
.poster__arrows {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 25px;
}

.poster__arrow {
  width: 100%;
  height: 15px;
  background-image: url("/img/arrow.png");
  background-size: cover;
  animation: arrow 2.4s linear 0s infinite;
}

@keyframes arrow {
  0% {
    opacity: 1.0
  }
  50% {
    opacity: 0.0
  }
  100% {
    opacity: 1.0
  }
}

.poster__arrow:nth-child(2) {
  animation-delay: 0.3s;
}

.poster__arrow:nth-child(3) {
  animation-delay: 0.6s;
}
</style>
