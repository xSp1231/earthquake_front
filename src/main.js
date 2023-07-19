import {createApp} from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'
import router from "./router/index.js";
import store from "./store/index.js";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//引入百度地图组件
import BaiduMap from "vue-baidu-map-3x";

const app = createApp(App)
// 屏蔽控制台警告信息
app.config.warnHandler = () => null;
app.use(store)
app.use(router)
app.use(ElementPlus)
app.use(BaiduMap,{
    ak:"3nFnZablPYCPtiKTPWTC7uGCqHGFLBaf"
})
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.mount('#app')
//修改
