import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import getCurrencies from "../../../utils/getCurrencies";
import { Controller, useFormContext } from "react-hook-form";
import { useTipContext } from "../../../hooks/useTipContext";

export default function Currency() {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const { setCurrentCurrency } = useTipContext();

  const currencies = getCurrencies();

  return (
    <Controller
      name="currency"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <FormControl
          variant="standard"
          sx={{ minWidth: 120 }}
          error={!!errors.currency}
        >
          <InputLabel id="currency-select-label">Currency</InputLabel>
          <Select
            labelId="currency-select-label"
            id="currency-select"
            size="small"
            {...field}
            onChange={(event) => {
              const currency = event.target.value;
              setCurrentCurrency(currency);
              field.onChange(currency);
            }}
          >
            {currencies.map((currency, index) => (
              <MenuItem key={index} value={currency.value}>
                {currency.label}
              </MenuItem>
            ))}
          </Select>
          {errors.currency?.message && (
            <FormHelperText>
              {typeof errors.currency.message === "string"
                ? errors.currency.message
                : ""}
            </FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
}
