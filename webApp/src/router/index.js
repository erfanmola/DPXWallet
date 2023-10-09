import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/Home.vue';
import SettingsView from '../views/Settings.vue';
import LoginView from '../views/Login.vue';
import WalletView from '../views/Wallet.vue';
import BadgesView from '../views/Badges.vue';
import ReceiveView from '../views/Receive.vue';
import TransferView from '../views/Transfer.vue';
import TransactionsView from '../views/Transactions.vue';
import TransactionView from '../views/Transaction.vue';

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
    {
        path: '/receive',
        name: 'receive',
        component: ReceiveView,
    },
    {
        path: '/transfer/:destination([a-f0-9]{32})?/:amount?',
        name: 'transfer',
        component: TransferView,
    },
    {
        path: '/transactions',
        name: 'transactions',
        component: TransactionsView,
    },
    {
        path: '/transaction/:id',
        name: 'transaction',
        component: TransactionView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;