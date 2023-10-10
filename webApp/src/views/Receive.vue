<script setup>
    import { inject, ref, onMounted } from 'vue';
    import { useI18n } from "vue-i18n";
    import { useRouter } from 'vue-router';

    import WebApp from '@twa-dev/sdk';

    import QRCodeStyling from 'qr-code-styling';

    import Hint from '../components/Hint.vue';

    import Utils from '../utils';
    
    // If user has no saved wallet, redirect to login
    if (!(Utils.GetWallet('wallet'))) {

        const router = useRouter();
        router.push('/login');

    }

    const i18nLocale = useI18n({ useScope: 'global' });
    
    // Set i18n locale based on the user's locale provided by <LocaleProvider>
    i18nLocale.locale.value = localStorage.getItem('dpxwallet_locale') || inject('locale', 'en');

    const router = useRouter();
    const amount = ref(null);
    const wallet = ref(Utils.GetWallet('wallet'));

    let qrCode = null;

    const RegenerateQRCode = () => {

        window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');

        let data = wallet.value;

        if (!(isNaN(amount.value)) && parseFloat(amount.value) > 0) {

            if (parseFloat(amount.value) <= 99999999) {

                data += `/${ parseInt(amount.value * 10) / 10 }`;

            }

        }

        qrCode.update({
            data: data,
        });

        document.getElementById("qrcode").firstChild.setAttribute('viewBox', '0 0 512 512');

    };

    const copyToClipboard = () => {

        window.Telegram.WebApp.HapticFeedback.impactOccurred('medium');
        Utils.copyTextToClipboard(wallet.value);
        Utils.Toast(i18nLocale.t('receive.toast.wallet_copied'));

    };

    onMounted(() => { 

        qrCode = new QRCodeStyling({
            width: 512,
            height: 512,
            margin: 12,
            type: "svg",
            data: wallet.value,
            image: 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent((`<svg id="svg-dpx" xmlns="http://www.w3.org/2000/svg" version="1.1" width="922" height="1024" viewBox="0 0 922 1024" display="none"><path fill="red" d="M361.813 40.107l-67.413 38.827-0.853 354.56-1.28 354.56-77.653-44.8-78.080-44.8v-372.907l93.867-53.76v-155.733l-111.787 64.853-112.213 64.427v533.333l422.4 244.053 1.28-255.573c0.427-140.373 0.427-369.92 0-510.72l-1.28-255.147-66.987 38.827z"/><path fill="red" d="M490.667 512c0 340.48 1.28 507.733 4.267 507.733 2.56 0 33.28-16.64 68.267-37.12l64-37.12 0.853-354.987 1.28-354.987 78.080 44.8 77.653 44.8v374.187l-46.933 26.453-46.933 26.88v157.013l9.813-5.973c5.12-3.413 56.747-33.707 115.2-67.413l105.387-61.013v-526.933l-211.2-122.027c-116.48-66.987-213.333-122.027-215.467-122.027-2.987 0-4.267 179.2-4.267 507.733z"/></svg>`).replaceAll('red', getComputedStyle(document.documentElement).getPropertyValue('--tg-theme-button-color'))),
            dotsOptions: {
                color: getComputedStyle(document.documentElement).getPropertyValue('--tg-theme-button-color'),
                type: "dots"
            },
            cornersSquareOptions: {
                type: "extra-rounded",
            },
            cornersDotOptions: {
                type: "dot",
            },
            backgroundOptions: {
                color: getComputedStyle(document.documentElement).getPropertyValue('--tg-theme-secondary-bg-color'),
            },
            imageOptions: {
                margin: 12,
            },
        });

        qrCode.append(document.getElementById("qrcode"));
        document.getElementById("qrcode").firstChild.setAttribute('viewBox', '0 0 512 512');
        
    });

    WebApp.BackButton.onClick(() => { router.push('/'); });
    WebApp.BackButton.show();
</script>

<template>
    <section id="section-receive">

        <div>
            <div id="qrcode"></div>
            <p @click="copyToClipboard"><i class="icon-clipboard"></i><span>{{ wallet }}</span></p>
            
            <div id="container-amount">
                <div class="form-item">
                    <label>{{ $t('receive.amount') }}</label>
                    <div>
                        <input type="number" enterkeyhint="done" :placeholder="$t('receive.receive_amount')" min="0" max="99999999" minlength="0" maxlength="8" v-model="amount" @keydown="Utils.hideKeyboardOnEnter" @focus="Utils.HandleInputFocus" />
                    </div>
                </div>

                <button class="button normal w500-dots-1" @click="RegenerateQRCode">{{ $t('receive.set') }}</button>
            </div>

            <Hint>
                <template #content>
                    <p>{{ $t('receive.hint') }}</p>
                </template>
            </Hint>
        </div>

    </section>
</template>

<style lang="scss">

    #section-receive {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        height: 100%;

        > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;

            #qrcode {
                width: 70%;
                overflow: hidden;
                border-radius: 1rem;
                height: auto;
                padding: 0;
                margin: 0;
                background-color: var(--tg-theme-secondary-bg-color);

                svg {
                    display: block;
                    width: 100%;
                    height: auto;
                }
            }

            > p {
                position: relative;
                color: var(--tg-theme-button-color);
                border-radius: 100rem;
                overflow: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
                direction: ltr;
                gap: 0.5rem;
                padding: 0 1rem;
                cursor: pointer;

                > i {
                    font-size: 1.25rem;
                }

                > span {
                    user-select: all;
                }

                &::before {
                    position: absolute;
                    content: '';
                    background-color: var(--tg-theme-button-color);
                    z-index: -1;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    opacity: 0.125;
                }
            }

            > div#container-amount {
                display: flex;
                width: 100%;
                gap: 1rem;
                align-items: flex-end;

                > div {
                    flex-grow: 1;
                }

                > button {
                    padding: 0.75rem 1.5rem;
                }
            }
        }
    }

</style>