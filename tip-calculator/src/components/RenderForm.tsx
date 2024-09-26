import { Box } from "@mui/material";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";
import { useTipContext } from "../hooks/useTipContext";
import ChangeMode from "./LeftSide/Mode/ChangeMode";
import bulgarian_flag from "../assets/bulgaria-flag-icon.png";

export default function RenderForm() {
  const { isShowRightSide } = useTipContext();

  function handleLanguageSwitch() {
    console.log("clicked");
  }

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
        <Box
          component="img"
          src={bulgarian_flag}
          alt="bulgarian_flag"
          sx={{
            width: "35px",
            height: "auto",
            marginRight: "1.5em",
            boxShadow: "0px 0px 8px 0px #00000040",
          }}
          onClick={handleLanguageSwitch}
        />
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
