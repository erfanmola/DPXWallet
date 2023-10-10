const i18n_fa = {
    general: {
        title: 'کیف پول DPX',
        language: 'فارسی',
        yes: 'بله',
        no: 'خیر',
    },
    login: {
        title: 'به کیف پول DPX خوش آمدید',
        description: 'برای شروع لازم است که یک کیف پول جدید ایجاد کنید یا اگر از قبل کیف پول دارید، می‌توانید آن‌را وارد کنید',
        buttons: {
            import: 'وارد کردن کیف پول',
            create: 'ایجاد کیف پول',
        },
        toast: {
            wallet_created: 'کیف پول با موفقیت ایجاد شد'
        }
    },
    settings: {
        language: {
            title: 'زبان',
            description: 'زبان مورد نظر خود را تنظیم کنید',
        },
        copyright: 'توسعه یافته توسط عرفان مولا با استفاده از TeleVue',
    },
    wallet: {
        title: {
            wallet: 'کیف پول',
            import: 'وارد کردن کیف پول',
        },
        fields: {
            wallet: 'آدرس کیف پول',
            secret: 'عبارت محرمانه',
        },
        import_wallet: 'افزودن کیف پول',
        save_wallet: 'ذخیره کیف پول',
        hint: 'از این بخش می‌توانید کیف پول خود را وارد کنید، کیف پول و عبارت محرمانه هر دو متشکل از 32 کاراکتر می‌باشند، می‌توانید در صورت داشتن QRCode آن‌ها را اسکن نمایید.',
        revoke_secret: 'بازنشانی عبارت محرمانه',
        clear_session: 'پاک کردن کیف پول از این دستگاه',
        scan_wallet: 'آدرس QR کیف پول را اسکن نمایید',
        scan_secret: 'مقدار QR عبارت محرمانه را اسکن نمایید',
        toast: {
            wallet_saved: 'کیف پول با موفقیت ذخیره شد',
            wallet_imported: 'کیف پول با موفقیت وارد شد',
            secret_revoked: 'عبارت محرمانه با موفقیت بازنشانی و ذخیره شد',
        },
        prompt: {
            revoke_secret: {
                title: 'بازنشانی عبارت محرمانه',
                text: 'آیا قصد دارید عبارت محرمانه کیف پول‌تان بازنشانی شود؟',
            },
            clear_session: {
                title: 'پاک کردن کیف پول',
                text: 'آیا قصد دارید این کیف پول را از دستگاه خود پاک کنید؟',
            },
        }
    },
    home: {
        balance: 'موجودی',
        receive: 'دریافت',
        send: 'ارسال',
    },
    badges: {
        leagues: 'لیگ‌ها',
        ranks: {
            tier_1: 'برنز',
            tier_2: 'نقره‌ای',
            tier_3: 'طلایی',
            tier_4: 'پلاتینیوم',
            tier_5: 'الماس',
            tier_6: 'مرموز',
            tier_7: 'قهرمان',
            tier_8: 'اسطوره',
        }
    },
    receive: {
        set: 'تنظیم',
        amount: 'مقدار (اختیاری)',
        receive_amount: 'مقدار دریافتی (DPX)',
        hint: 'شما می‌توانید با کلیک روی آدرس، آن را کپی کرده و به اشتراک بگذارید. همچنین می‌توانید کد QR کیف پول خود را به اشتراک بگذارید.',
        toast: {
            wallet_copied: 'آدرس کیف پول به کلیپ‌بورد کپی شد',
        }
    },
    transfer: {
        title: 'انتقال',
        fields: {
            departure: 'کیف پول مبدا',
            destination: 'کیف پول مقصد',
            amount: 'مقدار',
            transfer_amount: 'مقدار انتقالی (DPX)'
        },
        request_transfer: 'درخواست انتقال',
        toast: {
            success: 'تراکنش با موفقیت انجام شد'
        },
        prompt: {
            verify_transfer: {
                title: 'تأیید انتقال',
                text: 'شما در حال انتقال {amount} DPX با کارمزد {fee} DPX به {destination} هستید. آیا می‌خواهید ادامه دهید؟',
            },
        }
    },
    api: {
        errors: {
            'invalid-credentials': 'اطلاعات ورودی نامعتبر هستند',
            'invalid-departure': 'کیف پول مبدا نامعتبر است',
            'invalid-destination': 'کیف پول مقصد نامعتبر است',
            'invalid-secret-format': 'فرمت عبارت محرمانه نامعتبر است',
            'invalid-amount': 'مقدار نامعتبر است',
            'same-departure-destination': 'کیف پول مبدا و مقصد یکسان هستند',
            'locked-departure': 'کیف پول مبدا قفل شده است',
            'locked-destination': 'کیف پول مقصد قفل شده است',
            'invalid-wallet': 'کیف پول نامعتبر است',
            'invalid-secret': 'عبارت محرمانه نامعتبر است',
            'insufficient-balance': 'موجودی کافی نیست',
            'invalid-transaction': 'تراکنش نامعتبر است',
        }
    },
    transactions: {
        title: 'تراکنش‌ها',
        transaction: 'تراکنش',
        sent: 'ارسال شد',
        received: 'دریافت شد',
        no_transactions: 'تراکنشی یافت نشد'
    },    
    transaction: {
        title: 'تراکنش',
        info: 'جزئیات',
        fields: {
            id: 'شناسه',
            departure: 'مبدأ',
            destination: 'مقصد',
            amount: 'مقدار',
            fee: 'کارمزد',
            date: 'تاریخ',
        }
    },
};

export default i18n_fa;
