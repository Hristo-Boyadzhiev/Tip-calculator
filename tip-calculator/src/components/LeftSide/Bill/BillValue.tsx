import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import { FormControl } from "@mui/material";
import getCurrencySymbol from "../../../utils/getCurrencySymbol";

interface BillValueProps {
  currency: string;
}

export default function BillValue({ currency }: BillValueProps) {
  const currencySymbol = getCurrencySymbol(currency);
  //TODO: trqbva da e kontroliran komponent
  return (
    <FormControl size="small" sx={{ marginLeft: "2em" }}>
      <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
      <OutlinedInput
        id="outlined-adornment-amount"
        startAdornment={
          <InputAdornment position="start">{currencySymbol}</InputAdornment>
        }
        inputProps={{
          style: { textAlign: "right" },
        }}
        label="Amount"
      />
    </FormControl>
  );
}
