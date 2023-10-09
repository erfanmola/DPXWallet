<script setup>
    import { inject, ref, onMounted } from 'vue';
    import { useI18n } from "vue-i18n";
    import { useRouter } from 'vue-router';

    import WebApp from '@twa-dev/sdk';

    import Utils from '../utils';

    import { useRankStore } from '../stores/useRanks';
    import badge from '../components/badge.vue';
    import Header from '../components/Header.vue';

    // If user has no saved wallet, redirect to login
    if (!(Utils.GetWallet('wallet'))) {

        const router = useRouter();
        router.push('/login');

    }

    const i18nLocale = useI18n({ useScope: 'global' });
    
    // Set i18n locale based on the user's locale provided by <LocaleProvider>
    i18nLocale.locale.value = localStorage.getItem('dpxwallet_locale') || inject('locale', 'en');

    const balance  = ref(null);
    const rank     = ref(null);
    const currency = ref('dpx');
    const router   = useRouter();
    const ranks    = useRankStore();

    const wallet = ref(Utils.GetWallet('wallet'));

    let currencies = {
        dpx: 'DPX',
        usdt: 'USDT',
    };

    const setCurrency = (type) => {

        WebApp.HapticFeedback.impactOccurred('light');
        currency.value = type;

    };

    const showBadges = (delay = 1000) => {

        WebApp.HapticFeedback.impactOccurred('light');

        setTimeout(() => { router.push('/badges'); }, delay);

    };

    onMounted(async () => {

        let data = await Utils.DPXSendRequest(`/balance/${ wallet.value }`, [], 'GET');

        if (data && `result` in data && data.status === 'success') {

            balance.value = data.result;
            rank.value    = ranks.data.filter((item) => (item.min <= balance.value)).slice(-1)[0];

        }

    });

    WebApp.BackButton.hide();
</script>

<template>
    <section id="section-home" v-if="balance">

        <Header>
            <template #menu>
                <li><router-link to="/wallet"><i class="icon-credit-card"></i></router-link></li>
                <li><router-link to="/transactions"><i class="icon-inbox"></i></router-link></li>
                <li id="settings-icon">
                    <router-link to="/settings">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" x="0" y="0" viewBox="0 0 32 32" style="fill: var(--tg-theme-button-color);">
                            <g>
                                <path d="M28.068 12h-.128a.934.934 0 0 1-.864-.6.924.924 0 0 1 .2-1.01l.091-.091a2.938 2.938 0 0 0 0-4.147l-1.511-1.51a2.935 2.935 0 0 0-4.146 0l-.091.091A.956.956 0 0 1 20 4.061v-.129A2.935 2.935 0 0 0 17.068 1h-2.136A2.935 2.935 0 0 0 12 3.932v.129a.956.956 0 0 1-1.614.668l-.086-.091a2.935 2.935 0 0 0-4.146 0l-1.516 1.51a2.938 2.938 0 0 0 0 4.147l.091.091a.935.935 0 0 1 .185 1.035.924.924 0 0 1-.854.579h-.128A2.935 2.935 0 0 0 1 14.932v2.136A2.935 2.935 0 0 0 3.932 20h.128a.934.934 0 0 1 .864.6.924.924 0 0 1-.2 1.01l-.091.091a2.938 2.938 0 0 0 0 4.147l1.51 1.509a2.934 2.934 0 0 0 4.147 0l.091-.091a.936.936 0 0 1 1.035-.185.922.922 0 0 1 .579.853v.129A2.935 2.935 0 0 0 14.932 31h2.136A2.935 2.935 0 0 0 20 28.068v-.129a.956.956 0 0 1 1.614-.668l.091.091a2.935 2.935 0 0 0 4.146 0l1.511-1.509a2.938 2.938 0 0 0 0-4.147l-.091-.091a.935.935 0 0 1-.185-1.035.924.924 0 0 1 .854-.58h.128A2.935 2.935 0 0 0 31 17.068v-2.136A2.935 2.935 0 0 0 28.068 12ZM29 17.068a.933.933 0 0 1-.932.932h-.128a2.956 2.956 0 0 0-2.083 5.028l.09.091a.934.934 0 0 1 0 1.319l-1.511 1.509a.932.932 0 0 1-1.318 0l-.09-.091A2.957 2.957 0 0 0 18 27.939v.129a.933.933 0 0 1-.932.932h-2.136a.933.933 0 0 1-.932-.932v-.129a2.951 2.951 0 0 0-5.028-2.082l-.091.091a.934.934 0 0 1-1.318 0l-1.51-1.509a.934.934 0 0 1 0-1.319l.091-.091A2.956 2.956 0 0 0 4.06 18h-.128A.933.933 0 0 1 3 17.068v-2.136A.933.933 0 0 1 3.932 14h.128a2.956 2.956 0 0 0 2.083-5.028l-.09-.091a.933.933 0 0 1 0-1.318l1.51-1.511a.932.932 0 0 1 1.318 0l.09.091A2.957 2.957 0 0 0 14 4.061v-.129A.933.933 0 0 1 14.932 3h2.136a.933.933 0 0 1 .932.932v.129a2.956 2.956 0 0 0 5.028 2.082l.091-.091a.932.932 0 0 1 1.318 0l1.51 1.511a.933.933 0 0 1 0 1.318l-.091.091A2.956 2.956 0 0 0 27.94 14h.128a.933.933 0 0 1 .932.932Z"></path>
                                <path d="M16 9a7 7 0 1 0 7 7 7.008 7.008 0 0 0-7-7Zm0 12a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Z"></path>
                            </g>
                        </svg>
                    </router-link>
                </li>
            </template>
        </Header>

        <div id="container-badge">
            <badge @click="showBadges(1000)" :rank="rank.rank" />
        </div>

        <span id="span-badge" class="w500-dots-1" @click="showBadges(0)">{{ i18nLocale.t(`badges.ranks.tier_${ rank.rank }`) }}</span>

        <h1 class="w550-dots-1">{{ [WebApp.initDataUnsafe.user.first_name, WebApp.initDataUnsafe.user.last_name ?? ''].join(' ') }}</h1>

        <div id="container-balance">
            <div>
                <h2 class="w650-dots-1">{{ $t('home.balance') }}</h2>

                <ul>
                    <li :class="[ 'w500-dots-1', currency === 'usdt' ? 'active' : '' ]" @click="setCurrency('usdt')">USDT</li>
                    <li :class="[ 'w500-dots-1', currency === 'dpx' ? 'active' : '' ]" @click="setCurrency('dpx')">DPX</li>
                </ul>
            </div>

            <p class="w600-dots-1" style="direction: ltr;"><span class="w500-dots-1">{{ (currency === 'dpx' ? (balance).toLocaleString() : (balance * 1000).toLocaleString())}}</span> {{ currencies[currency] }}</p>
        </div>

        <div id="container-actions">
            <router-link to="/transfer" class="button"><i class="icon-upload"></i><span>{{ $t('home.send') }}</span></router-link>
            <router-link to="/receive" class="button"><i class="icon-download"></i><span>{{ $t('home.receive') }}</span></router-link>
        </div>

    </section>

    <ul v-else id="shimmer-home">
        <li class="shimmer"><i class="icon-shield"></i></li>
        <li class="shimmer"></li>
        <li class="shimmer"></li>
        <li>
            <ul>
                <li class="shimmer"></li>
                <li class="shimmer"></li>
            </ul>
        </li>
        <li class="shimmer"></li>
        <li>
            <ul>
                <li class="shimmer"></li>
                <li class="shimmer"></li>
            </ul>
        </li>
    </ul>
</template>

<style lang="scss">

    #section-home {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
        align-items: center;
        height: 100%;

        > #container-badge {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 10rem;
            height: 10rem;
            aspect-ratio: 1/1;
            position: relative;
            padding: 0;
            margin: 0;
            border-radius: 100rem;
            z-index: 0;
            cursor: pointer;

            &::before {
                content: '';
                position: absolute;
                background-color: var(--tg-theme-button-color);
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
                z-index: -100;
                border-radius: 100rem;
                opacity: 0.25;
            }

            &:hover > span, &:focus > span {
                -webkit-transform:  translateX(-50%) rotateY(180deg);
                transform: translateX(-50%) rotateY(180deg);
            }

            > span {
                position: absolute;
                font-size: 8rem;
                font-family: 'DPXWalletIconFonts';
                line-height: 1;
                padding: 0;
                margin: 0;
                left: 50%;
                -webkit-transition: -webkit-transform 1s cubic-bezier(0.4, 0.2, 0.2, 1);
                transition: -webkit-transform 1s cubic-bezier(0.4, 0.2, 0.2, 1);
                -o-transition: transform 1s cubic-bezier(0.4, 0.2, 0.2, 1);
                transition: transform 1s cubic-bezier(0.4, 0.2, 0.2, 1);
                transition: transform 1s cubic-bezier(0.4, 0.2, 0.2, 1), -webkit-transform 1s cubic-bezier(0.4, 0.2, 0.2, 1);
                -webkit-transform:  translateX(-50%) rotateY(0deg);
                transform: translateX(-50%) rotateY(0deg);
                z-index: 10;
                width: 100%;
                text-align: center;

                * {
                    font-family: 'DPXWalletIconFonts';
                }
            }
        }

        > #span-badge {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: var(--tg-theme-button-color);
            border-radius: 0.325rem;
            padding: 0 1.25rem;
            overflow: hidden;
            cursor: pointer;

            &::before {
                content: '';
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-color: var(--tg-theme-button-color);
                opacity: 0.125;
                z-index: -1;
                position: absolute;
            }
        }

        > h1 {
            line-height: 1.5;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.325rem;
        }

        > #container-balance {
            display: flex;
            width: 100%;
            flex-direction: column;
            flex-grow: 1;

            > div {
                display: flex;
                justify-content: space-between;
                align-items: center;

                > h2 {
                    font-size: 1.5rem;
                }

                > ul {
                    display: flex;
                    background: var(--tg-theme-bg-color);
                    padding: 0.25rem;
                    gap: 0.25rem;
                    border-radius: 0.5rem;

                    > li {
                        display: flex;
                        text-align: center;
                        justify-content: center;
                        align-items: center;
                        padding: 0 1rem;
                        border-radius: 0.325rem;
                        font-size: 0.925rem;
                        cursor: pointer;

                        &.active {
                            background: var(--tg-theme-secondary-bg-color);
                            color: var(--tg-theme-button-color);
                        }
                    }
                }
            }

            > p {
                display: flex;
                align-items: center;
                text-align: center;
                justify-content: center;
                direction: rtl;
                line-height: 1;
                margin-top: 1rem;
                gap: 0.5rem;
                background: var(--tg-theme-bg-color);
                padding: 1.5rem 1rem;
                border-radius: 1rem;

                > span {
                    font-size: 3rem;
                }
            }
        }

        > #container-actions {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 1rem;
            width: 100%;
        }

    }

    #shimmer-home {
        top: 0;
        left: 0;
        position: absolute;
        display: flex;
        width: 100%;
        flex-direction: column;
        padding: 4.125rem 1rem 1rem;
        gap: 1rem;
        align-items: center;
        height: 100%;

        > li {
            display: flex;
            
            &:nth-of-type(1) {
                width: 10rem;
                height: 10rem;
                border-radius: 100rem;
                position: relative;

                > i {
                    position: absolute;
                    color: var(--tg-theme-text-color);
                    opacity: 0.25;
                    top: 50%;
                    left: 50%;
                    transform: translateX(-50%) translateY(-50%);
                    line-height: 1;
                    font-size: 7rem;
                }
            }

            &:nth-of-type(2) {
                width: 6rem;
                height: 2rem;
                border-radius: 0.5rem;
            }

            &:nth-of-type(3) {
                width: 12rem;
                height: 2rem;
                border-radius: 0.5rem;
            }

            &:nth-of-type(4) {
                margin-top: 0.5rem;
                width: 100%;
                height: 2rem;
                border-radius: 0.5rem;

                > ul {
                    display: flex;
                    width: 100%;
                    height: 100%;
                    justify-content: space-between;

                    > li {
                        width: 10rem;
                        height: 100%;
                        border-radius: 0.5rem;
                    }
                }
            }

            &:nth-of-type(5) {
                margin-top: 0.5rem;
                width: 100%;
                height: 6rem;
                border-radius: 0.5rem;
            }

            &:nth-of-type(6) {
                width: 100%;
                border-radius: 0.5rem;
                flex-grow: 1;
                align-items: flex-end;

                > ul {
                    display: flex;
                    width: 100%;
                    height: 3rem;
                    justify-content: space-between;
                    gap: 1rem;

                    > li {
                        width: 50%;
                        height: 100%;
                        border-radius: 0.5rem;
                    }
                }
            }
        }
    }

</style>