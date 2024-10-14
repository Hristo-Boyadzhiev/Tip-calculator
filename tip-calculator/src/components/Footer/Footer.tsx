import { useIsSmallScreen } from "@/hooks/useIsSmallScreen";
import { Box, Link, Typography } from "@mui/material";

export default function Footer() {
  const isSmallScreen = useIsSmallScreen();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
        gap: isSmallScreen ? 0 : "0.2em",
        alignItems: isSmallScreen ? "center" : "flex-start",
      }}
    >
      <Typography>
        Challenge by{" "}
        <Link
          href="https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ textDecoration: "none" }}
        >
          Frontend Mentor
        </Link>
        .
      </Typography>
      <Typography> Coded by Hristo Boyadzhiev.</Typography>
    </Box>
  );
}
