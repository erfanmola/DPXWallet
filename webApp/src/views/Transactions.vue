<script setup>
    import { inject, ref, onMounted } from 'vue';
    import { useI18n } from "vue-i18n";
    import { useRouter } from 'vue-router';

    import WebApp from '@twa-dev/sdk';

    import Utils from '../utils';

    import Header from '../components/Header.vue';

    // If user has no saved wallet, redirect to login
    if (!(Utils.GetWallet('wallet'))) {

        const router = useRouter();
        router.push('/login');

    }

    const i18nLocale = useI18n({ useScope: 'global' });
    
    // Set i18n locale based on the user's locale provided by <LocaleProvider>
    i18nLocale.locale.value = localStorage.getItem('dpxwallet_locale') || inject('locale', 'en');

    const router = useRouter();
    const transactions = ref(null);

    const wallet = ref(Utils.GetWallet('wallet'));

    onMounted(async () => {

        let data = await Utils.DPXSendRequest(`/transactions`, { 'departure': wallet.value, 'destination': wallet.value }, 'POST', i18nLocale);

        if (data && `result` in data && data.status === 'success') {

            transactions.value = data.result;

        }

    });

    const OpenTransaction = (transaction) => {

        localStorage.setItem(`transaction_${ transaction.transaction }`, JSON.stringify(transaction));
        router.push(`/transaction/${ transaction.transaction }`);

    };

    WebApp.BackButton.onClick(() => { router.push('/'); });
    WebApp.BackButton.show();
</script>

<template>
    <section id="section-transactions">

        <Header icon="icon-inbox" :title="$t('transactions.title')"></Header>

        <div>

            <ul v-if="transactions && transactions.length > 0">
                <li v-for="transaction in transactions" @click="OpenTransaction(transaction)" :class="transaction.departure === wallet ? 'transfer' : 'receive'">
                    <div>
                        <h2 class="w550-dots-1">{{ transaction.amount }} DPX {{ transaction.departure === wallet ? $t('transactions.sent') : $t('transactions.received') }}</h2>
                        <span>{{ $t('transactions.transaction') }}: {{ transaction.transaction }}</span>
                    </div>
                    <i :class="transaction.departure === wallet ? 'icon-arrow-up-circle' : 'icon-arrow-down-circle'"></i>
                </li>
            </ul>

            <p v-else-if="transactions">{{ $t('transactions.no_transactions') }}</p>

            <ul v-else class="shimmer-container" id="shimmer-transactions">
                <li v-for="i in 8"></li>
            </ul>

        </div>

    </section>
</template>

<style lang="scss">

    #section-transactions {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        height: 100%;

        > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            padding-bottom: 1rem;
            height: 100%;
            overflow-y: scroll;

            > ul {
                display: grid;
                width: 100%;
                grid-gap: 1rem;

                > li {
                    display: flex;
                    overflow: hidden;
                    color: var(--tg-theme-button-color);
                    align-items: center;
                    padding: 0 1rem;
                    position: relative;
                    border-radius: 0.5rem;
                    width: 100%;
                    cursor: pointer;

                    &.receive {
                        > i {
                            color: var(--border-green);
                        }
                    }

                    &.transfer {
                        > i {
                            color: var(--border-red);
                        }
                    }

                    > i {
                        font-size: 1.5rem;
                    }
                    
                    > div {
                        flex-grow: 1;
                        display: flex;
                        flex-direction: column;
                        padding: 1rem 0;
                        gap: 0.5rem;
                        

                        > h2 {
                            font-size: 1rem;
                            line-height: 1;
                        }

                        > span {
                            font-size: 0.875rem;
                            line-height: 1;
                        }
                    }
                }
            }

            #shimmer-transactions {
                > li {
                    height: 4.35rem;
                }
            }

            > ul:not(#shimmer-transactions) {
                > li {
                    &::before {
                        background-color: var(--tg-theme-button-color);
                        width: 100%;
                        height: 100%;
                        content: '';
                        position: absolute;
                        left: 0;
                        top: 0;
                        z-index: -100;
                        opacity: 0.125;
                    }
                }
            }
        }
    }

</style>