import { Box, Typography } from "@mui/material";

export default function SelectTypeI() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1em",
      }}
    >
      <Typography variant="h6">Select Type</Typography>
      <Box sx={{ dislay: "flex" }}>Proba</Box>
    </Box>
  );
}
