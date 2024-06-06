import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider as MainThemeProvider } from "./context/ThemeContext";
import CustomThemeProvider from "./context/ThemeProvider";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./App.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainThemeProvider>
      <CustomThemeProvider>
        <HelmetProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </HelmetProvider>
      </CustomThemeProvider>
    </MainThemeProvider>
  </React.StrictMode>
);
