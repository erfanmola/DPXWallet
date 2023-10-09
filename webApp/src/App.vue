<script setup>
    // Read More: https://erfanmola.github.io/TeleVue/?path=/docs/introduction--docs#usage
    import { AppearanceProvider, LocaleProvider, AuthProvider } from '@erfanmola/televue';
    import '@erfanmola/televue/style.css';

    // Check if we are in dev mode
    const devMode = (import.meta.env.MODE === 'development') && true;

    // Retrive VITE_HEX_HMAC_SIGNATURE environment variable if available
    const hex_hmac_signature = import.meta.env.VITE_HEX_HMAC_SIGNATURE;

    // Try to retrieve the saved `locale` from LocalStorage if available
    const locale = localStorage.getItem('locale');
</script>

<template>
    <!-- If hex_hmac_signature is set, we will render <AuthProvider>, otherwise <div>  -->
    <!-- AuthProvider: https://erfanmola.github.io/TeleVue/?path=/docs/providers-authprovider--docs -->
    <component :is="hex_hmac_signature ? AuthProvider : 'div'" :hex_hmac_signature="hex_hmac_signature">
        <!-- AppearanceProvider: https://erfanmola.github.io/TeleVue/?path=/docs/providers-appearanceprovider--docs -->
        <AppearanceProvider>
            <!-- LocaleProvider: https://erfanmola.github.io/TeleVue/?path=/docs/providers-localeprovider--docs -->
            <LocaleProvider :locale="locale">
                <!-- Vue Router -->
                <router-view></router-view>
            </LocaleProvider>
        </AppearanceProvider>

        <template #unauthorized>
            Your client is not authorized, please use this WebApp from a valid Telegram Client
        </template>
    </component>

    <!-- Include liriliri/eruda developer console if we are in Development Mode -->
    <teleport to="head" v-if="devMode">
        <component is="script" v-if="devMode" src="node_modules/eruda/eruda.js"></component>
        
        <component is="script" v-if="devMode">
            let timer = setInterval(() => {

                if (typeof eruda === 'object') {

                    clearInterval(timer);
                    eruda.init();

                }

            }, 250);
        </component>
    </teleport>
</template>

<style lang="scss">

    body {
        background-color: var(--tg-theme-bg-color);
        color: var(--tg-theme-text-color);
    }

</style>