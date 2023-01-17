import { createMuiTheme } from "@material-ui/core";
import { createTheme } from "@mui/material/styles";

export const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: "#404040",
          color: "white",
        },
      },
    },
  },
  // palette: {
  //   primary: {
  //     main: "white",
  //   },
  //   secondary: {
  //     main: "#4EC5D6",
  //   },
  // },
  // typography: {
  //   fontFamily: [`"Poppins, sans-serif"`].join(","),
  // },
});
