import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { PaletteOptions } from '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    customColors: {
      backgroundDark: string;
      backgroundSemiDark: string;
      backgroundLight: string;
      textWhite: string;
      textLight: string;
      textPaleBlue: string;
    };
  }
  interface PaletteOptions {
    customColors?: {
      backgroundDark?: string;
      backgroundSemiDark?: string;
      backgroundLight?: string;
      textLight?: string;
      textPaleBlue?: string;
      textWhite?: string;
    };
  }
}

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#5D87FF",
    },
    secondary: {
      main: "#49BEFF",
    },
    error: {
      main: red.A400,
    },
    customColors: {
      backgroundDark: "#040A1E",
      backgroundSemiDark: "#081028",
      backgroundLight: "#0B1739",
      textWhite: "#FFFFFF",
      textLight: "#F2F2F2",
      textPaleBlue: "#AEB9E1"
    },
    background: {
      default: "#F5F5F5",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#2A3547",
      secondary: "#5A6A85",
    }
  },
});

export default theme;
