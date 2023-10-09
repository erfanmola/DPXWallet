const i18n_de = {
    general: {
        title: 'DPX Brieftasche',
        language: 'Deutsch',
        yes: 'Ja',
        no: 'Nein',
    },
    login: {
        title: "Willkommen bei DPX Wallet",
        description: "Um loszulegen, müssen Sie eine neue Brieftasche erstellen oder eine vorhandene Brieftasche importieren, wenn Sie bereits eine haben.",
        buttons: {
            import: "Brieftasche importieren",
            create: "Brieftasche erstellen"
        }
    },
    settings: {
        language: {
            title: 'Sprache',
            description: 'Setzen Sie Ihre bevorzugte Sprache',
        },
        copyright: 'Entwickelt von Erfan Mola mit TeleVue',
    },
    wallet: {
        title: {
            wallet: 'Brieftasche',
            import: 'Brieftasche importieren',
        },
        fields: {
            wallet: 'Brieftaschenadresse',
            secret: 'Geheime Phrase',
        },
        import_wallet: 'Brieftasche importieren',
        save_wallet: 'Brieftasche speichern',
        hint: 'In diesem Abschnitt können Sie Ihre Brieftascheninformationen eingeben. Sowohl die Brieftaschenadresse als auch die geheime Phrase bestehen aus 32 Zeichen. Sie können sie scannen, wenn Sie QR-Codes haben.',
        revoke_secret: 'Geheime Phrase widerrufen',
        clear_session: 'Brieftasche von diesem Gerät löschen',
        scan_wallet: 'QR-Code der Brieftaschenadresse scannen',
        scan_secret: 'QR-Wert der geheimen Phrase scannen',
        toast: {
            wallet_saved: 'Brieftasche erfolgreich gespeichert',
            wallet_imported: 'Brieftasche erfolgreich importiert',
            secret_revoked: 'Geheime Phrase erfolgreich widerrufen und gespeichert',
        },
        prompt: {
            revoke_secret: {
                title: 'Geheime Phrase widerrufen',
                text: 'Möchten Sie die geheime Phrase Ihrer Brieftasche widerrufen?',
            },
            clear_session: {
                title: 'Brieftasche löschen',
                text: 'Möchten Sie diese Brieftasche von Ihrem Gerät löschen?',
            },
        }
    },
    home: {
        balance: 'Kontostand',
        receive: 'Empfangen',
        send: 'Senden',
    },
    badges: {
        leagues: 'Ligen',
        ranks: {
            tier_1: 'Bronze',
            tier_2: 'Silber',
            tier_3: 'Gold',
            tier_4: 'Platin',
            tier_5: 'Diamant',
            tier_6: 'Mysterium',
            tier_7: 'Champion',
            tier_8: 'Legende',
        }
    },
    receive: {
        set: 'Einstellen',
        amount: 'Betrag (Optional)',
        receive_amount: 'Erhaltener Betrag (DPX)',
        hint: 'Sie können Ihre Brieftaschenadresse kopieren und teilen, indem Sie auf die Adresse klicken. Sie können auch Ihren Brieftaschen-QR-Code teilen.',
        toast: {
            wallet_copied: 'Brieftaschenadresse wurde in die Zwischenablage kopiert',
        }
    },
};

export default i18n_de;
