import {createApp} from 'vue'
import App from './App.vue'
import './style.css'
import './tailwind.css'

createApp(App).mount('#app')


import CanvasNest from 'canvas-nest.js';

const cn = new CanvasNest(document.getElementById('app'), {
    color: '0,0,0',
    pointColor: '0,0,0',
    opacity: 0.6,
    count: 200,
    zIndex: '-2147483648'
});
// cn.destroy();

import {TitleTrick} from "./js/TitleTrick.js";
TitleTrick("Max 私人服务器")

import './js/ClickCircle.js'

