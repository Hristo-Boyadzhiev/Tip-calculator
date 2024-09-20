import Box from "@mui/material/Box";
import "./App.css";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
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

  return (
    <FormProvider {...methods}>
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
    </FormProvider>
  );
}

// import Box from "@mui/material/Box";
// import "./App.css";
// import LeftSide from "./components/LeftSide/LeftSide";
// import RightSide from "./components/RightSide/RightSide";
// import { SubmitHandler, useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { tipCalculatorSchema } from "./Schemas/Schema";
// import { Button } from "@mui/material";

// export default function App() {
//   const { control, handleSubmit, formState, reset, setValue } = useForm<any>({
//     resolver: yupResolver(tipCalculatorSchema),
//   });

//   const handleFormSubmit: SubmitHandler<any> = (data, event) => {
//     console.log("da");
//     console.log(data);
//   };

//   return (
//     <Box
//       component="form"
//       onSubmit={handleSubmit(handleFormSubmit)}
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//       }}
//     >
//       <Box
//         sx={{
//           display: "flex",
//           width: 1000,
//           height: 500,
//           background: "white",
//           borderRadius: "1.5em",
//         }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             gap: "2em",
//             margin: "2em",
//             flex: 1,
//           }}
//         >
//           <LeftSide />
//           <RightSide />
//         </Box>
//       </Box>
//     </Box>
//   );
// }
