import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "@mui/material/styles";
import { useThemeContext } from "../../../hooks/useThemeContext";
import { Box, IconButton } from "@mui/material";
import { ExtendedTheme } from "@/plugins/muiTheme";

export default function ChangeMode() {
  const theme = useTheme<ExtendedTheme>();
  const { toggleColorMode } = useThemeContext();
  return (
    <Box>
      <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  );
}
