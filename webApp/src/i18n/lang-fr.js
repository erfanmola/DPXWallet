const i18n_fr = {
    general: {
        title: 'Portefeuille DPX',
        language: 'Français',
        yes: 'Oui',
        no: 'Non',
    },
    login: {
        title: "Bienvenue sur DPX Wallet",
        description: "Pour commencer, vous devez créer un nouveau portefeuille ou importer un portefeuille existant si vous en avez déjà un.",
        buttons: {
            import: "Importer le portefeuille",
            create: "Créer un portefeuille"
        }
    },
    settings: {
        language: {
            title: 'Langue',
            description: 'Définissez votre langue préférée',
        },
        copyright: 'Développé par Erfan Mola en utilisant TeleVue',
    },
    wallet: {
        title: {
            wallet: 'Portefeuille',
            import: 'Importer le Portefeuille',
        },
        fields: {
            wallet: 'Adresse du Portefeuille',
            secret: 'Phrase Secrète',
        },
        import_wallet: 'Importer le Portefeuille',
        save_wallet: 'Enregistrer le Portefeuille',
        hint: 'Dans cette section, vous pouvez entrer les informations de votre portefeuille. L\'adresse du portefeuille et la phrase secrète sont toutes deux composées de 32 caractères. Vous pouvez les scanner si vous avez des codes QR.',
        revoke_secret: 'Révoquer la Phrase Secrète',
        clear_session: 'Effacer le Portefeuille de cet Appareil',
        scan_wallet: 'Scanner l\'Adresse QR du Portefeuille',
        scan_secret: 'Scanner la Valeur QR de la Phrase Secrète',
        toast: {
            wallet_saved: 'Portefeuille enregistré avec succès',
            wallet_imported: 'Portefeuille importé avec succès',
            secret_revoked: 'Phrase secrète révoquée avec succès et enregistrée',
        },
        prompt: {
            revoke_secret: {
                title: 'Révoquer la Phrase Secrète',
                text: 'Voulez-vous révoquer la phrase secrète de votre portefeuille?',
            },
            clear_session: {
                title: 'Effacer le Portefeuille',
                text: 'Voulez-vous effacer ce portefeuille de votre appareil?',
            },
        }
    },
    home: {
        balance: 'Solde',
        receive: 'Recevoir',
        send: 'Envoyer',
    },
    badges: {
        leagues: 'Ligues',
        ranks: {
            tier_1: 'Bronze',
            tier_2: 'Argent',
            tier_3: 'Or',
            tier_4: 'Platine',
            tier_5: 'Diamant',
            tier_6: 'Mystère',
            tier_7: 'Champion',
            tier_8: 'Légende',
        }
    },
};

export default i18n_fr;
