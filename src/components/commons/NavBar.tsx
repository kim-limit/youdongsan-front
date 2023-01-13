import { makeStyles } from "@mui/styles";
import React from "react";
import { ButtonContainer } from "./ButtonContainer";
import { MainLogo } from "./MainLogo";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    top: "0px",
    zIndex: "100",
    height: "120px",
    width: "100vw",
    boxSizing: "border-box",
  },
  inner: {
    display: "flex",
    maxWidth: "1240px",
    margin: "0 auto",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

interface INavBarProps {
  path: string;
}
export const NavBar = ({ path }: INavBarProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.inner}>
        <MainLogo />
        <ButtonContainer path={path} />
      </div>
    </div>
  );
};
