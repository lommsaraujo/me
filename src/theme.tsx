import { PaletteColor, createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { colors } from "@mui/material";

const tools = createTheme();
// white
const primary = tools.palette.augmentColor({ color: { main: "#FFFFFF" } });
// light purple
const secondary = tools.palette.augmentColor({ color: { main: "#E4C1F9" } });
// light blue
const highlight = tools.palette.augmentColor({ color: { main: "#5aa9e6" } });
// dark purple
const font = tools.palette.augmentColor({ color: { main: "#b388eb" } });

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary,
    secondary,
    highlight,
    font,
    error: {
      main: red.A400,
    },
    background: {
      default: primary.main,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: primary.main,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "League Spartan",
          color: "#b388eb",
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: primary.dark,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "League Spartan",
          textTransform: "initial",
          fontWeight: "bold",
          color: "#5aa9e6",
          "&:hover": {
            color: "#FF99C8",
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            color: "#FF99C8",
          },
        },
      },
    },
  },
});

export default theme;

declare module "@mui/material/styles" {
  interface Palette {
    highlight: PaletteColor;
    font: PaletteColor;
  }
  interface PaletteOptions {
    highlight?: PaletteOptions["primary"];
    font?: PaletteOptions["primary"];
  }
}
