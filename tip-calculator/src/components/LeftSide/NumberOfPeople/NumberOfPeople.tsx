import { Box, FormHelperText, Typography } from "@mui/material";

import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import PersonIcon from "@mui/icons-material/Person";
import { Controller, useFormContext } from "react-hook-form";

export default function NumberOfPeople() {
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
        gap: "0.5em",
      }}
    >
      <Typography variant="h6">Number of people</Typography>
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
                min: 1,
              }}
              startAdornment={
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              }
              onChange={(e) => {
                const numValue = Number(e.target.value);
                onChange(e);
                if (isNaN(numValue) || numValue < 1) {
                  setError("numberOfPeople", {
                    type: "manual",
                    message: "Number of people must be at least 1%.",
                  });
                } else {
                  clearErrors("numberOfPeople");
                }
              }}
              onBlur={onBlur}
              value={value}
              inputRef={ref}
            />
            {errors.numberOfPeople?.message && (
              <FormHelperText>
                {typeof errors.numberOfPeople.message === "string"
                  ? errors.numberOfPeople.message
                  : ""}
              </FormHelperText>
            )}
          </FormControl>
        )}
      />
    </Box>
  );
}
