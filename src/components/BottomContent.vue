<script setup>
import {onMounted, ref} from "vue";

const bottom = ref()

onMounted(() => {
  import("https://fastly.jsdelivr.net/gh/MaxHu-arpg/jsEffect@latest/js/ClickWord.js").then(({Clickword})=>{
    Clickword(bottom.value)
  })

  import("https://fastly.jsdelivr.net/gh/MaxHu-arpg/jsEffect@latest/js/MoveTextFlag.js").then(({textFlag})=>{
    let tf
    bottom.value.addEventListener('mouseenter',() => {
      tf = textFlag({element: bottom.value,text:"关注我",fontSize:20,font:"sans-serif"})//注意父元素加上relative定位
    })
    bottom.value.addEventListener('mouseleave',() => {
      tf.destroy()
    })

  })

})

</script>
<template>
  <div ref="bottom" class="relative">
<!--    <a class="" href="https://space.bilibili.com/16383115" target="_blank">-->
      <img class="w-full" src="https://fastly.jsdelivr.net/gh/MaxHu-arpg/gcIndex@latest/public/img/psc.jpg" alt="feet">
<!--    </a>-->
    <div class="flex overflow-hidden bg-gray-50">
      <div style="flex: 1"></div>
      <div style="flex: 8" class="mt-20 mb-6 pt-2 border-t-2 border-gray-200">
        <div class="flex justify-between items-end flex-wrap text-gray-400">
          <div>
            <p>富强、民主、文明、和谐、自由、平等、公正、法治、爱国、敬业、诚信、友善</p>
            <p>抵制不良游戏 拒绝盗版游戏 注意自我保护 谨防受骗上当 适度游戏益脑 沉迷游戏伤身 合理安排时间 享受健康生活</p>
<!--            <p>友情链接：-->
<!--              <a class="hover:text-blue-400 hover:underline" href="https://github.com/Grasscutters/Grasscutter" target="_blank">Grasscutter</a>&nbsp;|-->
<!--              <a class="hover:text-blue-400 hover:underline" href="https://github.com/jie65535/GrasscutterCommandGenerator" target="_blank">Grasscutter Tools</a>&nbsp;|-->
<!--              <a class="hover:text-blue-400 hover:underline" href="https://github.com/SilentNightSound/GI-Model-Importer" target="_blank">GI-Model-Importer</a>&nbsp;|-->
<!--              <a class="hover:text-blue-400 hover:underline" href="https://gamebanana.com/" target="_blank">GameBanana</a>&nbsp;|-->
<!--              <a class="hover:text-blue-400 hover:underline" href="https://space.bilibili.com/401742377" target="_blank">原神Bilibili</a>&nbsp;|-->
<!--              <a class="hover:text-blue-400 hover:underline" href="https://t.me/genkitCN" target="_blank">tg群genkitCN</a>&nbsp;|-->
<!--            </p>-->
            <p><a class="text-cyan-500 underline hover:text-blue-400 hover:underline" href="https://beian.miit.gov.cn/" target="_blank">苏ICP备2023006294号-1</a></p>
          </div>
          <div>
            <p class="text-right">&nbsp;</p>
            <p class="text-right"><a class="hover:text-blue-400 hover:underline" href="https://github.com/MaxHu-arpg" target="_blank">My Github</a></p>
            <p class="text-right">Thanks to <a class="hover:text-blue-400 hover:underline" href="https://www.unpkg.com/" target="_blank">UNPKG</a>,&nbsp;
              <a class="hover:text-blue-400 hover:underline" href="https://www.jsdelivr.com/" target="_blank">jsDelivr</a> for CDN website acceleration
            </p>
          </div>
        </div>
      </div>
      <div style="flex: 1"></div>
    </div>
  </div>
</template>


<style scoped>

</style>