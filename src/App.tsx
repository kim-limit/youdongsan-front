import { StylesProvider } from "@mui/styles";
import { useState } from "react";
import { theme } from "./theme";
import { Route, Routes } from "react-router-dom";
import { FaqPage } from "./pages/FaqPage";
import { HomePage } from "./pages/HomePage";
import { NoticePage } from "./pages/NoticePage";
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
          <Route path="/" element={<HomePage />} />
          <Route path="notice" element={<NoticePage />} />
          <Route path="faq" element={<FaqPage />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
