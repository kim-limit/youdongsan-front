import { makeStyles } from "@mui/styles";
import React from "react";
import { ButtonContainer } from "./ButtonContainer";
import { MainLogo } from "./MainLogo";

const useStyles = makeStyles({
  inner: {
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  root: {
    position: "fixed",
    top: "0px",
    zIndex: "100",
    height: "15vh",
    width: "100vw",
    padding: "0 200px 0 200px",
    boxSizing: "border-box",
  },
});
export const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.inner}>
        <MainLogo />
        <ButtonContainer />
      </div>
    </div>
  );
};
