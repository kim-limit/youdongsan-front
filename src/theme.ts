import { createMuiTheme } from "@material-ui/core";
import { createTheme } from "@mui/material/styles";

export const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: "#404040",
          // fontFamily: "Poppins",
        },
      },
    },
  },
  //   palette: {
  //     primary: {
  //       main: "#404040",
  //     },
  //     secondary: {
  //       main: "#4EC5D6",
  //     },
  //   },
  //   typography: {
  //     fontFamily: [`"Poppins, sans-serif"`].join(","),
  //   },
});
