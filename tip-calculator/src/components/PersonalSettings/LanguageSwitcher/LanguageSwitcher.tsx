import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";
import React from "react";
import getLanguages from "@/utils/getLanguages";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = React.useState(
    localStorage.getItem("selectedLanguage") || "en"
  );
  const languages = getLanguages();

  React.useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage]);

  function handleLanguageChange(event: SelectChangeEvent) {
    const newLanguage = event.target.value as string;
    i18n.changeLanguage(newLanguage);
    setSelectedLanguage(newLanguage);
    localStorage.setItem("selectedLanguage", newLanguage);
  }

  return (
    <FormControl variant="standard" sx={{ minWidth: 40 }}>
      <Select
        labelId="language-select-label"
        id="language-select"
        value={selectedLanguage}
        onChange={handleLanguageChange}
        renderValue={(selected) => {
          const selectedLang = languages.find((lang) => lang.code === selected);
          return (
            <Box sx={{ textAlign: "center" }}>
              <img src={selectedLang?.flag} alt={selectedLang?.code} />
            </Box>
          );
        }}
      >
        {languages.map((language) => (
          <MenuItem key={language.code} value={language.code}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img
                src={language.flag}
                alt={language.code}
                style={{ marginRight: 8, width: 20 }}
              />
              {language.code.toUpperCase()}
            </Box>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
