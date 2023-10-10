<script setup>
    import { ref, watch, inject } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import Header from '../components/Header.vue';
    import Utils from '../utils';
    import Hint from '../components/Hint.vue';
    import { useI18n } from "vue-i18n";
    import WebApp from '@twa-dev/sdk';

    const route = useRoute();
    const router = useRouter();

    const passwordFieldType = ref('password');
    const hasChanged = ref(false);

    const wallet = ref(Utils.GetWallet('wallet'));
    const secret = ref(Utils.GetWallet('secret'));

    if (!(wallet.value && secret.value) && route.name === 'wallet') {

        router.push('/');

    }

    const status = ref('normal');
    const statusRevoke = ref('normal');

    const togglePasswordField = () => {

        WebApp.HapticFeedback.impactOccurred('light');
        passwordFieldType.value = (passwordFieldType.value === 'password' ? 'text' : 'password');

    };

    const ScanQRCode = (type = 'wallet') => {

        Utils.ScanQRCode(type === 'wallet' ? i18nLocale.t('wallet.scan_wallet') : i18nLocale.t('wallet.scan_secret'), (data) => {

            if (/^[A-Fa-f0-9]{32}$/.test(data.data)) {

                if (type === 'wallet') {

                    wallet.value = data.data;

                } else {

                    secret.value = data.data;

                }

                return true;

            }

            return false;

        });

    };

    const Submit = async () => {

        hasChanged.value = false;

        status.value = 'progress';
        WebApp.HapticFeedback.impactOccurred('medium');

        let result = await Utils.DPXSendRequest('/verify', { 'wallet': wallet.value, 'secret': secret.value }, 'POST', i18nLocale);

        if (result) {

            WebApp.HapticFeedback.notificationOccurred('success');

            status.value = 'success';
            Utils.PlayAudio('Success.mp3');

            Utils.SetWallet(wallet.value.toString().toLowerCase(), secret.value.toString().toLowerCase());

            if (route.name === 'wallet') {

                Utils.Toast(i18nLocale.t('wallet.toast.wallet_saved'));
                setTimeout(() => { status.value = 'normal' }, 2000);

            } else {

                Utils.Toast(i18nLocale.t('wallet.toast.wallet_imported'));
                setTimeout(() => { router.push('/'); }, 2000);

            }

        } else {

            WebApp.HapticFeedback.notificationOccurred('error');

            status.value = 'failed';
            Utils.PlayAudio('Failed.mp3');

            setTimeout(() => { status.value = 'normal'; }, 2500);

        }

    };

    const DeleteWallet = () => {

        document.querySelector("#container-clear button").classList.remove('normal');

        Utils.Prompt(i18nLocale.t('wallet.prompt.clear_session.title'), i18nLocale.t('wallet.prompt.clear_session.text'), [
            {
                text: i18nLocale.t('general.no'),
                type: "default",
                event: () => { WebApp.HapticFeedback.impactOccurred('soft'); document.querySelector("#container-clear button").classList.add('normal'); },
            },
            {
                text: i18nLocale.t('general.yes'),
                type: "destructive",
                event: () => {

                    window.localStorage.removeItem(`wallet_user_${WebApp.initDataUnsafe.user.id}`);
                    WebApp.HapticFeedback.impactOccurred('heavy');
                    router.push('/');

                },
            },
        ]);

    };

    watch([wallet, secret], () => { hasChanged.value = true });

    const RevokeSecret = async () => {

        Utils.Prompt(i18nLocale.t('wallet.prompt.revoke_secret.title'), i18nLocale.t('wallet.prompt.revoke_secret.text'), [
            {
                text: i18nLocale.t('general.no'),
                type: "default",
                event: () => { WebApp.HapticFeedback.impactOccurred('soft'); },
            },
            {
                text: i18nLocale.t('general.yes'),
                type: "destructive",
                event: async () => {

                    statusRevoke.value = 'progress';
                    WebApp.HapticFeedback.impactOccurred('medium');

                    let result = await Utils.DPXSendRequest('/revoke', { 'wallet': wallet.value, 'secret': secret.value }, 'POST', i18nLocale);

                    if (result) {

                        WebApp.HapticFeedback.notificationOccurred('success');

                        statusRevoke.value = 'success';
                        Utils.PlayAudio('Success.mp3');

                        Utils.Toast(i18nLocale.t('wallet.toast.secret_revoked'), 5000);

                        secret.value = result.result;

                        Utils.SetWallet(wallet.value.toString().toLowerCase(), secret.value.toString().toLowerCase());

                        setTimeout(() => { hasChanged.value = false });

                        setTimeout(() => { statusRevoke.value = 'hide'; }, 2500);

                    } else {

                        WebApp.HapticFeedback.notificationOccurred('error');

                        statusRevoke.value = 'failed';
                        Utils.PlayAudio('Failed.mp3');

                        setTimeout(() => { statusRevoke.value = 'normal'; }, 2500);

                    }

                },
            },
        ]);

    };

    const i18nLocale = useI18n({ useScope: 'global' });

    // Set i18n locale based on the user's locale provided by <LocaleProvider>
    i18nLocale.locale.value = localStorage.getItem('dpxwallet_locale') || inject('locale', 'en');

    WebApp.BackButton.onClick(() => { router.push('/'); });
    WebApp.BackButton.show();
</script>

<template>
    <section id="section-wallet">

        <Header icon="icon-credit-card"
            :title="route.name === 'wallet' ? $t('wallet.title.wallet') : $t('wallet.title.import')"></Header>

        <div>

            <div class="form-item">
                <label>{{ $t('wallet.fields.wallet') }}</label>
                <div>
                    <input type="text" enterkeyhint="done" :placeholder="$t('wallet.fields.wallet')" maxlength="32" minlength="32"
                        v-model="wallet" @keydown="Utils.hideKeyboardOnEnter" />
                    <i @click="ScanQRCode('wallet')" class="icon-maximize"></i>
                </div>
            </div>

            <div class="form-item">
                <label>{{ $t('wallet.fields.secret') }}</label>
                <div>
                    <input :type="passwordFieldType" :placeholder="$t('wallet.fields.secret')" maxlength="32" minlength="32"
                        v-model="secret" @keydown="Utils.hideKeyboardOnEnter" />
                    <i @click="ScanQRCode('secret')" class="icon-maximize"></i>
                    <i :class="(passwordFieldType === 'password' ? 'icon-eye' : 'icon-eye-off')"
                        @click="togglePasswordField"></i>
                </div>
            </div>

            <button @click="Submit" :class="['button', 'button-progress', `button-progress-${status}`]"
                :disabled="(status !== 'normal') || !(/^[A-Fa-f0-9]{32}$/.test(wallet) && /^[A-Fa-f0-9]{32}$/.test(secret) && (route.name !== 'wallet' || (hasChanged)))">
                <i :class="`${route.name === 'wallet' ? 'icon-save' : 'icon-plus-square'}`"></i>
                <span>{{ route.name === 'wallet' ? $t('wallet.save_wallet') : $t('wallet.import_wallet') }}</span>
            </button>

            <Hint v-if="route.name !== 'wallet'">
                <template #content>
                    <p>{{ $t('wallet.hint') }}</p>
                </template>
            </Hint>

        </div>

        <div v-if="route.name === 'wallet'" id="container-clear">
            <button v-if="statusRevoke !== 'hide'"
                :class="['button', 'button-progress', 'normal', `button-progress-${statusRevoke}`]"
                @click="RevokeSecret" :disabled="statusRevoke !== 'normal'"><i class="icon-repeat"></i><span>{{ $t('wallet.revoke_secret') }}</span></button>
            <button class="button danger" @click="DeleteWallet"><i class="icon-trash"></i><span>{{
                $t('wallet.clear_session') }}</span></button>
        </div>

    </section>
</template>

<style lang="scss">
    #section-wallet {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        height: 100%;

        >div {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
        }

        >div#container-clear {
            display: flex;
            justify-content: flex-end;
            flex-direction: column;
            flex-grow: 1;
            align-items: center;

            >button {
                height: 3.5rem;

                &:not(.button-progress) {
                    width: 100%;
                }
            }
        }
    }
</style>