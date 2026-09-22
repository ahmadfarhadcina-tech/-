/*
 * =========================================================
 * CINA SARAFI LIVE RATES API
 * =========================================================
 *
 * API اصلی نرخ‌ها را با AFN به عنوان ارز پایه برمی‌گرداند.
 *
 * این فایل:
 * 1. نرخ‌های زنده را دریافت می‌کند.
 * 2. ارز کشور انتخاب‌شده را از DailyTranslator می‌گیرد.
 * 3. نرخ‌های متقاطع را برای ارز پایه انتخاب‌شده محاسبه می‌کند.
 * 4. تغییر کشور/ارز را به‌صورت خودکار تشخیص می‌دهد.
 *
 * هیچ نرخ ساختگی تولید نمی‌شود.
 */

const SARAFI_API =
  "https://shy-leaf-a6bfsarafi-rates-api.ahmadfarhadcina.workers.dev/";


/*
 * =========================================================
 * حافظه موقت نرخ‌ها
 * =========================================================
 */

let sarafiRatesAFN = null;

let sarafiLastUpdate = 0;

let sarafiLoading = false;

let sarafiLoadPromise = null;


/*
 * =========================================================
 * دریافت نرخ‌های اصلی از API
 * =========================================================
 */

async function getSarafiRates(forceRefresh = false) {

  /*
   * اگر قبلاً در حال دریافت هستیم،
   * همان درخواست را برمی‌گردانیم.
   */

  if (
    sarafiLoading &&
    sarafiLoadPromise
  ) {
    return sarafiLoadPromise;
  }


  /*
   * اگر نرخ قبلی موجود است و درخواست
   * تازه اجباری نشده، همان نرخ را برگردان.
   */

  if (
    !forceRefresh &&
    sarafiRatesAFN &&
    typeof sarafiRatesAFN === "object" &&
    Object.keys(sarafiRatesAFN).length > 0
  ) {

    return {
      ...sarafiRatesAFN
    };

  }


  sarafiLoading = true;


  sarafiLoadPromise =
    (async function () {

      try {

        const response =
          await fetch(
            SARAFI_API,
            {
              method: "GET",

              headers: {
                "Accept":
                  "application/json"
              },

              cache: "no-store"
            }
          );


        if (!response.ok) {

          throw new Error(
            "API Error: " +
            response.status
          );

        }


        const data =
          await response.json();


        console.log(
          "CINA SARAFI API:",
          data
        );


        /*
         * بررسی پاسخ API
         */

        if (
          !data ||
          data.success !== true ||
          !data.rates ||
          typeof data.rates !== "object"
        ) {

          throw new Error(
            "Invalid Sarafi API response"
          );

        }


        /*
         * تبدیل نام ارزها به حروف بزرگ
         */

        const rates = {};


        for (
          const [
            currency,
            value
          ]
          of Object.entries(
            data.rates
          )
        ) {

          const code =
            String(currency)
              .trim()
              .toUpperCase();


          const rate =
            Number(value);


          if (
            code &&
            Number.isFinite(rate) &&
            rate > 0
          ) {

            rates[code] =
              rate;

          }

        }


        /*
         * AFN همیشه پایه است.
         */

        rates.AFN = 1;


        /*
         * اگر هیچ نرخ معتبری دریافت نشده
         * باشد، پاسخ نامعتبر است.
         */

        if (
          Object.keys(rates).length <= 1
        ) {

          throw new Error(
            "No valid currency rates received"
          );

        }


        sarafiRatesAFN = {
          ...rates
        };


        sarafiLastUpdate =
          Date.now();


        console.log(
          "CINA SARAFI RATES:",
          sarafiRatesAFN
        );


        /*
         * اطلاع‌رسانی به تمام صفحات
         */

        try {

          window.dispatchEvent(
            new CustomEvent(
              "sarafiRatesUpdated",
              {
                detail: {
                  rates: {
                    ...sarafiRatesAFN
                  },

                  updatedAt:
                    sarafiLastUpdate
                }
              }
            )
          );

        } catch (eventError) {

          console.warn(
            "Sarafi event error:",
            eventError
          );

        }


        return {
          ...sarafiRatesAFN
        };


      } catch (error) {

        console.error(
          "CINA SARAFI API ERROR:",
          error
        );


        /*
         * اگر قبلاً نرخ معتبر داشتیم،
         * همان نرخ قبلی را حفظ می‌کنیم.
         */

        if (
          sarafiRatesAFN &&
          Object.keys(
            sarafiRatesAFN
          ).length > 0
        ) {

          return {
            ...sarafiRatesAFN
          };

        }


        return null;


      } finally {

        sarafiLoading =
          false;

        sarafiLoadPromise =
          null;

      }

    })();


  return sarafiLoadPromise;
}


/*
 * =========================================================
 * دریافت ارز پایه انتخاب‌شده توسط کاربر
 * =========================================================
 */

function getSarafiBaseCurrency() {

  try {

    if (
      window.DailyTranslator &&
      typeof
        window.DailyTranslator
          .getBaseCurrency ===
        "function"
    ) {

      const currency =
        window.DailyTranslator
          .getBaseCurrency();


      if (
        currency &&
        currency.code
      ) {

        return String(
          currency.code
        )
          .trim()
          .toUpperCase();

      }

    }

  } catch (error) {

    console.warn(
      "Cannot read selected currency:",
      error
    );

  }


  /*
   * حالت پیش‌فرض
   */

  return "AFN";
}


/*
 * =========================================================
 * تبدیل نرخ AFN به ارز پایه انتخاب‌شده
 * =========================================================
 *
 * API:
 *
 * USD = چند AFN
 * EUR = چند AFN
 * IRR = چند AFN
 *
 * اگر ارز پایه IRR باشد:
 *
 * 1 USD =
 * USD rate / IRR rate
 *
 * IRR
 *
 * =========================================================
 */

function convertRateToBase(
  fromCurrency,
  baseCurrency,
  rates
) {

  if (
    !rates ||
    typeof rates !== "object"
  ) {
    return null;
  }


  const from =
    String(
      fromCurrency || ""
    )
      .trim()
      .toUpperCase();


  const base =
    String(
      baseCurrency || ""
    )
      .trim()
      .toUpperCase();


  if (!from || !base) {
    return null;
  }


  /*
   * یک ارز به خودش
   */

  if (from === base) {
    return 1;
  }


  /*
   * ارز مبدأ نسبت به AFN
   */

  const fromRate =
    Number(
      rates[from]
    );


  /*
   * ارز پایه نسبت به AFN
   */

  const baseRate =
    Number(
      rates[base]
    );


  if (
    !Number.isFinite(fromRate) ||
    fromRate <= 0
  ) {
    return null;
  }


  if (
    !Number.isFinite(baseRate) ||
    baseRate <= 0
  ) {
    return null;
  }


  /*
   * نرخ متقاطع
   */

  const result =
    fromRate / baseRate;


  if (
    !Number.isFinite(result) ||
    result <= 0
  ) {
    return null;
  }


  return result;
}


/*
 * =========================================================
 * گرفتن نرخ یک ارز نسبت به ارز انتخاب‌شده
 * =========================================================
 */

async function getSarafiRate(
  fromCurrency,
  baseCurrency = null
) {

  const rates =
    await getSarafiRates();


  if (!rates) {
    return null;
  }


  const base =
    baseCurrency ||
    getSarafiBaseCurrency();


  return convertRateToBase(
    fromCurrency,
    base,
    rates
  );
}


/*
 * =========================================================
 * ساخت لیست نرخ‌ها برای ارز پایه انتخاب‌شده
 * =========================================================
 */

async function getSarafiRatesForSelectedCurrency(
  currencies = null
) {

  const rates =
    await getSarafiRates();


  if (!rates) {
    return null;
  }


  const base =
    getSarafiBaseCurrency();


  /*
   * اگر لیست خاصی داده نشده باشد،
   * تمام ارزهای موجود در API استفاده می‌شوند.
   */

  let currencyList;


  if (
    Array.isArray(currencies) &&
    currencies.length > 0
  ) {

    currencyList =
      currencies
        .map(
          currency =>
            String(currency)
              .trim()
              .toUpperCase()
        )
        .filter(Boolean);

  } else {

    currencyList =
      Object.keys(rates);

  }


  /*
   * ارز پایه را اول لیست قرار می‌دهیم.
   */

  currencyList =
    [
      base,
      ...currencyList.filter(
        code => code !== base
      )
    ];


  /*
   * حذف تکراری‌ها
   */

  currencyList =
    [...new Set(currencyList)];


  const result = {};


  for (
    const currency
    of currencyList
  ) {

    const rate =
      convertRateToBase(
        currency,
        base,
        rates
      );


    if (rate === null) {

      result[currency] = {
        code: currency,
        baseCurrency: base,
        rate: null,
        available: false
      };

    } else {

      result[currency] = {
        code: currency,
        baseCurrency: base,
        rate,
        available: true
      };

    }

  }


  return result;
}


/*
 * =========================================================
 * تبدیل مقدار بین دو ارز
 * =========================================================
 *
 * مثال:
 *
 * convertCurrency(100, "USD", "IRR")
 *
 * مقدار 100 دلار را به ریال ایران
 * با نرخ زنده تبدیل می‌کند.
 *
 * =========================================================
 */

async function convertCurrency(
  amount,
  fromCurrency,
  toCurrency
) {

  const numericAmount =
    Number(amount);


  if (
    !Number.isFinite(numericAmount)
  ) {

    return null;

  }


  const from =
    String(
      fromCurrency || ""
    )
      .trim()
      .toUpperCase();


  const to =
    String(
      toCurrency || ""
    )
      .trim()
      .toUpperCase();


  if (!from || !to) {
    return null;
  }


  /*
   * اگر ارزها یکسان باشند،
   * نیازی به API نیست.
   */

  if (from === to) {

    return {
      amount: numericAmount,
      rate: 1,
      fromCurrency: from,
      toCurrency: to,
      available: true
    };

  }


  const rates =
    await getSarafiRates();


  if (!rates) {

    return {
      amount: null,
      rate: null,
      fromCurrency: from,
      toCurrency: to,
      available: false
    };

  }


  const rate =
    convertRateToBase(
      from,
      to,
      rates
    );


  if (rate === null) {

    return {
      amount: null,
      rate: null,
      fromCurrency: from,
      toCurrency: to,
      available: false
    };

  }


  const converted =
    numericAmount * rate;


  if (
    !Number.isFinite(converted)
  ) {

    return {
      amount: null,
      rate: null,
      fromCurrency: from,
      toCurrency: to,
      available: false
    };

  }


  return {
    amount: converted,
    rate,
    fromCurrency: from,
    toCurrency: to,
    available: true
  };
}


/*
 * =========================================================
 * دریافت ارزهای موجود
 * =========================================================
 */

async function getAvailableSarafiCurrencies() {

  const rates =
    await getSarafiRates();


  if (!rates) {
    return [];
  }


  return Object.keys(
    rates
  )
    .map(
      code =>
        String(code)
          .trim()
          .toUpperCase()
    )
    .filter(Boolean);
}


/*
 * =========================================================
 * اطلاعات کامل ارز پایه فعلی
 * ========================================================= */

function getCurrentSarafiCurrency() {

  const code =
    getSarafiBaseCurrency();


  let name = code;
  let symbol = code;


  try {

    if (
      window.DailyTranslator &&
      typeof
        window.DailyTranslator
          .getCurrency ===
        "function"
    ) {

      const currency =
        window.DailyTranslator
          .getCurrency();


      if (currency) {

        name =
          currency.name ||
          code;

        symbol =
          currency.symbol ||
          code;

      }

    }

  } catch (error) {

    console.warn(
      "Cannot read currency information:",
      error
    );

  }


  return {
    code,
    name,
    symbol
  };
}


/*
 * =========================================================
 * تازه‌سازی اجباری نرخ‌ها
 * =========================================================
 */

async function refreshSarafiRates() {

  const rates =
    await getSarafiRates(
      true
    );


  /*
   * بعد از دریافت نرخ جدید،
   * صفحه را از تغییر مطلع می‌کنیم.
   */

  try {

    window.dispatchEvent(
      new CustomEvent(
        "sarafiRatesRefreshed",
        {
          detail: {
            rates:
              rates
                ? {
                    ...rates
                  }
                : null,

            baseCurrency:
              getSarafiBaseCurrency(),

            updatedAt:
              sarafiLastUpdate
          }
        }
      )
    );

  } catch (error) {

    console.warn(
      "Sarafi refresh event error:",
      error
    );

  }


  return rates;
}


/*
 * =========================================================
 * وقتی کشور/ارز در تنظیمات تغییر کرد
 * =========================================================
 *
 * نرخ‌های قبلی را پاک نمی‌کنیم تا اطلاعات قبلی
 * در صورت قطع لحظه‌ای اینترنت از بین نرود.
 *
 * اما نرخ جدید دوباره از API دریافت می‌شود.
 * =========================================================
 */

if (
  typeof window !== "undefined"
) {

  window.addEventListener(
    "dailyAccountingCurrencyChanged",
    async function (event) {

      console.log(
        "CINA: Currency changed:",
        event?.detail?.currency ||
        getCurrentSarafiCurrency()
      );


      try {

        await refreshSarafiRates();

      } catch (error) {

        console.error(
          "Currency change refresh error:",
          error
        );

      }


      /*
       * اطلاع‌رسانی به بخش‌های صفحه
       */

      try {

        window.dispatchEvent(
          new CustomEvent(
            "sarafiBaseCurrencyChanged",
            {
              detail: {
                currency:
                  getCurrentSarafiCurrency(),

                rates:
                  sarafiRatesAFN
                    ? {
                        ...sarafiRatesAFN
                      }
                    : null
              }
            }
          )
        );

      } catch (error) {

        console.warn(
          "Base currency event error:",
          error
        );

      }

    }
  );


  /*
   * تغییر مستقیم کشور
   */

  window.addEventListener(
    "dailyAccountingCountryChanged",
    function () {

      /*
       * کشور ممکن است ارز جدید داشته باشد،
       * بنابراین بعد از تغییر کشور
       * بخش‌های وابسته باید دوباره نرخ بگیرند.
       */

      setTimeout(
        async function () {

          try {

            await refreshSarafiRates();

          } catch (error) {

            console.error(
              "Country change rates error:",
              error
            );

          }

        },
        0
      );

    }
  );

}


/*
 * =========================================================
 * Public API
 * =========================================================
 */

if (
  typeof window !== "undefined"
) {

  window.CinaSarafi = {

    SARAFI_API,

    getSarafiRates,

    getSarafiRate,

    getSarafiRatesForSelectedCurrency,

    convertCurrency,

    getAvailableSarafiCurrencies,

    getCurrentSarafiCurrency,

    getSarafiBaseCurrency,

    convertRateToBase,

    refreshSarafiRates,

    getLastUpdate: function () {
      return sarafiLastUpdate;
    },

    getCachedRates: function () {

      return sarafiRatesAFN
        ? {
            ...sarafiRatesAFN
          }
        : null;

    }

  };

}
