import { Box, Typography } from "@mui/material";
import { useTipContext } from "../../hooks/useTipContext";
import getCurrencySymbol from "../../utils/getCurrencySymbol";

export default function RightSide() {
  const { currentCurrency, tipPerPerson, totalPerPerson } = useTipContext();
  const currencySymbol = getCurrencySymbol(currentCurrency);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flex: 1,
        borderRadius: "1.5em",
        padding: "1em",
        backgroundColor: "primary.main",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "3em",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography sx={{ color: "secondary.main" }}>Tip Amount</Typography>
            <Typography sx={{ color: "primary.800" }}>/ Person</Typography>
          </Box>
          <Typography sx={{ color: "primary.700", fontSize: "1.5em" }}>
            {tipPerPerson} {currencySymbol}
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
            <Typography sx={{ color: "secondary.main" }}>Total</Typography>
            <Typography sx={{ color: "primary.800" }}>/ Person</Typography>
          </Box>
          <Typography sx={{ color: "primary.700", fontSize: "1.5em" }}>
            {totalPerPerson} {currencySymbol}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
