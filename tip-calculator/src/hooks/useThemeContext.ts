import * as React from "react";
import { ColorModeContext } from "../contexts/Theme";
import { ColorModeContextValue } from "../interfaces/ColorModeContextValue";

export const useThemeContext = (): ColorModeContextValue => {
  const context = React.useContext(ColorModeContext);

  if (!context) {
    throw new Error("useThemeContext must be used within a ToggleColorMode");
  }

  return context;
};
