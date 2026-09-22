/* =========================================================
   DAILY ACCOUNTING - GLOBAL TRANSLATOR & SETTINGS
   مشترک بین تمام صفحات
========================================================= */

(function(){

'use strict';

const STORAGE_KEY='dailyAccountingSettings';

const LANGUAGES={
 en:{name:'English',flag:'🇬🇧',dir:'ltr'},
 fa:{name:'فارسی',flag:'🇦🇫',dir:'rtl'},
 ar:{name:'العربية',flag:'🇸🇦',dir:'rtl'},
 ps:{name:'پښتو',flag:'🇦🇫',dir:'rtl'},
 tr:{name:'Türkçe',flag:'🇹🇷',dir:'ltr'}
};

const TRANSLATIONS={

en:{
 home:'Home',
 transactions:'Transactions',
 profile:'Profile',
 logout:'Logout',
 loading:'Loading...',
 myAccounts:'My Accounts',
 noAccounts:'No accounts yet',
 noAccountsText:'Create a transaction to start your accounting.',
 credit:'Credit',
 debit:'Debit',
 transaction:'Transaction',
 transactionsCount:'transactions',
 edit:'Edit',
 delete:'Delete',
 confirmDelete:'Confirm Deletion',
 deleteAccount:'Are you sure you want to delete this account?',
 cancel:'Cancel',
 yesDelete:'Yes, Delete',
 location:'Location',
 detecting:'Detecting...',
 online:'Online',
 signIn:'Sign In',
 register:'Create New Account',
 email:'Email Address',
 password:'Password',
 verifyEmail:'Verify Your Email',
 verificationCode:'Verification Code',
 verifyCode:'Verify Code',
 resend:'Resend Code',
 back:'Back',
 addTransaction:'Add transaction',
 balance:'Balance',
 country:'Country',
 state:'Province / State',
 city:'City',
 language:'Language',
 theme:'Theme',
 save:'Save',
 phone:'Phone',
 name:'Name',
 uploading:'Uploading...',
 noResults:'No results',
 ratesLoading:'Loading rates...',
 live:'LIVE',
 ratesUnavailable:'Rates API unavailable'
},

fa:{
 home:'خانه',
 transactions:'معاملات',
 profile:'پروفایل',
 logout:'خروج',
 loading:'در حال بارگذاری...',
 myAccounts:'حساب‌های من',
 noAccounts:'هنوز حسابی وجود ندارد',
 noAccountsText:'برای شروع، یک معامله ثبت کنید.',
 credit:'طلب',
 debit:'بدهی',
 transaction:'معامله',
 transactionsCount:'معامله',
 edit:'ویرایش',
 delete:'حذف',
 confirmDelete:'تأیید حذف',
 deleteAccount:'آیا از حذف این حساب مطمئن هستید؟',
 cancel:'لغو',
 yesDelete:'بله، حذف شود',
 location:'موقعیت',
 detecting:'در حال تشخیص...',
 online:'آنلاین',
 signIn:'ورود',
 register:'ایجاد حساب جدید',
 email:'آدرس ایمیل',
 password:'رمز عبور',
 verifyEmail:'تأیید ایمیل',
 verificationCode:'کد تأیید',
 verifyCode:'تأیید کد',
 resend:'ارسال دوباره',
 back:'برگشت',
 addTransaction:'افزودن معامله',
 balance:'موجودی',
 country:'کشور',
 state:'ولایت / ایالت',
 city:'شهر',
 language:'زبان',
 theme:'رنگ',
 save:'ذخیره',
 phone:'شماره تلفن',
 name:'نام',
 uploading:'در حال آپلود...',
 noResults:'نتیجه‌ای پیدا نشد',
 ratesLoading:'در حال دریافت نرخ‌ها...',
 live:'زنده',
 ratesUnavailable:'نرخ ارز در دسترس نیست'
},

ar:{
 home:'الرئيسية',
 transactions:'المعاملات',
 profile:'الملف الشخصي',
 logout:'تسجيل الخروج',
 loading:'جارٍ التحميل...',
 myAccounts:'حساباتي',
 noAccounts:'لا توجد حسابات بعد',
 noAccountsText:'أنشئ معاملة لبدء المحاسبة.',
 credit:'دائن',
 debit:'مدين',
 transaction:'معاملة',
 transactionsCount:'معاملات',
 edit:'تعديل',
 delete:'حذف',
 confirmDelete:'تأكيد الحذف',
 deleteAccount:'هل أنت متأكد من حذف هذا الحساب؟',
 cancel:'إلغاء',
 yesDelete:'نعم، حذف',
 location:'الموقع',
 detecting:'جارٍ التحديد...',
 online:'متصل',
 signIn:'تسجيل الدخول',
 register:'إنشاء حساب جديد',
 email:'البريد الإلكتروني',
 password:'كلمة المرور',
 verifyEmail:'تأكيد البريد الإلكتروني',
 verificationCode:'رمز التحقق',
 verifyCode:'تأكيد الرمز',
 resend:'إعادة الإرسال',
 back:'رجوع',
 addTransaction:'إضافة معاملة',
 balance:'الرصيد',
 country:'الدولة',
 state:'المقاطعة / الولاية',
 city:'المدينة',
 language:'اللغة',
 theme:'اللون',
 save:'حفظ',
 phone:'رقم الهاتف',
 name:'الاسم',
 uploading:'جارٍ الرفع...',
 noResults:'لا توجد نتائج',
 ratesLoading:'جارٍ تحميل الأسعار...',
 live:'مباشر',
 ratesUnavailable:'أسعار العملات غير متاحة'
},

ps:{
 home:'کور',
 transactions:'معاملې',
 profile:'پروفایل',
 logout:'وتل',
 loading:'د بارولو په حال کې...',
 myAccounts:'زما حسابونه',
 noAccounts:'تر اوسه حساب نشته',
 noAccountsText:'د حسابدارۍ د پیل لپاره یوه معامله جوړه کړئ.',
 credit:'طلب',
 debit:'پور',
 transaction:'معامله',
 transactionsCount:'معاملې',
 edit:'سمون',
 delete:'حذف',
 confirmDelete:'د حذف تایید',
 deleteAccount:'ایا غواړئ دا حساب حذف کړئ؟',
 cancel:'لغوه',
 yesDelete:'هو، حذف یې کړه',
 location:'ځای',
 detecting:'د موندلو په حال کې...',
 online:'آنلاین',
 signIn:'ننوتل',
 register:'نوی حساب جوړول',
 email:'ایمیل',
 password:'پټ نوم',
 verifyEmail:'د ایمیل تایید',
 verificationCode:'د تایید کوډ',
 verifyCode:'کوډ تایید کړه',
 resend:'بیا ولېږه',
 back:'بېرته',
 addTransaction:'معامله اضافه کړه',
 balance:'بیلانس',
 country:'هیواد',
 state:'ولایت / ایالت',
 city:'ښار',
 language:'ژبه',
 theme:'رنګ',
 save:'ساتل',
 phone:'د تلیفون شمېره',
 name:'نوم',
 uploading:'اپلوډېږي...',
 noResults:'پایله ونه موندل شوه',
 ratesLoading:'نرخونه پورته کېږي...',
 live:'ژوندی',
 ratesUnavailable:'د اسعارو نرخونه شتون نه لري'
},

tr:{
 home:'Ana Sayfa',
 transactions:'İşlemler',
 profile:'Profil',
 logout:'Çıkış',
 loading:'Yükleniyor...',
 myAccounts:'Hesaplarım',
 noAccounts:'Henüz hesap yok',
 noAccountsText:'Muhasebeye başlamak için bir işlem oluşturun.',
 credit:'Alacak',
 debit:'Borç',
 transaction:'İşlem',
 transactionsCount:'işlem',
 edit:'Düzenle',
 delete:'Sil',
 confirmDelete:'Silmeyi Onayla',
 deleteAccount:'Bu hesabı silmek istediğinizden emin misiniz?',
 cancel:'İptal',
 yesDelete:'Evet, Sil',
 location:'Konum',
 detecting:'Algılanıyor...',
 online:'Çevrimiçi',
 signIn:'Giriş Yap',
 register:'Yeni Hesap Oluştur',
 email:'E-posta Adresi',
 password:'Şifre',
 verifyEmail:'E-postanızı Doğrulayın',
 verificationCode:'Doğrulama Kodu',
 verifyCode:'Kodu Doğrula',
 resend:'Kodu Tekrar Gönder',
 back:'Geri',
 addTransaction:'İşlem ekle',
 balance:'Bakiye',
 country:'Ülke',
 state:'Eyalet / İl',
 city:'Şehir',
 language:'Dil',
 theme:'Renk',
 save:'Kaydet',
 phone:'Telefon',
 name:'İsim',
 uploading:'Yükleniyor...',
 noResults:'Sonuç bulunamadı',
 ratesLoading:'Kurlar yükleniyor...',
 live:'CANLI',
 ratesUnavailable:'Kur bilgileri kullanılamıyor'
}

};

const DEFAULT_SETTINGS={
 language:'en',
 themeColor:'#7c3aed',
 countryCode:'AF',
 countryName:'Afghanistan',
 countryFlag:'🇦🇫',
 currencyCode:'AFN',
 currencyName:'Afghan Afghani',
 currencySymbol:'؋',
 state:'Jawzjan',
 city:'',
 name:'',
 phone:'',
 avatar:''
};

function cloneDefault(){
 return Object.assign({},DEFAULT_SETTINGS);
}

function getSettings(){

 try{

  const raw=
   localStorage.getItem(STORAGE_KEY);

  if(!raw){
   return cloneDefault();
  }

  const parsed=JSON.parse(raw);

  return Object.assign(
   cloneDefault(),
   parsed||{}
  );

 }catch(e){

  console.error(
   'Global settings:',
   e
  );

  return cloneDefault();

 }

}

function saveSettings(settings){

 const merged=
  Object.assign(
   cloneDefault(),
   getSettings(),
   settings||{}
  );

 try{
  localStorage.setItem(
   STORAGE_KEY,
   JSON.stringify(merged)
  );
 }catch(e){
  console.error(e);
 }

 applyGlobalSettings(merged);

 window.dispatchEvent(
  new CustomEvent(
   'dailyAccountingSettingsChanged',
   {
    detail:merged
   }
  )
 );

 return merged;
}

function isoToFlag(code){

 if(!code || String(code).length!==2){
  return '🌐';
 }

 return String(code)
  .toUpperCase()
  .replace(
   /./g,
   c=>String.fromCodePoint(
    127397+c.charCodeAt(0)
   )
  );

}

function getLanguage(){

 const s=getSettings();

 return LANGUAGES[s.language]
  ? s.language
  : 'en';

}

function t(key){

 const language=getLanguage();

 return (
  TRANSLATIONS[language]?.[key] ??
  TRANSLATIONS.en[key] ??
  key
 );

}

function applyDirection(language){

 const lang=
  LANGUAGES[language]
   ? language
   : 'en';

 const info=LANGUAGES[lang];

 document.documentElement.lang=lang;
 document.documentElement.dir=info.dir;

}

function applyTheme(color){

 if(!color) return;

 const root=
  document.documentElement;

 root.style.setProperty(
  '--primary',
  color
 );

 root.style.setProperty(
  '--theme-color',
  color
 );

 let dark=color;

 try{

  const hex=color.replace('#','');

  if(hex.length===6){

   const r=parseInt(hex.substring(0,2),16);
   const g=parseInt(hex.substring(2,4),16);
   const b=parseInt(hex.substring(4,6),16);

   dark=
    `rgb(${Math.max(0,r-20)},${Math.max(0,g-20)},${Math.max(0,b-20)})`;

  }

 }catch(e){}

 root.style.setProperty(
  '--primary-dark',
  dark
 );

 root.style.setProperty(
  '--primary-soft',
  color+'18'
 );

}

function translatePage(){

 document
  .querySelectorAll('[data-i18n]')
  .forEach(el=>{

   const key=
    el.getAttribute('data-i18n');

   el.textContent=t(key);

  });

 document
  .querySelectorAll('[data-i18n-placeholder]')
  .forEach(el=>{

   const key=
    el.getAttribute(
     'data-i18n-placeholder'
    );

   el.placeholder=t(key);

  });

 document
  .querySelectorAll('[data-i18n-title]')
  .forEach(el=>{

   const key=
    el.getAttribute(
     'data-i18n-title'
    );

   el.title=t(key);

  });

 document
  .querySelectorAll('[data-i18n-aria-label]')
  .forEach(el=>{

   const key=
    el.getAttribute(
     'data-i18n-aria-label'
    );

   el.setAttribute(
    'aria-label',
    t(key)
   );

  });

}

function applyGlobalSettings(settings){

 const s=
  Object.assign(
   cloneDefault(),
   settings||getSettings()
  );

 applyDirection(s.language);

 applyTheme(s.themeColor);

 translatePage();

 window.dispatchEvent(
  new CustomEvent(
   'dailyAccountingGlobalApplied',
   {
    detail:s
   }
  )
 );

}

function setLanguage(language){

 if(!LANGUAGES[language]){
  language='en';
 }

 return saveSettings({
  language
 });

}

function setTheme(color){

 return saveSettings({
  themeColor:color
 });

}

function setProfile(profile){

 return saveSettings(
  Object.assign(
   {},
   profile||{}
  )
 );

}

function setCountry(data){

 return saveSettings({
  countryCode:data?.countryCode||'',
  countryName:data?.countryName||'',
  countryFlag:data?.countryFlag||'🌐',
  currencyCode:data?.currencyCode||'',
  currencyName:data?.currencyName||'',
  currencySymbol:data?.currencySymbol||''
 });

}

window.DailyTranslator={
 LANGUAGES,
 TRANSLATIONS,
 DEFAULT_SETTINGS,
 t,
 getLanguage,
 getSettings,
 saveSettings,
 setLanguage,
 setTheme,
 setProfile,
 setCountry,
 translatePage,
 applyGlobalSettings,
 applyTheme,
 applyDirection,
 isoToFlag
};

function boot(){

 applyGlobalSettings(
  getSettings()
 );

 const observer=
  new MutationObserver(
   function(){
    translatePage();
   }
  );

 observer.observe(
  document.documentElement,
  {
   childList:true,
   subtree:true
  }
 );

}

if(
 document.readyState==='loading'
){

 document.addEventListener(
  'DOMContentLoaded',
  boot
 );

}else{

 boot();

}

})();
