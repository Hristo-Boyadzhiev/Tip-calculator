import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import { Controller, useFormContext } from "react-hook-form";
import { useTipContext } from "../../../hooks/useTipContext";
import { useTranslation } from "react-i18next";
import { HasFilledFormFieldsProps } from "@/interfaces/HasFilledFormFieldsProps";
import { currencies } from "@/utils/currencies";

export default function Currency() {
  const { t: translate } = useTranslation();
  const {
    control,
    formState: { errors },
  } = useFormContext<HasFilledFormFieldsProps>();

  const { setCurrentCurrency } = useTipContext();

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
          <InputLabel id="currency-select-label">
            {translate("currency")}
          </InputLabel>
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
                ? translate(errors.currency.message)
                : ""}
            </FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
}
