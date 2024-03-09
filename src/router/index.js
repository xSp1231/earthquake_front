import {createRouter, createWebHistory} from 'vue-router'
import Home from "../views/Home.vue";

const routes = [
    {
        path: "/",
        name: "test",
        redirect: "/main/home", //直接跳转到/main页面
        component: () => import("../views/test.vue")
    }, {
        path: "/main",
        name: "main",
        redirect: "/main/home",
        component: () => import('../views/Main.vue'),
        children: [{
            path: "home",//相对路径 相对父亲路径  即为 /main/home
            name: "Home",
            component: Home,
        },
            {
            path: "area",
            name: "About",
            component: () => import("../views/Area.vue")
        },
            {
                path: "history",//相对路径 相对父亲路径  即为 /main/home
                name: "Historyline",
                component: () => import("../views/Historyline.vue")
            },
            {
                path: "video",//相对路径 相对父亲路径  即为 /main/home
                name: "Video", component: () => import("../views/Videoplay.vue")
            },
            {
                path: "team",//相对路径 相对父亲路径  即为 /main/home
                name: "team", component: () => import("../views/Team.vue")
            },
            {
                path: "news",//相对路径 相对父亲路径  即为 /main/home
                name: "news",
                component: () => import("../views/News.vue")
            },
        ]
    },

];
const router = createRouter({
    history: createWebHistory(), routes,
})
export default router
