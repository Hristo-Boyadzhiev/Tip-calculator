import * as yup from "yup";

export const tipCalculatorSchema = yup.object({
  currency: yup.string().required("Please, put a currency"),
  billAmount: yup
    .number()
    .typeError("Bill amount must be a number")
    .min(0, "Bill amount must be at least 0")
    .required("Please, put a bill amount"),
  tipPercentage: yup
    .number()
    .typeError("Tip percentage must be a number")
    .min(1, "Tip percentage must be at least 1%")
    .required("Please, put a tip percentage"),
  numberOfPeople: yup
    .number()
    .typeError("Number of people must be a number")
    .min(1, "Number of people must be at least 1")
    .required("Please, put a number of people"),
});

export interface TipCalculatorFormData
  extends yup.InferType<typeof tipCalculatorSchema> {
  currency: string;
  billAmount: number;
  tipPercentage: number;
  numberOfPeople: number;
}
