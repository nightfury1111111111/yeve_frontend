import { ThemeContext } from "@src/context/useThemeContext";
import { useContext } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { userRoutes } from "./routes";

const router = createBrowserRouter(userRoutes);

function App() {
  const { themeConfig } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={themeConfig}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
