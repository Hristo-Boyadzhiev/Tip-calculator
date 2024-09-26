import { Box, FormHelperText, Typography } from "@mui/material";

import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import PersonIcon from "@mui/icons-material/Person";
import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

export default function NumberOfPeople() {
  const { t: translate } = useTranslation();
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5em",
      }}
    >
      <Typography variant="h6">{translate("number-of-people")}</Typography>
      <Controller
        name="numberOfPeople"
        control={control}
        defaultValue=""
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <FormControl variant="standard" error={!!errors.numberOfPeople}>
            <Input
              id="input-with-icon-adornment"
              type="number"
              inputProps={{
                style: { textAlign: "right" },
                step: 1,
              }}
              startAdornment={
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              }
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              inputRef={ref}
            />
            {errors.numberOfPeople?.message && (
              <FormHelperText>
                {typeof errors.numberOfPeople.message === "string"
                  ? translate(errors.numberOfPeople.message)
                  : ""}
              </FormHelperText>
            )}
          </FormControl>
        )}
      />
    </Box>
  );
}
