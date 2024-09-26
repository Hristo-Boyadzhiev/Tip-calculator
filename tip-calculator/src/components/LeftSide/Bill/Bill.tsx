import { Box, Typography } from "@mui/material";
import Currency from "./Currency";
import BillAmount from "./BillAmount";
import { useTipContext } from "../../../hooks/useTipContext";
import { useTranslation } from "react-i18next";

export default function Bill() {
  const { t: translate } = useTranslation();
  const { currentCurrency } = useTipContext();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5em",
      }}
    >
      <Typography variant="h6">{translate("bill")}</Typography>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            gap: "2em",
          }}
        >
          <Currency />
          {currentCurrency && <BillAmount />}
        </Box>
      </Box>
    </Box>
  );
}
