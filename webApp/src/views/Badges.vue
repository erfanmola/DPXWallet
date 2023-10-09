<script setup>
    import { inject } from 'vue';
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

    const ranks = useRankStore();
    const router = useRouter();

    const BadgeClicked = () => {

        WebApp.HapticFeedback.impactOccurred('light');

    };

    WebApp.BackButton.onClick(() => { router.push('/'); });
    WebApp.BackButton.show();
</script>

<template>
    <section id="section-badges">

        <Header icon="icon-shield" :title="$t('badges.leagues')"></Header>

        <div>
            <ul>
                <li v-for="rank in ranks.data" @click="BadgeClicked">
                    <badge :rank="rank.rank" />
                    <h2 class="w600-dots-1">{{ i18nLocale.t(`badges.ranks.tier_${ rank.rank }`) }}</h2>
                    <h3 class="w500-dots-1">{{ rank.min }}</h3>
                </li>
            </ul>
        </div>

    </section>
</template>

<style lang="scss">

    #section-badges {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        height: 100%;

        > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;

            > ul {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                width: 100%;
                grid-gap: 1rem;

                li {
                    width: 100%;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    padding: 1rem 0;
                    margin: 0;
                    border-radius: 1rem;
                    z-index: 0;
                    gap: 0;

                    &::before {
                        content: '';
                        position: absolute;
                        background-color: var(--tg-theme-button-color);
                        width: 100%;
                        height: 100%;
                        left: 0;
                        top: 0;
                        z-index: -100;
                        border-radius: 1rem;
                        opacity: 0.125;
                    }

                    @keyframes rotateBadge {
                        
                        from {
                            -webkit-transform:  rotateY(0deg);
                            transform: rotateY(0deg);
                        }

                        to {
                            -webkit-transform:  rotateY(360deg);
                            transform: rotateY(360deg);   
                        }

                    }

                    > span {
                        font-size: 5rem;
                        font-family: 'DPXWalletIconFonts';
                        line-height: 1;
                        -webkit-transform:  rotateY(0deg);
                        transform: rotateY(0deg);
                        text-align: center;
                        transition: -webkit-transform 1.5s cubic-bezier(0.4, 0.2, 0.2, 1);
                        -o-transition: transform 1.5s cubic-bezier(0.4, 0.2, 0.2, 1);
                        transition: transform 1.5s cubic-bezier(0.4, 0.2, 0.2, 1);
                        transition: transform 1.5s cubic-bezier(0.4, 0.2, 0.2, 1), -webkit-transform 1.5s cubic-bezier(0.4, 0.2, 0.2, 1);
                        animation-name: rotateBadge;
                        animation-duration: 1.5s;

                        * {
                            font-family: 'DPXWalletIconFonts';
                        }
                    }

                    > h2 {
                        font-size: 1.125rem;
                        padding-top: 1rem;
                        line-height: 1;
                    }

                    > h3 {
                        position: absolute;
                        font-size: 0.925rem;
                        top: 0;
                        color: var(--tg-theme-button-text-color);
                        left: 0;
                        display: flex;
                        justify-content: center;
                        text-align: center;
                        align-items: center;
                        width: 100%;
                        line-height: 1;
                        padding: 1.5rem 0 0.25rem;
                        margin: 0;
                        transform: translateX(calc(-50% + 0.75rem)) translateY(-0.75rem) rotate(-45deg);

                        &::before {
                            content: '';
                            position: absolute;
                            background-color: var(--tg-theme-button-color);
                            width: 100%;
                            height: 100%;
                            left: 0;
                            top: 0;
                            z-index: -100;
                        }
                    }
                }
            }

        }
    }
</style>