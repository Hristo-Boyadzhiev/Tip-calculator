import React, { createContext, ReactNode } from "react";
import { SubmitHandler } from "react-hook-form";
import { TipCalculatorFormData } from "../Schemas/Schema";
import calculateTipPerPerson from "@/utils/calculateTipPerPerson";
import calculateTotalPerPerson from "@/utils/calculateTotalPerPerson";

interface TipContextType {
  currentCurrency: string | undefined;
  setCurrentCurrency: (value: string) => void;
  isShowResult: boolean;
  setIsShowResult: (value: boolean) => void;
  handleFormSubmit: SubmitHandler<TipCalculatorFormData>;
  tipPerPerson: number | undefined;
  totalPerPerson: number | undefined;
}

export const TipContext = createContext<TipContextType | undefined>(undefined);

export const TipProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentCurrency, setCurrentCurrency] = React.useState<
    string | undefined
  >(undefined);
  const [isShowResult, setIsShowResult] = React.useState<boolean>(false);
  const [tipPerPerson, setTipPerPerson] = React.useState<number | undefined>(
    undefined
  );
  const [totalPerPerson, setTotalPerPerson] = React.useState<
    number | undefined
  >(undefined);

  const handleFormSubmit: SubmitHandler<TipCalculatorFormData> = (data) => {
    setIsShowResult(true);
    setTipPerPerson(calculateTipPerPerson(data));
    setTotalPerPerson(calculateTotalPerPerson(data));
  };

  return (
    <TipContext.Provider
      value={{
        currentCurrency,
        setCurrentCurrency,
        isShowResult,
        setIsShowResult,
        handleFormSubmit,
        tipPerPerson,
        totalPerPerson,
      }}
    >
      {children}
    </TipContext.Provider>
  );
};
