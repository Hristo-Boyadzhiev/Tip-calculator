import { Box, Button } from "@mui/material";
import Bill from "./Bill/Bill";
import NumberOfPeople from "./NumberOfPeople/NumberOfPeople";
import TipPercentage from "./TipPercentage/TipPercentage";
import { useFormContext } from "react-hook-form";
import { useTipContext } from "../../hooks/useTipContext";
import hasFilledFormFields from "../../utils/hasFilledFormFields";
import { useTranslation } from "react-i18next";

export default function FormContent() {
  const { t: translate } = useTranslation();
  const {
    formState: { isValid },
    getValues,
    reset,
  } = useFormContext();

  const { setCurrentCurrency, setIsShowResult } = useTipContext();
  const areFieldsFilled = hasFilledFormFields(getValues());

  const handleReset = () => {
    reset();
    setCurrentCurrency("");
    setIsShowResult(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1em",
        padding: "1em 1em 0 1em",
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
            {translate("buttons.reset")}
          </Button>
        )}
        <Button type="submit" disabled={!isValid} variant="contained">
          {translate("buttons.calculate")}
        </Button>
      </Box>
    </Box>
  );
}
