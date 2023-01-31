import {onMounted, onUnmounted, ref} from "vue";

// 按照惯例，组合式函数名以“use”开头
export function useFPS() {
    // 被组合式函数封装和管理的状态
    let delHandler, prevTimestamp;
    let count = 0;
    const fps = ref(0)

    // 组合式函数可以随时更改其状态。
    function loop(timestamp) {
        if (prevTimestamp) {
            count++;
            // 间隔超过 1s，将之前计算的 count 输出
            if (timestamp - prevTimestamp >= 1000) {
                fps.value = count
                prevTimestamp = timestamp;
                count = 0;
            }
        } else {
            prevTimestamp = timestamp;
        }
        delHandler = window.requestAnimationFrame(loop)
    }

    // 一个组合式函数也可以挂靠在所属组件的生命周期上
    // 来启动和卸载副作用
    onMounted(() => {delHandler = window.requestAnimationFrame(loop)})
    onUnmounted(() => window.cancelAnimationFrame(delHandler))
    // 通过返回值暴露所管理的状态
    return { fps }
}