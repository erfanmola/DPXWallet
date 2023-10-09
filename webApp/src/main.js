import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import './scss/app.scss';

// Import i18n locales
import i18n_en from './i18n/lang-en';
import i18n_fa from './i18n/lang-fa';
import i18n_ar from './i18n/lang-ar';
import i18n_de from './i18n/lang-de';
import i18n_fr from './i18n/lang-fr';
import i18n_tr from './i18n/lang-tr';

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en: i18n_en,
        fa: i18n_fa,
        ar: i18n_ar,
        de: i18n_de,
        fr: i18n_fr,
        tr: i18n_tr,
    },
});  

const app = createApp(App);

app.use(i18n);
app.use(router);
app.use(createPinia());

app.mount('#app');