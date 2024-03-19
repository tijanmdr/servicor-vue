import { createRouter, createWebHistory } from 'vue-router';
import { userStore } from '@/stores/index.js';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            name: 'homeTag',
            meta: { requiresAuth: true },
            children: [
                { path: '/search/:slug', name: 'search', component: () =>import('@/views/ServicesView.vue') },
                { path: '/service/:slug', name: 'service', component: () =>import('@/views/ServiceView.vue') },
                { path: '/logout', name: 'logout' },
            ]
        },
        {
            name: 'guest',
            meta: { isGuest: true },
            children: [
                { path: '/login', name: 'login', component: () => import('@/views/LoginView.vue') },
                {
                    path: '/register',
                    name: 'register',
                    component: () => import('@/views/LoginView.vue')
                }
            ]
        },
        {
            name: 'everyone',
            children: [
                { path: '/', name: 'home', component: () => import('@/views/HomeView.vue') },
                { path: '/about', name: 'about', component: () => import('@/views/AboutView.vue') },
                { path: '/404', name: '404', component: () => import('@/views/404View.vue') },
                { path: '/:slug', name: '404', component: () => import('@/views/404View.vue') },
            ]
        },
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
