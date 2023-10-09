<script setup>
    import { inject } from 'vue';
    import { useI18n } from "vue-i18n";
    import { useRouter } from 'vue-router';

    import WebApp from '@twa-dev/sdk';

    import Utils from '../utils';

    // If user has no saved wallet, redirect to login
    if (!(Utils.GetWallet('wallet'))) {

        const router = useRouter();
        router.push('/login');

    }

    const i18nLocale = useI18n({ useScope: 'global' });
    
    // Set i18n locale based on the user's locale provided by <LocaleProvider>
    i18nLocale.locale.value = localStorage.getItem('dpxwallet_locale') || inject('locale', 'en');

    WebApp.BackButton.hide();
</script>

<template>
    <div id="container-home">
        Profile Page
    </div>
</template>

<style lang="scss">

    body {
        background-color: var(--tg-theme-secondary-bg-color);
    }

    .no-select {
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
    }

    body.rtl {

    }

</style>