import { HasFilledFormFieldsProps } from "@/interfaces/HasFilledFormFieldsProps";

export default function hasFilledFormFields(values: HasFilledFormFieldsProps) {
  return Object.values(values).some((value) => value !== "");
}
