import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/Home.vue';
import SettingsView from '../views/Settings.vue';
import LoginView from '../views/Login.vue';
import WalletView from '../views/Wallet.vue';

const routes = [
    { path: '/', component: HomeView },
    { path: '/settings', component: SettingsView },
    { path: '/login', component: LoginView },
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
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;