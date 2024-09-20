import * as yup from "yup";

export const tipCalculatorSchema = yup.object({
  currency: yup.string().required("Please, put a currency"),
  billValue: yup.string().required("Please, put a amount"),
  NumberOfPeople: yup.string().required("Please, put a number of people"),
});

export interface TipCalculatorFormData
  extends yup.InferType<typeof tipCalculatorSchema> {
  currency: string;
  billValue: string;
  NumberOfPeople: string;
}
