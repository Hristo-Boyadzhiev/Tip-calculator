import React from "react";
import { TipContext } from "../contexts/TipContext"; // Уверете се, че пътят е правилен

export const useTipContext = () => {
  const context = React.useContext(TipContext);
  if (!context) {
    throw new Error("useTipContext must be used within a TipProvider");
  }
  return context;
};
