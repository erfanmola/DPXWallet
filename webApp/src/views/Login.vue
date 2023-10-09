<script setup>
    import { inject } from 'vue';
    import { useRouter } from 'vue-router';
    import { useI18n } from "vue-i18n";

    import CreditIcon from '../assets/images/credit.svg';

    const router = useRouter();

    const i18nLocale = useI18n({ useScope: 'global' });
    
    // Set i18n locale based on the user's locale provided by <LocaleProvider>
    i18nLocale.locale.value = localStorage.getItem('dpxwallet_locale') || inject('locale', 'en');
</script>

<template>
    <section id="section-login">
        <div>
            <CreditIcon id="CreditSVG" />
        </div>

        <h1 class="w550-dots-1" style="font-weight: bold;">{{ $t('login.title') }}</h1>
        <h2 class="w400-dots-1">{{ $t('login.description') }}</h2>

        <ul>
            <li @click="router.push('/wallet/import')" class="w550-dots-1 button">{{ $t('login.buttons.import') }}</li>
            <li @click="router.push('/wallet/create')" class="w550-dots-1 button secondary">{{ $t('login.buttons.create') }}</li>
        </ul>
    </section>
</template>

<style lang="scss">
    #section-login {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        > div {
            display: flex;
            align-items: center;
            justify-content: center;

            > svg {
                display: block;
                width: 75%;
                fill: var(--stroke-color);
            }
        }

        > h1 {
            flex-grow: 1;
            font-size: 1.425rem;
        }

        > h2 {
            font-size: 1rem;
            padding: 0.5rem 0;
            text-align: justify;
            color: var(--tg-theme-hint-color);
        }

        > ul {
            display: flex;
            width: 100%;
            justify-content: space-around;
        }
    }
</style>