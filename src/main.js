
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vue3ColorPicker from "vue3-colorpicker";
import "vue3-colorpicker/style.css";
// import {Swipe, SwipeItem,Lazyload} from 'vant';
// import 'vant/lib/index.css';


 //将这个vue3app全局挂载到#app元素上
const app = createApp(App);   
app.use(router).use(Vue3ColorPicker).use(store).mount('#app');           
