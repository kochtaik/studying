export const fetchCurrencyData = async currenciesNames => {
  const API_KEY =
    '1f976776ae2ffe846eee61fdaa425aa7bcf46330c24916db2e5bbbb0c76727a3';
  const res = await fetch(
    `https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=${currenciesNames}&api_key=${API_KEY}`
  );
  const unformattedData = await res.json();
  return await Object.fromEntries(
    Object.entries(unformattedData).map(([currencyName, price]) => [
      currencyName,
      1 / price
    ])
  );
};
