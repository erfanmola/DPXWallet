const i18n_ar = {
    general: {
        title: 'محفظة DPX',
        language: 'العربية',
        yes: 'نعم',
        no: 'لا',
    },
    login: {
        title: "مرحبًا بك في محفظة DPX",
        description: "للبدء، يجب عليك إنشاء محفظة جديدة أو استيراد محفظة موجودة إذا كانت لديك بالفعل.",
        buttons: {
            import: "استيراد المحفظة",
            create: "إنشاء محفظة"
        },
        toast: {
            wallet_created: 'تم إنشاء المحفظة بنجاح'
        }
    },
    settings: {
        language: {
            title: 'اللغة',
            description: 'اختر لغتك المفضلة',
        },
        copyright: 'تطوير بواسطة عرفان مولا باستخدام TeleVue',
    },
    wallet: {
        title: {
            wallet: 'المحفظة',
            import: 'استيراد المحفظة',
        },
        fields: {
            wallet: 'عنوان المحفظة',
            secret: 'عبارة سرية',
        },
        import_wallet: 'استيراد المحفظة',
        save_wallet: 'حفظ المحفظة',
        hint: 'في هذا القسم، يمكنك إدخال معلومات المحفظة الخاصة بك. كل من عنوان المحفظة والعبارة السرية تتكون من 32 حرفًا. يمكنك مسحها إذا كنت تمتلك رموز الاستجابة السريعة (QR codes).',
        revoke_secret: 'إلغاء العبارة السرية',
        clear_session: 'مسح المحفظة من هذا الجهاز',
        scan_wallet: 'مسح عنوان المحفظة بواسطة رمز الاستجابة السريعة',
        scan_secret: 'مسح قيمة العبارة السرية بواسطة رمز الاستجابة السريعة',
        toast: {
            wallet_saved: 'تم حفظ المحفظة بنجاح',
            wallet_imported: 'تم استيراد المحفظة بنجاح',
            secret_revoked: 'تم إلغاء العبارة السرية بنجاح والحفظ',
        },
        prompt: {
            revoke_secret: {
                title: 'إلغاء العبارة السرية',
                text: 'هل تريد إلغاء العبارة السرية لمحفظتك؟',
            },
            clear_session: {
                title: 'مسح المحفظة',
                text: 'هل تريد مسح هذه المحفظة من جهازك؟',
            },
        }
    },
    home: {
        balance: 'الرصيد',
        receive: 'استقبال',
        send: 'إرسال',
    },
    badges: {
        leagues: 'الدوريات',
        ranks: {
            tier_1: 'برونز',
            tier_2: 'فضي',
            tier_3: 'ذهبي',
            tier_4: 'بلاتيني',
            tier_5: 'الماس',
            tier_6: 'غامض',
            tier_7: 'بطل',
            tier_8: 'أسطورة',
        }
    },
    receive: {
        set: 'تعيين',
        amount: 'المبلغ (اختياري)',
        receive_amount: 'المبلغ المستلم (DPX)',
        hint: 'يمكنك نسخ ومشاركة عنوان محفظتك بالنقر فوق العنوان. يمكنك أيضًا مشاركة رمز الاستجابة السريعة الخاص بمحفظتك.',
        toast: {
            wallet_copied: 'تم نسخ عنوان المحفظة إلى الحافظة',
        }
    },
    transfer: {
        title: 'التحويل',
        fields: {
            departure: 'المحفظة المرسلة',
            destination: 'المحفظة المستلمة',
            amount: 'المبلغ',
            transfer_amount: 'مبلغ التحويل (DPX)'
        },
        request_transfer: 'طلب التحويل',
        toast: {
            success: 'تمت العملية بنجاح'
        },
        prompt: {
            verify_transfer: {
                title: 'تأكيد التحويل',
                text: 'أنت على وشك نقل {amount} DPX برسوم قدرها 0.1 DPX إلى {destination}. هل ترغب في المتابعة؟',
            },
        }
    },
    api: {
        errors: {
            'invalid-credentials': 'بيانات الاعتماد المقدمة غير صالحة',
            'invalid-departure': 'المحفظة المرسلة غير صالحة',
            'invalid-destination': 'المحفظة المستلمة غير صالحة',
            'invalid-secret-format': 'صيغة العبارة السرية غير صالحة',
            'invalid-amount': 'المبلغ غير صالح',
            'same-departure-destination': 'المحفظة المرسلة والمستلمة هما نفسهما',
            'locked-departure': 'المحفظة المرسلة مغلقة',
            'locked-destination': 'المحفظة المستلمة مغلقة',
            'invalid-wallet': 'المحفظة غير صالحة',
            'invalid-secret': 'العبارة السرية غير صالحة',
            'insufficient-balance': 'الرصيد غير كافي',
            'invalid-transaction': 'العملية غير صالحة',
        }
    },
    transactions: {
        title: 'المعاملات',
        transaction: 'المعاملة',
        sent: 'تم الإرسال',
        received: 'تم الاستلام',
        no_transactions: 'لم يتم العثور على أي معاملات'
    },
    transaction: {
        title: 'المعاملة',
        info: 'التفاصيل',
        fields: {
            id: 'المعرف',
            departure: 'المرسل',
            destination: 'المستلم',
            amount: 'المبلغ',
            fee: 'الرسوم',
            date: 'التاريخ',
        }
    },    
};

export default i18n_ar;
