import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/Home.vue';
import SettingsView from '../views/Settings.vue';
import LoginView from '../views/Login.vue';

const routes = [
    { path: '/', component: HomeView },
    { path: '/settings', component: SettingsView },
    { path: '/login', component: LoginView },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;