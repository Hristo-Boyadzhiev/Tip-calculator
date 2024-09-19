enum Currencies {
  BGN = "lv.",
  USD = "$",
  EUR = "€",
  JPY = "¥",
  GBP = "£",
  CHF = "CHF",
}

export default function getCurrencies() {
  const currencies = Object.entries(Currencies).map(([value, label]) => ({
    value,
    label,
  }));

  return currencies;
}
