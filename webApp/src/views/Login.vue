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
        <ul id="header-bar">

            <li>
                <router-link to="/settings">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" x="0" y="0" viewBox="0 0 32 32" style="fill: var(--tg-theme-button-color);">
                        <g>
                            <path d="M28.068 12h-.128a.934.934 0 0 1-.864-.6.924.924 0 0 1 .2-1.01l.091-.091a2.938 2.938 0 0 0 0-4.147l-1.511-1.51a2.935 2.935 0 0 0-4.146 0l-.091.091A.956.956 0 0 1 20 4.061v-.129A2.935 2.935 0 0 0 17.068 1h-2.136A2.935 2.935 0 0 0 12 3.932v.129a.956.956 0 0 1-1.614.668l-.086-.091a2.935 2.935 0 0 0-4.146 0l-1.516 1.51a2.938 2.938 0 0 0 0 4.147l.091.091a.935.935 0 0 1 .185 1.035.924.924 0 0 1-.854.579h-.128A2.935 2.935 0 0 0 1 14.932v2.136A2.935 2.935 0 0 0 3.932 20h.128a.934.934 0 0 1 .864.6.924.924 0 0 1-.2 1.01l-.091.091a2.938 2.938 0 0 0 0 4.147l1.51 1.509a2.934 2.934 0 0 0 4.147 0l.091-.091a.936.936 0 0 1 1.035-.185.922.922 0 0 1 .579.853v.129A2.935 2.935 0 0 0 14.932 31h2.136A2.935 2.935 0 0 0 20 28.068v-.129a.956.956 0 0 1 1.614-.668l.091.091a2.935 2.935 0 0 0 4.146 0l1.511-1.509a2.938 2.938 0 0 0 0-4.147l-.091-.091a.935.935 0 0 1-.185-1.035.924.924 0 0 1 .854-.58h.128A2.935 2.935 0 0 0 31 17.068v-2.136A2.935 2.935 0 0 0 28.068 12ZM29 17.068a.933.933 0 0 1-.932.932h-.128a2.956 2.956 0 0 0-2.083 5.028l.09.091a.934.934 0 0 1 0 1.319l-1.511 1.509a.932.932 0 0 1-1.318 0l-.09-.091A2.957 2.957 0 0 0 18 27.939v.129a.933.933 0 0 1-.932.932h-2.136a.933.933 0 0 1-.932-.932v-.129a2.951 2.951 0 0 0-5.028-2.082l-.091.091a.934.934 0 0 1-1.318 0l-1.51-1.509a.934.934 0 0 1 0-1.319l.091-.091A2.956 2.956 0 0 0 4.06 18h-.128A.933.933 0 0 1 3 17.068v-2.136A.933.933 0 0 1 3.932 14h.128a2.956 2.956 0 0 0 2.083-5.028l-.09-.091a.933.933 0 0 1 0-1.318l1.51-1.511a.932.932 0 0 1 1.318 0l.09.091A2.957 2.957 0 0 0 14 4.061v-.129A.933.933 0 0 1 14.932 3h2.136a.933.933 0 0 1 .932.932v.129a2.956 2.956 0 0 0 5.028 2.082l.091-.091a.932.932 0 0 1 1.318 0l1.51 1.511a.933.933 0 0 1 0 1.318l-.091.091A2.956 2.956 0 0 0 27.94 14h.128a.933.933 0 0 1 .932.932Z"></path>
                            <path d="M16 9a7 7 0 1 0 7 7 7.008 7.008 0 0 0-7-7Zm0 12a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Z"></path>
                        </g>
                    </svg>
                </router-link>
            </li>

        </ul>

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

        #header-bar {
            display: flex;
            width: 90%;
            margin: 1rem auto 0;
            list-style: none;
            justify-content: flex-end;
            align-items: center;

            > li {
                cursor: pointer;
            }
        }
    }
</style>