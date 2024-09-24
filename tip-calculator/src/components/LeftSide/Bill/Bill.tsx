import { Box, Typography } from "@mui/material";
import Currency from "./Currency";
import BillAmount from "./BillAmount";
import { useTipContext } from "../../../hooks/useTipContext";

export default function Bill() {
  const { currentCurrency } = useTipContext();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5em",
      }}
    >
      <Typography variant="h6">Bill</Typography>
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
