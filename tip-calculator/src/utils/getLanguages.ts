interface LanguageType {
  code: string;
  flag: string;
}

export default function getLanguages(): readonly LanguageType[] {
  const languages: readonly LanguageType[] = [
    { code: "en", flag: "https://flagcdn.com/w20/gb.png" },
    { code: "bg", flag: "https://flagcdn.com/w20/bg.png" },
    { code: "de", flag: "https://flagcdn.com/w20/de.png" },
    { code: "fr", flag: "https://flagcdn.com/w20/fr.png" },
    { code: "es", flag: "https://flagcdn.com/w20/es.png" },
    { code: "it", flag: "https://flagcdn.com/w20/it.png" },
  ];

  return languages;
}
