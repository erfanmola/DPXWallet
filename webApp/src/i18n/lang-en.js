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
};

export default i18n_en;