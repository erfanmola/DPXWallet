<script setup>
    import { computed, ref, onMounted, watch, inject, nextTick, onUnmounted } from 'vue';
    import { useI18n } from "vue-i18n";

    import WebApp from '@twa-dev/sdk';
    import { List, Checkbox } from '@erfanmola/televue';

    const i18nLocale = useI18n({ useScope: 'global' });
    
    // Set i18n locale based on the user's locale provided by <LocaleProvider>
    i18nLocale.locale.value = localStorage.getItem('locale') || inject('locale', 'en');

    WebApp.setHeaderColor('secondary_bg_color');
    WebApp.BackButton.hide();
</script>

<template>
    <div id="container-home">

    </div>
</template>

<style lang="scss">

    body {
        background-color: var(--tg-theme-secondary-bg-color);
    }

    #container-home {
        display: flex;
        flex-direction: column;
    }

    .no-select {
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
    }

    body.rtl {

    }

</style>