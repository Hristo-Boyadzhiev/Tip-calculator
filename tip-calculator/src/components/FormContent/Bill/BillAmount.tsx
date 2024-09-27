import InputAdornment from "@mui/material/InputAdornment";
import { FormControl, Input } from "@mui/material";
import getCurrencySymbol from "../../../utils/getCurrencySymbol";
import { Controller, useFormContext } from "react-hook-form";
import FormHelperText from "@mui/material/FormHelperText";
import { useTipContext } from "../../../hooks/useTipContext";
import { useTranslation } from "react-i18next";

export default function BillAmount() {
  const { t: translate } = useTranslation();
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { currentCurrency } = useTipContext();
  const currencySymbol = getCurrencySymbol(currentCurrency);

  return (
    <Controller
      name="billAmount"
      control={control}
      defaultValue=""
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <FormControl variant="standard" error={!!errors.billAmount}>
          <Input
            id="input-with-icon-adornment"
            type="number"
            inputProps={{
              style: { textAlign: "right" },
              step: 1,
            }}
            startAdornment={
              <InputAdornment position="start">{currencySymbol}</InputAdornment>
            }
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            inputRef={ref}
          />
          {errors.billAmount?.message && (
            <FormHelperText>
              {typeof errors.billAmount.message === "string"
                ? translate(errors.billAmount.message, {
                    currency: currencySymbol,
                  })
                : ""}
            </FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
}
