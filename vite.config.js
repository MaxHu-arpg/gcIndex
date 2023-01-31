import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {visualizer} from "rollup-plugin-visualizer";
import externalGlobals from 'rollup-plugin-external-globals'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        visualizer({
            open:true,  //注意这里要设置为true，否则无效
            gzipSize:true,
            brotliSize:true
        })
    ],
    base: './',   //本地打开时再配置
    build: {
        rollupOptions: {
            external: ['vue','canvas-nest.js'],
            plugins: [
                externalGlobals({
                    vue: 'Vue',
                    'canvas-nest.js':'CanvasNest'
                })
            ],
            output: {
                chunkFileNames: 'js/[name]-[hash].js',  // 引入文件名的名称
                entryFileNames: 'js/[name]-[hash].js',  // 包的入口文件名称
                assetFileNames: '[ext]/[name]-[hash].[ext]' // 资源文件像 字体，图片等
            }
        }
    }
})
