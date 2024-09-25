import { Box } from "@mui/material";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";
import { useTipContext } from "../hooks/useTipContext";
import ChangeMode from "./LeftSide/Mode/ChangeMode";

export default function RenderForm() {
  const { isShowRightSide } = useTipContext();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "secondary.main",
        borderRadius: "1.5em",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "0.1em solid",
          margin: "0 2em",
        }}
      >
        <ChangeMode />
        {/* Add flags to change the language */}
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "2em",
          margin: "1em 2em 2em 2em",
          flex: 1,
        }}
      >
        <LeftSide />
        {isShowRightSide && <RightSide />}
      </Box>
    </Box>
  );
}

// import { Box } from "@mui/material";
// import LeftSide from "./LeftSide/LeftSide";
// import RightSide from "./RightSide/RightSide";
// import { useTipContext } from "../hooks/useTipContext";
// // import ChangeMode from "./LeftSide/Mode/ChangeMode";

// export default function RenderForm() {
//   const { isShowRightSide } = useTipContext();
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         backgroundColor: "secondary.main",
//         borderRadius: "1.5em",
//       }}
//     >
//       {/* <ChangeMode /> */}
//       <Box
//         sx={{
//           display: "flex",
//           gap: "2em",
//           margin: "2em",
//           flex: 1,
//         }}
//       >
//         <LeftSide />
//         {isShowRightSide && <RightSide />}
//       </Box>
//     </Box>
//   );
// }
