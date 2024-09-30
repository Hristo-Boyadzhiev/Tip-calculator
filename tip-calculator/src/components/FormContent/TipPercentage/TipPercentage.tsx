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
import { useTranslation } from "react-i18next";
import { HasFilledFormFieldsProps } from "@/interfaces/HasFilledFormFieldsProps";

export default function TipPercentage() {
  const { t: translate } = useTranslation();
  const {
    control,
    formState: { errors },
  } = useFormContext<HasFilledFormFieldsProps>();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5em",
      }}
    >
      <Typography variant="h6">{translate("tip-percentage")}</Typography>
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
              }}
              startAdornment={
                <InputAdornment position="start">
                  <PercentIcon />
                </InputAdornment>
              }
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              inputRef={ref}
            />
            {errors.tipPercentage?.message && (
              <FormHelperText>
                {typeof errors.tipPercentage.message === "string"
                  ? translate(errors.tipPercentage.message)
                  : ""}
              </FormHelperText>
            )}
          </FormControl>
        )}
      />
    </Box>
  );
}
