import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { ColorModeContextValue } from "../interfaces/ColorModeContextValue";
import { dark, light } from "../plugins/muiTheme";

interface Children {
  children: React.ReactNode;
}

export const ColorModeContext = React.createContext<ColorModeContextValue>({
  toggleColorMode: () => {},
  mode: "light",
});

export default function ToggleColorMode({ children }: Children) {
  const [mode, setMode] = React.useState<"light" | "dark">("light");

  React.useEffect(() => {
    const savedMode =
      (localStorage.getItem("mode") as "light" | "dark") || "light";
    setMode(savedMode);
  }, []);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === "light" ? "dark" : "light";
          localStorage.setItem("mode", newMode);
          return newMode;
        });
      },
      mode,
    }),
    [mode]
  );

  const theme = React.useMemo(() => (mode === "light" ? light : dark), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
