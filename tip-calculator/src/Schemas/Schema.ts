import * as yup from "yup";

export const tipCalculatorSchema = yup.object({
  currency: yup.string().required("errors.currency.required"),
  billAmount: yup
    .number()
    .required("errors.billAmount.required")
    .typeError("errors.billAmount.typeError")
    .min(1, "errors.billAmount.min"),
  tipPercentage: yup
    .number()
    .required("errors.tipPercentage.required")
    .typeError("errors.tipPercentage.typeError")
    .min(1, "errors.tipPercentage.min"),
  numberOfPeople: yup
    .number()
    .required("errors.numberOfPeople.required")
    .typeError("errors.numberOfPeople.typeError")
    .min(1, "errors.numberOfPeople.min"),
});

export interface TipCalculatorFormData
  extends yup.InferType<typeof tipCalculatorSchema> {
  currency: string;
  billAmount: number;
  tipPercentage: number;
  numberOfPeople: number;
}
