import { Box, Typography } from "@mui/material";

import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import PersonIcon from "@mui/icons-material/Person";

//TODO: trqbva da e kontroliran komponent FormControl
export default function NumberOfPeople() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1em",
      }}
    >
      <Typography variant="h6">Number of people</Typography>
      <FormControl variant="standard">
        <Input
          id="input-with-icon-adornment"
          inputProps={{ style: { textAlign: "right" } }}
          startAdornment={
            <InputAdornment position="start">
              <PersonIcon />
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
}
