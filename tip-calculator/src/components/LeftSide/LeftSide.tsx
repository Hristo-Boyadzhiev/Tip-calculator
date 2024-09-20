import { Box, Button } from "@mui/material";
import Bill from "./Bill/Bill";
import NumberOfPeople from "./NumberOfPeople/NumberOfPeople";
import SelectType from "./SelectType/SelectType";
import { useFormContext } from "react-hook-form";

export default function LeftSide() {
  const methods = useFormContext();
  console.log(methods);
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
      <SelectType />
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
