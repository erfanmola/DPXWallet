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
        },
        toast: {
            wallet_created: 'Brieftasche erfolgreich erstellt'
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
    transfer: {
        title: 'Überweisung',
        fields: {
            departure: 'Abgangswallet',
            destination: 'Zielwallet',
            amount: 'Betrag',
            transfer_amount: 'Überweisungsbetrag (DPX)'
        },
        request_transfer: 'Überweisung anfordern',
        toast: {
            success: 'Die Transaktion war erfolgreich'
        },
        prompt: {
            verify_transfer: {
                title: 'Überweisung bestätigen',
                text: 'Sie überweisen {amount} DPX mit einer Gebühr von 0,1 DPX an {destination}. Möchten Sie fortfahren?',
            },
        }
    },
    api: {
        errors: {
            'invalid-credentials': 'Die bereitgestellten Anmeldedaten sind ungültig',
            'invalid-departure': 'Abgangswallet ist ungültig',
            'invalid-destination': 'Zielwallet ist ungültig',
            'invalid-secret-format': 'Das Format des geheimen Satzes ist ungültig',
            'invalid-amount': 'Betrag ist ungültig',
            'same-departure-destination': 'Abgangs- und Zielwallet sind identisch',
            'locked-departure': 'Abgangswallet ist gesperrt',
            'locked-destination': 'Zielwallet ist gesperrt',
            'invalid-wallet': 'Wallet ist ungültig',
            'invalid-secret': 'Geheimer Satz ist ungültig',
            'insufficient-balance': 'Guthaben ist nicht ausreichend',
            'invalid-transaction': 'Transaktion ist ungültig',
        }
    },
    transactions: {
        title: 'Transaktionen',
        transaction: 'Transaktion',
        sent: 'Gesendet',
        received: 'Empfangen',
        no_transactions: 'Keine Transaktionen gefunden'
    },    
    transaction: {
        title: 'Transaktion',
        info: 'Details',
        fields: {
            id: 'ID',
            departure: 'Absender',
            destination: 'Empfänger',
            amount: 'Betrag',
            fee: 'Gebühr',
            date: 'Datum',
        }
    },    
};

export default i18n_de;
