import { currencies } from "./currencies";

export default function getCurrencySymbol(currency: string | undefined) {
  const currencySymbol = currencies.find((option) => option.value === currency);
  return currencySymbol ? currencySymbol.label : "";
}
