import { Box, SelectChangeEvent, Typography } from "@mui/material";
import Currency from "./Currency";
import BillValue from "./BillValue";
import React from "react";

export default function Bill() {
  const [currentCurrency, setCurrentCurrency] = React.useState<string>("");

  const handleCurrency = (event: SelectChangeEvent) => {
    setCurrentCurrency(event.target.value);
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
      <Box sx={{ dislay: "flex" }}>
        <Currency
          handleCurrency={handleCurrency}
          currentCurrency={currentCurrency}
        />
        <BillValue currency={currentCurrency} />
      </Box>
    </Box>
  );
}
