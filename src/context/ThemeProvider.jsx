import React from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import { useTheme } from "./ThemeContext";

const CustomThemeProvider = ({ children }) => {
  const { theme } = useTheme();

  let themeConfig = createTheme({
    typography: {
      fontFamily: "Fira Mono, monospace",
      fontSize: 16,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: () => ({
          a: {
            textDecoration: "none",
          },
        }),
      },
      MuiTypography: {
        styleOverrides: {
          h1: {
            fontFamily: "Montserrat, sans-serif",
          },
          h2: {
            fontFamily: "Montserrat, sans-serif",
          },
          h3: {
            fontFamily: "Montserrat, sans-serif",
          },
          h4: {
            fontFamily: "Montserrat, sans-serif",
          },
          h5: {
            fontFamily: "Montserrat, sans-serif",
          },
          h6: {
            fontFamily: "Montserrat, sans-serif",
          },
        },
      },
    },
    palette: {
      mode: theme,
      primary: {
        main: "#f3f3f3",
      },
    },
  });

  themeConfig = responsiveFontSizes(themeConfig);

  return <MuiThemeProvider theme={themeConfig}>{children}</MuiThemeProvider>;
};

export default CustomThemeProvider;
