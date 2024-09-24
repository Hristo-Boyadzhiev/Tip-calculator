import React, { createContext, ReactNode } from "react";
import { SubmitHandler } from "react-hook-form";
import { TipCalculatorFormData } from "../Schemas/Schema";

interface TipContextType {
  currentCurrency: string | undefined;
  setCurrentCurrency: (value: string) => void;
  isShowRightSide: boolean;
  setIsShowRightSide: (value: boolean) => void;
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
  const [isShowRightSide, setIsShowRightSide] = React.useState<boolean>(false);
  const [tipPerPerson, setTipPerPerson] = React.useState<number | undefined>(
    undefined
  );
  const [totalPerPerson, setTotalPerPerson] = React.useState<
    number | undefined
  >(undefined);

  const handleFormSubmit: SubmitHandler<TipCalculatorFormData> = (data) => {
    console.log(data);
    setIsShowRightSide(true);
    calculateTipPerPerson();
    calculateTotalPerPerson();

    function calculateTipPerPerson() {
      const totalTip = data.billAmount * (data.tipPercentage / 100);
      const calculateTipPerson = totalTip / data.numberOfPeople;
      setTipPerPerson(parseFloat(calculateTipPerson.toFixed(2)));
    }

    function calculateTotalPerPerson() {
      const calculateTotalPerson =
        (data.billAmount * (1 + data.tipPercentage / 100)) /
        data.numberOfPeople;
      setTotalPerPerson(parseFloat(calculateTotalPerson.toFixed(2)));
    }
  };

  return (
    <TipContext.Provider
      value={{
        currentCurrency,
        setCurrentCurrency,
        isShowRightSide,
        setIsShowRightSide,
        handleFormSubmit,
        tipPerPerson,
        totalPerPerson,
      }}
    >
      {children}
    </TipContext.Provider>
  );
};
