import { StylesProvider } from "@mui/styles";
import React from "react";
import { theme } from "./theme";
import { Route, Routes } from "react-router-dom";
import { Faq } from "./pages/Faq";
import { Fullpage } from "./pages/FullPage";
import { Notice } from "./pages/Notice";
import { CssBaseline, ThemeProvider } from "@material-ui/core";

function App() {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Fullpage />} />
          <Route path="notice" element={<Notice />} />
          <Route path="faq" element={<Faq />} />
        </Routes>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
