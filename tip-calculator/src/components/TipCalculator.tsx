import Box from "@mui/material/Box";
import Footer from "./Footer/Footer";
import TipCalculatorContent from "./TipCalculatorContent";

export default function TipCalculator() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <TipCalculatorContent />
      <Footer />
    </Box>
  );
}
