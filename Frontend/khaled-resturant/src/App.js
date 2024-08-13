import { ThemeProvider, createTheme } from "@mui/material";
import { getDesignTokens } from "./Theme/Theme";
import { useMemo, useState } from "react";
import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  const [mode] = useState(
    localStorage.getItem("currentTheme")
      ? localStorage.getItem("currentTheme")
      : "dark"
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Outlet />
        <ToastContainer />
      </ThemeProvider>
    </div>
  );
}

export default App;
