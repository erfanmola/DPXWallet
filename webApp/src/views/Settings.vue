<script setup>
    import { inject, ref, watch } from 'vue';
    import { useRouter } from 'vue-router';
    import { useI18n } from "vue-i18n";

    import WebApp from '@twa-dev/sdk';
    import { List, Section, RadioButton } from '@erfanmola/televue';

    const i18nLocale = useI18n({ useScope: 'global' });
    const locale = ref(localStorage.getItem('locale') || inject('locale', 'en'));

    // Set i18n locale
    i18nLocale.locale.value = locale.value;


    watch(locale, () => {
        localStorage.setItem('locale', locale.value);
        window.location.reload();
    });

    const router = useRouter();

    WebApp.setHeaderColor('secondary_bg_color');
    WebApp.BackButton.onClick(() => { router.push('/'); });
    WebApp.BackButton.show();
</script>

<template>
    <div id="container-settings">

        <Section :title="$t('settings.language.title')" :description="$t('settings.language.description')">
            <List id="language-list">
                <li v-for="localeItem in i18nLocale.availableLocales" :key="locale" @click="locale = localeItem">
                    <RadioButton :checked="locale === localeItem" />
                    <span>{{ $t('general.language', {}, { locale: localeItem }) }}</span>
                </li>
            </List>
        </Section>

        <p id="copyright" class="no-select">{{ $t('settings.copyright') }}</p>

    </div>
</template>

<style lang="scss">

    #language-list {
        display: flex;
        flex-direction: column;

        > li {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
    }

    #copyright {
        flex-grow: 1;
        width: 90%;
        margin: 1rem auto;
        text-align: center;
        color: var(--tg-theme-hint-color);

        a {
            color: var(--tg-theme-link-color);
            text-decoration: none;
        }
    }

</style>