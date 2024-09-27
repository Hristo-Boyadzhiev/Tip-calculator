import { Box, Typography } from "@mui/material";
import { useTipContext } from "../../hooks/useTipContext";
import getCurrencySymbol from "../../utils/getCurrencySymbol";
import { useThemeContext } from "../../hooks/useThemeContext";
import { useTranslation } from "react-i18next";

export default function Result() {
  const { t: translate } = useTranslation();
  const { currentCurrency, tipPerPerson, totalPerPerson } = useTipContext();
  const currencySymbol = getCurrencySymbol(currentCurrency);
  const { mode } = useThemeContext();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "3em",
        borderRadius: "1.5em",
        padding: "1em",
        backgroundColor: "primary.main",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "3em",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography sx={{ color: "secondary.main" }}>
            {translate("tip-amount")}
          </Typography>
          <Typography sx={{ color: "primary.800" }}>
            {translate("person")}
          </Typography>
        </Box>
        <Typography
          sx={{
            color: mode === "light" ? "primary.700" : "primary.900",
            fontSize: "1.5em",
          }}
        >
          {tipPerPerson}
          {currencySymbol}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography sx={{ color: "secondary.main" }}>
            {translate("total")}
          </Typography>
          <Typography sx={{ color: "primary.800" }}>
            {translate("person")}
          </Typography>
        </Box>
        <Typography
          sx={{
            color: mode === "light" ? "primary.700" : "primary.900",
            fontSize: "1.5em",
          }}
        >
          {totalPerPerson}
          {currencySymbol}
        </Typography>
      </Box>
    </Box>
  );
}
