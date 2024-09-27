import Box from "@mui/material/Box";
import { FormProvider as RHFProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTipContext } from "../hooks/useTipContext";
import { TipCalculatorFormData, tipCalculatorSchema } from "../Schemas/Schema";
import FormContent from "./FormContent/FormContent";
import Result from "./Result/Result";
import PersonalSettings from "./PersonalSettings/PersonalSettings";

export default function TipCalculator() {
  const methods = useForm<TipCalculatorFormData>({
    resolver: yupResolver(tipCalculatorSchema),
    mode: "onChange", //validation on change
  });

  const { handleFormSubmit, isShowResult } = useTipContext();

  //RHFProvider - Global context for react-hook-form methods
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2em",
          backgroundColor: "secondary.main",
          borderRadius: "1.5em",
          padding: "0.5em 2em 2em 2em",
        }}
      >
        <PersonalSettings />

        <Box
          sx={{
            display: "flex",
            gap: "2em",
          }}
        >
          <RHFProvider {...methods}>
            <Box
              component="form"
              onSubmit={methods.handleSubmit(handleFormSubmit)}
            >
              <FormContent />
            </Box>
          </RHFProvider>
          {isShowResult && <Result />}
        </Box>
      </Box>
    </Box>
  );
}
