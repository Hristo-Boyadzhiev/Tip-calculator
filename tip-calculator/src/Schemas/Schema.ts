import * as yup from "yup";

export const tipCalculatorSchema = yup.object({
  currency: yup.string().required("Please, put a currency"),
  billValue: yup.string().required("Please, put a bill"),
  NumberOfPeople: yup.string().required("Please, put a bill"),
});

export interface TipCalculatorFormData
  extends yup.InferType<typeof tipCalculatorSchema> {
  systemNumber: string;
  billValue: string;
  NumberOfPeople: string;
}
