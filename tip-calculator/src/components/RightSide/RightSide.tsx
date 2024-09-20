import { Box, Button, Typography } from "@mui/material";

export default function RightSide() {
  //TODO най-вероятно валутата трябва да я пазя в context, за да имам достъп до нея и тук
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flex: 1,
        borderRadius: "1.5em",
        padding: "1em",
        backgroundColor: "hsl(183, 100%, 15%)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "3em",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography sx={{ color: "white" }}>Type Amount</Typography>
            <Typography sx={{ color: "white" }}>/ Person</Typography>
          </Box>
          <Typography>$Proba</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography sx={{ color: "white" }}>Total</Typography>
            <Typography sx={{ color: "white" }}>/ Person</Typography>
          </Box>
          <Typography>$Proba</Typography>
        </Box>
      </Box>
      <Button variant="contained">reset</Button>
    </Box>
  );
}
