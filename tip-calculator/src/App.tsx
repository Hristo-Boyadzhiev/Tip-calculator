import TipCalculator from "./components/TipCalculator";
import { TipProvider } from "./contexts/TipContext";
import "./App.css";

export default function App() {
  return (
    <TipProvider>
      <TipCalculator />;
    </TipProvider>
  );
}
