import { FieldValues } from "react-hook-form";

export default function hasFilledFormFields(values: FieldValues) {
  if (
    values.currency ||
    values.billAmount ||
    values.tipPercentage ||
    values.numberOfPeople
  ) {
    return true;
  } else {
    return false;
  }
}
