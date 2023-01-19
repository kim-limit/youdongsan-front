import { StylesProvider } from "@mui/styles";
import React, { useState } from "react";
import { theme } from "./theme";
import { Route, Routes } from "react-router-dom";
import { Faq } from "./pages/Faq";
import { Fullpage } from "./pages/FullPage";
import { Notice } from "./pages/Notice";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { NavBar } from "./components/commons/NavBar";
import { Footer } from "./components/commons/Footer";
import { MenuContainer } from "./components/commons/MenuContainer";

function App() {
  const [isToggle, setIsToggle] = useState(false);
  const toggleHandler = () => {
    setIsToggle(!isToggle);
  };
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar isToggle={isToggle} toggleHandler={toggleHandler} />
        <MenuContainer isToggle={isToggle} text={"HOME"} />
        <Routes>
          <Route path="/" element={<Fullpage />} />
          <Route path="notice" element={<Notice />} />
          <Route path="faq" element={<Faq />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
