import getCurrencies from "./getCurrencies";

export default function getCurrencySymbol(currency: string) {
  const currencies = getCurrencies();
  const currencySymbol = currencies.find((option) => option.value === currency);
  return currencySymbol ? currencySymbol.label : "";
}
