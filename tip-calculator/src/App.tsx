import TipCalculator from "./components/TipCalculator";
import { TipProvider } from "./contexts/TipContext";
import { CssBaseline } from "@mui/material";
import ToggleColorMode from "./contexts/Theme";

export default function App() {
  return (
    <ToggleColorMode>
      <CssBaseline />
      <TipProvider>
        <TipCalculator />
      </TipProvider>
    </ToggleColorMode>
  );
}
