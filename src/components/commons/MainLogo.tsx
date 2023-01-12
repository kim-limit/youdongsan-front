import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  root: {
    height: "90px",
    width: "300px",
    background: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inner: {
    background: "black",
    width: "253px",
    height: "90%",
    lineHeight: "100%",
    color: "white",
    fontSize: "80px",
    fontWeight: "bold",
    letterSpacing: "15px",
  },
});

export const MainLogo = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.inner}>{"유동산"}</Box>
    </Box>
  );
};
