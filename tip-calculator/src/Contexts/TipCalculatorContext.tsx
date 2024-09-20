import React, { createContext, useContext, ReactNode } from "react";
import { UseFormReturn } from "react-hook-form";
import { TipCalculatorFormData } from "../Schemas/Schema";

const FormContext = createContext<
  UseFormReturn<TipCalculatorFormData> | undefined
>(undefined);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};

interface FormProviderProps {
  children: ReactNode;
  value: UseFormReturn<TipCalculatorFormData>;
}

export const FormProvider: React.FC<FormProviderProps> = ({
  value,
  children,
}) => {
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
