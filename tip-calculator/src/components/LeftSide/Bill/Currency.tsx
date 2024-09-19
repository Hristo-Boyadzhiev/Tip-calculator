import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import getCurrencies from "../../../utils/getCurrencies";

interface CurrencyProps {
  handleCurrency: (event: any) => void;
  currentCurrency: string;
}

export default function Currency({
  handleCurrency,
  currentCurrency,
}: CurrencyProps) {
  const currencies = getCurrencies();
  //TODO: trqbva da e kontroliran komponent
  return (
    <FormControl sx={{ minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Currency</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={currentCurrency}
        label="Currency"
        onChange={handleCurrency}
      >
        {currencies.map((currency, index) => (
          <MenuItem key={index} value={currency.value}>
            {currency.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
