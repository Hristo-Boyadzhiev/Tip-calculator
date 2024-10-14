import { FormProvider as RHFProvider, useForm } from "react-hook-form";
import { Box } from "@mui/material";
import PersonalSettings from "./PersonalSettings/PersonalSettings";
import FormContent from "./FormContent/FormContent";
import Result from "./Result/Result";
import { useTipContext } from "@/hooks/useTipContext";
import { useIsSmallScreen } from "@/hooks/useIsSmallScreen";
import { TipCalculatorFormData, tipCalculatorSchema } from "@/Schemas/Schema";
import { yupResolver } from "@hookform/resolvers/yup";

export default function TipCalculatorContent() {
  const methods = useForm<TipCalculatorFormData>({
    resolver: yupResolver(tipCalculatorSchema),
    mode: "onChange", //validation on change
  });

  const { handleFormSubmit, isShowResult } = useTipContext();
  const isSmallScreen = useIsSmallScreen();

  //RHFProvider - Global context for react-hook-form methods
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2em",
          backgroundColor: "secondary.main",
          borderRadius: isSmallScreen ? 0 : "1.5em",
          padding: "0.5em 2em 2em 2em",
        }}
      >
        <PersonalSettings />

        <Box
          sx={{
            display: "flex",
            flexDirection: isSmallScreen ? "column" : "row",
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
