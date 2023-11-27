import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./common.css";
import { CustomThemeProvider } from "./context/useThemeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <CustomThemeProvider>
    <App />
  </CustomThemeProvider>
);
