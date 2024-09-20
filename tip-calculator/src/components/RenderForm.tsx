import { Box } from "@mui/material";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";

export default function RenderForm() {
  return (
    <Box
      sx={{
        display: "flex",
        width: 1000,
        height: 500,
        background: "white",
        borderRadius: "1.5em",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "2em",
          margin: "2em",
          flex: 1,
        }}
      >
        <LeftSide />
        <RightSide />
      </Box>
    </Box>
  );
}
