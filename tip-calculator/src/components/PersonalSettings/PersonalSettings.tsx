import { Box } from "@mui/material";
import ChangeMode from "./Mode/ChangeMode";
import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher";

export default function PersonalSettings() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "0.1em solid",
      }}
    >
      <ChangeMode />
      <LanguageSwitcher />
    </Box>
  );
}
