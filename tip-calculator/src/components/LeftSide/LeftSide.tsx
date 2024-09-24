import { Box, Button } from "@mui/material";
import Bill from "./Bill/Bill";
import NumberOfPeople from "./NumberOfPeople/NumberOfPeople";
import TipPercentage from "./TipPercentage/TipPercentage";
import { useFormContext } from "react-hook-form";
import { useTipContext } from "../../hooks/useTipContext";
import hasFilledFormFields from "../../utils/hasFilledFormFields";

export default function LeftSide() {
  const {
    formState: { isValid },
    getValues,
    reset,
  } = useFormContext();

  const { setCurrentCurrency, setIsShowRightSide } = useTipContext();
  const areFieldsFilled = hasFilledFormFields(getValues());

  const handleReset = () => {
    reset();
    setCurrentCurrency("");
    setIsShowRightSide(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1em",
        flex: 1,
        borderRadius: "1.5em",
        padding: "1em",
      }}
    >
      <Bill />
      <TipPercentage />
      <NumberOfPeople />
      <Box
        sx={{
          display: "flex",
          justifyContent: areFieldsFilled ? "space-between" : "center",
          marginTop: "1em",
        }}
      >
        {areFieldsFilled && (
          <Button variant="contained" onClick={handleReset}>
            Reset
          </Button>
        )}
        <Button type="submit" disabled={!isValid} variant="contained">
          calculate
        </Button>
      </Box>
    </Box>
  );
}
