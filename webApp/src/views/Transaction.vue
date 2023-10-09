<script setup>
    import { inject, ref, onMounted } from 'vue';
    import { useI18n } from "vue-i18n";
    import { useRouter, useRoute } from 'vue-router';

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

    const route  = useRoute();
    const router = useRouter();
    const time   = ref([]);

    const wallet = ref(Utils.GetWallet('wallet'));

    const transaction = ref(null);

    if (localStorage.getItem(`transaction_${ route.params.id }`)) {

        transaction.value = JSON.parse(localStorage.getItem(`transaction_${ route.params.id }`));
        transaction.value['type'] = (transaction.value.departure === wallet.value) ? 'transfer' : 'receive';
        localStorage.removeItem(`transaction_${ route.params.id }`);

        time.value = new Date(transaction.value.timestamp * 1000).toLocaleString('en-US', { timeZone: 'Asia/Tehran' }).split(' ')[1].split(':').map(num => num.padStart(2, '0'));

    }else{

        setTimeout(async () => {

            let data = await Utils.DPXSendRequest(`/transaction/${ route.params.id }`, {}, 'GET');

            if (data && `result` in data && data.status === 'success') {

                transaction.value = data.result;

            }else{

                router.push('/transactions');

            }

        });

    }

    WebApp.BackButton.onClick(() => { router.push('/'); });
    WebApp.BackButton.show();
</script>

<template>
    <section id="section-transaction">

        <Header :icon="transaction ? (transaction.type === 'receive' ? 'icon-arrow-down-circle' : 'icon-arrow-up-circle') : 'icon-inbox'" :title="$t('transaction.title')"></Header>

        <div v-if="transaction">

            <section id="section-transaction-info">
                <h1 class="w550-dots-1">{{ $t('transaction.info') }}</h1>

                <ul>
                    <li><span class="w500-dots-1">{{ $t('transaction.fields.id') }}:</span><span class="w550-dots-1">{{ transaction.transaction }}</span></li>
                    <li><span class="w500-dots-1">{{ $t('transaction.fields.departure') }}:</span><span class="w550-dots-1">{{ transaction.departure }}</span></li>
                    <li><span class="w500-dots-1">{{ $t('transaction.fields.destination') }}:</span><span class="w550-dots-1">{{ transaction.destination }}</span></li>
                    <li><span class="w500-dots-1">{{ $t('transaction.fields.amount') }}:</span><span class="w550-dots-1">{{ transaction.amount }}</span></li>
                    <li><span class="w500-dots-1">{{ $t('transaction.fields.fee') }}:</span><span class="w550-dots-1">{{ transaction.fee }}</span></li>
                    <li><span class="w500-dots-1">{{ $t('transaction.fields.date') }}:</span><span class="w550-dots-1">{{ new Date(transaction.timestamp * 1000).toLocaleTimeString() }} {{ new Date(transaction.timestamp * 1000).toLocaleDateString() }}</span></li>
                </ul>
            </section>

        </div>

        <ul v-else class="shimmer-container" id="shimmer-transaction">
            <li></li>
        </ul>

    </section>
</template>

<style lang="scss">

    #section-transaction {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        height: 100%;

        > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;

            > section {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 100%;
                padding: 1rem;
                gap: 1rem;
                position: relative;
                overflow: hidden;
                border-radius: 0.5rem;
                color: var(--tg-theme-button-color);

                &:before {
                    position: absolute;
                    background-color: var(--tg-theme-button-color);
                    width: 100%;
                    height: 100%;
                    left: 0;
                    right: 0;
                    content: '';
                    z-index: -100;
                    opacity: 0.125;
                }

                > ul {
                    display: flex;
                    width: 100%;
                    flex-direction: column;
                    gap: 1rem;

                    > li {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;

                        > span {
                            &:first-child {
                                font-size: 1rem;
                            }

                            &:last-child {
                                font-size: 0.925rem;
                            }
                        }
                    }
                }
            }
        }
    }

    #shimmer-transaction {
        width: 100%;

        > li {
            border-radius: 0.425rem;
            height: 24rem;
        }
    }

</style>