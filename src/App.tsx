import { StylesProvider } from "@mui/styles";
import { useState } from "react";
import { theme } from "./theme";
import { Route, Routes } from "react-router-dom";
import { FaqPage } from "./pages/FaqPage";
import { HomePage } from "./pages/HomePage";
import { NoticePage } from "./pages/NoticePage";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { NavBar } from "./components/commons/NavBar";
import { MenuContainer } from "./components/commons/MenuContainer";
import { AboutUsPage } from "./pages/AboutUsPage";
import { ContactUsPage } from "./pages/ContactUsPage";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  const [isToggle, setIsToggle] = useState(false);
  const handleIsToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar isToggle={isToggle} handleIsToggle={handleIsToggle} />
        <MenuContainer isToggle={isToggle} handleIsToggle={handleIsToggle} />
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/notice" element={<NoticePage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
          </Routes>
        </QueryClientProvider>
        {/* <AppBar /> */}
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
