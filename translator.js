/* =========================================================
   DAILY ACCOUNTING - GLOBAL TRANSLATOR
   translator.js
========================================================= */

(function () {
  'use strict';

  /* =======================================================
     LANGUAGES
  ======================================================= */

  const LANGUAGES = {
    en: {
      name: 'English',
      nativeName: 'English',
      dir: 'ltr'
    },

    fa: {
      name: 'Persian',
      nativeName: 'فارسی',
      dir: 'rtl'
    },

    ar: {
      name: 'Arabic',
      nativeName: 'العربية',
      dir: 'rtl'
    },

    ps: {
      name: 'Pashto',
      nativeName: 'پښتو',
      dir: 'rtl'
    },

    tr: {
      name: 'Turkish',
      nativeName: 'Türkçe',
      dir: 'ltr'
    }
  };


  /* =======================================================
     DEFAULT SETTINGS
  ======================================================= */

  const DEFAULT_SETTINGS = {
    language: 'en',

    themeColor: '#7c3aed',

    countryCode: 'AF',
    countryName: 'Afghanistan',
    countryFlag: '🇦🇫',

    currencyCode: 'AFN',
    currencyName: 'Afghan Afghani',
    currencySymbol: '؋',

    state: 'Jawzjan',
    city: '',

    name: '',
    phone: '',
    avatar: ''
  };


  const STORAGE_KEY =
    'dailyAccountingSettings';


  /* =======================================================
     TRANSLATIONS
  ======================================================= */

  const TRANSLATIONS = {

    en: {

      dailyAccounting: 'Daily Accounting',

      home: 'Home',
      transactions: 'Transactions',
      profile: 'Profile',
      settings: 'Settings',
      logout: 'Logout',

      loading: 'Loading...',
      checkingAccount: 'Checking account...',

      signInOrRegister: 'Sign In or Register',
      loginDescription:
        'Log in to access your cloud accounts.',

      emailAddress: 'Email Address',
      password: 'Password',

      emailPlaceholder:
        'example@gmail.com',

      passwordPlaceholder:
        'At least 6 characters',

      signIn: 'Sign In',
      createAccount: 'Create New Account',

      verifyEmail: 'Verify Your Email',

      verifyEmailDescription:
        'Enter the 6-digit code sent to your email.',

      verificationCode:
        'Verification Code',

      verificationCodePlaceholder:
        'Enter 6-digit code',

      verifyCode: 'Verify Code',
      resendCode: 'Resend Code',
      back: 'Back',

      myAccounts: 'My Accounts',

      noAccounts: 'No accounts yet',

      noAccountsText:
        'Create a transaction to start your accounting.',

      credit: 'Credit',
      debit: 'Debit',
      balance: 'Balance',

      transaction: 'Transaction',
      transactionsCount: 'transactions',

      edit: 'Edit',
      delete: 'Delete',

      confirmDeletion:
        'Confirm Deletion',

      deleteAccount:
        'Are you sure you want to delete this account?',

      cancel: 'Cancel',
      yesDelete: 'Yes, Delete',

      location: 'Location',
      detecting: 'Detecting...',

      live: 'LIVE',
      ratesUnavailable:
        'Rates API unavailable',

      rateUnavailable:
        'Rate unavailable',

      accountDeleted:
        'Account deleted.',

      transactionDeleted:
        'Transaction deleted.',

      deleteTransaction:
        'Delete this transaction?',

      signupSessionExpired:
        'Signup session expired.',

      enterEmailPassword:
        'Enter email and password.',

      enterValidPassword:
        'Enter email and a password of at least 6 characters.',

      verificationSent:
        'Verification code sent.',

      verificationCodeSent:
        'Code sent again.',

      invalidCode:
        'Invalid code.',

      codeSixDigits:
        'Code must contain 6 digits.',

      accountCreated:
        'Account created successfully.',

      verificationError:
        'Verification error.'
    },


    fa: {

      dailyAccounting: 'حسابداری روزانه',

      home: 'خانه',
      transactions: 'معاملات',
      profile: 'پروفایل',
      settings: 'تنظیمات',
      logout: 'خروج',

      loading: 'در حال بارگذاری...',
      checkingAccount: 'در حال بررسی حساب...',

      signInOrRegister:
        'ورود یا ثبت‌نام',

      loginDescription:
        'برای دسترسی به حساب‌های ابری خود وارد شوید.',

      emailAddress:
        'آدرس ایمیل',

      password:
        'رمز عبور',

      emailPlaceholder:
        'example@gmail.com',

      passwordPlaceholder:
        'حداقل ۶ حرف',

      signIn:
        'ورود',

      createAccount:
        'ایجاد حساب جدید',

      verifyEmail:
        'تأیید ایمیل',

      verifyEmailDescription:
        'کد ۶ رقمی ارسال‌شده به ایمیل خود را وارد کنید.',

      verificationCode:
        'کد تأیید',

      verificationCodePlaceholder:
        'کد ۶ رقمی را وارد کنید',

      verifyCode:
        'تأیید کد',

      resendCode:
        'ارسال دوباره کد',

      back:
        'بازگشت',

      myAccounts:
        'حساب‌های من',

      noAccounts:
        'هنوز حسابی وجود ندارد',

      noAccountsText:
        'برای شروع حسابداری، یک معامله ثبت کنید.',

      credit:
        'طلب',

      debit:
        'بدهی',

      balance:
        'موجودی',

      transaction:
        'معامله',

      transactionsCount:
        'معامله',

      edit:
        'ویرایش',

      delete:
        'حذف',

      confirmDeletion:
        'تأیید حذف',

      deleteAccount:
        'آیا از حذف این حساب مطمئن هستید؟',

      cancel:
        'لغو',

      yesDelete:
        'بله، حذف شود',

      location:
        'موقعیت',

      detecting:
        'در حال تشخیص...',

      live:
        'زنده',

      ratesUnavailable:
        'API نرخ ارز در دسترس نیست',

      rateUnavailable:
        'نرخ در دسترس نیست',

      accountDeleted:
        'حساب حذف شد.',

      transactionDeleted:
        'معامله حذف شد.',

      deleteTransaction:
        'آیا این معامله حذف شود؟',

      signupSessionExpired:
        'جلسه ثبت‌نام منقضی شده است.',

      enterEmailPassword:
        'ایمیل و رمز عبور را وارد کنید.',

      enterValidPassword:
        'ایمیل و رمز عبور حداقل ۶ حرفی وارد کنید.',

      verificationSent:
        'کد تأیید ارسال شد.',

      verificationCodeSent:
        'کد دوباره ارسال شد.',

      invalidCode:
        'کد نادرست است.',

      codeSixDigits:
        'کد باید ۶ رقمی باشد.',

      accountCreated:
        'حساب با موفقیت ایجاد شد.',

      verificationError:
        'خطا در تأیید کد.'
    },


    ar: {

      dailyAccounting:
        'المحاسبة اليومية',

      home:
        'الرئيسية',

      transactions:
        'المعاملات',

      profile:
        'الملف الشخصي',

      settings:
        'الإعدادات',

      logout:
        'تسجيل الخروج',

      loading:
        'جار التحميل...',

      checkingAccount:
        'جارٍ التحقق من الحساب...',

      signInOrRegister:
        'تسجيل الدخول أو إنشاء حساب',

      loginDescription:
        'سجّل الدخول للوصول إلى حساباتك السحابية.',

      emailAddress:
        'عنوان البريد الإلكتروني',

      password:
        'كلمة المرور',

      emailPlaceholder:
        'example@gmail.com',

      passwordPlaceholder:
        '6 أحرف على الأقل',

      signIn:
        'تسجيل الدخول',

      createAccount:
        'إنشاء حساب جديد',

      verifyEmail:
        'تأكيد البريد الإلكتروني',

      verifyEmailDescription:
        'أدخل الرمز المكون من 6 أرقام المرسل إلى بريدك الإلكتروني.',

      verificationCode:
        'رمز التحقق',

      verificationCodePlaceholder:
        'أدخل الرمز المكون من 6 أرقام',

      verifyCode:
        'تأكيد الرمز',

      resendCode:
        'إعادة إرسال الرمز',

      back:
        'رجوع',

      myAccounts:
        'حساباتي',

      noAccounts:
        'لا توجد حسابات بعد',

      noAccountsText:
        'أنشئ معاملة لبدء المحاسبة.',

      credit:
        'دائن',

      debit:
        'مدين',

      balance:
        'الرصيد',

      transaction:
        'معاملة',

      transactionsCount:
        'معاملات',

      edit:
        'تعديل',

      delete:
        'حذف',

      confirmDeletion:
        'تأكيد الحذف',

      deleteAccount:
        'هل أنت متأكد أنك تريد حذف هذا الحساب؟',

      cancel:
        'إلغاء',

      yesDelete:
        'نعم، حذف',

      location:
        'الموقع',

      detecting:
        'جارٍ التحديد...',

      live:
        'مباشر',

      ratesUnavailable:
        'واجهة أسعار الصرف غير متاحة',

      rateUnavailable:
        'السعر غير متاح',

      accountDeleted:
        'تم حذف الحساب.',

      transactionDeleted:
        'تم حذف المعاملة.',

      deleteTransaction:
        'هل تريد حذف هذه المعاملة؟',

      signupSessionExpired:
        'انتهت جلسة التسجيل.',

      enterEmailPassword:
        'أدخل البريد الإلكتروني وكلمة المرور.',

      enterValidPassword:
        'أدخل بريدًا إلكترونيًا وكلمة مرور من 6 أحرف على الأقل.',

      verificationSent:
        'تم إرسال رمز التحقق.',

      verificationCodeSent:
        'تم إرسال الرمز مرة أخرى.',

      invalidCode:
        'الرمز غير صحيح.',

      codeSixDigits:
        'يجب أن يتكون الرمز من 6 أرقام.',

      accountCreated:
        'تم إنشاء الحساب بنجاح.',

      verificationError:
        'حدث خطأ أثناء التحقق.'
    },


    ps: {

      dailyAccounting:
        'ورځنی حساب',

      home:
        'کور',

      transactions:
        'معاملات',

      profile:
        'پروفایل',

      settings:
        'تنظیمات',

      logout:
        'وتل',

      loading:
        'لوډ کېږي...',

      checkingAccount:
        'حساب کتل کېږي...',

      signInOrRegister:
        'ننوتل یا ثبت نام',

      loginDescription:
        'خپل کلاوډ حسابونو ته د لاسرسي لپاره ننوتل وکړئ.',

      emailAddress:
        'د ایمیل پته',

      password:
        'پټ نوم',

      emailPlaceholder:
        'example@gmail.com',

      passwordPlaceholder:
        'لږ تر لږه ۶ توري',

      signIn:
        'ننوتل',

      createAccount:
        'نوی حساب جوړول',

      verifyEmail:
        'د ایمیل تایید',

      verifyEmailDescription:
        'خپل ایمیل ته لېږل شوی ۶ عددي کوډ داخل کړئ.',

      verificationCode:
        'د تایید کوډ',

      verificationCodePlaceholder:
        '۶ عددي کوډ داخل کړئ',

      verifyCode:
        'کوډ تاییدول',

      resendCode:
        'کوډ بیا لېږل',

      back:
        'بېرته',

      myAccounts:
        'زما حسابونه',

      noAccounts:
        'تر اوسه حساب نشته',

      noAccountsText:
        'د حسابدارۍ د پیل لپاره یوه معامله ثبت کړئ.',

      credit:
        'طلب',

      debit:
        'پور',

      balance:
        'بیلانس',

      transaction:
        'معامله',

      transactionsCount:
        'معاملې',

      edit:
        'سمول',

      delete:
        'حذف',

      confirmDeletion:
        'د حذف تایید',

      deleteAccount:
        'ایا ډاډه یاست چې دا حساب حذف کړئ؟',

      cancel:
        'لغوه',

      yesDelete:
        'هو، حذف یې کړه',

      location:
        'موقعیت',

      detecting:
        'موقعیت معلومېږي...',

      live:
        'ژوندی',

      ratesUnavailable:
        'د اسعارو API شتون نه لري',

      rateUnavailable:
        'نرخ شتون نه لري',

      accountDeleted:
        'حساب حذف شو.',

      transactionDeleted:
        'معامله حذف شوه.',

      deleteTransaction:
        'ایا دا معامله حذف شي؟',

      signupSessionExpired:
        'د ثبت نام موده پای ته رسېدلې.',

      enterEmailPassword:
        'ایمیل او پټ نوم داخل کړئ.',

      enterValidPassword:
        'ایمیل او لږ تر لږه ۶ توري پټ نوم داخل کړئ.',

      verificationSent:
        'د تایید کوډ ولېږل شو.',

      verificationCodeSent:
        'کوډ بیا ولېږل شو.',

      invalidCode:
        'کوډ ناسم دی.',

      codeSixDigits:
        'کوډ باید ۶ عددي وي.',

      accountCreated:
        'حساب په بریالیتوب جوړ شو.',

      verificationError:
        'د تایید پر مهال تېروتنه وشوه.'
    },


    tr: {

      dailyAccounting:
        'Günlük Muhasebe',

      home:
        'Ana Sayfa',

      transactions:
        'İşlemler',

      profile:
        'Profil',

      settings:
        'Ayarlar',

      logout:
        'Çıkış',

      loading:
        'Yükleniyor...',

      checkingAccount:
        'Hesap kontrol ediliyor...',

      signInOrRegister:
        'Giriş Yap veya Kayıt Ol',

      loginDescription:
        'Bulut hesaplarınıza erişmek için giriş yapın.',

      emailAddress:
        'E-posta Adresi',

      password:
        'Şifre',

      emailPlaceholder:
        'example@gmail.com',

      passwordPlaceholder:
        'En az 6 karakter',

      signIn:
        'Giriş Yap',

      createAccount:
        'Yeni Hesap Oluştur',

      verifyEmail:
        'E-postanızı Doğrulayın',

      verifyEmailDescription:
        'E-postanıza gönderilen 6 haneli kodu girin.',

      verificationCode:
        'Doğrulama Kodu',

      verificationCodePlaceholder:
        '6 haneli kodu girin',

      verifyCode:
        'Kodu Doğrula',

      resendCode:
        'Kodu Tekrar Gönder',

      back:
        'Geri',

      myAccounts:
        'Hesaplarım',

      noAccounts:
        'Henüz hesap yok',

      noAccountsText:
        'Muhasebenize başlamak için bir işlem oluşturun.',

      credit:
        'Alacak',

      debit:
        'Borç',

      balance:
        'Bakiye',

      transaction:
        'İşlem',

      transactionsCount:
        'işlem',

      edit:
        'Düzenle',

      delete:
        'Sil',

      confirmDeletion:
        'Silmeyi Onayla',

      deleteAccount:
        'Bu hesabı silmek istediğinizden emin misiniz?',

      cancel:
        'İptal',

      yesDelete:
        'Evet, Sil',

      location:
        'Konum',

      detecting:
        'Algılanıyor...',

      live:
        'CANLI',

      ratesUnavailable:
        'Kur API kullanılamıyor',

      rateUnavailable:
        'Kur mevcut değil',

      accountDeleted:
        'Hesap silindi.',

      transactionDeleted:
        'İşlem silindi.',

      deleteTransaction:
        'Bu işlem silinsin mi?',

      signupSessionExpired:
        'Kayıt oturumu sona erdi.',

      enterEmailPassword:
        'E-posta ve şifre girin.',

      enterValidPassword:
        'E-posta ve en az 6 karakterli bir şifre girin.',

      verificationSent:
        'Doğrulama kodu gönderildi.',

      verificationCodeSent:
        'Kod tekrar gönderildi.',

      invalidCode:
        'Geçersiz kod.',

      codeSixDigits:
        'Kod 6 haneli olmalıdır.',

      accountCreated:
        'Hesap başarıyla oluşturuldu.',

      verificationError:
        'Doğrulama hatası.'
    }

  };


  /* =======================================================
     STORAGE
  ======================================================= */

  function loadSettings() {

    try {

      const saved =
        localStorage.getItem(STORAGE_KEY);

      if (!saved) {

        return {
          ...DEFAULT_SETTINGS
        };

      }

      const parsed =
        JSON.parse(saved);

      return {
        ...DEFAULT_SETTINGS,
        ...(parsed || {})
      };

    } catch (error) {

      console.error(
        'Translator settings:',
        error
      );

      return {
        ...DEFAULT_SETTINGS
      };

    }

  }


  let settings = loadSettings();


  /* =======================================================
     SAVE SETTINGS
  ======================================================= */

  function saveSettings(newSettings) {

    settings = {
      ...settings,
      ...(newSettings || {})
    };

    try {

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(settings)
      );

    } catch (error) {

      console.error(
        'Translator save:',
        error
      );

    }

    applyGlobalSettings(false);

    return settings;
  }


  /* =======================================================
     TRANSLATE
  ======================================================= */

  function t(key, fallback) {

    const language =
      settings.language || 'en';

    const table =
      TRANSLATIONS[language] ||
      TRANSLATIONS.en;

    if (
      table &&
      Object.prototype.hasOwnProperty.call(
        table,
        key
      )
    ) {

      return table[key];

    }

    if (
      TRANSLATIONS.en &&
      Object.prototype.hasOwnProperty.call(
        TRANSLATIONS.en,
        key
      )
    ) {

      return TRANSLATIONS.en[key];

    }

    return (
      fallback !== undefined
        ? fallback
        : key
    );

  }


  /* =======================================================
     DIRECTION
  ======================================================= */

  function getDirection(language) {

    return (
      LANGUAGES[language]?.dir ||
      'ltr'
    );

  }


  /* =======================================================
     ISO COUNTRY → FLAG
  ======================================================= */

  function isoToFlag(code) {

    if (!code) {
      return '🌐';
    }

    const normalized =
      String(code)
        .trim()
        .toUpperCase();

    if (
      normalized.length !== 2
    ) {

      return '🌐';

    }

    return normalized
      .split('')
      .map(
        char =>
          String.fromCodePoint(
            127397 +
            char.charCodeAt(0)
          )
      )
      .join('');

  }


  /* =======================================================
     THEME
  ======================================================= */

  function hexToRgb(hex) {

    if (!hex) return null;

    let value =
      String(hex)
        .trim()
        .replace('#', '');

    if (value.length === 3) {

      value =
        value
          .split('')
          .map(x => x + x)
          .join('');

    }

    if (
      !/^[0-9a-fA-F]{6}$/.test(value)
    ) {

      return null;

    }

    return {
      r: parseInt(
        value.substring(0, 2),
        16
      ),

      g: parseInt(
        value.substring(2, 4),
        16
      ),

      b: parseInt(
        value.substring(4, 6),
        16
      )
    };

  }


  function rgbToHex(r, g, b) {

    return '#' +
      [r, g, b]
        .map(
          value =>
            Math.max(
              0,
              Math.min(
                255,
                Math.round(value)
              )
            )
            .toString(16)
            .padStart(2, '0')
        )
        .join('');

  }


  function darkenColor(
    color,
    amount = 0.15
  ) {

    const rgb =
      hexToRgb(color);

    if (!rgb) {
      return color;
    }

    return rgbToHex(
      rgb.r * (1 - amount),
      rgb.g * (1 - amount),
      rgb.b * (1 - amount)
    );

  }


  function makeSoftColor(color) {

    const rgb =
      hexToRgb(color);

    if (!rgb) {
      return '#f5f3ff';
    }

    const mix = 0.90;

    return rgbToHex(
      rgb.r +
        (255 - rgb.r) * mix,

      rgb.g +
        (255 - rgb.g) * mix,

      rgb.b +
        (255 - rgb.b) * mix
    );

  }


  function setTheme(color) {

    if (!color) {
      return;
    }

    settings.themeColor =
      color;

    const root =
      document.documentElement;

    root.style.setProperty(
      '--primary',
      color
    );

    root.style.setProperty(
      '--primary-dark',
      darkenColor(
        color,
        0.15
      )
    );

    root.style.setProperty(
      '--primary-soft',
      makeSoftColor(color)
    );

    root.style.setProperty(
      '--theme-color',
      color
    );

    const themeMeta =
      document.querySelector(
        'meta[name="theme-color"]'
      );

    if (themeMeta) {

      themeMeta.setAttribute(
        'content',
        color
      );

    }

  }


  /* =======================================================
     APPLY LANGUAGE TO HTML
  ======================================================= */

  function translatePage() {

    const language =
      settings.language || 'en';

    const direction =
      getDirection(language);

    const root =
      document.documentElement;

    root.lang =
      language;

    root.dir =
      direction;


    /* -----------------------------------------------
       data-i18n
    ------------------------------------------------ */

    document
      .querySelectorAll(
        '[data-i18n]'
      )
      .forEach(element => {

        const key =
          element.getAttribute(
            'data-i18n'
          );

        if (!key) return;

        element.textContent =
          t(key);

      });


    /* -----------------------------------------------
       placeholder
    ------------------------------------------------ */

    document
      .querySelectorAll(
        '[data-i18n-placeholder]'
      )
      .forEach(element => {

        const key =
          element.getAttribute(
            'data-i18n-placeholder'
          );

        element.setAttribute(
          'placeholder',
          t(key)
        );

      });


    /* -----------------------------------------------
       title
    ------------------------------------------------ */

    document
      .querySelectorAll(
        '[data-i18n-title]'
      )
      .forEach(element => {

        const key =
          element.getAttribute(
            'data-i18n-title'
          );

        element.setAttribute(
          'title',
          t(key)
        );

      });


    /* -----------------------------------------------
       aria-label
    ------------------------------------------------ */

    document
      .querySelectorAll(
        '[data-i18n-aria-label]'
      )
      .forEach(element => {

        const key =
          element.getAttribute(
            'data-i18n-aria-label'
          );

        element.setAttribute(
          'aria-label',
          t(key)
        );

      });


    /* -----------------------------------------------
       Document title
    ------------------------------------------------ */

    if (
      document.title ===
      'Daily Accounting'
    ) {

      document.title =
        t('dailyAccounting');

    }

  }


  /* =======================================================
     APPLY GLOBAL SETTINGS
  ======================================================= */

  function applyGlobalSettings(
    save = false
  ) {

    if (save) {

      try {

        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(settings)
        );

      } catch (error) {

        console.error(
          error
        );

      }

    }

    setTheme(
      settings.themeColor
    );

    const root =
      document.documentElement;

    root.lang =
      settings.language || 'en';

    root.dir =
      getDirection(
        settings.language
      );

    translatePage();

    window.dispatchEvent(
      new CustomEvent(
        'dailyAccountingSettingsChanged',
        {
          detail: {
            ...settings
          }
        }
      )
    );

  }


  /* =======================================================
     LANGUAGE
  ======================================================= */

  function setLanguage(language) {

    if (
      !LANGUAGES[language]
    ) {

      language = 'en';

    }

    settings.language =
      language;

    saveSettings(settings);

    return settings.language;

  }


  function getLanguage() {

    return (
      settings.language ||
      'en'
    );

  }


  /* =======================================================
     PROFILE
  ======================================================= */

  function setProfile(profile) {

    if (
      !profile ||
      typeof profile !== 'object'
    ) {

      return settings;

    }

    settings = {
      ...settings,
      ...profile
    };

    if (
      settings.countryCode &&
      !settings.countryFlag
    ) {

      settings.countryFlag =
        isoToFlag(
          settings.countryCode
        );

    }

    try {

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(settings)
      );

    } catch (error) {

      console.error(
        'Profile settings:',
        error
      );

    }

    applyGlobalSettings(false);

    return settings;

  }


  /* =======================================================
     COUNTRY
  ======================================================= */

  function setCountry(
    country
  ) {

    if (
      !country ||
      typeof country !== 'object'
    ) {

      return settings;

    }

    const countryCode =
      String(
        country.countryCode ||
        country.code ||
        settings.countryCode ||
        'AF'
      ).toUpperCase();

    settings.countryCode =
      countryCode;

    settings.countryName =
      country.countryName ||
      country.name ||
      settings.countryName;

    settings.countryFlag =
      country.countryFlag ||
      country.flag ||
      isoToFlag(countryCode);

    if (
      country.currencyCode ||
      country.currency
    ) {

      settings.currencyCode =
        String(
          country.currencyCode ||
          country.currency
        ).toUpperCase();

    }

    if (
      country.currencyName
    ) {

      settings.currencyName =
        country.currencyName;

    }

    if (
      country.currencySymbol
    ) {

      settings.currencySymbol =
        country.currencySymbol;

    }

    if (
      country.state !== undefined
    ) {

      settings.state =
        country.state;

    }

    if (
      country.city !== undefined
    ) {

      settings.city =
        country.city;

    }

    try {

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(settings)
      );

    } catch (error) {

      console.error(
        'Country settings:',
        error
      );

    }

    applyGlobalSettings(false);

    return settings;

  }


  /* =======================================================
     GET SETTINGS
  ======================================================= */

  function getSettings() {

    return {
      ...settings
    };

  }


  /* =======================================================
     CROSS-TAB SETTINGS SYNC
  ======================================================= */

  window.addEventListener(
    'storage',
    function (event) {

      if (
        event.key !== STORAGE_KEY
      ) {

        return;

      }

      try {

        if (!event.newValue) {
          return;
        }

        const newSettings =
          JSON.parse(
            event.newValue
          );

        settings = {
          ...DEFAULT_SETTINGS,
          ...(newSettings || {})
        };

        applyGlobalSettings(false);

      } catch (error) {

        console.error(
          'Translator storage sync:',
          error
        );

      }

    }
  );


  /* =======================================================
     MUTATION OBSERVER
  ======================================================= */

  let observer = null;

  function startObserver() {

    if (
      observer ||
      !document.body
    ) {

      return;

    }

    observer =
      new MutationObserver(
        function () {

          translatePage();

        }
      );

    observer.observe(
      document.body,
      {
        childList: true,
        subtree: true
      }
    );

  }


  /* =======================================================
     INITIALIZATION
  ======================================================= */

  function initialize() {

    applyGlobalSettings(false);

    startObserver();

  }


  /* =======================================================
     PUBLIC API
  ======================================================= */

  window.DailyTranslator = {

    t,

    translatePage,

    setLanguage,

    getLanguage,

    setTheme,

    setProfile,

    setCountry,

    getSettings,

    saveSettings,

    applyGlobalSettings,

    isoToFlag,

    LANGUAGES,

    TRANSLATIONS,

    DEFAULT_SETTINGS

  };


  /* =======================================================
     START
  ======================================================= */

  if (
    document.readyState ===
    'loading'
  ) {

    document.addEventListener(
      'DOMContentLoaded',
      initialize,
      {
        once: true
      }
    );

  } else {

    initialize();

  }

})();
