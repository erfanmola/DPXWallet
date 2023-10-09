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
    receive: {
        set: 'Ayarla',
        amount: 'Miktar (İsteğe Bağlı)',
        receive_amount: 'Alınan Miktar (DPX)',
        hint: 'Adrese tıklayarak cüzdan adresinizi kopyalayabilir ve paylaşabilirsiniz. Ayrıca cüzdan QR kodunuzu da paylaşabilirsiniz.',
        toast: {
            wallet_copied: 'Cüzdan adresi panoya kopyalandı',
        }
    },
    transfer: {
        title: 'Transfer',
        fields: {
            departure: 'Gönderen Cüzdan',
            destination: 'Alıcı Cüzdan',
            amount: 'Miktar',
            transfer_amount: 'Transfer Miktarı (DPX)'
        },
        request_transfer: 'Transfer Talebi',
        toast: {
            success: 'İşlem başarıyla gerçekleştirildi'
        },
        prompt: {
            verify_transfer: {
                title: 'Transferi Onayla',
                text: '{amount} DPX ve 0.1 DPX ücret ile {destination} adresine transfer yapmak üzeresiniz. Devam etmek istiyor musunuz?',
            },
        }
    },
    api: {
        errors: {
            'invalid-credentials': 'Sağlanan kimlik bilgileri geçersiz',
            'invalid-departure': 'Gönderen cüzdan geçersiz',
            'invalid-destination': 'Alıcı cüzdan geçersiz',
            'invalid-secret-format': 'Gizli cümle formatı geçersiz',
            'invalid-amount': 'Miktar geçersiz',
            'same-departure-destination': 'Gönderen ve Alıcı aynı',
            'locked-departure': 'Gönderen cüzdan kilitli',
            'locked-destination': 'Alıcı cüzdan kilitli',
            'invalid-wallet': 'Cüzdan geçersiz',
            'invalid-secret': 'Gizli cümle geçersiz',
            'insufficient-balance': 'Bakiye yetersiz',
            'invalid-transaction': 'İşlem geçersiz',
        }
    },
    transactions: {
        title: 'İşlemler',
        transaction: 'İşlem',
        sent: 'Gönderildi',
        received: 'Alındı',
        no_transactions: 'Hiç işlem bulunamadı'
    },    
    transaction: {
        title: 'İşlem',
        info: 'Detaylar',
        fields: {
            id: 'Kimlik',
            departure: 'Gönderen',
            destination: 'Alıcı',
            amount: 'Miktar',
            fee: 'Ücret',
            date: 'Tarih',
        }
    },    
};

export default i18n_tr;
