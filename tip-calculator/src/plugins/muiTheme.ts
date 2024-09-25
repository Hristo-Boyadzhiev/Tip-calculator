import { PaletteColor, createTheme } from "@mui/material/styles";

export interface ExtendedTheme extends PaletteColor {
  palette: {
    mode?: string;
    primary: {
      main: string;
      900: string;
      800: string;
      700: string;
      600: string;
      500: string;
      400: string;
      300: string;
      200: string;
      100: string;
    };
    secondary: {
      main: string;
      900: string;
      800: string;
      700: string;
      600: string;
      500: string;
      400: string;
      300: string;
      200: string;
      100: string;
    };
    background: {
      default: string;
    };
    text: {
      primary: string;
    };
  };
}

export const light = createTheme({
  palette: {
    primary: {
      main: "hsl(183, 100%, 15%)", // Very dark cyan
      900: "hsl(186, 14%, 43%)", // Dark grayish cyan
      800: "hsl(184, 14%, 56%)", // Grayish cyan
      700: "hsl(185, 41%, 84%)", // Light grayish cyan
      600: "hsl(189, 41%, 97%)", // Very light grayish cyan
    },
    secondary: {
      main: "hsl(0, 0%, 100%)", // White
    },
    background: {
      default: "hsl(185, 41%, 84%)", // Light grayish cyan
    },
    text: {
      primary: "hsl(210, 30%, 12%)", // Dark grayish blue
    },
  },
  typography: {
    fontFamily: "Space Mono, Roboto",
  },
});

export const dark = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "hsl(168, 50%, 38%)", // Deep teal
      900: "hsl(168, 50%, 20%)", // Very dark teal
      800: "hsl(168, 50%, 30%)", // Dark teal
      700: "hsl(168, 50%, 38%)", // Medium teal
      600: "hsl(168, 50%, 48%)", // Light teal
      500: "hsl(168, 50%, 58%)", // Lighter teal
      400: "hsl(168, 50%, 68%)", // Soft teal
      300: "hsl(168, 50%, 78%)", // Very soft teal
      200: "hsl(168, 50%, 88%)", // Pale teal
      100: "hsl(168, 50%, 95%)", // Very pale teal
    },
    secondary: {
      main: "hsl(210, 15%, 25%)", // Dark gray
      900: "hsl(210, 15%, 25%)", // Dark gray
      800: "hsl(210, 15%, 35%)", // Medium dark gray
      700: "hsl(210, 15%, 45%)", // Medium gray
      600: "hsl(210, 15%, 55%)", // Light gray
      500: "hsl(210, 15%, 65%)", // Lighter gray
      400: "hsl(210, 15%, 75%)", // Very light gray
      300: "hsl(210, 15%, 85%)", // Pale gray
      200: "hsl(210, 15%, 90%)", // Very pale gray
      100: "hsl(210, 15%, 95%)", // Almost white
    },
    background: {
      default: "hsl(210, 20%, 10%)", // Almost black
    },
    text: {
      primary: "hsl(0, 0%, 100%)", // White
    },
  },
  typography: {
    fontFamily: "Space Mono, Roboto",
  },
});
