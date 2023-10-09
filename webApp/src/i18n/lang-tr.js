const i18n_tr = {
    general: {
        title: 'DPX Cüzdan',
        language: 'Türkçe',
        yes: 'Evet',
        no: 'Hayır',
    },
    login: {
        title: "DPX Cüzdan'a Hoş Geldiniz",
        description: "Başlamak için yeni bir cüzdan oluşturmanız veya zaten bir cüzdanınız varsa bunu içe aktarmanız gerekmektedir.",
        buttons: {
            import: "Cüzdanı İçe Aktar",
            create: "Cüzdan Oluştur"
        }
    },
    settings: {
        language: {
            title: 'Dil',
            description: 'Tercih ettiğiniz dili ayarlayın',
        },
        copyright: 'TeleVue kullanılarak geliştirilmiştir, Erfan Mola tarafından',
    },
    wallet: {
        title: {
            wallet: 'Cüzdan',
            import: 'Cüzdanı İçe Aktar',
        },
        fields: {
            wallet: 'Cüzdan Adresi',
            secret: 'Gizli Cümle',
        },
        import_wallet: 'Cüzdanı İçe Aktar',
        save_wallet: 'Cüzdanı Kaydet',
        hint: 'Bu bölümde cüzdan bilgilerinizi girebilirsiniz. Hem cüzdan adresi hem de gizli cümle 32 karakterden oluşur. QR kodlarınız varsa tarayabilirsiniz.',
        revoke_secret: 'Gizli Cümleyi İptal Et',
        clear_session: 'Bu Cihazdan Cüzdanı Temizle',
        scan_wallet: 'Cüzdan QR Adresini Tarayın',
        scan_secret: 'Gizli Cümle QR Değerini Tarayın',
        toast: {
            wallet_saved: 'Cüzdan başarıyla kaydedildi',
            wallet_imported: 'Cüzdan başarıyla içe aktarıldı',
            secret_revoked: 'Gizli cümle başarıyla iptal edildi ve kaydedildi',
        },
        prompt: {
            revoke_secret: {
                title: 'Gizli Cümleyi İptal Et',
                text: 'Cüzdanınızın gizli cümlesini iptal etmek istiyor musunuz?',
            },
            clear_session: {
                title: 'Cüzdanı Temizle',
                text: 'Bu cüzdanı cihazınızdan temizlemek istiyor musunuz?',
            },
        }
    },
    home: {
        balance: 'Bakiye',
        receive: 'Al',
        send: 'Gönder',
    },
    badges: {
        leagues: 'Ligler',
        ranks: {
            tier_1: 'Bronz',
            tier_2: 'Gümüş',
            tier_3: 'Altın',
            tier_4: 'Platin',
            tier_5: 'Elmas',
            tier_6: 'Gizem',
            tier_7: 'Şampiyon',
            tier_8: 'Efsane',
        }
    },
};

export default i18n_tr;
