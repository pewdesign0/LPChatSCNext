"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: "light",
    primary: {
      main: "#6542E8",
      dark: "#31216E",
      light: "#8A6FF0",
    },
    secondary: {
      main: "#D95FBA",
    },
    info: {
      main: "#00C6FF",
    },
    background: {
      default: "#FAFAFA",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#19162C",
      secondary: "rgba(25, 22, 44, 0.62)",
    },
  },
  typography: {
    fontFamily: "Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif",
    h1: {
      fontFamily: "Outfit, Inter, sans-serif",
      fontWeight: 900,
    },
    h2: {
      fontFamily: "Outfit, Inter, sans-serif",
      fontWeight: 800,
    },
    button: {
      fontWeight: 700,
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 12,
  },
});

export default theme;
