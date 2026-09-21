const SARAFI_API =
"https://shy-leaf-a6bfsarafi-rates-api.ahmadfarhadcina.workers.dev/";

async function getSarafiRates() {
    try {
        const response = await fetch(SARAFI_API);

        if (!response.ok) {
            throw new Error("API Error: " + response.status);
        }

        const rates = await response.json();

        console.log("SARAFI.AF Rates:", rates);

        return rates;

    } catch (error) {
        console.error("SARAFI API Error:", error);
        return null;
    }
}
