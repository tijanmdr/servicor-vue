import { createRouter, createWebHistory } from 'vue-router';
import { userStore } from '@/stores/index.js';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            name: 'homeTag',
            meta: {requiresAuth: true},
            children: [
                {path: '/about', name: 'about', component: () => import('@/views/AboutView.vue')},
                {path: '/', name: 'home', component: () => import('@/views/HomeView.vue')},
                {path: '/logout', name: 'logout'},
            ]
        },
        {
            path: '/login',
            name: 'login',
            meta: { isGuest: true },
            component: () => import('@/views/LoginView.vue')
        }, {
            path: '/register',
            name: 'register',
            meta: { isGuest: true },
            component: () => import('@/views/LoginView.vue')
        }
    ]
});

// middleware
router.beforeEach((to, from, next) => {
    const user_store = userStore();
    if (to.meta.requiresAuth && !user_store.token) {
        next({ name: 'login' });
    } else if (user_store.token && to.meta.isGuest) {
        next({ name: 'home' });
    } else {
        next();
    }
});

export default router;
