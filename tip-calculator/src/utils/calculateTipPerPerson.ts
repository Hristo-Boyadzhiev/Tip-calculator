import { TipCalculatorFormData } from "@/Schemas/Schema";

export default function calculateTipPerPerson(data: TipCalculatorFormData) {
  const totalTip = data.billAmount * (data.tipPercentage / 100);
  const calculateTipPerson = totalTip / data.numberOfPeople;
  return parseFloat(calculateTipPerson.toFixed(2));
}
