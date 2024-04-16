import { ThemeProvider, createTheme } from "@mui/material";
import { getDesignTokens } from "./Theme/Theme";
import { useMemo, useState } from "react";
import { Outlet } from "react-router-dom";

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
      </ThemeProvider>
    </div>
  );
}

export default App;
