import { TipCalculatorFormData } from "@/Schemas/Schema";

export default function calculateTotalPerPerson(data: TipCalculatorFormData) {
  const calculateTotalPerson =
    (data.billAmount * (1 + data.tipPercentage / 100)) / data.numberOfPeople;
  return parseFloat(calculateTotalPerson.toFixed(2));
}
