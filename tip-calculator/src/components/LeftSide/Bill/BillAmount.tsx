import InputAdornment from "@mui/material/InputAdornment";
import { FormControl, Input } from "@mui/material";
import getCurrencySymbol from "../../../utils/getCurrencySymbol";
import { Controller, useFormContext } from "react-hook-form";
import FormHelperText from "@mui/material/FormHelperText";
import React from "react";

interface BillValueProps {
  currency: string;
}

export default function BillAmount({ currency }: BillValueProps) {
  const {
    control,
    formState: { errors },
    setError,
    clearErrors,
  } = useFormContext();

  const currencySymbol = getCurrencySymbol(currency);

  React.useEffect(() => {
    setError("billAmount", {
      type: "manual",
      message: `Bill amount must be at least 1${currencySymbol}`,
    });
  }, [currencySymbol]);

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
              min: 1,
            }}
            startAdornment={
              <InputAdornment position="start">{currencySymbol}</InputAdornment>
            }
            onChange={(e) => {
              const numValue = Number(e.target.value);
              onChange(e);
              if (isNaN(numValue) || numValue < 1) {
                setError("billAmount", {
                  type: "manual",
                  message: `Bill amount must be at least 1${currencySymbol}`,
                });
              } else {
                clearErrors("billAmount");
              }
            }}
            onBlur={onBlur}
            value={value}
            inputRef={ref}
          />
          {errors.billAmount?.message && (
            <FormHelperText>
              {typeof errors.billAmount.message === "string"
                ? errors.billAmount.message
                : ""}
            </FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
}
