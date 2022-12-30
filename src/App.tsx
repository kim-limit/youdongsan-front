import { CssBaseline } from "@material-ui/core";
import { StylesProvider } from "@mui/styles";
import React from "react";
import { NavBar } from "./components/commons/NavBar";
import { Fullpage } from "./components/FullPage";

function App() {
  return (
    <StylesProvider injectFirst>
      <NavBar />
      <Fullpage />
    </StylesProvider>
  );
}

export default App;
