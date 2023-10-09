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
    receive: {
        set: 'Définir',
        amount: 'Montant (Optionnel)',
        receive_amount: 'Montant Reçu (DPX)',
        hint: 'Vous pouvez copier et partager votre adresse de portefeuille en cliquant sur l\'adresse. Vous pouvez également partager votre QR Code de portefeuille.',
        toast: {
            wallet_copied: 'Adresse du portefeuille copiée dans le presse-papiers',
        }
    },
    transfer: {
        title: 'Transfert',
        fields: {
            departure: 'Portefeuille de Départ',
            destination: 'Portefeuille de Destination',
            amount: 'Montant',
            transfer_amount: 'Montant du Transfert (DPX)'
        },
        request_transfer: 'Demander le Transfert',
        toast: {
            success: 'La transaction a réussi'
        },
        prompt: {
            verify_transfer: {
                title: 'Vérifier le Transfert',
                text: 'Vous transférez {amount} DPX avec des frais de 0,1 DPX vers {destination}. Voulez-vous continuer ?',
            },
        }
    },
    api: {
        errors: {
            'invalid-credentials': 'Les identifiants fournis ne sont pas valides',
            'invalid-departure': 'Le portefeuille de départ n\'est pas valide',
            'invalid-destination': 'Le portefeuille de destination n\'est pas valide',
            'invalid-secret-format': 'Le format de la phrase secrète n\'est pas valide',
            'invalid-amount': 'Le montant n\'est pas valide',
            'same-departure-destination': 'Le portefeuille de départ et de destination sont identiques',
            'locked-departure': 'Le portefeuille de départ est verrouillé',
            'locked-destination': 'Le portefeuille de destination est verrouillé',
            'invalid-wallet': 'Le portefeuille n\'est pas valide',
            'invalid-secret': 'La phrase secrète n\'est pas valide',
            'insufficient-balance': 'Le solde n\'est pas suffisant',
            'invalid-transaction': 'La transaction n\'est pas valide',
        }
    },
    transactions: {
        title: 'Transactions',
        transaction: 'Transaction',
        sent: 'Envoyé',
        received: 'Reçu',
        no_transactions: 'Aucune transaction trouvée'
    },   
    transaction: {
        title: 'Transaction',
        info: 'Détails',
        fields: {
            id: 'ID',
            departure: 'Départ',
            destination: 'Destination',
            amount: 'Montant',
            fee: 'Frais',
            date: 'Date',
        }
    },
};

export default i18n_fr;
