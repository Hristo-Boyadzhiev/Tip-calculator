import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "@mui/material/styles";
import { useThemeContext } from "../../../hooks/useThemeContext";
import { Box, IconButton } from "@mui/material";

export default function ChangeMode() {
  const theme = useTheme();
  const { toggleColorMode } = useThemeContext();
  return (
    <Box>
      {theme.palette.mode} mode
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
