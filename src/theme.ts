import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": {
          fontFamily: "Chosunilbo_myungjo",
          src: `url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Chosunilbo_myungjo.woff")
            format("woff")`,
          fontWeight: "normal",
          fontStyle: "normal",
        },
        body: {
          backgroundColor: "#282828",
          color: "white",
          fontFamily: "Chosunilbo_myungjo",
        },
      },
    },
  },
});
