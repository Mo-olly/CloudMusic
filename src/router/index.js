//该文件专门用于创建整个应用的路由器
// 引入路由函数和路由模式函数
import { createRouter, createWebHistory } from 'vue-router'
// 引入组件
import SongList from '@/views/SecondList/SongList.vue'
import ContentList from '@/views/FirstList/ContentList.vue'
import noLogin from '@/views/noLogin.vue'

// 创建并暴露一个路由器
// 命名路由：简化路由的跳转
const routes = [
    {
        path: '/SongList',
        component: SongList
    },  //多级路由：path不写/，children里写子路由
    {
        path: '/ContentList',
        component: ContentList
    },
    {
        path: '/noLogin',
        component: noLogin
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router