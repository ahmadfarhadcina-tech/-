(function () {
  'use strict';

  const STORAGE_KEY = 'dailyAccountingSettings';

  const LANGUAGES = {
    en: {
      name: 'English',
      dir: 'ltr'
    },
    fa: {
      name: 'فارسی',
      dir: 'rtl'
    },
    ar: {
      name: 'العربية',
      dir: 'rtl'
    },
    ps: {
      name: 'پښتو',
      dir: 'rtl'
    },
    tr: {
      name: 'Türkçe',
      dir: 'ltr'
    }
  };

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

  const TRANSLATIONS = {

    en: {
      appName: 'Daily Accounting',
      checkingAccount: 'Checking account...',
      home: 'Home',
      transactions: 'Transactions',
      profile: 'Profile',
      settings: 'Settings',
      accounts: 'Accounts',
      account: 'Account',
      balance: 'Balance',
      totalBalance: 'Total Balance',
      income: 'Income',
      expense: 'Expense',
      deposit: 'Deposit',
      withdrawal: 'Withdrawal',
      transfer: 'Transfer',
      send: 'Send',
      receive: 'Receive',
      client: 'Client',
      clients: 'Clients',
      transaction: 'Transaction',
      transactionsList: 'Transactions',
      amount: 'Amount',
      currency: 'Currency',
      country: 'Country',
      province: 'Province',
      state: 'State',
      city: 'City',
      name: 'Name',
      phone: 'Phone',
      email: 'Email',
      password: 'Password',
      login: 'Login',
      logout: 'Logout',
      signIn: 'Sign In',
      signUp: 'Sign Up',
      register: 'Register',
      verify: 'Verify',
      verificationCode: 'Verification Code',
      resendCode: 'Resend Code',
      back: 'Back',
      save: 'Save',
      cancel: 'Cancel',
      delete: 'Delete',
      edit: 'Edit',
      close: 'Close',
      confirm: 'Confirm',
      language: 'Language',
      theme: 'Theme',
      themeColor: 'Theme Color',
      officialCurrency: 'Official Currency',
      location: 'Location',
      search: 'Search',
      date: 'Date',
      time: 'Time',
      description: 'Description',
      notes: 'Notes',
      originalAmount: 'Original Amount',
      equivalent: 'Equivalent',
      afnEquivalent: 'AFN Equivalent',
      rate: 'Rate',
      rateUnavailable: 'Rate unavailable',
      liveRates: 'Live Rates',
      refresh: 'Refresh',
      loading: 'Loading...',
      noData: 'No data',
      noClients: 'No clients yet',
      noTransactions: 'No transactions yet',
      addClient: 'Add Client',
      addTransaction: 'Add Transaction',
      welcome: 'Welcome',
      profileUpdated: 'Profile updated',
      settingsSaved: 'Settings saved',
      somethingWentWrong: 'Something went wrong',
      networkError: 'Network error',
      sessionExpired: 'Session expired',
      deleteConfirmation: 'Are you sure you want to delete this?',
      yes: 'Yes',
      no: 'No',
      dark: 'Dark',
      light: 'Light',
      automatic: 'Automatic',
      Afghanistan: 'Afghanistan',
      currencySymbol: 'Currency Symbol',
      selectedCountry: 'Selected Country',
      selectedCurrency: 'Selected Currency'
    },

    fa: {
      appName: 'حسابداری روزانه',
      checkingAccount: 'در حال بررسی حساب...',
      home: 'خانه',
      transactions: 'تراکنش‌ها',
      profile: 'پروفایل',
      settings: 'تنظیمات',
      accounts: 'حساب‌ها',
      account: 'حساب',
      balance: 'موجودی',
      totalBalance: 'موجودی کل',
      income: 'درآمد',
      expense: 'مصرف',
      deposit: 'واریز',
      withdrawal: 'برداشت',
      transfer: 'انتقال',
      send: 'ارسال',
      receive: 'دریافت',
      client: 'مشتری',
      clients: 'مشتریان',
      transaction: 'تراکنش',
      transactionsList: 'تراکنش‌ها',
      amount: 'مقدار',
      currency: 'ارز',
      country: 'کشور',
      province: 'ولایت',
      state: 'استان',
      city: 'شهر',
      name: 'نام',
      phone: 'شماره تلفن',
      email: 'ایمیل',
      password: 'رمز عبور',
      login: 'ورود',
      logout: 'خروج',
      signIn: 'ورود',
      signUp: 'ثبت‌نام',
      register: 'ثبت‌نام',
      verify: 'تأیید',
      verificationCode: 'کد تأیید',
      resendCode: 'ارسال دوباره کد',
      back: 'برگشت',
      save: 'ذخیره',
      cancel: 'لغو',
      delete: 'حذف',
      edit: 'ویرایش',
      close: 'بستن',
      confirm: 'تأیید',
      language: 'زبان',
      theme: 'تم',
      themeColor: 'رنگ تم',
      officialCurrency: 'ارز رسمی',
      location: 'موقعیت',
      search: 'جستجو',
      date: 'تاریخ',
      time: 'زمان',
      description: 'توضیحات',
      notes: 'یادداشت',
      originalAmount: 'مبلغ اصلی',
      equivalent: 'معادل',
      afnEquivalent: 'معادل افغانی',
      rate: 'نرخ',
      rateUnavailable: 'نرخ در دسترس نیست',
      liveRates: 'نرخ‌های زنده',
      refresh: 'تازه‌سازی',
      loading: 'در حال بارگذاری...',
      noData: 'اطلاعاتی وجود ندارد',
      noClients: 'هنوز مشتری‌ای وجود ندارد',
      noTransactions: 'هنوز تراکنشی وجود ندارد',
      addClient: 'افزودن مشتری',
      addTransaction: 'افزودن تراکنش',
      welcome: 'خوش آمدید',
      profileUpdated: 'پروفایل به‌روزرسانی شد',
      settingsSaved: 'تنظیمات ذخیره شد',
      somethingWentWrong: 'مشکلی پیش آمد',
      networkError: 'خطای شبکه',
      sessionExpired: 'نشست شما منقضی شده است',
      deleteConfirmation: 'آیا مطمئن هستید که می‌خواهید این مورد را حذف کنید؟',
      yes: 'بله',
      no: 'خیر',
      dark: 'تیره',
      light: 'روشن',
      automatic: 'خودکار',
      Afghanistan: 'افغانستان',
      currencySymbol: 'نماد ارز',
      selectedCountry: 'کشور انتخاب‌شده',
      selectedCurrency: 'ارز انتخاب‌شده'
    },

    ar: {
      appName: 'المحاسبة اليومية',
      checkingAccount: 'جارٍ التحقق من الحساب...',
      home: 'الرئيسية',
      transactions: 'المعاملات',
      profile: 'الملف الشخصي',
      settings: 'الإعدادات',
      accounts: 'الحسابات',
      account: 'الحساب',
      balance: 'الرصيد',
      totalBalance: 'إجمالي الرصيد',
      income: 'الدخل',
      expense: 'المصروف',
      deposit: 'إيداع',
      withdrawal: 'سحب',
      transfer: 'تحويل',
      send: 'إرسال',
      receive: 'استلام',
      client: 'العميل',
      clients: 'العملاء',
      transaction: 'المعاملة',
      transactionsList: 'المعاملات',
      amount: 'المبلغ',
      currency: 'العملة',
      country: 'الدولة',
      province: 'المقاطعة',
      state: 'الولاية',
      city: 'المدينة',
      name: 'الاسم',
      phone: 'الهاتف',
      email: 'البريد الإلكتروني',
      password: 'كلمة المرور',
      login: 'تسجيل الدخول',
      logout: 'خروج',
      signIn: 'تسجيل الدخول',
      signUp: 'إنشاء حساب',
      register: 'تسجيل',
      verify: 'تحقق',
      verificationCode: 'رمز التحقق',
      resendCode: 'إعادة إرسال الرمز',
      back: 'رجوع',
      save: 'حفظ',
      cancel: 'إلغاء',
      delete: 'حذف',
      edit: 'تعديل',
      close: 'إغلاق',
      confirm: 'تأكيد',
      language: 'اللغة',
      theme: 'المظهر',
      themeColor: 'لون المظهر',
      officialCurrency: 'العملة الرسمية',
      location: 'الموقع',
      search: 'بحث',
      date: 'التاريخ',
      time: 'الوقت',
      description: 'الوصف',
      notes: 'ملاحظات',
      originalAmount: 'المبلغ الأصلي',
      equivalent: 'ما يعادل',
      afnEquivalent: 'ما يعادل بالأفغاني',
      rate: 'السعر',
      rateUnavailable: 'السعر غير متاح',
      liveRates: 'الأسعار المباشرة',
      refresh: 'تحديث',
      loading: 'جارٍ التحميل...',
      noData: 'لا توجد بيانات',
      noClients: 'لا يوجد عملاء بعد',
      noTransactions: 'لا توجد معاملات بعد',
      addClient: 'إضافة عميل',
      addTransaction: 'إضافة معاملة',
      welcome: 'مرحباً',
      profileUpdated: 'تم تحديث الملف الشخصي',
      settingsSaved: 'تم حفظ الإعدادات',
      somethingWentWrong: 'حدث خطأ ما',
      networkError: 'خطأ في الشبكة',
      sessionExpired: 'انتهت الجلسة',
      deleteConfirmation: 'هل أنت متأكد أنك تريد حذف هذا؟',
      yes: 'نعم',
      no: 'لا',
      dark: 'داكن',
      light: 'فاتح',
      automatic: 'تلقائي',
      Afghanistan: 'أفغانستان',
      currencySymbol: 'رمز العملة',
      selectedCountry: 'الدولة المحددة',
      selectedCurrency: 'العملة المحددة'
    },

    ps: {
      appName: 'ورځنی حسابداري',
      checkingAccount: 'حساب کتل کېږي...',
      home: 'کور',
      transactions: 'معاملې',
      profile: 'پروفایل',
      settings: 'تنظیمات',
      accounts: 'حسابونه',
      account: 'حساب',
      balance: 'بیلانس',
      totalBalance: 'ټول بیلانس',
      income: 'عاید',
      expense: 'مصرف',
      deposit: 'جمع',
      withdrawal: 'ایستل',
      transfer: 'لېږد',
      send: 'لېږل',
      receive: 'ترلاسه کول',
      client: 'پېرودونکی',
      clients: 'پېرودونکي',
      transaction: 'معامله',
      transactionsList: 'معاملې',
      amount: 'مقدار',
      currency: 'اسعار',
      country: 'هېواد',
      province: 'ولایت',
      state: 'ایالت',
      city: 'ښار',
      name: 'نوم',
      phone: 'د تلیفون شمېره',
      email: 'ایمیل',
      password: 'پټنوم',
      login: 'ننوتل',
      logout: 'وتل',
      signIn: 'ننوتل',
      signUp: 'ثبت نام',
      register: 'ثبت نام',
      verify: 'تایید',
      verificationCode: 'د تایید کوډ',
      resendCode: 'کوډ بیا لېږل',
      back: 'بېرته',
      save: 'ساتل',
      cancel: 'لغوه',
      delete: 'ړنګول',
      edit: 'سمول',
      close: 'بندول',
      confirm: 'تایید',
      language: 'ژبه',
      theme: 'بڼه',
      themeColor: 'د بڼې رنګ',
      officialCurrency: 'رسمي اسعار',
      location: 'ځای',
      search: 'لټون',
      date: 'نېټه',
      time: 'وخت',
      description: 'تشریح',
      notes: 'یادښتونه',
      originalAmount: 'اصلي مقدار',
      equivalent: 'معادل',
      afnEquivalent: 'د افغانیو معادل',
      rate: 'نرخ',
      rateUnavailable: 'نرخ موجود نه دی',
      liveRates: 'ژوندي نرخونه',
      refresh: 'تازه کول',
      loading: 'لوډ کېږي...',
      noData: 'معلومات نشته',
      noClients: 'تر اوسه پېرودونکی نشته',
      noTransactions: 'تر اوسه معامله نشته',
      addClient: 'پېرودونکی اضافه کړئ',
      addTransaction: 'معامله اضافه کړئ',
      welcome: 'ښه راغلاست',
      profileUpdated: 'پروفایل تازه شو',
      settingsSaved: 'تنظیمات خوندي شول',
      somethingWentWrong: 'یوه ستونزه رامنځته شوه',
      networkError: 'د شبکې ستونزه',
      sessionExpired: 'ستاسې ناسته پای ته رسېدلې',
      deleteConfirmation: 'ایا ډاډه یاست چې دا حذف کول غواړئ؟',
      yes: 'هو',
      no: 'نه',
      dark: 'تیاره',
      light: 'روښانه',
      automatic: 'اتومات',
      Afghanistan: 'افغانستان',
      currencySymbol: 'د اسعارو نښه',
      selectedCountry: 'ټاکل شوی هېواد',
      selectedCurrency: 'ټاکل شوي اسعار'
    },

    tr: {
      appName: 'Günlük Muhasebe',
      checkingAccount: 'Hesap kontrol ediliyor...',
      home: 'Ana Sayfa',
      transactions: 'İşlemler',
      profile: 'Profil',
      settings: 'Ayarlar',
      accounts: 'Hesaplar',
      account: 'Hesap',
      balance: 'Bakiye',
      totalBalance: 'Toplam Bakiye',
      income: 'Gelir',
      expense: 'Gider',
      deposit: 'Yatırma',
      withdrawal: 'Çekme',
      transfer: 'Transfer',
      send: 'Gönder',
      receive: 'Al',
      client: 'Müşteri',
      clients: 'Müşteriler',
      transaction: 'İşlem',
      transactionsList: 'İşlemler',
      amount: 'Tutar',
      currency: 'Para Birimi',
      country: 'Ülke',
      province: 'İl',
      state: 'Eyalet',
      city: 'Şehir',
      name: 'Ad',
      phone: 'Telefon',
      email: 'E-posta',
      password: 'Şifre',
      login: 'Giriş',
      logout: 'Çıkış',
      signIn: 'Giriş Yap',
      signUp: 'Kayıt Ol',
      register: 'Kayıt',
      verify: 'Doğrula',
      verificationCode: 'Doğrulama Kodu',
      resendCode: 'Kodu Tekrar Gönder',
      back: 'Geri',
      save: 'Kaydet',
      cancel: 'İptal',
      delete: 'Sil',
      edit: 'Düzenle',
      close: 'Kapat',
      confirm: 'Onayla',
      language: 'Dil',
      theme: 'Tema',
      themeColor: 'Tema Rengi',
      officialCurrency: 'Resmi Para Birimi',
      location: 'Konum',
      search: 'Ara',
      date: 'Tarih',
      time: 'Saat',
      description: 'Açıklama',
      notes: 'Notlar',
      originalAmount: 'Orijinal Tutar',
      equivalent: 'Karşılığı',
      afnEquivalent: 'AFN Karşılığı',
      rate: 'Kur',
      rateUnavailable: 'Kur kullanılamıyor',
      liveRates: 'Canlı Kurlar',
      refresh: 'Yenile',
      loading: 'Yükleniyor...',
      noData: 'Veri yok',
      noClients: 'Henüz müşteri yok',
      noTransactions: 'Henüz işlem yok',
      addClient: 'Müşteri Ekle',
      addTransaction: 'İşlem Ekle',
      welcome: 'Hoş geldiniz',
      profileUpdated: 'Profil güncellendi',
      settingsSaved: 'Ayarlar kaydedildi',
      somethingWentWrong: 'Bir şeyler ters gitti',
      networkError: 'Ağ hatası',
      sessionExpired: 'Oturumunuz sona erdi',
      deleteConfirmation: 'Bunu silmek istediğinizden emin misiniz?',
      yes: 'Evet',
      no: 'Hayır',
      dark: 'Koyu',
      light: 'Açık',
      automatic: 'Otomatik',
      Afghanistan: 'Afganistan',
      currencySymbol: 'Para Birimi Sembolü',
      selectedCountry: 'Seçilen Ülke',
      selectedCurrency: 'Seçilen Para Birimi'
    }

  };

  function loadSettings() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);

      if (!raw) {
        return { ...DEFAULT_SETTINGS };
      }

      const saved = JSON.parse(raw);

      if (!saved || typeof saved !== 'object') {
        return { ...DEFAULT_SETTINGS };
      }

      return {
        ...DEFAULT_SETTINGS,
        ...saved
      };

    } catch (error) {
      console.error('DailyTranslator loadSettings:', error);
      return { ...DEFAULT_SETTINGS };
    }
  }

  let settings = loadSettings();

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
      console.error('DailyTranslator saveSettings:', error);
    }

    applyGlobalSettings();

    return settings;
  }

  function getSettings() {
    return {
      ...settings
    };
  }

  /*
   * =========================================================
   * GLOBAL CURRENCY
   * =========================================================
   *
   * ارز انتخاب‌شده در تنظیمات، ارز پایه نمایش برنامه است.
   *
   * مثال:
   * Afghanistan -> AFN
   * Iran       -> IRR
   * Turkey     -> TRY
   * USA        -> USD
   *
   * نرخ واقعی توسط sarafi-api.js محاسبه می‌شود.
   */

  function getCurrency() {

    return {
      code:
        settings.currencyCode ||
        DEFAULT_SETTINGS.currencyCode,

      name:
        settings.currencyName ||
        DEFAULT_SETTINGS.currencyName,

      symbol:
        settings.currencySymbol ||
        DEFAULT_SETTINGS.currencySymbol
    };
  }

  function getBaseCurrency() {
    return getCurrency();
  }

  function getCurrencyCode() {
    return getCurrency().code;
  }

  function getCurrencyName() {
    return getCurrency().name;
  }

  function getCurrencySymbol() {
    return getCurrency().symbol;
  }

  function formatCurrency(amount, currencyCode = null) {

    const currency =
      currencyCode ||
      getCurrencyCode();

    const numericAmount =
      Number(amount);

    if (!Number.isFinite(numericAmount)) {
      return '—';
    }

    try {

      return new Intl.NumberFormat(
        getLanguage(),
        {
          style: 'currency',
          currency,
          maximumFractionDigits: 2
        }
      ).format(numericAmount);

    } catch (error) {

      const symbol =
        currencyCode === getCurrencyCode()
          ? getCurrencySymbol()
          : currency;

      return `${numericAmount.toLocaleString()} ${symbol}`;
    }
  }

  function setBaseCurrency(currency = {}) {

    const oldCurrencyCode =
      settings.currencyCode;

    settings = {
      ...settings,

      ...(currency.code !== undefined
        ? {
            currencyCode:
              currency.code
          }
        : {}),

      ...(currency.currencyCode !== undefined
        ? {
            currencyCode:
              currency.currencyCode
          }
        : {}),

      ...(currency.name !== undefined
        ? {
            currencyName:
              currency.name
          }
        : {}),

      ...(currency.currencyName !== undefined
        ? {
            currencyName:
              currency.currencyName
          }
        : {}),

      ...(currency.symbol !== undefined
        ? {
            currencySymbol:
              currency.symbol
          }
        : {}),

      ...(currency.currencySymbol !== undefined
        ? {
            currencySymbol:
              currency.currencySymbol
          }
        : {})
    };

    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(settings)
      );
    } catch (error) {
      console.error(
        'DailyTranslator setBaseCurrency:',
        error
      );
    }

    applyGlobalSettings();

    if (
      oldCurrencyCode !==
      settings.currencyCode
    ) {

      window.dispatchEvent(
        new CustomEvent(
          'dailyAccountingCurrencyChanged',
          {
            detail: {
              previousCurrencyCode:
                oldCurrencyCode || '',

              currency:
                getCurrency(),

              settings: {
                ...settings
              }
            }
          }
        )
      );
    }

    return getCurrency();
  }

  function getLanguage() {
    return settings.language || 'en';
  }

  function t(key) {

    const language = getLanguage();

    if (
      TRANSLATIONS[language] &&
      TRANSLATIONS[language][key] !== undefined
    ) {
      return TRANSLATIONS[language][key];
    }

    if (
      TRANSLATIONS.en &&
      TRANSLATIONS.en[key] !== undefined
    ) {
      return TRANSLATIONS.en[key];
    }

    return key;
  }

  function getDirection(language) {

    const lang =
      language ||
      getLanguage();

    return LANGUAGES[lang]?.dir || 'ltr';
  }

  function isoToFlag(code) {

    if (!code || typeof code !== 'string') {
      return '';
    }

    const upper =
      code.trim().toUpperCase();

    if (!/^[A-Z]{2}$/.test(upper)) {
      return '';
    }

    return String.fromCodePoint(
      ...upper.split('').map(
        char => 127397 + char.charCodeAt(0)
      )
    );
  }

  function hexToRgb(hex) {

    if (!hex) return null;

    let value =
      String(hex)
        .replace('#', '')
        .trim();

    if (value.length === 3) {
      value =
        value
          .split('')
          .map(x => x + x)
          .join('');
    }

    if (!/^[0-9a-fA-F]{6}$/.test(value)) {
      return null;
    }

    return {
      r: parseInt(value.slice(0, 2), 16),
      g: parseInt(value.slice(2, 4), 16),
      b: parseInt(value.slice(4, 6), 16)
    };
  }

  function rgbToHex(r, g, b) {

    return '#' +
      [r, g, b]
        .map(value =>
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

  function darkenColor(hex, amount = 0.15) {

    const rgb = hexToRgb(hex);

    if (!rgb) {
      return hex;
    }

    return rgbToHex(
      rgb.r * (1 - amount),
      rgb.g * (1 - amount),
      rgb.b * (1 - amount)
    );
  }

  function makeSoftColor(hex) {

    const rgb = hexToRgb(hex);

    if (!rgb) {
      return 'rgba(124,58,237,.10)';
    }

    return `rgba(${rgb.r},${rgb.g},${rgb.b},.10)`;
  }

  function setTheme(color) {

    if (!color) {
      color = DEFAULT_SETTINGS.themeColor;
    }

    settings.themeColor = color;

    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(settings)
      );
    } catch (error) {
      console.error(
        'DailyTranslator setTheme:',
        error
      );
    }

    applyThemeToDocument(color);

    return color;
  }

  function applyThemeToDocument(color) {

    if (!color) return;

    const root =
      document.documentElement;

    root.style.setProperty(
      '--primary',
      color
    );

    root.style.setProperty(
      '--primary-dark',
      darkenColor(color, 0.18)
    );

    root.style.setProperty(
      '--primary-soft',
      makeSoftColor(color)
    );

    root.style.setProperty(
      '--theme-color',
      color
    );

    const meta =
      document.querySelector(
        'meta[name="theme-color"]'
      );

    if (meta) {
      meta.setAttribute(
        'content',
        color
      );
    }
  }

  function translatePage(root = document) {

    const language =
      getLanguage();

    const direction =
      getDirection(language);

    document.documentElement.lang =
      language;

    document.documentElement.dir =
      direction;

    if (root && root.querySelectorAll) {

      root
        .querySelectorAll('[data-i18n]')
        .forEach(element => {

          const key =
            element.getAttribute(
              'data-i18n'
            );

          if (!key) return;

          const value =
            t(key);

          if (
            element.hasAttribute(
              'data-i18n-html'
            )
          ) {
            element.innerHTML = value;
          } else {
            element.textContent = value;
          }
        });

      root
        .querySelectorAll('[data-i18n-placeholder]')
        .forEach(element => {

          const key =
            element.getAttribute(
              'data-i18n-placeholder'
            );

          if (!key) return;

          element.setAttribute(
            'placeholder',
            t(key)
          );
        });

      root
        .querySelectorAll('[data-i18n-title]')
        .forEach(element => {

          const key =
            element.getAttribute(
              'data-i18n-title'
            );

          if (!key) return;

          element.setAttribute(
            'title',
            t(key)
          );
        });

      root
        .querySelectorAll('[data-i18n-aria-label]')
        .forEach(element => {

          const key =
            element.getAttribute(
              'data-i18n-aria-label'
            );

          if (!key) return;

          element.setAttribute(
            'aria-label',
            t(key)
          );
        });
    }

    return language;
  }

  function applyGlobalSettings() {

    settings = loadSettings();

    const language =
      settings.language &&
      LANGUAGES[settings.language]
        ? settings.language
        : DEFAULT_SETTINGS.language;

    settings.language = language;

    document.documentElement.lang =
      language;

    document.documentElement.dir =
      getDirection(language);

    applyThemeToDocument(
      settings.themeColor
    );

    translatePage();

    /*
     * کشور
     */

    document
      .querySelectorAll('[data-setting="country"]')
      .forEach(element => {
        element.textContent =
          settings.countryName || '';
      });

    /*
     * پرچم کشور
     */

    document
      .querySelectorAll('[data-setting="country-flag"]')
      .forEach(element => {
        element.textContent =
          settings.countryFlag ||
          isoToFlag(settings.countryCode) ||
          '';
      });

    /*
     * ارز انتخاب‌شده
     */

    document
      .querySelectorAll('[data-setting="currency"]')
      .forEach(element => {
        element.textContent =
          settings.currencyCode || '';
      });

    document
      .querySelectorAll('[data-setting="currency-code"]')
      .forEach(element => {
        element.textContent =
          settings.currencyCode || '';
      });

    document
      .querySelectorAll('[data-setting="currency-name"]')
      .forEach(element => {
        element.textContent =
          settings.currencyName || '';
      });

    document
      .querySelectorAll('[data-setting="currency-symbol"]')
      .forEach(element => {
        element.textContent =
          settings.currencySymbol || '';
      });

    /*
     * ارز پایه
     */

    document
      .querySelectorAll('[data-setting="base-currency"]')
      .forEach(element => {
        element.textContent =
          settings.currencyCode || '';
      });

    document
      .querySelectorAll('[data-setting="base-currency-name"]')
      .forEach(element => {
        element.textContent =
          settings.currencyName || '';
      });

    document
      .querySelectorAll('[data-setting="base-currency-symbol"]')
      .forEach(element => {
        element.textContent =
          settings.currencySymbol || '';
      });

    /*
     * نام
     */

    document
      .querySelectorAll('[data-setting="name"]')
      .forEach(element => {
        element.textContent =
          settings.name || '';
      });

    /*
     * تلفن
     */

    document
      .querySelectorAll('[data-setting="phone"]')
      .forEach(element => {
        element.textContent =
          settings.phone || '';
      });

    /*
     * آواتار
     */

    document
      .querySelectorAll('[data-setting="avatar"]')
      .forEach(element => {

        if (
          settings.avatar
        ) {

          if (
            element.tagName === 'IMG'
          ) {
            element.src =
              settings.avatar;
          } else {
            element.style.backgroundImage =
              `url("${settings.avatar}")`;
          }

        }
      });

    return settings;
  }

  function setLanguage(language) {

    if (
      !language ||
      !LANGUAGES[language]
    ) {
      return getLanguage();
    }

    settings.language =
      language;

    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(settings)
      );
    } catch (error) {
      console.error(
        'DailyTranslator setLanguage:',
        error
      );
    }

    document.documentElement.lang =
      language;

    document.documentElement.dir =
      getDirection(language);

    translatePage();

    window.dispatchEvent(
      new CustomEvent(
        'dailyAccountingLanguageChanged',
        {
          detail: {
            language,
            settings: {
              ...settings
            }
          }
        }
      )
    );

    return language;
  }

  function setProfile(profile = {}) {

    settings = {
      ...settings,

      ...(profile.name !== undefined
        ? { name: profile.name }
        : {}),

      ...(profile.phone !== undefined
        ? { phone: profile.phone }
        : {}),

      ...(profile.avatar !== undefined
        ? { avatar: profile.avatar }
        : {})
    };

    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(settings)
      );
    } catch (error) {
      console.error(
        'DailyTranslator setProfile:',
        error
      );
    }

    applyGlobalSettings();

    window.dispatchEvent(
      new CustomEvent(
        'dailyAccountingProfileChanged',
        {
          detail: {
            profile,
            settings: {
              ...settings
            }
          }
        }
      )
    );

    return settings;
  }

  function setCountry(country = {}) {

    const oldCurrencyCode =
      settings.currencyCode;

    const oldCountryCode =
      settings.countryCode;

    settings = {
      ...settings,

      ...(country.code !== undefined
        ? {
            countryCode:
              country.code
          }
        : {}),

      ...(country.countryCode !== undefined
        ? {
            countryCode:
              country.countryCode
          }
        : {}),

      ...(country.name !== undefined
        ? {
            countryName:
              country.name
          }
        : {}),

      ...(country.countryName !== undefined
        ? {
            countryName:
              country.countryName
          }
        : {}),

      ...(country.flag !== undefined
        ? {
            countryFlag:
              country.flag
          }
        : {}),

      ...(country.currencyCode !== undefined
        ? {
            currencyCode:
              country.currencyCode
          }
        : {}),

      ...(country.currencyName !== undefined
        ? {
            currencyName:
              country.currencyName
          }
        : {}),

      ...(country.currencySymbol !== undefined
        ? {
            currencySymbol:
              country.currencySymbol
          }
        : {}),

      ...(country.state !== undefined
        ? {
            state:
              country.state
          }
        : {}),

      ...(country.city !== undefined
        ? {
            city:
              country.city
          }
        : {})
    };

    if (
      !settings.countryFlag &&
      settings.countryCode
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
        'DailyTranslator setCountry:',
        error
      );
    }

    applyGlobalSettings();

    /*
     * رویداد تغییر کشور
     */

    window.dispatchEvent(
      new CustomEvent(
        'dailyAccountingCountryChanged',
        {
          detail: {
            previousCountryCode:
              oldCountryCode || '',

            country,

            settings: {
              ...settings
            }
          }
        }
      )
    );

    /*
     * اگر ارز کشور تغییر کرده باشد،
     * تمام صفحات می‌توانند نرخ‌ها را
     * دوباره دریافت کنند.
     */

    if (
      oldCurrencyCode !==
      settings.currencyCode
    ) {

      window.dispatchEvent(
        new CustomEvent(
          'dailyAccountingCurrencyChanged',
          {
            detail: {
              previousCurrencyCode:
                oldCurrencyCode || '',

              currency:
                getCurrency(),

              settings: {
                ...settings
              }
            }
          }
        )
      );
    }

    /*
     * رویداد عمومی تنظیمات
     */

    window.dispatchEvent(
      new CustomEvent(
        'dailyAccountingSettingsChanged',
        {
          detail: {
            reason: 'country-changed',

            country: {
              code:
                settings.countryCode,

              name:
                settings.countryName,

              flag:
                settings.countryFlag
            },

            currency:
              getCurrency(),

            settings: {
              ...settings
            }
          }
        }
      )
    );

    return settings;
  }

  /*
   * =========================================================
   * Storage synchronization
   * =========================================================
   *
   * اگر تنظیمات در یک صفحه تغییر کند،
   * صفحات دیگر نیز تنظیمات جدید را می‌گیرند.
   */

  window.addEventListener(
    'storage',
    function (event) {

      if (
        event.key !== STORAGE_KEY
      ) {
        return;
      }

      const oldCurrency =
        settings.currencyCode;

      settings =
        loadSettings();

      applyGlobalSettings();

      if (
        oldCurrency !==
        settings.currencyCode
      ) {

        window.dispatchEvent(
          new CustomEvent(
            'dailyAccountingCurrencyChanged',
            {
              detail: {
                previousCurrencyCode:
                  oldCurrency || '',

                currency:
                  getCurrency(),

                settings: {
                  ...settings
                }
              }
            }
          )
        );
      }

      window.dispatchEvent(
        new CustomEvent(
          'dailyAccountingSettingsChanged',
          {
            detail: {
              reason: 'storage-sync',

              currency:
                getCurrency(),

              settings: {
                ...settings
              }
            }
          }
        )
      );
    }
  );

  /*
   * =========================================================
   * Custom event synchronization
   * =========================================================
   */

  window.addEventListener(
    'dailyAccountingSettingsChanged',
    function () {

      settings =
        loadSettings();

      applyGlobalSettings();
    }
  );

  /*
   * =========================================================
   * Mutation observer
   * =========================================================
   */

  let observerRunning = false;

  if (
    typeof MutationObserver !== 'undefined'
  ) {

    const observer =
      new MutationObserver(
        function (mutations) {

          if (observerRunning) {
            return;
          }

          let hasNewNodes = false;

          for (
            const mutation of mutations
          ) {

            if (
              mutation.type !==
              'childList'
            ) {
              continue;
            }

            if (
              mutation.addedNodes &&
              mutation.addedNodes.length
            ) {
              hasNewNodes = true;
              break;
            }
          }

          if (!hasNewNodes) {
            return;
          }

          observerRunning = true;

          try {
            translatePage();
          } finally {
            setTimeout(
              function () {
                observerRunning = false;
              },
              0
            );
          }
        }
      );

    if (document.body) {

      observer.observe(
        document.body,
        {
          childList: true,
          subtree: true
        }
      );

    } else {

      document.addEventListener(
        'DOMContentLoaded',
        function () {

          if (!document.body) {
            return;
          }

          observer.observe(
            document.body,
            {
              childList: true,
              subtree: true
            }
          );

        },
        {
          once: true
        }
      );
    }
  }

  /*
   * =========================================================
   * Initial application
   * =========================================================
   */

  function initializeTranslator() {

    settings =
      loadSettings();

    applyGlobalSettings();
  }

  if (
    document.readyState ===
    'loading'
  ) {

    document.addEventListener(
      'DOMContentLoaded',
      initializeTranslator,
      {
        once: true
      }
    );

  } else {

    initializeTranslator();

  }

  /*
   * =========================================================
   * Public API
   * =========================================================
   */

  window.DailyTranslator = {

    t,

    translatePage,

    setLanguage,

    getLanguage,

    setTheme,

    setProfile,

    setCountry,

    setBaseCurrency,

    getSettings,

    getCurrency,

    getBaseCurrency,

    getCurrencyCode,

    getCurrencyName,

    getCurrencySymbol,

    formatCurrency,

    saveSettings,

    applyGlobalSettings,

    isoToFlag,

    LANGUAGES,

    TRANSLATIONS,

    DEFAULT_SETTINGS,

    getDirection,

    hexToRgb,

    rgbToHex,

    darkenColor,

    makeSoftColor
  };

})();
