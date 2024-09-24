import {
  Box,
  FormControl,
  Input,
  InputAdornment,
  Typography,
  FormHelperText,
} from "@mui/material";
import PercentIcon from "@mui/icons-material/Percent";
import { Controller, useFormContext } from "react-hook-form";

export default function TipPercentage() {
  const {
    control,
    formState: { errors },
    setError,
    clearErrors,
  } = useFormContext();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1em",
      }}
    >
      <Typography variant="h6">Tip Percentage (%)</Typography>
      <Controller
        name="tipPercentage"
        control={control}
        defaultValue=""
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <FormControl variant="standard" error={!!errors.tipPercentage}>
            <Input
              id="input-with-icon-adornment"
              type="number"
              inputProps={{
                style: { textAlign: "right" },
                step: 1,
                min: 1,
              }}
              startAdornment={
                <InputAdornment position="start">
                  <PercentIcon />
                </InputAdornment>
              }
              onChange={(e) => {
                const numValue = Number(e.target.value);
                onChange(e);
                if (isNaN(numValue) || numValue < 1) {
                  setError("tipPercentage", {
                    type: "manual",
                    message: "Tip percentage must be at least 1%",
                  });
                } else {
                  clearErrors("tipPercentage");
                }
              }}
              onBlur={onBlur}
              value={value}
              inputRef={ref}
            />
            {errors.tipPercentage?.message && (
              <FormHelperText>
                {typeof errors.tipPercentage.message === "string"
                  ? errors.tipPercentage.message
                  : ""}
              </FormHelperText>
            )}
          </FormControl>
        )}
      />
    </Box>
  );
}
