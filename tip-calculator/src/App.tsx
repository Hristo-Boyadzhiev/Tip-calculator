import Box from "@mui/material/Box";
import "./App.css";
import {
  FormProvider as RHFProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { tipCalculatorSchema } from "./Schemas/Schema";
import RenderForm from "./components/RenderForm";

export default function App() {
  // const { control, handleSubmit, formState, reset, setValue } = useForm<any>({
  //   resolver: yupResolver(tipCalculatorSchema),
  // });

  const methods = useForm<any>({
    resolver: yupResolver(tipCalculatorSchema),
  });

  const handleFormSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
  };
  //Можеш да достъпваш методите на react-hook-form директно чрез вградения контекст на RHFProvider,
  //без да имаш нужда от твоя собствен контекст.
  return (
    //Global context for react-hook-form methods
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
