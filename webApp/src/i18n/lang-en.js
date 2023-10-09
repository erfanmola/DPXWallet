const i18n_en = {
    general: {
        title: 'DPX Wallet',
        language: 'English',
        yes: 'Yes',
        no: 'No',
    },
    login: {
        title: "Welcome to DPX Wallet",
        description: "To get started, you need to create a new wallet or import an existing wallet if you already have one.",
        buttons: {
            import: "Import Wallet",
            create: "Create Wallet"
        }
    },
    settings: {
        language: {
            title: 'Language',
            description: 'Set your prefered language',
        },
        copyright: 'Developed by Erfan Mola using TeleVue',
    },
    wallet: {
        title: {
            wallet: 'Wallet',
            import: 'Import Wallet',
        },
        fields: {
            wallet: 'Wallet Address',
            secret: 'Secret Phrase',
        },
        import_wallet: 'Import Wallet',
        save_wallet: 'Save Wallet',
        hint: 'In this section, you can enter your wallet information. Both wallet address and secret phrase are 32 characters long. You can scan them if you have QR codes.',
        revoke_secret: 'Revoke Secret Phrase',
        clear_session: 'Clear Wallet from this Device',
        scan_wallet: 'Scan Wallet QR Address',
        scan_secret: 'Scan Secret Phrase QR Value',
        toast: {
            wallet_saved: 'Wallet successfully saved',
            wallet_imported: 'Wallet successfully imported',
            secret_revoked: 'Secret phrase successfully revoked and saved',
        },
        prompt: {
            revoke_secret: {
                title: 'Revoke Secret Phrase',
                text: 'Do you want to revoke your wallet\'s secret phrase?',
            },
            clear_session: {
                title: 'Clear Wallet',
                text: 'Do you want to clear this wallet from your device?',
            },
        }
    },
    home: {
        balance: 'Balance',
        receive: 'Receive',
        send: 'Send',
    },
    badges: {
        leagues: 'Leagues',
        ranks: {
            tier_1: 'Bronze',
            tier_2: 'Silver',
            tier_3: 'Gold',
            tier_4: 'Platinum',
            tier_5: 'Diamond',
            tier_6: 'Mystery',
            tier_7: 'Champion',
            tier_8: 'Legend',
        }
    },
    receive: {
        set: 'Set',
        amount: 'Amount (Optional)',
        receive_amount: 'Receive Amount (DPX)',
        hint: 'You can copy and share your wallet address by clicking on the address. You can also share your wallet QRCode.',
        toast: {
            wallet_copied: 'Wallet address is copied to clipboard',
        }
    },
};

export default i18n_en;