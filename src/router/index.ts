import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/HomeView.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/auth/LoginView.vue')
    },
    {
        path: '/signup',
        name: 'Signup',
        component: () => import('../views/auth/SignupView.vue')
    },
    {
        path: '/casting',
        name: 'Casting',
        component: () => import('../views/casting/CastingListView.vue')
    },
    {
        path: '/casting/:id',
        name: 'CastingDetail',
        component: () => import('../views/casting/CastingDetailView.vue')
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () => import('../views/profile/ProfileView.vue'),
        meta: { requiresAuth: true }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// 인증 가드
router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('auth_token')

    if (to.meta.requiresAuth && !isAuthenticated) {
        next('/login')
    } else {
        next()
    }
})

export default router