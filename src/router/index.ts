import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [

    {
        path: '/',
        name: 'home',
        component: () => import('../views/HomePage.vue')
    },

    {
        path: '/post/details/:postId',
        name: 'postDetails',
        component: () => import('../views/PostDetails.vue'),

    },

    {
        path: "/register",
        name: 'register',
        component: () => import('../views/RegisterPage.vue')
    },

    {
        path: "/login",
        name: 'login',
        component: () => import('../views/LoginPage.vue')
    }

    // {
    //   path: '/posts',
    //   name: 'posts',
    //   component: () => import('../views/PostPage.vue')
    // }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
