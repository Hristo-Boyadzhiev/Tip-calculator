import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import { FormControl } from "@mui/material";
import getCurrencySymbol from "../../../utils/getCurrencySymbol";
import { Controller, useFormContext } from "react-hook-form";
import FormHelperText from "@mui/material/FormHelperText";

interface BillValueProps {
  currency: string;
}

export default function BillAmount({ currency }: BillValueProps) {
  const currencySymbol = getCurrencySymbol(currency);
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <FormControl
      size="small"
      sx={{ marginLeft: "2em" }}
      error={!!errors.billValue}
    >
      <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
      <Controller
        name="billAmount"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <OutlinedInput
            {...field}
            id="outlined-adornment-amount"
            startAdornment={
              <InputAdornment position="start">{currencySymbol}</InputAdornment>
            }
            inputProps={{
              style: { textAlign: "right" },
            }}
            label="Amount"
          />
        )}
      />
      {errors.billValue && (
        <FormHelperText>
          {typeof errors.billValue.message === "string"
            ? errors.billValue.message
            : ""}
        </FormHelperText>
      )}
    </FormControl>
  );
}
