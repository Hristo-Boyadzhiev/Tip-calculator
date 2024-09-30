enum Currencies {
  EUR = "€",
  BGN = "lv.",
  USD = "$",
  JPY = "¥",
  GBP = "£",
  CHF = "CHF",
}

export const currencies: readonly { value: string; label: string }[] =
  Object.entries(Currencies).map(([value, label]) => ({
    value,
    label,
  }));
