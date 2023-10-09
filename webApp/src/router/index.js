import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/Home.vue';
import SettingsView from '../views/Settings.vue';
import LoginView from '../views/Login.vue';
import WalletView from '../views/Wallet.vue';
import BadgesView from '../views/Badges.vue';

const routes = [
    { 
        path: '/',
        name: 'home',
        component: HomeView
    },
    { 
        path: '/settings',
        name: 'settings',
        component: SettingsView 
    },
    { 
        path: '/login',
        name: 'login',
        component: LoginView
    },
    {
        path: '/wallet',
        name: 'wallet',
        component: WalletView,
    },
    {
        path: '/wallet/import',
        name: 'wallet-import',
        component: WalletView,
    },
    {
        path: '/badges',
        name: 'badges',
        component: BadgesView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;