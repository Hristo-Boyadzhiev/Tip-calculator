import { useMediaQuery } from "@mui/material";

export function useIsSmallScreen(): boolean {
  const isSmallScreen = useMediaQuery("(max-width: 770px)");
  return isSmallScreen;
}
