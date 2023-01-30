// useClock.js
import { ref, onMounted, onUnmounted } from 'vue'

// 按照惯例，组合式函数名以“use”开头
export function useClock() {
    let Timeout;
    // 被组合式函数封装和管理的状态
    const h = ref('00')
    const m = ref('00')
    const s = ref('00')

    function startTime(){
        let today = new Date();
        h.value = String(checkTime(today.getHours()));
        m.value = String(checkTime(today.getMinutes()));
        s.value = String(checkTime(today.getSeconds()));// 在小于10的数字前加一个‘0’
    }
    function checkTime(i){
        if (i<10){
            i="0" + i;
        }
        return i;
    }

    // 一个组合式函数也可以挂靠在所属组件的生命周期上
    // 来启动和卸载副作用
    onMounted(() => {
        Timeout = setInterval(()=>{startTime()},500);
    })
    onUnmounted(() => {
        clearInterval(Timeout);
    })

    // 通过返回值暴露所管理的状态
    return { h,m,s }
}