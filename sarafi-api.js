const SARAFI_API =
  "https://shy-leaf-a6bfsarafi-rates-api.ahmadfarhadcina.workers.dev/";

async function getSarafiRates() {
  try {
    const response = await fetch(SARAFI_API, {
      method: "GET",
      headers: {
        "Accept": "application/json"
      },
      cache: "no-store"
    });

    if (!response.ok) {
      throw new Error("API Error: " + response.status);
    }

    const data = await response.json();

    console.log("CINA SARAFI API:", data);

    // بررسی پاسخ API
    if (
      !data ||
      data.success !== true ||
      !data.rates ||
      typeof data.rates !== "object"
    ) {
      throw new Error("Invalid Sarafi API response");
    }

    // تبدیل نام ارزها به حروف بزرگ
    const rates = {};

    for (const [currency, value] of Object.entries(data.rates)) {
      const code = String(currency).trim().toUpperCase();
      const rate = Number(value);

      if (
        code &&
        Number.isFinite(rate) &&
        rate > 0
      ) {
        rates[code] = rate;
      }
    }

    // AFN همیشه پایه است
    rates.AFN = 1;

    console.log(
      "CINA SARAFI RATES:",
      rates
    );

    return rates;

  } catch (error) {

    console.error(
      "CINA SARAFI API ERROR:",
      error
    );

    return null;
  }
}
