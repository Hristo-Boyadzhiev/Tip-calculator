import TipCalculator from "./components/TipCalculator";
import { TipProvider } from "./contexts/TipContext";
import { ThemeProvider } from "@mui/material/styles";
import { light } from "./plugins/muiTheme";
import { CssBaseline } from "@mui/material";
import { GlobalStyle } from "./GlobalStyle";

export default function App() {
  return (
    <ThemeProvider theme={light}>
      <CssBaseline />
      <GlobalStyle />
      <TipProvider>
        <TipCalculator />;
      </TipProvider>
    </ThemeProvider>
  );
}
