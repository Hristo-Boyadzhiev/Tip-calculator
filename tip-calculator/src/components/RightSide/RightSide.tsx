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
        backgroundColor: "hsl(183, 100%, 15%)",
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
            <Typography sx={{ color: "white" }}>Tip Amount</Typography>
            <Typography sx={{ color: "white" }}>/ Person</Typography>
          </Box>
          <Typography>
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
            <Typography sx={{ color: "white" }}>Total</Typography>
            <Typography sx={{ color: "white" }}>/ Person</Typography>
          </Box>
          <Typography>
            {totalPerPerson} {currencySymbol}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
