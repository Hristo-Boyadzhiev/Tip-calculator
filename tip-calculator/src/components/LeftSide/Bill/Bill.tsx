import { Box, Typography } from "@mui/material";
import Currency from "./Currency";
import BillValue from "./BillValue";
import React from "react";

export default function Bill() {
  const [currentCurrency, setCurrentCurrency] = React.useState<string>("");

  const handleCurrency = (currency: string) => {
    setCurrentCurrency(currency);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1em",
      }}
    >
      <Typography variant="h6">Bill</Typography>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Currency handleCurrency={handleCurrency} />
          <BillValue currency={currentCurrency} />
        </Box>
      </Box>
    </Box>
  );
}
