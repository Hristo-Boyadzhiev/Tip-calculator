import Box from "@mui/material/Box";
import { FormProvider as RHFProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTipContext } from "../hooks/useTipContext";
import { TipCalculatorFormData, tipCalculatorSchema } from "../Schemas/Schema";
import RenderForm from "./RenderForm";

export default function TipCalculator() {
  const methods = useForm<TipCalculatorFormData>({
    resolver: yupResolver(tipCalculatorSchema),
    mode: "onChange", //validation on change
  });

  const { handleFormSubmit } = useTipContext();

  //RHFProvider - Global context for react-hook-form methods
  return (
    <RHFProvider {...methods}>
      <Box
        component="form"
        onSubmit={methods.handleSubmit(handleFormSubmit)}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <RenderForm />
      </Box>
    </RHFProvider>
  );
}
