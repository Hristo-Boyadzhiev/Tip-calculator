import { Box } from "@mui/material";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";
import { useTipContext } from "../hooks/useTipContext";

export default function RenderForm() {
  const { isShowRightSide } = useTipContext();
  return (
    <Box
      sx={{
        display: "flex",
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
        {isShowRightSide && <RightSide />}
      </Box>
    </Box>
  );
}
