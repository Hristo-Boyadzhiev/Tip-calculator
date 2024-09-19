import { Box, Button, ButtonGroup, TextField, Typography } from "@mui/material";

export default function SelectTypeI() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1em",
      }}
    >
      <Typography variant="h6">Select Type %</Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1em",
        }}
      >
        <ButtonGroup
          disableElevation
          variant="contained"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Button>5%</Button>
          <Button>10%</Button>
          <Button>15%</Button>
          <Button>20%</Button>
          <Button>25%</Button>
          <Button>30%</Button>
        </ButtonGroup>

        <ButtonGroup
          disableElevation
          variant="contained"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <TextField
            id="outlined-basic"
            label="Custom"
            variant="outlined"
            size="small"
          />
        </ButtonGroup>
      </Box>
    </Box>
  );
}
