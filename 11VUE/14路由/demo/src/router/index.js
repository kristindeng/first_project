import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path:"/",
        name:"home",
        component: HomeView,
    },
    {
        path: "/about",
        name:"about",
        component: ()=>import('../views/AboutView.vue')
    },
    {
        path: "/news",
        name:"news",
        //这是异步加载方式
        component: () =>import("../views/NewsView.vue")
    },
    {
        path: "/news/details/:name",
        name:"newsDetails",
        component: () =>import("../views/NewsDetailsView.vue")
    },
    {
        path: "/settings",
        name:"settings",
        redirect: "/settings/update",
        component: () =>import("../views/SettingsView.vue"),
        children: [
            {
                path: "update",
                component: () =>import("../views/UpdateView.vue")
            },
            {
                path: "timezone",
                component: () =>import("../views/TimezoneView.vue")
            }
        ]
    }
]
const router = createRouter({
    history :createWebHashHistory(),
    routes
})
// 如果没有这行代码，在其他文件中无法引入，只能在当前文件中使用
export default router


