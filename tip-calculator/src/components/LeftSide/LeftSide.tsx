import { Box, Button } from "@mui/material";
import Bill from "./Bill/Bill";
import NumberOfPeople from "./NumberOfPeople/NumberOfPeople";
import TipPercentage from "./TipPercentage/TipPercentage";

export default function LeftSide() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flex: 1,
        // border: "0.1em solid black",
        borderRadius: "1.5em",
        padding: "1em",
      }}
    >
      <Bill />
      <TipPercentage />
      <NumberOfPeople />
      <Button
        type="submit"
        //disabled
        variant="contained"
      >
        calculate
      </Button>
    </Box>
  );
}
