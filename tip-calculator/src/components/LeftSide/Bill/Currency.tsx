import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import getCurrencies from "../../../utils/getCurrencies";
import { Controller, useFormContext } from "react-hook-form";

interface CurrencyProps {
  handleCurrency: (currency: string) => void;
}

export default function Currency({ handleCurrency }: CurrencyProps) {
  const currencies = getCurrencies();
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name="currency"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <FormControl
          sx={{ minWidth: 120 }}
          size="small"
          error={!!errors.currency}
        >
          <InputLabel id="demo-select-small-label">Currency</InputLabel>
          <Select
            {...field}
            labelId="demo-select-small-label"
            id="demo-select-small"
            label="Currency"
            onChange={(event) => {
              const currency = event.target.value;
              handleCurrency(currency);
              field.onChange(currency);
            }}
          >
            {currencies.map((currency, index) => (
              <MenuItem key={index} value={currency.value}>
                {currency.label}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>
            {typeof errors.currency?.message === "string"
              ? errors.currency.message
              : ""}
          </FormHelperText>
        </FormControl>
      )}
    />
  );
}
